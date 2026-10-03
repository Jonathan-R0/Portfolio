---
name: Jonathan Rosenblatt Portfolio
description: An open engineering portfolio in white and graphite with restrained blue accents.
colors:
  paper: "#ffffff"
  ink: "#20252c"
  quiet: "#59616b"
  line: "#dde1e6"
  accent-color: "#245da8"
  accent-soft: "#edf3fb"
  focus: "#245da8"
  surface: "#f4f5f7"
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
  skill-list:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  focus: "2px"
  action: "6px"
  code: "8px"
  image: "10px"
  skill-card: "12px"
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
components:
  resume-link:
    textColor: "{colors.accent-color}"
    rounded: "{rounded.action}"
    padding: "8px 16px"
  resume-link-hover:
    backgroundColor: "{colors.accent-soft}"
  text-link:
    textColor: "{colors.accent-color}"
  project-visual:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.image}"
    padding: "24px"
  project-thumbnail:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.image}"
    padding: "10px"
    width: "120px"
  technology-list:
    textColor: "{colors.quiet}"
    typography: "{typography.label}"
  skill-list:
    textColor: "{colors.ink}"
    typography: "{typography.skill-list}"
  skill-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.skill-card}"
    padding: "24px"
  skill-card-highlight:
    backgroundColor: "{colors.accent-soft}"
    rounded: "{rounded.skill-card}"
  skill-category-icon:
    textColor: "{colors.accent-color}"
    size: "25px"
  timeline-track:
    backgroundColor: "{colors.line}"
    width: "2px"
  timeline-beam:
    backgroundColor: "{colors.accent-color}"
    width: "2px"
  timeline-node:
    backgroundColor: "{colors.accent-color}"
    rounded: "50%"
    size: "16px"
  navigation:
    textColor: "{colors.quiet}"
  navigation-active:
    textColor: "{colors.ink}"
---

# Design System: Jonathan Rosenblatt Portfolio

## Overview

**Creative North Star: "The Software Project Exhibition Catalog"**

White, graphite lettering and quiet gray surfaces frame real engineering work. Large, left-aligned Manrope headings and Geist copy keep the portfolio precise, open and restrained. The owner selected light neutrals with restrained blue accents and no large color blocks.

Project imagery supplies evidence; the interface supplies alignment, fine separators and direct routes to source, resume and contact. Skills receive prominent typography inside neutral linked cards with a shared soft-blue highlight. Teaching and education use the same restrained accent in an academic timeline. These owner-requested Aceternity adaptations extend the incumbent system. This records the implemented system; route strategy remains in `.impeccable/surface-home.md`.

**Key Characteristics:**
- White and graphite with restrained blue actions and focus.
- Open layouts with fine dividers and modest image corners.
- Prominent wrapping skills in neutral linked cards and compact, equally treated project previews.
- Visible content with directional link feedback, a shared skill highlight and a restrained scroll-progress timeline; static effects under reduced motion.

## Colors

The palette is light and neutral; blue identifies actions and interaction rather than filling broad page regions. Frontmatter describes rendered portfolio tokens, not unused compatibility theme variables.

### Primary
- **Restrained Blue** (`accent-color`): text actions, resume text, active-navigation underline, hero name period, completed education, skill and teaching icons, timeline beam/nodes/institution text and skip-link background.
- **Soft Blue** (`accent-soft`): resume hover background and shared Skills hover/focus highlight.
- **Focus Blue** (`focus`): keyboard outlines, sharing the action accent's value.

### Neutral
- **White** (`paper`): page background.
- **Graphite** (`ink`): headings, primary copy and active navigation.
- **Quiet Graphite** (`quiet`): supporting copy, navigation and technology metadata.
- **Fine Divider** (`line`): header, skills section, project rows and footer separators, plus the academic timeline track.
- **Soft Gray Surface** (`surface`): skill cards at rest, all project image mats, footer background and available preformatted-code styling.

Local details remain local: resume stroke (`#b7c0cc`), selection (`#d5e5fa`), scrollbar thumb (`#a3aab4`) and translucent tap highlight (`#245da825`). White text appears on the focus-revealed blue skip link. There is no alternating project-mat palette.

**The Restrained Accent Rule.** Keep broad regions white or neutral gray; use blue for actions, focus and small identity details.

## Typography

**Display Font:** Manrope, loaded through `next/font/google`, with sans-serif fallback.
**Body Font:** locally hosted Geist (`app/fonts/GeistVF.woff`), with sans-serif fallback.
**Code Font:** locally hosted Geist Mono (`app/fonts/GeistMonoVF.woff`), with monospace fallback. Its global styling is available but no dedicated reading route is shipped.

Generated families bind through `--font-display`, `--font-body` and `--font-code`; all use swap display. Headings balance; paragraphs use pretty wrapping. Skills category headings inherit Manrope; skill items and descriptions inherit Geist.

- **Display:** hero name; mobile uses `clamp(2.8rem, 10.5vw, 4.6rem)`.
- **Headline:** section headings; mobile uses (2rem). Supporting-page headings use `clamp(3rem, 5.7vw, 5rem)` with (1.06) line height, then (3.2rem) on mobile.
- **Title:** full project titles; mobile uses (1.5rem). Home titles use (1.4rem) at desktop/tablet. The mobile stylesheet requests (1.25rem) for selected titles, but its later equally specific general project rule wins: the actual mobile size is (1.5rem).
- **Body:** project descriptions use (1.65) line height and up to (55ch); home descriptions use (0.92rem). Hero introductions cap at (44ch); supporting-page introductions at (45ch).
- **Label:** wrapping technology metadata; home rows use (0.75rem). Normal casing is retained.
- **Skill list:** prominent plain text with (500) weight, (1.6) line height and mobile size (1.4rem). Category headings use (1.05rem / 600); concrete descriptions use (0.92rem / 1.7) and up to (35ch).
- **Teaching and timeline:** home teaching heading uses (2.25rem / 1.2), then (2rem) on mobile; role heading uses (1.2rem / 1.4), metadata (0.85rem). Timeline entry headings use (1.8rem / 1.25), then (1.5rem) on mobile; dates use Geist (1.15rem / 500 / 1.5), then quiet (0.9rem). Institution text uses blue (0.9rem); teaching topics use (0.88rem).

**The Two Voices Rule.** Manrope carries headings and the wordmark; Geist carries prose, navigation, actions and technical metadata.

## Layout

The shared centered container caps at (1200px), subtracting (112px) from viewport width: (56px) gutters on wide screens. At inclusive `max-width: 1050px`, it subtracts (72px), giving (36px) gutters; at `max-width: 760px`, it subtracts (40px), giving (20px) gutters. The tablet rule does not retain the desktop maximum-width cap.

Home order is hero, skills, selected projects, teaching and about preview. Hero padding is (56px / 44px), then (44px / 38px) on mobile. Below the name, identity, introduction/contact and Skills anchor use (1fr / 1.2fr / auto) columns with (44px) gaps. Tablet hides the third anchor, leaving two columns with (28px) gaps. Mobile stacks the remaining content with (22px) gaps. The hero anchor remains hidden on mobile; header Skills navigation stays available.

Skills use (44px / 52px) section padding and top/bottom section dividers. Cards occupy three equal columns with (16px) gaps and (24px) internal padding. On mobile the heading and introduction stack, cards become one column retaining (16px) gaps and (24px) padding, and section padding becomes (32px / 36px). Skill items wrap with (6px / 20px) row/column gaps. Category icons have (24px) bottom spacing, then (16px) on mobile; category-heading bottom spacing is (20px), then (12px). Descriptions have (18px / 24px) vertical margins; project cues align at the card bottom.

Selected projects comprise three equally styled rows: Numi, User CRUD and Goodreads Backend. Each has a square thumbnail plus copy, separated by fine rules and (24px) vertical padding. Thumbnail columns step (120px → 100px → 76px); row gaps step (28px → 20px → 18px). Desktop/tablet copy has a separate action column with (40px) gap; mobile uses block copy and places the action below metadata. Rows retain thumbnail-plus-copy layout. Selected-section padding is (48px / 56px), then (36px / 30px) on mobile.

Projects uses two columns with (64px / 40px) row/column gaps; mobile uses one column and (44px) gaps. Its neutral mats use (30px) padding, then (22px). Supporting-page introductions use two columns with (48px) gaps, then stack with (24px) gaps. Page padding is (72px / 100px), then (44px / 60px). About uses (0.9fr / 1.1fr) columns with (100px) gap, reducing to (52px) at tablet, then one column with (40px) gap; mobile portrait width caps at (400px). About places the academic journey after its main content and before shared Skills; Skills has (60px) bottom margin here.

Home Teaching uses (1fr / 1.2fr) columns, a (64px) gap and (24px / 60px) section padding. At the mobile breakpoint it stacks with a (24px) gap and (20px / 40px) padding. The academic journey uses (64px) section padding, then (44px) on mobile. Its timeline wrapper uses (20px) vertical padding; entries use (0.75fr / 1.25fr) columns, a (60px) gap and (20px / 48px) vertical padding. Desktop dates stick (36px) from the viewport top with (40px) left inset. Mobile entries stack date above content with a (20px) gap, (36px) left inset and (40px) bottom padding; dates become static. The decorative track sits (10px) from the wrapper's left edge and (30px) from its top/bottom. Nodes sit (3px) from the date block's left edge and (6px) from its top on desktop, then (25px) from the entry top on mobile. Teaching topics wrap with (8px / 20px) row/column gaps.

The about preview uses (1fr / 1.2fr) columns, (40px) gap and (20px / 64px) padding, then stacks with (20px) gap and (50px) bottom padding on mobile. Its heading is (1.85rem). Section headings normally remain horizontal on mobile; Skills and the academic journey explicitly stack their heading and introduction.

## Elevation & Depth

No shadows or glass effects are used in the rendered portfolio. Depth comes from small neutral image mats, neutral skill cards with a soft-blue interaction layer, the soft gray footer, fine rules and whitespace. The skill highlight is an inset background beneath stationary content, not a lifted card. No featured colored field or enlarged featured project is implemented.

**The Flat Evidence Rule.** Frame project evidence with neutral mats, spacing and fine rules; keep entries flat at rest and on hover.

## Shapes

Image mats and portrait corners use (10px); skill cards and their highlight use (12px); resume actions use (6px), available code blocks (8px), and focused links (2px). Mats clip overflow. Full project mats use (16:10) proportions and contained imagery; home thumbnails are square. Page regions and metadata lists remain open; Skills are enclosed by neutral linked cards. Timeline nodes are circular (16px) boxes with a (3px) white border and (1px) blue outline; the track and beam are (2px) wide. Dividers and resume stroke are (1px); active navigation uses a (2px) underline. Compatibility `--radius` is not the source of the rendered image/action/card radii.

## Components

### Actions
Resume is an outlined anchor to the unchanged Google Drive document, with blue text, (44px) minimum height, (8px 16px) padding and inline SVG arrow. Hover uses soft blue with a (160ms ease-out) background transition. Mobile uses (40px) minimum height and (5px 12px) padding. Text actions use blue, (44px) minimum height, (0.65rem) gap, (0.94rem) type and (500) weight, with underlined hover.

### Navigation
The header stays in document flow. Desktop inner height is at least (96px); links have (32px) gaps. Navigation is Home (`/`), Skills (`/#skills`), Projects (`/projects`) and About (`/aboutme`). Route-active links use `aria-current="page"`, graphite text and a blue underline. Active state is pathname-based: Skills does not become active on hash navigation; Home remains active on the home page. Mobile wraps to a minimum (108px), with wordmark and resume above a full-width navigation row using (16px) gaps. No drawer is implemented. The blog is completely removed, including navigation, routes, client component, public data and post library; it has no design components.

### Project entries and technology lists
Entries pair real imagery, title, description, deduplicated technology list and an optional external destination. GitHub produces “View source”; an alternate destination produces “Visit project”; absent destinations produce no action. All project images load lazily with descriptive alt text and contained fitting; the About portrait is preloaded. Technology lists wrap plain text with (16px / 4px) column/row gaps, or (14px / 4px) in home rows. They are metadata, not pills or filters. Existing images are owner-supplied assets; the portrait is illustrated.

### Skills
Neutral cards combine a decorative blue SVG category icon (25px), heading, large wrapping list, concrete description and blue project cue with a (17px) arrow. Categories are Languages & frameworks, Data & infrastructure, and Engineering fundamentals. Lists carry primary visual weight; descriptions explain those capabilities. Each whole card is one link, respectively to `/projects#numi`, `/projects#goodreads-backend` and `/projects#wolfenstein-3d`; the cue is a span, not a nested action. Shared Skills is an in-page target on Home and About; the header always links to the Home target.

`components/ui/card-hover-effect.tsx` adapts Aceternity Card Hover Effect. A per-instance `LayoutGroup` contains an `AnimatePresence` soft-blue background with shared `layoutId="skill-highlight"`, opacity entry/exit and (0.2s) explicit duration. Hover and keyboard focus activate the same background; the project cue underlines in either state, and keyboard focus retains the global blue outline. Card content stays stationary. Reduced motion removes `layoutId` and sets duration to zero, preserving an immediate highlight.

### Teaching and academic journey
Home Teaching is an open two-column section with a decorative blue book SVG (28px), a Manrope heading, role/course, institution/date metadata, description and a text link to `/aboutme#teaching`. The About academic journey pairs dates and substantive content in a semantic ordered list, with decorative track and nodes hidden from assistive technology. It records Teaching assistant, Software Engineering I at FIUBA, August 2025 — Present, guiding 14 students per semester across two teams of 7; the second entry records Computer Engineering graduation in August 2026. Facts come from `lib/profile.ts`, the linked CV and the owner's FIUBA confirmation; no inferred employment or availability is added.

`components/ui/timeline.tsx` adapts Aceternity Timeline: sticky desktop date blocks, static stacked mobile dates and a blue transform-only `scaleY` beam driven by `useScroll` over offsets `["start 75%", "end 55%"]`. The beam uses top transform origin; no measured-height animation is used. Reduced motion sets scale to (1), showing a full static beam. Content does not depend on scrolling or animation to appear.

Source attribution and adaptation evidence are recorded in `.impeccable/review/aceternity-sources.md`: Manu Arora / Aceternity UI, [Card Hover Effect](https://ui.aceternity.com/components/card-hover-effect) ([registry](https://ui.aceternity.com/registry/card-hover-effect.json)) and [Timeline](https://ui.aceternity.com/components/timeline) ([registry](https://ui.aceternity.com/registry/timeline.json)). Both reuse the already installed `framer-motion`; this extension adds no dependencies or runtime Aceternity CDN.

### Contact and footer
Hero and footer email links use `lib/contact.ts`: `jonathanr022000@gmail.com`. The neutral footer pairs a large heading with email and LinkedIn, then a ruled copyright/location/GitHub row. Mobile stacks contact content, allows email to break anywhere and wraps the bottom row with copyright on its own line. Contact heading uses `clamp(2.7rem, 4.8vw, 4.2rem)`, then (3rem) on mobile.

### Accessibility and motion
Every route provides a focusable `main` target for the visible-on-focus skip link. Navigation and technology lists have accessible labels; decorative SVGs are hidden and project actions include screen-reader-only project context. New-tab destinations use `noopener noreferrer`. Link/button focus is a (2px) blue outline offset by (5px). Content stays visible without interaction.

Text-link arrows transition over (180ms ease-out) to `translate(2px, -2px)` on hover, including horizontally pointing arrows. Smooth scrolling uses (2rem) scroll padding; Skills, project targets and the academic journey also have (2rem) scroll margin. Reduced motion switches scrolling to auto and disables CSS animations/transitions, including pseudo-elements; arrow hover transforms still apply instantaneously. The Framer Motion adaptations additionally remove spatial skill-background sharing and its duration, and replace timeline scroll progress with a static full beam. No content entrance animation or parallax is implemented.

## Do's and Don'ts

### Do:
- **Do** keep broad regions white or neutral gray with restrained blue actions and focus.
- **Do** pair Manrope headings with locally hosted Geist prose and metadata.
- **Do** contain real project imagery inside modestly rounded neutral mats.
- **Do** retain prominent wrapping skill lists, visible keyboard focus and direct destinations.

### Don't:
- **Don't** add large colored fields or a dominant featured project to the revised portfolio.
- **Don't** replace project evidence with invented imagery or claims.
- **Don't** turn technology metadata into interactive pills without a real interaction.
- **Don't** promote unused compatibility tokens or preview-only tonal ramps into shipped variants.

Documentation evidence: `PRODUCT.md`, `.impeccable/surface-home.md`, `app/globals.css`, `app/layout.tsx`, Home/Projects/About routes, Header/Hero/Skills/Teaching/AcademicJourney/Project/ProjectsPreview/Footer components, both adapted UI components, `public/projects.json`, `lib/contact.ts`, `lib/profile.ts` and `.impeccable/review/aceternity-sources.md`. Browser-reviewed renders are retained under `.impeccable/review/aceternity-*.png` (Home, About and Projects at 1440px/390px, plus desktop Skills focus). The finish reviewer requested persistence-document reconciliation only and returned no material visual corrections. Sidecar snippets are self-contained static previews; they describe but do not reimplement Framer Motion shared layout or scroll tracking. Tonal ramps are synthesized preview metadata, not shipped palette steps.

Not canonized: conflicting mobile project-title declarations are recorded as cascade behavior, not a new typography variant; pathname-only Skills active state and instantaneous reduced-motion hover displacement are implementation limitations, not future requirements. Authored project-description emoji is content, not an icon convention. No UI or asset corrections were made in this pass.
