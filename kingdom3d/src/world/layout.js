// Where everything is in the kingdom. North is -z (the castle, far from the camera), south is
// +z; the road winds from the castle's gate past every land to the chess garden.
import * as THREE from 'three';

// the ground mesh covers this box; the sea goes on beyond it
export const REGION = { x0: -48, x1: 48, z0: -100, z1: 72 };

// The lands, north to south: the landmark's place, footprint (r) and height (h), and where the
// sisters stand on the road beside it (the stop).
export const LANDS = [
    { key: 'castle',    x: 0,    z: -49,   r: 5.4, h: 7.6, stop: [0, -42.6] },
    { key: 'math',      x: 4.9,  z: -37,   r: 3.3, h: 6.3, stop: [1.9, -34.2] },
    { key: 'hebrew',    x: -4.9, z: -27,   r: 3.2, h: 4.8, stop: [-1.9, -24.2] },
    { key: 'reading',   x: 4.8,  z: -17,   r: 3.1, h: 4.2, stop: [1.9, -14.3] },
    { key: 'english',   x: -5.1, z: -7,    r: 3.3, h: 5.6, stop: [-1.9, -4.2] },
    { key: 'geography', x: 4.9,  z: 3,     r: 3.2, h: 6.6, stop: [1.9, 5.8] },
    { key: 'biology',   x: -4.9, z: 13,    r: 3.2, h: 3.2, stop: [-1.9, 15.8] },
    { key: 'memory',    x: 6.3,  z: 23,    r: 3.0, h: 3.6, stop: [1.8, 25.6] },
    { key: 'puzzle',    x: -3.0, z: 33.5,  r: 3.2, h: 4.4, stop: [-3.0, 33.5] },
    { key: 'chess',     x: 4.9,  z: 43.5,  r: 3.3, h: 3.0, stop: [1.8, 46.2] }
];
export const landByKey = key => LANDS.find(l => l.key === key);

// the bridge of the puzzle land carries the road over the river
export const BRIDGE = { x: -3.0, z: 33.5, ax: 0.399, az: 0.917, half: 2.9, rise: 0.95 };

// A smooth line through points on the ground, measured along its length.
export class Path {
    constructor(points, step = 0.25) {
        const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], 0, p[1])), false, 'centripetal');
        const n = Math.max(8, Math.round(curve.getLength() / step));
        this.pts = curve.getSpacedPoints(n).map(p => [p.x, p.z]);
        this.len = [0];
        for (let i = 1; i < this.pts.length; i++) this.len.push(this.len[i - 1] + Math.hypot(this.pts[i][0] - this.pts[i - 1][0], this.pts[i][1] - this.pts[i - 1][1]));
        this.length = this.len[this.len.length - 1];
        // segments by whole z, for quick distance checks
        this.rows = new Map();
        for (let i = 0; i < this.pts.length - 1; i++) {
            const z0 = Math.floor(Math.min(this.pts[i][1], this.pts[i + 1][1])), z1 = Math.floor(Math.max(this.pts[i][1], this.pts[i + 1][1]));
            for (let z = z0; z <= z1; z++) { if (!this.rows.has(z)) this.rows.set(z, []); this.rows.get(z).push(i); }
        }
    }
    // the point at distance s along the path: { x, z, tx, tz } (t: the direction of travel)
    at(s) {
        const { pts, len } = this;
        s = Math.min(this.length, Math.max(0, s));
        let lo = 0, hi = len.length - 1;
        while (hi - lo > 1) { const m = (lo + hi) >> 1; if (len[m] <= s) lo = m; else hi = m; }
        const k = (s - len[lo]) / Math.max(1e-6, len[hi] - len[lo]);
        const a = pts[lo], b = pts[hi], d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        return { x: a[0] + (b[0] - a[0]) * k, z: a[1] + (b[1] - a[1]) * k, tx: (b[0] - a[0]) / d, tz: (b[1] - a[1]) / d };
    }
    // the nearest point of the path to (x, z), looking no further than `reach`: { d, s } or null
    near(x, z, reach = 4) {
        let best = null;
        const seen = new Set();
        for (let r = Math.floor(z - reach); r <= Math.floor(z + reach); r++) {
            const row = this.rows.get(r);
            if (!row) continue;
            for (const i of row) {
                if (seen.has(i)) continue;
                seen.add(i);
                const a = this.pts[i], b = this.pts[i + 1], dx = b[0] - a[0], dz = b[1] - a[1], l2 = dx * dx + dz * dz || 1;
                const k = Math.min(1, Math.max(0, ((x - a[0]) * dx + (z - a[1]) * dz) / l2));
                const d = Math.hypot(x - a[0] - dx * k, z - a[1] - dz * k);
                if (d <= reach && (!best || d < best.d)) best = { d, s: this.len[i] + Math.sqrt(l2) * k };
            }
        }
        return best;
    }
    // the distance along the path of its point nearest to (x, z)
    project(x, z) {
        let best = Infinity, s = 0;
        for (let i = 0; i < this.pts.length; i++) { const d = Math.hypot(this.pts[i][0] - x, this.pts[i][1] - z); if (d < best) { best = d; s = this.len[i]; } }
        return s;
    }
}

const B = BRIDGE;
// The road: out of the castle's gate, past every stop, over the bridge, to the chess garden.
export const ROAD = new Path([
    [0, -45.4], [0, -42.6], [0.9, -38.2],
    [1.9, -34.2], [0.4, -29.2],
    [-1.9, -24.2], [-0.3, -19.2],
    [1.9, -14.3], [0.3, -9.2],
    [-1.9, -4.2], [-0.2, 0.8],
    [1.9, 5.8], [0.3, 10.8],
    [-1.9, 15.8], [-0.2, 20.6],
    [1.8, 25.6], [-0.9, 28.6],
    [B.x - B.ax * (B.half + 0.6), B.z - B.az * (B.half + 0.6)], [B.x, B.z], [B.x + B.ax * (B.half + 0.6), B.z + B.az * (B.half + 0.6)],
    [-0.6, 40.4], [1.8, 46.2], [3.0, 48.2]
]);
for (const land of LANDS) land.s = ROAD.project(land.stop[0], land.stop[1]);
export const BRIDGE_S = ROAD.project(B.x, B.z);

// The river: from the lagoon in the east, under the bridge, to the sea in the west.
export const RIVER = new Path([[14.5, 27.6], [9.0, 29.9], [3.0, 31.3], [B.x, B.z], [-8.5, 36.2], [-13.5, 37.3], [-19.5, 39.6], [-27, 40.6]], 0.4);
