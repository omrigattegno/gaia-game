# DataMap promo video (source)

Procedural 1080p30 promo (73.75 s): a Three.js scene with DOM captions, rendered frame by frame in headless Chromium, plus an original synthesized soundtrack.

Rebuild:

1. `npm install` (three 0.186, @fontsource/heebo). Create a Python venv with `numpy scipy pillow pyloudnorm imageio-ffmpeg` and symlink `./ffmpeg` to the imageio-ffmpeg binary.
2. `node render.cjs stills 4,22,31` writes preview stills to `out/` and also writes `out/sfx.json`.
3. `python audio.py` builds `out/soundtrack.wav` from `out/sfx.json`.
4. `./render_all.sh` renders the video in resumable 15 s segments, then `./finalize.sh` muxes the HQ (H.264), HEVC and web versions.

Files: `main.js` (scene, timeline, overlays), `layout.js` (town layout + terrain), `maps.js` (clay / plan / orthophoto / land-use textures), `plan2d.js` (floor plan), `audio.py` (music + SFX), `logo.svg`.
