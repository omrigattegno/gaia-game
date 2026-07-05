# Gaia Game — Adventure Map Redesign + De-obfuscation + Security Fixes

**Date:** 2026-07-05
**Planned by:** Fable 5 (analysis + planning) · **Implemented by:** Opus (execution)
**Scope decisions by user:** UI direction = Adventure Map · De-obfuscate = yes · Fixes = security (XSS + Firebase rules). Progress persistence is included as a hard dependency of the map (stars/badges must survive refresh).

---

## Context

- The live app is `index.html` (single file, Hebrew RTL, `lang="he" dir="rtl"`), deployed from a public GitHub repo (`omrigattegno/gaia-game`), likely via GitHub Pages.
- **Line 876 of `index.html` contains the entire game engine as one obfuscated line.** The readable source of that engine lives in `index_source.html` (lines 720–2325), which is gitignored and lacks the newer modules.
- Newer modules were appended to `index.html` as readable `<script>` blocks AFTER the blob:
  - Leaderboard override (lines 878–892) — duplicates the override already present at the end of `index_source.html` (lines 2292–2304).
  - Reading & Comprehension module (lines 894–1448, includes `readingData` with 15 stories).
  - Multiplication module (lines 1450–1606).
  - Anonymous analytics module (lines 1608–1860).
- `index_source.html`'s engine is the post-"magical kingdom" version and includes the leaderboard 10-row fix; its function list matches the obfuscated blob exactly (verified by grep). Its **HTML section is stale** — use `index.html`'s HTML, not `index_source.html`'s.
- The single-file pattern is a project constraint: everything stays in `index.html` (no external JS/CSS files). Exception: `firebase-rules.json` is a new standalone deliverable (not loaded by the page).
- Target user: Gaia, a young girl (~7), Hebrew reader with nikkud. All UI text is Hebrew with full nikkud, feminine verb forms (בַּחֲרִי, סִיַּמְתְּ).

## Phase 0 — Rebuild index.html from readable source (de-obfuscation)

Goal: one readable `index.html`, feature-identical to today.

1. Take `index.html` HTML (lines 1–874: head, CSS, all screens, kingdom-bg, gaia-char SVG) as the base.
2. Replace the obfuscated `<script>` (the single huge line ~875–877) with the readable engine script from `index_source.html` lines 720–2325 (from `firebaseConfig` through `showLeaderboard`, including the `loadFirebaseLeaderboard` override at its end).
3. Delete the now-redundant standalone leaderboard-override script (index.html lines 878–892) — it duplicates the override already inside the source engine.
4. Keep the Reading, Multiplication, and Analytics script blocks as-is.
5. **Parity check before any redesign work:** open the rebuilt file in a browser; verify every module launches and completes (hebrew/math/english/biology/geography/memory/puzzle/reading/mult), leaderboard loads, no console errors. Compare the engine function list against the blob's (they must match: flagImg…showLeaderboard).
6. Housekeeping: remove `index_source.html` from `.gitignore`, then delete `index_source.html` and `index_protected.html` from the working tree (git history keeps them; the readable source now lives in `index.html`). Do NOT commit — leave all changes for the user to review.

**Critical constraint:** the analytics module wraps these globals by name at `window.load`: `showScreen`, `goHome`, `playSound`, `endGame`, `showMultSummary`, `showReadingCategoryComplete`, and all `start*` functions listed in `SUBJECT_FOR_FN`. Any refactor must keep these as global function declarations with the same names and signatures.

## Phase 1 — Security fixes

1. **XSS:** in `showLeaderboard`, stop injecting `entry.name` via `innerHTML`. Build cells with `document.createElement` + `textContent` (or escape). Audit every other spot where remote/user data reaches `innerHTML`: leaderboard is the only untrusted vector today (words/stories/flags are static), but grep to confirm.
2. **Firebase rules:** create `firebase-rules.json` at repo root, ready to paste into the Firebase console (Realtime Database → Rules), with a short Hebrew comment header in the plan-of-record README section of the file being unnecessary — just deliver the JSON plus paste instructions in the final report. Rules:
   - `scores`: read allowed; per-entry write allowed only for new entries (`!data.exists()`) validating `name` is a string 1–20 chars, `score` is a number 0–200, no extra keys, no deletes/overwrites.
   - `analytics`: no read (`.read: false`); writes validated per-session path (`sessions/$sid/meta` + `events`), no deletes of existing events.
3. Client already tolerates permission errors (save-status message, catch handlers) — verify save flow still degrades gracefully if rules reject.

## Phase 2 — Adventure Map UI

### Concept

Replace the flat button menus with a full-screen scrolling **kingdom adventure map**. Each subject is a themed land on a winding path. Gaia's avatar stands on the map and travels to a land when tapped. Stars earned in games accumulate per-land; lands show badges. This replaces `main-menu`'s inner content; all sub-menus (level pickers) become an inline "land entry panel" that slides up from the map (not a modal overlay with backdrop — an in-flow panel anchored to the bottom of the map screen).

### Lands (RTL path, top to bottom / winding)

| Land | Subject | Existing entry |
|---|---|---|
| 🏰 טִירַת גַּאְיָה | welcome/home anchor | — |
| 🏔️ הַר הַחֶשְׁבּוֹן | math + לוח הכפל | `goToMathMenu` / `goToMultMenu` |
| 🌳 יַעַר הַמִּלִּים | Hebrew reading | `goToHebrewMenu` |
| 📖 עֵמֶק הַסִּפּוּרִים | Reading & comprehension | `goToReadingMenu` |
| 🌊 מִפְרַץ הָאַנְגְּלִית | English | `goToEnglishMenu` |
| 🏜️ מִדְבַּר הַדְּגָלִים | Geography | `goToGeographyMenu` |
| 🫀 מְעָרַת הַגּוּף | Biology | `goToBiologyMenu` |
| 🃏 אִי הַזִּכָּרוֹן | Memory | `goToMemoryMenu` |
| 🔢 גֶּשֶׁר הַפָּאזֶל | Puzzle | `goToPuzzleMenu` |

### Map construction

- One inline SVG scene (viewBox tall, e.g. 800×1400) inside a vertically scrollable container; lands are `<g>` nodes positioned along a dashed path (`<path>` with `stroke-dasharray`). RTL-aware: path winds right-left-right.
- Sky layer above the map uses **real local time**: dawn/day/dusk/night gradients + sun or moon + stars at night (reuse/extend `kg-star`). This also makes the existing time-based welcome line feel connected.
- Two-layer parallax on scroll (clouds move slower than map) — transform-only, no layout animation, disabled under `prefers-reduced-motion`.
- Gaia avatar (reuse the existing `#gaia-char` SVG, scaled down) sits on the map at the last-played land; tapping a land animates her walking along the path to it (translate along path points, 600–900ms, ease-out-quart), then the land entry panel opens.
- Each land shows: name plaque (Hebrew + nikkud), themed mini-illustration (inline SVG, consistent style), and a star badge: total stars earned + milestone medal (🥉 ≥30, 🥈 ≥100, 🥇 ≥250 stars — tune freely).

### Land entry panel (replaces sub-menus)

- Slides up inside the map screen (transform: translateY, 200ms ease-out). Contains the land title, the same level buttons that exist today (calling the same `start*` functions), and per-level best-star chips.
- The old `*-menu` screens remain in the DOM but unused by the map (keep them until everything works, then remove the dead screens and their `goTo*Menu` body-background lines — but KEEP the `goTo*Menu` function names as thin wrappers that open the map panel, so analytics nav wrapping and any stray references keep working).

### Progress persistence (map dependency)

- New localStorage key `gaiaProgress` (versioned: `{v:1, ...}`): per-subject cumulative stars, per-level best score, readingProgress (existing in-memory object), lastPlayedLand.
- Hook: on `endGame`/`showMultSummary`/reading story completion, add earned stars to the subject bucket. Load on boot; map badges render from it. Migrate nothing (fresh start is fine).

### Visual system refresh (applies to all screens, not just the map)

- **Font:** replace `Fredoka One` (Latin-only; Hebrew currently falls back to Segoe UI) with **"Fredoka"** variable font requesting the Hebrew subset; verify Hebrew+nikkud glyphs render — if Fredoka's Hebrew coverage fails in testing, use **"Varela Round"** (full Hebrew, classic Israeli rounded look) for Hebrew with Fredoka for Latin/digits.
- **Palette:** move to OKLCH custom properties. Committed color strategy: warm sky/meadow world by day, deep indigo by night. No pure #000/#fff — tint neutrals toward the brand purple. Each land gets one signature hue used in its panel and its game screen HUD (replacing today's scattered inline hex).
- **Remove banned patterns that exist today:** the rainbow `background-clip:text` logo (replace with solid-color chunky lettering + subtle per-letter bounce on load), `backdrop-filter: blur` on menu boxes (replace with solid tinted surfaces + soft shadow).
- **Juice pass on answers:** correct answers get a small squash-and-stretch on the pressed button (transform-only) in addition to existing stars; wrong answers keep the gentle shake. Timings 150–250ms, ease-out-quart/quint only, no bounce/elastic easings.
- Touch targets ≥ 56px on the map; the map must work at 360px width and on desktop.
- `prefers-reduced-motion`: map parallax, walking animation, and sparkles collapse to instant states.

### Explicitly out of scope (user chose security-only fixes)

Math range bug, "מילה מבולבלת" label, Shabbat messages, analytics duration/nav bugs, PWA/manifest, 100dvh migration. Do not fix these unless they block the map work; `100dvh` for the map screen itself IS in scope since the map is new code.

## Phase 3 — Verification

1. Serve locally (`python -m http.server` or open file directly) and click through EVERY module end-to-end, including saving a score and loading the leaderboard.
2. Verify: no console errors; analytics still logs (check `window.__analytics` and console info line); Gaia character reacts (happy/sad/dance); map badges update after finishing a game; progress survives refresh.
3. Verify XSS fix: temporarily inject a fake score entry with `<img onerror>` name via console into the render path and confirm it renders inert.
4. RTL check: map path, panels, and all text render correctly right-to-left; nikkud not clipped (line-height generous on map plaques).
5. Do not commit or push. Leave the working tree for user review, with `index.html` rewritten and `firebase-rules.json` added.
