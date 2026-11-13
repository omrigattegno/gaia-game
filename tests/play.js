// A full play-through of every land and level through the map's own buttons (Firebase is cut off, so the boards are local).
const { open, activeScreen } = require('./lib');
let fails = 0;
const check = (name, ok, info) => { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (info !== undefined ? '  ' + JSON.stringify(info) : '')); };
(async () => {
  const { browser, page, errors } = await open(process.env.HTML ? { html: process.env.HTML } : {});
  const tick = ms => page.clock.runFor(ms);
  await tick(300);
  await page.click('.start-btn', { force: true }); await tick(300);
  await page.fill('#player-name-input', 'בודקת'); await page.click('#player-form .big-btn', { force: true }); await tick(300);
  const land = async key => { await page.click(`g.land-hit[data-land="${key}"]`, { force: true }); await tick(300); };
  const panelBtn = async i => { await page.locator('#land-panel-body button').nth(i).click({ force: true }); await tick(300); };
  const home = async () => { await page.locator('.screen.active .home-btn, .screen.active .btn-home').first().click({ force: true }); await tick(300); };
  const quizzes = [['math', 3], ['hebrew', 3], ['english', 5], ['geography', 2], ['biology', 2]];
  for (const [key, n] of quizzes) {
    for (let i = 0; i < n; i++) {
      await land(key); await panelBtn(i);
      for (let q = 0; q < 15; q++) {
        await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click());
        await tick(1600);
      }
      const r = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id)[0], score, stars: document.querySelectorAll('#final-stars span:not(.star-off)').length }));
      await tick(500);
      const saved = await page.evaluate(k => { const rows = JSON.parse(localStorage.getItem('gaiaBoards') || '{}')[k]; return { rows, card: document.querySelector('#end-board .board-card').textContent }; }, key + '/' + (await page.evaluate(() => String(currentLevel))));
      check(`${key} level#${i}: 15/15 → end screen, 150 pts, 3 stars, on the land's board`, r.screen === 'end-screen' && r.score === 150 && r.stars === 3 && saved.rows && saved.rows[0].name === 'בודקת' && saved.rows[0].grade === 100 && /צִיּוּן 100/.test(saved.card), { r, saved });
      await home();
    }
  }
  // multiplication: all tables incl. 'all'
  for (let t = 0; t < 10; t++) {
    await land('math'); await panelBtn(3);
    await page.locator('.mult-table-btn, .mult-all-btn').nth(t).click({ force: true }); await tick(300);
    for (let q = 0; q < 10; q++) { await page.evaluate(() => { const q = multQuestions[multIdx]; document.querySelector(`.mult-opt-btn[data-val="${q.answer}"]`).click(); }); await tick(1400); }
    const r = await page.evaluate(() => ({ prog: document.getElementById('mult-progress').textContent, stars: document.querySelectorAll('#mult-stars span:not(.star-off)').length, table: multCurrentTable }));
    check(`mult table ${r.table}: 10/10 → summary with 3 stars`, /סִיּוּם/.test(r.prog) && r.stars === 3, r);
    await home();
  }
  // memory: solve each variant perfectly
  for (let i = 0; i < 4; i++) {
    await land('memory'); await panelBtn(i);
    const pairs = await page.evaluate(() => memoryTotalPairs);
    for (let p = 0; p < pairs; p++) { await page.evaluate(p => { memoryCards.filter(c => c.pairId === p).forEach(c => document.getElementById('mcard-' + c.cardId).click()); }, p); await tick(950); }
    await tick(900);
    const r = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id)[0], score, stars: document.querySelectorAll('#final-stars span:not(.star-off)').length, level: currentLevel }));
    check(`memory ${r.level}: perfect → end screen, full score, 3 stars`, r.screen === 'end-screen' && r.score === pairs * 10 && r.stars === 3, r);
    await home();
  }
  // puzzle: numbers (panel) and image (menu), each size
  for (let i = 0; i < 3; i++) {
    await land('puzzle'); await panelBtn(i);
    await page.evaluate(() => { const n = puzzleGrid.length; puzzleGrid = Array.from({ length: n }, (_, k) => k < n - 1 ? k + 1 : 0); [puzzleGrid[n - 1], puzzleGrid[n - 2]] = [puzzleGrid[n - 2], puzzleGrid[n - 1]]; renderPuzzle(); });
    await page.locator('#puzzle-grid > div').nth(await page.evaluate(() => puzzleGrid.length - 1)).click({ force: true });
    await tick(1300);
    const r = await page.evaluate(() => ({ screen: [...document.querySelectorAll('.screen.active')].map(e => e.id)[0], score, max: scoreMax, level: currentLevel, stars: document.querySelectorAll('#final-stars span:not(.star-off)').length }));
    check(`number puzzle ${r.level}: solved → end screen, score ≤ ${r.max}`, r.screen === 'end-screen' && r.score > 0 && r.score <= r.max && r.stars >= 1, r);
    await home();
  }
  for (let img = 0; img < 5; img++) {
    await land('puzzle'); await panelBtn(3);
    await page.locator('#puzzle-img-list .puzzle-img-thumb').nth(img).click({ force: true }); await tick(100);
    await page.locator('#puzzle-menu .btn-level-1').click({ force: true }); await tick(300);
    const tiles = await page.evaluate(() => [...document.querySelectorAll('#puzzle-grid > div')].filter(d => d.style.backgroundImage || d.querySelector('svg, img, canvas') || d.textContent.trim()).length);
    await page.evaluate(() => { const n = puzzleGrid.length; puzzleGrid = Array.from({ length: n }, (_, k) => k < n - 1 ? k + 1 : 0); [puzzleGrid[n - 1], puzzleGrid[n - 2]] = [puzzleGrid[n - 2], puzzleGrid[n - 1]]; renderPuzzle(); });
    await page.locator('#puzzle-grid > div').nth(await page.evaluate(() => puzzleGrid.length - 1)).click({ force: true });
    await tick(1300);
    check(`image puzzle #${img}: image tiles, solved → end screen`, (await activeScreen(page)) === 'end-screen' && tiles >= 3, tiles);
    await home();
  }
  // reading: all 6 categories (5 by nikkud, third grade), all stories, summary, back to panel
  for (let c = 0; c < 6; c++) {
    await land('reading'); await panelBtn(c);
    const [nStories, nQ] = await page.evaluate(c => [readingData[c].stories.length, readingData[c].stories.reduce((s, st) => s + st.questions.length, 0)], c);
    for (let st = 0; st < nStories; st++) {
      await page.locator('.reading-story-pick-btn').nth(st).click({ force: true }); await tick(100);
      await page.locator('#reading-content .btn-reading').click({ force: true }); await tick(100);
      const qs = await page.evaluate(() => readingData[currentReadingCategoryIdx].stories[currentReadingStoryIdx].questions.length);
      for (let q = 0; q < qs; q++) { await page.evaluate(() => { const q = readingData[currentReadingCategoryIdx].stories[currentReadingStoryIdx].questions[currentReadingQuestionIdx]; document.getElementById('ropt-' + q.a).click(); }); await tick(1300); }
      await tick(400);
      const done = await page.evaluate(() => ({ text: document.getElementById('reading-content').textContent, stars: document.querySelectorAll('#reading-story-stars span:not(.star-off)').length }));
      if (!(/סוֹף הַסִּיפּוּר/.test(done.text) && done.stars === 3 && /צִיּוּן 100/.test(done.text))) check(`reading ${c}/${st}: story done view with 3 stars and grade 100`, false, done);
      await page.locator('#reading-content .btn-reading').click({ force: true }); await tick(200);   // back to the stories
    }
    const readingRows = await page.evaluate(c => JSON.parse(localStorage.getItem('gaiaBoards'))['reading/cat_' + c], c);
    check(`reading category ${c}: one row on its board, grade 100`, readingRows && readingRows.length === 1 && readingRows[0].grade === 100, readingRows);
    await page.locator('#reading-content .btn-reading').click({ force: true }); await tick(300);
    const sum = await page.textContent('#reading-content');
    await page.locator('#reading-content .btn-reading').click({ force: true }); await tick(400);
    const back = { screen: await activeScreen(page), open: await page.evaluate(() => document.getElementById('land-panel').classList.contains('open')) };
    check(`reading category ${c}: ${nStories} stories → ${nQ}/${nQ} summary → back to panel`, sum.includes(`${nQ} / ${nQ}`) && back.screen === 'main-menu' && back.open, back);
    await page.click('#land-panel-close', { force: true }); await tick(300);
  }
  // map badges / progress
  const prog = await page.evaluate(() => GaiaProgress._dump());
  const badge = await page.evaluate(() => document.querySelector('[data-badge="reading"]').textContent);
  check('map progress: reading 63 stars (21 stories × 3) shown on badge', prog.stars.reading === 63 && /63/.test(badge), { stars: prog.stars, badge });
  await land('math');
  const chips = await page.$$eval('#land-panel-body .level-chip', cs => cs.map(c => c.textContent.trim()));
  check('math panel shows best-level chips', chips.length === 3 && chips.every(c => c === '⭐3'), chips);
  check('NO JS ERRORS during the whole play-through', errors.length === 0, errors);
  console.log(fails ? `\n${fails} FAILED` : '\nFULL PLAY-THROUGH PASSED');
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
