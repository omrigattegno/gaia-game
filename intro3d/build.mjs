// Bundles the 3D intro (src/main.js + three.js) into one minified script at the repo root,
// loaded by index.html after the welcome screen is up (see THE ROYAL INTRO there).
//   cd intro3d && npm install && npm run build
import { build } from 'esbuild';

await build({
    entryPoints: ['src/main.js'],
    outfile: '../intro3d.js',
    bundle: true,
    format: 'iife',
    minify: true,
    target: ['es2020'],
    legalComments: 'eof',
    banner: { js: '/* Yoovy & Googy: the 3D royal intro. Built from intro3d/src (npm run build); do not edit by hand. */' },
    logLevel: 'info'
});
