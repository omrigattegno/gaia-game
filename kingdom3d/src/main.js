// Yoovy & Googy: the kingdom in 3D. One bundle (kingdom3d.js, loaded by index.html once the
// welcome screen is up) with three.js and three things built on it:
//   - the stage: the WebGL renderer and what the shows share (stage.js)
//   - the film: the royal intro that plays when the gates open (film.js)
//   - the world: the kingdom map the child travels on (world/)
// index.html drives it through window.Kingdom3D.
import { createStage } from './stage.js';
import { createFilm, TIMELINE } from './film.js';

let stage = null, starting = null, film = null;

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

    // Lets everything go, the renderer included.
    dispose() {
        if (film) { film.release(); film = null; }
        if (stage) { stage.dispose(); stage = null; }
        starting = null;
    }
};
