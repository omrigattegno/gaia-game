import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, lerp, seg, easeInOut, easeOut3, easeIn3, easeOutExpo, rng, terrainH, buildLayout } from './layout.js';
import { MAP_MIN, MAP_SIZE, drawClay, drawPlan, drawOrtho, drawZone } from './maps.js';
import { buildPlan, updatePlan, areaRowsHTML } from './plan2d.js';

const W = 1920, H = 1080;
const L = buildLayout();
const HERO = L.hero;
const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------ textures ----
function canvasTex(c) {
  const t = new THREE.CanvasTexture(c);
  t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}
const clayTex = canvasTex(drawClay(L));
const planTex = canvasTex(drawPlan(L));
const orthoTex = canvasTex(drawOrtho(L));
const zoneTex = canvasTex(drawZone(L));

// ------------------------------------------------------------ renderer ----
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(W, H, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NoToneMapping;
const BGHEX = 0xF1F4F9;
const scene = new THREE.Scene();
scene.background = new THREE.Color(BGHEX);
scene.fog = new THREE.Fog(BGHEX, 900, 2800);
const camera = new THREE.PerspectiveCamera(30, W / H, 1, 9000);
const pmrem = new THREE.PMREMGenerator(renderer);
const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const hemi = new THREE.HemisphereLight(0xF4F7FF, 0xAEB9D0, 1.75);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xFFFFFF, 1.95);
sun.position.set(-230, 400, 170);
scene.add(sun, sun.target);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -260, right: 260, top: 260, bottom: -260, near: 60, far: 1200 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.6;

// ---------------------------------------------------- shared uniforms -----
const U = {
  uTime: { value: 0 },
  uClay: { value: clayTex }, uOrtho: { value: orthoTex }, uPlan: { value: planTex }, uZone: { value: zoneTex },
  uMap: { value: new THREE.Vector2(MAP_MIN, MAP_SIZE) },
  uContourR: { value: 0 }, uContourA: { value: 1 },
  uPlanR: { value: 0 }, uPlanA: { value: 0 },
  uStrip: { value: Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, 1, -1)) },
  uFlash: { value: Array.from({ length: 3 }, () => new THREE.Vector4(0, 0, 0, 0)) },
  uFlashHalf: { value: new THREE.Vector2(45, 38) },
  uOrthoA: { value: 0 },
  uScanX: { value: 1e5 }, uScanGlow: { value: 0 }, uPlain: { value: 0 }, uPlainX: { value: 1e5 }, uClayA: { value: 1 }, uMinorA: { value: 1 },
  uGridA: { value: 0 }, uZoneA: { value: 0 },
  uGrow: { value: 0 }, uFillOn: { value: 0 }, uFill: { value: 0 },
  uQtyA: { value: 0 }, uPadH: { value: 0 }, uQtyRect: { value: new THREE.Vector4(0, 0, 1, 1) },
  uCut: { value: new THREE.Vector4(0, 0, 0, 0) }, uCutOn: { value: 0 },
  uSink: { value: new THREE.Vector4(0, 0, 0, 0) }, uSinkA: { value: 0 },
};

const GLSL_COMMON = /* glsl */`
uniform sampler2D uClay; uniform sampler2D uOrtho; uniform sampler2D uPlan; uniform sampler2D uZone;
uniform vec2 uMap;
uniform float uContourR, uContourA, uPlanR, uPlanA, uOrthoA, uScanX, uScanGlow, uPlain, uPlainX, uGridA, uZoneA, uGrow, uFillOn, uFill, uClayA, uMinorA;
uniform float uQtyA, uPadH, uCutOn;
uniform vec4 uQtyRect, uCut;
uniform vec4 uStrip[6];
uniform vec4 uFlash[3];
uniform vec2 uFlashHalf;
vec2 mapUV(vec2 p) { return (p - vec2(uMap.x)) / uMap.y; }
float inMapF(vec2 uv) { return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0); }
float orthoCov(vec2 p) {
  float town = (1.0 - smoothstep(207.0, 211.0, abs(p.x))) * (1.0 - smoothstep(192.0, 196.0, abs(p.y)));
  if (town <= 0.0) return 0.0;
  float c = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 s = uStrip[i];
    float inz = 1.0 - smoothstep(s.y - 1.2, s.y + 1.2, abs(p.y - s.x));
    float inx = smoothstep(s.z - 1.2, s.z + 1.2, p.x) * (1.0 - smoothstep(s.w - 1.2, s.w + 1.2, p.x));
    c = max(c, inz * inx);
  }
  return c * town;
}
float flashAmt(vec2 p) {
  float f = 0.0;
  for (int i = 0; i < 3; i++) {
    vec4 q = uFlash[i];
    vec2 d = abs(p - q.xy) - uFlashHalf;
    f = max(f, step(max(d.x, d.y), 0.0) * q.z);
  }
  return f;
}
`;

const SCAN_GLOW = /* glsl */`
{
  float sg = uScanGlow * exp(-abs(vWPos.x - uScanX) * 0.75);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.13, 0.40, 1.0), clamp(sg, 0.0, 1.0) * 0.9);
}`;

// ------------------------------------------------------------- terrain ----
const TERRAIN_FRAG = /* glsl */`
{
#ifndef IS_LID
  if (uCutOn > 0.5 && vWPos.x > uCut.x && vWPos.x < uCut.z && vWPos.z > uCut.y && vWPos.z < uCut.w) discard;
#endif
  vec2 muv = mapUV(vWPos.xz);
  float inM = inMapF(muv);
  vec3 col = diffuseColor.rgb;
  col = mix(col, texture2D(uClay, muv).rgb, inM * uClayA);
  float rr = length(vWPos.xz);
  float hh = vWPos.y;
  float fw = max(fwidth(hh), 1e-4);
  vec2 gw = max(fwidth(vWPos.xz), vec2(1e-4));
  if (uContourA > 0.001) {
    float dMi = abs(fract(hh / 1.0 + 0.5) - 0.5) * 1.0;
    float dMa = abs(fract(hh / 5.0 + 0.5) - 0.5) * 5.0;
    float lMi = (1.0 - smoothstep(fw * 0.5, fw * 1.5, dMi)) * (1.0 - smoothstep(0.12, 0.3, fw));
    float lMa = (1.0 - smoothstep(fw * 0.8, fw * 2.0, dMa)) * (1.0 - smoothstep(0.7, 1.6, fw));
    float cRev = 1.0 - smoothstep(uContourR - 90.0, uContourR, rr);
    col = mix(col, vec3(0.43, 0.56, 0.87), lMi * 0.75 * uContourA * cRev * uMinorA);
    col = mix(col, vec3(0.133, 0.235, 0.541), lMa * 0.9 * uContourA * cRev);
    float ring = (1.0 - smoothstep(0.0, 16.0, abs(rr - uContourR))) * step(uContourR, 1600.0) * uContourA;
    col = mix(col, vec3(0.20, 0.45, 1.0), ring * 0.3);
  }
  if (uPlanA > 0.001) {
    float pa = texture2D(uPlan, muv).a;
    float pRev = 1.0 - smoothstep(uPlanR - 50.0, uPlanR, rr);
    col = mix(col, vec3(0.133, 0.235, 0.541), clamp(pa * 1.35, 0.0, 1.0) * uPlanA * pRev * inM);
  }
  if (uOrthoA > 0.001) {
    float cov = orthoCov(vWPos.xz) * uOrthoA * inM;
    col = mix(col, texture2D(uOrtho, muv).rgb, cov);
    col = mix(col, vec3(0.30, 0.55, 1.0), flashAmt(vWPos.xz) * 0.30 * inM);
  }
  if (uPlain > 0.5) {
    float sc = step(uPlainX, vWPos.x);
    col = mix(col, vec3(0.955, 0.965, 0.982), sc);
  }
  if (uGridA > 0.001) {
    vec2 gd = abs(fract(vWPos.xz / 10.0 + 0.5) - 0.5) * 10.0;
    float gl1 = max(1.0 - smoothstep(gw.x * 0.5, gw.x * 1.5, gd.x), 1.0 - smoothstep(gw.y * 0.5, gw.y * 1.5, gd.y));
    vec2 gd5 = abs(fract(vWPos.xz / 50.0 + 0.5) - 0.5) * 50.0;
    float gl5 = max(1.0 - smoothstep(gw.x * 0.7, gw.x * 1.9, gd5.x), 1.0 - smoothstep(gw.y * 0.7, gw.y * 1.9, gd5.y));
    float gFade = 1.0 - smoothstep(0.35, 1.1, max(gw.x, gw.y));
    float gMask = 1.0 - smoothstep(240.0, 360.0, rr);
    col = mix(col, vec3(0.55, 0.64, 0.86), gl1 * 0.38 * gFade * uGridA * gMask);
    col = mix(col, vec3(0.30, 0.43, 0.78), gl5 * 0.5 * uGridA * gMask);
  }
  if (uZoneA > 0.001) {
    vec4 zn = texture2D(uZone, muv);
    col = mix(col, zn.rgb, zn.a * uZoneA * 0.72 * inM);
  }
  if (uQtyA > 0.001) {
    vec2 q = vWPos.xz;
    float inx = smoothstep(uQtyRect.x - 0.6, uQtyRect.x + 0.6, q.x) * (1.0 - smoothstep(uQtyRect.z - 0.6, uQtyRect.z + 0.6, q.x));
    float inz = smoothstep(uQtyRect.y - 0.6, uQtyRect.y + 0.6, q.y) * (1.0 - smoothstep(uQtyRect.w - 0.6, uQtyRect.w + 0.6, q.y));
    float dh = vWPos.y - uPadH;
    vec3 cc = dh > 0.0 ? mix(vec3(0.99, 0.92, 0.86), vec3(0.878, 0.400, 0.231), clamp(dh / 7.0, 0.18, 1.0))
                       : mix(vec3(0.87, 0.91, 1.0), vec3(0.184, 0.420, 1.0), clamp(-dh / 7.0, 0.18, 1.0));
    float fwd = max(fwidth(dh), 1e-4);
    float iso = 1.0 - smoothstep(fwd * 0.6, fwd * 1.6, abs(fract(dh + 0.5) - 0.5));
    float zero = 1.0 - smoothstep(fwd * 1.0, fwd * 2.6, abs(dh));
    cc = mix(cc, cc * 0.8, iso * 0.55);
    cc = mix(cc, vec3(1.0), zero * 0.9);
    col = mix(col, cc, inx * inz * uQtyA);
  }
  diffuseColor.rgb = col;
}`;

function patchTerrain(mat, lid = false) {
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, U);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    s.fragmentShader = (lid ? '#define IS_LID\n' : '') + s.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\n' + GLSL_COMMON)
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + TERRAIN_FRAG)
      .replace('#include <opaque_fragment>', '#include <opaque_fragment>\n' + SCAN_GLOW);
  };
  mat.customProgramCacheKey = () => (lid ? 'terrain-lid-v1' : 'terrain-v1');
}
const terrGeo = new THREE.PlaneGeometry(2600, 2600, 340, 340);
terrGeo.rotateX(-Math.PI / 2);
{
  const p = terrGeo.attributes.position;
  for (let k = 0; k < p.count; k++) p.setY(k, terrainH(p.getX(k), p.getZ(k)));
  terrGeo.computeVertexNormals();
}
const terrMat = new THREE.MeshLambertMaterial({ color: 0xF3F5F9 });
patchTerrain(terrMat);
const terrain = new THREE.Mesh(terrGeo, terrMat);
terrain.receiveShadow = true;
scene.add(terrain);

// ------------------------------------------------------ buildings/trees ---
const BUILD_VERT_PARS = /* glsl */`
attribute vec3 aCenter; attribute vec4 aInfo; attribute vec3 aCol;
uniform float uGrow, uSinkA; uniform vec4 uSink;
varying vec3 vWPos; varying vec3 vWN; varying vec4 vInfo; varying float vUp; varying float vG; varying vec3 vCol; varying vec3 vCenter;`;
const BUILD_VERT_BEGIN = /* glsl */`
{
  float gS = aInfo.y * 0.62;
  float g = clamp((uGrow - gS) / 0.38, 0.0, 1.0);
  g = 1.0 - pow(1.0 - g, 3.0);
  vUp = position.y - aCenter.y;
  transformed.y = aCenter.y + (transformed.y - aCenter.y) * max(g, 0.0005);
  vG = g; vInfo = aInfo; vCol = aCol; vCenter = aCenter; vWN = normal;
  if (uSinkA > 0.0 && aCenter.x > uSink.x && aCenter.x < uSink.z && aCenter.z > uSink.y && aCenter.z < uSink.w) {
    float hs = fract(sin(dot(aCenter.xz, vec2(12.9898, 78.233))) * 43758.5453);
    float k = clamp(uSinkA * 1.6 - hs * 0.6, 0.0, 1.0);
    k = k * k * (3.0 - 2.0 * k);
    transformed = aCenter + (transformed - aCenter) * max(1.0 - k, 0.0005);
    vG *= step(k, 0.999);
  }
}`;
const BUILD_DISCARD = /* glsl */`
  if (vG <= 0.001) discard;
  if (vWPos.x > uScanX) discard;
  if (uFillOn > 0.5) {
    float fr = clamp((uFill - vInfo.y * 0.55) / 0.45, 0.0, 1.0);
    if (fr <= 0.0 || vUp > fr * (vInfo.x + 1.0) + 0.02) discard;
  }`;
const BUILD_FRAG = /* glsl */`
{
  ${BUILD_DISCARD}
  float kind = vInfo.z;
  bool roof = vWN.y > 0.5;
  vec3 clay = vec3(1.0);
  if (kind > 1.5 && kind < 2.5) clay = vec3(0.84, 0.91, 0.86);
  if (kind > 2.5) clay = vec3(0.90, 0.92, 0.94);
  float fwU = max(fwidth(vUp), 1e-4);
  float dF = abs(fract(vUp / 3.2 + 0.5) - 0.5) * 3.2;
  float fl = (1.0 - smoothstep(fwU * 0.6, fwU * 1.6, dF)) * (1.0 - smoothstep(0.3, 0.8, fwU));
  if (!roof && kind < 0.5) clay *= 1.0 - 0.11 * fl;
  float cov = uOrthoA > 0.001 ? orthoCov(vWPos.xz) * uOrthoA : 0.0;
  vec3 tex = clay;
  if (cov > 0.0) {
    vec2 muv = mapUV(vWPos.xz);
    if (kind < 1.5) {
      if (roof) tex = texture2D(uOrtho, muv).rgb;
      else {
        float along = abs(vWN.x) > 0.5 ? vWPos.z : vWPos.x;
        float fwA = max(fwidth(along), 1e-4);
        float cxw = fract(along / 2.9);
        float cyw = fract(vUp / 3.2);
        float e = fwA / 2.9 * 1.5;
        float win = smoothstep(0.2, 0.2 + e, cxw) * (1.0 - smoothstep(0.8 - e, 0.8, cxw)) *
                    smoothstep(0.28, 0.34, cyw) * (1.0 - smoothstep(0.77, 0.83, cyw)) * step(2.8, vUp);
        win = mix(win, 0.3, smoothstep(0.3, 0.9, fwA));
        float hsh = fract(sin(floor(along / 2.9) * 12.9898 + floor(vUp / 3.2) * 78.233) * 43758.5453);
        vec3 glass = vec3(0.30, 0.37, 0.47) + 0.10 * hsh;
        tex = mix(vCol, glass, win * (kind < 0.5 ? 1.0 : 0.0));
      }
    } else if (kind < 2.5) tex = vec3(0.36, 0.50, 0.26);
    else tex = vec3(0.45, 0.38, 0.30);
  }
  vec3 col = mix(clay, tex, cov);
  if (uZoneA > 0.0 && kind < 1.5) {
    vec4 zn = texture2D(uZone, mapUV(vCenter.xz));
    col = mix(col, zn.rgb, zn.a * uZoneA * (roof ? 0.8 : 0.35));
  }
  if (uZoneA > 0.0 && kind > 1.5) col = mix(col, kind < 2.5 ? vec3(0.62, 0.80, 0.58) : vec3(0.75, 0.70, 0.62), uZoneA);
  diffuseColor.rgb = col;
}`;

function patchBuilding(mat, key) {
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, U);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\n' + BUILD_VERT_PARS)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + BUILD_VERT_BEGIN)
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos; varying vec3 vWN; varying vec4 vInfo; varying float vUp; varying float vG; varying vec3 vCol; varying vec3 vCenter;\n' + GLSL_COMMON)
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + BUILD_FRAG)
      .replace('#include <opaque_fragment>', '#include <opaque_fragment>\n' + SCAN_GLOW);
  };
  mat.customProgramCacheKey = () => key;
}
function patchBuildingDepth(mat, key) {
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, U);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\n' + BUILD_VERT_PARS)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + BUILD_VERT_BEGIN)
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos; varying vec3 vWN; varying vec4 vInfo; varying float vUp; varying float vG; varying vec3 vCol; varying vec3 vCenter;\n' + GLSL_COMMON)
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\n' + BUILD_DISCARD);
  };
  mat.customProgramCacheKey = () => key;
}

const FACADES = [[0.93, 0.89, 0.80], [0.95, 0.94, 0.91], [0.86, 0.87, 0.89], [0.91, 0.87, 0.79], [0.80, 0.85, 0.91], [0.87, 0.90, 0.94]];
function withAttrs(g, center, info, col) {
  const n = g.attributes.position.count;
  const c = new Float32Array(n * 3), inf = new Float32Array(n * 4), cl = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { c.set(center, k * 3); inf.set(info, k * 4); cl.set(col, k * 3); }
  g.setAttribute('aCenter', new THREE.BufferAttribute(c, 3));
  g.setAttribute('aInfo', new THREE.BufferAttribute(inf, 4));
  g.setAttribute('aCol', new THREE.BufferAttribute(cl, 3));
  return g;
}
const cityGeos = [];
for (const b of L.buildings) {
  const gy = b.base + 1.2;
  b.gy = gy;
  for (const p of b.parts) {
    const y0 = p.y0 || 0;
    const bottom = y0 === 0 ? b.base : gy + y0, top = gy + y0 + p.h;
    const g = new THREE.BoxGeometry(p.w, top - bottom, p.d);
    g.translate(p.cx, (top + bottom) / 2, p.cz);
    cityGeos.push(withAttrs(g, [b.cx, gy, b.cz], [b.top, b.growDelay, p.kind, 0], FACADES[b.facade % FACADES.length]));
  }
}
const cityGeo = mergeGeometries(cityGeos);
const cityMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
patchBuilding(cityMat, 'city-v1');
const cityDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
patchBuildingDepth(cityDepth, 'city-depth-v1');
const city = new THREE.Mesh(cityGeo, cityMat);
city.castShadow = city.receiveShadow = true;
city.customDepthMaterial = cityDepth;
scene.add(city);

// modelling-delay variant is driven through aInfo.y as well: we swap delays by writing a second attribute set
const growDelays = cityGeo.attributes.aInfo.array.slice();
const modelDelays = cityGeo.attributes.aInfo.array.slice();
{
  let off = 0;
  for (const b of L.buildings) for (const p of b.parts) {
    const n = 24;
    for (let k = 0; k < n; k++) modelDelays[(off + k) * 4 + 1] = b.modelDelay;
    off += n;
  }
}
let delayMode = 'grow';
function setDelayMode(m) {
  if (m === delayMode) return;
  delayMode = m;
  cityGeo.attributes.aInfo.array.set(m === 'grow' ? growDelays : modelDelays);
  cityGeo.attributes.aInfo.needsUpdate = true;
}

const treeGeos = [];
for (const t of L.trees) {
  const hgt = 1.7 + t.r;
  const d0 = Math.hypot(t.x, t.z) / 280;
  const dm = Math.hypot(t.x - HERO.cx, t.z - HERO.cz) / 330;
  t.growDelay = clamp(d0); t.modelDelay = clamp(dm);
  const can = new THREE.IcosahedronGeometry(t.r, 1);
  can.scale(1, 0.92, 1);
  can.translate(t.x, t.y + hgt, t.z);
  treeGeos.push(withAttrs(can.toNonIndexed(), [t.x, t.y, t.z], [hgt + t.r, t.growDelay, 2, 0], [0.4, 0.55, 0.3]));
  const tr = new THREE.CylinderGeometry(0.22, 0.3, hgt, 6).toNonIndexed();
  tr.translate(t.x, t.y + hgt / 2 - 0.4, t.z);
  treeGeos.push(withAttrs(tr, [t.x, t.y, t.z], [hgt + t.r, t.growDelay, 3, 0], [0.4, 0.35, 0.3]));
}
const treeGeo = mergeGeometries(treeGeos.map((g) => { g.deleteAttribute('uv'); return g; }));
const treeGrow = treeGeo.attributes.aInfo.array.slice();
const treeModel = treeGeo.attributes.aInfo.array.slice();
{
  let off = 0;
  for (const g of treeGeos) {
    const n = g.attributes.position.count;
    const ti = Math.floor(treeGeos.indexOf(g) / 2);
    for (let k = 0; k < n; k++) treeModel[(off + k) * 4 + 1] = L.trees[ti].modelDelay;
    off += n;
  }
}
function setTreeDelayMode(m) {
  treeGeo.attributes.aInfo.array.set(m === 'grow' ? treeGrow : treeModel);
  treeGeo.attributes.aInfo.needsUpdate = true;
}
const treeMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
patchBuilding(treeMat, 'tree-v1');
const treeDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
patchBuildingDepth(treeDepth, 'tree-depth-v1');
const treesMesh = new THREE.Mesh(treeGeo, treeMat);
treesMesh.castShadow = treesMesh.receiveShadow = true;
treesMesh.customDepthMaterial = treeDepth;
scene.add(treesMesh);

// ---------------------------------------------------------- point cloud ----
const inFootprint = (x, z) => L.buildings.some((b) => b.parts.some((p) => (p.y0 || 0) === 0 && Math.abs(x - p.cx) < p.w / 2 + 0.3 && Math.abs(z - p.cz) < p.d / 2 + 0.3));
const ptsPos = [], ptsAttr = [];
{
  const R = rng(99);
  const S = 1.3;
  for (let x = -214; x <= 214; x += S) for (let z = -200; z <= 200; z += S) {
    const jx = x + (R() - 0.5) * 1.1, jz = z + (R() - 0.5) * 1.1;
    if (inFootprint(jx, jz)) continue;
    ptsPos.push(jx, terrainH(jx, jz) + 0.3, jz); ptsAttr.push(0, R(), 0);
  }
  for (const b of L.buildings) {
    const gy = b.gy;
    for (const p of b.parts) {
      const y0 = gy + (p.y0 || 0), y1 = y0 + p.h, s = 1.25;
      const xa = p.cx - p.w / 2, xb = p.cx + p.w / 2, za = p.cz - p.d / 2, zb = p.cz + p.d / 2;
      for (const [ax, az, bx, bz] of [[xa, za, xb, za], [xb, za, xb, zb], [xb, zb, xa, zb], [xa, zb, xa, za]]) {
        const len = Math.hypot(bx - ax, bz - az);
        for (let u = s * 0.5; u < len; u += s) for (let v = y0 + s * 0.5; v < y1; v += s) {
          const f = clamp((u + (R() - 0.5) * 0.6) / len);
          ptsPos.push(ax + (bx - ax) * f, v + (R() - 0.5) * 0.5, az + (bz - az) * f);
          ptsAttr.push(v - gy, R(), 1);
        }
      }
      for (let u = -p.w / 2 + s * 0.5; u < p.w / 2; u += s) for (let v = -p.d / 2 + s * 0.5; v < p.d / 2; v += s) {
        ptsPos.push(p.cx + u + (R() - 0.5) * 0.5, y1 + 0.05, p.cz + v + (R() - 0.5) * 0.5);
        ptsAttr.push(y1 - gy, R(), 1);
      }
    }
  }
  for (const t of L.trees) {
    const cy = t.y + 1.7 + t.r;
    for (let k = 0; k < 60; k++) {
      const th = R() * Math.PI * 2, ph = Math.acos(1 - R() * 1.35);
      ptsPos.push(t.x + t.r * Math.sin(ph) * Math.cos(th), cy + t.r * Math.cos(ph) * 0.92, t.z + t.r * Math.sin(ph) * Math.sin(th));
      ptsAttr.push(cy - t.y, R(), 2);
    }
  }
}
const ptsGeo = new THREE.BufferGeometry();
ptsGeo.setAttribute('position', new THREE.Float32BufferAttribute(ptsPos, 3));
ptsGeo.setAttribute('aP', new THREE.Float32BufferAttribute(ptsAttr, 3));
const POINT_COUNT = ptsPos.length / 3;
const ptsU = {
  uScanX: U.uScanX, uScanMode: { value: 0 }, uAlpha: { value: 0 }, uSize: { value: 0.95 }, uScale: { value: 1000 },
  uFog: { value: new THREE.Vector3(0.945, 0.957, 0.976) }, uFogNear: { value: 900 }, uFogFar: { value: 2800 },
};
const ptsMat = new THREE.ShaderMaterial({
  uniforms: ptsU,
  transparent: true,
  depthWrite: false,
  vertexShader: /* glsl */`
    attribute vec3 aP;
    uniform float uScanX, uScanMode, uAlpha, uSize, uScale;
    varying vec3 vCol; varying float vA;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mv;
      float vis = uScanMode > 0.5 ? step(uScanX, position.x) : 1.0;
      float fresh = uScanMode > 0.5 ? exp(-max(position.x - uScanX, 0.0) / 9.0) * vis : 0.0;
      float hag = aP.x;
      vec3 cG = vec3(0.60, 0.68, 0.86);
      vec3 cL = vec3(0.36, 0.50, 0.84);
      vec3 cH = vec3(0.11, 0.19, 0.47);
      vec3 c = aP.z < 0.5 ? cG : mix(cL, cH, smoothstep(3.0, 70.0, hag));
      if (aP.z > 1.5) c = vec3(0.42, 0.62, 0.82);
      c *= 0.88 + 0.22 * aP.y;
      c = mix(c, vec3(0.10, 0.42, 1.0), clamp(fresh, 0.0, 1.0));
      vCol = c;
      vA = vis * uAlpha;
      float sz = uSize * uScale / -mv.z;
      gl_PointSize = clamp(sz * (1.0 + fresh * 0.9), 1.3, 7.0);
      if (vA <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    }`,
  fragmentShader: /* glsl */`
    uniform vec3 uFog; uniform float uFogNear, uFogFar;
    varying vec3 vCol; varying float vA;
    void main() {
      vec2 d = gl_PointCoord - 0.5;
      if (dot(d, d) > 0.25) discard;
      float depth = gl_FragCoord.z / gl_FragCoord.w;
      vec3 c = mix(vCol, uFog, smoothstep(uFogNear, uFogFar, depth));
      gl_FragColor = vec4(c, vA);
    }`,
});
const points = new THREE.Points(ptsGeo, ptsMat);
points.frustumCulled = false;
points.renderOrder = 1;
scene.add(points);

// ------------------------------------------------------ timed fat lines ----
function timedLineMaterial(color, linewidth, key) {
  const m = new LineMaterial({ color, linewidth, transparent: true, depthWrite: false });
  m.resolution.set(W, H);
  m.uniforms.uTime = { value: 0 };
  m.uniforms.uAlpha = { value: 1 };
  m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -4;
  m.onBeforeCompile = (s) => {
    s.uniforms.uTime = m.uniforms.uTime; s.uniforms.uAlpha = m.uniforms.uAlpha;
    s.vertexShader = s.vertexShader
      .replace('attribute vec3 instanceEnd;', 'attribute vec3 instanceEnd;\nattribute vec3 instanceTime;\nuniform float uTime;\nvarying float vFade;')
      .replace('vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );', `
        float lp = clamp((uTime - instanceTime.x) / max(instanceTime.y, 1e-4), 0.0, 1.0);
        vec4 end = modelViewMatrix * vec4( mix(instanceStart, instanceEnd, lp), 1.0 );
        float age = uTime - instanceTime.x - instanceTime.y;
        vFade = lp <= 0.0 ? 0.0 : mix(1.0, instanceTime.z, smoothstep(0.0, 0.9, age));`);
    const idx = s.vertexShader.lastIndexOf('}');
    s.vertexShader = s.vertexShader.slice(0, idx) + '  if (lp <= 0.0) gl_Position = vec4(0.0, 0.0, -10.0, 1.0);\n}';
    s.fragmentShader = s.fragmentShader
      .replace('uniform float opacity;', 'uniform float opacity;\nuniform float uAlpha;\nvarying float vFade;')
      .replace('gl_FragColor = vec4( diffuseColor.rgb, alpha );', 'gl_FragColor = vec4( diffuseColor.rgb, alpha * vFade * uAlpha );');
  };
  m.customProgramCacheKey = () => key;
  return m;
}
function timedLines(segs, times, color, width, key) {
  const g = new LineSegmentsGeometry();
  g.setPositions(new Float32Array(segs));
  g.setAttribute('instanceTime', new THREE.InstancedBufferAttribute(new Float32Array(times), 3));
  const m = timedLineMaterial(color, width, key);
  const l = new LineSegments2(g, m);
  l.frustumCulled = false;
  return l;
}

// wireframe of the model (03)
const MODEL_T0 = 32.7;
const wf = (() => {
  const segs = [], times = [];
  for (const b of L.buildings) {
    const gy = b.gy, bt = MODEL_T0 + b.modelDelay * 1.4;
    for (const p of b.parts) {
      const y0 = gy + (p.y0 || 0), y1 = y0 + p.h;
      const xa = p.cx - p.w / 2, xb = p.cx + p.w / 2, za = p.cz - p.d / 2, zb = p.cz + p.d / 2;
      const c = [[xa, za], [xb, za], [xb, zb], [xa, zb]];
      const pt = bt + ((p.y0 || 0) / Math.max(1, b.top)) * 0.5;
      for (let k = 0; k < 4; k++) {
        const [ax, az] = c[k], [bx, bz] = c[(k + 1) % 4];
        segs.push(ax, y0, az, bx, y0, bz); times.push(pt, 0.28, 1);
        segs.push(ax, y0, az, ax, y1, az); times.push(pt + 0.2, 0.4 + p.h / 220, 1);
        segs.push(ax, y1, az, bx, y1, bz); times.push(pt + 0.55 + p.h / 220, 0.28, 1);
      }
    }
  }
  return timedLines(segs, times, 0x2B4DB3, 1.7, 'wf');
})();
wf.renderOrder = 3;
scene.add(wf);


// ------------------------------------------------------------- timeline ----
const CH = {
  intro: [0, 7.5], taba: [7.5, 12.5], tatsar: [12.5, 17.5], ground: [17.5, 22.5], aerial: [22.5, 27.5], lidar: [27.5, 32.5],
  model: [32.5, 37.5], arch: [37.5, 42.5], areas: [42.5, 47.5], expro: [47.5, 52.5], qty: [52.5, 57.5], roads: [57.5, 62.5], end: [62.5, 72.5],
};
const ORDER = Object.keys(CH);
const DURATION = 72.5;
const chapterAt = (t) => ORDER.find((k) => t < CH[k][1]) || 'end';
// v3 running order: expropriation follows the TABA chapter and registration runs 6.25 s.
// Chapters keep their v2 animation; update() maps the v3 clock back onto the v2 clock per chapter.
const NCH = {
  intro: [0, 7.5], taba: [7.5, 12.5], expro: [12.5, 17.5], tatsar: [17.5, 23.75], ground: [23.75, 28.75], aerial: [28.75, 33.75],
  lidar: [33.75, 38.75], model: [38.75, 43.75], arch: [43.75, 48.75], areas: [48.75, 53.75], qty: [53.75, 58.75], roads: [58.75, 63.75], end: [63.75, 73.75],
};
const NORDER = Object.keys(NCH);
const NDURATION = 73.75;
const chapterAtN = (t) => NORDER.find((k) => t < NCH[k][1]) || 'end';
const toV2 = (t, ch) => (ch === 'tatsar' ? t : t - NCH[ch][0] + CH[ch][0]);
const fromV2 = (t) => { const ch = chapterAt(t); return t - CH[ch][0] + NCH[ch][0]; };
const deg = Math.PI / 180;

// ------------------------------------------------------------- drones -----
const discTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 8, 64, 64, 64);
  grd.addColorStop(0, 'rgba(40,46,58,0.0)'); grd.addColorStop(0.55, 'rgba(40,46,58,0.10)');
  grd.addColorStop(0.9, 'rgba(40,46,58,0.22)'); grd.addColorStop(1, 'rgba(40,46,58,0.0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const DM = {
  white: new THREE.MeshStandardMaterial({ color: 0xF5F7FA, roughness: 0.3, metalness: 0.0, envMap: envTex, envMapIntensity: 1.0 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x232833, roughness: 0.42, metalness: 0.3, envMap: envTex, envMapIntensity: 0.8 }),
  metal: new THREE.MeshStandardMaterial({ color: 0x9AA3B2, roughness: 0.22, metalness: 0.95, envMap: envTex }),
  blue: new THREE.MeshStandardMaterial({ color: 0x223C8A, roughness: 0.3, metalness: 0.15, envMap: envTex }),
  glass: new THREE.MeshStandardMaterial({ color: 0x0A0F1E, roughness: 0.04, metalness: 0.7, envMap: envTex, envMapIntensity: 1.4 }),
  glow: new THREE.MeshBasicMaterial({ color: 0x4FA3FF }),
  glowW: new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
  disc: new THREE.MeshBasicMaterial({ map: discTex, transparent: true, depthWrite: false, side: THREE.DoubleSide }),
  blade: new THREE.MeshStandardMaterial({ color: 0x1E232C, roughness: 0.5, transparent: true, opacity: 0.55, depthWrite: false }),
};
// heavy-lift survey hexacopter: carbon arms, dual RTK antennas, dual batteries, LiDAR + mapping-camera gimbal, LED accents
const haloTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.22, 'rgba(255,255,255,0.6)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
Object.assign(DM, {
  shell: new THREE.MeshStandardMaterial({ color: 0xF4F6F9, roughness: 0.24, metalness: 0.05, envMap: envTex, envMapIntensity: 1.1 }),
  carbon: new THREE.MeshStandardMaterial({ color: 0x1B1F26, roughness: 0.34, metalness: 0.5, envMap: envTex, envMapIntensity: 0.9 }),
  graphite: new THREE.MeshStandardMaterial({ color: 0x343A45, roughness: 0.4, metalness: 0.35, envMap: envTex }),
  ledGreen: new THREE.MeshBasicMaterial({ color: 0x3BFF8A }),
  navRed: new THREE.MeshBasicMaterial({ color: 0xFF3344 }),
  navGreen: new THREE.MeshBasicMaterial({ color: 0x2BFF77 }),
  bladeH: new THREE.MeshStandardMaterial({ color: 0x15181D, roughness: 0.45, metalness: 0.2, transparent: true, opacity: 0.5, depthWrite: false }),
});
const DRONE_S = 6.4;
function makeDrone() {
  const g = new THREE.Group();
  const add = (geo, mat, x = 0, y = 0, z = 0, parent = g) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  const halo = (color, size, x, y, z, parent = g) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, color, transparent: true, depthWrite: false, opacity: 0.7 }));
    s.position.set(x, y, z); s.scale.setScalar(size); parent.add(s); return s;
  };
  // fuselage
  add(new RoundedBoxGeometry(0.68, 0.16, 0.48, 6, 0.065), DM.shell);
  add(new RoundedBoxGeometry(0.56, 0.07, 0.38, 5, 0.03), DM.shell, -0.02, 0.1, 0);
  add(new RoundedBoxGeometry(0.62, 0.05, 0.42, 4, 0.02), DM.carbon, 0, -0.1, 0);
  add(new RoundedBoxGeometry(0.69, 0.022, 0.49, 3, 0.01), DM.blue, 0, -0.04, 0);
  add(new RoundedBoxGeometry(0.05, 0.08, 0.28, 3, 0.02), DM.glass, 0.335, 0.02, 0);
  add(new RoundedBoxGeometry(0.035, 0.05, 0.16, 2, 0.012), DM.glass, -0.34, 0.02, 0);
  for (const s of [-1, 1]) add(new RoundedBoxGeometry(0.15, 0.05, 0.02, 2, 0.008), DM.glass, 0.06, 0.02, s * 0.242);
  // dual hot-swap batteries with charge LEDs
  for (const s of [-1, 1]) {
    add(new RoundedBoxGeometry(0.27, 0.08, 0.115, 3, 0.022), DM.shell, -0.05, 0.17, s * 0.078);
    add(new RoundedBoxGeometry(0.275, 0.012, 0.118, 2, 0.005), DM.graphite, -0.05, 0.135, s * 0.078);
    for (let k = 0; k < 4; k++) add(new THREE.BoxGeometry(0.013, 0.006, 0.013), DM.ledGreen, -0.165 + k * 0.024, 0.212, s * 0.078);
  }
  // dual RTK GNSS antennas
  for (const s of [-1, 1]) {
    add(new THREE.CylinderGeometry(0.009, 0.011, 0.15, 8), DM.carbon, -0.22, 0.2, s * 0.18);
    add(new THREE.CylinderGeometry(0.056, 0.056, 0.014, 28), DM.carbon, -0.22, 0.278, s * 0.18);
    add(new THREE.SphereGeometry(0.054, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), DM.shell, -0.22, 0.284, s * 0.18).scale.y = 0.62;
  }
  const strobe = halo(0xFFFFFF, 0.42, -0.31, 0.14, 0);
  add(new THREE.SphereGeometry(0.016, 10, 8), DM.glowW, -0.31, 0.14, 0);
  // six arms with motors, props, LED strips and nav lights
  const props = [], armLeds = [], navHalos = [];
  for (let k = 0; k < 6; k++) {
    const a = Math.PI / 6 + (k * Math.PI) / 3, R0 = 0.2, R1 = 0.86;
    const arm = new THREE.Group(); arm.rotation.y = -a; g.add(arm);
    const tube = add(new THREE.CylinderGeometry(0.025, 0.032, R1 - R0, 16), DM.carbon, (R0 + R1) / 2, 0, 0, arm); tube.rotation.z = Math.PI / 2;
    add(new RoundedBoxGeometry(0.1, 0.075, 0.08, 3, 0.016), DM.graphite, R0 + 0.07, 0, 0, arm);
    add(new RoundedBoxGeometry(0.03, 0.08, 0.085, 2, 0.01), DM.blue, R0 + 0.135, 0, 0, arm);
    const lm = new THREE.MeshBasicMaterial({ color: 0x4CC3FF });
    add(new THREE.BoxGeometry(R1 - R0 - 0.26, 0.009, 0.014), lm, (R0 + R1) / 2 + 0.03, 0.031, 0, arm);
    armLeds.push(lm);
    // motor + cooling rings + bell
    add(new THREE.CylinderGeometry(0.07, 0.074, 0.1, 28), DM.carbon, R1, 0.01, 0, arm);
    for (const y of [-0.015, 0.01, 0.035]) add(new THREE.TorusGeometry(0.073, 0.004, 6, 28), DM.metal, R1, y, 0, arm).rotation.x = Math.PI / 2;
    add(new THREE.CylinderGeometry(0.062, 0.066, 0.035, 28), DM.metal, R1, 0.075, 0, arm);
    add(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 12), DM.carbon, R1, 0.102, 0, arm);
    const ring = add(new THREE.TorusGeometry(0.078, 0.007, 8, 32), lm, R1, -0.042, 0, arm); ring.rotation.x = Math.PI / 2;
    // props: two long blades + motion disc
    const disc = add(new THREE.CircleGeometry(0.4, 56), DM.disc, R1, 0.112, 0, arm); disc.rotation.x = -Math.PI / 2;
    const pg = new THREE.Group(); pg.position.set(R1, 0.11, 0); arm.add(pg);
    for (const s of [0, Math.PI]) {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.006, 0.05), DM.bladeH);
      bl.position.set(Math.cos(s) * 0.2, 0, Math.sin(s) * 0.2); bl.rotation.y = -s; bl.rotation.x = 0.12; pg.add(bl);
    }
    props.push(pg);
    // navigation lights on the front arms (port red, starboard green)
    if (k === 0 || k === 5) {
      const col = k === 0 ? 0x2BFF77 : 0xFF3344;
      add(new THREE.SphereGeometry(0.02, 10, 8), k === 0 ? DM.navGreen : DM.navRed, R1 + 0.02, -0.06, 0, arm);
      navHalos.push(halo(col, 0.3, R1 + 0.02, -0.06, 0, arm));
    }
  }
  // landing gear
  for (const s of [-1, 1]) {
    for (const xx of [0.15, -0.15]) {
      const a0 = new THREE.Vector3(xx, -0.12, s * 0.16), a1 = new THREE.Vector3(xx * 1.15, -0.47, s * 0.26);
      const st = add(new THREE.CylinderGeometry(0.014, 0.017, a0.distanceTo(a1), 10), DM.carbon);
      st.position.copy(a0).add(a1).multiplyScalar(0.5);
      st.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), a1.clone().sub(a0).normalize());
    }
    add(new THREE.CylinderGeometry(0.018, 0.018, 0.66, 12), DM.carbon, 0, -0.475, s * 0.26).rotation.z = Math.PI / 2;
    for (const xx of [-0.33, 0.33]) add(new THREE.SphereGeometry(0.02, 10, 8), DM.graphite, xx, -0.475, s * 0.26);
  }
  // gimbal payload: LiDAR + full-frame mapping camera
  const gim = new THREE.Group(); gim.position.set(0.17, -0.15, 0); g.add(gim);
  add(new RoundedBoxGeometry(0.11, 0.035, 0.11, 3, 0.01), DM.carbon, 0, 0, 0, gim);
  for (const s of [-1, 1]) add(new RoundedBoxGeometry(0.02, 0.13, 0.035, 2, 0.008), DM.graphite, 0, -0.07, s * 0.1, gim);
  const head = new THREE.Group(); head.position.set(0.01, -0.14, 0); gim.add(head);
  add(new RoundedBoxGeometry(0.19, 0.15, 0.17, 4, 0.03), DM.shell, 0, 0, 0, head);
  add(new RoundedBoxGeometry(0.195, 0.02, 0.175, 2, 0.008), DM.blue, 0, 0.045, 0, head);
  add(new RoundedBoxGeometry(0.02, 0.09, 0.12, 3, 0.01), DM.glass, 0.096, -0.005, -0.015, head);
  const lidarGlow = new THREE.MeshBasicMaterial({ color: 0x1D2B4F });
  for (let k = 0; k < 3; k++) add(new THREE.BoxGeometry(0.004, 0.01, 0.1), lidarGlow, 0.107, -0.03 + k * 0.025, -0.015, head);
  const lens = add(new THREE.CylinderGeometry(0.034, 0.034, 0.03, 28), DM.glass, 0.1, -0.035, 0.058, head); lens.rotation.z = Math.PI / 2;
  const rim = add(new THREE.TorusGeometry(0.035, 0.006, 8, 28), DM.metal, 0.116, -0.035, 0.058, head); rim.rotation.y = Math.PI / 2;
  add(new THREE.SphereGeometry(0.009, 8, 6), DM.glow, 0.098, 0.045, 0.07, head);
  head.rotation.z = -0.55;
  const eye = new THREE.Object3D(); eye.position.set(0.11, -0.04, 0); head.add(eye);
  g.scale.setScalar(DRONE_S);
  return { group: g, props, armLeds, strobe, navHalos, lidarGlow, eye };
}
const _eye = new THREE.Vector3();
function droneEye(d) { d.group.updateMatrixWorld(true); d.eye.getWorldPosition(_eye); return [_eye.x, _eye.y, _eye.z]; }
function animateDrone(d, t, mode) {
  d.armLeds.forEach((m, k) => {
    const v = 0.45 + 0.55 * Math.pow(0.5 + 0.5 * Math.sin(t * 7 - k * 1.05), 3);
    m.color.setRGB(0.30 * v + 0.05, 0.76 * v + 0.08, 1.0 * v, THREE.SRGBColorSpace);
  });
  const ph = (t + 0.37) % 1.1;
  d.strobe.material.opacity = ph < 0.06 ? 1 : 0;
  d.navHalos.forEach((h) => { h.material.opacity = 0.55 + 0.15 * Math.sin(t * 3); });
  if (mode === 'lidar') { const v = 0.75 + 0.25 * Math.sin(t * 40); d.lidarGlow.color.setRGB(0.25 * v, 0.85 * v, 1.0 * v, THREE.SRGBColorSpace); }
  else d.lidarGlow.color.setRGB(0.11, 0.17, 0.31, THREE.SRGBColorSpace);
}

// monotone cubic interpolation for scalar keyframes
function mtrack(keys) {
  const n = keys.length, t = keys.map((k) => k[0]), v = keys.map((k) => k[1]);
  const d = [], m = new Array(n).fill(0);
  for (let k = 0; k < n - 1; k++) d.push((v[k + 1] - v[k]) / (t[k + 1] - t[k]));
  for (let k = 1; k < n - 1; k++) m[k] = d[k - 1] * d[k] <= 0 ? 0 : (d[k - 1] + d[k]) / 2;
  for (let k = 0; k < n - 1; k++) {
    if (d[k] === 0) { m[k] = 0; m[k + 1] = 0; continue; }
    const a = m[k] / d[k], b = m[k + 1] / d[k], s = a * a + b * b;
    if (s > 9) { const tau = 3 / Math.sqrt(s); m[k] = tau * a * d[k]; m[k + 1] = tau * b * d[k]; }
  }
  return (x) => {
    if (x <= t[0]) return v[0];
    if (x >= t[n - 1]) return v[n - 1];
    let i = 0; while (i < n - 2 && x > t[i + 1]) i++;
    const h = t[i + 1] - t[i], u = (x - t[i]) / h, u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * v[i] + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * v[i + 1] + (u3 - u2) * h * m[i + 1];
  };
}
function track3(keys) {
  const fx = mtrack(keys.map((k) => [k[0], k[1]])), fy = mtrack(keys.map((k) => [k[0], k[2]])), fz = mtrack(keys.map((k) => [k[0], k[3]]));
  return (t) => new THREE.Vector3(fx(t), fy(t), fz(t));
}
const STRIPS = [150, 90, 30, -30, -90, -150];
const trackA = track3([[21.5, 250, 100, 150], [22.5, 232, 100, 150], [24.5, 197, 100, 150], [26.9, 155, 100, 150], [27.9, 124, 100, 150], [28.9, 66, 100, 150]]);
const trackL = track3([[27.0, 232, 110, 0], [27.8, 196, 110, 0], [32.2, -196, 110, 0], [33.0, -236, 112, 0]]);
const trackBg = track3([[17.0, 150, 46, 90], [23.0, 10, 52, 118]]);
const drone0 = makeDrone(), drone1 = makeDrone();
scene.add(drone0.group, drone1.group);

// photo captures along strip 0 during the aerial chapter
const captures = [];
{
  let last = null;
  for (let t = CH.aerial[0]; t <= CH.aerial[1]; t += 1 / 500) {
    const p = trackA(t);
    if (Math.abs(p.x) > 290) continue;
    if (!last || Math.abs(p.x - last.x) >= 26) { last = { t, di: 0, x: p.x, z: STRIPS[0], si: 0 }; captures.push(last); }
  }
}
const footprint = (() => {
  const segs = [], times = [];
  const hx = U.uFlashHalf.value.x, hz = U.uFlashHalf.value.y;
  for (const c of captures) {
    const cs = [[c.x - hx, c.z - hz], [c.x + hx, c.z - hz], [c.x + hx, c.z + hz], [c.x - hx, c.z + hz]];
    for (let k = 0; k < 4; k++) {
      const [ax, az] = cs[k], [bx, bz] = cs[(k + 1) % 4];
      const n = 8;
      for (let q = 0; q < n; q++) {
        const x0 = lerp(ax, bx, q / n), z0 = lerp(az, bz, q / n), x1 = lerp(ax, bx, (q + 1) / n), z1 = lerp(az, bz, (q + 1) / n);
        segs.push(x0, terrainH(x0, z0) + 0.5, z0, x1, terrainH(x1, z1) + 0.5, z1);
        times.push(c.t, 0.14, 0.36);
      }
    }
  }
  return timedLines(segs, times, 0x2F6BFF, 1.7, 'fp');
})();
scene.add(footprint);
const frustum = (() => {
  const lg = new LineSegmentsGeometry();
  lg.setPositions(new Float32Array(24));
  const lm = new LineMaterial({ color: 0x2F6BFF, linewidth: 1.4, transparent: true, depthWrite: false, opacity: 0 });
  lm.resolution.set(W, H);
  const lines = new LineSegments2(lg, lm); lines.frustumCulled = false;
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(36), 3));
  const fm = new THREE.MeshBasicMaterial({ color: 0x3D8BFF, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const faces = new THREE.Mesh(fg, fm); faces.frustumCulled = false;
  scene.add(lines, faces);
  return { lines, faces };
})();

// lidar fan + rays
const fanGeo = (() => {
  const N = 64, pos = new Float32Array((N + 1) * 3 + 3), uv = new Float32Array((N + 1) * 2 + 2), idx = [];
  for (let k = 0; k <= N; k++) { uv[k * 2] = k / N; uv[k * 2 + 1] = 1; }
  uv[(N + 1) * 2] = 0.5; uv[(N + 1) * 2 + 1] = 0;
  for (let k = 0; k < N; k++) idx.push(N + 1, k, k + 1);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.userData.N = N;
  return g;
})();
const fanMat = new THREE.ShaderMaterial({
  uniforms: { uTime: U.uTime, uA: { value: 0 } },
  transparent: true, depthWrite: false, side: THREE.DoubleSide,
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: /* glsl */`
    varying vec2 vUv; uniform float uTime, uA;
    void main() {
      float down = mix(0.95, 0.35, vUv.y);
      float stripes = 0.6 + 0.4 * sin(vUv.x * 190.0 - uTime * 26.0);
      float edge = smoothstep(0.0, 0.02, vUv.x) * smoothstep(1.0, 0.98, vUv.x);
      gl_FragColor = vec4(0.16, 0.44, 1.0, uA * 0.42 * down * stripes * edge);
    }`,
});
const fan = new THREE.Mesh(fanGeo, fanMat);
fan.frustumCulled = false;
scene.add(fan);
const rayGeo = new LineSegmentsGeometry();
rayGeo.setPositions(new Float32Array(18 * 6));
const rayMat = new LineMaterial({ color: 0x2F6BFF, linewidth: 1.6, transparent: true, depthWrite: false, opacity: 0 });
rayMat.resolution.set(W, H);
const rays = new LineSegments2(rayGeo, rayMat);
rays.frustumCulled = false;
scene.add(rays);

// ----------------------------------------------------- terrestrial scanner ---
const SCAN = new THREE.Vector3(65, terrainH(65, 30), 30);
const scanner = (() => {
  const g = new THREE.Group();
  const headY = 1.5;
  for (let k = 0; k < 3; k++) {
    const a = k * 2 * Math.PI / 3 + 0.4;
    const foot = new THREE.Vector3(Math.cos(a) * 0.62, 0, Math.sin(a) * 0.62);
    const top = new THREE.Vector3(Math.cos(a) * 0.07, headY - 0.04, Math.sin(a) * 0.07);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.013, foot.distanceTo(top), 10), DM.metal);
    leg.position.copy(foot).add(top).multiplyScalar(0.5);
    leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.clone().sub(foot).normalize());
    g.add(leg);
  }
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.05, 24), DM.dark); plate.position.y = headY; g.add(plate);
  const head = new THREE.Group(); head.position.y = headY + 0.025; g.add(head);
  const body = new THREE.Mesh(new RoundedBoxGeometry(0.26, 0.36, 0.21, 4, 0.035), DM.white); body.position.y = 0.2; head.add(body);
  const band = new THREE.Mesh(new RoundedBoxGeometry(0.265, 0.035, 0.215, 2, 0.012), DM.blue); band.position.y = 0.09; head.add(band);
  const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.13, 28), DM.glass); mirror.rotation.x = Math.PI / 2; mirror.position.set(0, 0.29, 0); head.add(mirror);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.013, 8, 20, Math.PI), DM.dark); handle.position.y = 0.39; head.add(handle);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), DM.glow); led.position.set(0.132, 0.33, 0.06); head.add(led);
  g.scale.setScalar(1.7);
  g.position.copy(SCAN);
  scene.add(g);
  return { group: g, head };
})();
const SCAN_HEAD_Y = SCAN.y + 1.7 * (1.5 + 0.025 + 0.29);
const SCAN_R = 50;
const localPts = (() => {
  const pos = [], attr = [];
  const R = rng(321);
  const sx = SCAN.x, sz = SCAN.z;
  const azf = (x, z) => ((Math.atan2(z - sz, x - sx) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2);
  for (let r = 1.6; r <= SCAN_R; r *= 1.055) {
    const n = 1500;
    for (let k = 0; k < n; k++) {
      const th = (k / n) * Math.PI * 2 + (R() - 0.5) * 0.001;
      const rr = r * (1 + (R() - 0.5) * 0.004);
      const x = sx + rr * Math.cos(th), z = sz + rr * Math.sin(th);
      if (inFootprint(x, z)) continue;
      pos.push(x, terrainH(x, z) + 0.1, z); attr.push(-1, R(), azf(x, z));
    }
  }
  for (const b of L.buildings) for (const p of b.parts) {
    const y0 = b.gy + (p.y0 || 0), y1 = Math.min(y0 + p.h, b.gy + 45);
    const xa = p.cx - p.w / 2, xb = p.cx + p.w / 2, za = p.cz - p.d / 2, zb = p.cz + p.d / 2;
    for (const [ax, az, bx, bz, nx, nz] of [[xa, za, xb, za, 0, -1], [xb, za, xb, zb, 1, 0], [xb, zb, xa, zb, 0, 1], [xa, zb, xa, za, -1, 0]]) {
      const mx = (ax + bx) / 2, mz = (az + bz) / 2;
      if ((sx - mx) * nx + (sz - mz) * nz <= 0) continue;
      if (Math.hypot(mx - sx, mz - sz) > SCAN_R + 20) continue;
      const len = Math.hypot(bx - ax, bz - az), s = 0.29;
      for (let u = s / 2; u < len; u += s) for (let v = y0 + s / 2; v < y1; v += s) {
        const f = (u + (R() - 0.5) * 0.14) / len;
        const x = ax + (bx - ax) * f + nx * 0.06, z = az + (bz - az) * f + nz * 0.06;
        if (Math.hypot(x - sx, z - sz) > SCAN_R + 8) continue;
        pos.push(x, v + (R() - 0.5) * 0.1, z); attr.push(v - b.gy, R(), azf(x, z));
      }
    }
  }
  for (const t of L.trees) {
    if (Math.hypot(t.x - sx, t.z - sz) > SCAN_R) continue;
    const cy = t.y + 1.7 + t.r;
    for (let k = 0; k < 170; k++) {
      const th = R() * Math.PI * 2, ph = Math.acos(1 - R() * 1.4);
      const x = t.x + t.r * Math.sin(ph) * Math.cos(th), z = t.z + t.r * Math.sin(ph) * Math.sin(th);
      pos.push(x, cy + t.r * Math.cos(ph) * 0.92, z); attr.push(cy - t.y, R(), azf(x, z));
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aP', new THREE.Float32BufferAttribute(attr, 3));
  const m = new THREE.ShaderMaterial({
    uniforms: { uSweep: { value: 0 }, uAlpha: { value: 1 }, uSize: { value: 0.1 }, uScale: ptsU.uScale },
    transparent: true, depthWrite: false,
    vertexShader: /* glsl */`
      attribute vec3 aP;
      uniform float uSweep, uAlpha, uSize, uScale;
      varying vec3 vCol; varying float vA;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        mv.xyz *= 1.0 - 0.3 / max(length(mv.xyz), 1.0);
        gl_Position = projectionMatrix * mv;
        float vis = step(aP.z, uSweep);
        float fresh = vis * exp(-(uSweep - aP.z) * 30.0);
        vec3 cG = vec3(0.50, 0.60, 0.86), cL = vec3(0.30, 0.46, 0.86), cH = vec3(0.12, 0.21, 0.54);
        vec3 c = aP.x < -0.5 ? cG : mix(cL, cH, smoothstep(2.0, 32.0, aP.x));
        c *= 0.86 + 0.24 * aP.y;
        c = mix(c, vec3(0.08, 0.45, 1.0), clamp(fresh, 0.0, 1.0));
        vCol = c; vA = vis * uAlpha;
        gl_PointSize = clamp(uSize * uScale / -mv.z * (1.0 + fresh), 1.4, 4.6);
        if (vA <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vCol; varying float vA;
      void main() { vec2 d = gl_PointCoord - 0.5; if (dot(d, d) > 0.25) discard; gl_FragColor = vec4(vCol, vA); }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false; pts.renderOrder = 2;
  scene.add(pts);
  return pts;
})();
const sweepFan = (() => {
  const N = 40, R = 46, pos = [0, 0, 0], idx = [];
  for (let k = 0; k <= N; k++) { const a = lerp(-38, 62, k / N) * deg; pos.push(Math.cos(a) * R, Math.sin(a) * R, 0); }
  for (let k = 0; k < N; k++) idx.push(0, k + 1, k + 2);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const m = new THREE.ShaderMaterial({
    uniforms: { uA: { value: 0 } }, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: 'varying float vR; void main(){ vR = length(position) / 46.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'varying float vR; uniform float uA; void main(){ gl_FragColor = vec4(0.16, 0.45, 1.0, uA * 0.30 * (1.0 - vR) * (1.0 - vR)); }',
  });
  const f = new THREE.Mesh(g, m);
  f.frustumCulled = false; f.renderOrder = 3;
  scene.add(f);
  return f;
})();
const SURVEY_MARKS = [[-9, 7], [8, -6], [-13, -10], [11, 13], [-5, 18], [16, -1]].map(([dx, dz]) => {
  const x = SCAN.x + dx, z = SCAN.z + dz;
  return { x, z, y: terrainH(x, z) };
});

// ------------------------------------------------------------ quantities ----
const QTY = { cx: -380, cz: 0, w: 140, d: 90 };
QTY.x0 = QTY.cx - QTY.w / 2; QTY.x1 = QTY.cx + QTY.w / 2; QTY.z0 = QTY.cz - QTY.d / 2; QTY.z1 = QTY.cz + QTY.d / 2;
{
  let s = 0, n = 0;
  for (let x = QTY.x0; x <= QTY.x1; x += 2) for (let z = QTY.z0; z <= QTY.z1; z += 2) { s += terrainH(x, z); n++; }
  QTY.pad = s / n - 0.15;
  let cut = 0, fill = 0;
  for (let x = QTY.x0 + 0.5; x < QTY.x1; x += 1) for (let z = QTY.z0 + 0.5; z < QTY.z1; z += 1) { const d = terrainH(x, z) - QTY.pad; if (d > 0) cut += d; else fill -= d; }
  QTY.cut = cut; QTY.fill = fill;
}
U.uQtyRect.value.set(QTY.x0, QTY.z0, QTY.x1, QTY.z1);
U.uPadH.value = QTY.pad;
const padMesh = new THREE.Mesh(new THREE.PlaneGeometry(QTY.w, QTY.d).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x3D7BFF, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
padMesh.position.set(QTY.cx, QTY.pad, QTY.cz);
padMesh.renderOrder = 4;
scene.add(padMesh);
const padEdge = (() => {
  const g = new LineSegmentsGeometry();
  const c = [[QTY.x0, QTY.z0], [QTY.x1, QTY.z0], [QTY.x1, QTY.z1], [QTY.x0, QTY.z1]], p = [];
  for (let k = 0; k < 4; k++) { const a = c[k], b = c[(k + 1) % 4]; p.push(a[0], 0, a[1], b[0], 0, b[1]); }
  for (let k = 1; k < 7; k++) { const x = lerp(QTY.x0, QTY.x1, k / 7); p.push(x, 0, QTY.z0, x, 0, QTY.z1); }
  for (let k = 1; k < 5; k++) { const z = lerp(QTY.z0, QTY.z1, k / 5); p.push(QTY.x0, 0, z, QTY.x1, 0, z); }
  g.setPositions(new Float32Array(p));
  const m = new LineMaterial({ color: 0x2B4DB3, linewidth: 1.6, transparent: true, opacity: 0, depthWrite: false });
  m.resolution.set(W, H);
  const l = new LineSegments2(g, m);
  l.frustumCulled = false; l.renderOrder = 5;
  scene.add(l);
  return l;
})();

// ----------------------------------------------------------------- road -----
const ROAD_CTRL = [[208, -150], [290, -218], [380, -258], [470, -240], [560, -296], [640, -338]];
const roadCurve = new THREE.CatmullRomCurve3(ROAD_CTRL.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
const ROAD_LEN = roadCurve.getLength();
const roadAt = (s) => { const p = roadCurve.getPointAt(clamp(s / ROAD_LEN)); p.y = terrainH(p.x, p.z) + 0.45; return p; };
const ROAD_MID = roadAt(ROAD_LEN * 0.6);
const roadU = { uS: { value: 0 } };
const road = (() => {
  const N = 760, HW = 6.5, pos = [], aS = [], aT = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N, p = roadCurve.getPointAt(u), tg = roadCurve.getTangentAt(u);
    const nl = Math.hypot(tg.x, tg.z), nx = -tg.z / nl, nz = tg.x / nl;
    for (const side of [-1, 1]) {
      const x = p.x + side * HW * nx, z = p.z + side * HW * nz;
      pos.push(x, terrainH(x, z) + 0.45, z); aS.push(u * ROAD_LEN); aT.push(side);
    }
    if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setIndex(idx);
  const m = new THREE.ShaderMaterial({
    uniforms: roadU, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8,
    vertexShader: 'attribute float aS; attribute float aT; varying float vS; varying float vT; void main(){ vS = aS; vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`
      varying float vS; varying float vT; uniform float uS;
      void main() {
        if (vS > uS) discard;
        float a = abs(vT);
        vec3 c = vec3(0.40, 0.42, 0.46);
        if (a > 0.9) c = vec3(0.82, 0.84, 0.88);
        float edge = step(0.80, a) * step(a, 0.855);
        float center = step(a, 0.025) * step(0.45, fract(vS / 12.0));
        c = mix(c, vec3(0.97), max(edge, center));
        float front = exp(-max(uS - vS, 0.0) / 7.0);
        c = mix(c, vec3(0.16, 0.45, 1.0), front * 0.85);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.frustumCulled = false; mesh.renderOrder = 2;
  scene.add(mesh);
  return mesh;
})();
const STATIONS = [];
for (let s = 0; s <= ROAD_LEN + 0.1; s += 100) STATIONS.push(s);

// ------------------------------------------------- 3D parcel (TAMAR) ------
// an underground car park registered as a 3D parcel below the public park
const PARK = L.blocks.find((b) => b.type === 'park');
const TP = { x0: PARK.cx - 13, x1: PARK.cx + 13, z0: PARK.cz - 10.5, z1: PARK.cz + 10.5 };
const PIT = { x0: PARK.x0 + 1, x1: PARK.x1 - 1, z0: PARK.z0 + 1, z1: PARK.z1 - 1 };
{
  let gmin = 1e9;
  for (let x = TP.x0; x <= TP.x1 + 0.01; x += 1) for (let z = TP.z0; z <= TP.z1 + 0.01; z += 1) gmin = Math.min(gmin, terrainH(x, z));
  TP.top = gmin - 1.6; TP.bot = TP.top - 6.4; PIT.bot = TP.bot - 1.8;
  TP.cx = (TP.x0 + TP.x1) / 2; TP.cz = (TP.z0 + TP.z1) / 2;
}
U.uCut.value.set(PIT.x0, PIT.z0, PIT.x1, PIT.z1);
U.uSink.value.set(PARK.x0 - 3.5, PARK.z0 - 3.5, PARK.x1 + 3.5, PARK.z1 + 3.5);
const ABS_H = 31.6; // local height -> metres above sea level (same datum as the survey marks)
const TAM_T0 = 20.35;
const tamG = new THREE.Group();
tamG.visible = false;
scene.add(tamG);
const soilMat = new THREE.ShaderMaterial({
  side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    attribute float aTop; attribute float aShade;
    varying float vD; varying float vS; varying vec3 vW;
    void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vD = aTop - w.y; vS = aShade; gl_Position = projectionMatrix * viewMatrix * w; }`,
  fragmentShader: /* glsl */`
    varying float vD; varying float vS; varying vec3 vW;
    float band(float d, float b, float fw) { return 1.0 - smoothstep(fw * 0.6, fw * 1.8, abs(d - b)); }
    void main() {
      float u = vW.x + vW.z;
      float d = vD + 0.30 * sin(u * 0.21) + 0.16 * sin(u * 0.63 + 1.7);
      vec3 c = vec3(0.62, 0.52, 0.42);
      c = mix(c, vec3(0.80, 0.70, 0.56), step(0.8, d));
      c = mix(c, vec3(0.90, 0.83, 0.69), step(3.4, d));
      c = mix(c, vec3(0.87, 0.85, 0.80), step(6.8, d));
      float fw = max(fwidth(d), 1e-4);
      float ln = max(band(d, 0.8, fw), max(band(d, 3.4, fw), band(d, 6.8, fw)));
      c *= 1.0 - 0.12 * ln;
      c *= vS * mix(1.0, 0.84, smoothstep(0.0, 11.0, vD));
      gl_FragColor = vec4(c, 1.0);
    }`,
});
function soilWall(ax, az, bx, bz, shade, n = 36) {
  const pos = [], top = [], sh = [], idx = [];
  for (let i = 0; i <= n; i++) {
    const x = lerp(ax, bx, i / n), z = lerp(az, bz, i / n), h = terrainH(x, z);
    pos.push(x, h, z, x, PIT.bot, z); top.push(h, h); sh.push(shade, shade);
    if (i < n) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aTop', new THREE.Float32BufferAttribute(top, 1));
  g.setAttribute('aShade', new THREE.Float32BufferAttribute(sh, 1));
  g.setIndex(idx);
  return g;
}
{
  const { x0, x1, z0, z1 } = PIT;
  for (const g of [soilWall(x0, z0, x1, z0, 1.0), soilWall(x1, z1, x0, z1, 0.82), soilWall(x0, z1, x0, z0, 0.9), soilWall(x1, z0, x1, z1, 0.96)]) tamG.add(new THREE.Mesh(g, soilMat));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([x0, PIT.bot, z0, x1, PIT.bot, z0, x1, PIT.bot, z1, x0, PIT.bot, z1], 3));
  g.setAttribute('aTop', new THREE.Float32BufferAttribute([1, 1, 1, 1].map(() => PIT.bot + 9.5), 1));
  g.setAttribute('aShade', new THREE.Float32BufferAttribute([0.95, 0.95, 0.95, 0.95], 1));
  g.setIndex([0, 2, 1, 0, 3, 2]);
  tamG.add(new THREE.Mesh(g, soilMat));
}
// the ground over the pit, drawn with the terrain shader so it can turn to glass
const lidGeo = new THREE.PlaneGeometry(PIT.x1 - PIT.x0 + 0.8, PIT.z1 - PIT.z0 + 0.8, 30, 30);
lidGeo.rotateX(-Math.PI / 2);
lidGeo.translate((PIT.x0 + PIT.x1) / 2, 0, (PIT.z0 + PIT.z1) / 2);
{
  const p = lidGeo.attributes.position;
  for (let k = 0; k < p.count; k++) p.setY(k, terrainH(p.getX(k), p.getZ(k)) + 0.05);
  lidGeo.computeVertexNormals();
}
const lidMat = new THREE.MeshLambertMaterial({ color: 0xF3F5F9, transparent: true, opacity: 1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
patchTerrain(lidMat, true);
const lid = new THREE.Mesh(lidGeo, lidMat);
lid.receiveShadow = true; lid.renderOrder = 30;
tamG.add(lid);
// the 3D parcel volume
const volGeo = new THREE.BoxGeometry(TP.x1 - TP.x0, TP.top - TP.bot, TP.z1 - TP.z0);
volGeo.translate(TP.cx, (TP.top + TP.bot) / 2, TP.cz);
const volMat = (side) => new THREE.ShaderMaterial({
  uniforms: { uA: { value: 0 } }, transparent: true, depthWrite: false, side,
  vertexShader: 'varying vec3 vN; void main(){ vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */`
    uniform float uA; varying vec3 vN;
    void main() {
      vec3 n = normalize(vN);
      float s = 0.80 + 0.20 * max(dot(n, normalize(vec3(-0.35, 0.85, 0.45))), 0.0);
      gl_FragColor = vec4(vec3(0.20, 0.45, 1.0) * s, uA * (n.y > 0.5 ? 1.15 : 1.0));
    }`,
});
const volBack = new THREE.Mesh(volGeo, volMat(THREE.BackSide));
const volFront = new THREE.Mesh(volGeo, volMat(THREE.FrontSide));
volBack.renderOrder = 20; volFront.renderOrder = 21;
const midGeo = new THREE.PlaneGeometry(TP.x1 - TP.x0, TP.z1 - TP.z0).rotateX(-Math.PI / 2).translate(TP.cx, (TP.top + TP.bot) / 2, TP.cz);
const midMesh = new THREE.Mesh(midGeo, new THREE.MeshBasicMaterial({ color: 0x2F6BFF, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
midMesh.renderOrder = 20;
tamG.add(volBack, volFront, midMesh);
const TAM_C = [[TP.x0, TP.z0], [TP.x1, TP.z0], [TP.x1, TP.z1], [TP.x0, TP.z1]];
const tamEdges = (() => {
  const segs = [], times = [];
  for (let k = 0; k < 4; k++) { const [ax, az] = TAM_C[k], [bx, bz] = TAM_C[(k + 1) % 4]; segs.push(ax, TP.bot, az, bx, TP.bot, bz); times.push(TAM_T0 + k * 0.07, 0.32, 1); }
  for (let k = 0; k < 4; k++) { const [ax, az] = TAM_C[k]; segs.push(ax, TP.bot, az, ax, TP.top, az); times.push(TAM_T0 + 0.36 + k * 0.05, 0.42, 1); }
  for (let k = 0; k < 4; k++) { const [ax, az] = TAM_C[k], [bx, bz] = TAM_C[(k + 1) % 4]; segs.push(ax, TP.top, az, bx, TP.top, bz); times.push(TAM_T0 + 0.8 + k * 0.07, 0.32, 1); }
  return timedLines(segs, times, 0x1F5BFF, 2.8, 'tam-e');
})();
const tamMid = (() => {
  const segs = [], times = [], y = (TP.top + TP.bot) / 2;
  for (let k = 0; k < 4; k++) { const [ax, az] = TAM_C[k], [bx, bz] = TAM_C[(k + 1) % 4]; segs.push(ax, y, az, bx, y, bz); times.push(TAM_T0 + 1.05 + k * 0.05, 0.3, 0.55); }
  return timedLines(segs, times, 0x1F5BFF, 1.5, 'tam-m');
})();
tamEdges.renderOrder = 22; tamMid.renderOrder = 22;
tamG.add(tamEdges, tamMid);
// surface parcel (the park) and the footprint of the 3D parcel projected on the surface
function groundLoop(rect, lift, n = 12) {
  const c = [[rect.x0, rect.z0], [rect.x1, rect.z0], [rect.x1, rect.z1], [rect.x0, rect.z1]], p = [];
  for (let k = 0; k < 4; k++) {
    const [ax, az] = c[k], [bx, bz] = c[(k + 1) % 4];
    for (let q = 0; q < n; q++) {
      const xa = lerp(ax, bx, q / n), za = lerp(az, bz, q / n), xb = lerp(ax, bx, (q + 1) / n), zb = lerp(az, bz, (q + 1) / n);
      p.push(xa, terrainH(xa, za) + lift, za, xb, terrainH(xb, zb) + lift, zb);
    }
  }
  return p;
}
function fatLines(p, color, width, order) {
  const g = new LineSegmentsGeometry();
  g.setPositions(new Float32Array(p));
  const m = new LineMaterial({ color, linewidth: width, transparent: true, opacity: 0, depthWrite: false });
  m.resolution.set(W, H);
  const l = new LineSegments2(g, m);
  l.frustumCulled = false; l.renderOrder = order;
  return l;
}
const parkLine = fatLines(groundLoop(PARK, 0.35), 0x1B2F73, 2.6, 31);
tamG.add(parkLine);

// ----------------------------------------------------------- overlays -----
const SVGNS = 'http://www.w3.org/2000/svg';
const ov = $('ov'), labels = $('labels'), scrim = $('scrim');
function svgEl(tag, attrs, parent = ov) { const e = document.createElementNS(SVGNS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; }
function div(cls, html, parent = labels) { const e = document.createElement('div'); e.className = cls; e.innerHTML = html; parent.appendChild(e); return e; }
const _v = new THREE.Vector3();
function proj(x, y, z) { _v.set(x, y, z).project(camera); return [(_v.x * 0.5 + 0.5) * W, (-_v.y * 0.5 + 0.5) * H, _v.z]; }
const show = (el, on) => { el.style.display = on ? '' : 'none'; };
const defs = svgEl('defs', {});
const pat = svgEl('pattern', { id: 'hatch', patternUnits: 'userSpaceOnUse', width: 12, height: 12, patternTransform: 'rotate(45)' }, defs);
svgEl('rect', { width: 12, height: 12, fill: 'rgba(200,55,47,0.16)' }, pat);
svgEl('line', { x1: 0, y1: 0, x2: 0, y2: 12, stroke: '#C8372F', 'stroke-width': 3.5 }, pat);

// HUD (drone / scanner)
const hudLine = svgEl('polyline', { fill: 'none', stroke: '#223C8A', 'stroke-width': 1.5, 'stroke-opacity': 0.8 });
const hudDot = svgEl('circle', { r: 5, fill: '#fff', stroke: '#223C8A', 'stroke-width': 2 });
const hud = div('hud', '');

// survey marks (ground chapter)
const markG = svgEl('g', {});
const marks = SURVEY_MARKS.map((m) => ({ ...m, tri: svgEl('path', { fill: '#fff', stroke: '#223C8A', 'stroke-width': 2.4 }, markG), lbl: div('lbl smark', `+${(m.y + 31.6).toFixed(2)}`) }));

// dimension annotations on the hero tower (model chapter)
const shaft = HERO.parts[1], crown = HERO.parts[2];
const heroTop = HERO.gy + (crown.y0 + crown.h);
const heroH = heroTop - HERO.gy;
const dimG = svgEl('g', {});
const mkDim = () => ({ main: svgEl('line', { stroke: '#223C8A', 'stroke-width': 2.2 }, dimG), t1: svgEl('line', { stroke: '#223C8A', 'stroke-width': 2.2 }, dimG), t2: svgEl('line', { stroke: '#223C8A', 'stroke-width': 2.2 }, dimG),
  e1: svgEl('line', { stroke: '#223C8A', 'stroke-width': 1.2, 'stroke-dasharray': '5 5', 'stroke-opacity': 0.7 }, dimG), e2: svgEl('line', { stroke: '#223C8A', 'stroke-width': 1.2, 'stroke-dasharray': '5 5', 'stroke-opacity': 0.7 }, dimG) });
const dimA = mkDim(), dimB = mkDim();
const dimLblA = div('lbl dimlbl', `${heroH.toFixed(2)} מ׳`);
const dimLblB = div('lbl dimlbl', `${shaft.d.toFixed(2)} מ׳`);
const surveyPt = { ring: svgEl('circle', { r: 9, fill: 'none', stroke: '#223C8A', 'stroke-width': 2 }, dimG), h: svgEl('line', { stroke: '#223C8A', 'stroke-width': 1.6 }, dimG), v: svgEl('line', { stroke: '#223C8A', 'stroke-width': 1.6 }, dimG), lead: svgEl('polyline', { fill: 'none', stroke: '#223C8A', 'stroke-width': 1.4 }, dimG) };
const surveyLbl = div('lbl elev', 'E 184 312.45 &nbsp;·&nbsp; N 665 087.32 &nbsp;·&nbsp; H 112.40');

// parcels (registration + expropriation chapters)
const PARCEL_BLOCKS = L.blocks.filter((b) => (b.i === 4 || b.i === 5) && (b.j === 3 || b.j === 4));
const parcelG = svgEl('g', {});
const parcelItems = [];
let pn = 11;
const GUSH = { '5,3': 6574, '5,4': 6575, '4,3': 6571, '4,4': 6572 };
for (const b of PARCEL_BLOCKS) {
  for (const l of b.lots) {
    const path = svgEl('path', { fill: 'none', stroke: '#223C8A', 'stroke-width': 2, 'stroke-linejoin': 'round' }, parcelG);
    const num = div('lbl pnum', String(pn));
    parcelItems.push({ lot: l, block: b, path, num, n: pn });
    pn++;
  }
  b.outline = svgEl('path', { fill: 'none', stroke: '#1B2F73', 'stroke-width': 3.4, 'stroke-linejoin': 'round' }, parcelG);
  b.gushLbl = div('lbl gush', `גוש ${GUSH[b.i + ',' + b.j]}`);
}
const vtxDots = [];
for (const it of parcelItems) for (const [x, z] of [[it.lot.x0, it.lot.z0], [it.lot.x1, it.lot.z0], [it.lot.x1, it.lot.z1], [it.lot.x0, it.lot.z1]]) {
  if (vtxDots.some((d) => Math.abs(d.x - x) < 0.5 && Math.abs(d.z - z) < 0.5)) continue;
  vtxDots.push({ x, z, el: svgEl('circle', { r: 4.2, fill: '#fff', stroke: '#223C8A', 'stroke-width': 2 }, parcelG) });
}
const hiBlock = PARCEL_BLOCKS.find((b) => b.i === 5 && b.j === 3);
const hiItem = parcelItems.find((it) => it.block === hiBlock && Math.abs((it.lot.x0 + it.lot.x1) / 2 - hiBlock.cx) < 2 && it.lot.z0 < hiBlock.cz);
const hiFill = svgEl('path', { fill: 'rgba(34,60,138,0.42)', stroke: '#0F2466', 'stroke-width': 4.5, 'stroke-linejoin': 'round' }, parcelG);
const stamp = $('stamp');

// expropriation strip along the widened street
const EXP = { x0: 74.5, x1: 185.5, z0: 67.5, d0: 4.2, d1: 8.6 };
const expDepth = (x) => lerp(EXP.d0, EXP.d1, clamp((x - EXP.x0) / (EXP.x1 - EXP.x0)));
const expG = svgEl('g', {});
const expPoly = svgEl('path', { fill: 'url(#hatch)', stroke: '#C8372F', 'stroke-width': 3, 'stroke-linejoin': 'round' }, expG);
const expLine = svgEl('path', { fill: 'none', stroke: '#C8372F', 'stroke-width': 2.6, 'stroke-dasharray': '16 9' }, expG);
const expLots = parcelItems.filter((it) => it.block.j === 4 && it.lot.z0 <= EXP.z0 + 0.5 && it.lot.x1 > EXP.x0 && it.lot.x0 < EXP.x1).map((it) => {
  const x0 = Math.max(it.lot.x0, EXP.x0), x1 = Math.min(it.lot.x1, EXP.x1);
  const area = (x1 - x0) * (expDepth(x0) + expDepth(x1)) / 2;
  return { it, x0, x1, area, lbl: div('lbl redchip', `${Math.round(area)} מ״ר`) };
});
const expLegend = div('lbl expleg', '<i></i>שטח להפקעה');

// registration plan (tatsar): four blocks around the park, then the 3D parcel under it
const TAT_BLOCKS = L.blocks.filter((b) => (b.i === 0 || b.i === 1) && (b.j === 4 || b.j === 5));
const TGUSH = { '0,4': 6651, '1,4': 6652, '0,5': 6655, '1,5': 6656 };
const tatG = svgEl('g', {});
const tatItems = [];
{
  let n = 11;
  for (const b of TAT_BLOCKS) {
    for (const l of b.lots) {
      const path = svgEl('path', { fill: 'none', stroke: '#223C8A', 'stroke-width': 2, 'stroke-linejoin': 'round' }, tatG);
      tatItems.push({ lot: l, block: b, path, num: div('lbl pnum', String(n)), park: b.type === 'park' });
      n++;
    }
    b.tOutline = svgEl('path', { fill: 'none', stroke: '#1B2F73', 'stroke-width': 3.4, 'stroke-linejoin': 'round' }, tatG);
    b.tGush = div('lbl gush', `גוש ${TGUSH[b.i + ',' + b.j]}`);
  }
}
const tatDots = [];
for (const it of tatItems) for (const [x, z] of [[it.lot.x0, it.lot.z0], [it.lot.x1, it.lot.z0], [it.lot.x1, it.lot.z1], [it.lot.x0, it.lot.z1]]) {
  if (tatDots.some((d) => Math.abs(d.x - x) < 0.5 && Math.abs(d.z - z) < 0.5)) continue;
  tatDots.push({ x, z, el: svgEl('circle', { r: 4.2, fill: '#fff', stroke: '#223C8A', 'stroke-width': 2 }, tatG) });
}
const parkItem = tatItems.find((it) => it.park);
const parkFill = svgEl('path', { fill: 'rgba(31,91,255,0.26)', stroke: '#1F5BFF', 'stroke-width': 4, 'stroke-linejoin': 'round' }, tatG);
const tamSvg = svgEl('g', {});
const tamDots = TAM_C.map(([x, z]) => ({ p: [x, TP.top, z], el: svgEl('circle', { r: 5, fill: '#fff', stroke: '#1F5BFF', 'stroke-width': 2.4 }, tamSvg) }));
const tamLead = [0, 1, 2].map(() => svgEl('polyline', { fill: 'none', stroke: '#1F5BFF', 'stroke-width': 1.8 }, tamSvg));
const fmtAbs = (h) => '+' + (h + ABS_H).toFixed(2);
const vChip = div('lbl vchip', 'חלקה תלת־ממדית 501');
const lvlTop = div('lbl lvl', `<span class="k">מפלס עליון</span><span dir="ltr">${fmtAbs(TP.top)}</span>`);
const lvlBot = div('lbl lvl', `<span class="k">מפלס תחתון</span><span dir="ltr">${fmtAbs(TP.bot)}</span>`);
const STAMP_XY = [840, 245];
const xyzLbl = div('lbl elev', `X 181 342.18 &nbsp;·&nbsp; Y 668 127.46 &nbsp;·&nbsp; Z ${(TP.top + ABS_H).toFixed(2)}`);

// road stationing
const staG = svgEl('g', {});
const stations = STATIONS.map((s) => {
  const k = String(Math.round(s)).padStart(3, '0');
  return { s, tick: svgEl('line', { stroke: '#223C8A', 'stroke-width': 2.4 }, staG), lbl: div('lbl sta', `0+${k}`) };
});
{
  // typical cross-section drawing (static)
  const x = $('xsecSvg');
  const S = (tag, a) => svgEl(tag, a, x);
  S('path', { d: 'M20,92 L78,92 L108,70 L326,70 L356,92 L414,92', fill: 'none', stroke: '#8A94A8', 'stroke-width': 2 });
  S('path', { d: 'M108,70 L326,70 L326,78 L108,78 Z', fill: '#5E636B' });
  S('path', { d: 'M108,70 L140,70 M294,70 L326,70', stroke: '#C9CDD3', 'stroke-width': 8 });
  S('line', { x1: 217, y1: 62, x2: 217, y2: 86, stroke: '#223C8A', 'stroke-width': 1.5, 'stroke-dasharray': '4 3' });
  for (const [a, b, lbl] of [[140, 217, '3.50'], [217, 294, '3.50'], [108, 140, '1.50'], [294, 326, '1.50']]) {
    S('line', { x1: a, y1: 44, x2: b, y2: 44, stroke: '#2B4DB3', 'stroke-width': 1.5 });
    S('path', { d: `M${a},39 L${a},49 M${b},39 L${b},49`, stroke: '#2B4DB3', 'stroke-width': 1.5 });
    const tx0 = S('text', { x: (a + b) / 2, y: 36, 'font-size': 15, 'font-family': 'Heebo', 'font-weight': 700, fill: '#2B4DB3', 'text-anchor': 'middle' });
    tx0.textContent = lbl;
  }
  const t1 = S('text', { x: 60, y: 118, 'font-size': 14, 'font-family': 'Heebo', 'font-weight': 600, fill: '#6B7892', 'text-anchor': 'middle' }); t1.textContent = '1:2';
  const t2 = S('text', { x: 374, y: 118, 'font-size': 14, 'font-family': 'Heebo', 'font-weight': 600, fill: '#6B7892', 'text-anchor': 'middle' }); t2.textContent = '1:2';
}

function polyPath(pts) { return 'M' + pts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z'; }
function pathLen(pts) { let s = 0; for (let k = 0; k < pts.length; k++) { const a = pts[k], b = pts[(k + 1) % pts.length]; s += Math.hypot(b[0] - a[0], b[1] - a[1]); } return s; }
function rectScreen(x0, z0, x1, z1) { const y = terrainH((x0 + x1) / 2, (z0 + z1) / 2) + 0.5; return [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => proj(x, y, z)); }
const lotScreen = (l) => rectScreen(l.x0, l.z0, l.x1, l.z1);
function setLine(el, a, b, p = 1) {
  el.setAttribute('x1', a[0]); el.setAttribute('y1', a[1]);
  el.setAttribute('x2', a[0] + (b[0] - a[0]) * p); el.setAttribute('y2', a[1] + (b[1] - a[1]) * p);
}
function tick(el, a, b, len) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  const nx = -dy / l, ny = dx / l;
  el.setAttribute('x1', a[0] - nx * len); el.setAttribute('y1', a[1] - ny * len);
  el.setAttribute('x2', a[0] + nx * len); el.setAttribute('y2', a[1] + ny * len);
}

// DOM cards
const legend = $('legend'), sheetWrap = $('sheetWrap'), sheet = $('sheet'), areaTable = $('areaTable'), qtyCard = $('qtyCard'), xsec = $('xsec');
const glCanvas = $('gl');
buildPlan($('plan'));
$('areaRows').innerHTML = areaRowsHTML();
const areaRows = [...document.querySelectorAll('#areaRows tr')];
const qCut = $('qCut'), qFill = $('qFill'), qBal = $('qBal'), qOk = qtyCard.querySelector('.ok');

// --------------------------------------------------------------- logo -----
const logoBug = $('logoBug');
const LOGO_AR = 258.66 / 187.26;

// ----------------------------------------------------------- captions -----
const CAPT = [[0.5, 6.9]];
for (const k of NORDER.slice(1, 12)) CAPT.push([NCH[k][0] + 0.2, NCH[k][1] - 0.62]);
const CAPS = CAPT.map(([tin, tout], i) => {
  const el = $('cap' + i);
  const head = el.querySelectorAll('.brand .ln, .h .ln').length;
  return { el, tin, tout, head, lines: [...el.querySelectorAll('.ln > span')], accent: el.querySelector('.accent') };
});
function capUpdate(c, t) {
  const on = t > c.tin - 0.05 && t < c.tout + 0.7;
  c.el.style.display = on ? 'block' : 'none';
  if (!on) return;
  const outP = (k) => easeIn3(seg(t, c.tout + k * 0.04, c.tout + k * 0.04 + 0.38));
  c.lines.forEach((ln, k) => {
    const st = c.tin + 0.08 + k * 0.1 + (k >= c.head ? 0.16 : 0);
    const pin = easeOutExpo(seg(t, st, st + 0.85));
    const po = outP(k);
    ln.style.transform = `translateY(${(1 - pin) * 112 - po * 112}%)`;
    ln.style.opacity = String(Math.min(1, pin * 1.6) * (1 - po));
  });
  const ain = easeOutExpo(seg(t, c.tin + 0.3, c.tin + 1.1));
  c.accent.style.transform = `scaleX(${ain * (1 - outP(c.head))})`;
}

// -------------------------------------------------------------- camera -----
const camI = { az: mtrack([[0, 0], [2.25, -3], [4.9, -12], [7.5, -21]]), el: mtrack([[0, 89.3], [2.25, 88.2], [4.9, 60], [7.5, 38]]), dist: mtrack([[0, 660], [2.25, 610], [4.9, 480], [7.5, 395]]),
  tx: mtrack([[0, 72], [7.5, 52]]), ty: mtrack([[0, 0], [7.5, 8]]), tz: mtrack([[0, 6], [7.5, 6]]) };
const camP = { az: mtrack([[7.5, 163], [13.3, 180], [17.5, 181.5]]), el: mtrack([[7.5, 60], [13.3, 89.3], [17.5, 89.5]]), dist: mtrack([[7.5, 620], [13.3, 470], [17.5, 452]]) };
const camT = {
  tx: mtrack([[17.5, -131], [19.3, -129], [21.4, TP.cx], [23.75, TP.cx]]),
  ty: mtrack([[17.5, -5], [19.3, -5], [21.4, TP.top - 1], [23.75, TP.top - 1]]),
  tz: mtrack([[17.5, 119], [19.3, 118], [21.4, TP.cz], [23.75, TP.cz]]),
  az: mtrack([[17.5, -4], [19.3, -8], [21.4, -20], [23.75, -26]]),
  el: mtrack([[17.5, 66], [19.3, 62], [21.4, 39], [23.75, 37]]),
  dist: mtrack([[17.5, 455], [19.3, 440], [21.4, 175], [23.75, 166]]),
  off: mtrack([[17.5, 0.17], [19.3, 0.16], [21.4, 0.10], [23.75, 0.10]]),
};
const camG = { az: mtrack([[17.5, 170], [22.5, 202]]), el: mtrack([[17.5, 45], [22.5, 50]]), dist: mtrack([[17.5, 64], [22.5, 70]]) };
const camH = { az: mtrack([[22.5, 62], [24.3, 70], [25.9, 88], [27.1, 90], [27.5, 90]]), el: mtrack([[22.5, 15], [24.3, 24], [25.9, 66], [27.1, 72], [27.5, 73]]),
  ld: mtrack([[22.5, Math.log(31)], [24.3, Math.log(36)], [25.9, Math.log(60)], [27.1, Math.log(78)], [27.5, Math.log(84)]]) };
const camL = { az: mtrack([[27.5, 22], [32.5, 31]]), el: mtrack([[27.5, 28], [32.5, 29]]) };
const camM = { az: mtrack([[32.5, 58], [37.5, 100]]), el: mtrack([[32.5, 23], [37.5, 21]]), dist: mtrack([[32.5, 225], [37.5, 205]]) };
const camX = { az: mtrack([[47.5, 180], [52.5, 181.5]]), dist: mtrack([[47.5, 372], [52.5, 342]]) };
const camQ = { az: mtrack([[52.5, 32], [57.5, 52]]), el: mtrack([[52.5, 37], [57.5, 33]]), dist: mtrack([[52.5, 340], [57.5, 305]]) };
const camR = { az: mtrack([[57.5, 184], [62.5, 196]]), el: mtrack([[57.5, 34], [62.5, 31]]), dist: mtrack([[57.5, 470], [62.5, 430]]) };
function orbit(tx, ty, tz, az, el, dist, fov, offset = 0) {
  const a = az * deg, e = el * deg;
  camera.fov = fov;
  camera.up.set(0, 1, 0);
  camera.position.set(tx + dist * Math.cos(e) * Math.sin(a), ty + dist * Math.sin(e), tz + dist * Math.cos(e) * Math.cos(a));
  camera.lookAt(tx, ty, tz);
  if (offset) {
    camera.updateMatrixWorld();
    const off = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).multiplyScalar(dist * offset);
    camera.position.add(off);
    camera.lookAt(tx + off.x, ty + off.y, tz + off.z);
  }
}
function setCamera(t, ch) {
  switch (ch) {
    case 'intro': orbit(camI.tx(t), camI.ty(t), camI.tz(t), camI.az(t), camI.el(t), camI.dist(t), 30); break;
    case 'taba': orbit(72, 0, 62, camP.az(t), camP.el(t), camP.dist(t), 21); break;
    case 'tatsar': orbit(camT.tx(t), camT.ty(t), camT.tz(t), camT.az(t), camT.el(t), camT.dist(t), 22, camT.off(t)); break;
    case 'ground': orbit(SCAN.x - 2, SCAN.y + 4, SCAN.z + 6, camG.az(t), camG.el(t), camG.dist(t), 36, 0.1); break;
    case 'aerial': { const p = trackA(t); orbit(p.x, p.y - 0.6, p.z, camH.az(t), camH.el(t), Math.exp(camH.ld(t)), 34, lerp(0.24, 0.17, seg(t, 24.3, 25.9))); break; }
    case 'lidar': { const p = trackL(t); orbit(p.x + 55, 52, 6, camL.az(t), camL.el(t), 265, 30); break; }
    case 'model': orbit(36, 36, -30, camM.az(t), camM.el(t), camM.dist(t), 30); break;
    case 'arch': case 'areas': orbit(0, 0, 0, 0, 45, 500, 30); break;
    case 'expro': orbit(96, 0, 84, camX.az(t), 89.4, camX.dist(t), 21); break;
    case 'qty': orbit(QTY.cx, QTY.pad, QTY.cz, camQ.az(t), camQ.el(t), camQ.dist(t) * 1.18, 30, 0.2); break;
    case 'roads': orbit(ROAD_MID.x, ROAD_MID.y, ROAD_MID.z + 62, camR.az(t), camR.el(t), camR.dist(t), 30); break;
    default: {
      const k = t - CH.end[0];
      camera.fov = 24;
      camera.position.set(720 - k * 6, 1500, 680 + 0.1);
      camera.up.set(0, 0, -1);
      camera.lookAt(720 - k * 6, 0, 680);
    }
  }
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

// ------------------------------------------------------------ helpers -----
function trackState(tr, t) {
  const p = tr(t), p1 = tr(t + 0.02), p0 = tr(t - 0.02);
  const v = p1.clone().sub(p0).multiplyScalar(25);
  const acc = p1.clone().add(p0).sub(p.clone().multiplyScalar(2)).multiplyScalar(2500);
  return { p, v, acc };
}
function placeDrone(d, tr, t, seed = 0, mode = 'cam') {
  const { p, v, acc } = trackState(tr, t);
  const sp = Math.hypot(v.x, v.z);
  const yaw = Math.atan2(-v.z, v.x);
  const right = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
  const roll = clamp(acc.dot(right) / 900, -0.4, 0.4);
  const pitch = -clamp(sp / 480, 0, 0.26);
  const bob = Math.sin(t * 2.1 + seed) * 0.25;
  d.group.visible = true;
  d.group.position.set(p.x, p.y + bob, p.z);
  d.group.rotation.set(roll, yaw, pitch, 'YZX');
  const cd = camera.position.distanceTo(d.group.position);
  d.group.scale.setScalar(DRONE_S * (1 + 0.95 * clamp((cd - 40) / 300)) * (mode === 'lidar' ? 1.5 : 1));
  d.props.forEach((pr, k) => { pr.rotation.y = t * 2 * Math.PI * (2.2 + k * 0.13) * (k % 2 ? 1 : -1); });
  animateDrone(d, t, mode);
  return p;
}
function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
let treeMode = 'grow';
function setTreeMode(m) { if (m === treeMode) return; treeMode = m; setTreeDelayMode(m); }

// ------------------------------------------------------------- update -----
function resetState() {
  U.uContourA.value = 0; U.uContourR.value = 5000; U.uMinorA.value = 1; U.uClayA.value = 1;
  U.uPlanA.value = 0; U.uPlanR.value = 0; U.uOrthoA.value = 0;
  for (let s = 0; s < 6; s++) U.uStrip.value[s].set(STRIPS[s], U.uFlashHalf.value.y, 1, -1);
  for (const f of U.uFlash.value) f.set(0, 0, 0, 0);
  U.uScanX.value = 1e5; U.uScanGlow.value = 0; U.uPlain.value = 0; U.uPlainX.value = 1e5;
  U.uGridA.value = 0; U.uZoneA.value = 0; U.uGrow.value = 1; U.uFillOn.value = 0; U.uFill.value = 0; U.uQtyA.value = 0;
  points.visible = localPts.visible = sweepFan.visible = wf.visible = footprint.visible = false;
  frustum.lines.visible = frustum.faces.visible = fan.visible = rays.visible = false;
  drone0.group.visible = drone1.group.visible = scanner.group.visible = false;
  padMesh.visible = padEdge.visible = road.visible = false;
  tamG.visible = false; U.uCutOn.value = 0; U.uSinkA.value = 0;
  setDelayMode('grow'); setTreeMode('grow');
}

function update(tn) {
  const ch = chapterAtN(tn);
  const t = toV2(tn, ch);
  U.uTime.value = t;
  resetState();
  setCamera(t, ch);
  ptsU.uScale.value = H / (2 * Math.tan(camera.fov * deg / 2));
  scene.fog.near = 900; scene.fog.far = 2800;

  if (ch === 'intro') {
    U.uClayA.value = easeInOut(seg(t, 0.7, 2.1));
    U.uContourR.value = lerp(0, 1650, easeOut3(seg(t, 0.15, 2.8)));
    U.uContourA.value = 1;
    U.uPlanR.value = lerp(0, 560, easeOut3(seg(t, 0.6, 2.8)));
    U.uPlanA.value = 1 - seg(t, 4.0, 6.2);
    U.uGrow.value = seg(t, 2.8, 6.3);
  } else if (ch === 'taba') {
    U.uZoneA.value = easeInOut(seg(t, 7.7, 8.8));
  } else if (ch === 'tatsar') {
    U.uZoneA.value = 0.42;
    U.uCutOn.value = 1;
    tamG.visible = true;
    U.uSinkA.value = easeInOut(seg(t, 19.75, 20.6));
    lid.material.opacity = lerp(1, 0.32, easeInOut(seg(t, 19.9, 20.75)));
    const fa = easeInOut(seg(t, 20.85, 21.35));
    volFront.material.uniforms.uA.value = 0.30 * fa;
    volBack.material.uniforms.uA.value = 0.16 * fa;
    midMesh.material.opacity = 0.10 * fa;
    tamEdges.material.uniforms.uTime.value = t;
    tamMid.material.uniforms.uTime.value = t;
    parkLine.material.opacity = 0.9 * easeInOut(seg(t, 19.9, 20.4));
  } else if (ch === 'ground') {
    scanner.group.visible = true;
    const sw = seg(t, 17.85, 21.9);
    scanner.head.rotation.y = -sw * Math.PI * 2 + 0.6;
    localPts.visible = true;
    localPts.material.uniforms.uSweep.value = sw;
    sweepFan.visible = sw > 0 && sw < 1;
    sweepFan.material.uniforms.uA.value = Math.min(seg(t, 17.85, 18.1), 1 - seg(t, 21.7, 21.9));
    sweepFan.position.set(SCAN.x, SCAN_HEAD_Y, SCAN.z);
    sweepFan.rotation.set(0, -sw * Math.PI * 2, 0);
    placeDrone(drone1, trackBg, t, 3);
  } else if (ch === 'aerial') {
    U.uOrthoA.value = 1;
    let lastCap = null;
    for (const c of captures) {
      if (c.t > t) break;
      const v = U.uStrip.value[c.si];
      if (v.z > v.w) { v.z = c.x - 45; v.w = c.x + 45; } else { v.z = Math.min(v.z, c.x - 45); v.w = Math.max(v.w, c.x + 45); }
      lastCap = c;
    }
    const p = placeDrone(drone0, trackA, t);
    const age = lastCap ? t - lastCap.t : 99;
    const amt = lastCap && age < 0.9 ? Math.exp(-age * 5.5) : 0;
    if (lastCap) U.uFlash.value[0].set(lastCap.x, lastCap.z, amt, 0);
    frustum.lines.material.opacity = amt * 0.9;
    frustum.faces.material.opacity = amt * 0.07;
    frustum.lines.visible = frustum.faces.visible = amt > 0.01;
    if (amt > 0.01) {
      const apex = droneEye(drone0);
      const c = lastCap, hx = 45, hz = 38;
      const cs = [[c.x - hx, c.z - hz], [c.x + hx, c.z - hz], [c.x + hx, c.z + hz], [c.x - hx, c.z + hz]].map(([x, z]) => [x, terrainH(x, z) + 0.5, z]);
      const lp = [];
      for (const q of cs) lp.push(...apex, ...q);
      frustum.lines.geometry.setPositions(new Float32Array(lp));
      const fp = frustum.faces.geometry.attributes.position;
      for (let k = 0; k < 4; k++) { const a = cs[k], b = cs[(k + 1) % 4]; fp.setXYZ(k * 3, ...apex); fp.setXYZ(k * 3 + 1, ...a); fp.setXYZ(k * 3 + 2, ...b); }
      fp.needsUpdate = true;
    }
    footprint.visible = true;
    footprint.material.uniforms.uTime.value = t;
    footprint.material.uniforms.uAlpha.value = 1;
  } else if (ch === 'lidar') {
    U.uOrthoA.value = 1;
    for (let s = 0; s < 6; s++) U.uStrip.value[s].set(STRIPS[s], U.uFlashHalf.value.y, -260, 260);
    const scanOn = t >= 27.8 && t <= 32.2;
    const scanX = t < 27.8 ? 1e5 : (t <= 32.2 ? trackL(t).x : -1e5);
    U.uScanX.value = scanX; U.uScanGlow.value = scanOn ? 1 : 0;
    U.uPlain.value = 1; U.uPlainX.value = scanX;
    points.visible = true; ptsU.uScanMode.value = 1; ptsU.uAlpha.value = 1; ptsU.uSize.value = 0.95;
    const p = placeDrone(drone0, trackL, t, 0, 'lidar');
    const fanA = scanOn ? Math.min(seg(t, 27.8, 28.1), 1 - seg(t, 31.9, 32.2)) : 0;
    fanMat.uniforms.uA.value = fanA;
    fan.visible = rays.visible = fanA > 0.001;
    if (fanA > 0.001) {
      const apex = droneEye(drone0);
      const N = fanGeo.userData.N, pos = fanGeo.attributes.position;
      for (let k = 0; k <= N; k++) { const z = lerp(-205, 205, k / N); pos.setXYZ(k, p.x, terrainH(p.x, z) + 0.4, z); }
      pos.setXYZ(N + 1, ...apex);
      pos.needsUpdate = true;
      const R = rng(Math.floor(t * 30) + 11), rp = [];
      for (let k = 0; k < 16; k++) { const z = lerp(-200, 200, R()); rp.push(...apex, p.x, terrainH(p.x, z) + 0.4, z); }
      rp.push(...apex, p.x, terrainH(p.x, -205) + 0.4, -205, ...apex, p.x, terrainH(p.x, 205) + 0.4, 205);
      rayGeo.setPositions(new Float32Array(rp));
      rayMat.opacity = 0.8 * fanA;
    }
  } else if (ch === 'model') {
    setDelayMode('model'); setTreeMode('model');
    U.uPlain.value = 1; U.uPlainX.value = -1e5;
    U.uFillOn.value = 1; U.uFill.value = lerp(-0.1, 1.0, seg(t, 34.0, 35.9));
    points.visible = true; ptsU.uScanMode.value = 0;
    ptsU.uAlpha.value = 1 - easeInOut(seg(t, 35.0, 36.2));
    ptsU.uSize.value = lerp(0.95, 0.78, seg(t, 32.5, 34.5));
    wf.visible = true;
    wf.material.uniforms.uTime.value = t;
    wf.material.uniforms.uAlpha.value = 1 - 0.35 * seg(t, 36.0, 36.8);
    U.uGridA.value = seg(t, 33.6, 35.0);
  } else if (ch === 'qty') {
    U.uQtyA.value = easeInOut(seg(t, 52.8, 53.8));
    U.uContourA.value = 0.45; U.uMinorA.value = 0.5;
    const r = easeOut3(seg(t, 53.2, 54.4));
    padMesh.visible = padEdge.visible = r > 0.001;
    padMesh.position.y = QTY.pad - 14 * (1 - r) + 0.05;
    padEdge.position.y = padMesh.position.y + 0.05;
    padMesh.material.opacity = 0.2 * r;
    padEdge.material.opacity = 0.9 * r;
  } else if (ch === 'roads') {
    U.uContourA.value = 0.5; U.uMinorA.value = 0.45;
    road.visible = true;
    roadU.uS.value = ROAD_LEN * easeInOut(seg(t, 57.7, 61.3));
  } else if (ch === 'end') {
    U.uContourA.value = 1; U.uMinorA.value = 0.3; U.uClayA.value = 0;
  }
  if (ch === 'expro') { /* clay city seen from above; overlays do the work */ }

  glCanvas.style.visibility = ch === 'arch' || ch === 'areas' ? 'hidden' : 'visible';
  updateOverlays(t, ch);
  CAPS.forEach((c) => capUpdate(c, tn));
  let sc = 0;
  for (const c of CAPS) sc = Math.max(sc, seg(tn, c.tin - 0.4, c.tin + 0.3) * (1 - seg(tn, c.tout + 0.2, c.tout + 0.9)));
  scrim.style.opacity = String(sc);
  updateEnd(t);
}

// keep the telemetry card clear of the (large) drone: gap grows with the drone's on-screen radius
function hudGap(d) {
  const cd = camera.position.distanceTo(d.group.position);
  const r = (1.3 * d.group.scale.x) / (cd * Math.tan((camera.fov * deg) / 2)) * (H / 2);
  return [Math.max(150, r * 0.62 + 60), Math.max(150, r * 0.62 + 40)];
}
function hudAt(sx, sy, sz, html, inA, dx = 150, dy = 150) {
  hud.innerHTML = html;
  hud.style.opacity = String(inA);
  const hw = hud.offsetWidth, hh = hud.offsetHeight;
  const lx = Math.max(sx - dx, hw + 28), ly = Math.max(sy - dy, hh / 2 + 28);
  hud.style.left = (lx - hw) + 'px'; hud.style.top = (ly - hh / 2) + 'px';
  const vis = sz < 1 && sx > -50 && sx < W + 50 && sy > -50 && sy < H + 50;
  hudLine.setAttribute('points', vis ? `${lx},${ly} ${lx + 26},${ly} ${sx},${sy}` : '');
  hudLine.style.opacity = hudDot.style.opacity = String(inA * (vis ? 1 : 0));
  hudDot.setAttribute('cx', sx); hudDot.setAttribute('cy', sy);
}

function updateOverlays(t, ch) {
  // ---- HUD
  let hudOn = false;
  if (ch === 'ground' && t > 18.2 && t < 22.1) {
    hudOn = true;
    const [sx, sy, sz] = proj(SCAN.x, SCAN_HEAD_Y + 0.3, SCAN.z);
    const sw = seg(t, 17.85, 21.9);
    hudAt(sx, sy, sz, `<div class="title"><span class="dotb"></span>LASER SCAN · ST.01</div>
      <div class="row"><span class="k">POINTS</span><span class="v">${fmt(sw * 1284000)}</span></div>
      <div class="row"><span class="k">ANGLE</span><span class="v">${(sw * 360).toFixed(1)}°</span></div>`,
    easeOutExpo(seg(t, 18.2, 18.9)) * (1 - seg(t, 21.8, 22.1)), 120, 190);
  } else if (ch === 'aerial' && t > 23.0 && t < 27.3) {
    hudOn = true;
    const { p, v } = trackState(trackA, t);
    const [sx, sy, sz] = proj(p.x, p.y, p.z);
    const imgs = captures.filter((c) => c.t <= t).length;
    hudAt(sx, sy, sz, `<div class="title"><span class="dot"></span>REC · AERIAL SURVEY</div>
      <div class="row"><span class="k">ALT</span><span class="v">${p.y.toFixed(1)} m</span></div>
      <div class="row"><span class="k">SPEED</span><span class="v">${Math.min(15.8, Math.hypot(v.x, v.z)).toFixed(1)} m/s</span></div>
      <div class="row"><span class="k">IMAGES</span><span class="v">${String(imgs).padStart(4, '0')}</span></div>`,
    easeOutExpo(seg(t, 23.0, 23.7)) * (1 - seg(t, 26.9, 27.3)), ...hudGap(drone0));
  } else if (ch === 'lidar' && t > 27.9 && t < 32.3) {
    hudOn = true;
    const { p } = trackState(trackL, t);
    const [sx, sy, sz] = proj(p.x, p.y, p.z);
    const frac = clamp((196 - clamp(U.uScanX.value, -196, 196)) / 392);
    hudAt(sx, sy, sz, `<div class="title"><span class="dotb"></span>LiDAR · SCANNING</div>
      <div class="row"><span class="k">ALT</span><span class="v">${p.y.toFixed(1)} m</span></div>
      <div class="row"><span class="k">POINTS</span><span class="v">${fmt(frac * 48600000)}</span></div>`,
    easeOutExpo(seg(t, 27.9, 28.6)) * (1 - seg(t, 31.9, 32.3)), 110, 120);
  }
  show(hud, hudOn); show(hudLine, hudOn); show(hudDot, hudOn);

  // ---- survey marks (ground)
  const mkOn = ch === 'ground' && t > 18.3;
  show(markG, mkOn);
  marks.forEach((m, k) => {
    show(m.lbl, mkOn);
    if (!mkOn) return;
    const q = proj(m.x, m.y + 0.05, m.z);
    const p = easeOutExpo(seg(t, 18.5 + k * 0.32, 19.0 + k * 0.32)) * (1 - seg(t, 22.0, 22.4));
    const s = 11 * p;
    m.tri.setAttribute('d', `M${q[0]},${q[1] - s}L${q[0] + s * 0.87},${q[1] + s * 0.5}L${q[0] - s * 0.87},${q[1] + s * 0.5}Z`);
    m.tri.style.opacity = String(p);
    m.lbl.style.left = q[0] + 'px'; m.lbl.style.top = (q[1] - 30) + 'px';
    m.lbl.style.opacity = String(p);
  });

  // ---- TABA legend
  const lgOn = ch === 'taba';
  show(legend, lgOn);
  if (lgOn) {
    const p = easeOutExpo(seg(t, 8.3, 9.0)) * (1 - seg(t, 12.0, 12.4));
    legend.style.opacity = String(p);
    legend.style.transform = `translateX(${(1 - p) * -30}px)`;
  }

  // ---- parcels under the expropriation strip (expro)
  const parOn = ch === 'expro';
  show(parcelG, parOn); show(hiFill, false);
  for (const it of parcelItems) show(it.num, parOn);
  for (const b of PARCEL_BLOCKS) show(b.gushLbl, parOn);
  if (parOn) {
    const fade = easeOut3(seg(t, 47.6, 48.1)) * (1 - seg(t, 52.2, 52.45));
    parcelG.style.opacity = String(fade * 0.8);
    parcelItems.forEach((it) => {
      const pts = lotScreen(it.lot);
      it.path.setAttribute('d', polyPath(pts));
      it.path.removeAttribute('stroke-dasharray'); it.path.removeAttribute('stroke-dashoffset');
      const cx = pts.reduce((s, q) => s + q[0], 0) / 4, cy = pts.reduce((s, q) => s + q[1], 0) / 4;
      it.num.style.left = cx + 'px'; it.num.style.top = cy + 'px';
      it.num.style.opacity = String(fade * 0.75);
      it.num.style.transform = 'translate(-50%, -50%)';
    });
    for (const b of PARCEL_BLOCKS) {
      const pts = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]].map(([x, z]) => proj(x, terrainH(b.cx, b.cz) + 0.5, z));
      b.outline.setAttribute('d', polyPath(pts));
      const cx = pts.reduce((s, q) => s + q[0], 0) / 4, minY = Math.min(...pts.map((q) => q[1]));
      b.gushLbl.style.left = cx + 'px'; b.gushLbl.style.top = (minY - 4) + 'px';
      b.gushLbl.style.opacity = String(fade);
    }
    vtxDots.forEach((d) => {
      const q = proj(d.x, terrainH(d.x, d.z) + 0.5, d.z);
      d.el.setAttribute('cx', q[0]); d.el.setAttribute('cy', q[1]); d.el.setAttribute('r', 4.2);
    });
  }

  // ---- registration plan + 3D parcel (tatsar)
  const tOn = ch === 'tatsar';
  show(tatG, tOn); show(tamSvg, tOn); show(stamp, tOn && t > 22.2);
  for (const it of tatItems) show(it.num, tOn);
  for (const b of TAT_BLOCKS) show(b.tGush, tOn);
  for (const e of [vChip, lvlTop, lvlBot, xyzLbl]) show(e, tOn);
  if (tOn) {
    const f2 = 1 - seg(t, 19.75, 20.3);
    tatG.style.opacity = String(f2);
    tatItems.forEach((it, k) => {
      const pts = lotScreen(it.lot);
      const len = pathLen(pts);
      const p = easeInOut(seg(t, 17.95 + k * 0.03, 18.8 + k * 0.03));
      it.path.setAttribute('d', polyPath(pts));
      it.path.setAttribute('stroke-dasharray', `${len}`);
      it.path.setAttribute('stroke-dashoffset', `${len * (1 - p)}`);
      const cx = pts.reduce((s, q) => s + q[0], 0) / 4, cy = pts.reduce((s, q) => s + q[1], 0) / 4;
      it.num.style.left = cx + 'px'; it.num.style.top = cy + 'px';
      const np = easeOutExpo(seg(t, 18.7 + k * 0.025, 19.25 + k * 0.025));
      it.num.style.opacity = String(np * f2);
      it.num.style.transform = `translate(-50%, -50%) scale(${0.6 + 0.4 * np})`;
    });
    for (const b of TAT_BLOCKS) {
      const pts = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]].map(([x, z]) => proj(x, terrainH(b.cx, b.cz) + 0.5, z));
      const len = pathLen(pts), p = easeInOut(seg(t, 17.75, 18.65));
      b.tOutline.setAttribute('d', polyPath(pts));
      b.tOutline.setAttribute('stroke-dasharray', `${len}`);
      b.tOutline.setAttribute('stroke-dashoffset', `${len * (1 - p)}`);
      const cx = pts.reduce((s, q) => s + q[0], 0) / 4, minY = Math.min(...pts.map((q) => q[1]));
      b.tGush.style.left = cx + 'px'; b.tGush.style.top = (minY - 4) + 'px';
      b.tGush.style.opacity = String(easeOutExpo(seg(t, 18.9, 19.5)) * f2);
    }
    tatDots.forEach((d, k) => {
      const q = proj(d.x, terrainH(d.x, d.z) + 0.5, d.z);
      d.el.setAttribute('cx', q[0]); d.el.setAttribute('cy', q[1]);
      d.el.setAttribute('r', 4.2 * easeOutExpo(seg(t, 18.45 + (k % 12) * 0.025, 18.95 + (k % 12) * 0.025)));
    });
    const hp = lotScreen(parkItem.lot);
    parkFill.setAttribute('d', polyPath(hp));
    parkFill.style.opacity = String(easeOutExpo(seg(t, 19.2, 19.6)));
    // 3D parcel annotations
    const fo = 1 - seg(t, 23.45, 23.7);
    tamDots.forEach((d, k) => {
      const q = proj(...d.p);
      const p = easeOutExpo(seg(t, 21.15 + k * 0.05, 21.6 + k * 0.05));
      d.el.setAttribute('cx', q[0]); d.el.setAttribute('cy', q[1]); d.el.setAttribute('r', 5 * p);
      d.el.style.opacity = String(fo);
    });
    const midY = (TP.top + TP.bot) / 2;
    const A = proj(TP.x0, TP.top, TP.cz), B = proj(TP.x0, TP.bot, TP.cz), C = proj(TP.x0, TP.top, TP.z0);
    const la = easeOutExpo(seg(t, 21.3, 21.9)), lb = easeOutExpo(seg(t, 21.45, 22.05)), lc = easeOutExpo(seg(t, 21.6, 22.2));
    const lead = (el, P, dx, p) => { el.setAttribute('points', `${P[0]},${P[1]} ${P[0] - dx * p},${P[1]}`); el.style.opacity = String(fo * Math.min(1, p * 3)); };
    lead(tamLead[0], A, 54, la); lead(tamLead[1], B, 54, lb);
    tamLead[2].setAttribute('points', `${C[0]},${C[1]} ${C[0] - 26 * lc},${C[1] - 26 * lc} ${C[0] - 26 * lc - 34 * lc},${C[1] - 26 * lc}`);
    tamLead[2].style.opacity = String(fo * Math.min(1, lc * 3));
    const place = (el, P, dx, p) => {
      el.style.left = (P[0] - dx - 6) + 'px'; el.style.top = P[1] + 'px';
      el.style.opacity = String(p * fo);
      el.style.transform = `translate(-100%, -50%) translateX(${(1 - p) * 16}px)`;
    };
    place(lvlTop, A, 54, la); place(lvlBot, B, 54, lb); place(xyzLbl, [C[0] - 26, C[1] - 26], 34, lc);
    const V = proj(TP.cx, TP.top, TP.cz);
    const vp = easeOutExpo(seg(t, 21.15, 21.75));
    vChip.style.left = V[0] + 'px'; vChip.style.top = V[1] + 'px';
    vChip.style.opacity = String(vp * fo);
    vChip.style.transform = `translate(-50%, -50%) scale(${0.7 + 0.3 * vp})`;
    if (t > 22.2) {
      const k = seg(t, 22.28, 22.5);
      const sc = k < 1 ? lerp(2.3, 0.94, easeIn3(k)) : 1 - 0.06 * Math.exp(-(t - 22.5) * 14) * Math.cos((t - 22.5) * 40);
      stamp.style.left = STAMP_XY[0] + 'px'; stamp.style.top = STAMP_XY[1] + 'px';
      stamp.style.transform = `translate(-50%, -50%) rotate(-11deg) scale(${sc})`;
      stamp.style.opacity = String(Math.min(1, k * 2.5) * 0.92 * fo);
    }
  }
  // expropriation strip
  const exOn = ch === 'expro';
  show(expG, exOn); show(expLegend, exOn);
  for (const e of expLots) show(e.lbl, exOn);
  if (exOn) {
    const fade = 1 - seg(t, 52.2, 52.45);
    const p = easeInOut(seg(t, 48.3, 49.5));
    const xr = lerp(EXP.x0, EXP.x1, p);
    const xe = Math.max(EXP.x0 + 0.01, xr), yy = terrainH(130, 70) + 0.5;
    const pts = [[EXP.x0, EXP.z0], [xe, EXP.z0], [xe, EXP.z0 + expDepth(xe)], [EXP.x0, EXP.z0 + EXP.d0]].map(([x, z]) => proj(x, yy, z));
    expPoly.setAttribute('d', polyPath(pts));
    expPoly.style.opacity = String(fade * Math.min(1, p * 5));
    const a = proj(EXP.x0 - 6, yy, EXP.z0 + EXP.d0 - 0.25), b = proj(EXP.x1 + 6, yy, EXP.z0 + EXP.d1 + 0.25);
    expLine.setAttribute('d', `M${a[0]},${a[1]}L${lerp(a[0], b[0], p)},${lerp(a[1], b[1], p)}`);
    expLine.style.opacity = String(fade);
    expLots.forEach((e, k) => {
      const q = rectScreen(e.x0, EXP.z0, e.x1, EXP.z0 + expDepth((e.x0 + e.x1) / 2));
      const cx = q.reduce((s, v) => s + v[0], 0) / 4, cy = Math.max(...q.map((v) => v[1]));
      e.lbl.style.left = cx + 'px'; e.lbl.style.top = (cy + 22) + 'px';
      const pp = easeOutExpo(seg(t, 49.3 + k * 0.12, 49.9 + k * 0.12));
      e.lbl.style.opacity = String(pp * fade);
      e.lbl.style.transform = `translate(-50%, -50%) scale(${0.7 + 0.3 * pp})`;
    });
    const lq = proj(EXP.x1 + 4, terrainH(EXP.x1, EXP.z0) + 0.5, EXP.z0 - 18);
    expLegend.style.left = lq[0] + 'px'; expLegend.style.top = lq[1] + 'px';
    expLegend.style.opacity = String(easeOutExpo(seg(t, 49.7, 50.4)) * fade);
  }

  // ---- dimensions on the hero tower (model)
  const dimOn = ch === 'model' && t > 35.6;
  show(dimG, dimOn); show(dimLblA, dimOn); show(dimLblB, dimOn); show(surveyLbl, dimOn);
  if (dimOn) {
    const a = easeOut3(seg(t, 35.7, 36.4)), b = easeOut3(seg(t, 36.0, 36.7)), c = easeOut3(seg(t, 36.3, 36.9));
    const fade = 1 - seg(t, 37.15, 37.45);
    dimG.style.opacity = String(fade);
    const xs = shaft.cx + shaft.w / 2, zs1 = shaft.cz + shaft.d / 2, zs0 = shaft.cz - shaft.d / 2, off = 7;
    const P0 = proj(xs, HERO.gy, zs1 + off), P1 = proj(xs, lerp(HERO.gy, heroTop, a), zs1 + off);
    const C0 = proj(xs, HERO.gy, zs1), C1 = proj(xs, heroTop, zs1), P1f = proj(xs, heroTop, zs1 + off);
    setLine(dimA.main, P0, P1); tick(dimA.t1, P0, P1, 9); tick(dimA.t2, P1, P0, 9);
    setLine(dimA.e1, C0, P0, a); setLine(dimA.e2, C1, P1f, a);
    const mid = proj(xs, (HERO.gy + heroTop) / 2, zs1 + off + 4);
    dimLblA.style.left = mid[0] + 'px'; dimLblA.style.top = mid[1] + 'px';
    dimLblA.style.opacity = String(seg(t, 36.2, 36.6) * fade);
    const yb = HERO.gy + 8;
    const Q0 = proj(xs + off, yb, zs0), Q1 = proj(xs + off, yb, lerp(zs0, zs1, b));
    setLine(dimB.main, Q0, Q1); tick(dimB.t1, Q0, Q1, 9); tick(dimB.t2, Q1, Q0, 9);
    setLine(dimB.e1, proj(xs, yb, zs0), Q0, b); setLine(dimB.e2, proj(xs, yb, zs1), proj(xs + off, yb, zs1), b);
    const midB = proj(xs + off + 5, yb, (zs0 + zs1) / 2);
    dimLblB.style.left = midB[0] + 'px'; dimLblB.style.top = midB[1] + 'px';
    dimLblB.style.opacity = String(seg(t, 36.5, 36.9) * fade);
    const px = HERO.parts[0].cx + HERO.parts[0].w / 2, pz = HERO.parts[0].cz + HERO.parts[0].d / 2;
    const S0 = proj(px, HERO.gy, pz);
    surveyPt.ring.setAttribute('cx', S0[0]); surveyPt.ring.setAttribute('cy', S0[1]); surveyPt.ring.setAttribute('r', 9 * c);
    setLine(surveyPt.h, [S0[0] - 14 * c, S0[1]], [S0[0] + 14 * c, S0[1]]);
    setLine(surveyPt.v, [S0[0], S0[1] - 14 * c], [S0[0], S0[1] + 14 * c]);
    surveyPt.lead.setAttribute('points', `${S0[0]},${S0[1]} ${S0[0] - 40 * c},${S0[1] + 40 * c} ${S0[0] - 70 * c},${S0[1] + 40 * c}`);
    surveyLbl.style.left = (S0[0] - 70) + 'px'; surveyLbl.style.top = (S0[1] + 40) + 'px';
    surveyLbl.style.transform = 'translate(-100%, -50%)';
    surveyLbl.style.opacity = String(seg(t, 36.8, 37.1) * fade);
  }

  // ---- architectural sheet (arch + areas)
  const shOn = ch === 'arch' || ch === 'areas';
  show(sheetWrap, shOn); show(areaTable, ch === 'areas');
  if (shOn) {
    const k = easeOutExpo(seg(t, 37.5, 38.3));
    const drift = seg(t, 37.5, 47.5);
    sheet.style.opacity = String(k);
    sheet.style.transform = `translateY(${(1 - k) * 60}px) rotateX(${lerp(22, 9, k)}deg) rotateY(${lerp(8, -7, drift)}deg) scale(${lerp(0.94, 1.0, drift)})`;
    updatePlan(t);
    if (ch === 'areas') {
      const p = easeOutExpo(seg(t, 44.7, 45.4));
      areaTable.style.opacity = String(p);
      areaTable.style.transform = `translateY(${(1 - p) * 30}px)`;
      areaRows.forEach((r, i) => { r.style.opacity = String(easeOut3(seg(t, 45.0 + i * 0.16, 45.4 + i * 0.16))); });
    }
  }

  // ---- quantities card
  const qOn = ch === 'qty' && t > 53.3;
  show(qtyCard, qOn);
  if (qOn) {
    const p = easeOutExpo(seg(t, 53.4, 54.1)) * (1 - seg(t, 57.15, 57.45));
    qtyCard.style.opacity = String(p);
    qtyCard.style.transform = `translateX(${(1 - Math.min(1, p * 1.2)) * -30}px)`;
    const c = easeOut3(seg(t, 53.8, 55.8));
    qCut.textContent = fmt(QTY.cut * c); qFill.textContent = fmt(QTY.fill * c);
    const bal = (QTY.cut - QTY.fill) * c;
    qBal.textContent = (bal >= 0 ? '+' : '−') + fmt(Math.abs(bal));
    qOk.style.opacity = String(easeOutExpo(seg(t, 56.0, 56.5)));
  }

  // ---- road stationing + cross section
  const rOn = ch === 'roads';
  show(staG, rOn); show(xsec, rOn && t > 58.2);
  for (const st of stations) show(st.lbl, rOn);
  if (rOn) {
    const fade = 1 - seg(t, 61.8, 62.2);
    for (const st of stations) {
      const p = roadAt(st.s), q = roadAt(Math.min(ROAD_LEN, st.s + 1)), q0 = roadAt(Math.max(0, st.s - 1));
      const tg = new THREE.Vector3().subVectors(q, q0).normalize();
      const nx = -tg.z, nz = tg.x;
      const A = proj(p.x + nx * 11, p.y, p.z + nz * 11), B = proj(p.x - nx * 11, p.y, p.z - nz * 11);
      const on = easeOutExpo(seg(roadU.uS.value, st.s - 2, st.s + 18));
      setLine(st.tick, A, B, on);
      st.tick.style.opacity = String(on * fade);
      const L2 = proj(p.x - nx * 24, p.y + 2, p.z - nz * 24);
      st.lbl.style.left = L2[0] + 'px'; st.lbl.style.top = L2[1] + 'px';
      st.lbl.style.opacity = String(on * fade);
    }
    const xp = easeOutExpo(seg(t, 58.4, 59.1)) * (1 - seg(t, 61.8, 62.2));
    xsec.style.opacity = String(xp);
    xsec.style.transform = `translateX(${(1 - Math.min(1, xp * 1.2)) * -30}px)`;
  }
}

// ------------------------------------------------------------ end card -----
const white = $('white'), endcard = $('endcard'), word = $('word'), rule = $('rule'), url = $('url');
const sloganParts = [...document.querySelectorAll('#slogan span')];
const BUG = { x: 64, w: 100 }; BUG.h = BUG.w / LOGO_AR; BUG.y = H - 50 - BUG.h;
const END = { w: 350 }; END.h = END.w / LOGO_AR; END.x = W / 2 - END.w / 2; END.y = 362 - END.h / 2;
const E0 = CH.end[0];
function updateEnd(t) {
  const wf = easeInOut(seg(t, E0 - 1.1, E0 - 0.2)) * (1 - 0.13 * easeInOut(seg(t, E0 + 0.2, E0 + 2.5)));
  white.style.opacity = String(wf);
  endcard.style.display = t > E0 - 0.7 ? 'block' : 'none';
  endcard.style.opacity = String(seg(t, E0 - 0.7, E0 - 0.2));
  const m = easeInOut(seg(t, E0 - 1.0, E0 + 0.1));
  const bugIn = easeOut3(seg(t, 0.2, 1.0));
  const x = lerp(BUG.x, END.x, m), y = lerp(BUG.y, END.y, m), s = lerp(1, END.w / BUG.w, m);
  const settle = t > E0 + 0.1 ? 1 + 0.012 * easeOut3(seg(t, E0 + 0.1, DURATION)) : 1;
  logoBug.style.transform = `translate(${x}px, ${y + (1 - bugIn) * 16}px) scale(${s * settle})`;
  logoBug.style.opacity = String(bugIn);
  logoBug.style.filter = m > 0.5 ? 'none' : '';
  const wIn = easeOutExpo(seg(t, E0 + 0.4, E0 + 1.4));
  word.style.opacity = String(wIn);
  word.style.transform = `translateY(${(1 - wIn) * 26}px)`;
  word.style.letterSpacing = `${lerp(0.22, 0.01, wIn)}em`;
  rule.style.transform = `scaleX(${easeOutExpo(seg(t, E0 + 0.9, E0 + 1.9))})`;
  sloganParts.forEach((sp, k) => {
    const p = easeOutExpo(seg(t, E0 + 1.4 + k * 0.6, E0 + 2.3 + k * 0.6));
    sp.style.opacity = String(p);
    sp.style.transform = `translateY(${(1 - p) * 22}px)`;
  });
  const u = easeOutExpo(seg(t, E0 + 3.6, E0 + 4.6));
  url.style.opacity = String(u);
  url.style.transform = `translateY(${(1 - u) * 14}px)`;
}

// ------------------------------------------------------------- boot -------
async function boot() {
  const svgText = await (await fetch('logo.svg')).text();
  logoBug.innerHTML = svgText;
  logoBug.style.width = BUG.w + 'px';
  await document.fonts.load('800 90px Heebo', 'אבג');
  await document.fonts.load('700 30px Heebo', 'אבג 012');
  await document.fonts.load('600 30px Heebo', 'אבג abc');
  await document.fonts.load('500 30px Heebo', 'אבג abc');
  await document.fonts.load('400 30px Heebo', 'אבג abc');
  await document.fonts.ready;
  for (const tt of [2, 5, 10, 15, 18, 20.5, 22.6, 26, 31, 35, 40, 42, 46, 51, 56, 61, 67]) { update(tt); renderer.render(scene, camera); }
  window.SFX = buildSfx();
  window.ready = true;
}
function buildSfx() {
  const ev = [];
  const v2 = (e) => { if (chapterAt(e.t) !== 'tatsar') ev.push({ ...e, t: fromV2(e.t) }); };
  for (const c of CAPS) ev.push({ t: c.tin, type: 'whoosh' });
  // registration chapter (v3 clock)
  ev.push({ t: 17.8, type: 'draw', dur: 1.2 });
  ev.push({ t: 19.85, type: 'fill', dur: 1.5 });
  ev.push({ t: 21.15, type: 'tick' }, { t: 21.35, type: 'tick' }, { t: 21.55, type: 'tick' });
  ev.push({ t: 22.3, type: 'stamp' });
  // everything else keeps its v2 timing inside its chapter
  v2({ t: 17.85, type: 'scanner', dur: 4.05 });
  for (const c of captures) v2({ t: c.t, type: 'shutter', d: 0 });
  v2({ t: 27.8, type: 'lidar', dur: 4.4 });
  v2({ t: MODEL_T0, type: 'data', dur: 1.8 });
  v2({ t: 34.0, type: 'fill', dur: 1.9 });
  v2({ t: 35.7, type: 'tick' }); v2({ t: 36.0, type: 'tick' }); v2({ t: 36.3, type: 'tick' });
  v2({ t: 37.7, type: 'draw', dur: 2.3 }); v2({ t: 40.35, type: 'laser' }); v2({ t: 41.2, type: 'laser' });
  for (let k = 0; k < 4; k++) v2({ t: 43.3 + k * 0.28, type: 'pop' });
  v2({ t: 44.7, type: 'slide' });
  v2({ t: 48.3, type: 'draw', dur: 1.2 });
  v2({ t: 53.8, type: 'data', dur: 2.0 });
  v2({ t: 57.8, type: 'road', dur: 3.6 });
  v2({ t: E0, type: 'impact' });
  sloganParts.forEach((_, k) => v2({ t: E0 + 1.4 + k * 0.6, type: 'soft', k }));
  return ev.sort((a, b) => a.t - b.t);
}
window.renderAt = (t) => { update(t); if (glCanvas.style.visibility !== 'hidden') renderer.render(scene, camera); };
window.camOnly = (t) => { const ch = chapterAtN(t); setCamera(toV2(t, ch), ch); };
window.camState = () => { const d = new THREE.Vector3(); camera.getWorldDirection(d); return [camera.position.x, camera.position.y, camera.position.z, d.x, d.y, d.z]; };
window.info = () => ({ duration: NDURATION, tp: TP, pit: PIT, points: POINT_COUNT, local: localPts.geometry.attributes.position.count, buildings: L.buildings.length, trees: L.trees.length, captures: captures.length, qty: QTY, roadLen: ROAD_LEN });
boot();

