// usage:
//   node render.cjs stills 2,5.5,10          -> out/still_<t>.png
//   node render.cjs video <fps> <t0> <t1> <out.mp4>
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const { spawn } = require('child_process');
const ROOT = __dirname;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  const f = path.join(ROOT, u === '/' ? 'index.html' : u);
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    res.end(data);
  });
});

(async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const [mode, ...args] = process.argv.slice(2);
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text'],
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.type(), m.text().slice(0, 400)); });
  page.on('pageerror', (e) => console.log('[pageerror]', e.message));
  const t0 = Date.now();
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForFunction(() => window.ready === true, null, { timeout: 180000 });
  console.log('ready in', ((Date.now() - t0) / 1000).toFixed(1), 's', JSON.stringify(await page.evaluate(() => window.info())));
  const cdp = await page.context().newCDPSession(page);
  const shot = async () => Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true })).data, 'base64');
  fs.mkdirSync(path.join(ROOT, 'out'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'out', 'sfx.json'), JSON.stringify(await page.evaluate(() => window.SFX)));

  if (mode === 'stills') {
    const times = args[0].split(',').map(Number);
    for (const t of times) {
      const a = Date.now();
      await page.evaluate((tt) => window.renderAt(tt), t);
      fs.writeFileSync(path.join(ROOT, 'out', `still_${t.toFixed(2)}.png`), await shot());
      console.log('t', t, (Date.now() - a) + 'ms');
    }
  } else if (mode === 'video') {
    const fps = Number(args[0]), ta = Number(args[1]), tb = Number(args[2]), outFile = args[3];
    const ff = spawn(path.join(ROOT, 'ffmpeg'), ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'png', '-i', '-',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-pix_fmt', 'yuv420p', '-tune', 'animation', '-movflags', '+faststart', outFile], { stdio: ['pipe', 'inherit', 'inherit'] });
    const n = Math.round((tb - ta) * fps);
    const start = Date.now();
    for (let i = 0; i < n; i++) {
      const t = ta + i / fps;
      await page.evaluate((tt) => window.renderAt(tt), t);
      const buf = await shot();
      if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
      if (i % 30 === 0) {
        const el = (Date.now() - start) / 1000;
        console.log(`frame ${i}/${n} t=${t.toFixed(2)} elapsed ${el.toFixed(0)}s eta ${((el / (i + 1)) * (n - i - 1)).toFixed(0)}s`);
      }
    }
    ff.stdin.end();
    await new Promise((r) => ff.on('close', r));
    console.log('done', outFile, ((Date.now() - start) / 1000).toFixed(0) + 's');
  }
  await browser.close();
  server.close();
})().catch((e) => { console.error(e); process.exit(1); });
