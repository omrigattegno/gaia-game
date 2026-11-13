// Bundles the kingdom in 3D (src/main.js + three.js) into one minified script at the repo root,
// loaded by index.html after the welcome screen is up (see THE ROYAL INTRO there).
//   cd kingdom3d && npm install && npm run build
import { build } from 'esbuild';

await build({
    entryPoints: ['src/main.js'],
    outfile: '../kingdom3d.js',
    bundle: true,
    format: 'iife',
    minify: true,
    target: ['es2020'],
    legalComments: 'eof',
    banner: { js: '/* Yoovy & Googy: the kingdom in 3D (the royal intro and the map). Built from kingdom3d/src (npm run build); do not edit by hand. */' },
    logLevel: 'info'
});
