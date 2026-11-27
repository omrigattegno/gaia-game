// The game offline: the site is served from disk by a local web server (a service worker needs
// a real origin), opened once with the "network" on, then again with it off.
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8' };
// The repository as a web site on this machine. The Firebase SDK (firebase/) is answered with
// "not found": the page then runs without Firebase, as in the other suites, so whatever the
// service worker does with the page's requests, nothing here can reach the real database.
function serve() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      let rel = '';
      try { rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html'; } catch (e) { /* a broken address: not found */ }
      const file = path.join(ROOT, rel);
      const there = rel && !rel.split('/').includes('..') && !rel.startsWith('firebase/') && !rel.startsWith('.') && fs.existsSync(file) && fs.statSync(file).isFile();
      if (!there) { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}
let fails = 0;
const check = (name, ok, info) => { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (info !== undefined ? '  ' + JSON.stringify(info) : '')); };
(async () => {
  const server = await serve();
  const PORT = server.address().port;
  const stopServer = () => { server.close(); server.closeAllConnections(); };
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });   // no intro, no 3D: this test is about the network
  // nothing outside this machine: the page's own requests to other hosts fail at once
  await ctx.route(url => !/^http:\/\/(localhost|127\.0\.0\.1)[:/]/.test(url.toString()), route => route.abort());
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  const base = `http://localhost:${PORT}/`;
  try {
    await page.goto(base);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 15000 });
    const kept = await page.evaluate(async () => (await (await caches.open('gaia-v2')).keys()).map(r => new URL(r.url).pathname + new URL(r.url).search));
    check('the service worker is in charge and keeps the page, the fonts and the manifest', kept.includes('/') && kept.some(k => /varela-round-hebrew/.test(k)) && kept.includes('/manifest.webmanifest'), kept);
    // a first visit with the network: into a flags game, so some flags are fetched
    await page.click('.start-btn', { force: true });
    await page.evaluate(() => { const m = document.getElementById('player-modal'); if (m && !m.hidden) document.getElementById('player-skip').click(); });
    await page.waitForFunction(() => document.getElementById('main-menu').classList.contains('active'), null, { timeout: 30000 });
    await page.evaluate(() => { openLandPanel('geography'); });
    await page.waitForTimeout(400);
    await page.locator('#land-panel-body button').nth(0).click({ force: true });
    await page.waitForFunction(() => { const i = document.querySelector('.geo-flag-display img'); return i && i.complete && i.naturalWidth > 0; }, null, { timeout: 10000 });
    const flag = await page.evaluate(() => document.querySelector('.geo-flag-display img').getAttribute('src'));
    await page.waitForTimeout(500);
    await page.waitForFunction(async () => (await (await caches.open('gaia-v2')).keys()).filter(r => /\/flags\//.test(r.url)).length >= 60, null, { timeout: 15000 }).catch(() => {});
    const kept2 = await page.evaluate(async () => (await (await caches.open('gaia-v2')).keys()).map(r => new URL(r.url).pathname));
    const want = await page.evaluate(() => geographyData.map(c => '/flags/' + c.code + (FLAG_PICTURES.has(c.code) ? '.webp' : '.svg')));
    check('every flag of the flag games is kept (the worker\'s list matches the game\'s)', want.length === 60 && want.every(f => kept2.includes(f)) && kept2.filter(f => /\/flags\//.test(f)).length === 60, { shown: flag, kept: kept2.filter(f => /\/flags\//.test(f)).length });

    // another address of the site, opened as a page, must not take the game's place in the cache
    const other = await ctx.newPage();
    await other.goto(base + 'fonts/OFL-Fredoka.txt');
    await other.goto(base + 'index.html?from=test');
    await other.waitForFunction(() => typeof startGameApp === 'function', null, { timeout: 15000 });
    await other.close();
    const keptPage = await page.evaluate(async () => (await (await (await caches.open('gaia-v2')).match('./')).text()).slice(0, 200));
    check('only the game\'s own page is kept as the page (with or without index.html and a query)', /<!DOCTYPE html>/i.test(keptPage) && /<html lang="he"/.test(keptPage), keptPage.slice(0, 60));

    // --- the network goes away ---
    await ctx.setOffline(true);
    stopServer();
    await new Promise(r => setTimeout(r, 300));
    await page.reload();
    await page.waitForFunction(() => document.querySelector('#welcome-screen.active') && typeof startGameApp === 'function', null, { timeout: 15000 });
    const off = await page.evaluate(async () => { await document.fonts.ready; return { title: document.title, hebrewFont: document.fonts.check('16px "Varela Round"', 'שלום'), latinFont: document.fonts.check('16px "Fredoka"', 'Abc'), firebase: typeof firebase }; });
    check('offline: the page opens from the kept copy, with its fonts', /Yoovy/.test(off.title) && off.hebrewFont && off.latinFont, off);
    await page.click('.start-btn', { force: true });
    await page.evaluate(() => { const m = document.getElementById('player-modal'); if (m && !m.hidden) document.getElementById('player-skip').click(); });
    await page.waitForFunction(() => document.getElementById('main-menu').classList.contains('active'), null, { timeout: 30000 });
    await page.evaluate(() => { openLandPanel('math'); });
    await page.waitForTimeout(400);
    await page.locator('#land-panel-body button').nth(0).click({ force: true });
    await page.waitForTimeout(400);
    for (let q = 0; q < 15; q++) { await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click()); await page.waitForTimeout(1650); }
    await page.waitForTimeout(600);
    const end = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), score, card: document.querySelector('#end-board') ? document.querySelector('#end-board').textContent.slice(0, 60) : '' }));
    check('offline: a whole game is played to its end screen', end.screen === 'end-screen' && end.score === 150, end);
    await page.evaluate(() => goHome());
    await page.evaluate(() => { openLandPanel('geography'); });
    await page.waitForTimeout(400);
    await page.locator('#land-panel-body button').nth(0).click({ force: true });
    await page.waitForTimeout(1200);
    const geo = await page.evaluate(() => { const box = document.querySelector('.geo-flag-display'); const i = box.querySelector('img'), e = box.querySelector('.flag-emoji'); return { img: i ? (i.complete && i.naturalWidth > 0) : null, emoji: e ? e.textContent : null }; });
    check('offline: the flags show from the kept copies', geo.img === true && !geo.emoji, geo);
    check('no page errors', errors.length === 0, errors.slice(0, 5));
  } catch (e) { check('ran to the end', false, String(e).slice(0, 400)); }
  await browser.close();
  stopServer();
  console.log(fails ? `\n${fails} FAILED` : '\nOFFLINE PASS');
  process.exit(fails ? 1 : 0);
})();
