// The landmarks of the kingdom, one for each land of the game: each is modelled here from
// simple coloured shapes, stands at its place from layout.js, and moves a little (flags,
// floating signs, a bobbing boat). A builder gets the kit of the world (ctx) and returns
// { group, update(t) }.
import * as THREE from 'three';
import { box, rbox, cyl, cone, ball, blob, torus, lathe, extrude, pipe, part, at, tint, roughen, fuse, rng } from './kit.js';
import { buildCastle } from '../castle.js';
import { heartShape, starShape } from '../geo.js';
import { BRIDGE, BRIDGE_S, ROAD } from './layout.js';

const TAU = Math.PI * 2;

// ---- shapes used by more than one land ----

// the signs of arithmetic, about 1 unit across, as flat shapes
function signShapes(kind) {
    const bar = (w, h, x = 0, y = 0) => { const s = new THREE.Shape(); s.moveTo(x - w / 2, y - h / 2); s.lineTo(x + w / 2, y - h / 2); s.lineTo(x + w / 2, y + h / 2); s.lineTo(x - w / 2, y + h / 2); s.closePath(); return s; };
    const T = 0.3;
    if (kind === '-') return [bar(0.9, T)];
    if (kind === '=') return [bar(0.9, T * 0.85, 0, 0.24), bar(0.9, T * 0.85, 0, -0.24)];
    if (kind === ':') { const d = y => { const s = new THREE.Shape(); s.absarc(0, y, 0.17, 0, TAU, false); return s; }; return [bar(0.95, T * 0.85), d(0.4), d(-0.4)]; }
    // a plus (the times sign is a plus turned by 45 degrees)
    const s = new THREE.Shape(), a = 0.48, b = T / 2;
    s.moveTo(-b, -a); s.lineTo(b, -a); s.lineTo(b, -b); s.lineTo(a, -b); s.lineTo(a, b); s.lineTo(b, b); s.lineTo(b, a); s.lineTo(-b, a);
    s.lineTo(-b, b); s.lineTo(-a, b); s.lineTo(-a, -b); s.lineTo(-b, -b); s.closePath();
    return [s];
}
// a chunky sign, standing: parts for fusing
function sign(kind, size, hex, where) {
    const turn = kind === 'x' ? Math.PI / 4 : 0;
    return signShapes(kind === 'x' ? '+' : kind).map(s => {
        const g = new THREE.ExtrudeGeometry(s, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2, curveSegments: 14 });
        g.translate(0, 0, -0.15);
        if (turn) g.rotateZ(turn);
        g.scale(size, size, size);
        return part(g, hex, where);
    });
}

// a flag that ripples from its pole: a card of the atlas, or one colour
function makeFlag(w, h, material, uv = null) {
    const g = new THREE.PlaneGeometry(w, h, 8, 2);
    g.translate(w / 2, 0, 0);
    if (uv) { const a = g.attributes.uv; for (let i = 0; i < a.count; i++) a.setXY(i, uv.u0 + a.getX(i) * (uv.u1 - uv.u0), uv.v0 + a.getY(i) * (uv.v1 - uv.v0)); }
    const m = new THREE.Mesh(g, material);
    const base = g.attributes.position.array.slice();
    m.userData.wave = (t, phase = 0) => {
        const p = g.attributes.position;
        for (let i = 0; i < p.count; i++) { const x = base[i * 3], k = x / w; p.setZ(i, Math.sin(x * 5.5 - t * 6 + phase) * 0.09 * k * (w / 0.8)); }
        p.needsUpdate = true;
    };
    return m;
}

// a big round tree and a big pine, as parts (for the forest and the gardens)
function roundTree(x, z, s, y = 0) {
    return [
        cyl(0.14 * s, 0.2 * s, 1.3 * s, '#8a5a3c', { x, y: y + 0.65 * s, z }, 8),
        blob(0.95 * s, '#4fae4a', { x, y: y + 1.95 * s, z }), blob(0.7 * s, '#63c257', { x: x + 0.55 * s, y: y + 1.6 * s, z: z + 0.2 * s }),
        blob(0.68 * s, '#58b84f', { x: x - 0.5 * s, y: y + 1.65 * s, z: z - 0.15 * s }), blob(0.5 * s, '#7ed068', { x: x + 0.1 * s, y: y + 2.55 * s, z: z + 0.1 * s })
    ];
}
function pineTree(x, z, s, y = 0) {
    return [
        cyl(0.11 * s, 0.16 * s, 0.9 * s, '#7a4e32', { x, y: y + 0.45 * s, z }, 8),
        cone(1.0 * s, 1.5 * s, '#2f8f5a', { x, y: y + 1.35 * s, z }, 10), cone(0.8 * s, 1.35 * s, '#38a064', { x, y: y + 2.15 * s, z }, 10),
        cone(0.56 * s, 1.2 * s, '#49b271', { x, y: y + 2.95 * s, z }, 10)
    ];
}

// ---- the castle, on its hill ----
function castle(ctx) {
    const group = new THREE.Group();
    const c = buildCastle(ctx.castleMats);
    c.group.position.set(0, 0, 76.5);
    const holder = new THREE.Group();
    holder.scale.setScalar(0.19);
    holder.add(c.group);
    group.add(holder);
    c.group.traverse(o => { if (o.isMesh && o.castShadow) o.receiveShadow = true; });
    return { group, update(t) { c.update(t); } };
}

// ---- the math mountain: snowy peaks, a flag with a plus on the summit, signs all around ----
function math(ctx) {
    const group = new THREE.Group(), R = rng(101);
    const peak = (r, h, x, z, seed, snowAt) => {
        const g = new THREE.ConeGeometry(r, h, 11, 6);
        g.translate(0, h / 2, 0);
        roughen(g, 0.13, seed, 0.001);
        tint(g, (px, py, pz) => {
            const k = py / h, wob = 0.07 * Math.sin(Math.atan2(pz, px) * 4 + seed);
            if (k > snowAt + wob) return '#ffffff';
            if (k < 0.16) return '#79b356';
            return k > 0.45 ? '#8f9ccb' : '#7d8abb';
        });
        return at(g, { x, z });
    };
    const rocks = [peak(2.35, 4.7, 0.1, -0.4, 3, 0.62), peak(1.6, 3.1, -1.75, -0.2, 8, 0.7), peak(1.25, 2.2, 1.75, -0.9, 13, 0.76)];
    for (const [x, z, s] of [[-2.5, 1.2, 0.42], [2.5, 0.6, 0.36], [1.2, 1.9, 0.25]]) rocks.push(roughen(blob(s, '#8f97b4', { x, y: s * 0.5, z }, 1), 0.2, 5 + x));
    group.add(fuse(rocks, ctx.mats.rock));

    const bits = [];
    // a trail of pale stones zigzagging up the front
    for (let k = 0; k < 15; k++) {
        const y = 0.25 + k * 0.22, r = 2.35 * (1 - y / 4.7) + 0.06, a = Math.sin(k * 0.85) * 0.75;
        bits.push(ball(0.085, '#fff8e6', { x: 0.1 + Math.sin(a) * r, y, z: -0.4 + Math.cos(a) * r, sy: 0.5 }, 8));
    }
    bits.push(cyl(0.035, 0.035, 1.25, '#7a5a3a', { x: 0.1, y: 4.7 + 0.5, z: -0.4 }, 6));
    bits.push(ball(0.07, '#ffd54f', { x: 0.1, y: 4.7 + 1.15, z: -0.4 }, 8));
    group.add(fuse(bits, ctx.mats.paint));

    // chunky signs at the foot of the mountain
    const signs = [
        ...sign('+', 1.0, '#ffa726', { x: -1.95, y: 0.56, z: 2.0, ry: 0.35, rz: 0.08 }),
        ...sign('x', 0.95, '#29b6f6', { x: 0.15, y: 0.52, z: 2.55, ry: -0.1, rz: -0.06 }),
        ...sign('-', 0.95, '#66bb6a', { x: 2.05, y: 0.26, z: 1.85, ry: -0.4 })
    ];
    group.add(fuse(signs, ctx.mats.gloss));

    // signs floating round the summit
    const floaters = [['=', '#ef5350', -1.7, 3.5, 0.9, 0.62], [':', '#ab47bc', 1.75, 3.1, 0.7, 0.66], ['+', '#f06fa7', 0.5, 5.4, 1.1, 0.5]].map(([k, hex, x, y, z, s], i) => {
        const m = fuse(sign(k, s, hex), ctx.mats.gloss, { receive: false });
        m.position.set(x, y, z);
        m.userData = { y, phase: i * 2.1 };
        group.add(m);
        return m;
    });

    // the flag on the summit: red, with a white plus
    const cell = ctx.atlas.cell('flag-plus', 128, 96, (x, w, h) => {
        x.fillStyle = '#ef5350'; x.fillRect(0, 0, w, h);
        x.fillStyle = '#ffffff'; x.fillRect(w / 2 - 9, 18, 18, h - 36); x.fillRect(w / 2 - 30, h / 2 - 9, 60, 18);
    });
    const flag = makeFlag(0.8, 0.56, ctx.atlas.material, cell);
    flag.position.set(0.13, 4.7 + 0.82, -0.4);
    group.add(flag);

    return {
        group,
        update(t) {
            flag.userData.wave(t);
            for (const m of floaters) { m.position.y = m.userData.y + 0.16 * Math.sin(t * 1.3 + m.userData.phase); m.rotation.y = 0.5 * Math.sin(t * 0.7 + m.userData.phase); }
        }
    };
}

// ---- the word forest: tall trees, mushrooms, a signpost, letters hanging from the branches ----
function hebrew(ctx) {
    const group = new THREE.Group();
    const trees = [...pineTree(-1.75, -0.7, 1.45), ...roundTree(1.3, -0.9, 1.5), ...pineTree(2.35, 0.5, 1.0), ...roundTree(-0.6, -1.9, 1.15), ...roundTree(-2.5, 0.9, 0.85)];
    // mushrooms
    for (const [x, z, s] of [[0.55, 1.9, 1], [1.05, 2.3, 0.7], [-1.5, 1.9, 0.8]]) {
        trees.push(cyl(0.09 * s, 0.12 * s, 0.34 * s, '#fff3e0', { x, y: 0.17 * s, z }, 8));
        const cap = new THREE.SphereGeometry(0.3 * s, 14, 8, 0, TAU, 0, Math.PI / 2);
        trees.push(part(cap, '#e53935', { x, y: 0.32 * s, z, sy: 0.8 }));
        for (const [a, e] of [[0.4, 0.5], [2.4, 0.7], [4.3, 0.45], [1.2, 1.15]]) {
            trees.push(ball(0.045 * s, '#ffffff', { x: x + Math.sin(a) * Math.sin(e) * 0.29 * s, y: 0.32 * s + Math.cos(e) * 0.24 * s, z: z + Math.cos(a) * Math.sin(e) * 0.29 * s }, 6));
        }
    }
    // the signpost
    trees.push(cyl(0.06, 0.07, 1.25, '#8a5a3c', { x: -0.35, y: 0.62, z: 1.55 }, 8));
    trees.push(rbox(1.35, 0.56, 0.1, 0.05, '#d7a064', { x: -0.35, y: 1.2, z: 1.6 }));
    group.add(fuse(trees, ctx.mats.paint));
    const board = ctx.atlas.cell('sign-abg', 256, 128, (x, w, h) => {
        x.font = "700 92px 'Varela Round', 'Fredoka', Arial, sans-serif"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.direction = 'rtl';
        x.fillStyle = '#5a3a1e'; x.fillText('אבג', w / 2, h / 2 + 6);
    });
    group.add(ctx.atlas.mesh([ctx.atlas.card(board, 1.2, 0.6, { x: -0.35, y: 1.2, z: 1.66 })]));

    // letters on wooden tiles, hanging from the branches and swaying
    const tiles = [['א', '#ffca28', 0.75, 2.05, 0.45], ['ב', '#ff8a65', 2.05, 1.95, -0.2], ['ג', '#81c784', -1.05, 1.6, -0.75], ['ד', '#f48fb1', 1.45, 1.35, 0.75]].map(([ch, hex, x, y, z], i) => {
        const hang = new THREE.Group();
        hang.position.set(x, y + 0.75, z);
        const tile = fuse([rbox(0.52, 0.52, 0.09, 0.06, hex, { y: -0.75 }), cyl(0.012, 0.012, 0.5, '#6d4c33', { y: -0.26 }, 5)], ctx.mats.paint, { receive: false });
        const g = ctx.atlas.glyph(ch, { color: '#ffffff', size: 128, stroke: 'rgba(90,58,30,0.55)' });
        const face = ctx.atlas.mesh([ctx.atlas.card(g, 0.44, 0.44, { y: -0.75, z: 0.052 }), ctx.atlas.card(g, 0.44, 0.44, { y: -0.75, z: -0.052, ry: Math.PI })]);
        hang.add(tile, face);
        hang.userData.phase = i * 1.7;
        group.add(hang);
        return hang;
    });
    return { group, update(t) { for (const h of tiles) { h.rotation.z = 0.2 * Math.sin(t * 1.5 + h.userData.phase); h.rotation.y = 0.35 * Math.sin(t * 0.8 + h.userData.phase * 1.3); } } };
}

// ---- the valley of stories: a great open book, letters rising from its pages, a pile of books ----
function reading(ctx) {
    const group = new THREE.Group();
    const book = new THREE.Group();
    book.position.set(0, 0.55, -0.2);
    book.rotation.x = 0.42;   // propped up toward the reader
    group.add(book);
    const W = 2.3, D = 3.0;
    // a page block: its top curves up toward the spine; the cross-section, pulled out along the book's depth
    const curve = k => 0.16 + 0.26 * Math.pow(1 - k, 1.6) + 0.05 * Math.sin(k * Math.PI);   // k: 0 at the spine, 1 at the edge
    const pages = [];
    for (const side of [-1, 1]) {
        const s = new THREE.Shape();
        s.moveTo(0, 0); s.lineTo(W, 0); s.lineTo(W, curve(1));
        for (let i = 9; i >= 0; i--) s.lineTo(W * i / 10, curve(i / 10));
        s.closePath();
        let g = new THREE.ExtrudeGeometry(s, { depth: D, bevelEnabled: false });
        g.translate(0, 0, -D / 2);
        if (side < 0) {   // the other page: mirrored, its faces turned back out
            g = g.toNonIndexed();
            g.scale(-1, 1, 1);
            const p = g.attributes.position.array;
            for (let i = 0; i < p.length; i += 9) for (let k = 0; k < 3; k++) { const a = p[i + k]; p[i + k] = p[i + 6 + k]; p[i + 6 + k] = a; }
            g.computeVertexNormals();
        }
        pages.push(tint(g, side < 0 ? '#f3ead6' : '#efe4cc'));
    }
    pages.push(rbox(2 * W + 0.36, 0.14, D + 0.3, 0.06, '#9c5bd6', { y: -0.07 }));
    pages.push(cyl(0.11, 0.11, D + 0.3, '#8048bd', { y: 0.02, rx: Math.PI / 2 }, 10));
    // the ribbon: over the fold and down the front
    pages.push(box(0.26, 0.02, D * 0.55, '#ef5350', { x: 0.2, y: curve(0.09) + 0.02, z: D * 0.24 }));
    pages.push(box(0.26, 0.02, 0.75, '#e53935', { x: 0.2, y: curve(0.09) - 0.3, z: D / 2 + 0.07, rx: Math.PI / 2 - 0.25 }));
    book.add(fuse(pages, ctx.mats.paint));
    // writing on the pages: a sheet that follows each page's curve
    const text = side => ctx.atlas.cell('page' + side, 256, 256, (x, w, h) => {
        x.strokeStyle = '#c4b08a'; x.lineWidth = 9; x.lineCap = 'round';
        for (let i = 0; i < 7; i++) { const y = 40 + i * 30, short = (i === 3 || i === 6) ? 0.55 : 1; x.beginPath(); x.moveTo(w - 26, y); x.lineTo(w - 26 - (w - 52) * short, y); x.stroke(); }
        if (side > 0) { x.fillStyle = '#ffd54f'; x.beginPath(); x.arc(64, 208, 26, 0, TAU); x.fill(); x.fillStyle = '#f06fa7'; x.beginPath(); x.arc(150, 214, 18, 0, TAU); x.fill(); }
    });
    const sheets = [];
    for (const side of [-1, 1]) {
        const c = text(side), g = new THREE.PlaneGeometry(W * 0.86, D * 0.86, 10, 1);
        g.rotateX(-Math.PI / 2);
        const p = g.attributes.position, uv = g.attributes.uv;
        for (let i = 0; i < p.count; i++) {
            const k = (p.getX(i) + W * 0.43) / (W * 0.86) * 0.86 + 0.07;      // 0.07..0.93 across the page
            p.setX(i, side * W * k); p.setY(i, curve(k) + 0.012);
            uv.setXY(i, c.u0 + (side > 0 ? uv.getX(i) : 1 - uv.getX(i)) * (c.u1 - c.u0), c.v0 + uv.getY(i) * (c.v1 - c.v0));
        }
        g.computeVertexNormals();
        sheets.push(g);
    }
    book.add(ctx.atlas.mesh(sheets));

    // a pile of books beside it
    const pile = [];
    [['#7e57c2', 1.25, 0.26, 0.9, 0.1], ['#ef5350', 1.1, 0.22, 0.82, -0.25], ['#29b6f6', 1.15, 0.2, 0.86, 0.3], ['#ffb300', 0.95, 0.2, 0.75, -0.1]].reduce((y, [hex, w, h, d, ry]) => {
        pile.push(rbox(w, h, d, 0.04, hex, { x: -2.35, y: y + h / 2, z: 1.5, ry }));
        pile.push(box(w * 0.96, h * 0.62, d * 0.96, '#fff8e7', { x: -2.35 + 0.03, y: y + h / 2, z: 1.5 + 0.03, ry }));
        return y + h;
    }, 0.0);
    group.add(fuse(pile, ctx.mats.paint));

    // letters and sparkles rising out of the book
    const risers = [['א', '#9c5bd6', -0.9], ['ב', '#f06fa7', 0.2], ['ג', '#29b6f6', 1.0], ['ד', '#ffb300', -0.2]].map(([ch, hex, x], i) => {
        const s = ctx.atlas.sprite(ctx.atlas.glyph(ch, { color: '#ffffff', size: 128, stroke: 'rgba(255,255,255,0.0)' }), 0.62, hex);
        s.userData = { x, phase: i / 4 };
        group.add(s);
        return s;
    });
    const sparks = [0, 1, 2].map(i => {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.sparkle, color: '#ffe082', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
        s.userData = { x: -1.3 + i * 1.3, phase: i / 3 + 0.15 };
        group.add(s);
        return s;
    });
    return {
        group,
        update(t) {
            for (const s of risers) {
                const k = (t * 0.16 + s.userData.phase) % 1;
                s.position.set(s.userData.x + 0.25 * Math.sin(k * 6 + s.userData.phase * 9), 1.5 + k * 2.6, 0.3 - k * 0.5);
                s.material.opacity = Math.min(1, k * 5) * (1 - Math.max(0, k - 0.7) / 0.3);
            }
            for (const s of sparks) {
                const k = (t * 0.22 + s.userData.phase) % 1;
                s.position.set(s.userData.x, 1.3 + k * 2.2, 0.5);
                const v = Math.sin(k * Math.PI);
                s.scale.setScalar(0.15 + 0.4 * v); s.material.opacity = v; s.material.rotation = t + s.userData.phase * 5;
            }
        }
    };
}

// ---- the bay of English: a lighthouse on the rocks, a sailboat with ABC on its sail, letter blocks ----
function english(ctx) {
    const group = new THREE.Group();
    const base = ctx.heightAt(ctx.land.x + 0.5, ctx.land.z - 0.5);
    const rocks = [];
    for (const [x, z, s, sy] of [[0.5, -0.5, 1.5, 0.5], [1.5, 0.2, 0.8, 0.55], [-0.5, -1.1, 0.75, 0.5], [0.2, 0.6, 0.6, 0.5], [1.4, -1.3, 0.6, 0.6]]) {
        rocks.push(roughen(blob(s, '#9c9aa3', { x, y: 0.02, z, sy }, 1), 0.16, 20 + x * 7));
    }
    group.add(fuse(rocks, ctx.mats.rock));

    const lh = [], LX = 0.5, LZ = -0.5, LY = 0.62;
    // the tower: white with two red bands
    const tower = new THREE.CylinderGeometry(0.42, 0.62, 3.1, 24, 12);
    tint(tower, (x, y) => { const k = (y + 1.55) / 3.1; return (k > 0.2 && k < 0.38) || (k > 0.6 && k < 0.78) ? '#e53935' : '#ffffff'; });
    lh.push(at(tower, { x: LX, y: LY + 1.55, z: LZ }));
    lh.push(cyl(0.64, 0.6, 0.12, '#546e7a', { x: LX, y: LY + 3.16, z: LZ }, 24));
    lh.push(torus(0.6, 0.02, '#455a64', { x: LX, y: LY + 3.42, z: LZ, rx: Math.PI / 2 }, 24));
    for (let k = 0; k < 8; k++) lh.push(cyl(0.015, 0.015, 0.22, '#455a64', { x: LX + Math.sin(k / 8 * TAU) * 0.6, y: LY + 3.32, z: LZ + Math.cos(k / 8 * TAU) * 0.6 }, 5));
    lh.push(cone(0.5, 0.5, '#e53935', { x: LX, y: LY + 4.02, z: LZ }, 20));
    lh.push(ball(0.07, '#ffd54f', { x: LX, y: LY + 4.3, z: LZ }, 8));
    lh.push(rbox(0.3, 0.5, 0.08, 0.04, '#6d4c41', { x: LX, y: LY + 0.3, z: LZ + 0.6 }));
    // the pier: planks on posts, out into the bay
    for (let k = 0; k < 6; k++) {
        lh.push(box(0.2, 0.05, 0.62, '#b98a5e', { x: -0.9 - k * 0.27, y: 0.2, z: 1.15 }));
        if (k % 2 === 0) for (const dz of [-0.26, 0.26]) lh.push(cyl(0.04, 0.04, 0.5, '#8a5a3c', { x: -0.9 - k * 0.27, y: 0, z: 1.15 + dz }, 6));
    }
    group.add(fuse(lh, ctx.mats.paint));

    // letter blocks on the shore
    const blocks = [], faces = [];
    [['A', '#ef5350', 1.75, 0.6, 1.55, 0.3], ['B', '#ffb300', 2.4, 0.26, 1.35, -0.2], ['C', '#42a5f5', 2.05, 0.75, 1.42, 0.5]].forEach(([ch, hex, x, y, z, ry], i) => {
        const s = 0.5, gy = ctx.heightAt(ctx.land.x + 2.08, ctx.land.z + 1.45) - base, yy = gy + (i === 2 ? 0.25 + s : 0.25);
        blocks.push(rbox(s, s, s, 0.06, hex, { x: i === 2 ? 2.08 : x, y: yy, z: i === 2 ? 1.45 : z, ry }));
        const g = ctx.atlas.glyph(ch, { color: '#ffffff', size: 128, font: "'Fredoka', 'Varela Round', Arial, sans-serif" });
        const px = i === 2 ? 2.08 : x, pz = i === 2 ? 1.45 : z;
        faces.push(ctx.atlas.card(g, s * 0.8, s * 0.8, { x: px + Math.sin(ry) * (s / 2 + 0.005), y: yy, z: pz + Math.cos(ry) * (s / 2 + 0.005), ry }));
        faces.push(ctx.atlas.card(g, s * 0.8, s * 0.8, { x: px, y: yy + s / 2 + 0.005, z: pz, rx: -Math.PI / 2, rz: ry }));
    });
    group.add(fuse(blocks, ctx.mats.gloss));
    group.add(ctx.atlas.mesh(faces));

    // the lamp, its glow, and two beams that turn
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.44, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.9, 1.0) }));
    lamp.position.set(LX, LY + 3.52, LZ);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.glow, color: '#ffe9a0', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.7 }));
    glow.position.copy(lamp.position); glow.scale.setScalar(1.9);
    const beams = new THREE.Group();
    beams.position.copy(lamp.position);
    const beamGeo = new THREE.ConeGeometry(0.55, 4.2, 12, 1, true);
    beamGeo.translate(0, -2.1, 0); beamGeo.rotateZ(Math.PI / 2);
    const beamMat = new THREE.MeshBasicMaterial({ color: '#fff3c0', transparent: true, opacity: ctx.look.beam, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    for (const s of [0, Math.PI]) { const b = new THREE.Mesh(beamGeo, beamMat); b.rotation.y = s; beams.add(b); }
    group.add(lamp, glow, beams);

    // the sailboat
    const boat = new THREE.Group();
    const hull = new THREE.SphereGeometry(0.8, 20, 10, 0, TAU, Math.PI / 2, Math.PI / 2);
    const bp = [part(hull, '#e0553f', { sx: 1.0, sy: 0.55, sz: 0.42 }), box(1.5, 0.05, 0.6, '#fff3e0', { y: 0.0, sx: 1, sz: 1 }),
        cyl(0.03, 0.035, 1.75, '#7a5a3a', { x: 0.05, y: 0.87 }, 6)];
    const sail = new THREE.Shape(); sail.moveTo(0, 0); sail.lineTo(0.85, 0); sail.lineTo(0, 1.4); sail.closePath();
    bp.push(extrude(sail, 0.02, '#ffffff', { x: 0.1, y: 0.25 }, 0));
    const jib = new THREE.Shape(); jib.moveTo(0, 0); jib.lineTo(-0.6, 0); jib.lineTo(0, 1.05); jib.closePath();
    bp.push(extrude(jib, 0.02, '#fff3e0', { x: 0.0, y: 0.3 }, 0));
    boat.add(fuse(bp, ctx.mats.paint, { receive: false }));
    const abc = ctx.atlas.cell('sail-abc', 128, 64, (x, w, h) => { x.font = "700 50px 'Fredoka', 'Varela Round', Arial, sans-serif"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#1e88e5'; x.fillText('ABC', w / 2, h / 2 + 3); });
    boat.add(ctx.atlas.mesh([ctx.atlas.card(abc, 0.56, 0.28, { x: 0.36, y: 0.5, z: 0.014 }), ctx.atlas.card(abc, 0.56, 0.28, { x: 0.36, y: 0.5, z: -0.014, ry: Math.PI })]));
    const pennant = makeFlag(0.32, 0.18, new THREE.MeshStandardMaterial({ color: '#ffc83d', side: THREE.DoubleSide, roughness: 0.7 }));
    pennant.position.set(0.07, 1.66, 0);
    boat.add(pennant);
    boat.position.set(-3.3, -base + 0.02, 0.4);
    boat.rotation.y = 0.5;
    group.add(boat);

    // gulls circling
    const gulls = [0, 1, 2].map(i => {
        const g = new THREE.Group(), wing = new THREE.PlaneGeometry(0.34, 0.1);
        wing.translate(0.17, 0, 0);
        const mat = ctx.mats.white;
        const l = new THREE.Mesh(wing, mat), r = new THREE.Mesh(wing, mat);
        r.scale.x = -1;
        g.add(l, r);
        g.userData = { l, r, phase: i * 2.1, rad: 1.6 + i * 0.5, h: 4.6 + i * 0.35 };
        group.add(g);
        return g;
    });
    return {
        group, y: base,
        update(t) {
            beams.rotation.y = t * 0.9;
            boat.position.y = -base + 0.02 + 0.05 * Math.sin(t * 1.6);
            boat.rotation.z = 0.07 * Math.sin(t * 1.25); boat.rotation.x = 0.04 * Math.sin(t * 1.7 + 1);
            pennant.userData.wave(t);
            for (const g of gulls) {
                const u = g.userData, a = t * 0.5 + u.phase;
                g.position.set(-1.6 + Math.cos(a) * u.rad, u.h + 0.15 * Math.sin(t * 0.9 + u.phase), 0.2 + Math.sin(a) * u.rad);
                g.rotation.y = -a - Math.PI / 2;
                const f = 0.55 * Math.sin(t * 7 + u.phase);
                u.l.rotation.z = f; u.r.rotation.z = -f;
            }
        }
    };
}

export const LAND_BUILDERS = { castle, math, hebrew, reading, english };
export { sign, makeFlag, roundTree, pineTree };

// ---- the desert of flags: a cactus, a signpost with flags, a string of pennants, a pyramid, a balloon ----
function geography(ctx) {
    const group = new THREE.Group();
    const A = ctx.atlas;
    const parts = [];
    // a tall cactus with two arms, and two small ones
    const cactus = (x, z, s) => {
        const g = '#4caf63', c = [];
        c.push(part(new THREE.CapsuleGeometry(0.3 * s, 1.7 * s, 6, 12), g, { x, y: 1.15 * s, z }));
        for (const [side, h, up] of [[-1, 0.95, 0.7], [1, 1.25, 0.55]]) {
            c.push(part(new THREE.CapsuleGeometry(0.17 * s, 0.4 * s, 4, 10), g, { x: x + side * 0.42 * s, y: h * s, z, rz: Math.PI / 2 }));
            c.push(part(new THREE.CapsuleGeometry(0.17 * s, up * s, 4, 10), g, { x: x + side * 0.66 * s, y: (h + up / 2 + 0.08) * s, z }));
        }
        c.push(ball(0.1 * s, '#ff7eb3', { x, y: 2.34 * s, z }, 8));
        return c;
    };
    parts.push(...cactus(1.7, -0.5, 1.1), ...cactus(-2.3, -0.6, 0.55), ...cactus(2.6, 1.5, 0.45));
    // the signpost: two arrow boards
    const PX = -0.95, PZ = 0.75;
    parts.push(cyl(0.06, 0.075, 2.5, '#8a5a3c', { x: PX, y: 1.25, z: PZ }, 8));
    parts.push(ball(0.1, '#8a5a3c', { x: PX, y: 2.52, z: PZ }, 8));
    const arrow = dir => { const s = new THREE.Shape(); s.moveTo(-0.72, -0.23); s.lineTo(0.5, -0.23); s.lineTo(0.78, 0); s.lineTo(0.5, 0.23); s.lineTo(-0.72, 0.23); s.closePath(); const g = new THREE.ExtrudeGeometry(s, { depth: 0.08, bevelEnabled: false }); g.translate(0, 0, -0.04); if (dir < 0) g.rotateY(Math.PI); return g; };
    parts.push(part(arrow(1), '#e6a15a', { x: PX + 0.62, y: 2.1, z: PZ + 0.05 }));
    parts.push(part(arrow(-1), '#dc9550', { x: PX - 0.6, y: 1.5, z: PZ + 0.05 }));
    // a pole for the string of pennants
    parts.push(cyl(0.04, 0.05, 1.7, '#8a5a3c', { x: 0.7, y: 0.85, z: 1.9 }, 6));
    group.add(fuse(parts, ctx.mats.paint));
    // a pyramid behind them
    group.add(fuse([part(new THREE.ConeGeometry(1.6, 1.8, 4, 1), '#ecc77e', { x: -0.7, y: 0.9, z: -2.1, ry: Math.PI / 4 + 0.3 })], ctx.mats.rock));

    // flags painted on the boards
    const flagCell = (name, draw) => A.cell('flag-' + name, 96, 64, (x, w, h) => { draw(x, w, h); x.strokeStyle = 'rgba(0,0,0,0.25)'; x.lineWidth = 2; x.strokeRect(1, 1, w - 2, h - 2); });
    const flags = {
        il: flagCell('il', (x, w, h) => {
            x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.fillStyle = '#0038b8'; x.fillRect(0, 7, w, 9); x.fillRect(0, h - 16, w, 9);
            x.strokeStyle = '#0038b8'; x.lineWidth = 3; x.lineJoin = 'miter';
            for (const s of [1, -1]) { x.beginPath(); for (let k = 0; k < 3; k++) { const a = -Math.PI / 2 * s + k * TAU / 3; x[k ? 'lineTo' : 'moveTo'](w / 2 + Math.cos(a) * 12, h / 2 + Math.sin(a) * 12); } x.closePath(); x.stroke(); }
        }),
        jp: flagCell('jp', (x, w, h) => { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.fillStyle = '#d32f2f'; x.beginPath(); x.arc(w / 2, h / 2, 17, 0, TAU); x.fill(); }),
        fr: flagCell('fr', (x, w, h) => { ['#1e4fb8', '#ffffff', '#e53935'].forEach((c, i) => { x.fillStyle = c; x.fillRect(i * w / 3, 0, w / 3 + 1, h); }); }),
        it: flagCell('it', (x, w, h) => { ['#2e9b4f', '#ffffff', '#e53935'].forEach((c, i) => { x.fillStyle = c; x.fillRect(i * w / 3, 0, w / 3 + 1, h); }); })
    };
    const cards = [
        A.card(flags.il, 0.42, 0.28, { x: PX + 0.36, y: 2.1, z: PZ + 0.095 }), A.card(flags.jp, 0.42, 0.28, { x: PX + 0.86, y: 2.1, z: PZ + 0.095 }),
        A.card(flags.fr, 0.42, 0.28, { x: PX - 0.86, y: 1.5, z: PZ + 0.095 }), A.card(flags.it, 0.42, 0.28, { x: PX - 0.36, y: 1.5, z: PZ + 0.095 })
    ];
    // pennants on a sagging string, from the signpost's top to the pole
    const a = new THREE.Vector3(PX, 2.5, PZ), b = new THREE.Vector3(0.7, 1.68, 1.9), colors = ['#e53935', '#ffd54f', '#1e88e5', '#43a047', '#ffffff', '#8e24aa', '#ff9800'];
    const string = [], pen = [];
    for (let k = 0; k <= 8; k++) { const u = k / 8; string.push(new THREE.Vector3().lerpVectors(a, b, u).setY(lerpN(a.y, b.y, u) - 0.36 * Math.sin(u * Math.PI))); }
    for (let k = 0; k < 7; k++) {
        const p = string[k + 1].clone().lerp(string[k], 0.5), s = new THREE.Shape();
        s.moveTo(-0.11, 0); s.lineTo(0.11, 0); s.lineTo(0, -0.26); s.closePath();
        const g = new THREE.ShapeGeometry(s);
        pen.push(part(g, colors[k], { x: p.x, y: p.y, z: p.z, ry: Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2 }));
    }
    group.add(A.mesh(cards));
    group.add(fuse([pipe(string, 0.012, '#7a5a3a', { radial: 4 }), ...pen], ctx.mats.flat, { receive: false }));

    // a hot-air balloon, floating
    const balloon = new THREE.Group();
    const stripes = ['#e53935', '#ffffff', '#1e88e5', '#ffd54f'];
    const env = new THREE.SphereGeometry(1.0, 24, 16);
    const p = env.attributes.position;
    for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < 0) { const k = 1 + y * 0.45; p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); p.setY(i, y * 1.3); } }
    env.computeVertexNormals();
    tint(env, (x, y, z) => stripes[Math.floor(((Math.atan2(z, x) + Math.PI) / TAU) * 12) % 4]);
    const bp = [env, cyl(0.2, 0.17, 0.26, '#a1683a', { y: -1.95 }, 10), torus(0.2, 0.025, '#7a5a3a', { y: -1.82, rx: Math.PI / 2 }, 12)];
    for (let k = 0; k < 4; k++) { const an = k / 4 * TAU + 0.4; bp.push(cyl(0.01, 0.01, 0.62, '#7a5a3a', { x: Math.cos(an) * 0.2, y: -1.52, z: Math.sin(an) * 0.2 }, 4)); }
    balloon.add(fuse(bp, ctx.mats.paint, { receive: false }));
    balloon.position.set(0.5, 5.0, -1.0);
    group.add(balloon);
    return { group, update(t) { balloon.position.y = 5.0 + 0.2 * Math.sin(t * 0.8); balloon.position.x = 0.5 + 0.25 * Math.sin(t * 0.33); balloon.rotation.y = t * 0.12; } };
}
const lerpN = (a, b, k) => a + (b - a) * k;

// ---- the cave of the body: a rocky mound, a heart beating in its mouth, glowing crystals ----
function biology(ctx) {
    const group = new THREE.Group();
    const rocks = [];
    const mound = new THREE.SphereGeometry(2.55, 14, 9, 0, TAU, 0, Math.PI / 2);
    roughen(mound, 0.12, 31, 0.02);
    tint(mound, (x, y) => y > 1.7 ? '#a39488' : '#8f8178');
    rocks.push(at(mound, { sy: 0.92, z: -0.3 }));
    // boulders that frame the mouth, and little spires
    for (let k = 0; k <= 6; k++) {
        const a = Math.PI * (k / 6), r = 1.28;
        rocks.push(roughen(blob(0.36 + 0.05 * (k % 2), '#7c6f69', { x: Math.cos(a) * r, y: 0.15 + Math.sin(a) * r * 1.05, z: 1.92 - 0.25 * Math.sin(a) }, 1), 0.18, 40 + k));
    }
    for (const [x, z, h] of [[-2.2, 1.5, 0.8], [2.3, 1.3, 0.95], [-1.3, 2.5, 0.5], [1.5, 2.5, 0.42], [2.8, 0.2, 0.6]]) rocks.push(part(new THREE.ConeGeometry(0.24, h, 6), '#8f8178', { x, y: h / 2, z }));
    group.add(fuse(rocks, ctx.mats.rock));
    // the dark of the cave
    const dark = new THREE.Mesh(new THREE.SphereGeometry(1.12, 20, 14), new THREE.MeshBasicMaterial({ color: '#1d1233' }));
    dark.scale.set(1, 1.12, 0.42); dark.position.set(0, 0.62, 1.84);
    group.add(dark);
    // crystals: glowing prisms with pointed tips
    const crystals = (hexA, hexB, x, z, seed) => {
        const R = rng(seed), bits = [];
        for (let k = 0; k < 5; k++) {
            const h = 0.5 + R() * 0.75, r = 0.11 + R() * 0.08, px = x + (R() - 0.5) * 0.6, pz = z + (R() - 0.5) * 0.4, tilt = (R() - 0.5) * 0.7, hex = k % 2 ? hexA : hexB;
            const g = new THREE.CylinderGeometry(r, r, h, 6); g.translate(0, h / 2, 0);
            const tip = new THREE.ConeGeometry(r, r * 1.8, 6); tip.translate(0, h + r * 0.9, 0);
            bits.push(part(g, hex, { x: px, z: pz, rz: tilt, rx: (R() - 0.5) * 0.4 }), part(tip, hex, { x: px, z: pz, rz: tilt }));
        }
        const m = fuse(bits, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.25, emissive: hexB, emissiveIntensity: ctx.look.crystal, flatShading: true }), { receive: false });
        return m;
    };
    const cr = [crystals('#7fe8dc', '#3fc8c0', -2.0, 2.0, 61), crystals('#ffa6d0', '#f06fa7', 2.05, 2.0, 67), crystals('#7fe8dc', '#3fc8c0', 0.9, 2.75, 71)];
    group.add(...cr);
    // the heart, beating, with a soft glow round it
    const heart = new THREE.Mesh(
        (() => { const g = new THREE.ExtrudeGeometry(heartShape(1.05), { depth: 0.26, bevelEnabled: true, bevelThickness: 0.11, bevelSize: 0.1, bevelSegments: 4, curveSegments: 20 }); g.translate(0, 0, -0.13); return g; })(),
        new THREE.MeshPhysicalMaterial({ color: '#ff3d63', roughness: 0.25, clearcoat: 0.8, clearcoatRoughness: 0.15, emissive: '#ff1f4b', emissiveIntensity: 0.45 }));
    heart.position.set(0, 1.0, 2.12);
    heart.castShadow = true;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.glow, color: '#ff7a9c', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 }));
    glow.position.set(0, 1.0, 2.0); glow.scale.setScalar(3.0);
    group.add(glow, heart);
    return {
        group,
        update(t) {
            // two quick beats, then a rest
            const k = (t * 1.15) % 1, beat = Math.exp(-Math.pow((k - 0.08) / 0.06, 2)) + 0.7 * Math.exp(-Math.pow((k - 0.3) / 0.07, 2));
            heart.scale.setScalar(1 + 0.13 * beat);
            glow.material.opacity = 0.4 + 0.3 * beat; glow.scale.setScalar(2.8 + 0.6 * beat);
        }
    };
}

// ---- the island of memory: a palm on the sand, big cards to turn over, stepping stones from the shore ----
function memory(ctx) {
    const group = new THREE.Group(), A = ctx.atlas;
    const y0 = ctx.heightAt(ctx.land.x, ctx.land.z);
    const parts = [];
    // the palm: a leaning trunk, fronds that bow down, coconuts
    const trunk = [[0.95, 0, -0.5], [1.05, 0.9, -0.52], [1.3, 1.8, -0.56], [1.72, 2.6, -0.62]].map(p => new THREE.Vector3(...p));
    parts.push(pipe(trunk, 0.15, '#9a6b45', { radial: 8, seg: 14 }));
    for (let k = 1; k < 6; k++) { const p = new THREE.CatmullRomCurve3(trunk).getPoint(k / 6.2); parts.push(torus(0.165, 0.025, '#84583a', { x: p.x, y: p.y, z: p.z, rx: Math.PI / 2 - 0.2 }, 10)); }
    const top = trunk[3];
    for (let k = 0; k < 7; k++) {
        const an = k / 7 * TAU + 0.3, L = 1.55 + 0.25 * Math.sin(k * 2.3), g = new THREE.PlaneGeometry(0.5, L, 2, 7);
        g.translate(0, L / 2, 0);
        const p = g.attributes.position;
        for (let i = 0; i < p.count; i++) {
            const u = p.getY(i) / L, x = p.getX(i);
            p.setX(i, x * (1 - u * 0.85) * (0.4 + Math.sin(u * Math.PI) * 0.9));
            p.setZ(i, Math.abs(x) * 0.5);
            p.setY(i, L * (u * 0.55 - 0.72 * u * u) + 0.02); p.setZ(i, p.getZ(i) + L * 0.8 * u);
        }
        g.computeVertexNormals();
        parts.push(part(g, k % 2 ? '#43a853' : '#5cbf63', { x: top.x, y: top.y, z: top.z, ry: an }));
    }
    parts.push(ball(0.13, '#7a4e32', { x: top.x - 0.12, y: top.y - 0.12, z: top.z + 0.1 }, 8), ball(0.13, '#8a5a3c', { x: top.x + 0.12, y: top.y - 0.14, z: top.z + 0.05 }, 8));
    // stepping stones to the shore, a starfish, a shell
    for (const [x, z, r] of [[-2.45, 0.95, 0.3], [-3.0, 1.25, 0.27], [-3.55, 1.1, 0.3]]) parts.push(cyl(r, r * 1.1, 0.16, '#b9b4ac', { x, y: -y0 + 0.02, z }, 10));
    parts.push(extrude(starShape(0.22, 0.5), 0.06, '#ff8a65', { x: 0.35, y: 0.06, z: 1.35, rx: -Math.PI / 2, rz: 0.4 }, 0.02));
    parts.push(part(new THREE.SphereGeometry(0.14, 10, 6, 0, TAU, 0, Math.PI / 2), '#f8bbd0', { x: -1.25, y: 0.02, z: 1.2 }));
    group.add(fuse(parts, ctx.mats.paintTwoSided));

    // the cards, standing in the sand
    const back = A.cell('card-back', 128, 176, (x, w, h) => {
        x.fillStyle = '#7e57c2'; x.fillRect(0, 0, w, h);
        x.strokeStyle = '#ffffff'; x.lineWidth = 7; x.strokeRect(9, 9, w - 18, h - 18);
        x.font = "700 104px 'Fredoka', 'Varela Round', Arial, sans-serif"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#ffffff'; x.fillText('?', w / 2, h / 2 + 8);
    });
    const front = (name, draw) => A.cell('card-' + name, 128, 176, (x, w, h) => { x.fillStyle = '#fffdf6'; x.fillRect(0, 0, w, h); x.strokeStyle = '#7e57c2'; x.lineWidth = 7; x.strokeRect(9, 9, w - 18, h - 18); x.translate(w / 2, h / 2); draw(x); });
    const star = front('star', x => { x.fillStyle = '#ffc107'; x.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 19 : 44; x[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } x.closePath(); x.fill(); });
    const heart = front('heart', x => { x.fillStyle = '#ec407a'; x.beginPath(); x.moveTo(0, 38); x.bezierCurveTo(-64, -6, -30, -52, 0, -18); x.bezierCurveTo(30, -52, 64, -6, 0, 38); x.fill(); });
    const slabs = [], faces = [];
    [[back, -1.25, -0.15, -0.3], [star, -0.3, 0.1, 0.12], [heart, 0.55, 0.35, 0.34], [back, -0.75, 0.95, -0.12]].forEach(([cell, x, z, ry], i) => {
        const w = 0.82, h = 1.12, lean = -0.32, y = 0.5 + (i === 3 ? -0.05 : 0);
        slabs.push(rbox(w, h, 0.07, 0.035, cell === back ? '#7e57c2' : '#fffdf6', { x, y, z, ry, rx: lean }));
        const n = new THREE.Vector3(0, 0, 1).applyEuler(new THREE.Euler(lean, ry, 0, 'XYZ'));
        faces.push(A.card(cell, w * 0.98, h * 0.98, { x: x + n.x * 0.037, y: y + n.y * 0.037, z: z + n.z * 0.037, ry, rx: lean }));
    });
    group.add(fuse(slabs, ctx.mats.paint));
    group.add(A.mesh(faces));
    return { group, y: y0 };
}

// ---- the puzzle bridge: the road crosses the river on rainbow blocks; puzzle pieces turn in the air ----
function puzzle(ctx) {
    const group = new THREE.Group();
    const B = BRIDGE, half = B.half;
    const yAt = d => ctx.roadY(BRIDGE_S + d);          // the road's height, d along the bridge from its middle
    const turn = Math.atan2(B.ax, B.az);
    const parts = [];
    // the deck: slabs that follow the arch
    const N = 14;
    for (let k = 0; k < N; k++) {
        const d0 = -half - 0.35 + (2 * half + 0.7) * k / N, d1 = -half - 0.35 + (2 * half + 0.7) * (k + 1) / N, dm = (d0 + d1) / 2;
        const y0 = yAt(d0), y1 = yAt(d1), slope = Math.atan2(y1 - y0, d1 - d0);
        parts.push(box(2.3, 0.2, (d1 - d0) / Math.cos(slope) + 0.02, '#dccdb0', { y: (y0 + y1) / 2 - 0.08, z: dm, rx: -slope }));
        parts.push(box(2.42, 0.08, (d1 - d0) / Math.cos(slope) + 0.02, '#c4b393', { y: (y0 + y1) / 2 - 0.2, z: dm, rx: -slope }));
    }
    // rainbow blocks under it, each with a knob on its side like a piece of a puzzle
    const colors = ['#ef5350', '#ffa726', '#ffee58', '#66bb6a', '#29b6f6', '#7e57c2', '#ec407a'];
    const gloss = [];
    for (let k = 0; k < 7; k++) {
        const d = -half + 0.42 + (2 * half - 0.84) * k / 6, top = yAt(d) - 0.24, h = top + 0.75;
        gloss.push(rbox(2.0, h, 0.78, 0.08, colors[k], { y: top - h / 2, z: d }));
        for (const s of [-1, 1]) gloss.push(ball(0.2, colors[k], { x: s * 1.02, y: top - 0.42, z: d, sx: 0.7 }, 10));
    }
    // rails: posts and a rope on each side
    for (const s of [-1, 1]) {
        const rope = [];
        for (let k = 0; k <= 6; k++) {
            const d = -half - 0.2 + (2 * half + 0.4) * k / 6, y = yAt(d);
            parts.push(cyl(0.05, 0.06, 0.62, '#8a5a3c', { x: s * 1.08, y: y + 0.3, z: d }, 6));
            parts.push(ball(0.075, '#a8743e', { x: s * 1.08, y: y + 0.64, z: d }, 6));
            rope.push(new THREE.Vector3(s * 1.08, y + 0.5, d));
        }
        parts.push(pipe(rope, 0.028, '#a8743e', { radial: 5, seg: 30 }));
    }
    group.add(fuse(parts, ctx.mats.paint), fuse(gloss, ctx.mats.gloss));
    group.rotation.y = turn;

    // puzzle pieces in the air
    const pieceShape = () => {
        const s = new THREE.Shape(), a = 0.5, r = 0.17;
        s.moveTo(-a, -a);
        s.lineTo(-r, -a); s.absarc(0, -a + 0.1, r, Math.PI * 1.2, Math.PI * 1.8 - TAU, true); s.lineTo(a, -a);      // a notch in the bottom
        s.lineTo(a, -r); s.absarc(a + 0.1, 0, r, Math.PI * 1.2, Math.PI * 0.8 - TAU, false); s.lineTo(a, a);        // a knob on the right
        s.lineTo(r, a); s.absarc(0, a + 0.1, r, -Math.PI * 0.2, Math.PI * 1.2, false); s.lineTo(-a, a);              // a knob on top
        s.lineTo(-a, r); s.absarc(-a + 0.1, 0, r, Math.PI * 0.8, -Math.PI * 0.8, true); s.lineTo(-a, -a);            // a notch in the left
        return s;
    };
    const pieces = [['#ef5350', -1.3, 3.0, -0.6, 0.85], ['#ffca28', 0.9, 3.6, 0.3, 0.7], ['#29b6f6', 0.2, 2.7, 1.5, 0.75]].map(([hex, x, y, z, s], i) => {
        const m = fuse([extrude(pieceShape(), 0.2, hex, { s }, 0.05, 12)], ctx.mats.gloss, { receive: false });
        m.position.set(x, y, z);
        m.userData = { y, phase: i * 2.2 };
        group.add(m);
        return m;
    });
    const mid = ROAD.at(BRIDGE_S);
    return {
        group, y: 0, x: mid.x, z: mid.z,
        update(t) { for (const m of pieces) { m.position.y = m.userData.y + 0.18 * Math.sin(t * 1.1 + m.userData.phase); m.rotation.y = t * 0.5 + m.userData.phase; m.rotation.z = 0.25 * Math.sin(t * 0.7 + m.userData.phase); } }
    };
}

// ---- the chess garden: a board on the lawn with great pieces, hedges and flowers round it ----
function chess(ctx) {
    const group = new THREE.Group();
    const parts = [], gloss = [];
    const N = 6, S = 0.68, half = N * S / 2;
    parts.push(rbox(N * S + 0.5, 0.3, N * S + 0.5, 0.08, '#7a5230', { y: 0.15 }));
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) parts.push(box(S, 0.05, S, (i + j) % 2 ? '#7fbf7a' : '#f6ecd2', { x: -half + (i + 0.5) * S, y: 0.32, z: -half + (j + 0.5) * S }));
    const sq = (i, j) => ({ x: -half + (i + 0.5) * S, z: -half + (j + 0.5) * S });
    const WHITE = '#fff8ea', BLACK = '#4b3766';
    // turned pieces: a profile spun round
    const turned = (profile, hex, where, s = 1) => gloss.push(lathe(profile.map(([r, y]) => [r * s, y * s]), hex, { ...where, y: 0.345 }, 24));
    const foot = [[0, 0], [0.3, 0], [0.31, 0.06], [0.26, 0.1], [0.2, 0.14]];
    const king = [...foot, [0.13, 0.5], [0.11, 0.9], [0.2, 0.98], [0.2, 1.04], [0.12, 1.08], [0.17, 1.3], [0.2, 1.42], [0.1, 1.46], [0, 1.47]];
    const rook = [...foot, [0.16, 0.5], [0.15, 0.85], [0.22, 0.9], [0.22, 1.1], [0, 1.1]];
    const pawn = [...foot, [0.1, 0.42], [0.08, 0.6], [0.15, 0.64], [0.1, 0.7], [0.15, 0.82], [0.13, 0.94], [0.06, 1.0], [0, 1.01]];
    const bishop = [...foot, [0.11, 0.5], [0.09, 0.82], [0.17, 0.88], [0.1, 0.94], [0.15, 1.1], [0.12, 1.28], [0.04, 1.4], [0.06, 1.46], [0, 1.5]];
    let p = sq(1, 1); turned(king, WHITE, p, 1.25);
    gloss.push(box(0.07, 0.3, 0.07, WHITE, { x: p.x, y: 0.345 + 1.47 * 1.25 + 0.12, z: p.z }), box(0.22, 0.07, 0.07, WHITE, { x: p.x, y: 0.345 + 1.47 * 1.25 + 0.15, z: p.z }));
    p = sq(4, 0); turned(rook, WHITE, p, 1.15);
    for (let k = 0; k < 4; k++) gloss.push(box(0.12, 0.14, 0.12, WHITE, { x: p.x + Math.cos(k * Math.PI / 2 + 0.78) * 0.2, y: 0.345 + 1.1 * 1.15 + 0.06, z: p.z + Math.sin(k * Math.PI / 2 + 0.78) * 0.2 }));
    p = sq(0, 4); turned(pawn, WHITE, p, 1.05);
    p = sq(3, 2); turned(bishop, BLACK, p, 1.15);
    p = sq(5, 4); turned(pawn, BLACK, p, 1.05);
    // the knight: a horse's head cut from a slab, on a turned foot
    p = sq(2, 4); turned([...foot, [0.2, 0.2], [0, 0.2]], BLACK, p, 1.25);
    const horse = new THREE.Shape();
    const H = (x, y) => [(x - 50) / 62, (79 - y) / 62];
    horse.moveTo(...H(70, 79)); horse.lineTo(...H(31, 79));
    const bez = (a, b, c) => horse.bezierCurveTo(...H(...a), ...H(...b), ...H(...c));
    bez([30, 68], [35, 60], [44, 54]); bez([47, 52], [48, 49], [46, 47]); bez([40, 49], [33, 51], [27, 50]); bez([20, 49], [18, 43], [21, 39]);
    bez([26, 32], [34, 24], [40, 19]); horse.lineTo(...H(39, 9)); horse.lineTo(...H(47, 15)); bez([50, 13], [53, 12], [57, 12]);
    bez([70, 13], [79, 27], [79, 45]); bez([79, 60], [73, 69], [70, 79]);
    gloss.push(extrude(horse, 0.3, BLACK, { x: p.x, y: 0.345 + 0.22, z: p.z, ry: -0.5, s: 1.25 }, 0.05, 14));
    group.add(fuse(gloss, ctx.mats.gloss));

    // hedges on three sides, with flowers; round bushes at the corners
    const hedge = '#3f9a4f';
    parts.push(rbox(N * S + 1.9, 0.75, 0.6, 0.22, hedge, { y: 0.37, z: -half - 0.95 }));
    parts.push(rbox(0.6, 0.75, N * S + 0.7, 0.22, hedge, { x: half + 0.95, y: 0.37, z: -0.3 }));
    parts.push(rbox(0.6, 0.75, N * S * 0.55, 0.22, hedge, { x: -half - 0.95, y: 0.37, z: -half * 0.5 - 0.1 }));
    const R = rng(88), petals = ['#ff7eb3', '#ffd54f', '#ffffff', '#c9a4ff', '#ff9e80'];
    for (let k = 0; k < 26; k++) {
        const u = R(), side = k % 3;
        const x = side === 0 ? (u - 0.5) * (N * S + 1.6) : (side === 1 ? half + 0.95 + (R() - 0.5) * 0.4 : -half - 0.95 + (R() - 0.5) * 0.4);
        const z = side === 0 ? -half - 0.95 + (R() - 0.5) * 0.4 : (side === 1 ? (u - 0.5) * (N * S + 0.4) - 0.3 : -half * 0.5 - 0.1 + (u - 0.5) * N * S * 0.5);
        parts.push(blob(0.085, petals[k % 5], { x, y: 0.76 + R() * 0.04, z, sy: 0.7 }, 0));
    }
    for (const [x, z] of [[half + 0.95, half + 0.35], [-half - 0.95, 0.75]]) parts.push(cyl(0.07, 0.09, 0.5, '#8a5a3c', { x, y: 0.25, z }, 6), blob(0.5, '#4fae4a', { x, y: 0.85, z }), blob(0.3, '#63c257', { x, y: 1.4, z }));
    group.add(fuse(parts, ctx.mats.paint));
    return { group };
}

Object.assign(LAND_BUILDERS, { geography, biology, memory, puzzle, chess });
