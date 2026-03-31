# GaiaGame UI Redesign — Design Spec
**Date:** 2026-03-31  
**Approach:** Layered Enhancement (B) — all game logic untouched, visuals additive

---

## 1. Overview

Transform the GaiaGame UI from a functional kids game into a magical, expressive experience. A hand-drawn SVG character named Gaia (a curly blonde 6-year-old girl) lives in the corner of every screen and reacts to the player's answers. The world is a bright magical kingdom with animated sky, clouds, sparkles, and a castle silhouette.

All changes are made to `index_source.html`. The protected `index.html` is regenerated via the existing obfuscation pipeline after changes are complete.

---

## 2. Visual Theme

### Background
- Bright cerulean sky gradient: `#87CEEB` → `#E3F2FD`
- 3 fluffy white clouds drifting slowly left→right (CSS animation, 20s loop)
- Castle silhouette at bottom of every screen — inline SVG, pink/purple tones
- 10 floating sparkle particles (✨ CSS only, random positions, 4s fade loop)
- 15 small stars that twinkle at random intervals (2–5s)

### Color Palette
| Role | Color |
|------|-------|
| Sky | `#87CEEB` |
| Gold accent | `#FFD700` |
| Magic pink | `#FF69B4` |
| Royal purple | `#9C27B0` |
| Cards | `#FFFFFF` with `#FFD700` dashed border |
| Button text | `#FFFFFF` |
| Body text | `#4A148C` |

### Typography
- Import `Fredoka One` from Google Fonts via `@import url(...)` at top of `<style>`
- Apply to all headings, buttons, HUD elements
- Body text: keep existing system font stack for readability

---

## 3. Gaia Character (SVG)

### Appearance
Pure inline SVG (~130px tall):
- **Hair:** Big curly blonde hair (`#FFD700` / `#FFC107`), drawn as overlapping rounded paths
- **Face:** Round, rosy cheeks (`#FFCDD2`), big blue eyes with sparkle dots (`#1565C0`), wide smile
- **Dress:** Pink with small star detail (`#E91E63` / `#F48FB1`)
- **Hands:** Small rounded rectangles, skin tone

### Placement
- Fixed position: bottom-right corner, `right: 12px; bottom: 0`
- z-index above background, below modals
- On main menu: larger (180px), centered bottom, waving

### Animation States (CSS class swaps via JS)
| Class | Visual | Trigger |
|-------|--------|---------|
| `.gaia-idle` | Gentle breathing scale (1.0→1.03, 2s loop) | Default |
| `.gaia-happy` | Translatey -30px jump + arms up, 0.6s | Correct answer |
| `.gaia-sad` | RotateZ ±8° shake, 0.5s, sad expression SVG swap | Wrong answer |
| `.gaia-dance` | Alternating translateX ±10px, 0.4s loop | End game |

### Star Burst (correct answer)
- 8 golden star elements absolutely positioned around Gaia
- CSS keyframe: scale 0→1, translate outward in 8 directions, fade out
- Duration: 0.8s, then elements removed from DOM

---

## 4. Buttons & UI Elements

### Buttons
- Shape: pill (`border-radius: 50px`)
- Shimmer on hover: `::after` pseudo-element, white gradient sweeps left→right (0.4s)
- Press: `translateY(3px)` + reduced shadow (spring feel)
- Small sparkle ✨ text appended briefly on click (JS, removed after 600ms)

### Question Cards (`.screen` inner containers)
- Background: `#FFFFFF`
- Border: `2px dashed #FFD700`
- Box-shadow: `0 8px 32px rgba(156, 39, 176, 0.15)`
- Border-radius: `24px`
- Category title gets a small crown emoji prefix

### HUD (score/timer bar)
- Background: parchment `#FFFDE7` with gold border
- Score displayed as: `⭐ 42` (star emoji + number)
- Timer: shrinking star SVG element instead of plain `⏱ 15ש'`
  - Star fills gold when >50% time, orange >25%, red <25% (pulses)

### Main Menu Title
- "גַּאְיָה" gets CSS rainbow shimmer (background-clip: text, animated gradient, 3s loop)
- Buttons in 2-column grid, alternating slight rotation (odd: `-1deg`, even: `+1deg`)

### Leaderboard
- Rank 1: 🥇, Rank 2: 🥈, Rank 3: 🥉
- Top row glows gold (`box-shadow: 0 0 12px #FFD700`)
- Alternating row backgrounds: `#FFFDE7` / `#FFFFFF`

---

## 5. Animation Inventory

| Animation | Trigger | Duration | Method |
|-----------|---------|----------|--------|
| Stars burst from Gaia | Correct answer | 0.8s | JS + CSS keyframe |
| Screen wobble | Wrong answer | 0.4s | CSS keyframe (existing, keep) |
| Gaia jump | Correct answer | 0.6s | CSS class swap |
| Gaia head-shake | Wrong answer | 0.5s | CSS class swap |
| Gaia dance | End game | loops | CSS class swap |
| Button shimmer | Hover | 0.4s | CSS `::after` |
| Button spring | Click | 0.3s | CSS active state |
| Floating sparkles | Always | 4s loop | CSS keyframe |
| Cloud drift | Always | 20s loop | CSS keyframe |
| Star twinkle | Always | 2–5s random | CSS keyframe |
| Timer star shrink | During question | smooth | JS style update |
| Rainbow title | Main menu | 3s loop | CSS keyframe |

All animations respect `@media (prefers-reduced-motion: reduce)` — skip or simplify.

---

## 6. Technical Constraints

- **Single file**: All CSS/JS/SVG embedded in `index_source.html`
- **No new external dependencies** — font loaded via Google Fonts `@import` (existing network requirement for Firebase anyway)
- **Game logic untouched** — only CSS classes, HTML structure around screens, and visual JS functions are added
- **Gaia character JS**: `setGaiaState(state)` function called at existing answer-handling points (`playSound('correct')` → also call `setGaiaState('happy')`)
- **File size**: expected to grow ~15–25KB from SVG + animations — acceptable

---

## 7. Implementation Scope (Not In This Spec)

- No changes to question data, game logic, Firebase, scoring, or routing
- No changes to puzzle or memory game internal rendering
- Sound effects unchanged (Web Audio API stays as-is)
