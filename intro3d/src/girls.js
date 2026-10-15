// Yoovy and Googy in 3D, as in the game: Yoovy the older, with long straight blonde hair, a
// pink headband with a bow, a purple shirt with a heart and a pleated blue skirt; Googy the
// younger, with golden soft waves just below her shoulders, a pink flower and a pink dress
// with a star. Their faces are the game's own faces (drawn from the same SVG). For the
// kingdom, each wears a little gold crown and a velvet cape trimmed with ermine.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { lock, slabShape, heartShape, starShape, M } from './geo.js';
import { smooth, clamp, lerp } from './util.js';
import * as T from './textures.js';

const LOOKS = {
    googy: { hair: '#F2B53A', hairLight: '#FFE08A', dress: '#FF7EB3', dressLight: '#FFA6CB', dressDark: '#E85C98', shoes: '#E0407F', cape: '#C2185B', capeSheen: '#ff8fc0', lining: '#ff6fae' },
    yoovy: { hair: '#EDC66B', hairLight: '#FFF0C0', shirt: '#8E6CEF', shirtDark: '#7353D6', skirt: '#4A7BD0', skirtDark: '#3A64B0', shoes: '#8E6CEF', cape: '#5E35B1', capeSheen: '#b79bff', lining: '#9b7bff' }
};
const SKIN = '#FFDBC4';
const DOWN = new THREE.Vector3(0, -1, 0);

// body sizes (the feet at y = 0, facing +z)
const DIM = {
    googy: { R: 0.25, headY: 0.735, headScale: [1, 0.97, 0.96], shoulder: [0.122, 0.47], arm: 0.185, armR: 0.03, hand: 0.041,
             hip: [0.058, 0.24], leg: 0.16, legR: 0.037, cape: { topY: 0.495, botY: 0.06, topR: 0.118, botR: 0.3, span: [1.72, 1.5] },
             crown: { r: 0.135, h: 0.115, tilt: -0.14, y: 0.225 } },
    yoovy: { R: 0.24, headY: 0.905, headScale: [0.96, 1.02, 0.95], shoulder: [0.126, 0.632], arm: 0.215, armR: 0.03, hand: 0.039,
             hip: [0.06, 0.345], leg: 0.25, legR: 0.037, cape: { topY: 0.655, botY: 0.065, topR: 0.122, botR: 0.31, span: [1.72, 1.5] },
             crown: { r: 0.13, h: 0.11, tilt: 0.1, y: 0.23 } }
};

function cloth(hex, sheen = '#ffffff', rough = 0.72) {
    return new THREE.MeshPhysicalMaterial({ color: hex, roughness: rough, sheen: 0.5, sheenColor: sheen, sheenRoughness: 0.5 });
}
function lathe(profile, segs = 48) {
    const g = new THREE.LatheGeometry(profile.slice().reverse().map(([r, y]) => new THREE.Vector2(r, y)), segs);
    g.rotateY(Math.PI);   // its seam goes to the back
    return g;
}
const mesh = (geo, mat, cast = true) => { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; return m; };
const ball = (r, mat, x, y, z, sx = 1, sy = 1, sz = 1, segs = 20) => {
    const m = mesh(new THREE.SphereGeometry(r, segs, Math.max(8, segs * 0.7 | 0)), mat);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz);
    return m;
};

// A point on the head (unit sphere): az 0 = the face, +π/2 = her left; el up from the middle.
const S = (az, el, rf = 1) => new THREE.Vector3(Math.sin(az) * Math.cos(el) * rf, Math.sin(el) * rf, Math.cos(az) * Math.cos(el) * rf);

// The hair cap: a shell over the head, pulled in under the hairline so the face shows.
function hairCap(capR, frontLine, backY) {
    const g = new THREE.SphereGeometry(1, 96, 64);
    g.rotateY(-Math.PI / 2);   // the seam at the back
    const p = g.attributes.position, d = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
        d.fromBufferAttribute(p, i).normalize();
        const f = smooth(-0.1, 0.42, d.z);
        const line = lerp(backY, frontLine(d.x), f);
        const k = smooth(line - 0.03, line + 0.03, d.y);
        const r = lerp(0.9, capR, k);
        p.setXYZ(i, d.x * r, d.y * r, d.z * r);
    }
    g.computeVertexNormals();
    return g;
}
// a piecewise-linear line through [x, y] points
const lineFn = pts => x => {
    if (x <= pts[0][0]) return pts[0][1];
    for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
        if (x <= x1) { const k = (x - x0) / (x1 - x0), s = k * k * (3 - 2 * k); return y0 + (y1 - y0) * s; }
    }
    return pts[pts.length - 1][1];
};
// a point of the head surface over (x, y), pushed out to radius rf
const onHead = (x, y, rf) => { const z = Math.sqrt(Math.max(0.02, 1 - x * x - y * y)); return new THREE.Vector3(x, y, z).normalize().multiplyScalar(rf); };

function hairYoovy() {
    const geos = [];
    // the fringe line: shortest at the parting (on her left), lowest in the middle
    const fringe = [[-1.05, -0.12], [-0.86, 0.2], [-0.55, 0.42], [-0.2, 0.46], [0.15, 0.44], [0.45, 0.55], [0.64, 0.68], [0.84, 0.36], [1.05, -0.12]];
    geos.push(hairCap(1.07, lineFn(fringe.map(([x, y]) => [x, y + 0.05])), -0.5));
    // fringe locks from the parting, swept to the side
    const part = S(0.62, 1.12, 1.0);
    const tips = [[-0.92, 0.16], [-0.72, 0.33], [-0.48, 0.43], [-0.24, 0.47], [0.0, 0.46], [0.22, 0.46], [0.42, 0.53]];
    tips.forEach(([x, y], i) => {
        const tip = onHead(x, y, 1.075), mid = part.clone().lerp(tip, 0.55).normalize().multiplyScalar(1.12);
        const root = part.clone().add(new THREE.Vector3(-0.04 * i, 0.02, 0.0)).normalize().multiplyScalar(0.98);
        geos.push(lock([root, mid, tip, onHead(x * 1.02, y - 0.06, 1.06)], 0.15, 0.1, { flat: 0.42, seg: 22, tipRound: 0.35 }));
    });
    for (const [x, y] of [[0.84, 0.36], [0.98, 0.1]]) {
        const tip = onHead(x, y, 1.07), mid = part.clone().lerp(tip, 0.5).normalize().multiplyScalar(1.1);
        geos.push(lock([part.clone().multiplyScalar(0.98), mid, tip, onHead(x + 0.02, y - 0.08, 1.06)], 0.13, 0.1, { flat: 0.42, seg: 18, tipRound: 0.35 }));
    }
    // long straight hair down her back
    for (let i = 0; i <= 14; i++) {
        const az = Math.PI * (0.5 + i / 14), s = Math.sin(az), c = Math.cos(az);
        const pts = [S(az, 0.8, 0.95), S(az, 0.28, 1.075), S(az, -0.3, 1.075),
            new THREE.Vector3(s * 1.04, -0.95, c * 0.98), new THREE.Vector3(s * 1.0, -1.42, c * 0.92), new THREE.Vector3(s * 0.97, -1.78, c * 0.88)];
        geos.push(lock(pts, 0.24, 0.18, { flat: 0.5, seg: 30, tipRound: 0.22 }));
    }
    // locks in front of her shoulders, ending in points
    for (const side of [-1, 1]) for (const [az, w] of [[1.2, 0.2], [1.38, 0.17]]) {
        const a = side * az, s = Math.sin(a), c = Math.cos(a);
        const pts = [S(a, 0.6, 0.97), S(a, 0.08, 1.08), new THREE.Vector3(s * 1.06, -0.5, c * 1.0),
            new THREE.Vector3(s * 1.0, -1.05, 0.46), new THREE.Vector3(s * 0.96, -1.6, 0.44)];
        geos.push(lock(pts, w, w * 0.8, { flat: 0.5, seg: 28, tipRound: 0.4 }));
    }
    return mergeGeometries(geos, false);
}

function hairGoogy() {
    const geos = [];
    // soft waves over the forehead: the parting high on her left
    const fringe = [[-1.05, -0.05], [-0.8, 0.5], [-0.42, 0.38], [0.12, 0.45], [0.62, 0.7], [0.86, 0.42], [1.05, -0.05]];
    geos.push(hairCap(1.09, lineFn(fringe.map(([x, y]) => [x, y + 0.06])), -0.42));
    const part = S(0.68, 1.05, 1.0);
    // three big waves swept across the forehead, and one down her left temple
    const waves = [
        [[0.5, 0.86, 1.12], [0.3, 0.62, 1.14], [0.14, 0.43, 1.09], [0.04, 0.42, 1.07]],
        [[0.3, 0.92, 1.12], [-0.05, 0.72, 1.15], [-0.36, 0.38, 1.1], [-0.48, 0.38, 1.07]],
        [[0.1, 0.96, 1.12], [-0.42, 0.82, 1.15], [-0.78, 0.52, 1.12], [-0.92, 0.22, 1.09]],
        [[0.7, 0.8, 1.1], [0.84, 0.5, 1.12], [0.94, 0.22, 1.1], [0.98, 0.02, 1.08]]
    ];
    for (const w of waves) {
        const pts = [part.clone().multiplyScalar(0.98), ...w.map(([x, y, r]) => onHead(x, y, r))];
        geos.push(lock(pts, 0.19, 0.13, { flat: 0.45, seg: 26, tipRound: 0.35 }));
    }
    // waves falling to just below her shoulders, the ends turned up in loose curls
    const wavy = (az, len, amp, phase, out) => {
        const s = Math.sin(az), c = Math.cos(az), pts = [S(az, 0.82, 0.96), S(az, 0.3, 1.09)];
        for (let k = 1; k <= 5; k++) {
            const y = -0.25 * k * len, r = 1.1 + amp * Math.sin(k * 1.7 + phase) + out * k * 0.02;
            pts.push(new THREE.Vector3(s * r, y + 0.1, c * r * (k > 2 ? 0.96 : 1)));
        }
        const last = pts[pts.length - 1];
        pts.push(new THREE.Vector3(last.x * 1.04, last.y - 0.07, last.z * 1.04));
        pts.push(new THREE.Vector3(last.x * 1.1, last.y - 0.04, last.z * 1.1));
        return pts;
    };
    for (let i = 0; i <= 15; i++) {
        const az = Math.PI * (0.47 + 1.06 * i / 15);
        geos.push(lock(wavy(az, 1.02 + 0.04 * Math.sin(i * 2.3), 0.07, i * 1.3, 1), 0.22, 0.17, { flat: 0.55, seg: 34, tipRound: 0.2 }));
    }
    for (const side of [-1, 1]) for (const [az, w, ph] of [[1.15, 0.19, 0.4], [1.33, 0.2, 2.1]]) {
        const a = side * az, pts = wavy(a, 1.0, 0.08, ph, 1);
        pts.forEach((p, k) => { if (k > 2) p.z = Math.max(p.z, 0.3 + 0.02 * k); });
        geos.push(lock(pts, w, w * 0.8, { flat: 0.55, seg: 32, tipRound: 0.22 }));
    }
    return mergeGeometries(geos, false);
}

// The face: a thin shell over the front of the head carrying the game's face drawing.
function faceShell() {
    const g = new THREE.SphereGeometry(1.004, 56, 40, Math.PI / 2 - 1.3, 2.6, 0.38, 2.0);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, 0.5 + p.getX(i) / 2, 0.5 + p.getY(i) / 2);
    return g;
}

// A little crown: a gold band with five points, pearls on the points, gems, a velvet cushion.
function crown(c, capeHex) {
    const group = new THREE.Group();
    const N = 150, pos = [], idx = [];
    for (let i = 0; i <= N; i++) {
        const th = i / N * Math.PI * 2;
        const f = Math.pow(0.5 + 0.5 * Math.cos(5 * th), 5);
        const top = c.h * (0.5 + 0.78 * f);
        pos.push(Math.sin(th) * c.r, 0, Math.cos(th) * c.r, Math.sin(th) * c.r * 1.13, top, Math.cos(th) * c.r * 1.13);
    }
    for (let i = 0; i < N; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    const band = new THREE.BufferGeometry();
    band.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    band.setIndex(idx); band.computeVertexNormals();
    group.add(mesh(band, M.goldDouble));
    const ring = (y, rr, t) => { const m = mesh(new THREE.TorusGeometry(rr, t, 8, 64), M.gold); m.rotation.x = Math.PI / 2; m.position.y = y; group.add(m); };
    ring(0.004, c.r * 1.01, 0.011); ring(c.h * 0.42, c.r * 1.075, 0.006);
    const pearls = [], gems = { ruby: [], sapphire: [], emerald: [] };
    for (let k = 0; k < 5; k++) {
        const th = k / 5 * Math.PI * 2;
        pearls.push(new THREE.SphereGeometry(0.014, 12, 9).translate(Math.sin(th) * c.r * 1.13, c.h * 1.3, Math.cos(th) * c.r * 1.13));
        const g = new THREE.SphereGeometry(k === 0 ? 0.02 : 0.014, 14, 10);
        g.scale(1, 1, 0.6); g.rotateY(th); g.translate(Math.sin(th) * c.r * 1.07, c.h * 0.22, Math.cos(th) * c.r * 1.07);
        gems[k === 0 ? 'ruby' : (k % 2 ? 'sapphire' : 'emerald')].push(g);
    }
    group.add(mesh(mergeGeometries(pearls), M.pearl, false));
    for (const k in gems) group.add(mesh(mergeGeometries(gems[k]), M[k], false));
    const cushion = mesh(new THREE.SphereGeometry(c.r * 0.98, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), cloth(capeHex, '#ffffff', 0.8));
    cushion.scale.y = 0.75; cushion.position.y = c.h * 0.25;
    group.add(cushion);
    group.add(ball(0.016, M.gold, 0, c.h * 0.25 + c.r * 0.74, 0, 1, 1, 1, 12));
    return group;
}

// A velvet cape over the shoulders, its hem and collar in ermine; it sways as she walks.
function cape(c, look, mats) {
    const NU = 26, NV = 16;
    const geo = new THREE.PlaneGeometry(1, 1, NU, NV);
    const pos = geo.attributes.position;
    const fill = (t, trail, lift) => {
        for (let j = 0; j <= NV; j++) {
            const v = j / NV, w = Math.pow(v, 1.5), span = lerp(c.span[0], c.span[1], v);
            for (let i = 0; i <= NU; i++) {
                const phi = (i / NU - 0.5) * 2 * span;
                const R = lerp(c.topR, c.botR, Math.pow(v, 0.8)) + 0.013 * v * Math.sin(phi * 6 + 0.6);
                let x = Math.sin(phi) * R, z = -Math.cos(phi) * R - 0.012, y = lerp(c.topY, c.botY, v);
                z -= w * (trail * 0.08 + 0.016 * Math.sin(t * 4.1 + phi * 1.7 - v * 2.6) + lift * 0.12);
                x += w * 0.011 * Math.sin(t * 3.3 + v * 2.2 + phi);
                y += w * lift * 0.06;
                pos.setXYZ(j * (NU + 1) + i, x, y, z);
            }
        }
        pos.needsUpdate = true;
        geo.computeVertexNormals();
    };
    fill(0, 0, 0);
    // make the front faces look outwards
    const back = (NV >> 1) * (NU + 1) + (NU >> 1);
    if (geo.attributes.normal.getZ(back) > 0) { const ix = geo.index.array; for (let i = 0; i < ix.length; i += 3) { const a = ix[i]; ix[i] = ix[i + 2]; ix[i + 2] = a; } geo.computeVertexNormals(); }
    const outer = mesh(geo, cloth(look.cape, look.capeSheen, 0.78));
    outer.material.sheenRoughness = 0.32;
    const inner = mesh(geo, new THREE.MeshPhysicalMaterial({ color: look.lining, roughness: 0.35, metalness: 0.1, sheen: 0.6, sheenColor: '#ffffff', sheenRoughness: 0.3, side: THREE.BackSide }));
    const group = new THREE.Group();
    group.add(outer, inner);
    // ermine: fluffy puffs along the hem and the collar, with black tails on the hem
    const puff = new THREE.SphereGeometry(1, 14, 10);
    const HEM = NU * 2 + 1;
    const hem = new THREE.InstancedMesh(puff, mats.ermine, HEM), collar = new THREE.InstancedMesh(puff, mats.ermine, 15);
    const tails = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), mats.ermineTail, 6);
    hem.castShadow = collar.castShadow = true;
    group.add(hem, collar, tails);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), P = new THREE.Vector3(), P2 = new THREE.Vector3(), Sc = new THREE.Vector3();
    const at = (j, i, out) => out.fromBufferAttribute(pos, j * (NU + 1) + i);
    const place = (t) => {
        for (let k = 0; k < HEM; k++) {
            const f = k / 2, i0 = Math.floor(f), i1 = Math.min(NU, i0 + 1);
            at(NV, i0, P); at(NV, i1, P2); P.lerp(P2, f - i0); P.y += 0.008;
            Sc.set(0.032, 0.028, 0.032).multiplyScalar(1 + 0.16 * Math.sin(k * 2.7));
            hem.setMatrixAt(k, m4.compose(P, q.identity(), Sc));
        }
        for (let k = 0; k < 15; k++) {
            const i = Math.round(k / 14 * NU);
            at(0, i, P); P.multiplyScalar(1.02); P.y += 0.006;
            Sc.setScalar(0.03 + 0.004 * Math.sin(k * 1.9));
            collar.setMatrixAt(k, m4.compose(P, q.identity(), Sc));
        }
        for (let k = 0; k < 6; k++) {
            const i = Math.round((k + 0.5) / 6 * NU);
            at(NV, i, P); P.y += 0.004;
            const n = P.clone().setY(0).normalize();
            P.addScaledVector(n, 0.022);
            Sc.set(0.008, 0.016, 0.008);
            tails.setMatrixAt(k, m4.compose(P, q.identity(), Sc));
        }
        hem.instanceMatrix.needsUpdate = collar.instanceMatrix.needsUpdate = tails.instanceMatrix.needsUpdate = true;
    };
    place(0);
    // a gold chain across her chest, between the cape's front corners, and a brooch
    const a = new THREE.Vector3(), b = new THREE.Vector3();
    at(0, 0, a); at(0, NU, b);
    const mid = new THREE.Vector3(0, c.topY - 0.03, c.topR + 0.035);
    const chain = mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a, mid, b]), 24, 0.007, 6), M.goldDeep);
    group.add(chain);
    const brooch = ball(0.02, mats.brooch, 0, c.topY - 0.028, c.topR + 0.045, 1, 1, 0.5, 14);
    group.add(brooch);
    return { group, update(t, trail, lift) { fill(t, trail, lift); place(t); } };
}

export function buildGirl(who, faceTex, mats) {
    const L = LOOKS[who], D = DIM[who], Y = who === 'yoovy';
    const root = new THREE.Group(), body = new THREE.Group();
    root.add(body);
    const skin = mats.skin;

    // --- clothes ---
    if (Y) {
        const shirt = cloth(L.shirt, '#c9b6ff'), skirtM = cloth(L.skirt, '#a9c6ff');
        body.add(mesh(lathe([[0, 0.69], [0.05, 0.69], [0.088, 0.672], [0.116, 0.642], [0.124, 0.6], [0.12, 0.54], [0.115, 0.5], [0.116, 0.47], [0, 0.47]]), shirt));
        const sk = lathe([[0, 0.5], [0.118, 0.5], [0.15, 0.45], [0.178, 0.395], [0.198, 0.35], [0.204, 0.335], [0.19, 0.33], [0, 0.33]], 96);
        const p = sk.attributes.position;
        for (let i = 0; i < p.count; i++) {
            const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = smooth(0.5, 0.34, y), ph = Math.atan2(x, z);
            const f = 1 + 0.07 * k * (Math.abs(Math.sin(ph * 8)) - 0.5);
            p.setX(i, x * f); p.setZ(i, z * f);
        }
        sk.computeVertexNormals();
        body.add(mesh(sk, skirtM));
        const band = mesh(new THREE.TorusGeometry(0.119, 0.013, 8, 48), cloth(L.shirtDark, '#c9b6ff'));
        band.rotation.x = Math.PI / 2; band.position.y = 0.497; body.add(band);
        const neck = mesh(new THREE.TorusGeometry(0.052, 0.012, 8, 32), cloth(L.shirtDark, '#c9b6ff'));
        neck.rotation.x = Math.PI / 2; neck.position.y = 0.688; body.add(neck);
        for (const s of [-1, 1]) body.add(ball(0.062, cloth(L.shirtDark, '#c9b6ff'), s * 0.112, 0.636, 0, 1, 0.82, 0.92));
        const heart = mesh(slabShape(heartShape(0.07), 0.012, 0.006), mats.brooch);
        heart.position.set(0, 0.585, 0.118); body.add(heart);
    } else {
        const dress = cloth(L.dress, '#ffc2dc'), dressL = cloth(L.dressLight, '#ffe0ee');
        body.add(mesh(lathe([[0, 0.53], [0.05, 0.53], [0.086, 0.512], [0.11, 0.486], [0.118, 0.455], [0.112, 0.405], [0.118, 0.372], [0.15, 0.322], [0.186, 0.27], [0.206, 0.236], [0.212, 0.224], [0.19, 0.218], [0, 0.218]]), dress));
        const scallops = [];
        for (let k = 0; k < 22; k++) {
            const a = k / 22 * Math.PI * 2, g = new THREE.SphereGeometry(0.021, 10, 7);
            g.scale(1, 0.7, 1); g.translate(Math.sin(a) * 0.205, 0.226, Math.cos(a) * 0.205);
            scallops.push(g);
        }
        body.add(mesh(mergeGeometries(scallops), cloth(L.dressDark, '#ffc2dc'), false));
        const collar = mesh(new THREE.TorusGeometry(0.056, 0.017, 10, 32), cloth('#ffffff', '#ffffff'));
        collar.rotation.x = Math.PI / 2; collar.position.y = 0.522; collar.scale.z = 0.7; body.add(collar);
        for (const s of [-1, 1]) body.add(ball(0.069, dressL, s * 0.112, 0.476, 0, 1, 0.9, 0.92));
        const star = mesh(slabShape(starShape(0.04), 0.012, 0.006), mats.brooch);
        star.position.set(0, 0.42, 0.112); body.add(star);
    }
    // the neck
    const neckY = Y ? [0.66, 0.74] : [0.5, 0.57];
    const neck = mesh(new THREE.CylinderGeometry(0.04, 0.044, neckY[1] - neckY[0], 16), mats.skinShade);
    neck.position.y = (neckY[0] + neckY[1]) / 2; body.add(neck);

    // --- arms (pivots at the shoulders), legs (pivots at the hips) ---
    const arms = [], legs = [];
    for (const side of [-1, 1]) {
        const pivot = new THREE.Group();
        pivot.position.set(side * D.shoulder[0], D.shoulder[1], 0);
        const a = mesh(new THREE.CapsuleGeometry(D.armR, D.arm, 6, 14), skin);
        a.position.y = -(D.arm / 2 + D.armR * 0.4);
        const h = ball(D.hand, skin, 0, -(D.arm + D.armR * 1.2), 0.004, 1, 1.05, 0.92, 16);
        pivot.add(a, h);
        body.add(pivot);
        arms.push(pivot);
        const hip = new THREE.Group();
        hip.position.set(side * D.hip[0], D.hip[1], 0);
        const l = mesh(new THREE.CapsuleGeometry(D.legR, D.leg, 6, 14), skin);
        l.position.y = -(D.leg / 2 + D.legR);
        const sock = mesh(new THREE.CylinderGeometry(D.legR * 1.12, D.legR * 1.12, 0.05, 16), mats.sock);
        sock.position.y = -(D.leg + D.legR) + 0.06;
        const foot = -(D.leg + D.legR * 2) + 0.02;
        hip.add(l, sock);
        if (Y) {
            hip.add(ball(0.052, mats.sneaker, 0, foot, 0.022, 1, 0.62, 1.5, 18));
            hip.add(ball(0.055, cloth(L.shoes, '#d8c8ff', 0.6), 0, foot - 0.016, 0.024, 1.02, 0.25, 1.52, 18));
        } else {
            hip.add(ball(0.05, cloth(L.shoes, '#ffc2dc', 0.4), 0, foot, 0.022, 1, 0.64, 1.45, 18));
            hip.add(ball(0.012, mats.sock, 0, foot + 0.026, 0.06, 1.6, 0.5, 1, 10));
        }
        body.add(hip);
        legs.push(hip);
    }

    // --- the head ---
    const head = new THREE.Group();
    head.position.y = D.headY;
    head.scale.set(D.R * D.headScale[0], D.R * D.headScale[1], D.R * D.headScale[2]);
    body.add(head);
    head.add(mesh(new THREE.SphereGeometry(1, 48, 36), skin));
    const faceMat = new THREE.MeshStandardMaterial({ map: faceTex.open, transparent: true, roughness: 0.5, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, premultipliedAlpha: true,
        emissive: '#ffffff', emissiveMap: faceTex.open, emissiveIntensity: 0.14 });
    const face = new THREE.Mesh(faceShell(), faceMat);
    face.renderOrder = 1;
    head.add(face);
    const hair = mesh(Y ? hairYoovy() : hairGoogy(), mats['hair_' + who]);
    hair.receiveShadow = true;
    head.add(hair);
    if (Y) {
        // the pink headband and its bow, on her left
        const hb = new THREE.Group();
        const bandGeo = new THREE.TorusGeometry(1.105, 0.07, 12, 72, Math.PI + 0.5);
        bandGeo.rotateZ(-0.25);
        const band = mesh(bandGeo, mats.pink);
        hb.add(band);
        hb.rotation.x = 0.42;
        const bow = new THREE.Group();
        const wing = new THREE.ConeGeometry(0.17, 0.3, 14);
        for (const s of [-1, 1]) { const w = mesh(wing, mats.pink); w.rotation.z = s * Math.PI / 2; w.position.x = s * 0.15; w.scale.set(1, 1, 0.45); bow.add(w); }
        bow.add(ball(0.08, mats.pinkDark, 0, 0, 0, 1, 1, 0.8, 12));
        const ang = 0.62;
        bow.position.set(Math.cos(ang) * 1.12, Math.sin(ang) * 1.12, 0);
        bow.rotation.z = ang - Math.PI / 2 + 0.3;
        hb.add(bow);
        head.add(hb);
    } else {
        // a pink flower on her left
        const fl = new THREE.Group();
        for (let k = 0; k < 5; k++) {
            const a = k / 5 * Math.PI * 2;
            fl.add(ball(0.13, mats.pink, Math.cos(a) * 0.14, Math.sin(a) * 0.14, 0, 1, 1, 0.5, 14));
        }
        fl.add(ball(0.085, mats.yellow, 0, 0, 0.04, 1, 1, 0.7, 12));
        const at = S(1.0, 0.78, 1.13);
        fl.position.copy(at);
        fl.lookAt(at.clone().multiplyScalar(2));
        head.add(fl);
    }
    // the crown, tilted on her hair
    const cr = crown(D.crown, L.cape);
    cr.scale.set(1 / (D.R * D.headScale[0]), 1 / (D.R * D.headScale[1]), 1 / (D.R * D.headScale[2]));
    const crownHolder = new THREE.Group();
    crownHolder.rotation.z = D.crown.tilt;
    crownHolder.add(cr);
    cr.position.y = D.crown.y / (D.R * D.headScale[1]) - 0.02;
    head.add(crownHolder);
    const twinkles = [];
    for (let k = 0; k < 3; k++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: mats.sparkleTex, color: '#fff3c8', blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }));
        const th = (k - 1) * 1.25;
        s.position.set(Math.sin(th) * D.crown.r * 1.13, D.crown.h * 1.3, Math.cos(th) * D.crown.r * 1.13);
        cr.add(s);
        twinkles.push(s);
    }

    // --- the cape ---
    const cp = cape(D.cape, L, mats);
    body.add(cp.group);

    // a soft shadow on the ground
    const blob = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.75), mats.blob);
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.012;
    root.add(blob);

    root.traverse(o => { if (o.isMesh && o !== blob && o !== face) o.receiveShadow = o.receiveShadow || false; });

    // --- poses ---
    const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qc = new THREE.Quaternion(), e = new THREE.Euler();
    const dir = new THREE.Vector3(), tmp = new THREE.Vector3();
    const stride = Y ? 0.62 : 0.5;
    let faceNow = 'open';
    const setFace = f => { if (f !== faceNow && faceTex[f]) { faceNow = f; faceMat.map = faceMat.emissiveMap = faceTex[f]; } };
    return {
        root, head, D, who,
        // where her hand is when it holds her sister's (in her own space)
        handFor(side) { return new THREE.Vector3(side * (D.shoulder[0] + 0.03), D.shoulder[1] - D.arm - 0.04, 0.03); },
        // st: { x, z, walk (0..1), dist, hold (0..1), holdTarget (local Vector3), holdSide, cheer (0..1), wave (0..1), jump, face, look }
        update(t, st) {
            root.position.set(st.x, 0, st.z);
            root.rotation.y = st.turn || 0;
            const ph = (st.dist / stride) * Math.PI * 2, w = st.walk;
            body.position.y = (st.jump || 0) + w * 0.012 * (1 - Math.cos(ph * 2));
            body.rotation.z = w * 0.035 * Math.sin(ph);
            body.rotation.y = w * 0.06 * Math.sin(ph);
            body.rotation.x = w * 0.05 + (st.lean || 0);
            const sq = st.squash || 0;
            body.scale.set(1 + sq * 0.5, 1 - sq, 1 + sq * 0.5);
            head.rotation.z = w * 0.03 * Math.sin(ph + 0.6) + (st.tilt || 0);
            head.rotation.x = -0.04 + (st.nod || 0);
            head.rotation.y = st.look || 0;
            // legs swing as she walks
            const lift = (st.cheer || 0) * 0;
            legs[0].rotation.x = -Math.sin(ph) * 0.48 * w + lift;
            legs[1].rotation.x = Math.sin(ph) * 0.48 * w - lift;
            // arms: swinging, holding hands, cheering, waving
            for (let k = 0; k < 2; k++) {
                const side = k ? 1 : -1, pivot = arms[k];
                const swing = (k ? -1 : 1) * Math.sin(ph) * 0.42 * w;
                qa.setFromEuler(e.set(swing, 0, side * (0.1 + 0.03 * Math.sin(t * 1.3 + k))));
                if (st.hold && st.holdSide === side) {
                    dir.copy(st.holdTarget).sub(tmp.set(side * D.shoulder[0], D.shoulder[1] + body.position.y, 0)).normalize();
                    qb.setFromUnitVectors(DOWN, dir);
                    qa.slerp(qb, st.hold);
                }
                const waving = st.wave && side === st.waveSide;
                const up = waving ? st.wave : (st.cheer || 0);
                if (up > 0) {
                    const wig = waving ? 0.42 * Math.sin(t * 11) : 0.12 * Math.sin(t * 9 + k * 1.5);
                    qc.setFromEuler(e.set(0.5, 0, side * ((waving ? 2.2 : 2.3) + wig)));
                    qa.slerp(qc, up);
                }
                pivot.quaternion.copy(qa);
            }
            setFace(st.face || 'open');
            twinkles.forEach((s, k) => {
                const at = [10.55, 11.25, 12.15, 13.05].map(x => x + k * 0.21 + (Y ? 0 : 0.11));
                const v = Math.max(...at.map(a => Math.max(0, 1 - Math.abs(t - a) / 0.22)));
                s.material.opacity = v;
                s.scale.setScalar(0.04 + v * 0.14);
                s.material.rotation = t * 1.5 + k;
            });
            cp.update(t, w + Math.max(0, st.jumpVel || 0) * 0.3, (st.jump || 0) * 3);
        }
    };
}

export function girlMaterials() {
    const hair = (hex, light) => new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.45, sheen: 0.6, sheenColor: light, sheenRoughness: 0.35,
        clearcoat: 0.35, clearcoatRoughness: 0.35, specularIntensity: 0.8 });
    return {
        skin: new THREE.MeshPhysicalMaterial({ color: SKIN, roughness: 0.55, sheen: 0.5, sheenColor: '#ffb8a0', sheenRoughness: 0.6, emissive: SKIN, emissiveIntensity: 0.1 }),
        skinShade: new THREE.MeshPhysicalMaterial({ color: '#F4C3A6', roughness: 0.6 }),
        hair_yoovy: hair(LOOKS.yoovy.hair, LOOKS.yoovy.hairLight),
        hair_googy: hair(LOOKS.googy.hair, LOOKS.googy.hairLight),
        sock: cloth('#ffffff', '#ffffff', 0.8),
        sneaker: cloth('#ffffff', '#ffffff', 0.5),
        pink: cloth('#FF6FA5', '#ffd0e4', 0.5),
        pinkDark: cloth('#E0407F', '#ffd0e4', 0.5),
        yellow: cloth('#FFD54F', '#fff3c0', 0.5),
        brooch: new THREE.MeshStandardMaterial({ color: '#FFD54F', metalness: 0.5, roughness: 0.45, emissive: '#7a5200', emissiveIntensity: 0.15 }),
        lining: new THREE.MeshStandardMaterial({ color: '#f3cf7a', metalness: 0.55, roughness: 0.38, side: THREE.BackSide }),
        ermine: new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 1, sheen: 1, sheenColor: '#ffffff', sheenRoughness: 0.9, emissive: '#ffffff', emissiveIntensity: 0.08 }),
        ermineTail: new THREE.MeshStandardMaterial({ color: '#1d1a26', roughness: 0.9 }),
        blob: new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false, opacity: 0.55 }),
        sparkleTex: T.sparkle()
    };
}

function blobTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(10,5,20,0.85)'); g.addColorStop(0.5, 'rgba(10,5,20,0.4)'); g.addColorStop(1, 'rgba(10,5,20,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
}
