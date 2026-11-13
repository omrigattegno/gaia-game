# The kingdom in 3D

Everything the game draws in 3D: the royal intro, the map of the kingdom, Yoovy and Googy in the
corner of the games and the lands behind the games. It is drawn live with
[three.js](https://threejs.org) (WebGL 2), from code only: every model, texture and effect is made
in `src/` (no image or model files), and the sisters' faces are the game's own drawings
(index.html passes them in). One bundle, `../kingdom3d.js`, with one global, `window.Kingdom3D`.

| Part | What it is | Where |
| --- | --- | --- |
| the stage | the WebGL renderer, the post effects (bloom) and the quality levels that the film and the map share; the sisters' faces | `src/stage.js` |
| the film | the intro that plays when "יוֹצְאִים לַדֶּרֶךְ" is tapped: the golden gates at night swing open, fireworks go up over the castle, Yoovy and Googy walk out hand in hand in crowns and capes | `src/film.js`, `timeline.js`, `gate.js`, `castle.js`, `grounds.js`, `sky.js`, `fx.js` |
| the world | the map: the castle and the nine lands along a winding road, between mountains, woods, a desert and the sea; the page's scroll moves its camera, a tap on a land brings the camera close, and the sisters walk to it. It also takes the picture of a land that stands behind that land's games (`world.snapshot`) | `src/world/` |
| the buddies | the sisters in the corner of every game, on a small canvas of their own: they breathe and blink, jump for a right answer, droop for a wrong one, gasp when the time runs out and dance at the end | `src/buddies.js` |
| shared | Yoovy and Googy themselves; painted textures, geometry and helpers | `src/girls.js`, `textures.js`, `geo.js`, `util.js` |

In `src/world/`: `layout.js` (where everything is: the lands, the road, the river), `terrain.js`
(the ground and the water), `sky.js`, `lands.js` (the ten landmarks), `scenery.js` (trees, rocks,
flowers, peaks, clouds), `sisters.js` (the sisters on the road), `kit.js` (building blocks),
`world.js` (the scene, the light, the camera and what the page calls).

Build (after changing anything in `src/`):

```
cd kingdom3d
npm install
npm run build      # writes ../kingdom3d.js (one minified file, three.js included)
```

and bump the `?v=` of `kingdom3d.js` in index.html, so that browsers fetch the new file.

## How the page uses it

index.html fetches `kingdom3d.js` once the welcome screen is up (see THE ROYAL INTRO and THE MAP
IN 3D there). Each part is used only if this device draws it smoothly; a few frames are measured
first, stepping the quality down (fewer pixels, simpler shadows) before giving up:

- the film plays if it fits, otherwise the drawn intro in index.html plays;
- the world is built in small steps (never while the film plays) and, if it fits, takes the drawn
  map's place: the same plaques, stars, panels and taps, over the 3D kingdom;
- where the map is in 3D, the corner sisters and the lands' backdrops are too.

Without WebGL 2, with reduced motion or data saving, on a device with very little memory, if the
file cannot be fetched, or if the graphics context is lost later on, everything stays (or goes
back to being) the drawn game: nothing in the game depends on the 3D.
