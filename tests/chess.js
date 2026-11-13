// The chess rules against the known move counts (perft) of standard test positions.
const { open } = require('./lib');
(async () => {
  const { browser, page, errors } = await open({});
  const res = await page.evaluate(() => {
    const C = window.GaiaChess ? GaiaChess.Chess || GaiaChess : window.Chess;
    const run = (fen, depth) => { const c = new C(fen); const t = performance.now(); return c.perft(depth); };
    const cases = [
      ['start', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 4, 197281],
      ['kiwipete', 'r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1', 3, 97862],
      ['position3', '8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1', 5, 674624],
      ['position4', 'r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1', 4, 422333],
      ['position5', 'rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8', 3, 62379],
      ['position6', 'r4rk1/1pp1qppp/p1np1n2/2b1p1B1/2B1P1b1/P1NP1N2/1PP1QPPP/R4RK1 w - - 0 10', 3, 89890]
    ];
    return cases.map(([name, fen, d, want]) => { const got = run(fen, d); return { name, d, want, got, ok: got === want }; });
  });
  let fails = 0;
  for (const r of res) { if (!r.ok) fails++; console.log((r.ok ? 'PASS ' : 'FAIL ') + `perft ${r.name} depth ${r.d}: ${r.got} (expected ${r.want})`); }

  // --- the board itself: games played by random taps (every tap goes through the page's own handlers) ---
  const tick = ms => page.clock.runFor(ms);
  await tick(300);
  await page.click('.start-btn', { force: true }); await tick(300);
  await page.evaluate(() => { const m = document.getElementById('player-modal'); if (m && !m.hidden) document.getElementById('player-skip').click(); }); await tick(300);
  const play = async (mode, plies) => {
    await page.evaluate(m => { goHome(); startChess(m); }, mode); await tick(600);
    let moved = 0, promos = 0, ended = false;
    for (let i = 0; i < plies && !ended; i++) {
      const did = await page.evaluate(() => {
        const sqs = [...document.querySelectorAll('#chess-board .chess-sq')];
        const order = sqs.map((_, k) => k).sort(() => Math.random() - 0.5);
        for (const k of order) {
          sqs[k].click();
          const targets = sqs.filter(q => q.classList.contains('dot') || q.classList.contains('cap'));
          if (targets.length) {
            // prefer a capture or a far square now and then, so games reach every kind of move
            const caps = targets.filter(q => q.classList.contains('cap'));
            const pool = caps.length && Math.random() < 0.7 ? caps : targets;
            pool[Math.floor(Math.random() * pool.length)].click();
            return true;
          }
        }
        return false;
      });
      if (!did) break;
      moved++;
      if (await page.evaluate(() => { const b = document.getElementById('chess-promo'); if (b.hidden) return false; b.querySelectorAll('button')[Math.floor(Math.random() * 4)].click(); return true; })) promos++;
      await tick(1700);     // the slide, and the computer's answer when it is its turn
      ended = await page.evaluate(() => !document.getElementById('chess-end').hidden);
    }
    const state = await page.evaluate(() => ({ pieces: document.querySelectorAll('#chess-layer .chess-pc:not(.gone)').length, status: document.getElementById('chess-status').textContent, end: document.getElementById('chess-end').textContent.slice(0, 40), screen: document.querySelector('.screen.active').id }));
    return { mode, moved, promos, ended, ...state };
  };
  const games = [];
  for (const [mode, plies] of [['two', 260], ['two', 260], ['easy', 90], ['medium', 60]]) games.push(await play(mode, plies));
  for (const g of games) {
    const ok = g.screen === 'chess-screen' && (g.ended || g.moved >= 20) && g.pieces >= 2 && g.pieces <= 32;
    if (!ok) fails++;
    console.log((ok ? 'PASS ' : 'FAIL ') + `a game of random taps (${g.mode}): ${g.moved} moves, ${g.promos} promotions, ${g.ended ? 'ended: ' + g.end : 'still going'}, ${g.pieces} pieces left`);
  }
  // taking a move back, a hint, starting again
  await page.evaluate(() => { goHome(); startChess('two'); }); await tick(600);
  const tools = await page.evaluate(async () => {
    const sqs = [...document.querySelectorAll('#chess-board .chess-sq')];
    const at = n => sqs.find(q => +q.dataset.sq === n);
    at(12).click(); at(28).click();                       // e2-e4
    const afterMove = document.querySelectorAll('#chess-board .chess-sq.last').length;
    document.getElementById('chess-undo').click();
    const afterUndo = document.querySelectorAll('#chess-board .chess-sq.last').length;
    document.getElementById('chess-hint').click();
    return { afterMove, afterUndo };
  });
  await tick(1200);
  const hint = await page.evaluate(() => document.querySelectorAll('#chess-board .chess-sq.hint').length);
  await page.evaluate(() => document.getElementById('chess-restart').click()); await tick(600);
  const fresh = await page.evaluate(() => document.querySelectorAll('#chess-layer .chess-pc:not(.gone)').length);
  const toolsOk = tools.afterMove === 2 && tools.afterUndo === 0 && hint === 2 && fresh === 32;
  if (!toolsOk) fails++;
  console.log((toolsOk ? 'PASS ' : 'FAIL ') + 'a move, taking it back, a hint (two squares lit) and a fresh game', JSON.stringify({ ...tools, hint, fresh }));
  if (errors.length) { fails++; console.log('FAIL page errors', JSON.stringify(errors.slice(0, 5))); }
  console.log(fails ? `${fails} FAILED` : 'CHESS RULES PASS', errors.length ? JSON.stringify(errors) : '');
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
