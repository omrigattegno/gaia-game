// Shared launcher for the game's tests. Nothing here touches the real network: the page and
// the site's own files (fonts, flags, icons) are served from the repository at https://gaia.test/,
// and every other request is aborted (so Firebase is "down": the boards are this device's).
// The 3D bundle is served only when asked for (bundle: true), with software GL (gl: true).
// By default the page's clock is the test's (page.clock.runFor), its CSS animations are off,
// and the intro is skipped.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const GL_ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];

async function open({ html = ROOT + '/index.html', bundle = null, gl = false, clock = true, anim = false, time, intro = false, force3d = false,
                      storage, w = 400, h = 800, dpr = 1, reducedMotion = false, init = [] } = {}) {
  const HTML = fs.readFileSync(html, 'utf8');
  const JS = bundle === true ? fs.readFileSync(ROOT + '/kingdom3d.js', 'utf8') : (bundle ? fs.readFileSync(bundle, 'utf8') : null);
  const browser = await chromium.launch({ args: gl ? GL_ARGS : [] });
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dpr, reducedMotion: reducedMotion ? 'reduce' : 'no-preference', serviceWorkers: 'block' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.route('**/*', route => {
    const u = route.request().url();
    if (u === 'https://gaia.test/' || u === 'https://gaia.test/index.html') return route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: HTML });
    if (JS && /^https:\/\/gaia\.test\/kingdom3d\.js(\?|$)/.test(u)) return route.fulfill({ status: 200, contentType: 'text/javascript; charset=utf-8', body: JS });
    // the site's own files (fonts, flags, icons)
    if (u.startsWith('https://gaia.test/') && !/kingdom3d\.js|sw\.js/.test(u)) {
      const rel = decodeURIComponent(u.slice('https://gaia.test/'.length).split('?')[0]);
      const file = path.join(ROOT, rel);
      if (rel && !rel.includes('..') && fs.existsSync(file) && fs.statSync(file).isFile()) {
        const type = { '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json', '.js': 'text/javascript', '.txt': 'text/plain' }[path.extname(file)] || 'application/octet-stream';
        return route.fulfill({ status: 200, contentType: type, body: fs.readFileSync(file) });
      }
    }
    return route.abort();
  });
  if (storage) await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, storage);
  if (force3d) await page.addInitScript(() => { window.__force3D = true; });
  for (const s of init) await page.addInitScript(s);
  if (clock) await page.clock.install(time ? { time } : {});
  // CSS transitions and animations run on real time while the page's timers run on the fake
  // clock; with them on, a click can land on a panel that is still sliding in.
  if (clock && !anim) await page.addInitScript(() => document.addEventListener('DOMContentLoaded', () => {
    const st = document.createElement('style');
    st.textContent = '*, *::before, *::after { transition: none !important; animation: none !important; }';
    document.head.appendChild(st);
  }));
  // without the intro: "start" goes straight to the map
  if (!intro) await page.addInitScript(() => document.addEventListener('DOMContentLoaded', () => {
    const wait = setInterval(() => { if (window.GaiaIntro) { clearInterval(wait); window.GaiaIntro.play = done => done(); } }, 1);
  }));
  await page.goto('https://gaia.test/index.html');
  return { browser, page, errors, ctx };
}
const activeScreen = page => page.evaluate(() => [...document.querySelectorAll('.screen.active')].map(e => e.id).join(','));

// a contact sheet of images: sheet(out, cols, cellWidth, [[label, file], ...])
async function sheet(out, cols, cell, items) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const imgs = items.map(([label, file]) => ({ label, src: 'data:image/' + (/\.png$/.test(file) ? 'png' : 'jpeg') + ';base64,' + fs.readFileSync(file).toString('base64') }));
  await page.setContent('<body style="margin:0;background:#222;font:14px sans-serif;color:#fff"><div id="g" style="display:inline-grid;grid-template-columns:repeat(' + cols + ',' + cell + 'px);gap:4px;padding:4px">' +
    imgs.map(i => '<div><img src="' + i.src + '" style="width:' + cell + 'px;display:block"><div style="padding:2px 4px">' + i.label + '</div></div>').join('') + '</div></body>');
  await page.waitForFunction(() => [...document.images].every(i => i.complete));
  const box = await page.locator('#g').boundingBox();
  await page.setViewportSize({ width: Math.ceil(box.width), height: Math.ceil(box.height) });
  await page.locator('#g').screenshot({ path: out });
  await browser.close();
}
module.exports = { open, activeScreen, sheet, ROOT, GL_ARGS };
