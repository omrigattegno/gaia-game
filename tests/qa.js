// The fixes of the QA round: fair letters in the Hebrew game, fewer "+ 0" sums, the clocks that
// wait while the game is out of sight, the turn-your-phone hint, another round from the end
// screen, the puzzle's sliding lines, the site's own flags and fonts, labels and tap sizes.
const { open, ROOT } = require('./lib');
let fails = 0;
const check = (name, ok, info) => { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (info !== undefined ? '  ' + JSON.stringify(info).slice(0, 600) : '')); };
(async () => {
  const { browser, page, errors } = await open({ w: 390, h: 844 });
  const tick = ms => page.clock.runFor(ms);
  await tick(300);
  await page.click('.start-btn', { force: true }); await tick(300);
  await page.fill('#player-name-input', 'בודקת'); await page.click('#player-form .big-btn', { force: true }); await tick(300);
  const land = async key => { await page.evaluate(k => { closeLandPanel(); openLandPanel(k); }, key); await tick(300); };
  const panelBtn = async i => { await page.locator('#land-panel-body button').nth(i).click({ force: true }); await tick(300); };

  // --- Hebrew: the letters offered ---
  for (const [level, name] of [[1, 'first letter'], [2, 'last letter'], [3, 'any letter']]) {
    const r = await page.evaluate(level => {
      const FINALS = 'םןץףך', PAIRS = { 'ם': 'מ', 'ן': 'נ', 'ץ': 'צ', 'ף': 'פ', 'ך': 'כ', 'מ': 'ם', 'נ': 'ן', 'צ': 'ץ', 'פ': 'ף', 'כ': 'ך' };
      startHebrewGame(level);
      const bad = [], seen = new Set(); let finalsOffered = 0;
      for (let i = 0; i < 400; i++) {
        setupHebrewTurn(document.getElementById('game-content'));
        const opts = [...document.querySelectorAll('#options button')].map(b => b._val);
        const word = hebrewWordObj.full, shown = document.querySelector('.word-display').textContent;
        const idx = shown.indexOf('_'), ends = idx === word.length - 1 || word[idx + 1] === ' ';
        opts.forEach(o => seen.add(o));
        if (new Set(opts).size !== 3 || !opts.includes(currentAnswer) || word[idx] !== currentAnswer) bad.push(['options', word, opts]);
        if (opts.includes(PAIRS[currentAnswer])) bad.push(['both forms', word, opts]);
        const finals = opts.filter(o => FINALS.includes(o));
        if (finals.length && !ends) bad.push(['final inside', word, opts]);
        if (ends && opts.some(o => 'מנצפכ'.includes(o))) bad.push(['regular at end', word, opts]);
        finalsOffered += finals.length;
      }
      stopAllGames();
      return { bad: bad.slice(0, 4), nBad: bad.length, letters: seen.size, finalsOffered };
    }, level);
    check(`hebrew ${name}: 400 turns, three different letters, end-of-word forms only at a word's end, never both forms of a letter`,
      r.nBad === 0 && r.letters >= 20 && (level === 1 ? r.finalsOffered === 0 : r.finalsOffered > 20), r);
  }

  // --- math: nothing added or taken away only now and then; the sums stay in range ---
  for (const N of [10, 20]) {
    const r = await page.evaluate(N => {
      startMathGame(N);
      let zeros = 0, bad = 0; const answers = new Set();
      for (let i = 0; i < 600; i++) {
        setupMathTurn(document.getElementById('game-content'));
        const m = document.querySelector('.math-display').textContent.match(/^(\d+) ([+-]) (\d+) = \?$/);
        const a = +m[1], b = +m[3], res = m[2] === '+' ? a + b : a - b;
        if (b === 0) zeros++;
        const opts = [...document.querySelectorAll('#options button')].map(x => x._val);
        if (res !== currentAnswer || res < 0 || res > N || a > N || new Set(opts).size !== 3 || opts.some(o => o < 0) || !opts.includes(res)) bad++;
        answers.add(res);
      }
      stopAllGames();
      return { zeros, bad, answers: answers.size };
    }, N);
    check(`math up to ${N}: 600 questions in range with three different answers; "+ 0" / "- 0" in a few of them only`, r.bad === 0 && r.zeros > 5 && r.zeros < 80 && r.answers >= N - 1, r);
  }
  await page.evaluate(() => goHome()); await tick(300);

  // --- the clocks wait while the page is out of sight ---
  const hide = on => page.evaluate(on => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => on }); document.dispatchEvent(new Event('visibilitychange')); }, on);
  await land('math'); await panelBtn(0);
  await tick(3000);
  const before = await page.evaluate(() => ({ t: timeLeft, q: document.querySelector('.math-display').textContent, n: questionCount }));
  await hide(true);
  await tick(60000);
  const during = await page.evaluate(() => ({ t: timeLeft, q: document.querySelector('.math-display').textContent, n: questionCount, paused: GaiaPause.on, score }));
  await hide(false);
  await tick(2000);
  const after = await page.evaluate(() => ({ t: timeLeft, n: questionCount, paused: GaiaPause.on }));
  check('a question\'s clock waits while the page is hidden (a minute away costs nothing) and goes on after', before.t === 12 && during.t === 12 && during.q === before.q && during.n === 0 && during.paused && after.t === 10 && !after.paused, { before, during, after });
  // a question that comes up while hidden waits too
  await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click());
  await hide(true);
  await tick(20000);
  const next = await page.evaluate(() => ({ n: questionCount, t: timeLeft, total: getTimerSeconds(), screen: document.querySelector('.screen.active').id }));
  await hide(false);
  await tick(1000);
  check('the next question, shown while hidden, starts its clock only when the child is back', next.n === 1 && next.t === next.total && (await page.evaluate(() => timeLeft)) === next.total - 1, next);
  // the leaderboard's time skips the time away
  for (let q = 1; q < 15; q++) {
    if (q === 7) { await hide(true); await tick(600000); await hide(false); }
    await page.evaluate(() => [...document.querySelectorAll('#options button')].find(b => b._val === currentAnswer).click()); await tick(1600);
  }
  await tick(600);
  const res = await page.evaluate(() => ({ screen: document.querySelector('.screen.active').id, ms: GaiaBoards.lastResult && GaiaBoards.lastResult.ms }));
  check('ten minutes with the page hidden are not counted in the game\'s time on the board', res.screen === 'end-screen' && res.ms > 20000 && res.ms < 120000, res);

  // --- another round from the end screen ---
  const again = await page.evaluate(() => { const b = document.getElementById('end-again'); return b && b.textContent; });
  await page.click('#end-again', { force: true }); await tick(300);
  const round2 = await page.evaluate(() => ({ screen: document.querySelector('.screen.active').id, q: document.getElementById('q-num').textContent, score, type: currentGameType, level: currentLevel, land: document.body.dataset.land }));
  check('the end screen offers another round of the same game', /סִיבּוּב נוֹסָף/.test(again) && round2.screen === 'game-screen' && round2.q === '1' && round2.score === 0 && round2.type === 'math' && round2.level === 10 && round2.land === 'math', { again, round2 });
  await page.evaluate(() => goHome()); await tick(300);
  await land('memory'); await panelBtn(2);
  const pairs = await page.evaluate(() => memoryTotalPairs);
  for (let p = 0; p < pairs; p++) { await page.evaluate(p => { memoryCards.filter(c => c.pairId === p).forEach(c => document.getElementById('mcard-' + c.cardId).click()); }, p); await tick(950); }
  await tick(900);
  await page.click('#end-again', { force: true }); await tick(300);
  const mem2 = await page.evaluate(() => ({ screen: document.querySelector('.screen.active').id, level: currentLevel, cards: document.querySelectorAll('.memory-card').length, found: document.getElementById('mem-pairs-found').textContent }));
  check('another round of a memory game: the same kind, a fresh board', mem2.screen === 'memory-screen' && mem2.level === 'flags_easy' && mem2.cards === 12 && mem2.found === '0', mem2);
  await page.evaluate(() => goHome()); await tick(300);

  // --- the puzzle: a whole line slides ---
  await land('puzzle'); await panelBtn(1);
  const slide = await page.evaluate(() => {
    puzzleGrid = [1, 2, 3, 4, 5, 6, 0, 7, 8]; puzzleMoves = 0; renderPuzzle();
    const cells = () => [...document.querySelectorAll('#puzzle-grid > div')];
    cells()[8].click();                         // the far end of the gap's row: 7 and 8 both slide
    const row = puzzleGrid.slice(), movesRow = puzzleMoves, solved = puzzleSolved;
    puzzleSolved = false; puzzleGrid = [1, 2, 0, 4, 5, 3, 7, 8, 6]; puzzleMoves = 0; renderPuzzle();
    cells()[8].click();                         // the bottom of the gap's column: 3 and 6 slide up
    const col = puzzleGrid.slice(), movesCol = puzzleMoves;
    puzzleSolved = false; puzzleGrid = [1, 2, 3, 4, 0, 5, 7, 8, 6]; puzzleMoves = 0; renderPuzzle();
    cells()[0].click(); cells()[8].click();     // not in line with the gap: nothing moves
    return { row, movesRow, solved, col, movesCol, still: puzzleGrid.slice(), movesStill: puzzleMoves };
  });
  check('puzzle: a tap on a tile in the gap\'s row or column slides the whole line (one move a tile); other tiles stay',
    slide.row.join() === '1,2,3,4,5,6,7,8,0' && slide.movesRow === 2 && slide.solved && slide.col.join() === '1,2,3,4,5,6,7,8,0' && slide.movesCol === 2 && slide.still.join() === '1,2,3,4,0,5,7,8,6' && slide.movesStill === 0, slide);
  await tick(1500);
  await page.evaluate(() => goHome()); await tick(300);

  // --- reading: the right answer is not always in the same place ---
  const spread = await page.evaluate(() => {
    const data = [0, 0, 0], shown = [0, 0, 0];
    startReadingCategory(0);
    for (let round = 0; round < 40; round++) readingData.forEach((cat, c) => cat.stories.forEach((st, s) => st.questions.forEach((q, k) => {
      currentReadingCategoryIdx = c; currentReadingStoryIdx = s; currentReadingQuestionIdx = k;
      renderReadingQuestion();
      const buttons = [...document.querySelectorAll('#reading-opts .reading-opt-btn')];
      const place = buttons.findIndex(b => b.id === 'ropt-' + q.a);
      if (buttons.length !== q.options.length || place < 0 || buttons[place].textContent !== q.options[q.a]) throw new Error('options lost: ' + q.q);
      if (round === 0) data[q.a]++;
      shown[place]++;
    })));
    goHome();
    const total = shown.reduce((a, b) => a + b, 0);
    return { data, shown: shown.map(n => Math.round(100 * n / total)) };
  });
  check('reading: the right answer is shown first, second and third about equally often (in the data it is the middle one in most questions)',
    spread.data[1] > spread.data[0] * 2 && spread.shown.every(p => p > 26 && p < 41), spread);
  await tick(300);

  // --- the flags and the fonts are the site's own ---
  const flags = await page.evaluate(async () => {
    const results = await Promise.all(geographyData.map(c => new Promise(done => {
      const holder = document.createElement('div'); holder.innerHTML = flagImg(c.code);
      const img = holder.firstChild;
      const src = img.getAttribute('src');
      const probe = new Image();
      probe.onload = () => done({ code: c.code, src, ok: probe.naturalWidth > 0 }); probe.onerror = () => done({ code: c.code, src, ok: false });
      probe.src = src;
    })));
    const holder = document.createElement('div'); holder.innerHTML = flagImg('il'); document.body.appendChild(holder);
    const img = holder.firstChild; const alt = img.getAttribute('alt');
    flagMissing(img);
    const emoji = holder.textContent; holder.remove();
    return { n: results.length, failed: results.filter(r => !r.ok).map(r => r.src), outside: results.filter(r => /^https?:/.test(r.src)).length, alt, emoji };
  });
  check('all 60 flags load from the site\'s own files; no country code in the alt text; a missing file falls back to the flag\'s emoji', flags.n === 60 && flags.failed.length === 0 && flags.outside === 0 && flags.alt === '' && flags.emoji === '🇮🇱', flags);
  const fonts = await page.evaluate(async () => { await document.fonts.ready; return { he: document.fonts.check('16px "Varela Round"', 'שלום'), en: document.fonts.check('700 16px "Fredoka"', 'Hello 123'), links: [...document.querySelectorAll('link[href*="fonts.googleapis"], link[href*="gstatic.com"]')].length, mono: getComputedStyle(Object.assign(document.createElement('div'), { className: 'math-display' })).fontFamily }; });
  check('the fonts are the site\'s own files (nothing from Google Fonts)', fonts.he && fonts.en && fonts.links === 0, fonts);

  // --- labels, emoji ---
  const a11y = await page.evaluate(() => ({ homes: document.querySelectorAll('.home-btn').length, unlabeled: [...document.querySelectorAll('.home-btn')].filter(b => !b.getAttribute('aria-label')).length,
    icon: !!document.querySelector('link[rel="icon"]'), manifest: !!document.querySelector('link[rel="manifest"]'), desc: (document.querySelector('meta[name="description"]') || {}).content || '' }));
  check('every home button has a spoken label; the page has an icon, a manifest and a description', a11y.homes >= 11 && a11y.unlabeled === 0 && a11y.icon && a11y.manifest && a11y.desc.length > 40, a11y);
  const emoji = await page.evaluate(() => { const all = JSON.stringify([words, englishWords, phonicsData, biologyData]); return ['🫏', '🩷', '🛝', '🫘', '🫃', '🪺'].filter(e => all.includes(e)); });
  check('no emoji that older phones cannot draw in the word lists', emoji.length === 0, emoji);

  check('no page errors', errors.length === 0, errors.slice(0, 5));
  await browser.close();

  // --- a phone on its side ---
  const { chromium } = require('playwright');
  const fs = require('fs');
  const b2 = await chromium.launch();
  const mobile = async (w, h) => {
    const ctx = await b2.newContext({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true, serviceWorkers: 'block', reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    const HTML = fs.readFileSync(ROOT + '/index.html', 'utf8');
    await p.route('**/*', route => route.request().url() === 'https://gaia.test/index.html' ? route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: HTML }) : route.abort());
    await p.goto('https://gaia.test/index.html');
    return p;
  };
  const side = await mobile(667, 375);
  const s1 = await side.evaluate(() => ({ cls: document.body.className, shown: getComputedStyle(document.getElementById('rotate-hint')).display, paused: GaiaPause.on, text: document.getElementById('rotate-hint').textContent.trim() }));
  check('a phone on its side: the turn-me hint covers the game and the clocks wait', /rotate-me/.test(s1.cls) && s1.shown === 'flex' && s1.paused && /מְסוֹבְבִים/.test(s1.text), s1);
  await side.setViewportSize({ width: 375, height: 667 });
  await side.waitForTimeout(300);
  const s2 = await side.evaluate(() => ({ cls: document.body.className, shown: getComputedStyle(document.getElementById('rotate-hint')).display, paused: GaiaPause.on }));
  check('turned upright again: the hint is gone and the clocks run', !/rotate-me/.test(s2.cls) && s2.shown === 'none' && !s2.paused, s2);
  const tablet = await mobile(1024, 768);
  const s3 = await tablet.evaluate(() => ({ cls: document.body.className, shown: getComputedStyle(document.getElementById('rotate-hint')).display }));
  check('a tablet on its side is left alone', !/rotate-me/.test(s3.cls) && s3.shown === 'none', s3);
  await b2.close();

  console.log(fails ? `\n${fails} FAILED` : '\nQA FIXES PASS');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(2); });
