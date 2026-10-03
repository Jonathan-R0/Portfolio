---
name: Jonathan Rosenblatt Portfolio
description: A software project exhibition catalog on cool paper and ink violet.
colors:
  paper: "#f8f8fa"
  ink: "#27232e"
  quiet: "#645f6e"
  line: "#ddd9e4"
  violet: "#392a50"
  lavender: "#ddd2f0"
  lavender-quiet: "#c5b7d9"
  focus: "#7650a8"
  surface: "#eeeaf3"
  surface-lavender: "#e4dbef"
  surface-cool: "#e2e6ee"
  resume-border: "#bcb3c7"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.6rem, 6.5vw, 5.8rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 550
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.77rem"
    fontWeight: 400
    lineHeight: 1.6
  article:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.85
rounded:
  focus: "2px"
  action: "6px"
  code: "8px"
  image: "10px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  stack: "28px"
  section: "32px"
  grid: "40px"
  feature: "48px"
  page: "64px"
  spacious: "80px"
components:
  resume-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "8px 16px"
  resume-link-hover:
    backgroundColor: "{colors.lavender}"
  text-link:
    textColor: "{colors.ink}"
  project-visual:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.image}"
    padding: "24px"
  project-visual-featured:
    backgroundColor: "{colors.lavender}"
    rounded: "{rounded.image}"
    padding: "32px"
  technology-list:
    textColor: "{colors.quiet}"
    typography: "{typography.label}"
  navigation:
    textColor: "{colors.quiet}"
  navigation-active:
    textColor: "{colors.ink}"
  article-row:
    textColor: "{colors.ink}"
    padding: "36px 0"
  article-row-hover:
    textColor: "{colors.focus}"
---

# Design System: Jonathan Rosenblatt Portfolio

## Overview

**Creative North Star: "The Software Project Exhibition Catalog"**

Cool paper, graphite lettering and an ink-violet exhibition field frame real engineering work. Large, left-aligned Manrope headings and quiet Geist copy give the portfolio a precise, open, restrained character for recruiters and technical teams.

Project imagery supplies the visual evidence; the interface supplies alignment, tonal framing and direct routes to source, resume and contact. This records the implemented all-site redesign, not a provisional direction. Surface-specific strategy remains in `.impeccable/surface-home.md`.

**Key Characteristics:**
- Cool paper and violet/lavender tonal contrast.
- Open layouts with fine dividers and modest image corners.
- Real project previews, plain-text metadata and direct navigation.
- Still content with brief, directional link feedback.

## Colors

The palette is cool and low-chroma, with violet used structurally rather than as scattered decoration. Frontmatter values describe the rendered catalog CSS, not unused compatibility theme variables.

### Primary
- **Ink Violet** (`violet`): selected-work field, active-navigation underline and skip-link surface.
- **Lavender** (`lavender`): featured image mat, selection and resume hover; also headings on the violet field.
- **Quiet Lavender** (`lavender-quiet`): descriptions and technologies on violet.
- **Focus Violet** (`focus`): keyboard outlines on light surfaces and writing-row hover.

### Neutral
- **Cool Paper** (`paper`): page background.
- **Graphite** (`ink`): headings, primary copy and default actions.
- **Quiet Graphite** (`quiet`): supporting copy, navigation and metadata on paper.
- **Fine Divider** (`line`): page, list and section separators.
- **Soft Exhibition Surface** (`surface`): default project mat and footer background.
- **Lavender Mat / Cool Mat** (`surface-lavender`, `surface-cool`): alternating project-grid mats, not semantic statuses.
- **Resume Stroke** (`resume-border`): outlined resume action.

Context-specific exceptions remain local: compact selected-work mats (`#e8e0f2`), its divider (`#68537e`), light action text (`#f6f1ff`, `#f4edff`), its focus outline (`#f0e8fc`), footer divider (`#d4cddd`), and the name's period (`#8961b1`). These are not a second reusable accent palette.

**The Contrast Pairing Rule.** Use quiet graphite on paper and quiet lavender on violet; do not carry light-surface metadata colors onto the exhibition field.

## Typography

**Display Font:** Manrope, loaded through `next/font/google`, with sans-serif fallback.
**Body Font:** locally hosted Geist (`app/fonts/GeistVF.woff`), with sans-serif fallback.
**Code Font:** locally hosted Geist Mono (`app/fonts/GeistMonoVF.woff`), with monospace fallback. Code styling exists, but current articles render plain paragraphs.

The source binds generated font families through `--font-display`, `--font-body` and `--font-code`; frontmatter uses human-readable family names. All fonts use swap display. Headings balance; paragraphs use pretty wrapping. Toolbox category headings explicitly use Geist as metadata rather than the display face.

- **Display:** hero name; at mobile, size becomes `clamp(2.8rem, 10.5vw, 4.6rem)`.
- **Headline:** recurring section headings; mobile section headings use (2rem). Supporting-page headings use `clamp(3rem, 5.7vw, 5rem)` with (1.06) line height, becoming (3.2rem) on mobile.
- **Title:** project titles; featured titles use (3.1rem), then (2.4rem) on mobile. Standard project titles become (1.5rem); compact home entries become (1.25rem).
- **Body:** base prose. Project copy uses (1.65) line height and up to (55ch); introductory copy uses roughly (40–45ch). Toolbox items are larger plain text, not display headings.
- **Label:** technology metadata; compact exhibition entries use (0.72rem). Labels retain normal casing rather than uppercase tracking.
- **Article:** relaxed reading prose; mobile size becomes (1.08rem), retaining its line height. Article titles use `clamp(2.8rem, 4.6vw, 4.5rem)`, (1.12) line height, and (2.8rem) on mobile.

**The Two Voices Rule.** Manrope carries headings and the wordmark; Geist carries prose, navigation, actions and technical metadata.

## Layout

The shared centered container caps at (1200px), with total width subtraction of (112px): (56px) gutters on wide screens. At `max-width: 1050px`, gutters become (36px); at `max-width: 760px`, (20px). These are inclusive max-width breakpoints, not mobile-first min-width thresholds.

Grids favor open content over enclosing cards. Projects use two columns with (40px) horizontal and (64px) vertical gaps, becoming one column with (44px) gaps on mobile. The featured home entry uses a (1.55fr / 1fr) split and (48px) gap, (32px) at tablet, then stacks on mobile. Compact selected entries retain thumbnail-plus-copy layouts at all sizes, with thumbnails stepping (150px → 100px → 90px).

Supporting-page intros use two columns, then stack. About uses a (0.9fr / 1.1fr) split with (100px) gap, then (52px), then a single column; mobile portrait width caps at (400px). Toolbox groups use three columns then one. Article reading width caps at (760px); this width is independent of the breakpoint with the same number.

Spacing is deliberately mixed, not a strict modular scale: recurring gaps and padding are extracted above. Supporting pages use (72px / 100px) top/bottom padding, becoming (44px / 60px). Toolbox sections use (80px), becoming (50px). Section edges and list dividers organize dense material.

## Elevation & Depth

No shadows or glass effects are used in the rendered catalog. Depth comes from full-width tonal fields, contrasting image mats, fine borders and generous whitespace. Images remain legible through contained fitting rather than perspective or decorative cropping.

**The Tonal Depth Rule.** Separate surfaces with color, spacing and fine rules; keep project entries flat at rest and on hover.

## Shapes

Image mats and the portrait use gently rounded corners (`image`); resume actions use smaller corners (`action`), code blocks use `code`, and focused links acquire the small `focus` radius. Image mats clip overflow. Content entries, text lists and broad page fields remain unenclosed. Dividers and the resume stroke are (1px); active navigation uses a (2px) underline. The compatibility `--radius` value is not the rendered image/action radius.

## Components

### Actions
The resume action is an outlined anchor, not a filled primary button. It has a (44px) minimum height, compact inline SVG arrow, and a brief lavender hover transition. On mobile its minimum height is (40px) and padding is (5px 12px). Text actions use (44px) minimum height, (0.65rem) gap, (0.94rem) type and (500) weight; they underline on hover. Do not infer a filled-button variant from the skip link.

### Navigation
The header is in document flow, not fixed or sticky. Its desktop inner height is at least (96px), with plain links separated by (32px). Routes are Home, Projects, About and Writing. Active links use `aria-current="page"`, dark text and an underline; article routes retain Writing's active state. At mobile, the header wraps to a minimum (108px): wordmark and resume above a full-width navigation row. No drawer or hamburger is implemented.

### Project entries and technology lists
Entries pair a real image with title, description, deduplicated technology list and an optional destination. GitHub produces “View source”; otherwise the alternate destination produces “Visit project”; no destination means no action. Images use descriptive alt text and `object-fit: contain` inside (16:10) mats; compact exhibition thumbnails use square mats. Featured imagery loads eagerly; other project images load lazily. Technology lists are wrapping plain text with (16px) column gaps and (4px) row gaps, not pills or filter controls.

Existing image provenance identifies preexisting owner-supplied assets; it is not a new authorship or generation claim. The existing portrait is illustrated. Preserve accurate captions and provenance rather than asserting undocumented original external creators.

### Writing and reading
Writing rows are whole-row links with date, heading and inline SVG arrow, separated by fine borders. Desktop uses (220px / 1fr / auto) columns and (36px) vertical padding; mobile moves dates above titles and uses (28px) padding. Hover changes text to focus violet. Articles provide a back link, dated header, divider and paragraphs separated by (28px). No search, form field, filtering or interactive chip pattern is shipped.

### Toolbox and footer
Toolbox groups are top-ruled lists with quiet category headings. The tonal footer combines a large heading, email and LinkedIn links, then a ruled copyright/location/GitHub row. Mobile stacks contact content and wraps the bottom row; email can break anywhere to avoid overflow.

### Accessibility and motion
Every route provides a focusable `main` target for the visible-on-focus skip link. Main navigation and technology lists have accessible labels; decorative SVGs are hidden, and project action names include screen-reader-only project context. External new-tab destinations use `noopener noreferrer`. Global link/button focus is a (2px) violet outline offset by (5px); the exhibition field substitutes a light outline. Text stays visible without interaction.

Arrow feedback uses a (180ms ease-out) transition to `translate(2px, -2px)`. Resume background and writing-row color transitions use (160ms ease-out). Smooth anchor scrolling is enabled normally. `prefers-reduced-motion: reduce` switches scrolling to auto and disables all animations/transitions, including pseudo-elements. The hover transform itself still applies instantaneously; the current implementation does not suppress that displacement. No entrance animation, parallax or animated skill grid is present.

## Do's and Don'ts

### Do:
- **Do** preserve the paper/graphite and violet/lavender contrast pairings.
- **Do** pair Manrope headings with locally hosted Geist prose and metadata.
- **Do** contain real project imagery inside modestly rounded tonal mats.
- **Do** retain visible keyboard focus, direct destinations and wrapping mobile navigation.

### Don't:
- **Don't** replace project evidence with invented imagery or claims.
- **Don't** add glass tiles, decorative shadows or animated skill grids to this world.
- **Don't** turn technology metadata into interactive pills without a real interaction.
- **Don't** promote local color exceptions or unused compatibility tokens into new global variants.

Documentation evidence: `app/globals.css`, `app/layout.tsx`, the shared Header/Hero/Project/ProjectsPreview/Skills/Footer components, Projects, and about/projects/writing/article routes; checked against supplied desktop/mobile home and mobile article captures. Concept-roll evidence is at `.impeccable/review/concept-roll.md`; FIUBA structured data uses `alumniOf`. Build/lint and axe success were supplied by the handoff, not rerun by this documentation pass; the independent final verdict is pending.

Not canonized: article-body emoji remains authored content, not an icon convention. No craft-floor visual defect was identified in the sampled patterns. Documentation gaps: no live computed-style sampling in this pass; synthesized sidecar tonal ramps are preview metadata, not shipped palette steps; original external asset authorship is not recorded in sampled provenance.
