// Canvas maps draped on the terrain: clay base, plan line art, orthophoto and land-use (TABA) colours.
import { XS, ZS, swX, swZ, SIDEWALK, TOWN, ROUNDABOUT, rng, clamp } from './layout.js';

export const MAP_MIN = -240, MAP_SIZE = 480;
const N = 4096, S = N / MAP_SIZE;
const P = (v) => (v - MAP_MIN) * S;

function canvas() { const c = document.createElement('canvas'); c.width = c.height = N; return c; }
function rect(g, x0, z0, x1, z1, fill) { g.fillStyle = fill; g.fillRect(P(x0), P(z0), (x1 - x0) * S, (z1 - z0) * S); }
function strokeRect(g, x0, z0, x1, z1) { g.strokeRect(P(x0), P(z0), (x1 - x0) * S, (z1 - z0) * S); }
function circle(g, x, z, r, fill) { g.beginPath(); g.arc(P(x), P(z), r * S, 0, Math.PI * 2); g.fillStyle = fill; g.fill(); }
function line(g, x0, z0, x1, z1) { g.beginPath(); g.moveTo(P(x0), P(z0)); g.lineTo(P(x1), P(z1)); g.stroke(); }

// asphalt strips of every street (vertical: along z, horizontal: along x)
export function roadRects() {
  const r = [];
  const zA = ZS[0] - swZ(0) / 2, zB = ZS[6] + swZ(6) / 2, xA = XS[0] - swX(0) / 2, xB = XS[6] + swX(6) / 2;
  for (let i = 0; i < 7; i++) r.push({ x0: XS[i] - swX(i) / 2, x1: XS[i] + swX(i) / 2, z0: zA, z1: zB, vert: true, w: swX(i), c: XS[i] });
  for (let j = 0; j < 7; j++) r.push({ x0: xA, x1: xB, z0: ZS[j] - swZ(j) / 2, z1: ZS[j] + swZ(j) / 2, vert: false, w: swZ(j), c: ZS[j] });
  return r;
}
// pieces of a street centre line between intersections (keeps the junctions clean)
function streetSpans(r, margin) {
  const cross = r.vert ? ZS.map((z, j) => [z, swZ(j)]) : XS.map((x, i) => [x, swX(i)]);
  const out = [];
  for (let k = 0; k < cross.length - 1; k++) {
    let a = cross[k][0] + cross[k][1] / 2 + margin, b = cross[k + 1][0] - cross[k + 1][1] / 2 - margin;
    if (r.c === 0 && (k === 2 || k === 3)) { if (k === 2) b = Math.min(b, -ROUNDABOUT.r - 4); else a = Math.max(a, ROUNDABOUT.r + 4); }
    if (b > a) out.push([a, b]);
  }
  return out;
}
function dashed(g, r, off, dash, gap, margin = 2) {
  for (const [a, b] of streetSpans(r, margin)) {
    for (let s = a; s < b; s += dash + gap) {
      const e = Math.min(b, s + dash);
      if (r.vert) line(g, r.c + off, s, r.c + off, e); else line(g, s, r.c + off, e, r.c + off);
    }
  }
}
function solid(g, r, off, margin = 2) {
  for (const [a, b] of streetSpans(r, margin)) { if (r.vert) line(g, r.c + off, a, r.c + off, b); else line(g, a, r.c + off, b, r.c + off); }
}

// --------------------------------------------------------------- clay ----
export function drawClay(L) {
  const c = canvas(), g = c.getContext('2d');
  g.fillStyle = '#F3F5F9'; g.fillRect(0, 0, N, N);
  rect(g, TOWN.x0, TOWN.z0, TOWN.x1, TOWN.z1, '#EDF0F6');
  for (const r of roadRects()) rect(g, r.x0, r.z0, r.x1, r.z1, '#E0E5EF');
  circle(g, 0, 0, ROUNDABOUT.r, '#E0E5EF');
  circle(g, 0, 0, ROUNDABOUT.island + 1.2, '#EDF0F6');
  circle(g, 0, 0, ROUNDABOUT.island, '#F6F7FB');
  for (const b of L.blocks) {
    rect(g, b.x0 - 0.5, b.z0 - 0.5, b.x1 + 0.5, b.z1 + 0.5, '#E6E3EF');
    rect(g, b.x0, b.z0, b.x1, b.z1, b.type === 'park' ? '#F1F6F0' : '#F8F9FC');
  }
  g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 0.32 * S; g.lineCap = 'butt';
  for (const r of roadRects()) {
    if (r.w > 15) { dashed(g, r, -3.2, 4, 5); dashed(g, r, 3.2, 4, 5); solid(g, r, -0.25); solid(g, r, 0.25); }
    else dashed(g, r, 0, 4, 5);
  }
  g.beginPath(); g.arc(P(0), P(0), (ROUNDABOUT.r - 5) * S, 0, Math.PI * 2); g.setLineDash([3 * S, 4 * S]); g.stroke(); g.setLineDash([]);
  return c;
}

// --------------------------------------------------------- plan lines ----
export function drawPlan(L) {
  const c = canvas(), g = c.getContext('2d');
  g.strokeStyle = '#fff'; g.lineJoin = 'miter';
  // curbs and property lines
  g.lineWidth = 0.28 * S;
  for (const r of roadRects()) {
    for (const [a, b] of streetSpans(r, 0)) {
      if (r.vert) { line(g, r.x0, a, r.x0, b); line(g, r.x1, a, r.x1, b); } else { line(g, a, r.z0, b, r.z0); line(g, a, r.z1, b, r.z1); }
    }
  }
  g.beginPath(); g.arc(P(0), P(0), ROUNDABOUT.r * S, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.arc(P(0), P(0), ROUNDABOUT.island * S, 0, Math.PI * 2); g.stroke();
  g.setLineDash([2.5 * S, 3 * S]); g.lineWidth = 0.2 * S;
  for (const r of roadRects()) { if (r.w > 15) { dashed(g, r, -3.2, 2.5, 3); dashed(g, r, 3.2, 2.5, 3); } else dashed(g, r, 0, 2.5, 3); }
  g.setLineDash([]);
  for (const b of L.blocks) {
    g.lineWidth = 0.42 * S; strokeRect(g, b.x0, b.z0, b.x1, b.z1);
    g.lineWidth = 0.22 * S;
    for (const l of b.lots) strokeRect(g, l.x0, l.z0, l.x1, l.z1);
  }
  // buildings: outline, parapet and roof structures
  for (const b of L.buildings) for (const p of b.parts) {
    const x0 = p.cx - p.w / 2, x1 = p.cx + p.w / 2, z0 = p.cz - p.d / 2, z1 = p.cz + p.d / 2;
    if ((p.y0 || 0) === 0) {
      g.lineWidth = 0.36 * S; strokeRect(g, x0, z0, x1, z1);
      const k = Math.min(0.9, p.w / 6, p.d / 6);
      g.lineWidth = 0.16 * S; strokeRect(g, x0 + k, z0 + k, x1 - k, z1 - k);
    } else { g.lineWidth = 0.22 * S; strokeRect(g, x0, z0, x1, z1); }
  }
  // trees as plan symbols
  g.lineWidth = 0.14 * S;
  for (const t of L.trees) { g.beginPath(); g.arc(P(t.x), P(t.z), t.r * 0.85 * S, 0, Math.PI * 2); g.stroke(); line(g, t.x - 0.4, t.z, t.x + 0.4, t.z); line(g, t.x, t.z - 0.4, t.x, t.z + 0.4); }
  return c;
}

// ------------------------------------------------------- land use (TABA) ----
export const ZONE_COLORS = { villa: '#F6DE7A', resid: '#F3B868', tower: '#CDB0DD', park: '#9CD08E', school: '#CFA77D', road: '#F0BDBD' };
export function drawZone(L) {
  const c = canvas(), g = c.getContext('2d');
  rect(g, TOWN.x0, TOWN.z0, TOWN.x1, TOWN.z1, ZONE_COLORS.road);
  for (const b of L.blocks) rect(g, b.x0, b.z0, b.x1, b.z1, ZONE_COLORS[b.type]);
  circle(g, 0, 0, ROUNDABOUT.island, ZONE_COLORS.park);
  g.strokeStyle = 'rgba(120,40,40,0.35)'; g.lineWidth = 0.3 * S;
  for (const b of L.blocks) strokeRect(g, b.x0, b.z0, b.x1, b.z1);
  return c;
}

// ------------------------------------------------------------ orthophoto ----
function noiseFill(g, x0, z0, x1, z1, base, amp, cell, R) {
  rect(g, x0, z0, x1, z1, base);
  const n = Math.floor(((x1 - x0) * (z1 - z0)) / (cell * cell));
  for (let k = 0; k < n; k++) {
    const x = x0 + R() * (x1 - x0), z = z0 + R() * (z1 - z0), v = (R() - 0.5) * amp;
    g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
    g.fillRect(P(x), P(z), cell * S * (0.6 + R()), cell * S * (0.6 + R()));
  }
}
const CAR_COLS = ['#F2F2F0', '#E9E9E7', '#C9CCD1', '#9EA3AA', '#2B2E33', '#1C1E22', '#8C1D1D', '#23468F', '#5F6B7A', '#D8D2C2', '#3A5A40'];
function car(g, x, z, ang, col) {
  g.save(); g.translate(P(x), P(z)); g.rotate(ang);
  const l = 4.4 * S, w = 1.85 * S;
  g.fillStyle = 'rgba(0,0,0,0.28)'; g.fillRect(-l / 2 + 0.25 * S, -w / 2 + 0.3 * S, l, w);
  g.fillStyle = col; g.beginPath(); g.roundRect(-l / 2, -w / 2, l, w, 0.5 * S); g.fill();
  g.fillStyle = 'rgba(25,32,44,0.78)'; g.fillRect(-l * 0.08, -w / 2 + 0.2 * S, l * 0.26, w - 0.4 * S);
  g.fillStyle = 'rgba(25,32,44,0.55)'; g.fillRect(-l * 0.4, -w / 2 + 0.25 * S, l * 0.14, w - 0.5 * S);
  g.restore();
}
export function drawOrtho(L) {
  const c = canvas(), g = c.getContext('2d');
  const R = rng(4242);
  noiseFill(g, MAP_MIN, MAP_MIN, MAP_MIN + MAP_SIZE, MAP_MIN + MAP_SIZE, '#D3C7AC', 0.05, 2.2, R);
  // sidewalks + asphalt
  noiseFill(g, TOWN.x0, TOWN.z0, TOWN.x1, TOWN.z1, '#C3C5C8', 0.05, 0.9, R);
  for (const r of roadRects()) noiseFill(g, r.x0, r.z0, r.x1, r.z1, '#575B62', 0.06, 0.8, R);
  circle(g, 0, 0, ROUNDABOUT.r, '#575B62');
  circle(g, 0, 0, ROUNDABOUT.island + 1.0, '#C3C5C8');
  circle(g, 0, 0, ROUNDABOUT.island, '#7FA35F');
  circle(g, 0, 0, ROUNDABOUT.island * 0.45, '#9BBE77');
  // markings
  g.strokeStyle = 'rgba(240,240,236,0.92)'; g.lineWidth = 0.18 * S;
  for (const r of roadRects()) {
    if (r.w > 15) { g.strokeStyle = 'rgba(232,206,92,0.9)'; solid(g, r, -0.2); solid(g, r, 0.2); g.strokeStyle = 'rgba(240,240,236,0.92)'; dashed(g, r, -3.6, 3, 6); dashed(g, r, 3.6, 3, 6); solid(g, r, -r.w / 2 + 0.6); solid(g, r, r.w / 2 - 0.6); }
    else { dashed(g, r, 0, 3, 6); }
  }
  // zebra crossings next to every junction
  g.fillStyle = 'rgba(244,244,240,0.92)';
  for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) {
    if (XS[i] === 0 && ZS[j] === 0) continue;
    const wx = swX(i), wz = swZ(j);
    for (const sz of [-1, 1]) {           // crossings over the vertical street, before/after the junction
      const zc = ZS[j] + sz * (wz / 2 + 2.2);
      for (let s = XS[i] - wx / 2 + 0.8; s < XS[i] + wx / 2 - 0.8; s += 1.2) g.fillRect(P(s), P(zc - 1.6), 0.6 * S, 3.2 * S);
    }
    for (const sx of [-1, 1]) {
      const xc = XS[i] + sx * (wx / 2 + 2.2);
      for (let s = ZS[j] - wz / 2 + 0.8; s < ZS[j] + wz / 2 - 0.8; s += 1.2) g.fillRect(P(xc - 1.6), P(s), 3.2 * S, 0.6 * S);
    }
  }
  // blocks
  for (const b of L.blocks) {
    if (b.type === 'villa') {
      for (const l of b.lots) {
        noiseFill(g, l.x0, l.z0, l.x1, l.z1, R() < 0.5 ? '#86A866' : '#7E9F5F', 0.08, 1.1, R);
        g.strokeStyle = 'rgba(70,90,50,0.6)'; g.lineWidth = 0.25 * S; strokeRect(g, l.x0, l.z0, l.x1, l.z1);
        const h = l.b;
        if (h) {
          const p = h.parts[0], front = l.z0 < b.cz ? -1 : 1;
          const ez = front < 0 ? l.z0 : l.z1, hz = p.cz + front * p.d / 2;
          rect(g, p.cx + p.w / 2 - 3.4, Math.min(ez, hz), p.cx + p.w / 2 - 0.4, Math.max(ez, hz), '#C9C2B5');
          if (R() < 0.45) {
            const pz = front < 0 ? l.z1 - 4.2 : l.z0 + 1.2, px = l.x0 + 2 + R() * Math.max(0.5, (l.x1 - l.x0) - 10);
            rect(g, px - 0.6, pz - 0.6, px + 6.6, pz + 3.6, '#E2DDD2');
            rect(g, px, pz, px + 6, pz + 3, '#4FA6CE');
          }
        }
      }
    } else if (b.type === 'resid') {
      noiseFill(g, b.x0, b.z0, b.x1, b.z1, '#BDB7AC', 0.06, 0.9, R);
      for (const l of b.lots) {
        const gx0 = l.x0 + 2, gx1 = l.x1 - 2, gz0 = l.z0 + 2, gz1 = l.z1 - 2;
        if (gx1 - gx0 > 6 && gz1 - gz0 > 6) noiseFill(g, gx0, gz0, gx1, gz1, '#8CAD6C', 0.07, 1.0, R);
      }
      // parking strip along the block edge with cars
      const pz = b.z1 - 5.6;
      rect(g, b.x0 + 2, pz, b.x1 - 2, b.z1 - 0.5, '#7D8086');
      g.strokeStyle = 'rgba(240,240,236,0.9)'; g.lineWidth = 0.12 * S;
      for (let x = b.x0 + 2.5; x < b.x1 - 2.5; x += 2.6) line(g, x, pz, x, b.z1 - 0.8);
      for (let x = b.x0 + 3.8; x < b.x1 - 3.8; x += 2.6) if (R() < 0.62) car(g, x, pz + 2.6, Math.PI / 2, CAR_COLS[Math.floor(R() * CAR_COLS.length)]);
    } else if (b.type === 'tower') {
      noiseFill(g, b.x0, b.z0, b.x1, b.z1, '#CFC9BE', 0.05, 1.0, R);
      g.strokeStyle = 'rgba(150,140,125,0.35)'; g.lineWidth = 0.08 * S;
      for (let x = b.x0; x < b.x1; x += 2) line(g, x, b.z0, x, b.z1);
      for (let z = b.z0; z < b.z1; z += 2) line(g, b.x0, z, b.x1, z);
      for (let k = 0; k < 6; k++) { const x = b.x0 + 3 + R() * (b.w - 9), z = b.z0 + 3 + R() * (b.d - 9); rect(g, x, z, x + 5, z + 2.2, '#7FA35F'); }
    } else if (b.type === 'park') {
      noiseFill(g, b.x0, b.z0, b.x1, b.z1, '#8FB56F', 0.1, 1.3, R);
      g.strokeStyle = '#D9CCAE'; g.lineWidth = 2.6 * S; g.lineCap = 'round';
      line(g, b.x0 + 2, b.z0 + 2, b.x1 - 2, b.z1 - 2);
      g.beginPath(); g.arc(P(b.x0 + b.w * 0.52), P(b.z0 + b.d * 0.5), b.w * 0.2 * S, 0, Math.PI * 2); g.stroke();
      g.lineCap = 'butt';
      circle(g, b.x0 + b.w * 0.52, b.z0 + b.d * 0.5, b.w * 0.17, '#9CC27B');
      rect(g, b.x1 - 13, b.z0 + 4, b.x1 - 4, b.z0 + 12, '#D98B5F');
      circle(g, b.x1 - 8.5, b.z0 + 8, 2.2, '#5E9BD1');
    } else if (b.type === 'school') {
      noiseFill(g, b.x0, b.z0, b.x1, b.z1, '#C9C2B4', 0.05, 1.0, R);
      const cx0 = b.x0 + 18, cx1 = b.x1 - 4, cz0 = b.z0 + 4, cz1 = b.z1 - 17;
      rect(g, cx0 - 1.8, cz0 - 1.8, cx1 + 1.8, cz1 + 1.8, '#C2674C');
      rect(g, cx0, cz0, cx1, cz1, '#4F8FC0');
      g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 0.15 * S;
      strokeRect(g, cx0 + 1, cz0 + 1, cx1 - 1, cz1 - 1); line(g, (cx0 + cx1) / 2, cz0 + 1, (cx0 + cx1) / 2, cz1 - 1);
      g.beginPath(); g.arc(P((cx0 + cx1) / 2), P((cz0 + cz1) / 2), 2.2 * S, 0, Math.PI * 2); g.stroke();
    }
  }
  // curb-side parking along the minor streets
  for (const r of roadRects()) {
    if (r.w > 15) continue;
    for (const [a, b] of streetSpans(r, 7)) {
      for (const side of [-1, 1]) {
        for (let s = a; s < b - 5; s += 5.6 + R() * 7) {
          if (R() < 0.42) continue;
          const off = side * (r.w / 2 - 1.3), col = CAR_COLS[Math.floor(R() * CAR_COLS.length)];
          if (r.vert) car(g, r.c + off, s + 2.5, Math.PI / 2, col); else car(g, s + 2.5, r.c + off, 0, col);
        }
      }
    }
  }
  // a few moving cars on the avenues
  for (const r of roadRects()) {
    if (r.w <= 15) continue;
    for (const [a, b] of streetSpans(r, 6)) for (let s = a; s < b - 5; s += 14 + R() * 26) {
      const lane = (R() < 0.5 ? -1 : 1) * (R() < 0.5 ? 2 : 5.4), col = CAR_COLS[Math.floor(R() * CAR_COLS.length)];
      if (r.vert) car(g, r.c + lane, s, Math.PI / 2, col); else car(g, s, r.c + lane, 0, col);
    }
  }
  // building shadows (sun from the north-west, matches the scene light)
  const sh = [0.804, -0.594], sk = 0.62;
  g.fillStyle = 'rgba(20,24,34,0.22)';
  for (const b of L.buildings) {
    const top = b.top + 1.2;
    for (const p of b.parts) {
      if ((p.y0 || 0) !== 0) continue;
      const x0 = p.cx - p.w / 2, x1 = p.cx + p.w / 2, z0 = p.cz - p.d / 2, z1 = p.cz + p.d / 2;
      const dx = sh[0] * top * sk, dz = sh[1] * top * sk;
      g.beginPath();
      g.moveTo(P(x0), P(z0)); g.lineTo(P(x0 + dx), P(z0 + dz)); g.lineTo(P(x1 + dx), P(z0 + dz)); g.lineTo(P(x1 + dx), P(z1 + dz)); g.lineTo(P(x1), P(z1)); g.lineTo(P(x0), P(z1)); g.closePath();
      g.fill();
    }
  }
  // roofs
  for (const b of L.buildings) {
    for (const p of b.parts) {
      const x0 = p.cx - p.w / 2, x1 = p.cx + p.w / 2, z0 = p.cz - p.d / 2, z1 = p.cz + p.d / 2;
      if (b.roof === 'tile' && (p.y0 || 0) === 0) {
        rect(g, x0, z0, x1, z1, '#B65C40');
        g.strokeStyle = 'rgba(90,30,20,0.35)'; g.lineWidth = 0.1 * S;
        for (let z = z0 + 0.45; z < z1; z += 0.45) line(g, x0, z, x1, z);
        g.strokeStyle = 'rgba(255,220,200,0.45)'; g.lineWidth = 0.25 * S; line(g, x0, (z0 + z1) / 2, x1, (z0 + z1) / 2);
        continue;
      }
      const base = p.kind === 1 ? '#BDB9B2' : ['#D6D3CD', '#CFCBC3', '#DAD6CF', '#C9C6C0'][b.id % 4];
      noiseFill(g, x0, z0, x1, z1, base, 0.05, 0.7, R);
      g.strokeStyle = 'rgba(120,115,108,0.55)'; g.lineWidth = 0.32 * S; strokeRect(g, x0 + 0.16, z0 + 0.16, x1 - 0.16, z1 - 0.16);
      if (p.kind === 0 && p.w > 6 && p.d > 5) {
        // solar water heaters: panels + white tanks
        const nSol = Math.max(1, Math.min(8, Math.floor(p.w / 3.2)));
        const sz = z0 + 1.2;
        for (let k = 0; k < nSol; k++) {
          const sx = x0 + 1.2 + k * ((p.w - 2.4) / nSol);
          if (sx + 2 > x1 - 0.8) break;
          g.fillStyle = '#26365C'; g.fillRect(P(sx), P(sz), 1.0 * S, 2.0 * S); g.fillRect(P(sx + 1.05), P(sz), 1.0 * S, 2.0 * S);
          g.strokeStyle = 'rgba(160,190,230,0.55)'; g.lineWidth = 0.05 * S; line(g, sx + 0.5, sz, sx + 0.5, sz + 2); line(g, sx + 1.55, sz, sx + 1.55, sz + 2);
          g.fillStyle = '#F4F4F2'; g.fillRect(P(sx), P(sz + 2.15), 2.05 * S, 0.55 * S);
        }
        // AC units
        for (let k = 0; k < Math.floor(p.w * p.d / 60); k++) {
          const ax = x0 + 1 + R() * (p.w - 3), az = z0 + 4 + R() * Math.max(0.5, p.d - 6);
          g.fillStyle = '#E7E6E2'; g.fillRect(P(ax), P(az), 0.9 * S, 0.7 * S);
          g.fillStyle = '#8D9096'; g.beginPath(); g.arc(P(ax + 0.45), P(az + 0.35), 0.25 * S, 0, Math.PI * 2); g.fill();
        }
      }
    }
  }
  return c;
}
