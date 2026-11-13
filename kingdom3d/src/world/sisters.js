// Yoovy and Googy on the map: they stand on the road beside the land played last, walk hand
// in hand along the road to the land that is picked, and are never quite still: they breathe,
// blink, look at each other and wave now and then.
import * as THREE from 'three';
import { clamp, lerp, smooth } from '../util.js';
import { buildGirl, girlMaterials } from '../girls.js';
import { ROAD, landByKey } from './layout.js';

const SCALE = 2.25, APART = 0.3;

export function buildSisters(stage, roadY) {
    const mats = girlMaterials(), faces = stage.dayFaces;
    mats.skin.emissiveIntensity = 0.04;
    const girls = ['yoovy', 'googy'].map(who => {
        const g = buildGirl(who, faces[who], mats, { royal: false });
        g.root.scale.setScalar(SCALE);
        g.root.traverse(o => { if (o.isMesh) o.castShadow = false; });   // the sun's shadows are drawn once; theirs is the soft one at their feet
        g.side = who === 'yoovy' ? -1 : 1;
        g.blink = 2 + Math.random() * 3;
        return g;
    });
    const group = new THREE.Group();
    group.name = 'sisters';
    for (const g of girls) group.add(g.root);

    // where they are along the road, and the walk under way
    let s = 0, from = 0, to = 0, t0 = -1, dur = 1, walked = 0, heading = 0, arrived = -10, idleAt = 0, antic = null;
    const HOLD = new THREE.Vector3();
    return {
        group,
        get walking() { return t0 >= 0; },
        get s() { return s; },
        // puts them at a land's stop, or sends them walking there
        go(key, now, instant) {
            const L = landByKey(key);
            if (!L) return;
            if (instant || Math.abs(L.s - s) < 0.05) { s = from = to = L.s; t0 = -1; heading = 0; return; }
            from = s; to = L.s; t0 = now;
            dur = clamp(Math.abs(to - from) / 13, 0.75, 2.4);
        },
        update(t, dt) {
            let walk = 0, dir = 1;
            if (t0 >= 0) {
                const k = clamp((t - t0) / dur), e = k * k * (3 - 2 * k), was = s;
                s = lerp(from, to, e);
                walked += Math.abs(s - was) / SCALE;
                dir = to >= from ? 1 : -1;
                walk = smooth(0, 0.12, k) * smooth(1, 0.86, k);
                if (k >= 1) { t0 = -1; arrived = t; }
            }
            const p = ROAD.at(s), y = roadY(s) + 0.06;
            // they face the way they walk, and turn back to the child when they stop
            const want = t0 >= 0 ? Math.atan2(p.tx * dir, p.tz * dir) : 0;
            let d = want - heading; d = Math.atan2(Math.sin(d), Math.cos(d));
            heading += d * Math.min(1, dt * 9);
            const rx = Math.cos(heading), rz = -Math.sin(heading);       // to their right
            // a hop of joy on arriving; now and then one waves, or they look at each other
            const hopK = (t - arrived) / 0.5, hop = hopK > 0 && hopK < 1 ? 0.1 * 4 * hopK * (1 - hopK) : 0;
            if (t0 < 0 && t > idleAt) { antic = { kind: Math.random() < 0.5 ? 'wave' : 'look', who: Math.random() < 0.5 ? 0 : 1, at: t }; idleAt = t + 5 + Math.random() * 5; }
            const ak = antic ? (t - antic.at) / 1.7 : 2;
            if (ak > 1) antic = null;
            girls.forEach((g, i) => {
                g.blink -= dt;
                let face = 'open';
                if (g.blink < 0.13) face = 'blink';
                if (g.blink < 0) g.blink = 2.2 + Math.random() * 3.5;
                if (hop > 0 || (antic && antic.kind === 'wave' && antic.who === i)) face = 'laugh';
                const env = antic ? smooth(0, 0.18, ak) * smooth(1, 0.8, ak) : 0;
                g.update(t, {
                    x: p.x + rx * g.side * APART * SCALE, y, z: p.z + rz * g.side * APART * SCALE,
                    turn: heading + (t0 < 0 ? -g.side * 0.16 : 0),
                    walk, dist: walked, hold: walk, holdSide: -g.side, holdTarget: HOLD.set(-g.side * APART, 0.44, 0.06),
                    jump: hop, squash: -0.012 * Math.sin(t * 2.1 + i * 1.7),
                    wave: antic && antic.kind === 'wave' && antic.who === i ? env : 0, waveSide: g.side,
                    look: antic && antic.kind === 'look' ? -g.side * 0.5 * env : 0,
                    cheer: hop > 0 ? smooth(0, 0.3, hopK) * smooth(1, 0.7, hopK) : 0, face
                });
            });
            return t0 >= 0 || hop > 0 || !!antic;
        }
    };
}
