// Measured typical floor (architectural survey + apartment areas vs. permit), drawn in metres inside an SVG.
import { clamp, lerp, seg, easeInOut, easeOut3, easeOutExpo } from './layout.js';

const NS = 'http://www.w3.org/2000/svg';
const FW = 26, FD = 14, AW = 11.4, AD = 7.0, OUT = 0.3, INN = 0.12;
const VB_FULL = [-2.3, -1.95, 29.6, 16.95];
const VB_ZOOM = [-2.3, -1.95, 17.9, 10.25];
export const APTS = [
  { n: 1, meas: 77.2, permit: 77.0, fill: 'rgba(47,107,255,0.16)', stroke: '#2F6BFF', mx: false, my: false },
  { n: 2, meas: 78.1, permit: 77.0, fill: 'rgba(31,164,99,0.15)', stroke: '#1FA463', mx: true, my: false },
  { n: 3, meas: 79.6, permit: 77.0, fill: 'rgba(217,130,43,0.18)', stroke: '#D9822B', mx: false, my: true },
  { n: 4, meas: 77.4, permit: 77.0, fill: 'rgba(214,72,120,0.14)', stroke: '#D64878', mx: true, my: true },
];
const TOL = 0.02; // 2% tolerance against the permit

let svg, walls = [], labels = [], dims = [], lasers = [], aptEls = [], details = [];
const el = (tag, attrs, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
const fx = (a, x) => (a.mx ? FW - x : x), fy = (a, y) => (a.my ? FD - y : y);
function pathLen(pts) { let s = 0; for (let k = 1; k < pts.length; k++) s += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]); return s; }
function wall(pts, w, t0, dur, g) {
  const p = el('path', { d: 'M' + pts.map((q) => q.join(',')).join('L'), fill: 'none', stroke: '#1B2F73', 'stroke-width': w, 'stroke-linecap': 'square', 'stroke-linejoin': 'miter' }, g);
  const len = pathLen(pts);
  p.setAttribute('stroke-dasharray', `${len} ${len}`);
  walls.push({ p, len, t0, dur });
}
function text(x, y, s, size, weight, fill, g, anchor = 'middle') {
  const t = el('text', { x, y, 'font-size': size, 'font-family': 'Heebo', 'font-weight': weight, fill, 'text-anchor': anchor, direction: 'rtl' }, g);
  t.textContent = s;
  return t;
}

export function buildPlan(root) {
  svg = root;
  svg.setAttribute('viewBox', VB_ZOOM.join(' '));
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  const gFill = el('g', {}), gDet = el('g', {}), gWall = el('g', {}), gDim = el('g', {}), gLab = el('g', {}), gLas = el('g', {}), gApt = el('g', {});
  // apartment fills (areas chapter)
  for (const a of APTS) {
    const x0 = a.mx ? FW - AW : 0, y0 = a.my ? FD - AD : 0;
    const r = el('rect', { x: x0, y: y0, width: AW, height: AD, fill: a.fill, stroke: a.stroke, 'stroke-width': 0.08 }, gFill);
    const cx = x0 + AW / 2, cy = y0 + AD / 2;
    const chip = el('g', {}, gApt);
    el('rect', { x: cx - 1.75, y: cy - 0.95, width: 3.5, height: 1.9, rx: 0.25, fill: '#fff', stroke: a.stroke, 'stroke-width': 0.07 }, chip);
    text(cx, cy - 0.15, `דירה ${a.n}`, 0.62, 800, '#0E1B3D', chip);
    text(cx, cy + 0.62, `${a.meas.toFixed(1)} מ״ר`, 0.55, 600, a.stroke, chip);
    aptEls.push({ r, chip, cx, cy });
  }
  // outer walls of the floor, with window gaps drawn later as thin double lines
  const T0 = 37.75;
  wall([[0, 0], [FW, 0], [FW, FD], [0, FD], [0, 0]], OUT, T0, 1.0, gWall);
  // party walls and core walls
  wall([[AW, 0], [AW, FD]], 0.22, T0 + 0.35, 0.6, gWall);
  wall([[FW - AW, 0], [FW - AW, FD]], 0.22, T0 + 0.4, 0.6, gWall);
  wall([[0, AD], [AW, AD]], 0.22, T0 + 0.45, 0.5, gWall);
  wall([[FW - AW, AD], [FW, AD]], 0.22, T0 + 0.5, 0.5, gWall);
  // interior walls, mirrored into the four apartments
  APTS.forEach((a, k) => {
    const d = T0 + 0.75 + k * 0.12;
    const P = (x, y) => [fx(a, x), fy(a, y)];
    wall([P(6.8, 0), P(6.8, 3.6), P(11.4, 3.6)], INN, d, 0.55, gWall);
    wall([P(6.8, 3.6), P(6.8, 5.6), P(8.5, 5.6), P(8.5, 3.6)], INN, d + 0.25, 0.5, gWall);
    wall([P(8.5, 4.45), P(10.2, 4.45)], INN, d + 0.4, 0.3, gWall);
    // door swings
    const door = (hx, hy, r, a0, a1) => {
      const [x, y] = P(hx, hy);
      const sx = a.mx ? -1 : 1, sy = a.my ? -1 : 1;
      const p0 = [x + sx * r * Math.cos(a0), y + sy * r * Math.sin(a0)], p1 = [x + sx * r * Math.cos(a1), y + sy * r * Math.sin(a1)];
      const sweep = (sx * sy > 0) === (a1 > a0) ? 1 : 0;
      el('path', { d: `M${x},${y}L${p0[0]},${p0[1]}A${r},${r} 0 0 ${sweep} ${p1[0]},${p1[1]}`, fill: 'none', stroke: '#2B4DB3', 'stroke-width': 0.04, 'stroke-dasharray': '0.12 0.08' }, gDet);
    };
    door(9.2, 3.6, 0.9, Math.PI, Math.PI * 1.5);
    door(7.0, 5.6, 0.75, 0, Math.PI * 0.5);
    door(11.4, 5.2, 0.95, Math.PI, Math.PI * 0.5);
    // windows on the facade
    for (const [w0, w1] of [[1.4, 3.4], [4.2, 5.9], [8.0, 10.2]]) {
      const [xa, ya] = P(w0, 0), [xb] = P(w1, 0);
      el('rect', { x: Math.min(xa, xb), y: ya - 0.17, width: Math.abs(xb - xa), height: 0.34, fill: '#fff', stroke: '#1B2F73', 'stroke-width': 0.035 }, gDet);
      el('line', { x1: xa, y1: ya, x2: xb, y2: ya, stroke: '#1B2F73', 'stroke-width': 0.03 }, gDet);
    }
    const [wx, wy0] = P(0, 2.0), [, wy1] = P(0, 4.6);
    el('rect', { x: wx - 0.17, y: Math.min(wy0, wy1), width: 0.34, height: Math.abs(wy1 - wy0), fill: '#fff', stroke: '#1B2F73', 'stroke-width': 0.035 }, gDet);
    // room names + areas
    const lab = (x, y, name, area, size) => {
      const g = el('g', {}, gLab);
      const [X, Y] = P(x, y);
      text(X, Y - 0.05, name, size, 700, '#1B2F73', g);
      text(X, Y + size * 0.95, `${area} מ״ר`, size * 0.78, 500, '#4A5875', g);
      labels.push({ g, t0: T0 + 1.65 + k * 0.05 });
    };
    lab(3.4, 3.3, 'סלון', '45.9', 0.62);
    lab(9.1, 1.6, 'חדר שינה', '16.4', 0.46);
    lab(7.65, 4.45, 'רחצה', '3.4', 0.3);
    lab(9.95, 5.75, 'מבואה', '7.4', 0.36);
  });
  // core: stairs + lift
  const cx0 = AW, cx1 = FW - AW;
  for (let y = 0.9; y < 6.2; y += 0.42) el('line', { x1: cx0 + 0.25, y1: y, x2: cx1 - 0.25, y2: y, stroke: '#2B4DB3', 'stroke-width': 0.035 }, gDet);
  el('line', { x1: (cx0 + cx1) / 2, y1: 0.9, x2: (cx0 + cx1) / 2, y2: 6.1, stroke: '#2B4DB3', 'stroke-width': 0.05 }, gDet);
  el('rect', { x: cx0 + 0.55, y: 8.6, width: cx1 - cx0 - 1.1, height: 2.1, fill: 'none', stroke: '#1B2F73', 'stroke-width': 0.08 }, gDet);
  el('path', { d: `M${cx0 + 0.55},8.6L${cx1 - 0.55},10.7M${cx1 - 0.55},8.6L${cx0 + 0.55},10.7`, stroke: '#1B2F73', 'stroke-width': 0.05 }, gDet);
  details.push(gDet);
  // dimension chains (top + left of apartment 1)
  const dimH = (x0, x1, y, s) => {
    const g = el('g', {}, gDim);
    el('line', { x1: x0, y1: y, x2: x1, y2: y, stroke: '#2B4DB3', 'stroke-width': 0.04 }, g);
    for (const x of [x0, x1]) el('line', { x1: x - 0.16, y1: y + 0.16, x2: x + 0.16, y2: y - 0.16, stroke: '#2B4DB3', 'stroke-width': 0.06 }, g);
    for (const x of [x0, x1]) el('line', { x1: x, y1: y - 0.25, x2: x, y2: y + 0.55, stroke: '#2B4DB3', 'stroke-width': 0.025 }, g);
    text((x0 + x1) / 2, y - 0.16, s, 0.4, 700, '#2B4DB3', g);
    return g;
  };
  const dimV = (y0, y1, x, s) => {
    const g = el('g', {}, gDim);
    el('line', { x1: x, y1: y0, x2: x, y2: y1, stroke: '#2B4DB3', 'stroke-width': 0.04 }, g);
    for (const y of [y0, y1]) el('line', { x1: x - 0.16, y1: y + 0.16, x2: x + 0.16, y2: y - 0.16, stroke: '#2B4DB3', 'stroke-width': 0.06 }, g);
    for (const y of [y0, y1]) el('line', { x1: x - 0.25, y1: y, x2: x + 0.55, y2: y, stroke: '#2B4DB3', 'stroke-width': 0.025 }, g);
    const t = text(x - 0.18, (y0 + y1) / 2, s, 0.4, 700, '#2B4DB3', g);
    t.setAttribute('transform', `rotate(-90 ${x - 0.18} ${(y0 + y1) / 2})`);
    return g;
  };
  dims.push({ g: dimH(0, 6.8, -0.75, '6.80'), t0: T0 + 1.9 }, { g: dimH(6.8, 11.4, -0.75, '4.60'), t0: T0 + 2.0 }, { g: dimH(0, 11.4, -1.45, '11.40'), t0: T0 + 2.1 }, { g: dimV(0, 7.0, -0.85, '7.00'), t0: T0 + 2.2 });
  // laser measurements
  const laser = (x0, y0, x1, y1, s, t0, lx, ly) => {
    const g = el('g', {}, gLas);
    const ln = el('line', { x1: x0, y1: y0, x2: x0, y2: y0, stroke: '#E5372D', 'stroke-width': 0.05 }, g);
    const glow = el('line', { x1: x0, y1: y0, x2: x0, y2: y0, stroke: 'rgba(229,55,45,0.25)', 'stroke-width': 0.22 }, g);
    const dot = el('circle', { cx: x0, cy: y0, r: 0.13, fill: '#E5372D', stroke: '#fff', 'stroke-width': 0.04 }, g);
    const hit = el('circle', { cx: x1, cy: y1, r: 0.0, fill: 'none', stroke: '#E5372D', 'stroke-width': 0.04 }, g);
    const chip = el('g', {}, g);
    el('rect', { x: lx - 0.95, y: ly - 0.36, width: 1.9, height: 0.62, rx: 0.12, fill: '#E5372D' }, chip);
    text(lx, ly + 0.08, `${s} מ׳`, 0.38, 800, '#fff', chip);
    lasers.push({ g, ln, glow, dot, hit, chip, x0, y0, x1, y1, t0 });
  };
  laser(OUT / 2, 5.7, 6.8 - INN / 2, 5.7, '6.54', 40.35, 3.4, 5.15);
  laser(9.9, OUT / 2, 9.9, 3.6 - INN / 2, '3.54', 41.2, 9.1, 2.55);
}

export function updatePlan(t) {
  if (!svg) return;
  const z = easeInOut(seg(t, 42.5, 43.6));
  svg.setAttribute('viewBox', VB_ZOOM.map((v, k) => lerp(v, VB_FULL[k], z)).join(' '));
  for (const w of walls) w.p.setAttribute('stroke-dashoffset', String(w.len * (1 - easeOut3(seg(t, w.t0, w.t0 + w.dur)))));
  for (const d of details) d.style.opacity = String(easeOut3(seg(t, 38.6, 39.4)));
  for (const l of labels) l.g.style.opacity = String(easeOutExpo(seg(t, l.t0, l.t0 + 0.5)));
  for (const d of dims) d.g.style.opacity = String(easeOutExpo(seg(t, d.t0, d.t0 + 0.45)) * (1 - seg(t, 42.4, 42.8)));
  for (const L of lasers) {
    const p = easeOut3(seg(t, L.t0, L.t0 + 0.35)), out = 1 - seg(t, 42.3, 42.7);
    const xe = lerp(L.x0, L.x1, p), ye = lerp(L.y0, L.y1, p);
    for (const e of [L.ln, L.glow]) { e.setAttribute('x2', xe); e.setAttribute('y2', ye); }
    L.g.style.opacity = String((t > L.t0 - 0.15 ? 1 : 0) * out);
    const h = seg(t, L.t0 + 0.33, L.t0 + 0.7);
    L.hit.setAttribute('r', String(0.12 + 0.35 * h)); L.hit.style.opacity = String(h > 0 && h < 1 ? 1 - h : 0);
    const c = easeOutExpo(seg(t, L.t0 + 0.3, L.t0 + 0.7));
    L.chip.style.opacity = String(c);
  }
  aptEls.forEach((a, k) => {
    const p = easeOutExpo(seg(t, 43.3 + k * 0.28, 43.75 + k * 0.28));
    a.r.style.opacity = String(p);
    a.chip.style.opacity = String(p);
    a.chip.setAttribute('transform', `translate(${a.cx} ${a.cy}) scale(${0.6 + 0.4 * p}) translate(${-a.cx} ${-a.cy})`);
  });
  for (const l of labels) if (t > 43.2) l.g.style.opacity = String(1 - 0.85 * seg(t, 43.2, 43.6));
}

export function areaRowsHTML() {
  return APTS.map((a) => {
    const dv = a.meas - a.permit, ok = Math.abs(dv) <= a.permit * TOL;
    return `<tr${ok ? '' : ' class="hl"'}><td>דירה ${a.n}</td><td>${a.meas.toFixed(1)}</td><td>${a.permit.toFixed(1)}</td>` +
      `<td><span dir="ltr">${dv >= 0 ? '+' : ''}${dv.toFixed(1)}</span></td><td class="${ok ? 'okc' : 'warn'}">${ok ? '✓' : '!'}</td></tr>`;
  }).join('');
}
