# Yoovy & Googy

A Hebrew learning game for children: an adventure map with nine lands (math, Hebrew spelling,
reading, English, flags, the human body, memory, puzzles, chess), played by Yoovy and Googy.
It is a static site, served by GitHub Pages from `main`: https://omrigattegno.github.io/gaia-game/

| Where | What |
| --- | --- |
| `index.html` | the whole game: styles, screens and scripts (each script block is a module, named in its first comment) |
| `kingdom3d/` → `kingdom3d.js` | everything drawn in 3D (the intro film, the map, the sisters in the games, the lands behind the games), built with three.js. See `kingdom3d/README.md`. Devices that cannot draw it smoothly stay with the drawn game |
| `sw.js`, `manifest.webmanifest`, `icons/` | the game as an installable app that also opens without a network |
| `fonts/`, `flags/` | the fonts (Fredoka, Varela Round; SIL Open Font License) and the flags (flag-icons; MIT), served by the site itself |
| `firebase/` | the Firebase SDK (Apache 2.0), served by the site itself. See `firebase/README.md` |
| `firebase-rules.json` | the rules of the Firebase Realtime Database behind the shared leaderboards (paste into the Firebase console to publish) |
| `googy/` | a Cloudflare Worker for the English conversation with Googy (off until `GOOGY_API_URL` is set in `index.html`). See `googy/README.md` |
| `tests/` | browser tests of the whole game. See `tests/README.md` |

There is no build step for the page itself: edit `index.html` and push. After changing anything
under `kingdom3d/src/`, rebuild the bundle (`cd kingdom3d && npm install && npm run build`) and
bump its `?v=` in `index.html`.

## Security

- The page is static and loads nothing from another site; a Content-Security-Policy (the
  `<meta>` at the top of `index.html`) lets it talk only to itself and to Firebase.
- The Firebase settings in `index.html` (the API key included) are public by design. What
  protects the database is `firebase-rules.json`: **after changing it, paste it into the
  Firebase console (Realtime Database → Rules) and publish**, or the change does nothing.
  Never use the console's "test mode": it opens the whole database to everyone.
- The shared leaderboards are written by whoever plays (an anonymous sign-in), so the rules
  and the page treat every row as data from outside: one row per update, one update every
  5 seconds per player, a row only gets better, and a name is only a name (no markup, links,
  addresses or phone numbers). They cannot tell a real result from a made-up one.
- No secret belongs in this repository. The Anthropic API key of the Googy worker lives only
  in Cloudflare (`googy/README.md`).
- `tests/security.js` checks the above (the rules are read as text there, not run).
