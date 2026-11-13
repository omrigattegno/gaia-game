// A sweep of every screen of the drawn (2D) game at one screen size: a screenshot of each state
// and an audit of its layout (text spilling out of its box or clipped, things off the screen,
// tap targets that are too small, content that cannot be reached).
// node tests/sweep.js <w> <h> <outDir> [only-substring]     then: node tests/sweep-report.js <outDir>
const { open, sheet } = require('./lib');
const fs = require('fs');
const [w, h, dir, only] = process.argv.slice(2);

function audit() {
  const out = [], vw = innerWidth, vh = innerHeight;
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1) return false; const cs = getComputedStyle(el); return cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0.05; };
  const sel = el => el.id ? '#' + el.id : el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  const path = el => { const p = []; for (let e = el; e && e !== document.body && p.length < 4; e = e.parentElement) p.unshift(sel(e)); return p.join(' > '); };
  const scrolls = (el, axis) => { for (let e = el.parentElement; e && e !== document.documentElement; e = e.parentElement) { const cs = getComputedStyle(e), o = axis === 'x' ? cs.overflowX : cs.overflowY; if ((o === 'auto' || o === 'scroll') && (axis === 'x' ? e.scrollWidth > e.clientWidth : e.scrollHeight > e.clientHeight)) return true; } return false; };
  const clippedBy = (el) => { for (let e = el.parentElement; e && e !== document.documentElement; e = e.parentElement) { const cs = getComputedStyle(e); if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') return e; } return null; };
  const isBox = cs => (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || parseFloat(cs.borderTopWidth) > 0 || cs.overflowX !== 'visible' || cs.backgroundImage !== 'none';
  const txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 28);
  if (document.documentElement.scrollWidth > vw + 1) out.push({ kind: 'page-scrolls-sideways', w: document.documentElement.scrollWidth });
  const roots = [...document.querySelectorAll('.screen.active, .gg-modal:not([hidden])')];
  const topModal = document.querySelector('.gg-modal:not([hidden])');
  for (const root of roots) {
    if (topModal && root !== topModal) continue;
    for (const el of root.querySelectorAll('*')) {
      if (!vis(el)) continue;
      const tag = el.tagName.toLowerCase();
      if (el.closest('svg') && tag !== 'svg') continue;
      if (el.closest('#map-scene-holder, #map-parallax, #map3d')) continue;     // the map's drawing has its own tests
      const cs = getComputedStyle(el), r = el.getBoundingClientRect();
      const hiddenPanel = el.closest('#land-panel') && !document.getElementById('land-panel').classList.contains('open');
      if (hiddenPanel) continue;
      if (el.matches('button, a[href], input, select, [onclick], [role=button]') && !el.disabled && (r.width < 40 || r.height < 40)) out.push({ kind: 'small-tap-target', el: path(el), size: Math.round(r.width) + 'x' + Math.round(r.height), text: txt(el) });
      if ((r.right > vw + 1.5 || r.left < -1.5) && !scrolls(el, 'x') && cs.position !== 'fixed') {
        const c = clippedBy(el);
        if (!c || c.getBoundingClientRect().right > vw + 1.5 || c.getBoundingClientRect().left < -1.5) out.push({ kind: 'off-screen-sideways', el: path(el), left: Math.round(r.left), right: Math.round(r.right), text: txt(el) });
      }
      if (el.matches('button, a[href], input, [onclick]') && (r.bottom > vh + 1.5 || r.top < -1.5) && !scrolls(el, 'y')) out.push({ kind: 'unreachable-control', el: path(el), top: Math.round(r.top), bottom: Math.round(r.bottom), text: txt(el) });
      const texts = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      if (texts.length) {
        let box = el;
        while (box !== root && !isBox(getComputedStyle(box))) box = box.parentElement;
        const br = box.getBoundingClientRect(), range = document.createRange(), bs = getComputedStyle(box);
        const scrollX = /auto|scroll/.test(bs.overflowX) || bs.textOverflow === 'ellipsis', scrollY = /auto|scroll/.test(bs.overflowY);
        for (const n of texts) {
          range.selectNodeContents(n);
          const tr = range.getBoundingClientRect();
          if (tr.width < 1) continue;
          if (scrolls(el, 'y') && (tr.bottom > vh || tr.top < 0)) continue;      // scrolled out of sight for now
          if ((tr.right > br.right + 2 || tr.left < br.left - 2) && scrollX) continue;
          if ((tr.bottom > br.bottom + 3 || tr.top < br.top - 3) && scrollY) continue;
          if (tr.right > br.right + 2 || tr.left < br.left - 2) { out.push({ kind: 'text-spills-sideways', el: path(el), box: sel(box), by: Math.round(Math.max(tr.right - br.right, br.left - tr.left)), text: txt(el) }); break; }
          if (tr.bottom > br.bottom + 3 || tr.top < br.top - 3) { out.push({ kind: 'text-spills-vertically', el: path(el), box: sel(box), by: Math.round(Math.max(tr.bottom - br.bottom, br.top - tr.top)), text: txt(el) }); break; }
        }
      }
      if ((cs.overflowX === 'hidden' || cs.overflowX === 'clip') && el.scrollWidth > el.clientWidth + 1 && cs.textOverflow !== 'ellipsis') out.push({ kind: 'clipped-sideways', el: path(el), by: el.scrollWidth - el.clientWidth, text: txt(el) });
      if ((cs.overflowY === 'hidden' || cs.overflowY === 'clip') && el.scrollHeight > el.clientHeight + 2 && !el.matches('.screen')) out.push({ kind: 'clipped-vertically', el: path(el), by: el.scrollHeight - el.clientHeight, text: txt(el) });
    }
  }
  return out;
}

(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const { browser, page, errors } = await open({ w: +w, h: +h, dpr: 1 });
  const tick = ms => page.clock.runFor(ms);
  const report = [], shots = [];
  let i = 0;
  const snap = async (name) => {
    if (only && !name.includes(only)) return;
    await tick(60);
    const found = await page.evaluate(audit);
    const file = `${dir}/${String(i++).padStart(3, '0')}_${name.replace(/[^\w-]+/g, '_')}.jpg`;
    await page.screenshot({ path: file, type: 'jpeg', quality: 80 });
    shots.push([name + (found.length ? ` (${found.length})` : ''), file]);
    report.push({ state: name, found });
  };
  const land = async key => { await page.evaluate(k => { closeLandPanel(); openLandPanel(k); }, key); await tick(350); };
  const panelBtn = async n => { await page.locator('#land-panel-body button').nth(n).click({ force: true }); await tick(400); };
  const home = async () => { await page.evaluate(() => goHome()); await tick(350); };
  const answer = ok => page.evaluate(ok => { const bs = [...document.querySelectorAll('#options button')]; (bs.find(b => (b._val === currentAnswer) === ok) || bs[0]).click(); }, ok);

  await page.evaluate(() => document.fonts.ready);
  await tick(400);
  await snap('welcome');
  await page.click('.start-btn', { force: true }); await tick(400);
  await snap('player-modal-first');
  await page.fill('#player-name-input', 'אֲלֶכְּסַנְדְּרָה־מִרְיָם'); await page.click('#player-form .big-btn', { force: true }); await tick(400);
  await snap('map-top');
  await page.evaluate(() => { const vp = document.getElementById('map-viewport'); vp.scrollTop = vp.scrollHeight / 2; }); await tick(200);
  await snap('map-middle');
  await page.evaluate(() => { const vp = document.getElementById('map-viewport'); vp.scrollTop = vp.scrollHeight; }); await tick(200);
  await snap('map-bottom');
  for (const key of ['math', 'hebrew', 'reading', 'english', 'geography', 'biology', 'memory', 'puzzle', 'chess']) { await land(key); await snap('panel-' + key); }
  await page.evaluate(() => closeLandPanel()); await tick(200);

  // the fifteen-question games
  const quizzes = [['math', [0, 1, 2]], ['hebrew', [0, 1, 2]], ['english', [0, 1, 2, 3, 4]], ['geography', [0, 1]], ['biology', [0, 1]]];
  for (const [key, levels] of quizzes) for (const n of levels) {
    await land(key); await panelBtn(n);
    await snap(`quiz-${key}-${n}-question`);
    await answer(true); await tick(300);
    await snap(`quiz-${key}-${n}-right`);
    await tick(1500);
    await answer(false); await tick(300);
    await snap(`quiz-${key}-${n}-wrong`);
    for (let q = 0; q < 6; q++) { await tick(1700); await answer(true); await tick(200); }
    await snap(`quiz-${key}-${n}-later`);
    await home();
  }
  // one whole game to its end screen
  await land('math'); await panelBtn(2);
  for (let q = 0; q < 15; q++) { await answer(true); await tick(1700); }
  await tick(600);
  await snap('end-screen');
  await home();
  // the leaderboard
  await land('math'); await page.locator('#land-panel-body button').last().click({ force: true }); await tick(400);
  await snap('board-modal');
  await page.evaluate(() => { const b = document.querySelector('#board-player'); if (b) b.click(); }); await tick(400);
  await snap('player-modal-list');
  await page.evaluate(() => document.querySelectorAll('.gg-modal:not([hidden]) .gg-modal-close').forEach(b => b.click())); await tick(300);
  await page.evaluate(() => closeLandPanel()); await tick(200);

  // multiplication
  await land('math'); await panelBtn(3);
  await snap('mult-menu');
  await page.locator('.mult-table-btn').nth(5).click({ force: true }); await tick(400);
  await snap('mult-question');
  await page.evaluate(() => { const q = multQuestions[multIdx]; document.querySelector(`.mult-opt-btn[data-val="${q.answer}"]`).click(); }); await tick(300);
  await snap('mult-right');
  await tick(1400);
  await page.evaluate(() => { const q = multQuestions[multIdx]; [...document.querySelectorAll('.mult-opt-btn')].find(b => +b.dataset.val !== q.answer).click(); }); await tick(300);
  await snap('mult-wrong');
  for (let q = 0; q < 12; q++) { await tick(1500); await page.evaluate(() => { const q = multQuestions[multIdx]; const b = q && document.querySelector(`.mult-opt-btn[data-val="${q.answer}"]`); if (b && !b.disabled) b.click(); }); }
  await tick(1500);
  await snap('mult-summary');
  await home();

  // memory
  for (let n = 0; n < 4; n++) {
    await land('memory'); await panelBtn(n);
    await snap(`memory-${n}-start`);
    await page.evaluate(() => { const c = memoryCards.filter(c => c.pairId === 0); document.getElementById('mcard-' + c[0].cardId).click(); document.getElementById('mcard-' + memoryCards.find(c => c.pairId === 1).cardId).click(); }); await tick(300);
    await snap(`memory-${n}-two-open`);
    await home();
  }
  // puzzle
  for (let n = 0; n < 3; n++) { await land('puzzle'); await panelBtn(n); await snap(`puzzle-numbers-${n}`); await home(); }
  await land('puzzle'); await panelBtn(3);
  await snap('puzzle-menu-image');
  for (let n = 0; n < 3; n++) {
    await page.locator('#puzzle-img-list .puzzle-img-thumb').nth(n + 1).click({ force: true }); await tick(100);
    await page.locator('#puzzle-menu .big-btn').nth(n).click({ force: true }); await tick(400);
    await snap(`puzzle-image-${n}`);
    await home(); await land('puzzle'); await panelBtn(3);
  }
  await home();

  // reading
  for (const c of [0, 5]) {
    await land('reading'); await panelBtn(c);
    await snap(`reading-${c}-stories`);
    await page.locator('.reading-story-pick-btn').nth(0).click({ force: true }); await tick(200);
    await snap(`reading-${c}-story`);
    await page.locator('#reading-content .btn-reading').click({ force: true }); await tick(200);
    await snap(`reading-${c}-question`);
    await page.evaluate(() => { const q = readingData[currentReadingCategoryIdx].stories[currentReadingStoryIdx].questions[currentReadingQuestionIdx]; document.getElementById('ropt-' + q.a).click(); }); await tick(300);
    await snap(`reading-${c}-right`);
    const qs = await page.evaluate(() => readingData[currentReadingCategoryIdx].stories[currentReadingStoryIdx].questions.length);
    for (let q = 1; q < qs; q++) { await tick(1300); await page.evaluate(() => { const q = readingData[currentReadingCategoryIdx].stories[currentReadingStoryIdx].questions[currentReadingQuestionIdx]; document.getElementById('ropt-' + q.a).click(); }); }
    await tick(1800);
    await snap(`reading-${c}-story-done`);
    await home();
  }

  // repeat after Googy, the conversation
  await land('english'); await panelBtn(5);
  await snap('repeat-start');
  await tick(3000);
  await snap('repeat-a-little-later');
  await home();
  const chat = await page.evaluate(() => typeof googyAvailable === 'function' ? googyAvailable() : null);
  await land('english');
  const nb = await page.locator('#land-panel-body button').count();
  if (nb > 8) { await panelBtn(7); await snap('googy-topics'); await page.locator('#googy-topic-grid button').nth(0).click({ force: true }); await tick(1500); await snap('googy-chat'); await home(); }
  else await page.evaluate(() => closeLandPanel());

  // chess
  await land('chess'); await panelBtn(0);
  await snap('chess-learn');
  await home();
  await land('chess'); await panelBtn(1);
  await snap('chess-easy-start');
  await page.evaluate(() => { const sq = document.querySelector('#chess-board [data-sq="12"]') || document.querySelectorAll('#chess-board > *')[52]; if (sq) sq.click(); }); await tick(300);
  await snap('chess-piece-picked');
  await home();
  await land('chess'); await panelBtn(4);
  await snap('chess-two-players');
  await home();

  fs.writeFileSync(`${dir}/report.json`, JSON.stringify({ size: [+w, +h], errors, report }, null, 1));
  const total = report.reduce((n, r) => n + r.found.length, 0);
  console.log(`${w}x${h}: ${report.length} states, ${total} findings, ${errors.length} page errors, chat available: ${chat}`);
  await browser.close();
  for (let k = 0; k * 40 < shots.length; k++) await sheet(`${dir}/sheet_${k}.png`, 10, Math.max(110, Math.min(180, Math.round(1700 / 10 * (+w / +h) / 0.6))), shots.slice(k * 40, k * 40 + 40));
})().catch(e => { console.error('CRASH', e); process.exit(2); });
