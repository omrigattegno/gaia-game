// Geometry helpers: tubes along paths, spirals, extruded silhouettes, tapered locks of hair,
// and a few shared materials.
import * as THREE from 'three';

// A tube along points (in 3D), smooth (Catmull-Rom) or straight segments.
export function tube(points, radius, { closed = false, smooth = true, seg, radial = 10 } = {}) {
    const pts = points.map(p => p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2] || 0));
    let curve;
    if (smooth) curve = new THREE.CatmullRomCurve3(pts, closed, 'centripetal');
    else {
        curve = new THREE.CurvePath();
        for (let i = 0; i < pts.length - 1; i++) curve.add(new THREE.LineCurve3(pts[i], pts[i + 1]));
        if (closed) curve.add(new THREE.LineCurve3(pts[pts.length - 1], pts[0]));
    }
    const g = new THREE.TubeGeometry(curve, seg || Math.max(8, pts.length * 8), radius, radial, closed);
    return g;
}

// Points along a 2D arc (in the xy plane at depth z).
export function arc(cx, cy, r, a0, a1, n = 24, z = 0) {
    const out = [];
    for (let i = 0; i <= n; i++) {
        const a = a0 + (a1 - a0) * i / n;
        out.push(new THREE.Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z));
    }
    return out;
}

// A spiral scroll (filigree): from the outer end, winding in.
export function spiral(cx, cy, r, turns, start, dir = 1, z = 0, n = 40) {
    const out = [];
    for (let i = 0; i <= n; i++) {
        const k = i / n, a = start + dir * k * turns * Math.PI * 2, rr = r * Math.pow(1 - k * 0.82, 1.15);
        out.push(new THREE.Vector3(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, z));
    }
    return out;
}

// An extruded 2D silhouette (points in xy), with soft bevelled edges.
export function slab(points, depth, bevel = 0.02, curveSegments = 12) {
    const s = new THREE.Shape(points.map(p => new THREE.Vector2(p[0], p[1])));
    return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments });
}
export function slabShape(shape, depth, bevel = 0.02, curveSegments = 16) {
    return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments });
}

// A heart in the xy plane (size = width), point down, centred.
export function heartShape(size) {
    const s = new THREE.Shape(), k = size / 2;
    s.moveTo(0, -0.95 * k);
    s.bezierCurveTo(-1.05 * k, -0.15 * k, -0.95 * k, 0.85 * k, -0.42 * k, 0.85 * k);
    s.bezierCurveTo(-0.18 * k, 0.85 * k, -0.02 * k, 0.65 * k, 0, 0.5 * k);
    s.bezierCurveTo(0.02 * k, 0.65 * k, 0.18 * k, 0.85 * k, 0.42 * k, 0.85 * k);
    s.bezierCurveTo(0.95 * k, 0.85 * k, 1.05 * k, -0.15 * k, 0, -0.95 * k);
    return s;
}

// A five-pointed star in the xy plane.
export function starShape(r, inner = 0.45) {
    const pts = [];
    for (let i = 0; i < 10; i++) {
        const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * inner : r;
        pts.push(new THREE.Vector2(Math.cos(a) * rr, Math.sin(a) * rr));
    }
    return new THREE.Shape(pts);
}

// A crown silhouette (flat), base at y=0: five points with round tips.
export function crownShape(w, h) {
    const s = new THREE.Shape(), k = w / 2;
    s.moveTo(-k, 0);
    s.lineTo(-k * 1.08, h);
    s.lineTo(-k * 0.5, h * 0.52);
    s.lineTo(0, h * 1.2);
    s.lineTo(k * 0.5, h * 0.52);
    s.lineTo(k * 1.08, h);
    s.lineTo(k, 0);
    s.closePath();
    return s;
}

// A lock of hair: a tube along a curve whose width tapers to a soft point, flattened against
// the head (its flat side faces away from `center`). uv: u around, v along (for the shine).
export function lock(points, r0, r1, { flat = 0.55, center = new THREE.Vector3(), seg = 28, radial = 8, tipRound = 0.18, rootRound = 0.12 } = {}) {
    const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
    const pos = [], uv = [], idx = [];
    const P = new THREE.Vector3(), Tn = new THREE.Vector3(), out = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3();
    for (let i = 0; i <= seg; i++) {
        const k = i / seg;
        curve.getPointAt(k, P);
        curve.getTangentAt(k, Tn);
        out.subVectors(P, center);
        N.copy(out).addScaledVector(Tn, -out.dot(Tn)).normalize();   // away from the head
        B.crossVectors(Tn, N).normalize();
        let r = r0 + (r1 - r0) * k;
        if (k > 1 - tipRound) r *= Math.sqrt(Math.max(0, 1 - Math.pow((k - (1 - tipRound)) / tipRound, 2)));
        if (k < rootRound) r *= 0.55 + 0.45 * Math.sin(k / rootRound * Math.PI / 2);
        r = Math.max(r, 0.0005);
        for (let j = 0; j <= radial; j++) {
            const a = j / radial * Math.PI * 2;
            pos.push(P.x + (Math.cos(a) * B.x * r + Math.sin(a) * N.x * r * flat),
                     P.y + (Math.cos(a) * B.y * r + Math.sin(a) * N.y * r * flat),
                     P.z + (Math.cos(a) * B.z * r + Math.sin(a) * N.z * r * flat));
            uv.push(j / radial, k);
        }
    }
    for (let i = 0; i < seg; i++) for (let j = 0; j < radial; j++) {
        const a = i * (radial + 1) + j, b = a + radial + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
}

// Scales a geometry's uv (so one tiling texture keeps the same size on every piece).
export function scaleUV(g, su, sv = su) {
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
    return g;
}

// Planar uv from x,y (in units of `size`), for extruded pieces.
export function planarUV(g, size = 1, ox = 0, oy = 0) {
    const p = g.attributes.position, uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) { uv[i * 2] = (p.getX(i) - ox) / size; uv[i * 2 + 1] = (p.getY(i) - oy) / size; }
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    return g;
}

export const M = {};
export function makeMaterials() {
    M.gold = new THREE.MeshStandardMaterial({ color: '#ffcf6a', metalness: 1, roughness: 0.24 });
    M.goldDeep = new THREE.MeshStandardMaterial({ color: '#f0b445', metalness: 1, roughness: 0.32 });
    M.ruby = gem('#ff2d55');
    M.sapphire = gem('#3d8bff');
    M.emerald = gem('#2fe08a');
    M.pearl = new THREE.MeshPhysicalMaterial({ color: '#fff3ea', roughness: 0.35, sheen: 1, sheenColor: '#ffd6f0', sheenRoughness: 0.4 });
    return M;
}
function gem(hex) {
    return new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.04, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.02,
        emissive: hex, emissiveIntensity: 0.15, ior: 2.2, specularIntensity: 1, envMapIntensity: 1.4 });
}
