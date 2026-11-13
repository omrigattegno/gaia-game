// What grows and lies around the lands: trees and pines, bushes, rocks, cacti in the desert,
// palms on the beaches, flowers in the meadows, and clouds drifting by. Many of a kind are one
// mesh drawn many times, each with its own place, size and shade.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { blob, cyl, part, roughen, rng, fbm, tint } from './kit.js';
import { biome } from './terrain.js';
import { LANDS, ROAD, RIVER } from './layout.js';
import { roundTree, pineTree } from './lands.js';

const TAU = Math.PI * 2;
const one = parts => mergeGeometries(parts.map(g => {
    const geo = g.index ? g.toNonIndexed() : g;
    if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
    return geo;
}), false);

export function buildScenery(ctx) {
    const group = new THREE.Group();
    group.name = 'scenery';
    const R = rng(2024), { heightAt } = ctx;
    const free = (x, z, margin) => {
        if (heightAt(x, z) < 0.42) return false;
        const r = ROAD.near(x, z, margin + 0.5);
        if (r && r.d < margin) return false;
        if (RIVER.near(x, z, 2.6)) return false;
        for (const L of LANDS) if (Math.hypot(x - L.x, z - L.z) < L.r + 0.9) return false;
        return true;
    };
    const spots = { tree: [], pine: [], bush: [], rock: [], cactus: [], flower: [], blossom: [] };
    for (let i = 0; i < 2600; i++) {
        const x = -34 + R() * 68, z = -64 + R() * 124, y = heightAt(x, z), b = biome(x, z), u = R(), s = 0.75 + R() * 0.6;
        if (y > 5.2) continue;
        if (b.mountain > 0.35) { if (b.mountain < 0.8 && u < 0.4 && free(x, z, 2.4)) spots.pine.push([x, y, z, s * 1.1]); else if (u < 0.5 && free(x, z, 2)) spots.rock.push([x, y, z, s]); continue; }
        if (b.forest > 0.4) { if (u < 0.75 && free(x, z, 2.6)) spots[u < 0.4 ? 'tree' : 'pine'].push([x, y, z, s * 1.05]); continue; }
        if (b.desert > 0.5) { if (u < 0.1 && free(x, z, 2.2)) spots.cactus.push([x, y, z, s]); else if (u < 0.2 && free(x, z, 1.6)) spots.rock.push([x, y, z, s * 0.8]); continue; }
        if (b.rocky > 0.5) { if (u < 0.35 && free(x, z, 1.8)) spots.rock.push([x, y, z, s]); continue; }
        const dense = fbm(x * 0.11, z * 0.11, 77) > 0.12;        // woods here and there, clearings between
        if (u < (dense ? 0.36 : 0.05)) { if (free(x, z, 2.7)) { const k = R(); spots[k < 0.62 ? 'tree' : k < 0.86 ? 'pine' : 'blossom'].push([x, y, z, s * 0.9]); } }
        else if (u < 0.42) { if (free(x, z, 1.5)) spots.bush.push([x, y, z, s]); }
        else if (u < 0.47) { if (free(x, z, 1.5)) spots.rock.push([x, y, z, s * 0.6]); }
        else if (free(x, z, 1.25)) spots.flower.push([x, y, z, s]);
    }

    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3(), c = new THREE.Color();
    const place = (list, geo, material, { shade = 0.12, cast = true, sink = 0, tilt = 0 } = {}) => {
        if (!list.length) return;
        const mesh = new THREE.InstancedMesh(geo, material, list.length);
        list.forEach(([x, y, z, s], i) => {
            q.setFromEuler(e.set((R() - 0.5) * tilt, R() * TAU, (R() - 0.5) * tilt));
            mesh.setMatrixAt(i, m4.compose(v.set(x, y - sink * s, z), q, sc.set(s, s * (0.9 + R() * 0.2), s)));
            const k = 1 + (R() - 0.5) * 2 * shade;
            mesh.setColorAt(i, c.setRGB(k * (1 + (R() - 0.5) * shade), k, k * (1 + (R() - 0.5) * shade)));
        });
        mesh.castShadow = cast; mesh.receiveShadow = true;
        group.add(mesh);
    };
    place(spots.tree, one(roundTree(0, 0, 1)), ctx.mats.paint);
    place(spots.pine, one(pineTree(0, 0, 0.95)), ctx.mats.paint);
    // trees in blossom: the same tree with pink crowns
    place(spots.blossom, one(roundTree(0, 0, 1).map((g, i) => i ? tint(g, ['#ff9ec4', '#ffb7d5', '#ff8fba', '#ffd0e4'][i - 1]) : g)), ctx.mats.paint, { shade: 0.06 });
    place(spots.bush, one([blob(0.42, '#4aa648', { x: -0.3, y: 0.3, sy: 0.8 }), blob(0.5, '#5ab850', { x: 0.12, y: 0.38, z: 0.1, sy: 0.85 }), blob(0.36, '#3f9a44', { x: 0.52, y: 0.26, z: -0.12, sy: 0.8 })]), ctx.mats.paint);
    place(spots.rock, one([roughen(blob(0.55, '#a6a3ac', { y: 0.22, sy: 0.7 }, 1), 0.2, 3), roughen(blob(0.32, '#96939d', { x: 0.5, y: 0.14, z: 0.2, sy: 0.7 }, 1), 0.2, 7)]), ctx.mats.rock, { shade: 0.08 });
    place(spots.cactus, one([
        part(new THREE.CapsuleGeometry(0.18, 0.75, 4, 10), '#4caf63', { y: 0.55 }),
        part(new THREE.CapsuleGeometry(0.1, 0.2, 4, 8), '#4caf63', { x: 0.25, y: 0.55, rz: Math.PI / 2 }), part(new THREE.CapsuleGeometry(0.1, 0.32, 4, 8), '#4caf63', { x: 0.4, y: 0.78 }),
        part(new THREE.CapsuleGeometry(0.1, 0.18, 4, 8), '#4caf63', { x: -0.24, y: 0.42, rz: Math.PI / 2 }), part(new THREE.CapsuleGeometry(0.1, 0.26, 4, 8), '#4caf63', { x: -0.38, y: 0.62 })
    ]), ctx.mats.paint, { shade: 0.06 });

    // the mountains of the north: great snowy peaks, like the math mountain's own
    const peaks = [];
    for (let i = 0; i < 2400 && peaks.length < 70; i++) {
        const x = -44 + R() * 88, z = -96 + R() * 74, b = biome(x, z), s = 0.75 + R() * 0.75 + (b.mountain - 0.6) * 0.8;
        if (b.mountain < 0.6 || peaks.some(p => Math.hypot(p[0] - x, p[2] - z) < 2.1 * (s + p[3]))) continue;
        peaks.push([x, heightAt(x, z) - 0.5, z, s]);
    }
    const peak = new THREE.ConeGeometry(2.6, 4.6, 11, 6);
    peak.translate(0, 2.3, 0);
    roughen(peak, 0.14, 17, 0.001);
    tint(peak, (px, py, pz) => { const k = py / 4.6, wob = 0.07 * Math.sin(Math.atan2(pz, px) * 4); return k > 0.58 + wob ? '#ffffff' : (k > 0.3 ? '#8f9ccb' : '#7d8abb'); });
    place(peaks, one([peak]), ctx.mats.rock, { shade: 0.05 });

    // flowers: little clumps, each of one colour
    const petals = ['#ff7eb3', '#ffd54f', '#ffffff', '#c9a4ff', '#ff9e80', '#8fd3ff'].map(h => new THREE.Color(h));
    const fl = [];
    for (const [x, , z] of spots.flower) for (let k = 0; k < 5; k++) { const fx = x + (R() - 0.5) * 1.1, fz = z + (R() - 0.5) * 1.1; fl.push([fx, heightAt(fx, fz), fz, Math.floor(R() * petals.length)]); }
    const flowers = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.09, 0), new THREE.MeshStandardMaterial({ roughness: 0.6 }), fl.length);
    fl.forEach(([x, y, z, k], i) => { flowers.setMatrixAt(i, m4.compose(v.set(x, y + 0.1, z), q.identity(), sc.set(1, 0.75, 1))); flowers.setColorAt(i, petals[k]); });
    flowers.receiveShadow = true;
    group.add(flowers);

    // clouds: soft heaps drifting from west to east, off to the sides of the road
    const puff = [[0, 0, 0, 1], [0.95, -0.1, 0.1, 0.72], [-0.9, -0.12, -0.1, 0.68], [0.35, 0.32, -0.05, 0.62], [-0.4, 0.2, 0.3, 0.55]];
    const cloudGeo = one(puff.map(([x, y, z, r]) => blob(r, '#ffffff', { x, y: y * 1.2, z, sy: 0.62 }, 2)));
    const cloudMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, emissive: '#dfeaff', emissiveIntensity: ctx.look.cloudGlow, transparent: true, opacity: 0.93, fog: false });
    const clouds = [];
    for (let i = 0; i < 9; i++) {
        const m = new THREE.Mesh(cloudGeo, cloudMat), side = i % 2 ? 1 : -1;
        m.userData = { x: (R() - 0.5) * 80, z: -58 + i * 13.5 + R() * 5, y: 8.5 + R() * 3.5, speed: 0.18 + R() * 0.2, lane: side * (22 + R() * 12) };
        m.scale.setScalar(2.1 + R() * 1.6);
        m.castShadow = false;
        group.add(m);
        clouds.push(m);
    }
    return {
        group,
        update(t) {
            for (const m of clouds) {
                const u = m.userData;
                const drift = ((u.x + t * u.speed + 40) % 80) - 40;       // across the lane and round again
                m.position.set(u.lane + drift * 0.12, u.y + 0.2 * Math.sin(t * 0.3 + u.z), u.z + drift * 0.3);
            }
        }
    };
}
