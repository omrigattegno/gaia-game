// The stage: one WebGL renderer, its post effects (bloom) and quality levels, shared by the
// shows that play on it one at a time: the royal intro (film.js) and the kingdom map (world/).
// A show is { scene, camera, onTier(tier), onResize(aspect) }.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import * as T from './textures.js';
import { makeMaterials, M } from './geo.js';

// tiers: pixel ratio cap, MSAA samples, shadow map size (0 = none; each show uses it its own way), bloom
export const TIERS = [
    { pr: 1, msaa: 2, shadow: 0, bloom: true },
    { pr: 1.5, msaa: 4, shadow: 1024, bloom: true },
    { pr: 2, msaa: 4, shadow: 2048, bloom: true }
];

// A simple face, if the game's drawings are not given.
function fallbackFaces() {
    const draw = (closed, laugh) => {
        const c = document.createElement('canvas'); c.width = c.height = 256;
        const x = c.getContext('2d');
        x.fillStyle = '#1c3c78'; x.strokeStyle = '#1c3c78'; x.lineWidth = 7; x.lineCap = 'round';
        for (const ex of [88, 168]) {
            if (closed || laugh) { x.beginPath(); x.arc(ex, laugh ? 148 : 136, 16, laugh ? Math.PI * 1.15 : 0.15, laugh ? Math.PI * 1.85 : Math.PI - 0.15, false); x.stroke(); }
            else { x.beginPath(); x.ellipse(ex, 140, 15, 19, 0, 0, Math.PI * 2); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(ex + 5, 132, 5, 0, 7); x.fill(); x.fillStyle = '#1c3c78'; }
        }
        x.strokeStyle = '#c93d66'; x.beginPath(); x.arc(128, 172, laugh ? 24 : 18, 0.2, Math.PI - 0.2); x.stroke();
        const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    };
    return { open: draw(false, false), blink: draw(true, false), laugh: draw(false, true) };
}

// The sisters' faces: the game's own drawings (SVG), one texture per expression.
async function faceTextures(svgs) {
    if (!svgs) return fallbackFaces();
    const out = {};
    for (const k of Object.keys(svgs)) {
        const t = await T.fromSVG(svgs[k], 512);
        t.premultiplyAlpha = true;
        out[k] = t;
    }
    return out;
}

export async function createStage(opts = {}) {
    const canvas = document.createElement('canvas');
    canvas.className = 'k3d-canvas';
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance' });
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    T.setAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()));

    makeMaterials();
    M.goldDouble = M.gold.clone(); M.goldDouble.side = THREE.DoubleSide;
    const faces = await Promise.all([faceTextures(opts.faces && opts.faces.yoovy), faceTextures(opts.faces && opts.faces.googy)]);

    const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType }));
    const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    composer.addPass(renderPass);
    const bloom = new UnrealBloomPass(new THREE.Vector2(16, 16), 0.6, 0.5, 1.0);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // textures painted once and used by more than one show (each show's own are let go with it)
    const shared = new Map();
    let px = 1, tier = 2, W = 0, H = 0, show = null;
    const stage = {
        canvas, renderer, composer, bloom,
        faces: { yoovy: faces[0], googy: faces[1] },
        get px() { return px; }, get tier() { return tier; }, get show() { return show; },
        get width() { return W; }, get height() { return H; },
        texture(name, make) {
            if (!shared.has(name)) shared.set(name, make());
            return shared.get(name);
        },
        isShared(tex) {
            for (const v of shared.values()) if (v === tex || (v && (v.map === tex || v.normalMap === tex))) return true;
            for (const f of faces) for (const k in f) if (f[k] === tex) return true;
            return false;
        },
        setTier(n) {
            tier = n;
            const Tq = TIERS[n];
            px = Math.min(window.devicePixelRatio || 1, Tq.pr);
            composer.renderTarget1.samples = Tq.msaa;   // the scene renders here; the second buffer is never used
            composer.renderTarget2.samples = 0;
            composer.renderTarget1.dispose(); composer.renderTarget2.dispose();
            renderer.setPixelRatio(px); composer.setPixelRatio(px);
            bloom.enabled = Tq.bloom;
            if (show && show.onTier) show.onTier(Tq);
            if (W) { renderer.setSize(W, H, false); composer.setSize(W, H); }
        },
        resize(w, h) {
            W = Math.max(2, w | 0); H = Math.max(2, h | 0);
            renderer.setSize(W, H, false);
            composer.setSize(W, H);
            if (show && show.onResize) show.onResize(W / H);
        },
        // puts a show on: the post effects draw its scene through its camera
        use(s) {
            show = s;
            renderPass.scene = s.scene; renderPass.camera = s.camera;
            if (s.onTier) s.onTier(TIERS[tier]);
            if (W && s.onResize) s.onResize(W / H);
        },
        render() { composer.render(); },
        dispose() {
            for (const v of shared.values()) for (const t of [v, v && v.map, v && v.normalMap]) if (t && t.isTexture) t.dispose();
            for (const f of faces) for (const k in f) f[k].dispose();
            shared.clear();
            if (composer.dispose) composer.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            canvas.remove();
        }
    };
    stage.resize(opts.width || 640, opts.height || 360);
    stage.setTier(opts.tier ?? 2);
    return stage;
}

// Lets go of everything a show's scene holds, except what the stage shares between shows.
export function releaseScene(stage, scene) {
    const KEPT = Object.values(M);
    scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
        for (const m of ms) {
            if (KEPT.includes(m)) continue;   // the gold and the gems serve every show
            for (const k in m) if (m[k] && m[k].isTexture && !stage.isShared(m[k])) m[k].dispose();
            m.dispose();
        }
    });
    if (scene.environment && scene.environment.dispose) scene.environment.dispose();
}
