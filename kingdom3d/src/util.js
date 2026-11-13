// Small helpers shared by the scene modules. Every animation in the intro is a pure function
// of the time t (seconds from the start), so a frame can be drawn at any moment.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, k) => a + (b - a) * k;
export const smooth = (a, b, x) => { const k = clamp((x - a) / (b - a)); return k * k * (3 - 2 * k); };
export const easeInOut = k => (k = clamp(k), k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
// rises from 0 at a to 1 at b, then back to 0 from c to d
export const window4 = (x, a, b, c, d) => smooth(a, b, x) * (1 - smooth(c, d, x));

// a seeded random, so the stars, flowers and fireworks are the same on every run
export function rng(seed) {
    let s = seed >>> 0;
    return () => {
        s = (s + 0x6D2B79F5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// A keyframed track (numbers or THREE.Vector3): smooth through the keys (Catmull-Rom tangents
// in time), easing in at the first key and out at the last.
export class Track {
    constructor(keys) {   // keys: [[t, value], ...] sorted by t
        this.t = keys.map(k => k[0]);
        this.v = keys.map(k => k[1]);
        this.vec = typeof keys[0][1] !== 'number';
    }
    at(time, out) {
        const { t, v } = this, n = t.length;
        if (time <= t[0]) return this.vec ? out.copy(v[0]) : v[0];
        if (time >= t[n - 1]) return this.vec ? out.copy(v[n - 1]) : v[n - 1];
        let i = 0;
        while (time > t[i + 1]) i++;
        const t0 = t[i], t1 = t[i + 1], h = t1 - t0, s = (time - t0) / h;
        const s2 = s * s, s3 = s2 * s;
        const h00 = 2 * s3 - 3 * s2 + 1, h10 = s3 - 2 * s2 + s, h01 = -2 * s3 + 3 * s2, h11 = s3 - s2;
        const tan = j => (j <= 0 || j >= n - 1) ? null : [j - 1, j + 1, (t[j + 1] - t[j - 1])];
        const m0 = tan(i), m1 = tan(i + 1);
        if (!this.vec) {
            const d0 = m0 ? (v[m0[1]] - v[m0[0]]) / m0[2] * h : 0;
            const d1 = m1 ? (v[m1[1]] - v[m1[0]]) / m1[2] * h : 0;
            return h00 * v[i] + h10 * d0 + h01 * v[i + 1] + h11 * d1;
        }
        out.set(0, 0, 0).addScaledVector(v[i], h00).addScaledVector(v[i + 1], h01);
        if (m0) out.addScaledVector(TMP.subVectors(v[m0[1]], v[m0[0]]), h10 * h / m0[2]);
        if (m1) out.addScaledVector(TMP.subVectors(v[m1[1]], v[m1[0]]), h11 * h / m1[2]);
        return out;
    }
}
const TMP = new THREE.Vector3();

export const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

// A color in linear space from an sRGB hex (THREE.Color does the conversion).
export const col = hex => new THREE.Color(hex);

// Merges geometries that share one material into one mesh (fewer draw calls).
export function merged(geos, material, opts = {}) {
    const prepared = geos.map(g => {
        let geo = g.index ? g.toNonIndexed() : g;
        // every piece needs the same attributes to be merged
        if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
        for (const name of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geo.deleteAttribute(name);
        return geo;
    });
    const mesh = new THREE.Mesh(mergeGeometries(prepared, false), material);
    mesh.castShadow = !!opts.cast;
    mesh.receiveShadow = !!opts.receive;
    return mesh;
}

// Bakes a transform into a geometry (for merging).
export function placed(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1 } = {}) {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
    return geo.applyMatrix4(m);
}
