# The 3D royal intro

The film that opens the kingdom when "יוֹצְאִים לַדֶּרֶךְ" is tapped: the golden gates at twilight swing
open, fireworks go up over the castle, and Yoovy and Googy walk out hand in hand in crowns and capes.
It is drawn live with [three.js](https://threejs.org) (WebGL 2), from code only: every model, texture
and effect is made in `src/` (no image or model files), and the sisters' faces are the game's own
drawings (index.html passes them in).

- `src/main.js` – the renderer, lights, post effects (bloom), quality levels; `window.GaiaIntro3D`
- `src/timeline.js` – what happens when: the camera's path, the sisters' walk, cheer and wave
- `src/gate.js`, `src/castle.js`, `src/grounds.js`, `src/sky.js` – the places
- `src/girls.js` – Yoovy and Googy in 3D
- `src/fx.js` – fireworks, gold dust and fireflies, the petal shower
- `src/textures.js`, `src/geo.js`, `src/util.js` – painted textures and geometry helpers

Build (after changing anything in `src/`):

```
cd intro3d
npm install
npm run build      # writes ../intro3d.js (one minified file, three.js included)
```

index.html fetches `intro3d.js` once the welcome screen is up, builds the scene and measures a few
frames. If the device can play it smoothly, the film plays; otherwise (or without WebGL 2, with
reduced motion, data saving, or if the file can't be fetched) the drawn intro in index.html plays.
The film's memory is let go as soon as it ends.
