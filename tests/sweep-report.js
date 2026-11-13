// Summary of sweep reports: node tests/sweep-report.js <dir>...   (groups the findings by kind + element)
const fs = require('fs');
for (const dir of process.argv.slice(2)) {
  const { size, errors, report } = JSON.parse(fs.readFileSync(dir + '/report.json', 'utf8'));
  const groups = new Map();
  for (const r of report) for (const f of r.found) {
    const key = f.kind + ' | ' + (f.el || '') ;
    if (!groups.has(key)) groups.set(key, { n: 0, states: [], sample: f });
    const g = groups.get(key); g.n++; if (g.states.length < 4) g.states.push(r.state);
  }
  console.log(`== ${size.join('x')}: ${report.length} states, ${groups.size} distinct findings, page errors: ${errors.length}`);
  for (const [key, g] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
    const s = g.sample, extra = Object.entries(s).filter(([k]) => !['kind', 'el'].includes(k)).map(([k, v]) => `${k}=${v}`).join(' ');
    console.log(`  ${key}  ×${g.n}  [${g.states.join(', ')}]  ${extra}`);
  }
  if (errors.length) console.log('  ERRORS', JSON.stringify(errors.slice(0, 5)));
}
