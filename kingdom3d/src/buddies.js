// Yoovy and Googy in the corner of every game, in 3D: they breathe and blink while the child
// thinks, jump and cheer at a right answer, droop at a wrong one, gasp when the time runs out
// and dance at the end of a game (the moods of setGaiaState in index.html). They are drawn on
// a small canvas of their own, clear around them, that the page puts in its corner.
import * as THREE from 'three';
import { clamp, smooth } from './util.js';
import { buildGirl, girlMaterials } from './girls.js';
import { buildEnvironment } from './world/sky.js';

const LOOK = { zenith: '#9cc4ff', horizon: '#eef4ff', bounce: '#c9b8d8', sun: '#fff1dc', envSun: 4, sunDir: new THREE.Vector3(-0.5, 0.7, 0.6).normalize() };

export function createBuddies(faces) {
    const canvas = document.createElement('canvas');
    canvas.className = 'k3d-buddies';
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, stencil: false });
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    const scene = new THREE.Scene();
    const env = buildEnvironment(renderer, LOOK);
    scene.environment = env.texture;
    scene.environmentIntensity = 0.5;
    scene.add(new THREE.HemisphereLight(new THREE.Color('#e4eeff'), new THREE.Color('#b9a6cc'), 0.75));
    const key = new THREE.DirectionalLight(new THREE.Color('#fff0dc'), 2.4);
    key.position.set(-2.2, 3.2, 3.4);
    scene.add(key);

    // a little knoll of their own to stand on, whatever is behind them in the picture
    const knoll = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#4c9a2e', roughness: 0.95 }));
    knoll.scale.set(0.6, 0.12, 0.46);
    knoll.position.set(0, -0.12, 0.03);
    scene.add(knoll);
    const petals = ['#ff7eb3', '#ffd54f', '#ffffff', '#c9a4ff', '#ff9e80'];
    [[-0.5, 0.06], [-0.4, 0.26], [-0.02, 0.36], [0.31, 0.3], [0.5, 0.1], [0.03, -0.2], [-0.2, 0.2]].forEach(([x, z], i) => {
        const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.026, 0), new THREE.MeshStandardMaterial({ color: petals[i % petals.length], roughness: 0.6 }));
        f.position.set(x, -0.12 + 0.12 * Math.sqrt(Math.max(0, 1 - (x / 0.6) ** 2 - ((z - 0.03) / 0.46) ** 2)) + 0.015, z);
        f.scale.y = 0.75;
        scene.add(f);
    });

    const mats = girlMaterials();
    mats.skin.emissiveIntensity = 0.05;
    mats.blob.opacity = 0.32;
    // on the screen Yoovy stands on the right, Googy on the left, both turned a little to the game
    const girls = [['yoovy', 0.25], ['googy', -0.25]].map(([who, x], i) => {
        const g = buildGirl(who, faces[who], mats, { royal: false });
        g.x = x; g.side = Math.sign(x); g.late = i * 0.1;
        g.blink = 1.5 + i * 1.3;
        scene.add(g.root);
        return g;
    });
    const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 30);

    let mood = 'idle', since = 0, time = 0, W = 0, H = 0;
    const frameCamera = () => {
        // both sisters from their feet to above a jump, whatever the canvas's shape
        const h = 1.62, w = 1.3, th = Math.tan(camera.fov * Math.PI / 360);
        const d = Math.max(h / (2 * th), w / (2 * th * camera.aspect));
        camera.position.set(0, 0.66, d);
        camera.lookAt(0, 0.66, 0);
        camera.updateProjectionMatrix();
    };

    const draw = (dt) => {
        time += dt; since += dt;
        girls.forEach((g, i) => {
            const t = since - g.late, st = { x: g.x, z: 0, turn: -0.2, walk: 0, dist: 0, face: 'open', squash: -0.012 * Math.sin(time * 2.1 + i * 1.7) };
            g.blink -= dt;
            if (g.blink < 0.13) st.face = 'blink';
            if (g.blink < 0) g.blink = 2.4 + Math.random() * 3.2;
            if (mood === 'idle') {
                // a look at each other now and then
                st.look = -g.side * 0.35 * Math.max(0, Math.sin(time * 0.37 + 1.3) - 0.8) * 5;
                st.tilt = 0.03 * Math.sin(time * 0.8 + i * 2);
            } else if (mood === 'happy' && t > 0) {
                // a jump with both arms up
                const k = t / 0.55, up = k < 1 ? 4 * k * (1 - k) : 0;
                st.jump = 0.15 * up;
                st.squash = (k < 0.12 ? 0.07 * Math.sin(k / 0.12 * Math.PI) : 0) + (k > 1 && k < 1.25 ? 0.07 * Math.sin((k - 1) / 0.25 * Math.PI) : 0);
                st.cheer = smooth(0, 0.18, t) * smooth(1.15, 0.9, t);
                st.face = 'laugh';
            } else if (mood === 'sad') {
                // the head drops and shakes a little
                const env = smooth(0, 0.15, t) * smooth(0.9, 0.65, t);
                st.nod = 0.3 * env; st.lean = 0.08 * env;
                st.look = 0.16 * Math.sin(t * 14) * Math.exp(-t * 3) * env;
                st.armOut = -0.06 * env;
                st.face = 'sad';
            } else if (mood === 'surprised' && t > 0) {
                const k = clamp(t / 0.4), env = smooth(0, 0.1, t) * smooth(1.2, 0.95, t);
                st.jump = 0.06 * 4 * k * (1 - k);
                st.armOut = 0.75 * env; st.lean = -0.07 * env; st.nod = -0.08 * env;
                st.face = 'wow';
            } else if (mood === 'dance') {
                // bouncing from side to side, arms in the air
                const b = time * 6.2 + i * Math.PI;
                st.jump = 0.05 * Math.abs(Math.sin(b / 2));
                st.sway = 0.13 * Math.sin(b / 2);
                st.turn = -0.2 + 0.3 * Math.sin(b / 4);
                st.cheer = 1;
                st.face = 'laugh';
            }
            g.update(time, st);
        });
        renderer.render(scene, camera);
    };

    // the shaders are made ready off to the side, so the page does not stop for them
    let ok = false, gone = false;
    const ready = renderer.compileAsync(scene, camera).then(() => { if (!gone) { ok = true; draw(0); } });

    let raf = 0, running = false, lastDraw = 0;
    const frame = (now) => {
        if (!running) return;
        raf = requestAnimationFrame(frame);
        if (!ok) return;
        // still unless something moves fast: 30 frames a second
        const lively = mood !== 'idle';
        if (!lively && now - lastDraw < 31) return;
        const dt = Math.min(0.1, (now - lastDraw) / 1000);
        lastDraw = now;
        draw(dt);
    };

    const buddies = {
        canvas,
        // resolves when they can be drawn (and have been, once)
        ready,
        resize(w, h) {
            w = Math.max(2, w | 0); h = Math.max(2, h | 0);
            if (w === W && h === H) return;
            W = w; H = h;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            frameCamera();
            if (ok) draw(0);
        },
        // 'idle' | 'happy' | 'sad' | 'surprised' | 'dance'
        mood(m) { if (m !== mood || m !== 'idle') { mood = m; since = 0; } },
        get moodNow() { return mood; },
        start() { if (!running) { running = true; lastDraw = performance.now(); raf = requestAnimationFrame(frame); } },
        stop() { running = false; cancelAnimationFrame(raf); },
        get running() { return running; },
        // one frame by hand (for the tests and the tools)
        step(dt = 1 / 60) { if (ok) draw(dt); },
        dispose() {
            gone = true; ok = false;
            buddies.stop();
            scene.traverse(o => { if (o.geometry) o.geometry.dispose(); const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; for (const m of ms) m.dispose(); });
            env.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            canvas.remove();
        }
    };
    buddies.resize(180, 210);
    return buddies;
}
