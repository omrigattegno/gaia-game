// Runs the game's test suites one after another and sums them up.
//   node tests/run.js            every suite (the 3D one takes a few minutes: software GL)
//   node tests/run.js play qa    only these
// Each suite is a script of its own (node tests/<name>.js) that exits with 0 when all its checks pass.
const { spawnSync } = require('child_process');
const path = require('path');
const SUITES = {
    chess: 'the chess rules, against the known move counts of standard positions',
    play: 'a full play-through of every land and level on the drawn (2D) game',
    qa: 'fair letters, the clocks that wait, another round, the puzzle, the flags and fonts, the turn-me hint',
    offline: 'the service worker: the game opens and plays with no network',
    map3d: 'the 3D map, the corner sisters, the 3D backdrops, and falling back to the drawings'
};
const wanted = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SUITES);
const results = [];
for (const name of wanted) {
    if (!SUITES[name]) { console.log(`unknown suite "${name}" (there are: ${Object.keys(SUITES).join(', ')})`); process.exit(2); }
    console.log(`\n===== ${name}: ${SUITES[name]} =====`);
    const t0 = Date.now();
    const run = spawnSync(process.execPath, [path.join(__dirname, name + '.js')], { stdio: 'inherit', timeout: 15 * 60 * 1000 });
    results.push([name, run.status === 0, Math.round((Date.now() - t0) / 1000)]);
}
console.log('\n===== summary =====');
for (const [name, ok, s] of results) console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  (${s}s)`);
process.exit(results.every(r => r[1]) ? 0 : 1);
