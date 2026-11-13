# Tests

Browser tests of the game: the real `index.html` is opened in Chromium (Playwright) and played.
Nothing reaches the network: the page and the site's own files are served from the repository,
and everything else (Firebase, the Googy worker) is cut off, so the leaderboards are this
device's own and no test writes to the real database.

```
cd tests
npm install                 # once: Playwright (then: npx playwright install chromium)
node run.js                 # every suite; `node run.js play qa` for some of them
```

Where Playwright and its browser are already installed globally (as in Claude's cloud
sessions), skip the install and point Node at it: `export NODE_PATH=/opt/node22/lib/node_modules`.

| Suite | What it checks |
| --- | --- |
| `chess.js` | the chess rules: the number of legal move sequences (perft) of six standard positions |
| `play.js` | a full play-through of every land and level of the drawn (2D) game: scores, stars, boards, progress on the map |
| `qa.js` | the letters offered in the Hebrew game, "+ 0" sums, the clocks waiting while the page is hidden, another round from the end screen, the puzzle's sliding lines, the site's own flags and fonts, labels, the turn-your-phone hint |
| `offline.js` | the service worker (`sw.js`): a first visit, then the page, a whole game and the flags with no network. Serves the repository with `python3 -m http.server`, since a service worker needs a real origin |
| `map3d.js` | the 3D path (`kingdom3d.js`, software GL, slow): the map, the corner sisters and their moods, the lands' backdrops, and going back to the drawings when a graphics context is lost |

`sweep.js <width> <height> <outDir>` is not a pass/fail test but a look at everything: it walks
through every screen of the game at one screen size, saves a screenshot of each state (and
contact sheets of them) and lists layout problems it can measure: text spilling out of its box
or cut off, things off the screen, controls that cannot be reached, tap targets under 40px.
`sweep-report.js <outDir>...` prints the findings grouped. Useful sizes: `320 568`, `360 640`,
`390 844`, `768 1024`, `1366 768`.
