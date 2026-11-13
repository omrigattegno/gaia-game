// The 3D path of the real page (software GL, real clock): the map as the kingdom, the sisters
// in the corner of the games, the lands' backdrops, and falling back to the drawings.
const { open } = require('./lib');
let fails = 0;
const check = (name, ok, info) => { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (info !== undefined ? '  ' + JSON.stringify(info) : '')); };
(async () => {
  const init = [() => {   // the film is another test's; here the map is wanted at once
    let K; Object.defineProperty(window, 'Kingdom3D', { configurable: true, get() { return K; }, set(v) { K = v; v.film.prepare = async () => {}; v.film.fits = () => false; } });
  }];
  const { browser, page, errors } = await open({ bundle: true, gl: true, clock: false, force3d: true, w: 360, h: 640, dpr: 1, init });
  const wait = ms => page.waitForTimeout(ms);
  const until = (fn, arg, timeout = 60000) => page.waitForFunction(fn, arg, { timeout, polling: 100 });
  await page.click('.start-btn', { force: true });
  await page.evaluate(() => { const m = document.getElementById('player-modal'); if (m && !m.hidden) document.getElementById('player-skip').click(); });
  check('before the kingdom is built the drawn map shows', await page.evaluate(() => !!document.querySelector('#map-scene-holder svg') && !document.getElementById('main-menu').classList.contains('map3d')));
  // --- a game begun on the drawn map goes on with its drawings when the kingdom is ready; the 3D comes with the map
  await page.click('g.land-hit[data-land="hebrew"]', { force: true }); await wait(400);
  await page.locator('#land-panel-body button').nth(0).click({ force: true }); await wait(400);
  await until(() => window.GaiaMap3D && (GaiaMap3D.state === 'ready' || GaiaMap3D.state === 'no'), null, 240000);
  await wait(1800);
  const early = await page.evaluate(() => ({ state: GaiaMap3D.state, screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), svg: !!document.querySelector('#land-scene > svg'), canvas: !!document.querySelector('#land-scene > canvas'),
    buddies: GaiaBuddies.on, girls: [...document.querySelectorAll('#gaia-char .girl')].filter(g => getComputedStyle(g).display !== 'none').length }));
  check('the kingdom got ready during a game: that game keeps the drawn backdrop and the drawn sisters', early.state === 'ready' && early.screen === 'game-screen' && early.svg && !early.canvas && !early.buddies && early.girls === 2, early);
  await page.evaluate(() => goHome());
  await until(() => window.GaiaMap3D && GaiaMap3D.state === 'on', null, 60000);

  // --- the map
  const map = await page.evaluate(() => ({
    cls: document.getElementById('main-menu').className, canvas: !!document.querySelector('#map3d-stage canvas.k3d-canvas'),
    plaques: document.querySelectorAll('.land3d-plaque').length, buttons: document.querySelectorAll('button.land3d-plaque').length,
    badges: document.querySelectorAll('.land3d-plaque [data-badge]').length, attached: Kingdom3D.world.attached,
    drawnHidden: getComputedStyle(document.getElementById('map-scene-holder')).display === 'none',
    spacer: document.getElementById('map3d-spacer').offsetHeight, vp: document.getElementById('map-viewport').clientHeight
  }));
  check('the map is the 3D kingdom: canvas, 10 plaques (9 lands to tap), badges, loop running, drawn map hidden',
    /map3d/.test(map.cls) && map.canvas && map.plaques === 10 && map.buttons === 9 && map.badges === 9 && map.attached && map.drawnHidden && map.spacer > map.vp * 2, map);
  const seen = () => page.evaluate(() => Kingdom3D.world.spots().filter(s => s.seen).map(s => s.key).join());
  await page.evaluate(() => { const vp = document.getElementById('map-viewport'); vp.scrollTop = 0; });
  await wait(1500);
  const top = await seen();
  await page.evaluate(() => { const vp = document.getElementById('map-viewport'); vp.scrollTop = vp.scrollHeight; });
  await wait(2500);
  const bottom = await seen();
  check('scrolling the page moves the camera along the road', /castle/.test(top) && !/castle/.test(bottom) && /chess/.test(bottom), { top, bottom });
  const placed = await page.evaluate(() => { const b = document.querySelector('.land3d-plaque[data-land="chess"]'), r = b.getBoundingClientRect(); return { vis: b.style.visibility, x: r.left, y: r.top, w: r.width, in: r.left >= 0 && r.right <= innerWidth && r.top > 0 && r.bottom < innerHeight }; });
  check('a land in view has its plaque on the screen', placed.vis === 'visible' && placed.in, placed);

  // --- a tap on a land: its panel, the camera comes close, the sisters walk
  await page.evaluate(() => { const s = Kingdom3D.world.spots().find(s => s.key === 'memory'), el = document.getElementById('map3d-stage'), r = el.getBoundingClientRect();
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: r.left + s.cx, clientY: r.top + s.cy })); });
  await wait(600);
  const tapped = await page.evaluate(() => ({ open: document.getElementById('land-panel').classList.contains('open'), title: document.getElementById('land-panel-title') ? document.getElementById('land-panel-title').textContent : '',
    focus: document.getElementById('main-menu').classList.contains('map3d-focus'), buttons: document.querySelectorAll('#land-panel-body button').length }));
  check('a tap on a land in the picture opens its panel and the camera turns to it', tapped.open && tapped.focus && tapped.buttons >= 3, tapped);
  await page.evaluate(() => closeLandPanel());
  await wait(300);
  check('closing the panel gives the plaques back', await page.evaluate(() => !document.getElementById('main-menu').classList.contains('map3d-focus')));
  await wait(1200);
  const near = await page.evaluate(() => { const b = [...document.querySelectorAll('button.land3d-plaque')].find(b => { const r = b.getBoundingClientRect(); return b.style.visibility === 'visible' && r.top > 60 && r.bottom < innerHeight - 20 && b.dataset.land !== 'memory'; }); return b && b.dataset.land; });
  await page.locator(`button.land3d-plaque[data-land="${near}"]`).click();
  await wait(400);
  check('a tap on a plaque opens the land too', await page.evaluate(() => document.getElementById('land-panel').classList.contains('open') && /map3d-focus/.test(document.getElementById('main-menu').className)), near);
  await page.evaluate(() => { closeLandPanel(); openLandPanel('math'); });
  await wait(400);

  // --- into a game: the map rests, the land is behind the game, the sisters are in the corner
  await until(() => window.GaiaBuddies && GaiaBuddies.on, null, 30000);
  await page.locator('#land-panel-body button').nth(0).click({ force: true });
  await wait(500);
  const game = await page.evaluate(() => {
    const c = document.querySelector('#land-scene > canvas'), b = document.querySelector('#gaia-char .k3d-buddies'), r = b && b.getBoundingClientRect();
    return { screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), land: document.body.dataset.land, mapLoop: Kingdom3D.world.attached,
      shot: c && [c.width, c.height, c.clientWidth, c.clientHeight], svg: !!document.querySelector('#land-scene > svg'),
      k3d: document.getElementById('gaia-char').dataset.k3d, girlsShown: [...document.querySelectorAll('#gaia-char .girl')].filter(g => getComputedStyle(g).display !== 'none').length,
      buddies: r && [Math.round(r.width), Math.round(r.height), Math.round(innerWidth - r.right), Math.round(innerHeight - r.bottom)], running: Kingdom3D.buddies.running, mood: Kingdom3D.buddies.moodNow,
      clouds: [...document.querySelectorAll('.kg-cloud')].filter(g => getComputedStyle(g).display !== 'none').length };
  });
  check('in a game: the map rests, the backdrop is the land in 3D at the screen\'s size', game.screen === 'game-screen' && game.land === 'math' && !game.mapLoop && game.shot && game.shot[0] === 360 && game.shot[1] === 640 && game.shot[2] === 360 && !game.svg && game.clouds === 0, game);
  check('in a game: the sisters are a live canvas in the corner, the drawn ones hidden', game.k3d === '1' && game.girlsShown === 0 && game.buddies && game.buddies[0] === 136 && game.buddies[1] === 163 && game.buddies[3] === 0 && game.running && game.mood === 'idle', game);
  const pixels = await page.evaluate(() => { const c = document.querySelector('#land-scene > canvas'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let lit = 0, sum = 0; for (let i = 0; i < d.length; i += 4 * 97) { if (d[i] + d[i + 1] + d[i + 2] > 40) lit++; sum++; } return lit / sum; });
  check('the backdrop is a real picture (not blank)', pixels > 0.98, pixels);

  // --- moods
  await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click());
  await wait(80);
  const happy = await page.evaluate(() => ({ mood: Kingdom3D.buddies.moodNow, cls: document.getElementById('gaia-char').className, stars: document.querySelectorAll('.gaia-star-burst').length }));
  check('a right answer: they jump for joy (and the stars burst over them)', happy.mood === 'happy' && happy.cls === 'gaia-happy' && happy.stars === 8, happy);
  await until(() => Kingdom3D.buddies.moodNow === 'idle', null, 5000);
  check('and settle again', await page.evaluate(() => document.getElementById('gaia-char').className === 'gaia-idle' && document.getElementById('gaia-char').dataset.k3d === '1'));
  await until(() => document.querySelectorAll('#options button:not([disabled])').length >= 3 && !document.querySelector('#options button.correct, #options button.wrong'), null, 8000).catch(() => {});
  await wait(300);
  await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val !== currentAnswer).click());
  await wait(80);
  check('a wrong answer: they droop', await page.evaluate(() => Kingdom3D.buddies.moodNow) === 'sad');
  await page.evaluate(() => setGaiaState('dance'));
  check('the end of a game: they dance, and go on dancing', await page.evaluate(() => Kingdom3D.buddies.moodNow) === 'dance' && (await wait(1500), await page.evaluate(() => Kingdom3D.buddies.moodNow)) === 'dance');
  await page.evaluate(() => setGaiaState('surprised'));
  check('time running out: they gasp', await page.evaluate(() => Kingdom3D.buddies.moodNow) === 'surprised');

  // --- the screen turns: the backdrop is taken again, the corner follows
  await page.setViewportSize({ width: 900, height: 760 });
  await until(() => { const c = document.querySelector('#land-scene > canvas'); return c && c.width === 900 && c.height === 760; }, null, 15000).then(() => check('the screen changed size: the backdrop is taken again to fit', true), () => check('the screen changed size: the backdrop is taken again to fit', false));
  await wait(300);
  const big = await page.evaluate(() => { const b = document.querySelector('#gaia-char .k3d-buddies'); return [b.clientWidth, b.clientHeight, b.width, b.height]; });
  check('on a taller screen the sisters are full size', big[0] === 172 && big[1] === 206 && big[2] === 172 && big[3] === 206, big);
  await page.setViewportSize({ width: 360, height: 640 });
  await wait(600);

  // --- back to the map
  await page.evaluate(() => goHome());
  await wait(600);
  const back = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), mapLoop: Kingdom3D.world.attached, land: document.body.dataset.land || '', scene: document.getElementById('land-scene').childNodes.length,
    running: Kingdom3D.buddies.running, canvas: !!document.querySelector('#map3d-stage canvas'), size: [Kingdom3D.canvas.width, Kingdom3D.canvas.height], last: GaiaProgress.getLastPlayedLand() }));
  check('home: the map is alive again at the screen\'s size, the corner sisters rest, the backdrop is gone', back.screen === 'main-menu' && back.mapLoop && !back.land && back.scene === 0 && !back.running && back.canvas && back.size[0] === 360 && back.size[1] === 640, back);

  // --- a game whose corner is hidden, and one with its own screen
  await page.evaluate(() => openLandPanel('chess')); await wait(400);
  await page.locator('#land-panel-body button').nth(0).click({ force: true }); await wait(500);
  const chess = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), land: document.body.dataset.land, shot: !!document.querySelector('#land-scene > canvas'), running: Kingdom3D.buddies.running, shown: document.querySelector('#gaia-char .k3d-buddies').getClientRects().length }));
  check('chess on a phone: the land behind it, the corner (hidden there) not drawn', chess.screen === 'chess-screen' && chess.land === 'chess' && chess.shot && !chess.running && chess.shown === 0, chess);
  await page.evaluate(() => goHome()); await wait(500);

  // --- the sisters' canvas is lost: the drawn ones come back, the game goes on
  await page.evaluate(() => openLandPanel('hebrew')); await wait(400);
  await page.locator('#land-panel-body button').nth(0).click({ force: true }); await wait(500);
  await page.evaluate(() => document.querySelector('#gaia-char .k3d-buddies').dispatchEvent(new Event('webglcontextlost')));
  await wait(100);
  const lost = await page.evaluate(() => ({ on: GaiaBuddies.on, k3d: document.getElementById('gaia-char').dataset.k3d || '', canvas: !!document.querySelector('#gaia-char canvas'), girls: [...document.querySelectorAll('#gaia-char .girl')].filter(g => getComputedStyle(g).display !== 'none').length, ready: Kingdom3D.buddies.ready }));
  check('the corner canvas lost: the drawn sisters are back', !lost.on && !lost.k3d && !lost.canvas && lost.girls === 2 && !lost.ready, lost);
  await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click());
  await wait(80);
  check('and they still cheer', await page.evaluate(() => document.getElementById('gaia-char').className) === 'gaia-happy');
  await page.evaluate(() => goHome()); await wait(500);

  // --- the map's canvas is lost: the drawn map and the drawn backdrops take over for good
  await page.evaluate(() => Kingdom3D.canvas.dispatchEvent(new Event('webglcontextlost')));
  await wait(300);
  const dropped = await page.evaluate(() => ({ state: GaiaMap3D.state, cls: document.getElementById('main-menu').className, map3d: !!document.getElementById('map3d'), drawn: !!document.querySelector('#map-scene-holder svg') && getComputedStyle(document.getElementById('map-scene-holder')).display !== 'none',
    hits: document.querySelectorAll('g.land-hit').length, canvas: Kingdom3D.canvas }));
  check('the map canvas lost: the drawn map is back, whole', dropped.state === 'no' && !/map3d/.test(dropped.cls) && !dropped.map3d && dropped.drawn && dropped.hits >= 9 && dropped.canvas === null, dropped);
  await page.click('g.land-hit[data-land="english"]', { force: true }); await wait(400);
  await page.locator('#land-panel-body button').nth(0).click({ force: true }); await wait(500);
  const flat = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id).join(), svg: !!document.querySelector('#land-scene > svg'), canvas: !!document.querySelector('#land-scene > canvas'), girls: [...document.querySelectorAll('#gaia-char .girl')].filter(g => getComputedStyle(g).display !== 'none').length }));
  check('and the games go on with the drawn backdrop and the drawn sisters', flat.screen === 'game-screen' && flat.svg && !flat.canvas && flat.girls === 2, flat);

  check('no page errors', errors.length === 0, errors.slice(0, 5));
  await browser.close();
  console.log(fails ? `\n${fails} FAILED` : '\nALL PASS');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(2); });
