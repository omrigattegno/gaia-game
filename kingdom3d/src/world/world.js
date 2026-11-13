// The kingdom map in 3D: the land and the water, the road, the castle and the nine lands, trees
// and clouds, and Yoovy and Googy walking between the lands. index.html lays its own page over
// it (the plaques with the lands' names and stars, the panel of a land) and drives it through
// Kingdom3D.world: the page's scroll moves the camera along the road, a tap picks a land.
import * as THREE from 'three';
import { clamp, lerp, smooth } from '../util.js';
import { releaseScene } from '../stage.js';
import { vignette } from '../film.js';
import { LANDS, landByKey, ROAD } from './layout.js';
import { buildTerrain, buildWater } from './terrain.js';
import { buildSky, buildEnvironment } from './sky.js';
import { LAND_BUILDERS } from './lands.js';
import { buildScenery } from './scenery.js';
import { buildSisters } from './sisters.js';
import { Atlas } from './kit.js';
import * as T from '../textures.js';

const RAD = Math.PI / 180;

// How the kingdom looks at each time of day.
const LOOKS = {
    day: {
        zenith: '#3b8de8', horizon: '#cfeaff', glow: '#fff1cc', cloud: '#ffffff', bounce: '#86b45c',
        sun: '#ffedc8', sunDir: new THREE.Vector3(-0.56, 0.66, 0.5).normalize(), sunPower: 3.0, envSun: 5,
        hemiSky: '#cfe2ff', hemiGround: '#8d86b8', hemiPower: 0.5, envPower: 0.36,
        fog: '#c9e2f5', fogDensity: 0.0028, exposure: 1.0, bloom: [0.18, 0.55, 1.1], stars: 0,
        shallow: '#62e2d6', deep: '#2389d8', glint: 1, vignette: 0.3, beam: 0.05, crystal: 0.35, cloudGlow: 0.35, windows: [1.35, 1.12, 0.85]
    }
};

// the camera: looks north along the road from above
const FOV = 34, FIT_WIDTH = 16.5, D_MIN = 34, D_MAX = 60, Z_TOP = -44.5, Z_BOTTOM = 40;

export async function createWorld(stage, opts = {}) {
    const { renderer, bloom } = stage;
    // between the steps of the build the page gets a breath (opts.breath can make it a long one)
    const pause = opts.breath || (() => new Promise(r => setTimeout(r, 0)));
    const look = LOOKS.day;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(new THREE.Color(look.fog), look.fogDensity);
    const camera = new THREE.PerspectiveCamera(FOV, 1, 1, 1600);

    // ---- the land, the water, the sky ----
    const terrain = buildTerrain();
    scene.add(terrain.ground, terrain.road);
    await pause();
    const water = buildWater(terrain.heightMap);
    scene.add(water.mesh);
    const sky = buildSky();
    scene.add(sky.dome);
    const env = buildEnvironment(renderer, look);
    scene.environment = env.texture;
    scene.environmentIntensity = look.envPower;
    scene.add(vignette(look.vignette));
    await pause();

    // ---- the lands ----
    const stone = stage.texture('stone', () => T.stone()), win = stage.texture('window', () => T.windowTex());
    const roof = (name, hex) => { const s = stage.texture(name, () => T.shingles(hex)); return new THREE.MeshPhysicalMaterial({ map: s.map, normalMap: s.normalMap, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.3 }); };
    const lit = new THREE.Color(...look.windows);
    const ctx = {
        look, stage, heightAt: terrain.heightAt, roadY: terrain.roadY,
        atlas: new Atlas(2048, 1024),
        sparkle: T.sparkle(), glow: T.glow(2),
        mats: {
            paint: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.78 }),
            gloss: new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.25 }),
            rock: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true }),
            white: new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.8, side: THREE.DoubleSide }),
            paintTwoSided: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }),
            flat: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide })
        },
        castleMats: {
            castleStone: new THREE.MeshStandardMaterial({ map: stone.map, normalMap: stone.normalMap, normalScale: new THREE.Vector2(0.9, 0.9), roughness: 0.86 }),
            roofPink: roof('shinglesPink', '#e2559a'), roofPurple: roof('shinglesPurple', '#7a4ae0'),
            carpet: new THREE.MeshStandardMaterial({ map: stage.texture('carpet', () => T.carpet()), roughness: 0.9 }),
            window: new THREE.MeshBasicMaterial({ map: win, transparent: true, color: lit }),
            windowLit: new THREE.MeshBasicMaterial({ map: win, transparent: true, vertexColors: true, color: lit })
        }
    };
    const lands = [];
    for (const L of LANDS) {
        const make = LAND_BUILDERS[L.key];
        if (!make) continue;
        ctx.land = L;
        const built = make(ctx);
        built.group.position.set(built.x ?? L.x, built.y ?? terrain.heightAt(L.x, L.z), built.z ?? L.z);
        built.group.name = 'land-' + L.key;
        scene.add(built.group);
        lands.push({ L, ...built });
        await pause();
    }

    const scenery = buildScenery(ctx);
    scene.add(scenery.group);
    await pause();

    const sisters = buildSisters(stage, terrain.roadY);
    scene.add(sisters.group);
    await pause();

    // ---- light: the sun (its shadows are drawn once: nothing that casts one moves), the sky ----
    const hemi = new THREE.HemisphereLight(new THREE.Color(look.hemiSky), new THREE.Color(look.hemiGround), look.hemiPower);
    const sun = new THREE.DirectionalLight(new THREE.Color(look.sun), look.sunPower);
    sun.castShadow = true;
    sun.shadow.autoUpdate = false;
    sun.shadow.bias = -0.0007; sun.shadow.normalBias = 0.06; sun.shadow.radius = 2.2;
    scene.add(hemi, sun, sun.target);
    const fitShadow = (size) => {
        // the shadow camera holds the whole kingdom, seen from the sun
        const centre = new THREE.Vector3(0, 0, -2);
        sun.target.position.copy(centre);
        sun.position.copy(centre).addScaledVector(look.sunDir, 150);
        sun.updateMatrixWorld(); sun.target.updateMatrixWorld();
        const view = new THREE.Matrix4().lookAt(sun.position, centre, new THREE.Vector3(0, 1, 0)).invert();
        view.multiply(new THREE.Matrix4().makeTranslation(-sun.position.x, -sun.position.y, -sun.position.z));
        const box = new THREE.Box3(), v = new THREE.Vector3();
        for (const x of [-30, 30]) for (const y of [-1, 13]) for (const z of [-68, 62]) box.expandByPoint(v.set(x, y, z).applyMatrix4(view));
        const cam = sun.shadow.camera;
        cam.left = box.min.x; cam.right = box.max.x; cam.bottom = box.min.y; cam.top = box.max.y;
        cam.near = Math.max(1, -box.max.z - 5); cam.far = -box.min.z + 5;
        cam.updateProjectionMatrix();
        if (sun.shadow.map && sun.shadow.mapSize.x !== size) { sun.shadow.map.dispose(); sun.shadow.map = null; }
        sun.shadow.mapSize.set(size, size);
        sun.shadow.needsUpdate = true;
    };

    const landY = key => { const l = lands.find(l => l.L.key === key); return l ? l.group.position.y : 0.6; };

    // ---- the camera's rig: where it is now, eased toward where it should be ----
    const rig = { x: 0, y: 0.6, z: Z_TOP, d: 50, pitch: 46 * RAD, shift: 0 };
    const goal = { scroll: 0, focus: null, inset: 0 };
    let aspect = 1, time = 0;
    const baseDist = () => clamp((FIT_WIDTH / 2) / (Math.tan(FOV * RAD / 2) * aspect), D_MIN, D_MAX);
    const wanted = () => {
        if (goal.focus) {
            // near enough to fill what the page's panel leaves of the view with the land and the sisters beside it
            const L = goal.focus, th = Math.tan(FOV * RAD / 2), open = clamp(1 - goal.inset / Math.max(1, stage.height), 0.25, 1);
            const tall = 0.8 * L.h + 1.1 * L.r, wide = 2.3 * L.r + 1.6;
            const d = Math.max(tall / (2 * th * open), wide / (2 * th * aspect));
            return { x: L.x * 0.72, y: landY(L.key) + L.h * 0.36, z: L.z + 0.5, d: clamp(d, 15, 46), pitch: 38 * RAD, shift: goal.inset / 2 };
        }
        const z = lerp(Z_TOP, Z_BOTTOM, goal.scroll);
        return { x: 0, y: 0.6, z, d: baseDist(), pitch: lerp(40, 47, smooth(Z_TOP, Z_TOP + 16, z)) * RAD, shift: 0 };
    };
    const ease = (dt, snap) => {
        const w = wanted(), k = snap ? 1 : 1 - Math.exp(-dt * (goal.focus ? 5.5 : 14));
        let moving = false;
        for (const p in w) {
            rig[p] += (w[p] - rig[p]) * k;
            if (Math.abs(w[p] - rig[p]) > (p === 'pitch' ? 0.0005 : p === 'shift' ? 0.4 : 0.004)) moving = true;
        }
        return moving;   // still on its way
    };
    const aim = () => {
        camera.position.set(rig.x, rig.y + rig.d * Math.sin(rig.pitch), rig.z + rig.d * Math.cos(rig.pitch));
        camera.lookAt(rig.x, rig.y, rig.z);
        if (rig.shift > 0.5) camera.setViewOffset(stage.width, stage.height, 0, rig.shift, stage.width, stage.height);
        else if (camera.view) camera.clearViewOffset();
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld();
    };

    // a tap's answer: the land gives a little bounce
    const bounces = new Map();
    const draw = (dt = 0) => {
        time += dt;
        aim();
        sky.dome.position.copy(camera.position);
        sky.uniforms.uTime.value = time;
        water.uniforms.uTime.value = time;
        for (const l of lands) {
            if (l.update) l.update(time);
            const b = bounces.get(l.L.key);
            if (b !== undefined) {
                const k = (time - b) / 0.45;
                if (k >= 1) { bounces.delete(l.L.key); l.group.scale.setScalar(1); }
                else l.group.scale.setScalar(1 + 0.07 * Math.sin(k * Math.PI) * (1 - k * 0.5));
            }
        }
        scenery.update(time);
        const busy = sisters.update(time, dt);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = look.exposure;
        bloom.strength = look.bloom[0]; bloom.radius = look.bloom[1]; bloom.threshold = look.bloom[2];
        stage.render();
        return busy || bounces.size > 0;
    };

    // the look: colours of the sky, the light and the water
    sky.uniforms.uZenith.value.set(look.zenith); sky.uniforms.uHorizon.value.set(look.horizon);
    sky.uniforms.uGlow.value.set(look.glow); sky.uniforms.uCloud.value.set(look.cloud);
    sky.uniforms.uSunDir.value.copy(look.sunDir); sky.uniforms.uStars.value = look.stars;
    water.uniforms.uShallow.value.set(look.shallow); water.uniforms.uDeep.value.set(look.deep);
    water.uniforms.uSunDir.value.copy(look.sunDir); water.uniforms.uGlint.value = look.glint;

    // where a land is on the screen (in CSS pixels): its plaque's place under it, and how big it looks
    const V = new THREE.Vector3(), V2 = new THREE.Vector3();
    const toScreen = v => { v.project(camera); return { x: (v.x * 0.5 + 0.5) * stage.width, y: (-v.y * 0.5 + 0.5) * stage.height, z: v.z }; };
    const spot = (l) => {
        const L = l.L, y = l.group.position.y;
        const foot = L.key === 'castle' ? toScreen(V.set(L.x, y + L.h + 1.4, L.z - 1.2)) : toScreen(V.set(L.x + Math.sign(L.x) * 0.5, y, L.z + L.r * 0.95));
        const mid = toScreen(V.set(L.x, y + 1.3, L.z)), edge = toScreen(V2.set(L.x + L.r, y + 1.3, L.z));
        return { key: L.key, x: foot.x, y: foot.y, above: L.key === 'castle', cx: mid.x, cy: mid.y, r: Math.abs(edge.x - mid.x), seen: mid.z < 1 && mid.y > -80 && mid.y < stage.height + 80 };
    };

    let raf = 0, running = false, last = 0, lastDraw = 0, slow = 0, frames = 0, onFrame = null, holder = null, busy = true;
    const fit = () => {
        if (!holder) return;
        const w = holder.clientWidth, h = holder.clientHeight;
        if (!w || !h || (w === stage.width && h === stage.height)) return;
        stage.resize(w, h);
        ease(0, true);
        draw(0);
        if (onFrame) onFrame();
    };
    const frame = (now) => {
        if (!running) return;
        raf = requestAnimationFrame(frame);
        const dt = Math.min(0.1, (now - last) / 1000);
        last = now;
        const moving = ease(dt);
        // nothing in a hurry: 30 frames a second are plenty for flags and water
        if (!moving && !busy && now - lastDraw < 31) return;
        const since = Math.min(0.1, (now - lastDraw) / 1000);
        // too slow for this device? draw fewer pixels
        if (lastDraw && since > 0.045 && (moving || busy)) slow++;
        if (++frames >= 40) { if (slow > 26 && stage.tier > 0) stage.setTier(stage.tier - 1); frames = slow = 0; }
        lastDraw = now;
        busy = draw(since);
        if (onFrame) onFrame();
    };

    const world = {
        scene, camera,
        onTier(Tq) { fitShadow(Tq.shadow || 1024); },
        onResize(a) { aspect = a; camera.aspect = a; },

        // Puts the map in a container and keeps it alive; onFrame() after each frame drawn.
        attach(container, opts = {}) {
            holder = container; onFrame = opts.onFrame || null;
            stage.use(world);
            sun.shadow.needsUpdate = true;
            if (stage.canvas.parentNode !== container) container.appendChild(stage.canvas);
            const w = container.clientWidth || innerWidth, h = container.clientHeight || innerHeight;
            if (w !== stage.width || h !== stage.height) stage.resize(w, h);
            ease(0, true);
            draw(0);
            if (onFrame) onFrame();
            if (!running) { running = true; last = lastDraw = performance.now(); frames = slow = 0; raf = requestAnimationFrame(frame); window.addEventListener('resize', fit); }
        },
        detach() {
            running = false; cancelAnimationFrame(raf); window.removeEventListener('resize', fit);
        },
        get attached() { return running; },
        // one frame by hand, dt seconds on (for the tests and the tools, which stop the loop)
        step(dt = 1 / 60) { ease(dt); busy = draw(dt); if (onFrame) onFrame(); },

        // how many screen pixels the ground moves when the camera travels one unit along the road,
        // and how far it can travel: the page sizes its scroll from these
        metrics() {
            const d = baseDist(), perUnit = (stage.height / 2) / (d * Math.tan(FOV * RAD / 2));
            return { pxPerUnit: perUnit * Math.sin(47 * RAD), range: Z_BOTTOM - Z_TOP };
        },
        setScroll(k, snap) { goal.scroll = clamp(k); if (snap) ease(0, true); },
        // where along the scroll (0..1) a land sits nicely in the view
        scrollOf(key) { const L = landByKey(key); return L ? clamp((L.z + 3 - Z_TOP) / (Z_BOTTOM - Z_TOP)) : 0; },
        // the camera goes to a land and looks at it above the page's panel (inset: the panel's height), or back (null)
        focus(key, inset = 0) { goal.focus = key ? landByKey(key) : null; goal.inset = inset; },
        // the sisters go to a land
        walkTo(key, instant) { sisters.go(key, time, instant); busy = true; },
        bounce(key) { bounces.set(key, time); busy = true; },
        // every land's place on the screen, for the plaques and the taps
        spots() { return lands.map(spot); },
        // the land under a point of the screen, if any
        pick(x, y) {
            let best = null, bd = 1;
            for (const l of lands) { const s = spot(l), d = Math.hypot(x - s.cx, y - s.cy) / (s.r * 1.08); if (s.seen && d < bd) { bd = d; best = s.key; } }
            return best;
        },
        // can this device draw the map smoothly? steps the quality down until it can
        fits() {
            stage.use(world);
            const gl = renderer.getContext(), px = new Uint8Array(4);
            const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
            for (let tier = stage.tier; tier >= 0; tier--) {
                stage.setTier(tier);
                goal.scroll = 0.4; ease(0, true); draw(0); sync();
                const t0 = performance.now();
                goal.scroll = 0.6; ease(0, true); draw(0.016); sync();
                goal.scroll = 0.2; ease(0, true); draw(0.016); sync();
                const ms = (performance.now() - t0) / 2;
                if (ms < (tier ? 26 : 45)) return true;
            }
            return false;
        },
        info() { const i = renderer.info; return { calls: i.render.calls, triangles: i.render.triangles, geometries: i.memory.geometries, textures: i.memory.textures, tier: stage.tier }; },

        // a frame for the tools: at this scroll, this size, nothing easing
        renderAt({ scroll = 0, focus = null, inset = 0, w, h, t, at = null } = {}) {
            stage.use(world);
            if (w && h) stage.resize(w, h);
            goal.scroll = scroll; goal.focus = focus ? landByKey(focus) : null; goal.inset = inset;
            if (t !== undefined) time = t;
            if (at) sisters.go(at, time, true);
            ease(0, true);
            draw(0);
        },
        release() {
            world.detach();
            releaseScene(stage, scene);
            if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
        }
    };

    stage.use(world);
    sisters.go(opts.at || 'castle', 0, true);
    ease(0, true);
    draw(0);   // first upload of everything
    if (renderer.compileAsync) await renderer.compileAsync(scene, camera);
    return world;
}
