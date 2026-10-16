// The twilight sky (a bright gradient dome with a soft milky way and the moon's halo), twinkling stars,
// the moon, and the environment the gold and gems reflect.
import * as THREE from 'three';
import { rng, col } from './util.js';
import * as T from './textures.js';

export const MOON_DIR = new THREE.Vector3(-0.34, 0.36, -0.87).normalize();

const NOISE = `
float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise3(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`;

export function buildSky() {
    const group = new THREE.Group();
    group.name = 'sky';

    const uniforms = {
        uZenith: { value: col('#1b2d7c') }, uMid: { value: col('#4b40a8') }, uHorizon: { value: col('#c86ca8') },
        uGlow: { value: col('#ffb46a') }, uMoonDir: { value: MOON_DIR }, uFlash: { value: 0 }, uFlashColor: { value: new THREE.Color(1, 1, 1) }
    };
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1000, 48, 24), new THREE.ShaderMaterial({
        uniforms, side: THREE.BackSide, depthWrite: false,
        vertexShader: `varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
        fragmentShader: `uniform vec3 uZenith, uMid, uHorizon, uGlow, uMoonDir, uFlashColor; uniform float uFlash; varying vec3 vDir;
            ${NOISE}
            void main() {
                vec3 d = normalize(vDir); float h = d.y;
                vec3 c = mix(uHorizon, uMid, smoothstep(-0.04, 0.24, h));
                c = mix(c, uZenith, smoothstep(0.2, 0.9, h));
                // the warm light of the kingdom on the horizon, behind the castle
                float far = pow(max(0.0, -d.z), 4.0);
                c += uGlow * far * (1.0 - smoothstep(-0.02, 0.3, h)) * 0.55;
                // a soft milky way
                vec3 bandN = normalize(vec3(0.55, 0.35, 0.75));
                float band = exp(-pow(dot(d, bandN) / 0.2, 2.0));
                float n = noise3(d * 7.0) * 0.6 + noise3(d * 19.0) * 0.4;
                c += vec3(0.16, 0.12, 0.3) * band * smoothstep(0.35, 0.85, n) * smoothstep(0.05, 0.45, h);
                // the moon's halo
                float m = max(dot(d, uMoonDir), 0.0);
                c += vec3(0.5, 0.56, 0.9) * (pow(m, 30.0) * 0.22 + pow(m, 6.0) * 0.05);
                c = mix(c, uHorizon * 0.5, smoothstep(0.0, -0.25, h));
                c += uFlashColor * uFlash * (0.3 + 0.7 * smoothstep(-0.1, 0.5, h));
                gl_FragColor = vec4(c, 1.0);
            }`
    }));
    dome.renderOrder = -10;
    dome.frustumCulled = false;
    group.add(dome);

    // stars: a few bright ones, many faint ones, each twinkling at its own pace
    const R = rng(42), N = 1700;
    const pos = new Float32Array(N * 3), info = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
        let d;
        do { d = new THREE.Vector3(R() * 2 - 1, R() * 2 - 1, R() * 2 - 1); } while (d.lengthSq() > 1 || d.lengthSq() < 0.01);
        d.normalize();
        if (d.y < 0.03) d.y = Math.abs(d.y) + 0.03;
        d.normalize().multiplyScalar(940);
        pos.set([d.x, d.y, d.z], i * 3);
        const b = Math.pow(R(), 3.2);
        info.set([0.8 + b * 2.8, R() * 6.28, 0.6 + R() * 2.2], i * 3);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    sg.setAttribute('info', new THREE.BufferAttribute(info, 3));
    const starU = { uTime: { value: 0 }, uPx: { value: 1 }, uFade: { value: 1 } };
    const stars = new THREE.Points(sg, new THREE.ShaderMaterial({
        uniforms: starU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec3 info; uniform float uTime, uPx; varying float vA;
            void main() {
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww;
                float tw = 0.6 + 0.4 * sin(uTime * info.z + info.y);
                vA = tw * clamp(info.x / 2.0, 0.35, 1.0);
                gl_PointSize = info.x * uPx * (0.85 + 0.25 * tw);
            }`,
        fragmentShader: `uniform float uFade; varying float vA;
            void main() { vec2 q = gl_PointCoord - 0.5; float r = length(q) * 2.0;
                float a = smoothstep(1.0, 0.0, r); a *= a;
                gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * a * uFade * 1.6, 1.0); }`
    }));
    stars.renderOrder = -9;
    stars.frustumCulled = false;
    group.add(stars);

    // the moon and its glow
    const moonPos = MOON_DIR.clone().multiplyScalar(900);
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.moon(), color: new THREE.Color(1.6, 1.55, 1.4), fog: false, depthWrite: false }));
    moon.position.copy(moonPos); moon.scale.setScalar(64); moon.renderOrder = -8;
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(2.6), color: col('#8fa2ff'), fog: false, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 }));
    halo.position.copy(moonPos).multiplyScalar(0.99); halo.scale.setScalar(300); halo.renderOrder = -8;
    group.add(halo, moon);

    return {
        group, uniforms,
        update(t, camera, px) {
            group.position.copy(camera.position);
            starU.uTime.value = t;
            starU.uPx.value = px;
        }
    };
}

// The surroundings the shiny things reflect: a twilight gradient with warm and cool light cards.
export function buildEnvironment(renderer) {
    const env = new THREE.Scene();
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(60, 32, 16), new THREE.ShaderMaterial({
        side: THREE.BackSide,
        vertexShader: `varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(vec3(0.42, 0.24, 0.44), vec3(0.11, 0.15, 0.4), smoothstep(-0.05, 0.6, d.y));
            c = mix(c, vec3(0.12, 0.1, 0.12), smoothstep(0.0, -0.3, d.y));
            gl_FragColor = vec4(c, 1.0); }`
    }));
    env.add(sphere);
    const card = (w, h, color, x, y, z) => {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
        m.position.set(x, y, z); m.lookAt(0, 0, 0);
        env.add(m);
    };
    card(40, 10, new THREE.Color(3.2, 2.0, 0.8), 0, 5, -48);     // the castle's glow
    card(26, 12, new THREE.Color(2.4, 1.5, 0.7), 0, 10, 46);     // the lanterns behind the camera
    card(12, 12, new THREE.Color(1.3, 1.45, 2.4), -26, 34, -26); // the moon
    card(16, 22, new THREE.Color(1.5, 0.55, 1.1), -48, 6, 8);    // pink and lilac sides
    card(16, 22, new THREE.Color(0.8, 0.6, 1.8), 48, 6, -8);
    card(30, 4, new THREE.Color(3.5, 3.0, 2.2), 0, 40, 0);       // a soft top light for highlights
    const pmrem = new THREE.PMREMGenerator(renderer);
    const rt = pmrem.fromScene(env, 0.035);
    pmrem.dispose();
    env.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    return rt;
}
