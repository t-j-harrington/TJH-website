# Style guide

Visual rules for tjharrington.co.uk. Covers colours, type, assets and component use. The source of truth for tokens is
`src/styles/custom.css`. If this guide and the CSS disagree, the CSS wins: update this guide to match.

## Principles

- **Starlight first.** Style through Starlight's `--sl-*` custom properties and built-in components. Avoid one-off hex
  values and inline styles in content.
- **Two themes, always.** Every colour, image and logo must work in both light and dark mode. The theme toggle cycles
  Auto → Light → Dark.
- **Readable over decorative.** Accessibility drives the font choice and the motion rules, so keep it that way: honour
  `prefers-reduced-motion` and add pause controls for any animation that runs longer than 5 seconds.

## Colour

Use the tokens, never the hex values. The values are listed here for reference only.

### Brand

| Role | Token | Value | Notes |
| --- | --- | --- | --- |
| Primary accent (both themes) | `--sl-color-accent` | `#ff3855` | Brand red-pink. Used for links, hero roles and the logo mark. |
| Accent high, dark mode | `--sl-color-accent-high` | `#73deff` | Cyan. Used for the wordmark in dark mode. |
| Accent high, light mode | `--sl-color-accent-high` | `#640101` | Deep red. |
| Accent low, dark mode | `--sl-color-accent-low` | `#450d08` | Tinted backgrounds. |
| Accent low, light mode | `--sl-color-accent-low` | `#ffc8bf` | Tinted backgrounds. |

### Neutrals

Starlight flips the meaning of `white` and `black` between themes. `--sl-color-white` is always the strongest text
colour and `--sl-color-black` is always the page background.

| Token | Dark | Light |
| --- | --- | --- |
| `--sl-color-white` | `#ffffff` | `#17181c` |
| `--sl-color-gray-1` | `#eceef2` | `#24272f` |
| `--sl-color-gray-2` | `#c6c8ce` | `#353841` |
| `--sl-color-gray-3` | `#a0a4ae` | `#545861` |
| `--sl-color-gray-4` | `#545861` | `#888b96` |
| `--sl-color-gray-5` | `#353841` | `#c0c2c7` |
| `--sl-color-gray-6` | `#24272f` | `#eceef2` |
| `--sl-color-gray-7` | (Starlight default) | `#f5f6f8` |
| `--sl-color-black` | `#17181c` | `#ffffff` |

### Usage conventions

- Body and heading text: `--sl-color-white`.
- Secondary text, such as taglines: `--sl-color-gray-2`.
- Icon buttons: `--sl-color-gray-2` or `--sl-color-gray-3` at rest, `--sl-color-white` on hover.
- Emphasis and highlight text: `--sl-color-accent`.
- Social and inline icon links: `--sl-color-text-accent` (see `SocialIcons.astro`).

## Typography

| Use | Font | Token |
| --- | --- | --- |
| All prose, UI and headings | Atkinson Hyperlegible Next (variable) | `--sl-font` |
| Code, terminal output and technical values | Atkinson Hyperlegible Mono (variable) | `--sl-font-mono` |

- Fonts are self-hosted through Fontsource and loaded in `astro.config.mjs`, including the italic variants. Don't add
  Google Fonts links or other font families.
- Use Starlight's size tokens (`--sl-text-base` up to `--sl-text-6xl`). For responsive display text, use `clamp()`
  between two tokens, as in `Hero.astro`.
- Heading weight is 600. Don't go heavier.
- Use sentence case for headings, button labels and sidebar entries ("See my portfolio", not "See My Portfolio").

## Logos and brand marks

The mark is a circle containing a code symbol (`</>`), in `#ff3855`.

| File | Use |
| --- | --- |
| `src/assets/th-logo-light.svg` | Header wordmark in light mode (red mark, black text) |
| `src/assets/th-logo-dark.svg` | Header wordmark in dark mode (cyan mark, white text) |
| `src/assets/site-logo.svg` | Standalone mark, for example as an inline logo for freelance work |
| `public/favicon.svg` | Favicon. Same artwork as `site-logo.svg`. |

Any new logo variant needs a light and a dark version, or a single colour that has enough contrast on both
backgrounds.

**Legacy or unused (don't use without review):** `thomas-harrington-logo.svg` and `site-logo-condensed.svg` use
off-palette `#ff0000`. Also unused: `th-logo-button-version.png`, `houston.webp` (the Starlight starter image) and
`src/assets/thomas-james-harrington-cv.pdf` (the live CV is `public/thomas-harrington-cv.pdf`).

## Images and assets

- **Location.** Put images in `src/assets/` and import them with `astro:assets` `<Image>` so they get optimised. Only
  files that need a stable raw URL go in `public/`: currently the favicon and the CV PDF.
- **Naming.** Use lowercase kebab-case, for example `navro-logo.jpg` or `headshot-dark.png`.
- **Format.** Prefer SVG for logos and icons. Use PNG for raster logos that need transparency, and JPG only for
  photos or for third-party logos supplied as JPG.
- **Themed images.** For images that differ by theme, provide both `-light` and `-dark` versions (see the headshots
  and the hero `image.light` and `image.dark` frontmatter).
- **Alt text.** Every image needs meaningful alt text. Use "<Organisation> logo" for logos. Leave alt text empty only
  for purely decorative images.
- **Inline SVG icons.** When inlining a monochrome SVG, swap its fill for `currentColor` so it follows the theme (see
  `SocialIcons.astro`).

### Organisation logos next to headings

Work history and education headings use a small logo before the organisation name: `<Image width={48}>` with the
shared `logoStyle` constant (1em high, rounded 8px corners, inline). Use the same pattern for new entries. The constant
is currently duplicated in `work-history.mdx` and `education.mdx`.

## Components and content patterns

- **Icons.** Use Starlight's built-in `<Icon>` set (for example `document`, `email`, `translate`, `seti:folder`).
  Don't add an icon library.
- **Date ranges.** Use `<Badge variant="tip" size="medium">` after the heading, in the format `Month YYYY - Month YYYY`.
- **Callouts.** Use `:::tip[Title]` asides for cross-links, such as "Projects I worked on".
- **Cards.** Use `<Card>` and `<CardGrid>` with a Starlight icon for portfolio links.
- **Homepage.** Use the `splash` template. The hero shows the themed headshot on the right, scrolling roles from the
  `heroRoles` frontmatter, and a vertical stack of `LinkButton` actions, each with an icon.
- **Component overrides.** Customise Starlight by overriding its components in `astro.config.mjs` → `components`, with
  a comment explaining why. Don't patch `node_modules`. Overrides currently in use: `Pagination` (removed),
  `SocialIcons` (adds ProZ), `Hero` (adds roles), `ThemeSelect` (icon toggle) and `Sidebar` (group headings link
  to the first page in their group).

## Motion

- Easing: `cubic-bezier(0.65, 0, 0.35, 1)`, about 0.5s, for UI transitions.
- Under `prefers-reduced-motion: reduce`, remove sliding and fading and swap content in place.
- Animations must still work without JavaScript, showing a static fallback.
