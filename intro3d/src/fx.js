// Fireworks (rockets, then bursts: peonies, rings, hearts, golden willows, glitter), gold dust
// and fireflies, and a shower of petals and confetti at the end. All on the GPU, computed from
// the time alone.
import * as THREE from 'three';
import { rng, col, smooth } from './util.js';
import * as T from './textures.js';

// [time, x, y, z, kind, colour, second colour]
export const BURSTS = [
    [4.75, -11, 31, -100, 'peony', '#ffd866', '#fff6d0'],
    [5.15, 12, 35, -98, 'peony', '#ff6fae', '#ffd0e6'],
    [5.55, 0, 41, -106, 'ring', '#7fe3ff', '#ffffff'],
    [5.95, -20, 34, -96, 'willow', '#ffc046', '#fff0b0'],
    [6.35, 17, 30, -94, 'heart', '#ff5ca8', '#ffc2de'],
    [6.75, -4, 38, -102, 'peony', '#c9a4ff', '#ffffff'],
    [7.1, 22, 40, -104, 'glitter', '#fff4dc', '#ffd866'],
    [7.5, -16, 28, -96, 'peony', '#ffd866', '#ff9a4a'],
    [7.95, 8, 34, -100, 'ring', '#ff6fae', '#ffffff'],
    [8.45, -6, 40, -102, 'peony', '#7fe3ff', '#c9f4ff'],
    [8.95, 18, 32, -96, 'willow', '#ffc046', '#fff0b0'],
    [9.45, -12, 34, -98, 'heart', '#ff5ca8', '#ffc2de'],
    [9.85, 4, 28, -94, 'peony', '#c9a4ff', '#ffe2ff'],
    [10.35, 0, 36, -96, 'heart', '#ff4f9e', '#ffd0e6'],
    [10.6, -18, 32, -100, 'peony', '#ffd866', '#fff6d0'],
    [10.75, 18, 32, -100, 'peony', '#7fe3ff', '#ffffff'],
    [11.0, -8, 42, -104, 'ring', '#c9a4ff', '#ffffff'],
    [11.2, 8, 42, -104, 'ring', '#ffd866', '#ffffff'],
    [11.45, -22, 38, -98, 'willow', '#ffc046', '#fff0b0'],
    [11.6, 22, 38, -98, 'willow', '#ffc046', '#fff0b0'],
    [11.9, 0, 45, -106, 'glitter', '#fff4dc', '#ffd866'],
    [12.2, -12, 29, -94, 'peony', '#ff6fae', '#ffd0e6'],
    [12.35, 12, 29, -94, 'peony', '#ffd866', '#ff9a4a']
];
const RISE = 0.95;   // seconds a rocket climbs before it bursts

export function buildFireworks() {
    const R = rng(1234), TR = 5;   // each spark drawn TR times, a little behind itself: its trail
    const origin = [], vel = [], info = [], color = [];
    const spark = (o, v, start, life, grav, c, trailStep) => {
        for (let k = 0; k < TR; k++) {
            origin.push(o[0], o[1], o[2]); vel.push(v.x, v.y, v.z);
            info.push(start, life, k * trailStep, grav); color.push(c.r, c.g, c.b);
        }
    };
    for (const [t, x, y, z, kind, ca, cb] of BURSTS) {
        const A = col(ca), B = col(cb), o = [x, y, z];
        const n = { peony: 170, ring: 110, heart: 150, willow: 130, glitter: 150 }[kind];
        for (let i = 0; i < n; i++) {
            let v;
            if (kind === 'ring') {
                const a = i / n * Math.PI * 2, tilt = 0.35;
                v = new THREE.Vector3(Math.cos(a), Math.sin(a) * Math.cos(tilt), Math.sin(a) * Math.sin(tilt)).multiplyScalar(25 + R() * 1.5);
            } else if (kind === 'heart') {
                const a = i / n * Math.PI * 2, s = Math.sin(a);
                v = new THREE.Vector3(16 * s * s * s, 13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a), (R() - 0.5) * 2).multiplyScalar(1.55 + R() * 0.06);
            } else {
                const u = R() * 2 - 1, a = R() * Math.PI * 2, r = Math.sqrt(1 - u * u);
                const speed = kind === 'willow' ? 17 + R() * 3 : 23 + R() * 4;
                v = new THREE.Vector3(r * Math.cos(a), u, r * Math.sin(a)).multiplyScalar(speed);
            }
            const life = kind === 'willow' ? 3.1 + R() * 0.5 : kind === 'glitter' ? 2.2 + R() * 0.5 : 1.8 + R() * 0.4;
            const grav = kind === 'willow' ? 1.6 : kind === 'heart' ? 0.25 : 0.8;
            spark(o, v, t, life, grav, R() < 0.75 ? A : B, kind === 'willow' ? 0.07 : 0.04);
        }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(origin, 3));
    g.setAttribute('aVel', new THREE.Float32BufferAttribute(vel, 3));
    g.setAttribute('aInfo', new THREE.Float32BufferAttribute(info, 4));
    g.setAttribute('aColor', new THREE.Float32BufferAttribute(color, 3));
    const uniforms = { uTime: { value: 0 }, uScale: { value: 300 } };
    const sparks = new THREE.Points(g, new THREE.ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec3 aVel, aColor; attribute vec4 aInfo; uniform float uTime, uScale;
            varying vec3 vColor; varying float vA;
            void main() {
                float t = uTime - aInfo.x - aInfo.z, life = aInfo.y;
                if (t < 0.0 || t > life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float drag = 1.7;
                vec3 p = position + aVel * (1.0 - exp(-drag * t)) / drag;
                p.y -= 0.5 * 3.2 * aInfo.w * t * t;
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_Position = projectionMatrix * mv;
                float k = t / life, trail = aInfo.z / 0.04;
                float fade = (1.0 - smoothstep(0.5, 1.0, k)) / (1.0 + trail * 0.9);
                float hot = 1.0 - smoothstep(0.0, 0.07, k);
                float flick = 0.75 + 0.25 * sin(uTime * 40.0 + aVel.x * 3.0);
                vColor = mix(aColor, vec3(1.0, 0.95, 0.85), hot * 0.5) * fade * flick * smoothstep(0.0, 0.06, t) * 3.0;
                gl_PointSize = uScale * (1.0 - 0.45 * k) * (1.0 - trail * 0.12) / -mv.z;
                vA = fade;
            }`,
        fragmentShader: `varying vec3 vColor; varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r); a = a * a;
                gl_FragColor = vec4(vColor * a, 1.0); }`
    }));
    sparks.frustumCulled = false;

    // the rockets: a bright head with a sparkly tail, from behind the castle up to each burst
    const rp = [], rt = [], ri = [];
    for (const [t, x, y, z] of BURSTS) {
        for (let k = 0; k < 12; k++) {
            rp.push(x * 0.75, 3, z + 6); rt.push(x, y, z); ri.push(t - RISE, k * 0.022, R() * 6.28);
        }
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(rp, 3));
    rg.setAttribute('aTo', new THREE.Float32BufferAttribute(rt, 3));
    rg.setAttribute('aInfo', new THREE.Float32BufferAttribute(ri, 3));
    const rockets = new THREE.Points(rg, new THREE.ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec3 aTo, aInfo; uniform float uTime, uScale; varying float vA;
            void main() {
                float t = (uTime - aInfo.x - aInfo.y) / ${RISE.toFixed(2)};
                if (t < 0.0 || t > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float e = 1.0 - (1.0 - t) * (1.0 - t);
                vec3 p = mix(position, aTo, e) + vec3(sin(t * 18.0 + aInfo.z) * 0.25, 0.0, 0.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                float tail = aInfo.y / 0.022;
                vA = (1.0 - tail / 12.0) * (0.6 + 0.4 * sin(uTime * 50.0 + tail));
                gl_PointSize = uScale * 0.55 * (1.0 - tail * 0.06) / -mv.z;
            }`,
        fragmentShader: `varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r);
                gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * a * a * vA * 2.5, 1.0); }`
    }));
    rockets.frustumCulled = false;

    const group = new THREE.Group();
    group.add(sparks, rockets);
    // the flash of each burst lights the sky and the castle
    const light = new THREE.PointLight('#ffffff', 0, 0, 0.6);
    group.add(light);
    const tmp = new THREE.Color();
    return {
        group, light,
        update(t, px) {
            uniforms.uTime.value = t;
            uniforms.uScale.value = 950 * px;
            let best = 0, sum = 0;
            const c = new THREE.Color(0, 0, 0);
            for (const [bt, x, y, z, , ca] of BURSTS) {
                const d = t - bt;
                if (d < 0 || d > 1.2) continue;
                const k = Math.exp(-d * 4.5) * smooth(0, 0.05, d);
                sum += k;
                c.add(tmp.set(ca).multiplyScalar(k));
                if (k > best) { best = k; light.position.set(x, y * 0.7, z + 20); }
            }
            light.intensity = sum * 14;
            if (sum > 0) light.color.copy(c.multiplyScalar(1 / sum));
            return { flash: Math.min(1, sum), color: light.color };
        }
    };
}

// Gold dust drifting at the gates, fireflies in the gardens, sparkles about the sisters.
export function buildMotes() {
    const R = rng(99), pos = [], info = [], kind = [];
    const add = (n, x0, x1, y0, y1, z0, z1, k) => {
        for (let i = 0; i < n; i++) {
            pos.push(x0 + R() * (x1 - x0), y0 + R() * (y1 - y0), z0 + R() * (z1 - z0));
            info.push(R() * 6.28, 0.5 + R(), 0.6 + R() * 0.8, R());
            kind.push(k);
        }
    };
    add(260, -7, 7, 0.3, 9.5, 0.6, 7, 0);      // gold dust before the gates
    add(220, -9, 9, 0.2, 4.0, -50, -4, 1);     // fireflies over the gardens
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aInfo', new THREE.Float32BufferAttribute(info, 4));
    g.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
    const uniforms = { uTime: { value: 0 }, uScale: { value: 60 }, uMap: { value: T.sparkle() }, uDust: { value: 1 }, uFlies: { value: 0 } };
    const motes = new THREE.Points(g, new THREE.ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec4 aInfo; attribute float aKind; uniform float uTime, uScale, uDust, uFlies;
            varying vec3 vC; varying float vRot;
            void main() {
                float ph = aInfo.x, sp = aInfo.y;
                vec3 p = position;
                float vis;
                if (aKind < 0.5) {
                    p.y = mod(p.y + uTime * 0.35 * sp, 9.5) + 0.2;
                    p.x += sin(uTime * 0.7 * sp + ph) * 0.5; p.z += cos(uTime * 0.6 * sp + ph) * 0.4;
                    vis = uDust * (0.4 + 0.6 * pow(0.5 + 0.5 * sin(uTime * 3.0 * aInfo.z + ph), 3.0));
                    vC = mix(vec3(1.0, 0.68, 0.28), vec3(1.0, 0.86, 0.55), aInfo.w) * 1.05;
                } else {
                    p.x += sin(uTime * 0.5 * sp + ph) * 0.8; p.y += sin(uTime * 0.9 * sp + ph * 2.0) * 0.3; p.z += cos(uTime * 0.4 * sp + ph) * 0.8;
                    vis = uFlies * smoothstep(0.55, 1.0, sin(uTime * 1.6 * aInfo.z + ph * 3.0));
                    vC = vec3(0.75, 1.0, 0.45) * 2.2;
                }
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                gl_PointSize = min(uScale * (0.4 + aInfo.z * 0.6) * vis * smoothstep(1.5, 4.0, -mv.z) / -mv.z, 24.0);
                vRot = ph + uTime * 0.5;
            }`,
        fragmentShader: `uniform sampler2D uMap; varying vec3 vC; varying float vRot;
            void main() { vec2 q = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot);
                q = mat2(c, -s, s, c) * q; float a = texture2D(uMap, q + 0.5).a;
                gl_FragColor = vec4(vC * a, 1.0); }`
    }));
    motes.frustumCulled = false;
    return {
        group: motes,
        update(t, px) {
            uniforms.uTime.value = t;
            uniforms.uScale.value = 60 * px;
            uniforms.uDust.value = 1 - smooth(3.4, 4.2, t);
            uniforms.uFlies.value = smooth(3.0, 4.5, t);
        }
    };
}

// Petals and confetti falling over the sisters at the end.
export function buildShower(center, start) {
    const R = rng(555), N = 520;
    const pos = [], uv = [], st = [], inf = [], cl = [], idx = [];
    const palette = ['#ff5c9a', '#ff8fbd', '#ffd54f', '#ffffff', '#c9a4ff', '#ff3d7f', '#ffe9a8'].map(h => col(h));
    for (let i = 0; i < N; i++) {
        const sx = center.x + (R() - 0.5) * 7, sz = center.z + (R() - 0.5) * 6, sy = 4.5 + R() * 3.5;
        const delay = start + R() * 2.4, speed = 0.55 + R() * 0.45, spin = 2 + R() * 4, seed = R() * 100;
        const c = palette[Math.floor(R() * palette.length)], petal = R() < 0.6 ? 1 : 0;
        const w = petal ? 0.09 : 0.06, h = petal ? 0.11 : 0.035;
        const corners = [[-w, -h, 0, 0], [w, -h, 1, 0], [w, h, 1, 1], [-w, h, 0, 1]];
        for (const [x, y, u, v] of corners) {
            pos.push(x, y, 0); uv.push(u, v);
            st.push(sx, sy, sz); inf.push(delay, speed, spin, seed + petal * 1000); cl.push(c.r, c.g, c.b);
        }
        const b = i * 4;
        idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('aStart', new THREE.Float32BufferAttribute(st, 3));
    g.setAttribute('aInfo', new THREE.Float32BufferAttribute(inf, 4));
    g.setAttribute('aColor', new THREE.Float32BufferAttribute(cl, 3));
    g.setIndex(idx);
    const uniforms = { uTime: { value: 0 }, uMap: { value: T.petal() } };
    const mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, side: THREE.DoubleSide,
        vertexShader: `attribute vec3 aStart, aColor; attribute vec4 aInfo; uniform float uTime;
            varying vec2 vUv; varying vec3 vC; varying float vA, vPetal;
            mat3 rot(vec3 ax, float a) { ax = normalize(ax); float s = sin(a), c = cos(a), oc = 1.0 - c;
                return mat3(oc * ax.x * ax.x + c, oc * ax.x * ax.y + ax.z * s, oc * ax.z * ax.x - ax.y * s,
                            oc * ax.x * ax.y - ax.z * s, oc * ax.y * ax.y + c, oc * ax.y * ax.z + ax.x * s,
                            oc * ax.z * ax.x + ax.y * s, oc * ax.y * ax.z - ax.x * s, oc * ax.z * ax.z + c); }
            void main() {
                float t = uTime - aInfo.x;
                vPetal = step(999.0, aInfo.w);
                float seed = mod(aInfo.w, 1000.0);
                if (t < 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
                vec3 p = aStart + vec3(sin(t * 1.3 + seed) * 0.4, -aInfo.y * t, cos(t * 1.1 + seed * 1.7) * 0.4);
                mat3 m = rot(vec3(sin(seed), cos(seed * 1.3), 0.6), t * aInfo.z + seed);
                vec3 n = m * vec3(0.0, 0.0, 1.0);
                vec4 mv = modelViewMatrix * vec4(p + m * position, 1.0);
                gl_Position = projectionMatrix * mv;
                vUv = uv;
                float face = abs(dot(normalize(n), normalize(-mv.xyz)));
                vC = aColor * (0.45 + 0.75 * face) * 1.25;
                vA = smoothstep(0.0, 0.3, t) * (1.0 - smoothstep(0.15, 0.0, p.y));
            }`,
        fragmentShader: `uniform sampler2D uMap; varying vec2 vUv; varying vec3 vC; varying float vA, vPetal;
            void main() { float a = vPetal > 0.5 ? texture2D(uMap, vUv).a : 1.0; if (a * vA < 0.05) discard;
                gl_FragColor = vec4(vC, a * vA); }`
    }));
    mesh.frustumCulled = false;
    return { group: mesh, update(t) { uniforms.uTime.value = t; } };
}
