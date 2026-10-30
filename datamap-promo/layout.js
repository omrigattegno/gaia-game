// Shared helpers, deterministic noise, terrain and the layout of the demo town.
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const seg = (t, a, b) => clamp((t - a) / (b - a));
export const smooth = (t) => t * t * (3 - 2 * t);
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut3 = (t) => 1 - Math.pow(1 - t, 3);
export const easeIn3 = (t) => t * t * t;
export const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

// mulberry32
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 2D simplex noise (Gustavson) with a seeded permutation
const PERM = new Uint8Array(512);
{
  const R = rng(31337);
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) { const j = Math.floor(R() * (i + 1)); const t = p[i]; p[i] = p[j]; p[j] = t; }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
}
const GRAD = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
const F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6;
export function noise2(x, y) {
  const s = (x + y) * F2, i = Math.floor(x + s), j = Math.floor(y + s);
  const t = (i + j) * G2, x0 = x - (i - t), y0 = y - (j - t);
  const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
  const ii = i & 255, jj = j & 255;
  const c = (gx, gy, g) => { let q = 0.5 - gx * gx - gy * gy; if (q < 0) return 0; q *= q; const d = GRAD[g & 7]; return q * q * (d[0] * gx + d[1] * gy); };
  return 70 * (c(x0, y0, PERM[ii + PERM[jj]]) + c(x1, y1, PERM[ii + i1 + PERM[jj + j1]]) + c(x2, y2, PERM[ii + 1 + PERM[jj + 1]]));
}
export function fbm(x, y, oct = 4) {
  let a = 1, f = 1, s = 0, n = 0;
  for (let k = 0; k < oct; k++) { s += a * noise2(x * f + k * 17.3, y * f - k * 9.1); n += a; a *= 0.5; f *= 2.03; }
  return s / n;
}

// gentle town plateau that rises into hills outside the ring
export function terrainH(x, z) {
  const r = Math.hypot(x * 0.92, z);
  const k = smooth(clamp((r - 215) / 190));
  const town = 0.028 * x - 0.02 * z + 1.6 * fbm(x * 0.008 + 3.1, z * 0.008 - 1.7, 2);
  const hills = 78 * (0.5 + 0.5 * fbm(x * 0.0023 + 11.3, z * 0.0023 + 4.2, 4)) + 9 * fbm(x * 0.011, z * 0.011, 2);
  return town + k * hills;
}

// ------------------------------- town layout -------------------------------
export const XS = [-195, -130, -65, 0, 65, 130, 195];
export const ZS = [-180, -118, -58, 0, 58, 118, 180];
export const swX = (i) => (XS[i] === 0 ? 22 : 13);
export const swZ = (j) => (ZS[j] === 0 ? 22 : 13);
export const SIDEWALK = 3;
export const TOWN = { x0: XS[0] - swX(0) / 2 - SIDEWALK, x1: XS[6] + swX(6) / 2 + SIDEWALK, z0: ZS[0] - swZ(0) / 2 - SIDEWALK, z1: ZS[6] + swZ(6) / 2 + SIDEWALK };
export const ROUNDABOUT = { r: 21, island: 10 };
export const FLOOR = 3.2;

function blockType(i, j) {
  if ((i === 2 || i === 3) && (j === 2 || j === 3)) return 'tower';
  if (i === 1 && j === 4) return 'park';
  if (i === 4 && j === 1) return 'school';
  if (i === 0 || i === 5 || j === 0 || j === 5) return 'villa';
  return 'resid';
}

export function buildLayout() {
  const R = rng(1988);
  const blocks = [], buildings = [], trees = [];
  let bid = 0;

  const baseAt = (x0, x1, z0, z1) =>
    Math.min(terrainH(x0, z0), terrainH(x1, z0), terrainH(x0, z1), terrainH(x1, z1), terrainH((x0 + x1) / 2, (z0 + z1) / 2)) - 1.2;

  // parts: [{cx, cz, w, d, y0 (relative to base), h, kind}]
  function addBuilding(parts, opts = {}) {
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9, top = 0;
    for (const p of parts) {
      x0 = Math.min(x0, p.cx - p.w / 2); x1 = Math.max(x1, p.cx + p.w / 2);
      z0 = Math.min(z0, p.cz - p.d / 2); z1 = Math.max(z1, p.cz + p.d / 2);
      top = Math.max(top, (p.y0 || 0) + p.h);
    }
    const base = baseAt(x0, x1, z0, z1);
    const b = {
      id: bid++, parts, base, top, x0, x1, z0, z1, cx: (x0 + x1) / 2, cz: (z0 + z1) / 2,
      roof: opts.roof || 'flat', facade: opts.facade ?? Math.floor(R() * 4), lot: opts.lot ?? null, hero: !!opts.hero,
    };
    buildings.push(b);
    return b;
  }

  for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) {
    const x0 = XS[i] + swX(i) / 2 + SIDEWALK, x1 = XS[i + 1] - swX(i + 1) / 2 - SIDEWALK;
    const z0 = ZS[j] + swZ(j) / 2 + SIDEWALK, z1 = ZS[j + 1] - swZ(j + 1) / 2 - SIDEWALK;
    const blk = { i, j, x0, x1, z0, z1, cx: (x0 + x1) / 2, cz: (z0 + z1) / 2, w: x1 - x0, d: z1 - z0, type: blockType(i, j), lots: [] };
    blocks.push(blk);
    const { w, d } = blk;

    if (blk.type === 'villa') {
      const nx = 3, nz = 2;
      for (let a = 0; a < nx; a++) for (let c = 0; c < nz; c++) {
        const lx0 = x0 + (w / nx) * a, lx1 = x0 + (w / nx) * (a + 1), lz0 = z0 + (d / nz) * c, lz1 = z0 + (d / nz) * (c + 1);
        const lot = { x0: lx0, x1: lx1, z0: lz0, z1: lz1 };
        blk.lots.push(lot);
        const lw = lx1 - lx0, ld = lz1 - lz0;
        const bw = lw * (0.52 + 0.14 * R()), bd = ld * (0.42 + 0.14 * R());
        // push the house towards the street edge of the lot
        const cz = c === 0 ? lz0 + 3.2 + bd / 2 : lz1 - 3.2 - bd / 2;
        const cx = (lx0 + lx1) / 2 + (R() - 0.5) * (lw - bw - 4) * 0.6;
        const floors = R() < 0.55 ? 2 : 3;
        const parts = [{ cx, cz, w: bw, d: bd, y0: 0, h: floors * 3.1 + 0.9, kind: 0 }];
        if (R() < 0.45) parts.push({ cx: cx + (R() - 0.5) * bw * 0.3, cz: cz + (R() - 0.5) * bd * 0.3, w: bw * 0.45, d: bd * 0.5, y0: floors * 3.1 + 0.9, h: 3.0, kind: 0 });
        else parts.push({ cx: cx + bw * 0.22, cz, w: 2.2, d: 1.2, y0: floors * 3.1 + 0.9, h: 1.3, kind: 1 });
        lot.b = addBuilding(parts, { roof: R() < 0.32 ? 'tile' : 'flat', lot });
        // yard trees
        const nt = 1 + (R() < 0.6 ? 1 : 0);
        for (let q = 0; q < nt; q++) {
          const tx = lx0 + 3 + R() * (lw - 6);
          const tz = c === 0 ? lz1 - 2.5 - R() * (ld - bd - 7) : lz0 + 2.5 + R() * (ld - bd - 7);
          trees.push({ x: tx, z: tz, r: 2.0 + R() * 1.3 });
        }
      }
    } else if (blk.type === 'resid') {
      if (R() < 0.5) {
        // two long slabs
        for (let c = 0; c < 2; c++) {
          const lz0 = z0 + (d / 2) * c, lz1 = z0 + (d / 2) * (c + 1);
          const lot = { x0, x1, z0: lz0, z1: lz1 };
          blk.lots.push(lot);
          const floors = 4 + Math.floor(R() * 5);
          const bw = w * (0.72 + 0.12 * R()), bd = 10.5 + R() * 2;
          const cz = (lz0 + lz1) / 2 + (R() - 0.5) * 3;
          const parts = [{ cx: (x0 + x1) / 2, cz, w: bw, d: bd, y0: 0, h: floors * FLOOR + 1, kind: 0 }];
          parts.push({ cx: (x0 + x1) / 2 - bw * 0.25, cz, w: 4, d: 4.5, y0: floors * FLOOR + 1, h: 3, kind: 1 });
          parts.push({ cx: (x0 + x1) / 2 + bw * 0.25, cz, w: 4, d: 4.5, y0: floors * FLOOR + 1, h: 3, kind: 1 });
          lot.b = addBuilding(parts, { lot });
        }
      } else {
        const n = w > 44 ? 3 : 2;
        for (let a = 0; a < n; a++) {
          const lx0 = x0 + (w / n) * a, lx1 = x0 + (w / n) * (a + 1);
          const lot = { x0: lx0, x1: lx1, z0, z1 };
          blk.lots.push(lot);
          const floors = 7 + Math.floor(R() * 6);
          const bw = Math.min(15, (lx1 - lx0) - 4), bd = 15 + R() * 4;
          const cx = (lx0 + lx1) / 2, cz = (z0 + z1) / 2 + (R() - 0.5) * (d - bd - 6);
          const parts = [{ cx, cz, w: bw, d: bd, y0: 0, h: floors * FLOOR + 1, kind: 0 },
                         { cx, cz, w: 5, d: 5, y0: floors * FLOOR + 1, h: 3.2, kind: 1 }];
          lot.b = addBuilding(parts, { lot });
          for (let q = 0; q < 2; q++) trees.push({ x: lx0 + 2.5 + R() * (lx1 - lx0 - 5), z: R() < 0.5 ? z0 + 2.5 : z1 - 2.5, r: 2.2 + R() });
        }
      }
    } else if (blk.type === 'tower') {
      const lot = { x0, x1, z0, z1 };
      blk.lots.push(lot);
      if (i === 3 && j === 2) {
        // hero tower: podium + shaft + crown
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        const shaftH = 22 * 3.3;
        lot.b = addBuilding([
          { cx, cz, w: w - 6, d: d - 6, y0: 0, h: 8, kind: 0 },
          { cx: cx + 1, cz, w: 21, d: 17, y0: 8, h: shaftH, kind: 0 },
          { cx: cx + 1, cz, w: 15, d: 11, y0: 8 + shaftH, h: 3.6, kind: 0 },
          { cx: cx - 3, cz: cz + 2, w: 4, d: 4, y0: 8 + shaftH + 3.6, h: 3.4, kind: 1 },
        ], { lot, hero: true, facade: 4 });
      } else if (i === 2 && j === 3) {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        lot.b = addBuilding([
          { cx, cz, w: w - 8, d: d - 7, y0: 0, h: 7, kind: 0 },
          { cx: cx - 1, cz: cz + 1, w: 18, d: 18, y0: 7, h: 19 * FLOOR, kind: 0 },
          { cx: cx - 1, cz: cz + 1, w: 6, d: 6, y0: 7 + 19 * FLOOR, h: 3.5, kind: 1 },
        ], { lot, facade: 5 });
      } else if (i === 2 && j === 2) {
        blk.lots.length = 0;
        for (let a = 0; a < 2; a++) {
          const lx0 = x0 + (w / 2) * a, lx1 = x0 + (w / 2) * (a + 1);
          const l2 = { x0: lx0, x1: lx1, z0, z1 };
          blk.lots.push(l2);
          const cx = (lx0 + lx1) / 2, cz = (z0 + z1) / 2 + (a ? 2 : -2);
          const floors = a ? 13 : 11;
          l2.b = addBuilding([
            { cx, cz, w: 14, d: 14, y0: 0, h: floors * FLOOR + 1, kind: 0 },
            { cx, cz, w: 5, d: 5, y0: floors * FLOOR + 1, h: 3.2, kind: 1 },
          ], { lot: l2, facade: 5 });
        }
      } else {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        lot.b = addBuilding([
          { cx: cx + 2, cz: cz - 5, w: w - 10, d: 17, y0: 0, h: 10 * 3.6, kind: 0 },
          { cx: cx - 8, cz: cz + 10, w: 18, d: 11, y0: 0, h: 5 * 3.6, kind: 0 },
          { cx: cx + 6, cz: cz - 5, w: 8, d: 6, y0: 36, h: 3, kind: 1 },
        ], { lot, facade: 4 });
      }
      // street trees around the tower blocks
      for (let x = x0 + 4; x < x1 - 2; x += 8.5) { trees.push({ x, z: z0 + 2.2, r: 2.3 }); trees.push({ x, z: z1 - 2.2, r: 2.3 }); }
    } else if (blk.type === 'park') {
      blk.lots.push({ x0, x1, z0, z1 });
      addBuilding([{ cx: x0 + 9, cz: z1 - 8, w: 7, d: 6, y0: 0, h: 4.2, kind: 0 }], { facade: 1 });
      let placed = 0, guard = 0;
      while (placed < 58 && guard++ < 4000) {
        const x = x0 + 3 + R() * (w - 6), z = z0 + 3 + R() * (d - 6);
        // keep the central lawn and the diagonal path open
        const u = (x - x0) / w, v = (z - z0) / d;
        if (Math.hypot(u - 0.52, v - 0.5) < 0.2) continue;
        if (Math.abs(u - v) < 0.07) continue;
        if (trees.some((t) => Math.hypot(t.x - x, t.z - z) < 4.6)) continue;
        trees.push({ x, z, r: 2.2 + R() * 1.6 });
        placed++;
      }
    } else if (blk.type === 'school') {
      blk.lots.push({ x0, x1, z0, z1 });
      addBuilding([
        { cx: (x0 + x1) / 2, cz: z1 - 7.5, w: w - 6, d: 11, y0: 0, h: 8.2, kind: 0 },
        { cx: x0 + 8.5, cz: (z0 + z1) / 2 - 5, w: 11, d: d - 20, y0: 0, h: 8.2, kind: 0 },
        { cx: x0 + 20, cz: z1 - 7.5, w: 5, d: 5, y0: 8.2, h: 2.6, kind: 1 },
      ], { facade: 1 });
    }
  }

  // street trees along the two main avenues and some secondary streets
  const R2 = rng(77);
  const nearCross = (v, arr, m) => arr.some((a) => Math.abs(v - a) < m);
  for (let z = -176; z <= 176; z += 10) {
    if (nearCross(z, ZS, 13) || Math.abs(z) < ROUNDABOUT.r + 8) continue;
    trees.push({ x: -12.6, z, r: 2.5 + R2() * 0.4 }); trees.push({ x: 12.6, z, r: 2.5 + R2() * 0.4 });
  }
  for (let x = -190; x <= 190; x += 10) {
    if (nearCross(x, XS, 13) || Math.abs(x) < ROUNDABOUT.r + 8) continue;
    trees.push({ x, z: -12.6, r: 2.5 + R2() * 0.4 }); trees.push({ x, z: 12.6, r: 2.5 + R2() * 0.4 });
  }
  for (const zc of [-118, 118, -58, 58]) for (let x = -188; x <= 188; x += 13) {
    if (nearCross(x, XS, 12) || R2() < 0.3) continue;
    trees.push({ x, z: zc + (zc > 0 ? -1 : 1) * (6.5 + 1.4), r: 2.0 + R2() * 0.6 });
  }

  // drop trees that ended up inside buildings
  const inB = (x, z, m) => buildings.some((b) => b.parts.some((p) => Math.abs(x - p.cx) < p.w / 2 + m && Math.abs(z - p.cz) < p.d / 2 + m));
  const treesOk = trees.filter((t) => !inB(t.x, t.z, t.r * 0.6));
  for (const t of treesOk) t.y = terrainH(t.x, t.z);

  // stagger order for the intro extrusion: distance from the town centre
  const maxD = Math.max(...buildings.map((b) => Math.hypot(b.cx, b.cz)));
  for (const b of buildings) b.growDelay = Math.hypot(b.cx, b.cz) / maxD;
  const hero = buildings.find((b) => b.hero);
  const maxH = Math.max(...buildings.map((b) => Math.hypot(b.cx - hero.cx, b.cz - hero.cz)));
  for (const b of buildings) b.modelDelay = Math.hypot(b.cx - hero.cx, b.cz - hero.cz) / maxH;
  return { blocks, buildings, trees: treesOk, hero };
}
