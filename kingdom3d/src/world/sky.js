// The sky over the kingdom: a dome whose colours and sun follow the hour (see LOOKS in
// world.js), with soft clouds painted into it near the horizon, and the surroundings that the
// shiny things reflect.
import * as THREE from 'three';

const NOISE = `
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.03 + 7.1) * 0.3 + vnoise(p * 4.1 + 3.3) * 0.2; }`;

export function buildSky() {
    const uniforms = {
        uZenith: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uGlow: { value: new THREE.Color() },
        uCloud: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uTime: { value: 0 }, uStars: { value: 0 }
    };
    const dome = new THREE.Mesh(new THREE.SphereGeometry(800, 40, 20), new THREE.ShaderMaterial({
        uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
        vertexShader: `varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
        fragmentShader: `uniform vec3 uZenith, uHorizon, uGlow, uCloud, uSunDir; uniform float uTime, uStars; varying vec3 vDir;
            ${NOISE}
            void main() {
                vec3 d = normalize(vDir); float h = d.y;
                vec3 c = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
                float s = max(dot(d, uSunDir), 0.0);
                c += uGlow * (pow(s, 6.0) * 0.35 + pow(s, 60.0) * 0.9 + pow(s, 900.0) * 6.0);
                // clouds: soft banks drifting slowly, thicker toward the horizon
                vec2 q = d.xz / (0.25 + max(h, 0.0)) * 1.4 + vec2(uTime * 0.006, 0.0);
                float cl = smoothstep(0.52, 0.8, fbm(q)) * smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.35, 0.8, h));
                c = mix(c, uCloud, cl * 0.9);
                // a few stars at night
                vec2 g = d.xz / (0.35 + abs(h)) * 60.0; vec2 id = floor(g);
                float st = step(0.985, hash(id)) * smoothstep(0.35, 0.0, length(fract(g) - 0.5)) * smoothstep(0.05, 0.3, h);
                c += vec3(1.0, 0.96, 0.9) * st * uStars * (0.6 + 0.4 * sin(uTime * 2.0 + hash(id) * 40.0));
                c = mix(c, uHorizon, smoothstep(0.0, -0.3, h));
                gl_FragColor = vec4(c, 1.0);
            }`
    }));
    dome.renderOrder = -10;
    dome.frustumCulled = false;
    dome.name = 'sky';
    return { dome, uniforms };
}

// The surroundings for reflections and soft light from all sides: the sky's colours, a bright
// card where the sun is, the ground's green below.
export function buildEnvironment(renderer, look) {
    const env = new THREE.Scene();
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(60, 32, 16), new THREE.ShaderMaterial({
        side: THREE.BackSide,
        uniforms: { uZenith: { value: new THREE.Color(look.zenith) }, uHorizon: { value: new THREE.Color(look.horizon) }, uGround: { value: new THREE.Color(look.bounce) } },
        vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: `uniform vec3 uZenith, uHorizon, uGround; varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(uHorizon, uZenith, smoothstep(0.0, 0.7, d.y));
            c = mix(c, uGround, smoothstep(0.02, -0.25, d.y));
            gl_FragColor = vec4(c, 1.0); }`
    }));
    env.add(sphere);
    const sun = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), new THREE.MeshBasicMaterial({ color: new THREE.Color(look.sun).multiplyScalar(look.envSun), side: THREE.DoubleSide }));
    sun.position.copy(look.sunDir).multiplyScalar(50); sun.lookAt(0, 0, 0);
    env.add(sun);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const rt = pmrem.fromScene(env, 0.04);
    pmrem.dispose();
    env.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    return rt;
}
