// The ground of the kingdom: meadows and hills, snowy mountains in the north, the castle's
// hill, a forest floor, a desert of dunes, rocky ground by the cave, beaches, and the water
// around it all: the sea, the bay, the lagoon with its island, and the river. One mesh, its
// colours in the vertices; the road is a ribbon laid over it, and the water one sheet.
import * as THREE from 'three';
import { clamp, lerp, smooth } from '../util.js';
import { fbm, noise2, canvasTexture, rng } from './kit.js';
import { REGION, ROAD, RIVER, BRIDGE, BRIDGE_S, LANDS } from './layout.js';

const STEP = 0.5;
const ell = (x, z, cx, cz, rx, rz) => Math.hypot((x - cx) / rx, (z - cz) / rz);

// what kind of ground is at (x, z): each 0..1
export function biome(x, z) {
    return {
        forest: 1 - smooth(0.75, 1.2, ell(x, z, -10.5, -27, 9.5, 8.5)),
        desert: 1 - smooth(0.78, 1.12, ell(x, z, 14.5, 3.2, 13.2, 8.4)),
        rocky: 1 - smooth(0.7, 1.2, ell(x, z, -7.8, 13.2, 6.4, 5.0)),
        mountain: Math.max(smooth(9.5, 19, x) * smooth(-24, -33, z), smooth(-60, -72, z)),
        island: 1 - smooth(0.35, 1.0, ell(x, z, 6.3, 23.0, 3.6, 3.2))
    };
}

// The lie of the land before the road is laid.
function baseHeight(x, z) {
    const n1 = fbm(x * 0.06, z * 0.06, 11), n2 = fbm(x * 0.21, z * 0.21, 23);
    const b = biome(x, z);
    let y = 0.66 + 0.26 * n1 + 0.06 * n2;
    // mountains: sharp crests in the north-east and the far north, softer hills in the north-west
    const ridge = 1 - Math.abs(fbm(x * 0.075 + 3.1, z * 0.075 + 9.7, 37));
    const nw = smooth(-11, -22, x) * smooth(-34, -46, z);
    y += b.mountain * (1.4 + 3.2 * ridge * ridge);
    y += nw * (1 - b.mountain) * (0.8 + 3.0 * ridge);
    // the castle's hill: a flat top with soft shoulders
    y = lerp(y, 2.9, 1 - smooth(0.5, 1.0, ell(x, z, 0, -49.5, 10.5, 9.5)));
    // dunes, and bumps on the rocky ground
    y += b.desert * 0.6 * (0.5 + 0.5 * noise2(x * 0.24 + z * 0.1, z * 0.32, 5));
    y += b.rocky * 0.22 * noise2(x * 0.7, z * 0.7, 9);
    // the sea in the west, the bay, the sea in the east (south of the desert), the lagoon, the south coast
    const coastW = -17.5 + 2.6 * Math.sin(z * 0.085 + 0.6) + 1.2 * Math.sin(z * 0.21 + 2.0);
    const coastE = 16.5 + 2.2 * Math.sin(z * 0.09 + 1.3) + 1.2 * Math.sin(z * 0.19);
    let wet = smooth(coastW + 3, coastW - 3, x);
    wet = Math.max(wet, 1 - smooth(0.7, 1.15, ell(x, z, -13.5, -6.4, 9.2, 5.6)));
    wet = Math.max(wet, smooth(coastE - 3, coastE + 3, x) * smooth(9, 17, z));
    wet = Math.max(wet, 1 - smooth(0.68, 1.12, ell(x, z, 10.2, 23.2, 8.6, 6.4)));
    wet = Math.max(wet, smooth(58.5, 64, z + 1.5 * Math.sin(x * 0.11)));
    y = lerp(y, -1.8, wet);
    // the island in the lagoon
    y = Math.max(y, -1.2 + 2.0 * b.island);
    // the river's bed
    const r = RIVER.near(x, z, 3);
    if (r) y = lerp(y, Math.min(y, -0.9), 1 - smooth(0.75, 2.1, r.d));
    return y;
}
// the lands that stand on level ground: the land is evened out under them
const PADS = LANDS.filter(l => ['math', 'hebrew', 'reading', 'geography', 'biology', 'chess'].includes(l.key));
for (const l of PADS) l.pad = Math.max(0.5, baseHeight(l.x, l.z));
function padded(x, z, y) {
    for (const l of PADS) {
        const d = Math.hypot(x - l.x, z - l.z);
        if (d < l.r * 1.3) return lerp(l.pad, y, smooth(l.r * 0.8, l.r * 1.3, d));
    }
    return y;
}

// The neutral grain that gives every kind of ground a little texture.
function grain() {
    const R = rng(71);
    const t = canvasTexture(512, 512, (x, S) => {
        x.fillStyle = '#e9e9e9'; x.fillRect(0, 0, S, S);
        for (let i = 0; i < 220; i++) {
            const px = R() * S, py = R() * S, r = 18 + R() * 54, dark = R() < 0.5;
            const g = x.createRadialGradient(px, py, 0, px, py, r);
            g.addColorStop(0, dark ? 'rgba(170,170,170,0.16)' : 'rgba(255,255,255,0.30)'); g.addColorStop(1, dark ? 'rgba(150,150,150,0)' : 'rgba(255,255,255,0)');
            x.fillStyle = g;
            for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { x.save(); x.translate(ox, oy); x.fillRect(px - r, py - r, r * 2, r * 2); x.restore(); }
        }
        // short strokes, like blades and grains
        x.lineCap = 'round';
        for (let i = 0; i < 7000; i++) {
            const px = R() * S, py = R() * S, l = 2 + R() * 5, a = -Math.PI / 2 + (R() - 0.5) * 1.1;
            x.strokeStyle = R() < 0.5 ? `rgba(255,255,255,${0.2 + R() * 0.3})` : `rgba(110,110,110,${0.18 + R() * 0.25})`;
            x.lineWidth = 1 + R() * 1.2;
            x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke();
        }
    });
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    return t;
}

// The road's surface: warm paving stones with soft edges, and pale stepping stones down the middle.
function paving() {
    const R = rng(29);
    const t = canvasTexture(256, 512, (x, W, H) => {
        x.clearRect(0, 0, W, H);
        const edge = x.createLinearGradient(0, 0, W, 0);
        edge.addColorStop(0, 'rgba(176,140,90,0)'); edge.addColorStop(0.07, 'rgba(176,140,90,0.85)'); edge.addColorStop(0.13, 'rgba(232,204,150,1)');
        edge.addColorStop(0.87, 'rgba(232,204,150,1)'); edge.addColorStop(0.93, 'rgba(176,140,90,0.85)'); edge.addColorStop(1, 'rgba(176,140,90,0)');
        x.fillStyle = edge; x.fillRect(0, 0, W, H);
        x.globalCompositeOperation = 'source-atop';
        for (let i = 0; i < 150; i++) {
            const px = R() * W, py = R() * H, w = 16 + R() * 26, h = 12 + R() * 18, v = Math.round(215 + R() * 34);
            x.fillStyle = `rgba(${v},${Math.round(v * 0.87)},${Math.round(v * 0.63)},0.75)`;
            for (const oy of [-H, 0, H]) { x.beginPath(); x.ellipse(px, py + oy, w / 2, h / 2, R() * 0.6, 0, 7); x.fill(); }
        }
        for (let k = 0; k < 4; k++) {
            x.fillStyle = 'rgba(255,250,236,0.96)';
            x.beginPath(); x.ellipse(W / 2 + (R() - 0.5) * 10, (k + 0.5) * H / 4, 15, 23, (R() - 0.5) * 0.5, 0, 7); x.fill();
            x.strokeStyle = 'rgba(190,160,110,0.55)'; x.lineWidth = 3; x.stroke();
        }
        x.globalCompositeOperation = 'source-over';
    });
    t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    return t;
}

export function buildTerrain() {
    const { x0, x1, z0, z1 } = REGION;
    const nx = Math.round((x1 - x0) / STEP), nz = Math.round((z1 - z0) / STEP);
    const H = new Float32Array((nx + 1) * (nz + 1));

    // the road's own height along its length: the land under it, evened out; an arch over the river
    const RS = 0.25, rn = Math.ceil(ROAD.length / RS) + 1, raw = new Float32Array(rn), roadH = new Float32Array(rn);
    for (let i = 0; i < rn; i++) { const p = ROAD.at(i * RS); raw[i] = padded(p.x, p.z, baseHeight(p.x, p.z)); }
    for (let i = 0; i < rn; i++) {
        let sum = 0, n = 0;
        for (let k = -8; k <= 8; k++) { const j = i + k; if (j >= 0 && j < rn && Math.abs(j * RS - BRIDGE_S) > BRIDGE.half) { sum += Math.max(0.46, raw[j]); n++; } }
        roadH[i] = n ? sum / n : 0.5;
    }
    const bank = roadH[Math.round((BRIDGE_S - BRIDGE.half - 0.5) / RS)];
    const roadY = s => {
        const ds = Math.abs(s - BRIDGE_S);
        if (ds < BRIDGE.half + 0.5) {   // over the bridge: an arch from bank to bank
            const k = clamp(ds / BRIDGE.half);
            return bank + 0.06 + BRIDGE.rise * (1 - k * k) * smooth(BRIDGE.half + 0.5, BRIDGE.half - 0.2, ds);
        }
        const f = clamp(s / RS, 0, rn - 1), i = Math.floor(f), j = Math.min(rn - 1, i + 1);
        return roadH[i] + (roadH[j] - roadH[i]) * (f - i);
    };

    for (let j = 0; j <= nz; j++) {
        const z = z0 + j * STEP;
        for (let i = 0; i <= nx; i++) {
            const x = x0 + i * STEP;
            let y = padded(x, z, baseHeight(x, z));
            const r = Math.abs(x) < 9 ? ROAD.near(x, z, 2.6) : null;
            if (r && Math.abs(r.s - BRIDGE_S) > BRIDGE.half - 0.2) y = lerp(roadY(r.s), y, smooth(0.95, 2.6, r.d));
            H[j * (nx + 1) + i] = y;
        }
    }
    const heightAt = (x, z) => {
        const fx = clamp((x - x0) / STEP, 0, nx - 1e-4), fz = clamp((z - z0) / STEP, 0, nz - 1e-4);
        const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, k = j * (nx + 1) + i;
        return H[k] * (1 - u) * (1 - v) + H[k + 1] * u * (1 - v) + H[k + nx + 1] * (1 - u) * v + H[k + nx + 2] * u * v;
    };

    // ---- the ground mesh ----
    const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx, nz);
    geo.rotateX(-Math.PI / 2);
    geo.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    const pos = geo.attributes.position, colors = new Float32Array(pos.count * 3), grainy = new Float32Array(pos.count);
    const c = new THREE.Color(), c2 = new THREE.Color();
    const K = {
        grassA: new THREE.Color('#6fc043'), grassB: new THREE.Color('#93d658'), grassC: new THREE.Color('#b4dc5a'),
        forest: new THREE.Color('#3f9140'), sandA: new THREE.Color('#f6d792'), sandB: new THREE.Color('#eebd6c'),
        beach: new THREE.Color('#f8e6b4'), rocky: new THREE.Color('#bda88f'), rockA: new THREE.Color('#7c86b0'), rockB: new THREE.Color('#98a1c6'),
        snow: new THREE.Color('#ffffff'), bed: new THREE.Color('#d9c48e')
    };
    for (let j = 0; j <= nz; j++) {
        for (let i = 0; i <= nx; i++) {
            const k = j * (nx + 1) + i, x = x0 + i * STEP, z = z0 + j * STEP, y = H[k];
            pos.setY(k, y);
            const hx = H[j * (nx + 1) + Math.min(nx, i + 1)] - H[j * (nx + 1) + Math.max(0, i - 1)];
            const hz = H[Math.min(nz, j + 1) * (nx + 1) + i] - H[Math.max(0, j - 1) * (nx + 1) + i];
            const slope = Math.hypot(hx, hz) / (2 * STEP);
            const b = biome(x, z), g = fbm(x * 0.33, z * 0.33, 51) * 0.5 + 0.5, big = fbm(x * 0.09, z * 0.09, 61) * 0.5 + 0.5;
            c.copy(K.grassA).lerp(K.grassB, 0.3 + g * 0.4).lerp(K.grassC, smooth(0.5, 0.95, big) * 0.45);
            c.lerp(K.forest, b.forest * 0.85);
            c.lerp(c2.copy(K.sandA).lerp(K.sandB, noise2(x * 0.24 + z * 0.1, z * 0.32, 5) * 0.5 + 0.5), b.desert);
            c.lerp(K.rocky, b.rocky * 0.9);
            c.lerp(K.beach, Math.max(1 - smooth(0.2, 0.5, y), b.island * (1 - smooth(0.2, 1.0, y) * 0.0)));
            const rock = Math.max(b.mountain * smooth(1.7, 3.0, y), smooth(0.7, 1.15, slope) * smooth(1.2, 2.2, y));
            c.lerp(c2.copy(K.rockA).lerp(K.rockB, big), rock);
            // how much of the grain shows: blades on the grass, a little on sand, none on rock
            grainy[k] = (1 - rock) * (1 - 0.6 * Math.max(b.desert, b.rocky, 1 - smooth(0.2, 0.5, y)));
            c.lerp(K.bed, smooth(0.0, -0.6, y) * 0.6);
            colors[k * 3] = c.r; colors[k * 3 + 1] = c.g; colors[k * 3 + 2] = c.b;
        }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aGrain', new THREE.BufferAttribute(grainy, 1));
    geo.computeVertexNormals();
    const uv = geo.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, pos.getX(k) / 7, pos.getZ(k) / 7);
    const groundMat = new THREE.MeshStandardMaterial({ vertexColors: true, map: grain(), roughness: 0.94, metalness: 0 });
    groundMat.onBeforeCompile = sh => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aGrain;\nvarying float vGrain;')
            .replace('#include <begin_vertex>', '#include <begin_vertex>\nvGrain = aGrain;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vGrain;')
            .replace('#include <map_fragment>', '#ifdef USE_MAP\n\tdiffuseColor *= mix(vec4(1.0), texture2D(map, vMapUv), vGrain);\n#endif');
    };
    groundMat.customProgramCacheKey = () => 'ground-grain';
    const ground = new THREE.Mesh(geo, groundMat);
    ground.receiveShadow = true;
    ground.castShadow = false;   // the land takes the shadows of what stands on it; steep slopes casting on themselves only speckle
    ground.name = 'ground';

    // ---- the road ----
    const W2 = 0.92, rp = [], ruv = [], ridx = [], rc = [];
    const n = Math.ceil(ROAD.length / 0.3);
    for (let i = 0; i <= n; i++) {
        const s = Math.min(ROAD.length, i * 0.3), p = ROAD.at(s), y = roadY(s) + 0.05;
        rp.push(p.x + p.tz * W2, y, p.z - p.tx * W2, p.x - p.tz * W2, y, p.z + p.tx * W2);
        ruv.push(0, s / 3.2, 1, s / 3.2);
        const fade = smooth(0, 1.2, s) * smooth(ROAD.length, ROAD.length - 1.6, s);
        rc.push(1, 1, 1, fade, 1, 1, 1, fade);
        if (i < n) { const a = i * 2; ridx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(rp, 3));
    rg.setAttribute('uv', new THREE.Float32BufferAttribute(ruv, 2));
    rg.setAttribute('color', new THREE.Float32BufferAttribute(rc, 4));
    rg.setIndex(ridx);
    rg.computeVertexNormals();
    const road = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ map: paving(), vertexColors: true, transparent: true, depthWrite: false, roughness: 0.9,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4, side: THREE.DoubleSide }));
    road.receiveShadow = true;
    road.renderOrder = 1;
    road.name = 'road';

    // ---- the heights as a texture, for the water (shallows and foam along the shores) ----
    const hm = new Uint8Array((nx + 1) * (nz + 1));
    for (let k = 0; k < hm.length; k++) hm[k] = Math.round(clamp((H[k] + 2) / 6) * 255);
    const heightMap = new THREE.DataTexture(hm, nx + 1, nz + 1, THREE.RedFormat, THREE.UnsignedByteType);
    heightMap.magFilter = heightMap.minFilter = THREE.LinearFilter;
    heightMap.needsUpdate = true;

    return { ground, road, heightAt, roadY, heightMap };
}

// The water: one sheet at sea level. Its colour deepens away from the shores, pale foam laps
// at them, and ripples of light drift over it.
export function buildWater(heightMap) {
    const { x0, x1, z0, z1 } = REGION;
    const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
        uHeight: { value: null }, uTime: { value: 0 },
        uOrigin: { value: new THREE.Vector2(x0, z0) }, uSize: { value: new THREE.Vector2(x1 - x0, z1 - z0) },
        uShallow: { value: new THREE.Color('#5fe0d8') }, uDeep: { value: new THREE.Color('#1f86d6') }, uFoam: { value: new THREE.Color('#ffffff') },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uGlint: { value: 1 }
    }]);
    uniforms.uHeight.value = heightMap;
    const mat = new THREE.ShaderMaterial({
        uniforms, fog: true,
        vertexShader: `varying vec3 vWorld;
            #include <fog_pars_vertex>
            void main() {
                vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
                vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
                #include <fog_vertex>
            }`,
        fragmentShader: `uniform sampler2D uHeight; uniform float uTime, uGlint; uniform vec2 uOrigin, uSize; uniform vec3 uShallow, uDeep, uFoam, uSunDir;
            varying vec3 vWorld;
            #include <fog_pars_fragment>
            float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
            float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
            void main() {
                vec2 uv = (vWorld.xz - uOrigin) / uSize;
                float h = texture2D(uHeight, clamp(uv, 0.0, 1.0)).r * 6.0 - 2.0;
                float off = max(max(-uv.x, uv.x - 1.0), max(-uv.y, uv.y - 1.0));      // beyond the ground: open sea
                float depth = max(0.0, -h) + smoothstep(0.0, 0.05, off) * 2.0;
                vec2 p = vWorld.xz;
                float n1 = vnoise(p * 0.55 + vec2(uTime * 0.22, uTime * 0.08)), n2 = vnoise(p * 1.25 - vec2(uTime * 0.15, uTime * 0.26));
                vec3 c = mix(uShallow, uDeep, smoothstep(0.05, 1.35, depth + (n1 - 0.5) * 0.25));
                // ripples of light
                float rip = smoothstep(0.62, 0.9, n1 * 0.6 + n2 * 0.5);
                c += vec3(0.10, 0.16, 0.18) * rip * uGlint;
                // sparkles toward the sun
                vec3 nrm = normalize(vec3((n1 - 0.5) * 0.5, 1.0, (n2 - 0.5) * 0.5));
                vec3 v = normalize(cameraPosition - vWorld);
                float spec = pow(max(dot(reflect(-uSunDir, nrm), v), 0.0), 90.0);
                c += vec3(1.0, 0.95, 0.8) * spec * 1.6 * uGlint;
                // foam lapping at the shore
                float lap = 0.5 + 0.5 * sin(uTime * 1.1 + p.x * 0.7 + p.y * 0.9);
                float foam = 1.0 - smoothstep(0.02, 0.16 + 0.1 * lap, depth);
                foam = max(foam, (1.0 - smoothstep(0.0, 0.07, abs(depth - (0.3 + 0.08 * lap)))) * 0.55 * step(0.001, depth));
                c = mix(c, uFoam, clamp(foam, 0.0, 1.0) * 0.9);
                gl_FragColor = vec4(c, 1.0);
                #include <fog_fragment>
            }`
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(900, 900, 1, 1), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(0, 0, -10);
    mesh.name = 'water';
    return { mesh, uniforms };
}
