// Security checks: what the page may load and talk to, names on the boards, the write to the
// shared board, the database rules (read as text), and the Googy worker's sign-in check.
// As in every suite, nothing reaches the network or the real database.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { open, ROOT } = require('./lib.js');

let fails = 0;
const check = (name, ok, info) => { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (info !== undefined ? '  ' + JSON.stringify(info) : '')); };
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');

// ---------- the files, read as text ----------
function staticChecks() {
  const html = read('index.html');

  // nothing is loaded from another site
  const outside = [...html.matchAll(/<(script|link|img|iframe|source|audio|video|embed|object)\b[^>]*?\b(?:src|href|data)\s*=\s*["']?\s*((?:https?:)?\/\/[^"'\s>]+)/gi)].map(m => m[1] + ' ' + m[2]);
  check('the page loads no script, style, font, image or frame from another site', outside.length === 0, outside);

  // the policy
  const meta = html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)">/);
  const csp = {};
  if (meta) meta[1].split(';').forEach(part => { const [name, ...values] = part.trim().split(/\s+/); if (name) csp[name] = values; });
  const firstScript = html.search(/<script\b/i);
  check('a Content-Security-Policy is set before any script of the page', !!meta && meta.index < firstScript, meta ? Object.keys(csp) : null);
  const all = Object.values(csp).flat();
  check('the policy: own files by default, no eval, no plug-ins, no foreign <base>, no wildcard source',
    (csp['default-src'] || []).join() === "'self'" && !all.includes("'unsafe-eval'") && !all.includes('*') && !all.includes('https:') && !all.includes('http:') &&
    (csp['object-src'] || []).join() === "'none'" && (csp['base-uri'] || []).join() === "'self'" && (csp['form-action'] || []).join() === "'self'", csp);
  const connect = csp['connect-src'] || [];
  check('the policy lets the Firebase SDK through (sign-in, the database by web socket and by its fallback)',
    ['https://identitytoolkit.googleapis.com', 'https://securetoken.googleapis.com', 'https://*.firebaseio.com', 'wss://*.firebaseio.com'].every(h => connect.includes(h)) &&
    (csp['script-src'] || []).includes('https://*.firebaseio.com') && (csp['frame-src'] || []).includes('https://*.firebaseio.com'), { connect, script: csp['script-src'], frame: csp['frame-src'] });
  const googy = (html.match(/const GOOGY_API_URL = '([^']*)'/) || [])[1];
  check('the Googy worker, when it is switched on, is in the policy\'s connect-src', googy === '' || (googy !== undefined && connect.includes(new URL(googy).origin)), { googy });

  // the Firebase SDK: the site's own files, the ones recorded
  const tags = [...html.matchAll(/<script defer src="(firebase\/[^"]+)"><\/script>/g)].map(m => m[1]);
  const table = Object.fromEntries([...read('firebase/README.md').matchAll(/\| `([^`]+\.js)` \| `([0-9a-f]{64})` \|/g)].map(m => [m[1], m[2]]));
  const sums = tags.map(t => [path.basename(t), fs.existsSync(path.join(ROOT, t)) ? crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT, t))).digest('hex') : 'missing']);
  check('the Firebase SDK is three files of the site, each with the hash recorded in firebase/README.md',
    tags.length === 3 && sums.every(([name, sum]) => table[name] === sum), { tags, sums: sums.map(([n, s]) => n + ' ' + s.slice(0, 12)) });

  // the service worker keeps only the site's own files
  const sw = read('sw.js');
  check('the service worker keeps and serves only files of its own site', !/gstatic|opaque/.test(sw) && /url\.origin === self\.location\.origin\) \{/.test(sw));

  // the database rules, as text (they are not run here)
  const rules = JSON.parse(read('firebase-rules.json')).rules;
  const open = [], writes = [];
  (function walk(node, where) {
    for (const [key, value] of Object.entries(node)) {
      if (key === '.read' && value === true) open.push(where + '/.read');
      if (key === '.write') { writes.push([where, value]); if (value === true) open.push(where + '/.write'); }
      if (value && typeof value === 'object' && !Array.isArray(value)) walk(value, where + '/' + key);
    }
  })(rules, '');
  check('rules: only the boards can be read by everyone, and every write asks for a signed-in player',
    open.join() === '/boards/.read' && writes.length >= 6 && writes.every(([, rule]) => typeof rule === 'string' && rule.startsWith('auth != null')), { open, writes: writes.length });
  const entry = rules.boards.$land.$game.$entry;
  check('rules: a row on a board is the player\'s own, only gets better, and needs the rate stamp and its own path named in the same update',
    /\$entry\.beginsWith\(auth\.uid \+ '_'\)/.test(entry['.write']) && /newData\.child\('k'\)\.val\(\) > data\.child\('k'\)\.val\(\)/.test(entry['.write']) &&
    /child\('scoreRate'\)\.child\(auth\.uid\)\.val\(\) == now/.test(entry['.write']) &&
    entry['.write'].endsWith("child('scoreRow').child(auth.uid).val() == $land + '/' + $game + '/' + $entry"));
  check('rules: the rate stamp cannot be deleted (deleting it would undo the 5 seconds between results)',
    /newData\.exists\(\)/.test(rules.scoreRate.$uid['.write']) && /now - data\.val\(\) >= 5000/.test(rules.scoreRate.$uid['.validate']));
  check('rules: the analytics cannot be read, and take no field they do not know', rules.analytics['.read'] === false &&
    rules.analytics.sessions.$sid.meta.$other['.validate'] === false && rules.analytics.sessions.$sid.events.$eventId.$other['.validate'] === false);
  const nameRule = entry.name['.validate'];
  const refused = [...nameRule.matchAll(/!newData\.val\(\)\.matches\(\/(.+?)\/\)/g)].map(m => new RegExp(m[1]));
  check('rules: a name is 1 to 20 characters with two things refused (link and address characters; five digits)', refused.length === 2 && /length <= 20/.test(nameRule), refused.map(String));
  return { nameRefused: refused };
}

// ---------- the page ----------
const NASTY = [
  '<img src=x onerror=alert(1)>', '<script>alert(1)</script>', 'https://evil.example/x', 't.me/evil_chat', 'wa.me/972541234567', 'me@mail.com',
  'call 054-1234567', '0541234567', '‮evil‬', 'a​b⁦c⁩d﻿', '  many     spaces  ', 'x'.repeat(60), 'אבגדהוזחטיכלמנסעפצקרשת', '👑'.repeat(15), '\u0000\u0007bell', '....', '12345', '',
  null, undefined, 42, {}, ['a']
];

async function pageChecks(nameRefused) {
  const boardRow = (name, grade, ms) => ({ pid: 'aaaaaaa1', name, grade, ms, k: grade * 1e8 + 99999999 - ms });
  const storage = {
    // saved data that is not what the game saved
    gaiaPlayers: JSON.stringify({ current: 'bbbbbbb2', list: [null, 7, 'x', { pid: 'aaaaaaa1', name: '<img src=x onerror="window.__pwned=1">' }, { pid: 'bbbbbbb2', name: 'גאיה' },
      { pid: 'bbbbbbb2', name: 'twice' }, { pid: '../../x', name: 'path' }, { pid: 'ccccccc3', name: '....' }, { name: 'no id' }, { pid: 'ddddddd4' }] }),
    gaiaBoards: JSON.stringify({ 'math/10': [boardRow('<b onmouseover="window.__pwned=1">x</b>', 100, 5000), { pid: 'bbbbbbb2', name: 'גאיה', grade: 90, ms: 60000, k: 1 }, null, 'row', { pid: 'eeeeeee5', name: 'call 0541234567', grade: 80, ms: 9000, k: 5 }] })
  };
  const { browser, page, errors } = await open({ firebase: true, clock: false, reducedMotion: true, storage, init: [() => {
    window.__csp = [];
    document.addEventListener('securitypolicyviolation', e => window.__csp.push(e.effectiveDirective + ' ' + e.blockedURI));
  }] });
  try {
    await page.waitForFunction(() => typeof startGameApp === 'function' && typeof firebase !== 'undefined' && !!firebase.database, null, { timeout: 20000 });
    await page.waitForTimeout(1500);   // the SDK tries to sign in and to connect (and can reach nothing here)
    const sdk = await page.evaluate(() => ({ version: firebase.SDK_VERSION, db: !!db, auth: typeof firebase.auth, csp: window.__csp.slice(),
      scripts: [...document.scripts].map(s => s.src).filter(Boolean).filter(src => !src.startsWith(location.origin + '/')) }));
    check('the Firebase SDK starts from the site\'s own files, under the policy, with nothing refused', sdk.version === '10.12.0' && sdk.db && sdk.auth === 'function' && sdk.csp.length === 0 && sdk.scripts.length === 0 && errors.length === 0, Object.assign(sdk, { errors: errors.slice(0, 3) }));

    // what the policy refuses, and what it lets through
    const probe = await page.evaluate(async () => {
      window.__csp.length = 0;
      const wait = ms => new Promise(r => setTimeout(r, ms));
      const out = {};
      out.fetchElsewhere = await fetch('https://example.com/collect?names=1').then(() => 'sent', () => 'refused');
      out.beacon = navigator.sendBeacon ? navigator.sendBeacon('https://example.com/b', 'x') : null;
      await new Promise(done => { const s = document.createElement('script'); s.src = 'https://example.com/x.js'; s.onerror = s.onload = done; document.head.appendChild(s); });
      await new Promise(done => { const i = new Image(); i.onerror = i.onload = done; i.src = 'https://example.com/p.png?leak=1'; });
      const frame = document.createElement('iframe'); frame.src = 'https://example.com/'; document.body.appendChild(frame);
      const base = document.createElement('base'); base.href = 'https://example.com/'; document.head.appendChild(base);
      await wait(400);
      out.base = document.baseURI;
      base.remove(); frame.remove();
      out.refused = window.__csp.slice();
      window.__csp.length = 0;
      // the hosts of the Firebase SDK: aborted by this test's network, but not refused by the policy
      await fetch('https://identitytoolkit.googleapis.com/v1/accounts:test').catch(() => {});
      await fetch('https://securetoken.googleapis.com/v1/token').catch(() => {});
      await fetch('https://csp-probe-not-a-database.firebaseio.com/.lp?start=t').catch(() => {});
      await new Promise(done => { const s = document.createElement('script'); s.src = 'https://s-usc1b-nss-2100.firebaseio.com/.lp?start=t'; s.onerror = s.onload = done; document.head.appendChild(s); });
      await wait(200);
      out.firebaseRefused = window.__csp.slice();
      return out;
    });
    await page.waitForTimeout(200);
    errors.length = 0;   // the browser also wrote each refusal of the probes above to the console
    const refusedKinds = ['connect-src', 'script-src-elem', 'img-src', 'frame-src', 'base-uri'].filter(kind => probe.refused.some(r => r.startsWith(kind + ' ')));
    check('the policy refuses a fetch, a beacon, a script, an image, a frame and a <base> of another site', probe.fetchElsewhere === 'refused' && refusedKinds.length === 5 && probe.base.startsWith('https://gaia.test/'), { refusedKinds, base: probe.base, n: probe.refused.length });
    check('the policy lets through the hosts the Firebase SDK talks to', probe.firebaseRefused.length === 0, probe.firebaseRefused);

    // --- names ---
    const names = await page.evaluate(list => list.map(n => GaiaPlayer.cleanName(n)), NASTY);
    const digits = s => (s.match(/[0-9]/g) || []).length;
    const badName = n => /[<>.:@\/\\]/.test(n) || /[\u0000-\u001f\u007f-\u009f​‎‏‪-‮⁠-⁯﻿]/.test(n) || digits(n) > 4 || n.length > 20 || n !== n.trim() || / {2}/.test(n) || /[\ud800-\udbff]$/.test(n);
    check('a name is only a name: no markup, no link or address characters, no hidden or direction characters, no phone number, 20 characters at most',
      names.every(n => typeof n === 'string' && !badName(n)) && names[NASTY.indexOf('אבגדהוזחטיכלמנסעפצקרשת')] === 'אבגדהוזחטיכלמנסעפצקר' && names.slice(NASTY.indexOf(null)).every(n => n === '') && names[NASTY.indexOf('12345')] === '' && names[NASTY.indexOf('  many     spaces  ')] === 'many spaces',
      names.filter(Boolean));
    const kept = await page.evaluate(() => ['גאיה', 'יוּבִי', 'Yoovy 9', "D'Artagnan", 'אור-לי', '👑 Googy', 'Gaia 2019'].map(n => [n, GaiaPlayer.cleanName(n)]));
    check('ordinary names stay as they were typed (Hebrew with nikud, Latin, a few digits, a hyphen, an emoji)', kept.every(([typed, name]) => typed === name), kept.filter(([a, b]) => a !== b));
    check('every cleaned name is one the database rules take', names.filter(Boolean).every(n => n.length >= 1 && n.length <= 20 && !nameRefused.some(re => re.test(n))), names.filter(n => n && nameRefused.some(re => re.test(n))));

    // --- saved data that is not what the game saved ---
    const players = await page.evaluate(() => ({ list: GaiaPlayer.list(), current: GaiaPlayer.current(), pwned: window.__pwned || 0 }));
    check('saved players are read with care: only entries with an id and a name are kept, names cleaned, an id once',
      players.list.length === 2 && players.list[0].pid === 'aaaaaaa1' && !/[<>]/.test(players.list[0].name) && players.list[1].name === 'גאיה' && players.current && players.current.pid === 'bbbbbbb2' && !players.pwned, players);

    await page.evaluate(() => GaiaBoards.openBoard('math', '10'));
    await page.waitForTimeout(300);
    const local = await page.evaluate(() => { const body = document.getElementById('board-rows'); return { tags: [...new Set([...body.querySelectorAll('*')].map(e => e.tagName))].sort().join(), names: [...body.querySelectorAll('tr')].map(tr => tr.children[1] ? tr.children[1].textContent : ''), pwned: window.__pwned || 0 }; });
    check('a board of saved rows is drawn as text only, with the names cleaned', local.tags === 'TD,TR' && local.names.length === 3 && local.names.every(n => n && !badName(n)) && !local.pwned, local);
    await page.evaluate(() => { document.getElementById('board-modal').hidden = true; });

    // --- the shared board: rows written by anyone, and this device's write ---
    const shared = await page.evaluate(async () => {
      const row = (name, grade, ms, k) => ({ name, grade, ms, k: k === undefined ? grade * 1e8 + 99999999 - ms : k, at: 1 });
      const online = {
        'uidA_aaaaaaa1': row('<img src=x onerror="window.__pwned=1">', 100, 1000),
        'uidB_bbbbbbb9': row('t.me/evil_chat', 100, 1100),
        'uidC_ccccccc9': row('call me 0541234567', 100, 1200),
        'uidD_ddddddd9': row('‮gnp.exe', 100, 1300),
        'uidE_eeeeeee9': row('....', 100, 1400),                // nothing left of it: not shown
        'uidF_fffffff9': row('cheat', 100, 1500, 9e15),        // a key that is not its grade and time: worked out again
        'uidG_ggggggg9': row('grade', 101, 1600),              // out of range: not shown
        'uidH_hhhhhhh9': { name: 'no numbers' },
        'uidI_iiiiiii9': 'not a row',
        'uidJ_jjjjjjj9': row('נועה', 95, 30000)
      };
      const updates = [];
      let refuse = 0;
      const query = { orderByChild() { return this; }, limitToLast() { return this; },
        once(type, done) { done({ forEach(each) { Object.entries(online).forEach(([key, value]) => each({ key, val: () => value })); } }); return Promise.resolve(); } };
      db = { ref(where) { return where ? query : { update(data) { updates.push(data); return refuse-- > 0 ? Promise.reject(Object.assign(new Error('PERMISSION_DENIED: Permission denied'), { code: 'PERMISSION_DENIED' })) : Promise.resolve(); } }; } };
      authReady = Promise.resolve({ uid: 'uidME' });

      GaiaBoards.openBoard('math', '10');
      await new Promise(r => setTimeout(r, 200));
      const body = document.getElementById('board-rows');
      const out = { tags: [...new Set([...body.querySelectorAll('*')].map(e => e.tagName))].sort().join(),
        rows: [...body.querySelectorAll('tr')].map(tr => [...tr.children].map(td => td.textContent)) };
      document.getElementById('board-modal').hidden = true;

      // a result with the rules of the repository: one update, one row, its path named
      let result = GaiaBoards.finish('math', '20', 90, 60000);
      out.sent1 = await result.sent;
      out.update1 = updates.slice();
      // ...and with rules published before scoreRow existed: refused once, then sent without it
      updates.length = 0; refuse = 1;
      result = GaiaBoards.finish('math', '100', 80, 70000);
      out.sent2 = await result.sent;
      out.update2 = updates.slice();
      // refused twice (too soon, or not a better result): not sent, and no third try
      updates.length = 0; refuse = 5;
      result = GaiaBoards.finish('hebrew', '1', 70, 80000);
      out.sent3 = await result.sent;
      out.tries3 = updates.length;
      out.pwned = window.__pwned || 0;
      return out;
    });
    const shownNames = shared.rows.map(r => r[1]);
    check('the shared board: rows from anyone are drawn as text, names cleaned, rows that are not rows left out, the order worked out from grade and time',
      shared.tags === 'TD,TR' && !shared.pwned && shownNames.every(n => n && !badName(n)) && !shownNames.includes('grade') && !shownNames.includes('no numbers') && shownNames.includes('נועה') &&
      shownNames.indexOf('cheat') > 0 && shared.rows.length <= 10, shared.rows.map(r => r.join(' | ')));
    const keys1 = shared.update1[0] ? Object.keys(shared.update1[0]) : [];
    const rowPath = 'math/20/uidME_bbbbbbb2';
    check('a result goes to the shared board as one row, with the rate stamp and the row\'s own path beside it',
      shared.sent1 === true && shared.update1.length === 1 && keys1.sort().join() === ['boards/' + rowPath, 'scoreRate/uidME', 'scoreRow/uidME'].sort().join() &&
      shared.update1[0]['scoreRow/uidME'] === rowPath && shared.update1[0]['boards/' + rowPath].name === 'גאיה' && shared.update1[0]['boards/' + rowPath].grade === 90, keys1);
    check('with rules from before scoreRow: the refused update is sent once more without it',
      shared.sent2 === true && shared.update2.length === 2 && 'scoreRow/uidME' in shared.update2[0] && !('scoreRow/uidME' in shared.update2[1]) && Object.keys(shared.update2[1]).length === 2, shared.update2.map(u => Object.keys(u)));
    check('an update refused both ways is not sent a third time', shared.sent3 === false && shared.tries3 === 2, { sent: shared.sent3, tries: shared.tries3 });

    check('no page errors, and nothing more refused by the policy, while the boards worked', errors.length === 0 && (await page.evaluate(() => window.__csp.length)) === 0, errors.slice(0, 6));
  } catch (e) { check('the page checks ran to the end', false, String(e && e.stack || e).slice(0, 500)); }
  await browser.close();

  // On a phone the sign-in part of the SDK also asks for a script of Google's and a hidden frame
  // (apis.google.com, <project>.firebaseapp.com). The policy lets them through; here the network
  // does not, and the sign-in must still come to an end (no player) instead of hanging.
  const phone = await open({ firebase: true, clock: false, reducedMotion: true, w: 390, h: 844,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    init: [() => { window.__csp = []; document.addEventListener('securitypolicyviolation', e => window.__csp.push(e.effectiveDirective + ' ' + e.blockedURI)); }] });
  try {
    const asked = [];
    phone.page.on('request', r => { const host = new URL(r.url()).host; if (host !== 'gaia.test' && !asked.includes(host)) asked.push(host); });
    await phone.page.waitForFunction(() => typeof startGameApp === 'function' && typeof firebase !== 'undefined', null, { timeout: 20000 });
    const signIn = await phone.page.evaluate(() => Promise.race([authReady.then(user => (user ? 'a player' : 'no player')), new Promise(r => setTimeout(() => r('still waiting'), 12000))]));
    const csp = await phone.page.evaluate(() => window.__csp.slice());
    check('as a phone: the sign-in comes to an end with the network cut, and the policy refuses nothing the SDK asks for', signIn === 'no player' && csp.length === 0 && phone.errors.length === 0, { signIn, csp, asked, errors: phone.errors.slice(0, 3) });
  } catch (e) { check('the phone check ran to the end', false, String(e && e.stack || e).slice(0, 500)); }
  await phone.browser.close();
}

// ---------- the Googy worker's sign-in check (googy/src/auth.js), with keys made here ----------
async function workerChecks() {
  const { verifyFirebaseToken } = await import('../googy/src/auth.js');
  const PROJECT = 'test-project', JWKS = 'https://keys.test/jwks';
  const b64 = value => Buffer.from(typeof value === 'string' ? value : JSON.stringify(value)).toString('base64url');
  const makeKey = async kid => {
    const pair = await crypto.webcrypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
    return { kid, pair, jwk: Object.assign(await crypto.webcrypto.subtle.exportKey('jwk', pair.publicKey), { kid, alg: 'RS256', use: 'sig' }) };
  };
  const sign = async (key, claims, header = {}) => {
    const now = Math.floor(Date.now() / 1000);
    const head = b64(Object.assign({ alg: 'RS256', kid: key.kid, typ: 'JWT' }, header));
    const body = b64(Object.assign({ iss: 'https://securetoken.google.com/' + PROJECT, aud: PROJECT, sub: 'player1', iat: now - 10, exp: now + 3600, auth_time: now - 10 }, claims));
    const sig = await crypto.webcrypto.subtle.sign('RSASSA-PKCS1-v1_5', key.pair.privateKey, Buffer.from(head + '.' + body));
    return head + '.' + body + '.' + Buffer.from(sig).toString('base64url');
  };
  const good = await makeKey('key-1'), other = await makeKey('key-1'), rotated = await makeKey('key-2');
  let published = [good.jwk], fetched = 0;
  const realFetch = globalThis.fetch;
  globalThis.fetch = async url => { fetched++; if (String(url) !== JWKS) throw new Error('unexpected fetch ' + url); return new Response(JSON.stringify({ keys: published }), { headers: { 'cache-control': 'public, max-age=3600' } }); };
  try {
    const now = Math.floor(Date.now() / 1000);
    const ok = await verifyFirebaseToken(await sign(good, {}), PROJECT, JWKS);
    const token = await sign(good, {});
    const [head, body, sig] = token.split('.');
    const cases = {
      'another project (aud)': await sign(good, { aud: 'someone-else' }),
      'another issuer': await sign(good, { iss: 'https://securetoken.google.com/someone-else' }),
      'expired': await sign(good, { exp: now - 5 }),
      'issued in the future': await sign(good, { iat: now + 3600 }),
      'no player id': await sign(good, { sub: '' }),
      'signed by a key that is not Google\'s': await sign(other, {}),
      'changed after signing': head + '.' + b64(Object.assign(JSON.parse(Buffer.from(body, 'base64url')), { sub: 'someone-else' })) + '.' + sig,
      'no signature ("alg": "none")': b64({ alg: 'none', typ: 'JWT' }) + '.' + body + '.',
      'another algorithm (HS256)': await sign(good, {}, { alg: 'HS256' }),
      'not a token': 'hello', 'empty': ''
    };
    const wrong = [];
    for (const [name, bad] of Object.entries(cases)) if (await verifyFirebaseToken(bad, PROJECT, JWKS) !== null) wrong.push(name);
    check('Googy worker: a signed-in player\'s token is taken, and ' + Object.keys(cases).length + ' kinds of wrong token are refused', ok === 'player1' && wrong.length === 0, { ok, wrong });

    // unknown key ids: the keys are fetched again once, not on every request
    const before = fetched;
    for (let i = 0; i < 20; i++) await verifyFirebaseToken(await sign(rotated, {}, { kid: 'made-up-' + i }), PROJECT, JWKS);
    check('Googy worker: made-up key ids do not make it fetch Google\'s keys on every request', fetched - before <= 1, { fetches: fetched - before });
  } finally { globalThis.fetch = realFetch; }
}

(async () => {
  const { nameRefused } = staticChecks();
  await pageChecks(nameRefused);
  await workerChecks();
  console.log(fails ? `\n${fails} FAILED` : '\nSECURITY PASS');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
