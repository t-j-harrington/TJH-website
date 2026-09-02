# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Astro + Starlight personal/portfolio site (`astro.config.mjs` defines the sidebar structure and Starlight config). Content lives in `src/content/docs/`. Images live in `src/assets/` (imported and optimized via `astro:assets`) except for `public/favicon.svg` and `public/thomas-harrington-cv.pdf`, which need stable raw URLs and so are intentionally excluded from the image pipeline.

Asset and content filenames use lowercase kebab-case throughout (e.g. `headshot-dark.png`, `th-logo-dark.svg`). Keep new files consistent with this.

## Future project: Windows 95/98 theme toggle (not started, not a priority)

Idea: add a third option to the light/dark mode picker that reskins the site with a retro Windows 95/98 look, as a fun/irreverent easter egg — not core functionality. Research done so far (2026-09-01), retained here so it doesn't need re-deriving:

**Switcher mechanics (Starlight internals):**
- Theme state lives in `localStorage['starlight-theme']` and is reflected as `data-theme="light"|"dark"` on `<html>`.
- Logic lives in `node_modules/@astrojs/starlight/components/ThemeProvider.astro` (anti-FOUC inline script, sets initial theme) and `ThemeSelect.astro` (the `<select>` UI + `starlight-theme-select` custom element that handles changes).
- This project already overrides one Starlight component (`Pagination`, see `astro.config.mjs` → `components:`), so overriding `ThemeSelect`/`ThemeProvider` the same way to add a third `win95` value is a small, mechanical change — roughly 30 minutes, not architectural.

**CSS library choice:**
- The originally-suggested [win95.css](https://alexbsoft.github.io/win95.css/) (alexbsoft/win95.css) is a **Bootstrap 4 theme** — it only restyles Bootstrap's own classes (`.btn`, `.navbar`, `.card`, `.modal`, etc). This site has no Bootstrap, so it would style almost nothing here out of the box. It's also a thin project (18 commits) with no npm package.
- Better fit: **[98.css](https://jdan.github.io/98.css/)** (`npm install 98.css`) — framework-agnostic, pure CSS, no JS/Bootstrap dependency, styles plain class names (`.window`, `.title-bar`, `.btn`, `.tree-view`, etc.) that can be applied to any markup. Visually Windows 98, effectively indistinguishable from 95 at this level of fidelity. `xp.css` / `7.css` are the equivalent libraries for later Windows eras if a different look is preferred later.

**The real cost is reskinning Starlight, not installing a library:**
- None of these retro CSS libraries know about Starlight's actual DOM (sidebar, search modal, TOC, badges, code blocks) — that markup doesn't carry their class names. Starlight styles everything through its own `--sl-*` CSS custom properties, defined/overridden in `src/styles/custom.css`.
- So "add the stylesheet" alone gets nothing visually on real pages. Getting the actual site chrome to look Win95 means hand-writing CSS under a `[data-theme="win95"]` scope in `custom.css` that maps Starlight's tokens to the retro palette (square corners, grey bevels, pixel font, etc.) — realistically a few hours of CSS work for a good result, not a drop-in.
- Cheapest genuinely-fun version: skip retrofitting the whole site chrome and instead use 98.css just to wrap the main content column in a fake `.window` with a title bar (maybe a nod to Clippy or "Program Manager"), leaving nav/search alone. Much lower effort, and arguably a better fit for an "easter egg" than a faithful full-site retrofit.

When this project is picked back up: confirm which fidelity level is wanted (full site reskin vs. decorative wrapper) before estimating further, since that's the main cost driver, not the switcher wiring or the CSS library choice.
