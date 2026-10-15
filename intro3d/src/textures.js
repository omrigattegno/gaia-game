// Textures painted on canvases at start-up (no image files to download): stone, roof tiles,
// cobbles, grass, the carpet, banners, glows and sparkles, windows, the moon and petals.
import * as THREE from 'three';
import { rng } from './util.js';

let maxAniso = 1;
export const setAnisotropy = n => { maxAniso = n; };

function canvas(w, h = w) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return [c, c.getContext('2d')];
}
function tex(c, { srgb = true, repeat = false } = {}) {
    const t = new THREE.CanvasTexture(c);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = maxAniso;
    return t;
}

// A normal map from a height map painted in grey (white = high), wrapping at the edges.
function normalFrom(hc, strength = 2) {
    const w = hc.width, h = hc.height;
    const src = hc.getContext('2d').getImageData(0, 0, w, h).data;
    const [nc, nx] = canvas(w, h);
    const out = nx.createImageData(w, h), d = out.data;
    const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const dx = (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1));
            const dy = (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1));
            let vx = -dx * strength, vy = dy * strength, vz = 1;
            const l = Math.hypot(vx, vy, vz);
            const i = (y * w + x) * 4;
            d[i] = (vx / l * 0.5 + 0.5) * 255; d[i + 1] = (vy / l * 0.5 + 0.5) * 255; d[i + 2] = (vz / l * 0.5 + 0.5) * 255; d[i + 3] = 255;
        }
    }
    nx.putImageData(out, 0, 0);
    return tex(nc, { srgb: false, repeat: true });
}

function speckle(ctx, w, h, n, r, alpha, seed, colors) {
    const R = rng(seed);
    for (let i = 0; i < n; i++) {
        ctx.globalAlpha = alpha * (0.4 + R() * 0.6);
        ctx.fillStyle = colors[Math.floor(R() * colors.length)];
        ctx.beginPath(); ctx.arc(R() * w, R() * h, r * (0.3 + R()), 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
}

// Pale castle stone: rows of blocks, each a little different, with soft mortar lines.
export function stone({ base = [236, 228, 250], seed = 7 } = {}) {
    const S = 512, rows = 8, R = rng(seed);
    const [c, x] = canvas(S), [hc, hx] = canvas(S);
    x.fillStyle = `rgb(${base.map(v => v - 34).join(',')})`; x.fillRect(0, 0, S, S);
    hx.fillStyle = '#000'; hx.fillRect(0, 0, S, S);
    const rh = S / rows;
    for (let r = 0; r < rows; r++) {
        const cols = 4, bw = S / cols, off = (r % 2) * bw / 2;
        for (let k = -1; k < cols; k++) {
            const bx = k * bw + off + 3, by = r * rh + 3, w = bw - 6, h = rh - 6;
            const v = (R() - 0.5) * 26, tint = R() < 0.18 ? [-6, -10, 4] : [0, 0, 0];
            const g = x.createLinearGradient(bx, by, bx + w * 0.3, by + h);
            g.addColorStop(0, `rgb(${base.map((b, i) => Math.round(b + v + 8 + tint[i])).join(',')})`);
            g.addColorStop(1, `rgb(${base.map((b, i) => Math.round(b + v - 10 + tint[i])).join(',')})`);
            x.fillStyle = g;
            roundRect(x, bx, by, w, h, 7); x.fill();
            const hg = hx.createRadialGradient(bx + w / 2, by + h / 2, 4, bx + w / 2, by + h / 2, w * 0.62);
            hg.addColorStop(0, '#fff'); hg.addColorStop(1, '#9a9a9a');
            hx.fillStyle = hg; roundRect(hx, bx, by, w, h, 9); hx.fill();
        }
    }
    speckle(x, S, S, 2600, 1.6, 0.16, seed + 1, ['#8a7aa8', '#ffffff', '#6d5f8a']);
    speckle(hx, S, S, 2600, 1.4, 0.25, seed + 2, ['#000', '#fff']);
    return { map: tex(c, { repeat: true }), normalMap: normalFrom(hc, 2.2) };
}

function roundRect(x, l, t, w, h, r) {
    x.beginPath();
    x.moveTo(l + r, t); x.arcTo(l + w, t, l + w, t + h, r); x.arcTo(l + w, t + h, l, t + h, r);
    x.arcTo(l, t + h, l, t, r); x.arcTo(l, t, l + w, t, r); x.closePath();
}

// Fish-scale roof tiles in one colour, lighter at the top of each tile.
export function shingles(hex, seed = 3) {
    const S = 512, cols = 8, rows = 10, R = rng(seed);
    const [c, x] = canvas(S), [hc, hx] = canvas(S);
    const base = new THREE.Color(hex);
    x.fillStyle = '#' + base.clone().multiplyScalar(0.55).getHexString(); x.fillRect(0, 0, S, S);
    hx.fillStyle = '#000'; hx.fillRect(0, 0, S, S);
    const tw = S / cols, th = S / rows;
    for (let r = -1; r <= rows; r++) {
        for (let k = -1; k <= cols; k++) {
            const cx = k * tw + (r % 2 ? tw / 2 : 0) + tw / 2, top = r * th;
            const shade = 0.85 + R() * 0.3;
            const g = x.createLinearGradient(0, top, 0, top + th * 1.6);
            g.addColorStop(0, '#' + base.clone().multiplyScalar(1.15 * shade).getHexString());
            g.addColorStop(0.7, '#' + base.clone().multiplyScalar(0.95 * shade).getHexString());
            g.addColorStop(1, '#' + base.clone().multiplyScalar(0.62 * shade).getHexString());
            const scale = (ctx) => {
                ctx.beginPath();
                ctx.moveTo(cx - tw / 2, top);
                ctx.lineTo(cx - tw / 2, top + th * 0.9);
                ctx.quadraticCurveTo(cx - tw / 2, top + th * 1.6, cx, top + th * 1.62);
                ctx.quadraticCurveTo(cx + tw / 2, top + th * 1.6, cx + tw / 2, top + th * 0.9);
                ctx.lineTo(cx + tw / 2, top); ctx.closePath();
            };
            x.fillStyle = g; scale(x); x.fill();
            x.strokeStyle = 'rgba(0,0,0,0.25)'; x.lineWidth = 2; scale(x); x.stroke();
            const hg = hx.createLinearGradient(0, top, 0, top + th * 1.6);
            hg.addColorStop(0, '#666'); hg.addColorStop(1, '#fff');
            hx.fillStyle = hg; scale(hx); hx.fill();
        }
    }
    return { map: tex(c, { repeat: true }), normalMap: normalFrom(hc, 1.6) };
}

// Rounded cobbles for the square in front of the gates.
export function cobbles(seed = 11) {
    const S = 512, R = rng(seed);
    const [c, x] = canvas(S), [hc, hx] = canvas(S);
    x.fillStyle = '#4a4560'; x.fillRect(0, 0, S, S);
    hx.fillStyle = '#000'; hx.fillRect(0, 0, S, S);
    const n = 9, cw = S / n;
    for (let r = 0; r < n; r++) {
        for (let k = -1; k <= n; k++) {
            const w = cw * (0.78 + R() * 0.14), h = cw * (0.72 + R() * 0.14);
            const cx = k * cw + (r % 2) * cw / 2 + cw / 2 + (R() - 0.5) * 6, cy = r * cw + cw / 2 + (R() - 0.5) * 6;
            const v = 150 + R() * 50;
            const g = x.createRadialGradient(cx - w * 0.15, cy - h * 0.2, 2, cx, cy, w * 0.6);
            g.addColorStop(0, `rgb(${v + 12},${v + 6},${v + 30})`); g.addColorStop(1, `rgb(${v - 40},${v - 44},${v - 20})`);
            x.fillStyle = g; roundRect(x, cx - w / 2, cy - h / 2, w, h, 14); x.fill();
            const hg = hx.createRadialGradient(cx, cy, 2, cx, cy, w * 0.6);
            hg.addColorStop(0, '#fff'); hg.addColorStop(1, '#555');
            hx.fillStyle = hg; roundRect(hx, cx - w / 2, cy - h / 2, w, h, 14); hx.fill();
        }
    }
    speckle(x, S, S, 1600, 1.4, 0.18, seed + 3, ['#000', '#fff']);
    return { map: tex(c, { repeat: true }), normalMap: normalFrom(hc, 2.5) };
}

// Soft grass: blotches of greens with fine blades.
export function grass(seed = 5) {
    const S = 512, R = rng(seed);
    const [c, x] = canvas(S), [hc, hx] = canvas(S);
    x.fillStyle = '#3c7a3a'; x.fillRect(0, 0, S, S);
    hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
    for (let i = 0; i < 260; i++) {
        const px = R() * S, py = R() * S, r = 20 + R() * 60;
        const g = x.createRadialGradient(px, py, 0, px, py, r);
        const tone = R() < 0.5 ? '70,140,62' : '42,98,52';
        g.addColorStop(0, `rgba(${tone},0.35)`); g.addColorStop(1, `rgba(${tone},0)`);
        x.fillStyle = g;
        for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { x.save(); x.translate(ox, oy); x.fillRect(px - r, py - r, r * 2, r * 2); x.restore(); }
    }
    x.lineCap = 'round';
    for (let i = 0; i < 9000; i++) {
        const px = R() * S, py = R() * S, l = 3 + R() * 6, a = -Math.PI / 2 + (R() - 0.5) * 0.9;
        const light = R();
        x.strokeStyle = light < 0.5 ? `rgba(120,190,100,${0.25 + R() * 0.3})` : `rgba(20,60,30,${0.2 + R() * 0.3})`;
        x.lineWidth = 1 + R();
        x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke();
        hx.strokeStyle = light < 0.5 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
        hx.lineWidth = 1.5; hx.beginPath(); hx.moveTo(px, py); hx.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); hx.stroke();
    }
    return { map: tex(c, { repeat: true }), normalMap: normalFrom(hc, 1.2) };
}

// The red carpet's weave: a soft diamond pattern.
export function carpet() {
    const S = 256;
    const [c, x] = canvas(S);
    x.fillStyle = '#a3103d'; x.fillRect(0, 0, S, S);
    x.strokeStyle = 'rgba(255,170,200,0.22)'; x.lineWidth = 3;
    for (let i = -S; i <= S * 2; i += 64) {
        x.beginPath(); x.moveTo(i, 0); x.lineTo(i + S, S); x.stroke();
        x.beginPath(); x.moveTo(i, S); x.lineTo(i + S, 0); x.stroke();
    }
    x.fillStyle = 'rgba(255,215,120,0.35)';
    for (let yy = 0; yy <= S; yy += 64) for (let xx = 0; xx <= S; xx += 64) {
        x.beginPath(); x.arc(xx, yy, 4, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.arc(xx + 32, yy + 32, 3, 0, Math.PI * 2); x.fill();
    }
    return tex(c, { repeat: true });
}

// A soft round glow (white, so materials tint it).
export function glow(power = 2) {
    const S = 128;
    const [c, x] = canvas(S);
    const img = x.createImageData(S, S), d = img.data;
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
        const r = Math.hypot(i - S / 2 + 0.5, j - S / 2 + 0.5) / (S / 2);
        const a = Math.pow(Math.max(0, 1 - r), power);
        const k = (j * S + i) * 4;
        d[k] = d[k + 1] = d[k + 2] = 255; d[k + 3] = a * 255;
    }
    x.putImageData(img, 0, 0);
    return tex(c, { srgb: false });
}

// A four-pointed sparkle with a soft core.
export function sparkle() {
    const S = 128;
    const [c, x] = canvas(S);
    x.translate(S / 2, S / 2);
    const g = x.createRadialGradient(0, 0, 0, 0, 0, S / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.18, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(-S / 2, -S / 2, S, S);
    x.fillStyle = '#fff';
    for (let k = 0; k < 2; k++) {
        x.save(); x.rotate(k * Math.PI / 2);
        x.beginPath(); x.moveTo(0, -S / 2); x.quadraticCurveTo(3, -3, S / 2, 0); x.quadraticCurveTo(3, 3, 0, S / 2);
        x.quadraticCurveTo(-3, 3, -S / 2, 0); x.quadraticCurveTo(-3, -3, 0, -S / 2); x.fill();
        x.restore();
    }
    return tex(c, { srgb: false });
}

// A glowing arched window with a cross of dark mullions (alpha outside the arch).
export function windowTex() {
    const W = 64, H = 128;
    const [c, x] = canvas(W, H);
    const arch = () => { x.beginPath(); x.moveTo(4, H - 2); x.lineTo(4, W / 2); x.arc(W / 2, W / 2, W / 2 - 4, Math.PI, 0); x.lineTo(W - 4, H - 2); x.closePath(); };
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#fff3c4'); g.addColorStop(0.6, '#ffc65a'); g.addColorStop(1, '#ff9a3c');
    x.fillStyle = g; arch(); x.fill();
    x.strokeStyle = '#5a3a1c'; x.lineWidth = 5; arch(); x.stroke();
    x.lineWidth = 4; x.beginPath(); x.moveTo(W / 2, 6); x.lineTo(W / 2, H - 2); x.moveTo(4, H * 0.55); x.lineTo(W - 4, H * 0.55); x.stroke();
    return tex(c);
}

// The moon: a pale disc with soft seas.
export function moon() {
    const S = 256, R = rng(21);
    const [c, x] = canvas(S);
    const g = x.createRadialGradient(S * 0.45, S * 0.42, 0, S / 2, S / 2, S / 2);
    g.addColorStop(0, '#fffdf2'); g.addColorStop(0.85, '#f3ecd6'); g.addColorStop(1, 'rgba(243,236,214,0)');
    x.fillStyle = g; x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); x.fill();
    x.save(); x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 4, 0, Math.PI * 2); x.clip();
    for (let i = 0; i < 14; i++) {
        const px = S * (0.2 + R() * 0.6), py = S * (0.2 + R() * 0.6), r = S * (0.04 + R() * 0.12);
        const s = x.createRadialGradient(px, py, 0, px, py, r);
        s.addColorStop(0, 'rgba(190,180,170,0.45)'); s.addColorStop(1, 'rgba(190,180,170,0)');
        x.fillStyle = s; x.fillRect(px - r, py - r, r * 2, r * 2);
    }
    x.restore();
    return tex(c);
}

// A banner: royal purple with a gold border, a gold crown and a heart, a swallow-tail end.
export function banner(fabric = '#5b2fb0', accent = '#ff7eb3') {
    const W = 256, H = 640;
    const [c, x] = canvas(W, H);
    const shape = () => { x.beginPath(); x.moveTo(0, 0); x.lineTo(W, 0); x.lineTo(W, H); x.lineTo(W / 2, H - 110); x.lineTo(0, H); x.closePath(); };
    const g = x.createLinearGradient(0, 0, W, 0);
    const f = new THREE.Color(fabric);
    g.addColorStop(0, '#' + f.clone().multiplyScalar(0.7).getHexString()); g.addColorStop(0.5, fabric); g.addColorStop(1, '#' + f.clone().multiplyScalar(0.7).getHexString());
    x.fillStyle = g; shape(); x.fill();
    x.save(); shape(); x.clip();
    x.strokeStyle = '#f6c548'; x.lineWidth = 22; shape(); x.stroke();
    x.strokeStyle = '#fff0b0'; x.lineWidth = 4;
    x.beginPath(); x.moveTo(24, 24); x.lineTo(W - 24, 24); x.lineTo(W - 24, H - 40); x.lineTo(W / 2, H - 140); x.lineTo(24, H - 40); x.closePath(); x.stroke();
    x.restore();
    // the crown
    x.save(); x.translate(W / 2, 200);
    x.fillStyle = '#f6c548'; x.strokeStyle = '#a8740f'; x.lineWidth = 5; x.lineJoin = 'round';
    x.beginPath(); x.moveTo(-70, 40); x.lineTo(-80, -40); x.lineTo(-40, -5); x.lineTo(0, -60); x.lineTo(40, -5); x.lineTo(80, -40); x.lineTo(70, 40); x.closePath();
    x.fill(); x.stroke();
    x.fillStyle = '#fff6d0'; for (const [px, py] of [[-80, -40], [0, -60], [80, -40]]) { x.beginPath(); x.arc(px, py, 9, 0, Math.PI * 2); x.fill(); }
    x.fillStyle = '#e53950'; x.beginPath(); x.arc(0, 12, 11, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#4fa8ff'; x.beginPath(); x.arc(-40, 18, 8, 0, Math.PI * 2); x.arc(40, 18, 8, 0, Math.PI * 2); x.fill();
    x.restore();
    // a heart below
    x.save(); x.translate(W / 2, 340); x.fillStyle = accent; x.strokeStyle = '#fff0b0'; x.lineWidth = 5;
    x.beginPath(); x.moveTo(0, 50); x.bezierCurveTo(-90, -10, -40, -70, 0, -25); x.bezierCurveTo(40, -70, 90, -10, 0, 50); x.fill(); x.stroke();
    x.restore();
    return tex(c);
}

// A rose petal (alpha), for the shower at the end.
export function petal() {
    const S = 64;
    const [c, x] = canvas(S);
    const g = x.createRadialGradient(S * 0.5, S * 0.7, 2, S * 0.5, S * 0.5, S * 0.55);
    g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#d8d8d8');
    x.fillStyle = g;
    x.beginPath(); x.moveTo(S / 2, S - 4);
    x.bezierCurveTo(4, S * 0.6, 8, 6, S / 2, 10); x.bezierCurveTo(S - 8, 6, S - 4, S * 0.6, S / 2, S - 4); x.fill();
    return tex(c, { srgb: false });
}

// A soft vertical beam of light (for the rays through the open gates).
export function beam() {
    const W = 64, H = 256;
    const [c, x] = canvas(W, H);
    const img = x.createImageData(W, H), d = img.data;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
        const u = Math.abs(i / (W - 1) - 0.5) * 2, v = j / (H - 1);
        const a = Math.pow(1 - u, 2.2) * Math.pow(1 - v, 1.4) * Math.min(1, v * 8);
        const k = (j * W + i) * 4;
        d[k] = d[k + 1] = d[k + 2] = 255; d[k + 3] = a * 255;
    }
    x.putImageData(img, 0, 0);
    return tex(c, { srgb: false });
}

// Ermine: white fur with soft streaks.
export function fur() {
    const S = 128, R = rng(31);
    const [c, x] = canvas(S);
    x.fillStyle = '#f4f1ff'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 900; i++) {
        x.strokeStyle = R() < 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(190,185,215,0.5)';
        const px = R() * S, py = R() * S;
        x.lineWidth = 1; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (R() - 0.5) * 4, py + 4 + R() * 5); x.stroke();
    }
    return tex(c, { repeat: true });
}

// An SVG drawing (a face) turned into a texture; resolves when drawn.
export function fromSVG(svg, size = 512) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const [c, x] = canvas(size);
            x.drawImage(img, 0, 0, size, size);
            const t = tex(c);
            resolve(t);
        };
        img.onerror = reject;
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
}

// Rays of light from a centre (for the light bursting through the gates).
export function rays(seed = 9) {
    const S = 512, R = rng(seed);
    const [c, x] = canvas(S);
    x.translate(S / 2, S / 2);
    x.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 46; i++) {
        const a = R() * Math.PI * 2, w = 0.012 + R() * 0.05, l = S * (0.3 + R() * 0.2);
        const g = x.createLinearGradient(0, 0, Math.cos(a) * l, Math.sin(a) * l);
        g.addColorStop(0, `rgba(255,255,255,${0.25 + R() * 0.35})`); g.addColorStop(1, 'rgba(255,255,255,0)');
        x.fillStyle = g;
        x.beginPath(); x.moveTo(0, 0);
        x.lineTo(Math.cos(a - w) * l, Math.sin(a - w) * l); x.lineTo(Math.cos(a + w) * l, Math.sin(a + w) * l); x.closePath(); x.fill();
    }
    return tex(c, { srgb: false });
}
