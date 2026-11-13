// The royal intro: a short real-time film on the stage. The golden gates at night swing open,
// fireworks go up over the castle, and Yoovy and Googy walk out hand in hand in crowns and
// capes (see THE ROYAL INTRO in index.html). Every frame is a pure function of the time.
import * as THREE from 'three';
import { smooth, window4, col } from './util.js';
import * as T from './textures.js';
import { buildSky, buildEnvironment, MOON_DIR } from './sky.js';
import { buildGate, GATE_OPEN } from './gate.js';
import { buildCastle } from './castle.js';
import { buildGrounds } from './grounds.js';
import { buildGirl, girlMaterials } from './girls.js';
import { buildFireworks, buildMotes, buildShower, BURSTS } from './fx.js';
import { CAM, AIM, FOV, girlState, LENGTH, HANDOFF, CHEER, TITLE } from './timeline.js';
import { releaseScene } from './stage.js';

export const TIMELINE = { length: LENGTH, handoff: HANDOFF, gates: GATE_OPEN[0], cheer: CHEER, title: TITLE, bursts: BURSTS.map(b => b[0]) };

function sceneMaterials(stage) {
    const stone = stage.texture('stone', () => T.stone());
    const stoneMat = () => new THREE.MeshStandardMaterial({ map: stone.map, normalMap: stone.normalMap, normalScale: new THREE.Vector2(0.9, 0.9), roughness: 0.86 });
    const castleStone = stoneMat();
    // the castle is lit from below by warm floodlights, fading up its walls
    castleStone.onBeforeCompile = sh => {
        sh.uniforms.uUp = { value: new THREE.Color(1.0, 0.62, 0.32).multiplyScalar(0.32) };
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vWY;')
            .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWY = (modelMatrix * vec4(transformed, 1.0)).y;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vWY;\nuniform vec3 uUp;')
            .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += uUp * diffuseColor.rgb * (1.0 - smoothstep(1.5, 20.0, vWY));');
    };
    castleStone.customProgramCacheKey = () => 'castle-uplit';
    const roof = (name, hex) => { const s = stage.texture(name, () => T.shingles(hex)); return new THREE.MeshPhysicalMaterial({ map: s.map, normalMap: s.normalMap, roughness: 0.48, clearcoat: 0.4, clearcoatRoughness: 0.25 }); };
    const cob = T.cobbles(), grass = stage.texture('grass', () => T.grass()), win = stage.texture('window', () => T.windowTex());
    return {
        stone: stoneMat(), castleStone,
        roofPink: roof('shinglesPink', '#e2559a'), roofPurple: roof('shinglesPurple', '#7a4ae0'),
        cobbles: new THREE.MeshStandardMaterial({ map: cob.map, normalMap: cob.normalMap, roughness: 0.72, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }),
        grass: new THREE.MeshStandardMaterial({ map: grass.map, normalMap: grass.normalMap, roughness: 0.95, color: '#c8dcc0' }),
        carpet: new THREE.MeshPhysicalMaterial({ map: stage.texture('carpet', () => T.carpet()), roughness: 0.9, sheen: 0.7, sheenColor: '#c8204f', sheenRoughness: 0.5 }),
        window: new THREE.MeshBasicMaterial({ map: win, transparent: true, color: new THREE.Color(2.3, 1.85, 1.3) }),
        windowLit: new THREE.MeshBasicMaterial({ map: win, transparent: true, vertexColors: true, color: new THREE.Color(2.3, 1.85, 1.3) }),
        enamel: new THREE.MeshPhysicalMaterial({ color: '#2546c9', roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.06 }),
        enamelBright: new THREE.MeshPhysicalMaterial({ color: '#3a6bff', roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.05 }),
        lanternGlass: new THREE.MeshStandardMaterial({ color: '#ffcf80', emissive: '#ffae42', emissiveIntensity: 2.4, transparent: true, opacity: 0.88, roughness: 0.2 }),
        flame: new THREE.MeshBasicMaterial({ color: new THREE.Color(4.5, 2.8, 1.2) }),
        iron: new THREE.MeshStandardMaterial({ color: '#2c2840', metalness: 0.7, roughness: 0.42 }),
        pot: new THREE.MeshStandardMaterial({ color: '#f4eefc', roughness: 0.45 }),
        trunk: new THREE.MeshStandardMaterial({ color: '#5a3d2b', roughness: 0.9 }),
        leaf: new THREE.MeshStandardMaterial({ color: '#2f7040', roughness: 0.8, normalMap: grass.normalMap, normalScale: new THREE.Vector2(1.4, 1.4) }),
        hedge: new THREE.MeshStandardMaterial({ color: '#2a6338', roughness: 0.85, normalMap: grass.normalMap, normalScale: new THREE.Vector2(1.6, 1.6) }),
        tree: new THREE.MeshStandardMaterial({ color: '#2a5546', roughness: 0.9 }),
        pine: new THREE.MeshStandardMaterial({ color: '#1f463e', roughness: 0.9 }),
        flower: new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6, emissive: '#ffffff', emissiveIntensity: 0.08 }),
        pool: new THREE.MeshBasicMaterial({ map: T.glow(1.5), color: '#ffb35c', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true, opacity: 0.38 }),
        ...girlMaterials()
    };
}

// A soft vignette, drawn last in the scene itself (so the post passes never swap buffers and
// only the scene's buffer needs multisampling).
export function vignette(strength = 0.65) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
        transparent: true, depthTest: false, depthWrite: false,
        vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
        fragmentShader: `varying vec2 vUv; void main() { vec2 q = vUv - 0.5; float v = clamp(1.0 - dot(q, q) * 1.25, 0.0, 1.0);
            gl_FragColor = vec4(0.0, 0.0, 0.0, ${strength.toFixed(2)} * (1.0 - v)); }`
    }));
    m.frustumCulled = false;
    m.renderOrder = 999;
    return m;
}

// Builds the film's set on the stage and draws its first frame (so everything is uploaded).
export async function createFilm(stage) {
    const { renderer, bloom } = stage;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(col('#2b1c52'), 0.0042);
    const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.25, 2500);

    const mats = sceneMaterials(stage);
    const env = buildEnvironment(renderer);
    scene.environment = env.texture;
    scene.environmentIntensity = 0.42;

    const sky = buildSky(); scene.add(sky.group);
    const gate = buildGate(mats); scene.add(gate.group);
    const castle = buildCastle(mats); scene.add(castle.group);
    const grounds = buildGrounds(mats); scene.add(grounds.group);
    const fireworks = buildFireworks(); scene.add(fireworks.group); fireworks.group.name = 'fireworks';
    const motes = buildMotes(); scene.add(motes.group); motes.group.name = 'motes';
    const yoovy = buildGirl('yoovy', stage.faces.yoovy, mats), googy = buildGirl('googy', stage.faces.googy, mats);
    scene.add(yoovy.root, googy.root); yoovy.root.name = 'yoovy'; googy.root.name = 'googy';
    scene.add(vignette());
    const shower = buildShower(new THREE.Vector3(0, 0, -28.6), CHEER + 0.1); scene.add(shower.group); shower.group.name = 'shower';

    // lights: the moon, the night sky, a warm key on the sisters from the open gates, a warm rim
    // from the castle, a glow inside the gates as they open
    const hemi = new THREE.HemisphereLight(col('#5a6cc0'), col('#2a1838'), 0.35);
    const moon = new THREE.DirectionalLight(col('#b9c6ff'), 1.25);
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    moon.shadow.camera.left = -11; moon.shadow.camera.right = 11; moon.shadow.camera.top = 11; moon.shadow.camera.bottom = -11;
    moon.shadow.camera.near = 1; moon.shadow.camera.far = 140;
    moon.shadow.bias = -0.0004; moon.shadow.normalBias = 0.02; moon.shadow.radius = 3;
    const key = new THREE.SpotLight(col('#ffd6a0'), 0, 60, 0.34, 0.7, 1.2);
    key.position.set(4.5, 9.5, -14); key.target.position.set(0, 0.7, -29);
    const rim = new THREE.DirectionalLight(col('#ffb070'), 0);
    rim.position.set(0.5, 6, -40); rim.target.position.set(0, 0, -28);
    const inner = new THREE.PointLight(col('#ffc77a'), 0, 30, 1.6);
    inner.position.set(0, 3.2, -3.2);
    scene.add(hemi, moon, moon.target, key, key.target, rim, rim.target, inner);

    const V = new THREE.Vector3(), A = new THREE.Vector3(), F = new THREE.Vector3();
    const LX = new THREE.Vector3(0, 1, 0).cross(MOON_DIR).normalize(), LY = MOON_DIR.clone().cross(LX);

    const draw = (t) => {
        const px = stage.px;
        renderer.shadowMap.autoUpdate = true;
        // the camera, framed for any screen: on narrow screens it sees less of the sides
        CAM.at(t, V); AIM.at(t, A);
        const fov = FOV.at(t), a = camera.aspect;
        const hHalf = Math.tan(fov * Math.PI / 360) * 16 / 9;
        const keep = a >= 16 / 9 ? 1 : 0.5 + 0.5 * smooth(0.45, 16 / 9, a);
        let vHalf = Math.max(Math.tan(fov * Math.PI / 360), Math.min(hHalf * keep / a, Math.tan(28 * Math.PI / 180)));
        camera.fov = Math.atan(vHalf) * 360 / Math.PI;
        camera.position.copy(V);
        camera.lookAt(A);
        camera.updateProjectionMatrix();

        sky.update(t, camera, px);
        gate.update(t);
        castle.update(t);
        grounds.update(t);
        motes.update(t, px);
        shower.update(t);
        const fl = fireworks.update(t, px);
        sky.uniforms.uFlash.value = fl.flash * 0.18;
        sky.uniforms.uFlashColor.value.copy(fl.color);
        yoovy.update(t, girlState('yoovy', t));
        googy.update(t, girlState('googy', t));
        // lights through the film
        const open = smooth(GATE_OPEN[0], GATE_OPEN[0] + 0.8, t);
        const flood = window4(t, GATE_OPEN[0], GATE_OPEN[0] + 0.45, GATE_OPEN[0] + 0.7, GATE_OPEN[0] + 1.3);
        inner.intensity = flood * 40 + open * 6;
        key.intensity = open * 30;
        rim.intensity = open * 2.2;
        hemi.intensity = 0.35 + fl.flash * 0.25;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0 + flood * 0.12;
        // the moon's shadows follow the action: the gate, then the sisters; they glide across
        // and move in whole shadow-map texels, so the edges don't crawl as the sisters walk
        F.copy(yoovy.root.position).x += 0.27;
        F.multiplyScalar(smooth(3.4, 4.6, t));
        const step = 22 / moon.shadow.mapSize.x;
        const lx = Math.round(F.dot(LX) / step) * step, ly = Math.round(F.dot(LY) / step) * step, lz = F.dot(MOON_DIR);
        const focus = F.set(0, 0, 0).addScaledVector(LX, lx).addScaledVector(LY, ly).addScaledVector(MOON_DIR, lz);
        moon.target.position.copy(focus);
        moon.position.copy(focus).addScaledVector(MOON_DIR, 70);
        bloom.threshold = 1.0; bloom.radius = 0.5;
        bloom.strength = 0.6 + flood * 0.25;
        stage.render();
    };

    const film = {
        scene, camera,
        onTier(Tq) {
            if (Tq.shadow) moon.shadow.mapSize.set(Tq.shadow, Tq.shadow);
            moon.castShadow = !!Tq.shadow;
        },
        onResize(aspect) { camera.aspect = aspect; },
        draw,

        // Runs the film in the container from its start; onTime(t) each frame. Returns { stop() }.
        play(container, { onTime } = {}) {
            stage.use(film);
            container.appendChild(stage.canvas);
            let raf = 0, stopped = false, t0 = 0, slow = 0, frames = 0, last = 0, shown = 0;
            // a canvas is emptied whenever it is resized, so it is only resized when the size really
            // changes, and the frame is drawn again straight away (else a blank frame flashes)
            const fit = () => {
                const w = container.clientWidth || innerWidth, h = container.clientHeight || innerHeight;
                if (stage.canvas.width === Math.floor(w * renderer.getPixelRatio()) && stage.canvas.height === Math.floor(h * renderer.getPixelRatio())) return;
                stage.resize(w, h);
                draw(shown);
            };
            fit();
            draw(0);   // the opening frame is up before the first animation frame comes
            window.addEventListener('resize', fit);
            const frame = (now) => {
                if (stopped) return;
                if (!t0) t0 = now;
                const t = (now - t0) / 1000;
                shown = Math.min(t, LENGTH);
                draw(shown);
                if (onTime) onTime(t);
                // too slow for this device? draw fewer pixels. Judged only after the start-up hiccups
                // and over a good stretch, and the frame is drawn again at once: resizing the canvas
                // empties it, and an empty frame on screen is a flash.
                if (last && t > 0.8) { frames++; if (now - last > 45) slow++; }
                last = now;
                if (frames === 30) {
                    if (slow > 20 && stage.tier > 0) { stage.setTier(stage.tier - 1); draw(shown); }
                    frames = slow = 0;
                }
                raf = requestAnimationFrame(frame);
            };
            raf = requestAnimationFrame(frame);
            return {
                stop() { stopped = true; cancelAnimationFrame(raf); window.removeEventListener('resize', fit); },
                // the frame on show now, as a picture (the stage's canvas can then go to the map)
                still() {
                    draw(shown);
                    const c = document.createElement('canvas');
                    c.width = stage.canvas.width; c.height = stage.canvas.height;
                    c.getContext('2d').drawImage(stage.canvas, 0, 0);
                    return c;
                }
            };
        },

        // Measures a few frames at the screen's size and steps down the quality until they are quick
        // enough; false if even the simplest is too slow here (then the drawn intro plays instead).
        fits() {
            stage.use(film);
            const gl = renderer.getContext(), px = new Uint8Array(4);
            const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
            for (let tier = stage.tier; tier >= 0; tier--) {
                stage.setTier(tier);
                draw(10.8); sync();   // the first frame at this size sets things up; not counted
                const t0 = performance.now();
                draw(6.3); sync(); draw(11.4); sync();
                const ms = (performance.now() - t0) / 2;
                if (ms < (tier ? 24 : 42)) return true;
            }
            return false;
        },

        // Draws the frame at time t (for recording the film frame by frame).
        renderAt(t, w, h) {
            stage.use(film);
            if (w && h) stage.resize(w, h);
            draw(t);
        },

        // Lets the set go (the stage stays, for the map).
        release() {
            releaseScene(stage, scene);
            if (moon.shadow.map) { moon.shadow.map.dispose(); moon.shadow.map = null; }
        }
    };

    stage.use(film);
    draw(0);   // first upload of everything
    if (renderer.compileAsync) await renderer.compileAsync(scene, camera);
    return film;
}
