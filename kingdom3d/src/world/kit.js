// A modelling kit for the kingdom: shapes that carry their colour in the vertices, so a whole
// landmark (dozens of parts in many colours) is one mesh and one draw. Plus noise, and signs
// painted on canvases (letters, numbers, flags).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { rng } from '../util.js';

const C = new THREE.Color();

// Gives every vertex of a geometry one colour (an sRGB hex), or a colour per vertex from fn(x, y, z).
export function tint(geo, hex) {
    const n = geo.attributes.position.count, a = new Float32Array(n * 3);
    if (typeof hex === 'function') {
        const p = geo.attributes.position;
        for (let i = 0; i < n; i++) { const c = hex(p.getX(i), p.getY(i), p.getZ(i)); C.set(c); a[i * 3] = C.r; a[i * 3 + 1] = C.g; a[i * 3 + 2] = C.b; }
    } else {
        C.set(hex);
        for (let i = 0; i < n; i++) { a[i * 3] = C.r; a[i * 3 + 1] = C.g; a[i * 3 + 2] = C.b; }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
    return geo;
}

// Bakes a position, rotation and scale into a geometry.
const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), P = new THREE.Vector3(), S3 = new THREE.Vector3();
export function at(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1, sx = 1, sy = 1, sz = 1 } = {}) {
    return geo.applyMatrix4(M4.compose(P.set(x, y, z), Q.setFromEuler(E.set(rx, ry, rz)), S3.set(s * sx, s * sy, s * sz)));
}

// Shapes, each already coloured and placed: part(geometry, hex, placement).
export const part = (geo, hex, where) => tint(where ? at(geo, where) : geo, hex);
export const box = (w, h, d, hex, where) => part(new THREE.BoxGeometry(w, h, d), hex, where);
export const rbox = (w, h, d, r, hex, where, seg = 3) => part(new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2, h / 2, d / 2)), hex, where);
export const cyl = (rTop, rBot, h, hex, where, seg = 20, open = false) => part(new THREE.CylinderGeometry(rTop, rBot, h, seg, 1, open), hex, where);
export const cone = (r, h, hex, where, seg = 20) => part(new THREE.ConeGeometry(r, h, seg), hex, where);
export const ball = (r, hex, where, seg = 18) => part(new THREE.SphereGeometry(r, seg, Math.max(8, Math.round(seg * 0.7))), hex, where);
export const blob = (r, hex, where, detail = 2) => part(new THREE.IcosahedronGeometry(r, detail), hex, where);
export const torus = (r, tube, hex, where, seg = 32) => part(new THREE.TorusGeometry(r, tube, 10, seg), hex, where);
export const lathe = (profile, hex, where, seg = 28) => part(new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), seg), hex, where);
// a flat shape with thickness (centred in depth), softly bevelled
export function extrude(shape, depth, hex, where, bevel = 0.04, curveSegments = 10) {
    const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments });
    g.translate(0, 0, -depth / 2);
    return part(g, hex, where);
}
// a tube along points
export function pipe(points, radius, hex, { closed = false, radial = 8, seg } = {}) {
    const pts = points.map(p => p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2]));
    const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, closed, 'centripetal'), seg || Math.max(6, pts.length * 6), radius, radial, closed);
    return tint(g, hex);
}

// Roughens a geometry: every vertex moves along its direction from the centre by up to amount
// (vertices at the same place move together), for rocks and mountains.
export function roughen(geo, amount, seed = 1, keepBase = null) {
    const p = geo.attributes.position, R = rng(seed), moved = new Map();
    for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        const key = Math.round(x * 1000) + '_' + Math.round(y * 1000) + '_' + Math.round(z * 1000);
        let k = moved.get(key);
        if (k === undefined) { k = 1 + (R() - 0.5) * 2 * amount; moved.set(key, k); }
        if (keepBase !== null && y <= keepBase) continue;
        p.setXYZ(i, x * k, y * (1 + (k - 1) * 0.5), z * k);
    }
    geo.computeVertexNormals();
    return geo;
}

// One mesh from coloured parts (they must all carry position, normal, uv and color).
export function fuse(parts, material, { cast = true, receive = true } = {}) {
    const ready = parts.map(g => {
        let geo = g.index ? g.toNonIndexed() : g;
        if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
        if (!geo.attributes.normal) geo.computeVertexNormals();
        if (!geo.attributes.color) tint(geo, '#ffffff');
        for (const name of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(name)) geo.deleteAttribute(name);
        return geo;
    });
    const mesh = new THREE.Mesh(mergeGeometries(ready, false), material);
    mesh.castShadow = cast; mesh.receiveShadow = receive;
    return mesh;
}

// ---- noise ----
function hash2(ix, iz, seed) {
    let h = (ix * 374761393 + iz * 668265263 + seed * 144665) | 0;
    h = (h ^ (h >>> 13)) * 1274126177 | 0;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
// smooth value noise in -1..1
export function noise2(x, z, seed = 0) {
    const ix = Math.floor(x), iz = Math.floor(z), fx = x - ix, fz = z - iz;
    const u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
    const a = hash2(ix, iz, seed), b = hash2(ix + 1, iz, seed), c = hash2(ix, iz + 1, seed), d = hash2(ix + 1, iz + 1, seed);
    return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1;
}
export function fbm(x, z, seed = 0, octaves = 3) {
    let s = 0, amp = 0.5, f = 1, norm = 0;
    for (let o = 0; o < octaves; o++) { s += amp * noise2(x * f, z * f, seed + o * 17); norm += amp; amp *= 0.5; f *= 2.03; }
    return s / norm;
}

// ---- signs painted on canvases ----
export function canvasTexture(w, h, draw, { srgb = true } = {}) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
}
// one glyph (a letter, a digit, a sign), centred; transparent around it unless bg is given
export function glyph(text, { color = '#ffffff', bg = null, font = "'Varela Round', 'Fredoka', 'Arial Rounded MT Bold', Arial, sans-serif", size = 256, weight = 700, scale = 0.72, stroke = null, round = 0.22 } = {}) {
    return canvasTexture(size, size, (x, w, h) => {
        if (bg) {
            const r = w * round;
            x.fillStyle = bg;
            x.beginPath(); x.moveTo(r, 0); x.arcTo(w, 0, w, h, r); x.arcTo(w, h, 0, h, r); x.arcTo(0, h, 0, 0, r); x.arcTo(0, 0, w, 0, r); x.closePath(); x.fill();
        }
        x.font = `${weight} ${Math.round(h * scale)}px ${font}`;
        x.textAlign = 'center'; x.textBaseline = 'alphabetic';
        const m = x.measureText(text);
        const asc = m.actualBoundingBoxAscent || h * scale * 0.7, desc = m.actualBoundingBoxDescent || 0;
        const y = h / 2 + (asc - desc) / 2;
        if (stroke) { x.lineWidth = h * 0.06; x.strokeStyle = stroke; x.lineJoin = 'round'; x.strokeText(text, w / 2, y); }
        x.fillStyle = color;
        x.fillText(text, w / 2, y);
    });
}
// a flat picture on a card (both sides), for signs, sails and flags
export function decal(texture, w, h, where, { doubleSide = true, lit = true, alphaTest = 0.35 } = {}) {
    const mat = lit
        ? new THREE.MeshStandardMaterial({ map: texture, roughness: 0.7, alphaTest, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide, transparent: false })
        : new THREE.MeshBasicMaterial({ map: texture, alphaTest, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    if (where) { m.position.set(where.x || 0, where.y || 0, where.z || 0); m.rotation.set(where.rx || 0, where.ry || 0, where.rz || 0); }
    return m;
}

export { rng };

// ---- one sheet for every painted sign ----
// Letters, numbers, flags and pictures are painted into cells of one canvas; cards cut from
// it share one texture and one material, so a land's signs are a single draw.
export class Atlas {
    constructor(size = 2048, height = 1024) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = size; this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.cells = new Map();
        this.x = 0; this.y = 0; this.row = 0;
        this.texture = new THREE.CanvasTexture(this.canvas);
        this.texture.colorSpace = THREE.SRGBColorSpace;
        this.texture.anisotropy = 4;
        this.material = new THREE.MeshStandardMaterial({ map: this.texture, roughness: 0.75, alphaTest: 0.4, side: THREE.DoubleSide });
    }
    // paints a cell once (by name) with draw(ctx, w, h); returns its place on the sheet
    cell(name, w, h, draw) {
        if (this.cells.has(name)) return this.cells.get(name);
        const pad = 4, W = this.canvas.width, H = this.canvas.height;
        if (this.x + w + pad > W) { this.x = 0; this.y += this.row + pad; this.row = 0; }
        if (this.y + h > H) throw new Error('Atlas: the sheet is full (' + name + ')');
        const x = this.x, y = this.y;
        this.ctx.save(); this.ctx.translate(x, y); this.ctx.beginPath(); this.ctx.rect(0, 0, w, h); this.ctx.clip();
        draw(this.ctx, w, h);
        this.ctx.restore();
        this.x += w + pad; this.row = Math.max(this.row, h);
        const c = { u0: x / W, v0: 1 - (y + h) / H, u1: (x + w) / W, v1: 1 - y / H, w, h };
        this.cells.set(name, c);
        this.texture.needsUpdate = true;
        return c;
    }
    // a glyph in a cell: a letter or a sign, optionally on a rounded tile
    glyph(text, { color = '#ffffff', bg = null, size = 128, scale = 0.74, stroke = null, font = "'Varela Round', 'Fredoka', 'Arial Rounded MT Bold', Arial, sans-serif" } = {}) {
        return this.cell('g:' + text + color + bg + size + stroke, size, size, (x, w, h) => {
            if (bg) { const r = w * 0.2; x.fillStyle = bg; x.beginPath(); x.moveTo(r, 0); x.arcTo(w, 0, w, h, r); x.arcTo(w, h, 0, h, r); x.arcTo(0, h, 0, 0, r); x.arcTo(0, 0, w, 0, r); x.closePath(); x.fill(); }
            x.font = `700 ${Math.round(h * scale)}px ${font}`;
            x.textAlign = 'center'; x.textBaseline = 'alphabetic';
            const m = x.measureText(text), asc = m.actualBoundingBoxAscent || h * scale * 0.7, desc = m.actualBoundingBoxDescent || 0;
            const y = h / 2 + (asc - desc) / 2;
            if (stroke) { x.lineWidth = h * 0.07; x.strokeStyle = stroke; x.lineJoin = 'round'; x.strokeText(text, w / 2, y); }
            x.fillStyle = color; x.fillText(text, w / 2, y);
        });
    }
    // a card cut from a cell, w wide and h high, placed; returns a geometry (for fusing) with its uv on the sheet
    card(cell, w, h, where) {
        const g = new THREE.PlaneGeometry(w, h);
        const uv = g.attributes.uv;
        for (let i = 0; i < uv.count; i++) uv.setXY(i, cell.u0 + uv.getX(i) * (cell.u1 - cell.u0), cell.v0 + uv.getY(i) * (cell.v1 - cell.v0));
        return where ? at(g, where) : g;
    }
    // cards fused into one mesh
    mesh(cards) {
        const m = new THREE.Mesh(mergeGeometries(cards.map(g => g.index ? g.toNonIndexed() : g), false), this.material);
        m.castShadow = false; m.receiveShadow = false;
        return m;
    }
    // a sprite (always facing the camera) showing a cell
    sprite(cell, size, color = '#ffffff', opts = {}) {
        const t = this.texture.clone();
        t.repeat.set(cell.u1 - cell.u0, cell.v1 - cell.v0); t.offset.set(cell.u0, cell.v0);
        t.needsUpdate = true;
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, color, transparent: true, depthWrite: false, ...opts }));
        s.scale.set(size * cell.w / cell.h, size, 1);
        return s;
    }
}
