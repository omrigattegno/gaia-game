// Yoovy & Googy: the kingdom in 3D. One bundle (kingdom3d.js, loaded by index.html once the
// welcome screen is up) with three.js and what is built on it:
//   - the stage: the WebGL renderer and what the shows share (stage.js)
//   - the film: the royal intro that plays when the gates open (film.js)
//   - the world: the kingdom map the child travels on, and the lands behind the games (world/)
//   - the buddies: the sisters in the corner of every game (buddies.js)
// index.html drives it through window.Kingdom3D.
import { createStage } from './stage.js';
import { createFilm, TIMELINE } from './film.js';
import { createWorld } from './world/world.js';
import { createBuddies } from './buddies.js';

let stage = null, starting = null, film = null, world = null, worldStarting = null, buddies = null;

function supported() {
    try {
        const c = document.createElement('canvas');
        const gl = c.getContext('webgl2');
        return !!gl;
    } catch (e) { return false; }
}

window.Kingdom3D = {
    supported,
    // Sets up the stage: { faces: { yoovy, googy } (SVG per expression), width, height }.
    start(opts) {
        if (!starting) starting = createStage(opts).then(s => { stage = s; return s; });
        return starting.then(() => undefined);
    },
    get canvas() { return stage ? stage.canvas : null; },
    get tier() { return stage ? stage.tier : -1; },

    film: {
        timeline: TIMELINE,
        get ready() { return !!film; },
        async prepare() { if (!film) film = await createFilm(stage); },
        fits() { return film.fits(); },
        play(container, opts) { return film.play(container, opts); },
        renderAt(t, w, h) { film.renderAt(t, w, h); },
        // lets the film's set go; the stage stays for the map
        release() { if (film) { film.release(); film = null; } }
    },

    world: {
        get ready() { return !!world; },
        // builds the kingdom (in steps, so the page stays alive meanwhile)
        prepare(opts) {
            if (!worldStarting) worldStarting = createWorld(stage, opts).then(w => { world = w; });
            return worldStarting;
        },
        fits() { return world.fits(); },
        attach(container, opts) { world.attach(container, opts); },
        detach() { if (world) world.detach(); },
        get attached() { return !!world && world.attached; },
        step(dt) { world.step(dt); },
        metrics() { return world.metrics(); },
        setScroll(k, snap) { world.setScroll(k, snap); },
        scrollOf(key) { return world.scrollOf(key); },
        focus(key, inset) { world.focus(key, inset); },
        walkTo(key, instant) { world.walkTo(key, instant); },
        bounce(key) { world.bounce(key); },
        spots() { return world.spots(); },
        pick(x, y) { return world.pick(x, y); },
        snapshot(key, w, h, opts) { return world.snapshot(key, w, h, opts); },
        info() { return world.info(); },
        renderAt(o) { world.renderAt(o); },
        release() { if (world) { world.release(); world = null; } worldStarting = null; }
    },

    // Yoovy and Googy for the corner of the games: a small canvas of their own (see buddies.js)
    buddies: {
        get ready() { return !!buddies; },
        // makes them (once) and returns their canvas, for the page to place
        create() { if (!buddies) buddies = createBuddies(stage.dayFaces); return buddies.canvas; },
        mood(m) { if (buddies) buddies.mood(m); },
        resize(w, h) { if (buddies) buddies.resize(w, h); },
        start() { if (buddies) buddies.start(); },
        stop() { if (buddies) buddies.stop(); },
        step(dt) { if (buddies) buddies.step(dt); },
        get running() { return !!buddies && buddies.running; },
        get moodNow() { return buddies ? buddies.moodNow : null; },
        dispose() { if (buddies) { buddies.dispose(); buddies = null; } }
    },

    // Lets everything go, the renderer included.
    dispose() {
        if (film) { film.release(); film = null; }
        if (world) { world.release(); world = null; }
        worldStarting = null;
        if (buddies) { buddies.dispose(); buddies = null; }
        if (stage) { stage.dispose(); stage = null; }
        starting = null;
    }
};
