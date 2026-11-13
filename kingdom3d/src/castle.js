// The castle at the end of the red carpet: a terrace with grand stairs, the keep with a
// glowing doorway and a balcony, a great tower in the middle, round towers with pink and
// purple roofs, gold rings and finials, lit windows, banners and flags in the wind.
import * as THREE from 'three';
import { merged, placed, col } from './util.js';
import { tube, arc, scaleUV, crownShape, slabShape, M } from './geo.js';
import * as T from './textures.js';

export const CASTLE = { front: -63, terrace: 1.6 };

export function buildCastle(mats) {
    const group = new THREE.Group();
    group.name = 'castle';
    const TY = CASTLE.terrace;
    const stone = [], pink = [], purple = [], gold = [], wins = [], winCol = [], carpetBits = [];
    const box = (w, h, d, x, y, z, ry = 0) => stone.push(scaleUV(placed(new THREE.BoxGeometry(w, h, d), { x, y, z, ry }), Math.max(w, d) / 4, h / 4));
    const merlons = (x0, x1, y, z, step = 1.5, size = 0.75, depth = 0.7) => {
        for (let x = x0; x <= x1 + 1e-6; x += step) stone.push(scaleUV(placed(new THREE.BoxGeometry(size, size * 1.1, depth), { x, y: y + size * 0.55, z }), 0.2, 0.2));
    };
    const win = (x, y, z, ry, w = 0.9, h = 1.8, bright = 1) => {
        const g = placed(new THREE.PlaneGeometry(w, h), { x, y, z, ry });
        wins.push(g); winCol.push(bright);
    };

    // the terrace and the grand stairs
    box(46, TY, 27, 0, TY / 2, -76.5);
    const steps = 6;
    for (let k = 0; k < steps; k++) {
        const h = TY * (steps - k) / steps;
        box(10, h, 0.52, 0, h / 2, CASTLE.front + 0.26 + k * 0.52);
        carpetBits.push(placed(new THREE.BoxGeometry(3.0, 0.03, 0.5), { y: h + 0.012, z: CASTLE.front + 0.26 + k * 0.52 }));
    }
    carpetBits.push(placed(new THREE.BoxGeometry(3.0, 0.03, 5.2), { y: TY + 0.012, z: CASTLE.front - 2.6 }));
    // gold balustrade along the front of the terrace, both sides of the stairs
    for (const s of [-1, 1]) {
        const x0 = s * 5.3, x1 = s * 22.5, z = CASTLE.front + 0.15;
        gold.push(tube([[x0, TY + 0.8, z], [x1, TY + 0.8, z]], 0.06, { smooth: false, seg: 4, radial: 8 }));
        gold.push(tube([[x0, TY + 0.2, z], [x1, TY + 0.2, z]], 0.035, { smooth: false, seg: 4, radial: 6 }));
        for (let x = x0; Math.abs(x) <= 22.6; x += s * 0.55) gold.push(placed(new THREE.CylinderGeometry(0.035, 0.05, 0.6, 8), { x, y: TY + 0.5, z }));
        for (const x of [x0, s * 11, x1]) gold.push(placed(new THREE.SphereGeometry(0.13, 14, 10), { x, y: TY + 0.95, z }));
    }

    // the keep
    const K = { w: 18, h: 10, d: 10, z: -73 };
    const kf = K.z + K.d / 2;   // its front face
    box(K.w, K.h, K.d, 0, TY + K.h / 2, K.z);
    box(K.w + 0.5, 0.4, K.d + 0.5, 0, TY + K.h, K.z);
    merlons(-K.w / 2 + 0.4, K.w / 2 - 0.4, TY + K.h + 0.2, kf + 0.05);
    for (const s of [-1, 1]) for (let z = K.z - K.d / 2 + 0.6; z < kf; z += 1.5) stone.push(scaleUV(placed(new THREE.BoxGeometry(0.7, 0.82, 0.75), { x: s * (K.w / 2 - 0.1), y: TY + K.h + 0.61, z }), 0.2, 0.2));
    // the doorway: an arch of warm light with gold around it
    const door = new THREE.Shape();
    door.moveTo(-1.6, 0); door.lineTo(-1.6, 2.9); door.absarc(0, 2.9, 1.6, Math.PI, 0, true); door.lineTo(1.6, 0); door.closePath();
    const doorMesh = new THREE.Mesh(new THREE.ShapeGeometry(door, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.35, 0.92, 0.46) }));
    doorMesh.position.set(0, TY, kf + 0.02);
    group.add(doorMesh);
    const doorArch = [new THREE.Vector3(-1.72, 0, 0), ...arc(0, 2.9, 1.72, Math.PI, 0, 40), new THREE.Vector3(1.72, 0, 0)].map(p => p.add(new THREE.Vector3(0, TY, kf + 0.08)));
    gold.push(tube(doorArch, 0.13, { smooth: false, seg: 120, radial: 10 }));
    gold.push(placed(slabShape(crownShape(1.2, 0.7), 0.12, 0.03), { y: TY + 4.75, z: kf + 0.02 }));
    // the balcony above it
    box(5.6, 0.3, 1.6, 0, TY + 5.6, kf + 0.75);
    gold.push(tube([[-2.7, TY + 6.5, kf + 1.5], [2.7, TY + 6.5, kf + 1.5]], 0.05, { smooth: false, seg: 4 }));
    for (let x = -2.65; x <= 2.66; x += 0.33) gold.push(placed(new THREE.CylinderGeometry(0.03, 0.04, 0.75, 8), { x, y: TY + 6.12, z: kf + 1.5 }));
    // windows: two rows on the keep
    for (const y of [TY + 3.0, TY + 7.6]) for (const x of [-7.2, -5.0, 5.0, 7.2]) win(x, y, kf + 0.03, 0);
    for (const x of [-1.8, 0, 1.8]) win(x, TY + 7.9, kf + 0.03, 0, 0.8, 1.5, 1.15);
    // banners on the keep
    const bannerTex = [T.banner('#5b2fb0', '#ff7eb3'), T.banner('#c2185b', '#ffd54f')];
    const banners = [];
    for (const s of [-1, 1]) {
        const geo = new THREE.PlaneGeometry(1.5, 5.4, 1, 14); geo.translate(0, -2.7, 0);
        const b = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: bannerTex[s < 0 ? 0 : 1], side: THREE.DoubleSide, alphaTest: 0.5, roughness: 0.75 }));
        b.position.set(s * 3.4, TY + 9.6, kf + 0.08);
        group.add(b);
        gold.push(tube([[s * 3.4 - 0.95, TY + 9.62, kf + 0.12], [s * 3.4 + 0.95, TY + 9.62, kf + 0.12]], 0.05, { smooth: false, seg: 4 }));
        banners.push({ mesh: b, base: geo.attributes.position.array.slice(), phase: s * 1.3 });
    }

    // the upper hall
    const U = { w: 12, h: 5, d: 8, z: -74.5 };
    box(U.w, U.h, U.d, 0, TY + K.h + U.h / 2, U.z);
    merlons(-U.w / 2 + 0.4, U.w / 2 - 0.4, TY + K.h + U.h, U.z + U.d / 2 + 0.05);
    for (const x of [-3.6, -1.2, 1.2, 3.6]) win(x, TY + K.h + 2.4, U.z + U.d / 2 + 0.03, 0, 0.8, 1.6);

    // round towers
    const flags = [];
    const tower = (x, z, r, top, roofH, roofs, flagColor, rows) => {
        const h = top;
        stone.push(scaleUV(placed(new THREE.CylinderGeometry(r, r * 1.05, h, 40, 1), { x, y: h / 2, z }), 2 * Math.PI * r / 4, h / 4));
        stone.push(scaleUV(placed(new THREE.CylinderGeometry(r + 0.35, r, 0.6, 40, 1), { x, y: h + 0.3, z }), 2 * Math.PI * r / 4, 0.15));
        const n = Math.max(8, Math.round(r * 6));
        for (let k = 0; k < n; k++) {
            const a = k / n * Math.PI * 2;
            stone.push(scaleUV(placed(new THREE.BoxGeometry(0.55, 0.8, 0.45), { x: x + Math.sin(a) * (r + 0.18), y: h + 0.95, z: z + Math.cos(a) * (r + 0.18), ry: a }), 0.15, 0.2));
        }
        roofs.push(scaleUV(placed(new THREE.ConeGeometry(r + 0.55, roofH, 40, 1, true), { x, y: h + 0.65 + roofH / 2, z }), Math.round(r * 2.4), roofH / 2.2));
        gold.push(placed(new THREE.TorusGeometry(r + 0.52, 0.08, 8, 56), { x, y: h + 0.68, z, rx: Math.PI / 2 }));
        const tip = h + 0.65 + roofH;
        gold.push(placed(new THREE.SphereGeometry(0.2, 16, 12), { x, y: tip + 0.1, z }));
        gold.push(placed(new THREE.ConeGeometry(0.07, 0.5, 10), { x, y: tip + 0.5, z }));
        gold.push(placed(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 6), { x, y: tip + 1.0, z }));
        flags.push({ x, y: tip + 1.75, z, color: flagColor, len: 1.1 + r * 0.25 });
        for (const [y, angles] of rows) for (const a of angles) win(x + Math.sin(a) * (r + 0.03), y, z + Math.cos(a) * (r + 0.03), a, 0.62, 1.25);
    };
    const R60 = Math.PI / 3, R35 = 0.6;
    tower(0, -74.5, 2.7, TY + K.h + U.h + 10, 11, purple, '#FFD54F', [[TY + K.h + U.h + 3, [-R35, 0, R35]], [TY + K.h + U.h + 7, [-R35, 0, R35]]]);
    for (const s of [-1, 1]) {
        tower(s * 9.6, -68.2, 2.1, TY + 14.5, 7.5, pink, '#ff7eb3', [[TY + 4, [0, s * R60]], [TY + 8.5, [0]], [TY + 12, [0, s * R60]]]);
        tower(s * 15.6, -72.5, 2.5, TY + 11.5, 8, purple, '#FFD54F', [[TY + 4.5, [s * 0.3, s * 1.0]], [TY + 8.5, [s * 0.3]]]);
        tower(s * 6.2, -80.5, 2.2, TY + 20, 9, pink, '#ff7eb3', [[TY + 14, [s * 0.5]], [TY + 17.5, [0, s * 0.8]]]);
        tower(s * 21.5, -71.5, 1.5, TY + 8, 4.5, pink, '#9fd4ff', [[TY + 5, [s * 0.4]]]);
        // the wings between the towers, and the outer walls
        box(5.0, 8.5, 4, s * 12.6, TY + 4.25, -70.3);
        merlons(s > 0 ? 10.6 : -14.6, s > 0 ? 14.6 : -10.6, TY + 8.5, -68.25);
        for (const x of [s * 11.6, s * 13.6]) win(x, TY + 4.5, -68.27, 0, 0.7, 1.4);
        box(5.0, 6, 3, s * 18.6, TY + 3, -71.8);
        merlons(s > 0 ? 16.8 : -20.4, s > 0 ? 20.4 : -16.8, TY + 6, -70.25);
        // turrets on the corners of the keep and the upper hall
        const turret = (tx, ty, tz, r, h, rh, roofs) => {
            stone.push(scaleUV(placed(new THREE.CylinderGeometry(r, r * 0.6, h, 24, 1), { x: tx, y: ty + h / 2, z: tz }), 1.2, h / 4));
            roofs.push(scaleUV(placed(new THREE.ConeGeometry(r + 0.25, rh, 24, 1, true), { x: tx, y: ty + h + rh / 2, z: tz }), 3, rh / 2.2));
            gold.push(placed(new THREE.TorusGeometry(r + 0.22, 0.05, 6, 32), { x: tx, y: ty + h + 0.02, z: tz, rx: Math.PI / 2 }));
            gold.push(placed(new THREE.SphereGeometry(0.11, 12, 8), { x: tx, y: ty + h + rh + 0.06, z: tz }));
        };
        turret(s * 8.4, TY + K.h - 1.2, kf - 0.3, 0.8, 3.4, 2.6, purple);
        turret(s * 5.6, TY + K.h + U.h - 0.9, U.z + U.d / 2 - 0.2, 0.62, 2.6, 2.0, pink);
    }

    group.add(merged(stone, mats.castleStone, { cast: true, receive: true }));
    group.add(merged(pink, mats.roofPink, { cast: true }));
    group.add(merged(purple, mats.roofPurple, { cast: true }));
    group.add(merged(gold, M.gold, { cast: true }));
    group.add(merged(carpetBits, mats.carpet, { receive: true }));

    // lit windows (a little brighter or dimmer each)
    const wg = merged(wins, mats.window).geometry;
    const colors = new Float32Array(wg.attributes.position.count * 3);
    let v = 0;
    winCol.forEach((b, i) => { const k = b * (0.75 + 0.5 * ((i * 0.6180339) % 1)); for (let j = 0; j < 6; j++, v++) colors.set([k, k * 0.92, k * 0.85], v * 3); });
    wg.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const windows = new THREE.Mesh(wg, mats.windowLit);
    group.add(windows);

    // flags: one mesh, each flag rippling from its pole
    const fgeos = [];
    for (const f of flags) { const g = new THREE.PlaneGeometry(f.len, f.len * 0.55, 10, 2); g.translate(f.len / 2, 0, 0); fgeos.push(g); }
    const fm = merged(fgeos, new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.7 }), { cast: true });
    const fpos = fm.geometry.attributes.position, per = 10 * 2 * 6;   // vertices per flag, as triangles
    const fbase = new Float32Array(fpos.count * 6), fcol = new Float32Array(fpos.count * 3);
    flags.forEach((f, n) => {
        const c = new THREE.Color(f.color);
        for (let i = n * per; i < (n + 1) * per; i++) { fbase.set([fpos.getX(i), fpos.getY(i), f.x, f.y, f.z, f.len], i * 6); fcol.set([c.r, c.g, c.b], i * 3); }
    });
    fm.geometry.setAttribute('color', new THREE.BufferAttribute(fcol, 3));
    group.add(fm);

    // a warm glow at the doorway
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(2), color: col('#ffb85c'), blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.28 }));
    glow.position.set(0, TY + 2.4, kf + 1.2); glow.scale.set(8, 6, 1);
    group.add(glow);

    return {
        group,
        update(t) {
            for (let i = 0; i < fpos.count; i++) {
                const lx = fbase[i * 6], ly = fbase[i * 6 + 1], fx = fbase[i * 6 + 2], fy = fbase[i * 6 + 3], fz = fbase[i * 6 + 4], len = fbase[i * 6 + 5];
                const k = lx / len;
                const wave = Math.sin(lx * 4.2 - t * 7 + fx) * 0.16 * k;
                fpos.setXYZ(i, fx + lx * Math.cos(wave * 0.6), fy + ly - k * k * 0.08, fz + wave);
            }
            fpos.needsUpdate = true;
            fm.geometry.computeVertexNormals();
            for (const b of banners) {
                const p = b.mesh.geometry.attributes.position;
                for (let i = 0; i < p.count; i++) {
                    const y = b.base[i * 3 + 1], x = b.base[i * 3], d = -y / 5.4;
                    p.setZ(i, d * 0.18 * Math.sin(t * 1.8 + y * 1.4 + b.phase) + d * d * 0.08 * Math.sin(t * 3.1 + x * 2.5));
                }
                p.needsUpdate = true;
                b.mesh.geometry.computeVertexNormals();
            }
        }
    };
}
