// The land: soft hills of grass, the red carpet with gold edges from the gate to the castle,
// lamps along it that light up one by one, topiary trees, hedges and flowers, woods on
// either side, and mountains far away in the night haze.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { merged, placed, col, rng, smooth } from './util.js';
import { scaleUV, M } from './geo.js';
import { CASTLE } from './castle.js';
import * as T from './textures.js';

export const LAMPS = Array.from({ length: 10 }, (_, i) => -5 - 6 * i);   // z of each pair
export const LAMP_X = 2.3;

export function groundHeight(x, z) {
    const out = Math.max(0, Math.abs(x) - 24) + Math.max(0, -96 - z) * 0.9 + Math.max(0, z - 34) * 0.6;
    const hills = 7 + 5 * Math.sin(x * 0.031 + z * 0.017) * Math.cos(z * 0.043 - x * 0.012) + 3 * Math.sin(x * 0.09 + 1.3) * Math.sin(z * 0.07);
    return (1 - Math.exp(-out / 26)) * hills;
}

export function buildGrounds(mats) {
    const group = new THREE.Group();
    group.name = 'grounds';
    const R = rng(77);

    // the grass
    const tg = new THREE.PlaneGeometry(520, 520, 110, 110);
    tg.rotateX(-Math.PI / 2);
    const p = tg.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, groundHeight(p.getX(i), p.getZ(i)));
    tg.computeVertexNormals();
    scaleUV(tg, 520 / 7);
    const terrain = new THREE.Mesh(tg, mats.grass);
    terrain.receiveShadow = true;
    group.add(terrain);

    // the red carpet, gold along both edges
    const len = -1.2 - CASTLE.front, cz = (-1.2 + CASTLE.front) / 2;
    const cg = new THREE.BoxGeometry(3.0, 0.04, len);
    scaleUV(cg, 1, len / 3);
    const carpet = new THREE.Mesh(cg, mats.carpet);
    carpet.position.set(0, 0.03, cz); carpet.receiveShadow = true;
    group.add(carpet);
    const edges = [];
    for (const s of [-1, 1]) edges.push(placed(new THREE.BoxGeometry(0.09, 0.05, len), { x: s * 1.52, y: 0.033, z: cz }));
    group.add(merged(edges, new THREE.MeshStandardMaterial({ color: '#e3ad45', metalness: 0.35, roughness: 0.55 }), { receive: true }));

    // lamps along the carpet: an iron post, a gold cup and a glowing orb
    const n = LAMPS.length * 2, m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), V = new THREE.Vector3(), Sx = new THREE.Vector3(1, 1, 1);
    const posts = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.05, 0.07, 2.3, 10), mats.iron, n);
    const bases = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.15, 0.2, 0.26, 12), mats.iron, n);
    const cups = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.2, 0.08, 0.16, 16, 1, true), M.goldDouble, n);
    const caps = new THREE.InstancedMesh(new THREE.ConeGeometry(0.12, 0.22, 12), M.gold, n);
    const orbMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.75, 1.02, 0.45) });
    const orbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.17, 18, 12), orbMat, n);
    posts.castShadow = bases.castShadow = cups.castShadow = true;
    const lampPos = [];
    LAMPS.forEach((z, i) => [-1, 1].forEach((s, k) => {
        const j = i * 2 + k, x = s * LAMP_X;
        lampPos.push(new THREE.Vector3(x, 2.5, z));
        posts.setMatrixAt(j, m4.compose(V.set(x, 1.15, z), q, Sx));
        bases.setMatrixAt(j, m4.compose(V.set(x, 0.13, z), q, Sx));
        cups.setMatrixAt(j, m4.compose(V.set(x, 2.36, z), q, Sx));
        caps.setMatrixAt(j, m4.compose(V.set(x, 2.78, z), q, Sx));
        orbs.setMatrixAt(j, m4.compose(V.set(x, 2.52, z), q, Sx));
        orbs.setColorAt(j, new THREE.Color(1, 1, 1));
    }));
    orbs.name = 'orbs';
    group.add(posts, bases, cups, caps, orbs);
    // their halos (one draw for all) and the pools of light under them
    const hg = new THREE.BufferGeometry();
    hg.setAttribute('position', new THREE.Float32BufferAttribute(lampPos.flatMap(v => [v.x, 2.52, v.z]), 3));
    hg.setAttribute('bright', new THREE.Float32BufferAttribute(new Float32Array(n), 1));
    const haloU = { uMap: { value: T.glow(2.4) }, uScale: { value: 170 }, uColor: { value: col('#ffbe6a') } };
    const halos = new THREE.Points(hg, new THREE.ShaderMaterial({
        uniforms: haloU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute float bright; uniform float uScale; varying float vB;
            void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
                vB = bright * smoothstep(1.0, 5.0, -mv.z); gl_PointSize = min(uScale * 1.7 / -mv.z, 140.0); }`,
        fragmentShader: `uniform sampler2D uMap; uniform vec3 uColor; varying float vB;
            void main() { float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor * a * vB * 0.45, 1.0); }`
    }));
    halos.frustumCulled = false;
    halos.name = 'halos';
    group.add(halos);
    const pools = [];
    for (const v of lampPos) pools.push(placed(new THREE.PlaneGeometry(4.2, 4.2), { x: v.x, y: 0.06, z: v.z, rx: -Math.PI / 2 }));
    const poolGeo = merged(pools, mats.pool).geometry;
    const poolCol = new Float32Array(poolGeo.attributes.position.count * 3);
    poolGeo.setAttribute('color', new THREE.BufferAttribute(poolCol, 3));
    const poolMesh = new THREE.Mesh(poolGeo, mats.pool);
    poolMesh.renderOrder = 1;
    poolMesh.name = 'pools';
    group.add(poolMesh);

    // topiary trees in white and gold pots between the lamps
    const topi = [];
    for (let i = 0; i < LAMPS.length - 1; i++) for (const s of [-1, 1]) topi.push([s * 3.2, LAMPS[i] - 3]);
    const pots = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.34, 0.26, 0.5, 16), mats.pot, topi.length);
    const rims = new THREE.InstancedMesh(new THREE.TorusGeometry(0.34, 0.04, 8, 24), M.gold, topi.length);
    const stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.05, 0.06, 0.9, 8), mats.trunk, topi.length);
    const balls = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 3), mats.leaf, topi.length * 2);
    pots.castShadow = stems.castShadow = balls.castShadow = true;
    topi.forEach(([x, z], j) => {
        pots.setMatrixAt(j, m4.compose(V.set(x, 0.25, z), q, Sx));
        rims.setMatrixAt(j, m4.compose(V.set(x, 0.5, z), q.setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)), Sx)); q.identity();
        stems.setMatrixAt(j, m4.compose(V.set(x, 0.9, z), q, Sx));
        balls.setMatrixAt(j * 2, m4.compose(V.set(x, 1.55, z), q, new THREE.Vector3(1, 1, 1)));
        balls.setMatrixAt(j * 2 + 1, m4.compose(V.set(x, 2.25, z), q, new THREE.Vector3(0.6, 0.6, 0.6)));
    });
    group.add(pots, rims, stems, balls);

    // hedges, with gaps, and flowers in front of them
    const hedges = [];
    for (let z = -3; z > CASTLE.front + 3; z -= 6.5) for (const s of [-1, 1]) hedges.push([s * 4.7, z - 2.6]);
    const hedge = new THREE.InstancedMesh(new RoundedBoxGeometry(0.95, 0.95, 5.2, 3, 0.3), mats.hedge, hedges.length);
    hedge.castShadow = hedge.receiveShadow = true;
    hedges.forEach(([x, z], j) => hedge.setMatrixAt(j, m4.compose(V.set(x, 0.47, z), q, Sx)));
    group.add(hedge);
    const fl = [], palette = ['#ff6fa5', '#ffffff', '#ffd54f', '#c9a4ff', '#ff9ec7', '#7fd4ff'].map(h => new THREE.Color(h));
    for (const [hx, hz] of hedges) for (let k = 0; k < 16; k++) fl.push([hx - Math.sign(hx) * (0.68 + R() * 0.3), hz + (R() - 0.5) * 5, palette[Math.floor(R() * palette.length)]]);
    const flowers = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.075, 0), mats.flower, fl.length);
    fl.forEach(([x, z, c], j) => { flowers.setMatrixAt(j, m4.compose(V.set(x, 0.12 + R() * 0.1, z), q, new THREE.Vector3(1, 0.7, 1))); flowers.setColorAt(j, c); });
    group.add(flowers);

    // woods on both sides (round trees and pines), and some outside the walls
    const trees = [];
    const spots = (n, x0, x1, z0, z1) => { for (let i = 0; i < n; i++) trees.push([(R() < 0.5 ? -1 : 1) * (x0 + R() * (x1 - x0)), z0 + R() * (z1 - z0), R()]); };
    spots(46, 9, 60, -58, -6); spots(26, 26, 70, -110, -60); spots(22, 12, 55, 6, 40);
    const round = trees.filter(t => t[2] < 0.55), pine = trees.filter(t => t[2] >= 0.55);
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 2.4, 8);
    const crownGeo = merged([placed(new THREE.IcosahedronGeometry(1.6, 2), { y: 3.4 }), placed(new THREE.IcosahedronGeometry(1.2, 2), { x: 0.9, y: 2.9, z: 0.3 }),
        placed(new THREE.IcosahedronGeometry(1.15, 2), { x: -0.8, y: 3.0, z: -0.2 })], mats.tree).geometry;
    const pineGeo = merged([placed(new THREE.ConeGeometry(1.7, 2.6, 12), { y: 2.2 }), placed(new THREE.ConeGeometry(1.35, 2.3, 12), { y: 3.6 }),
        placed(new THREE.ConeGeometry(0.95, 2.0, 12), { y: 4.9 })], mats.pine).geometry;
    const trunks = new THREE.InstancedMesh(trunkGeo, mats.trunk, trees.length);
    const crowns = new THREE.InstancedMesh(crownGeo, mats.tree, round.length);
    const pines = new THREE.InstancedMesh(pineGeo, mats.pine, pine.length);
    trunks.castShadow = crowns.castShadow = pines.castShadow = true;
    let ri = 0, pi = 0;
    trees.forEach(([x, z, r], j) => {
        const s = 0.8 + ((r * 7.31) % 1) * 0.7, y = groundHeight(x, z);
        trunks.setMatrixAt(j, m4.compose(V.set(x, y + 1.1 * s, z), q, new THREE.Vector3(s, s, s)));
        const rot = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, r * 20, 0));
        if (r < 0.55) crowns.setMatrixAt(ri++, m4.compose(V.set(x, y, z), rot, new THREE.Vector3(s, s, s)));
        else pines.setMatrixAt(pi++, m4.compose(V.set(x, y, z), rot, new THREE.Vector3(s, s * 1.15, s)));
    });
    group.add(trunks, crowns, pines);

    // mountains far away
    const ridge = (radius, h0, h1, seed, color) => {
        const N = 220, pos = [], idx = [], Rr = rng(seed);
        const ph = [Rr() * 6, Rr() * 6, Rr() * 6];
        for (let i = 0; i <= N; i++) {
            const a = i / N * Math.PI * 2;
            const h = h0 + (h1 - h0) * (0.5 + 0.25 * Math.sin(a * 3 + ph[0]) + 0.15 * Math.sin(a * 7 + ph[1]) + 0.1 * Math.sin(a * 17 + ph[2]));
            const x = Math.sin(a) * radius, z = Math.cos(a) * radius - 60;
            pos.push(x, -5, z, x, h, z);
        }
        for (let i = 0; i < N; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
        return new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide }));
    };
    group.add(ridge(230, 18, 52, 3, '#2a2350'), ridge(330, 40, 90, 8, '#231c45'));

    return {
        group,
        update(t) {
            // the lamps light up one after another as the gates open, from the gate to the castle
            const b = hg.attributes.bright;
            const c = new THREE.Color();
            for (let j = 0; j < n; j++) {
                const i = j >> 1, on = smooth(2.85 + i * 0.16, 3.25 + i * 0.16, t);
                const k = 0.12 + 0.88 * on * (0.94 + 0.06 * Math.sin(t * 9 + j * 1.7));
                b.setX(j, k);
                orbs.setColorAt(j, c.setScalar(0.25 + 0.75 * k));
                for (let v = 0; v < 6; v++) poolCol.set([k, k, k], (j * 6 + v) * 3);
            }
            b.needsUpdate = true;
            orbs.instanceColor.needsUpdate = true;
            poolGeo.attributes.color.needsUpdate = true;
        }
    };
}
