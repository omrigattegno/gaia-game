// The kingdom's gate: a pale stone wall with two round towers, royal-blue doors framed and
// scrolled in gold with a crest on each ("Y" and "G"), lanterns, banners, and the light
// waiting behind the doors.
import * as THREE from 'three';
import { merged, placed, col, smooth, easeInOut, window4 } from './util.js';
import { tube, arc, spiral, slab, slabShape, heartShape, crownShape, M, scaleUV } from './geo.js';
import * as T from './textures.js';

const G = { halfW: 3.1, spring: 4.6, top: 9.5, depth: 2.4, towerX: 7.0 };
export const GATE_OPEN = [2.5, 4.3];   // seconds: the doors swing from closed to open

export function buildGate(mats) {
    const group = new THREE.Group();
    group.name = 'gate';

    // --- the wall, with the arch cut out ---
    const s = new THREE.Shape();
    s.moveTo(-40, 0); s.lineTo(-G.halfW, 0); s.lineTo(-G.halfW, G.spring);
    s.absarc(0, G.spring, G.halfW, Math.PI, 0, true);
    s.lineTo(G.halfW, 0); s.lineTo(40, 0); s.lineTo(40, G.top); s.lineTo(-40, G.top); s.closePath();
    const wallGeo = new THREE.ExtrudeGeometry(s, { depth: G.depth, bevelEnabled: false, curveSegments: 40 });
    wallGeo.translate(0, 0, -G.depth / 2);
    scaleUV(wallGeo, 0.25);
    const stoneParts = [wallGeo];
    // a ledge along the top, and merlons on it
    stoneParts.push(scaleUV(placed(new THREE.BoxGeometry(80, 0.32, G.depth + 0.36), { y: G.top - 0.1 }), 20, 0.1));
    for (let x = -39; x <= 39; x += 2.2) {
        if (Math.abs(Math.abs(x) - G.towerX) < 2.9) continue;
        stoneParts.push(scaleUV(placed(new THREE.BoxGeometry(1.15, 1.2, G.depth + 0.1), { x, y: G.top + 0.6 }), 0.3, 0.3));
    }
    // the keystone over the arch
    const key = slab([[-0.55, 0], [0.55, 0], [0.75, 1.1], [-0.75, 1.1]], 0.3, 0.04);
    stoneParts.push(scaleUV(placed(key, { y: G.spring + G.halfW - 0.35, z: G.depth / 2 - 0.05 }), 0.25));

    // --- the towers beside the gate ---
    const towerParts = [], roofs = [], goldParts = [];
    for (const side of [-1, 1]) {
        const x = side * G.towerX, z = 0.5, r = 2.1, h = 13.6;
        towerParts.push(scaleUV(placed(new THREE.CylinderGeometry(r, r + 0.18, h, 48, 1), { x, y: h / 2, z }), 3.4, 3.4));
        towerParts.push(scaleUV(placed(new THREE.CylinderGeometry(r + 0.38, r, 0.7, 48, 1), { x, y: h + 0.35, z }), 3.6, 0.2));
        for (let k = 0; k < 14; k++) {
            const a = k / 14 * Math.PI * 2;
            towerParts.push(scaleUV(placed(new THREE.BoxGeometry(0.62, 0.95, 0.5), { x: x + Math.cos(a) * (r + 0.2), y: h + 1.15, z: z + Math.sin(a) * (r + 0.2), ry: -a + Math.PI / 2 }), 0.2, 0.25));
        }
        roofs.push(scaleUV(placed(new THREE.ConeGeometry(r + 0.62, 6.6, 48, 1, true), { x, y: h + 0.75 + 3.3, z }), 7, 3.2));
        goldParts.push(placed(new THREE.TorusGeometry(r + 0.58, 0.1, 10, 64), { x, y: h + 0.8, z, rx: Math.PI / 2 }));
        goldParts.push(placed(new THREE.SphereGeometry(0.24, 20, 14), { x, y: h + 0.75 + 6.6 + 0.12, z }));
        goldParts.push(placed(new THREE.CylinderGeometry(0.035, 0.035, 1.5, 8), { x, y: h + 0.75 + 6.6 + 0.9, z }));
    }
    group.add(merged(stoneParts, mats.stone, { cast: true, receive: true }));
    group.add(merged(towerParts, mats.stone, { cast: true, receive: true }));
    group.add(merged(roofs, mats.roofPurple, { cast: true }));

    // tower windows, glowing
    const winGeo = new THREE.PlaneGeometry(0.62, 1.24);
    for (const side of [-1, 1]) for (const y of [6.4, 10.4]) {
        const w = new THREE.Mesh(winGeo, mats.window);
        w.position.set(side * G.towerX, y, 0.5 + 2.1 + 0.04);
        group.add(w);
    }

    // --- gold mouldings around the arch ---
    const archPts = (r, z) => [new THREE.Vector3(-r, 0, z), ...arc(0, G.spring, r, Math.PI, 0, 48, z), new THREE.Vector3(r, 0, z)];
    goldParts.push(tube(archPts(G.halfW + 0.16, G.depth / 2 + 0.02), 0.13, { smooth: false, seg: 200, radial: 12 }));
    goldParts.push(tube(archPts(G.halfW + 0.62, G.depth / 2 + 0.02), 0.06, { smooth: false, seg: 200, radial: 8 }));
    for (let i = 0; i <= 16; i++) {
        const a = Math.PI - i / 16 * Math.PI, r = G.halfW + 0.39;
        goldParts.push(placed(new THREE.SphereGeometry(0.07, 12, 8), { x: Math.cos(a) * r, y: G.spring + Math.sin(a) * r, z: G.depth / 2 + 0.04 }));
    }
    // a crown on the keystone
    const kc = slabShape(crownShape(0.7, 0.42), 0.08, 0.02);
    goldParts.push(placed(kc, { y: G.spring + G.halfW + 0.05, z: G.depth / 2 + 0.26 }));
    group.add(merged(goldParts, M.gold, { cast: true }));
    const keyGem = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), M.ruby);
    keyGem.position.set(0, G.spring + G.halfW + 0.2, G.depth / 2 + 0.36);
    group.add(keyGem);

    // --- the doors ---
    const doors = buildDoors(mats);
    group.add(doors.left.pivot, doors.right.pivot);

    // the light behind the doors: leaks through the gaps, then floods out as they open
    const holeShape = new THREE.Shape();
    holeShape.moveTo(-G.halfW, 0); holeShape.lineTo(-G.halfW, G.spring);
    holeShape.absarc(0, G.spring, G.halfW, Math.PI, 0, true); holeShape.lineTo(G.halfW, 0); holeShape.closePath();
    const lightMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.8, 0.5), transparent: true, depthWrite: false, fog: false });
    const light = new THREE.Mesh(new THREE.ShapeGeometry(holeShape, 32), lightMat);
    light.position.z = -0.75;
    light.renderOrder = 2;
    group.add(light);
    const glowMat = new THREE.SpriteMaterial({ map: T.glow(1.8), color: col('#ffd08a'), blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: 0 });
    const glow = new THREE.Sprite(glowMat);
    glow.position.set(0, 3.8, -0.9); glow.scale.set(16, 13, 1);
    group.add(glow);
    const raysMat = new THREE.MeshBasicMaterial({ map: T.rays(), color: col('#ffe2a8'), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, fog: false, opacity: 0 });
    const raysMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), raysMat);
    raysMesh.position.set(0, 3.8, -0.95); raysMesh.scale.setScalar(26);
    group.add(raysMesh);

    // --- lanterns on the wall ---
    const lanterns = [];
    for (const side of [-1, 1]) {
        const L = buildLantern(mats);
        L.group.position.set(side * 3.95, 3.15, G.depth / 2 + 0.38);
        group.add(L.group);
        const p = new THREE.PointLight(col('#ffa64a'), 9, 15, 1.5);
        p.position.set(side * 3.95, 3.25, G.depth / 2 + 0.75);
        group.add(p);
        lanterns.push({ ...L, light: p, phase: side * 1.7 });
    }

    // --- banners on the wall ---
    const banners = [];
    const bannerTex = [T.banner('#5b2fb0', '#ff7eb3'), T.banner('#c2185b', '#ffd54f')];
    for (const side of [-1, 1]) {
        const geo = new THREE.PlaneGeometry(0.86, 3.3, 1, 14);
        geo.translate(0, -1.65, 0);
        const mat = new THREE.MeshStandardMaterial({ map: bannerTex[side < 0 ? 0 : 1], side: THREE.DoubleSide, alphaTest: 0.5, roughness: 0.75 });
        const b = new THREE.Mesh(geo, mat);
        b.position.set(side * 4.42, 8.95, G.depth / 2 + 0.06);
        b.castShadow = true;
        group.add(b);
        const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.1, 8), M.gold);
        rod.rotation.z = Math.PI / 2; rod.position.set(side * 4.42, 8.97, G.depth / 2 + 0.08);
        group.add(rod);
        banners.push({ mesh: b, base: geo.attributes.position.array.slice(), phase: side });
    }

    // --- the cobbled square in front ---
    const sq = new THREE.PlaneGeometry(90, 46, 1, 1);
    scaleUV(sq, 14, 7);   // big, soft stones: small sharp ones shimmered as the camera moved in
    const square = new THREE.Mesh(sq, mats.cobbles);
    square.rotation.x = -Math.PI / 2; square.position.set(0, 0.02, 23 - 1.3);
    square.receiveShadow = true;
    group.add(square);

    return {
        group, doors,
        update(t) {
            // the doors: a little shudder, then they swing open
            const k = easeInOut((t - GATE_OPEN[0]) / (GATE_OPEN[1] - GATE_OPEN[0]));
            const shake = t > GATE_OPEN[0] - 0.25 && t < GATE_OPEN[0] ? Math.sin(t * 70) * 0.004 : 0;
            const ang = k * 1.78 + shake;
            doors.left.pivot.rotation.y = ang;
            doors.right.pivot.rotation.y = -ang;
            // the light behind them
            const leak = 0.55 + 0.12 * Math.sin(t * 3.1) + 0.06 * Math.sin(t * 7.3);
            const burst = smooth(GATE_OPEN[0] - 0.05, GATE_OPEN[0] + 0.45, t);
            const gone = smooth(GATE_OPEN[0] + 0.25, GATE_OPEN[0] + 0.75, t);
            const I = Math.min(0.75, leak + burst * 0.5) * (1 - gone);
            lightMat.color.setRGB(1.8 * I, 1.3 * I, 0.62 * I);
            lightMat.opacity = 1 - gone;
            light.visible = gone < 1;
            const flood = window4(t, GATE_OPEN[0] - 0.1, GATE_OPEN[0] + 0.5, GATE_OPEN[0] + 0.7, GATE_OPEN[0] + 1.2);
            glowMat.opacity = 0.16 + 0.08 * Math.sin(t * 2.3) * (1 - burst) + flood * 0.3;
            glow.visible = t < GATE_OPEN[0] + 1.6;
            raysMat.opacity = flood * 0.45;
            raysMesh.rotation.z = t * 0.12;
            raysMesh.visible = flood > 0.001;
            // lanterns breathe softly (a fast flicker read as the picture flickering)
            for (const L of lanterns) {
                const f = 0.9 + 0.06 * Math.sin(t * 2.6 + L.phase) + 0.04 * Math.sin(t * 4.3 + L.phase * 2);
                L.light.intensity = 9 * f;
                L.flame.scale.set(1, 0.9 + 0.2 * f, 1);
                L.glowMat.opacity = 0.55 * f;
            }
            // banners ripple in the breeze
            for (const b of banners) {
                const p = b.mesh.geometry.attributes.position;
                for (let i = 0; i < p.count; i++) {
                    const y = b.base[i * 3 + 1], x = b.base[i * 3], d = -y / 3.3;
                    p.setZ(i, d * 0.11 * Math.sin(t * 2.2 + y * 2.1 + b.phase) + d * d * 0.05 * Math.sin(t * 3.7 + x * 3));
                }
                p.needsUpdate = true;
                b.mesh.geometry.computeVertexNormals();
            }
            doors.update(t);
        }
    };
}

function buildLantern(mats) {
    const group = new THREE.Group();
    const gold = [];
    // the bracket from the wall
    gold.push(tube([[0, -0.05, -0.38], [0, 0.18, -0.36], [0, 0.4, -0.18], [0, 0.42, 0]], 0.035, { radial: 8 }));
    gold.push(placed(new THREE.ConeGeometry(0.23, 0.2, 6), { y: 0.36 }));
    gold.push(placed(new THREE.SphereGeometry(0.05, 10, 8), { y: 0.5 }));
    gold.push(placed(new THREE.ConeGeometry(0.18, 0.14, 6), { y: -0.27, rx: Math.PI }));
    gold.push(placed(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 6), { y: 0.25 }));
    gold.push(placed(new THREE.CylinderGeometry(0.19, 0.19, 0.04, 6), { y: -0.2 }));
    for (let k = 0; k < 6; k++) {
        const a = k / 6 * Math.PI * 2;
        gold.push(placed(new THREE.CylinderGeometry(0.014, 0.014, 0.46, 6), { x: Math.cos(a) * 0.19, y: 0.02, z: Math.sin(a) * 0.19 }));
    }
    group.add(merged(gold, M.gold, { cast: true }));
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.44, 6), mats.lanternGlass);
    glass.position.y = 0.02;
    group.add(glass);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), mats.flame);
    flame.scale.set(1, 1.6, 1); flame.position.y = -0.02;
    group.add(flame);
    const glowMat = new THREE.SpriteMaterial({ map: T.glow(2), color: col('#ffb05a'), blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.5 });
    const g = new THREE.Sprite(glowMat);
    g.scale.setScalar(2.2); g.position.y = 0.02;
    group.add(g);
    return { group, flame, glowMat };
}

// The two doors. Each swings on its hinge (the pivot); the right one is the left one mirrored,
// except for its crest, so its letter reads the right way round.
function buildDoors(mats) {
    const R = G.halfW - 0.05, cx = G.halfW, cy = G.spring;   // the arch, in the door's own space
    const top = Math.sqrt(R * R - 0.01);
    const ds = new THREE.Shape();
    ds.moveTo(0.05, 0.02); ds.lineTo(G.halfW - 0.012, 0.02); ds.lineTo(G.halfW - 0.012, cy + top);
    ds.absarc(cx, cy, R, Math.atan2(top, -0.012), Math.PI, false);
    ds.lineTo(0.05, 0.02);
    const doorGeo = new THREE.ExtrudeGeometry(ds, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.025, bevelSegments: 2, curveSegments: 40 });
    const zf = 0.235;   // the front face
    const gold = [];
    // the frame, inset from the edge
    const ri = R - 0.11, xi = G.halfW - 0.12;
    const topi = Math.sqrt(ri * ri - (cx - xi) * (cx - xi));
    const frame = [new THREE.Vector3(cx - ri, 0.13, zf), new THREE.Vector3(xi, 0.13, zf), new THREE.Vector3(xi, cy + topi, zf),
        ...arc(cx, cy, ri, Math.atan2(topi, xi - cx), Math.PI, 40, zf), new THREE.Vector3(cx - ri, 0.13, zf)];
    gold.push(tube(frame, 0.055, { smooth: false, seg: 160, radial: 8 }));
    // the lower panel: a heart between two scrolls
    const panel = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]].map(p => new THREE.Vector3(p[0], p[1], zf));
    gold.push(tube(panel(0.42, 0.55, 2.72, 2.55), 0.04, { smooth: false, seg: 80, radial: 8 }));
    gold.push(tube(panel(0.3, 2.82, 2.84, 2.95), 0.03, { smooth: false, seg: 60, radial: 6 }));
    const hx = 1.57, hy = 1.55;
    gold.push(placed(slabShape(heartShape(0.62), 0.05, 0.02), { x: hx, y: hy, z: zf - 0.01 }));
    for (const d of [-1, 1]) {
        gold.push(tube(spiral(hx + d * 0.72, hy + 0.12, 0.42, 1.25, d > 0 ? Math.PI * 0.9 : Math.PI * 0.1, d, zf), 0.028, { seg: 64, radial: 6 }));
        gold.push(tube(spiral(hx + d * 0.72, hy - 0.42, 0.26, 1.1, d > 0 ? Math.PI * 1.1 : -Math.PI * 0.1, -d, zf), 0.024, { seg: 70, radial: 6 }));
    }
    // studs along the rails
    for (let x = 0.5; x < 2.75; x += 0.32) {
        gold.push(placed(new THREE.SphereGeometry(0.045, 10, 8), { x, y: 0.33, z: zf }));
        gold.push(placed(new THREE.SphereGeometry(0.04, 10, 8), { x, y: 2.885, z: zf + 0.02 }));
    }
    // the upper panel: rays from the crest out to the frame
    const mx = 1.62, my = 4.6;
    const inside = (x, y) => x > 0.32 && x < xi - 0.12 && y > 3.12 && Math.hypot(x - cx, y - cy) < ri - 0.14;
    for (let i = 0; i < 13; i++) {
        const a = -Math.PI * 0.32 + i / 12 * Math.PI * 1.64;
        let l = 0.95;
        while (inside(mx + Math.cos(a) * (l + 0.04), my + Math.sin(a) * (l + 0.04)) && l < 3) l += 0.04;
        if (l < 1.05) continue;
        gold.push(tube([[mx + Math.cos(a) * 0.95, my + Math.sin(a) * 0.95, zf], [mx + Math.cos(a) * l, my + Math.sin(a) * l, zf]], 0.026, { smooth: false, seg: 4, radial: 6 }));
        gold.push(placed(new THREE.SphereGeometry(0.05, 10, 8), { x: mx + Math.cos(a) * l, y: my + Math.sin(a) * l, z: zf }));
    }
    // a knocker ring near the middle
    gold.push(placed(new THREE.TorusGeometry(0.2, 0.032, 10, 32), { x: 2.68, y: 2.32, z: zf + 0.05 }));
    gold.push(placed(new THREE.CylinderGeometry(0.09, 0.09, 0.04, 16), { x: 2.68, y: 2.55, z: zf + 0.02, rx: Math.PI / 2 }));
    const goldGeo = merged(gold, M.gold).geometry;

    const make = (side) => {
        const pivot = new THREE.Group();
        pivot.position.set(side * G.halfW, 0, -0.42);
        const body = new THREE.Group();
        body.scale.x = side < 0 ? 1 : -1;
        const door = new THREE.Mesh(doorGeo, mats.enamel);
        door.castShadow = door.receiveShadow = true;
        const g = new THREE.Mesh(goldGeo, M.gold);
        g.castShadow = true;
        body.add(door, g);
        pivot.add(body);
        // the crest, never mirrored: a gold ring, an enamel disc, the letter and a crown
        const crest = new THREE.Group();
        crest.position.set(side < 0 ? mx : -mx, my, zf);
        const cg = [];
        cg.push(new THREE.TorusGeometry(0.8, 0.075, 14, 72));
        cg.push(new THREE.TorusGeometry(0.66, 0.03, 8, 64));
        const letter = side < 0
            ? [[[-0.3, 0.36, 0.04], [0, 0.02, 0.04]], [[0.3, 0.36, 0.04], [0, 0.02, 0.04]], [[0, 0.02, 0.04], [0, -0.4, 0.04]]]
            : [[...arc(0, 0, 0.36, 0.75, Math.PI * 2 - 0.12, 40, 0.04), new THREE.Vector3(0.36, 0.04, 0.04), new THREE.Vector3(0.1, 0.04, 0.04)]];
        for (const stroke of letter) {
            cg.push(tube(stroke, 0.062, { smooth: false, seg: stroke.length * 6, radial: 10 }));
            const a = stroke[0], b = stroke[stroke.length - 1];
            for (const p of [a, b]) cg.push(placed(new THREE.SphereGeometry(0.062, 12, 10), { x: p.x ?? p[0], y: p.y ?? p[1], z: 0.04 }));
        }
        cg.push(placed(slabShape(crownShape(0.66, 0.4), 0.07, 0.02), { y: 0.86, z: -0.03 }));
        crest.add(merged(cg, M.gold, { cast: true }));
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.05, 64), mats.enamelBright);
        disc.rotation.x = Math.PI / 2; disc.position.z = -0.005;
        crest.add(disc);
        const gems = [[0, 1.08, M.ruby, 0.075], [-0.22, 1.0, M.sapphire, 0.05], [0.22, 1.0, M.sapphire, 0.05]];
        for (const [x, y, m, r] of gems) { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), m); s.position.set(x, y, 0.07); crest.add(s); }
        for (const [x, y] of [[-0.356, 1.26], [0, 1.34], [0.356, 1.26]]) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), M.pearl); p.position.set(x, y, 0.035); crest.add(p); }
        pivot.add(crest);
        // a glint that runs over the crest before the doors open
        const glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.sparkle(), color: col('#fff4d0'), blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }));
        glint.position.set(side < 0 ? mx - 0.3 : -mx + 0.3, my + 0.5, zf + 0.2);
        pivot.add(glint);
        return { pivot, glint };
    };
    const left = make(-1), right = make(1);
    return {
        left, right,
        update(t) {
            for (const [d, t0] of [[left, 1.35], [right, 1.75]]) {
                const k = window4(t, t0, t0 + 0.25, t0 + 0.3, t0 + 0.65);
                d.glint.material.opacity = k;
                d.glint.scale.setScalar(0.2 + k * 1.3);
                d.glint.material.rotation = t * 2;
                d.glint.position.x = (d === left ? mx : -mx) + (t - t0 - 0.3) * 1.4;
            }
        }
    };
}
