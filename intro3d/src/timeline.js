// The film: when things happen, where the camera goes, and what the sisters do.
//   0.0  the golden gates at night, lanterns flickering, gold dust in the air
//   1.4  a glint runs over the crests
//   2.5  the gates open: light floods out, the lamps light up along the carpet
//   4.0  through the gates: the castle, fireworks, the sisters walking hand in hand
//   7.2  down to the sisters on the carpet
//  10.3  they stop, let go, cheer and jump; petals and the grand finale; the title
//  13.1  a golden flash, and the map
import * as THREE from 'three';
import { Track, v3, smooth, clamp, window4 } from './util.js';

export const LENGTH = 14.0, HANDOFF = 13.35, CHEER = 10.35, TITLE = 10.75;

export const CAM = new Track([
    [0.0, v3(0, 3.0, 23.0)],
    [2.4, v3(0, 2.6, 11.0)],
    [3.3, v3(0, 2.85, 6.4)],
    [4.05, v3(0, 2.9, 0.4)],
    [5.3, v3(0.5, 4.8, -6.5)],
    [7.1, v3(1.7, 7.6, -12.0)],
    [8.8, v3(1.9, 3.3, -18.6)],
    [10.3, v3(0.35, 0.82, -25.0)],
    [13.8, v3(-0.6, 0.92, -24.6)]
]);
export const AIM = new Track([
    [0.0, v3(0, 6.6, 0)],
    [2.4, v3(0, 4.1, 0)],
    [3.3, v3(0, 3.8, -6)],
    [4.05, v3(0, 4.0, -24)],
    [5.3, v3(0, 9.5, -64)],
    [7.1, v3(0, 11.5, -64)],
    [8.8, v3(0, 3.0, -33)],
    [10.3, v3(0, 1.02, -28.6)],
    [13.8, v3(0, 1.26, -28.6)]
]);
export const FOV = new Track([[0, 40], [4, 44], [8, 42], [10.3, 38], [13.8, 36]]);

// The sisters walk from deep in the gardens toward the gates and stop at Z_STOP.
const WALK = [4.0, 9.7, 10.3], SPEED = 1.05, Z_STOP = -28.6;
const walked = t => {
    const a = Math.min(Math.max(t - WALK[0], 0), WALK[1] - WALK[0]);
    const u = clamp(t - WALK[1], 0, WALK[2] - WALK[1]), L = WALK[2] - WALK[1];
    return SPEED * (a + u - u * u / (2 * L));
};
const TOTAL = walked(99);
export const GIRLS_Z0 = Z_STOP - TOTAL;
export const GIRL_X = { yoovy: -0.27, googy: 0.27 };

const blink = (t, at) => at.some(b => t > b && t < b + 0.13);

export function girlState(who, t) {
    const Y = who === 'yoovy';
    const dist = walked(t), z = GIRLS_Z0 + dist;
    const walk = t < WALK[1] ? (t > WALK[0] ? 1 : 0) : 1 - clamp((t - WALK[1]) / (WALK[2] - WALK[1]));
    const hold = 1 - smooth(CHEER - 0.05, CHEER + 0.2, t);
    // cheer: arms up, a jump, then waving from 12.1
    const cheer = window4(t, CHEER, CHEER + 0.28, 12.0, 12.4);
    const wave = smooth(12.05, 12.45, t);
    const jt = t - (CHEER + 0.18), jh = 0.13;
    const jump = jt > 0 && jt < 0.5 ? jh * 4 * (jt / 0.5) * (1 - jt / 0.5) : 0;
    const jumpVel = jt > 0 && jt < 0.5 ? (1 - 2 * jt / 0.5) : 0;
    const squash = window4(t, CHEER + 0.08, CHEER + 0.16, CHEER + 0.16, CHEER + 0.26) * 0.06 + window4(t, CHEER + 0.66, CHEER + 0.72, CHEER + 0.74, CHEER + 0.86) * 0.08;
    // a look at each other, then at us
    const look = (Y ? 1 : -1) * 0.42 * window4(t, 8.5, 8.9, 9.3, 9.7);
    const face = t > CHEER - 0.05 && t < 12.6 ? 'laugh' : blink(t, Y ? [5.7, 7.9, 10.0, 13.0] : [6.3, 8.4, 12.9]) ? 'blink' : 'open';
    const apart = smooth(CHEER, CHEER + 0.4, t);
    return {
        x: GIRL_X[who] * (1 + 0.38 * apart), turn: (Y ? -0.22 : 0.22) * apart, z, walk, dist, hold, holdSide: Y ? 1 : -1, holdTarget: new THREE.Vector3(-GIRL_X[who], 0.44, 0.06), cheer, wave, waveSide: Y ? -1 : 1, jump, jumpVel, squash,
        look, face, tilt: (Y ? -0.05 : 0.06) * smooth(10.6, 11.2, t), nod: 0.06 * window4(t, 12.5, 12.8, 13.0, 13.4)
    };
}
