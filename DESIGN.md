---
name: Jonathan Rosenblatt Portfolio
description: A square-cut engineering folio with a marginal index, condensed titles and open evidence ledgers.
colors:
  paper: "#fcfcfb"
  ink: "#24292c"
  quiet: "#60696e"
  line: "#d5dadd"
  accent-color: "#235e9c"
  accent-soft: "#eaf1f7"
  surface: "#f0f2f2"
  focus: "#235e9c"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4.7rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.6
  skill-list:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.3
spacing:
  4: "4px"
  8: "8px"
  12: "12px"
  16: "16px"
  20: "20px"
  24: "24px"
  28: "28px"
  32: "32px"
  36: "36px"
  40: "40px"
  44: "44px"
  48: "48px"
  64: "64px"
components:
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.quiet}"
  navigation-active:
    textColor: "{colors.accent-color}"
  resume-link:
    textColor: "{colors.ink}"
  resume-link-hover:
    textColor: "{colors.accent-color}"
  text-link:
    textColor: "{colors.accent-color}"
  skill-row:
    textColor: "{colors.ink}"
    padding: "26px 12px 26px 0"
  skill-row-highlight:
    backgroundColor: "{colors.accent-soft}"
  project-visual:
    backgroundColor: "{colors.surface}"
    padding: "16px"
  project-ledger-visual:
    backgroundColor: "{colors.surface}"
    padding: "24px"
  technology-list:
    textColor: "{colors.quiet}"
    typography: "{typography.label}"
  timeline-track:
    backgroundColor: "{colors.line}"
    width: "1px"
  timeline-beam:
    backgroundColor: "{colors.accent-color}"
    width: "1px"
  timeline-node:
    backgroundColor: "{colors.accent-color}"
    size: "9px"
  footer:
    backgroundColor: "{colors.surface}"
    padding: "44px 0 20px"
---

# Design System: Jonathan Rosenblatt Portfolio

## Overview

**Creative North Star: "Engineering folio"**

An open engineering folio pairs a cool gray marginal index with nearly white reading sheets. Condensed, uppercase title blocks establish identity; Geist prose and small technical metadata keep the evidence readable. Restrained blue marks destinations, focus and small annotations rather than broad color fields.

The system is square-cut and flat: ruled capability rows, contained original project imagery, text-led biography and an academic timeline. The owner requested removing the illustrated portrait from visible page content. It records the built replacement world, superseding the former exhibition-catalog documentation. Product facts remain in `PRODUCT.md`; route strategy and the roulette direction contract remain in `.impeccable/surface-home.md`.

**Key Characteristics:**
- A fixed desktop marginal index becomes a two-row in-flow header on smaller screens.
- Barlow Condensed titles and capability lists contrast with Geist prose and metadata.
- Open skills rows lead into equally treated selected projects and a complete project ledger.
- Blue interaction annotations move without hiding or moving the evidence itself.

## Colors

### Optional dark theme

The navigation includes a square 44px moon/sun toggle beside the language selector, with localized accessible naming and a pressed state. First visits follow the system color preference; explicit choices persist under `portfolio.theme.v1` and apply before content paints, including when switching languages. System changes apply until a preference is saved; other tabs synchronize saved changes. Storage failures do not disable the toggle.

Dark mode preserves the folio layout and restrained blue accents: paper `#171b1e`, ink `#e7ebed`, quiet `#adb8bf`, line `#3a454d`, accent/focus `#8bbcf0`, soft accent `#233344`, surface `#20262b`. Selection, scrollbars, native color scheme and compatibility tokens follow the theme. The original light palette remains unchanged.

### Primary
- **Restrained Blue** (`accent-color`): text actions, current/hovered navigation and its arrow, identity periods, skill project cues, completed education and timeline beam, nodes and institution labels.
- **Soft Blue** (`accent-soft`): shared capability-row hover/focus background.
- **Focus Blue** (`focus`): keyboard outlines; its value intentionally matches the action accent.

### Neutral
- **Folio Paper** (`paper`): page background.
- **Graphite** (`ink`): titles, primary copy, major rules and resting resume underline.
- **Quiet Graphite** (`quiet`): descriptions, secondary identity information, dates and metadata.
- **Fine Divider** (`line`): ledger rules, image borders, navigation separators and timeline track.
- **Cool Gray Margin** (`surface`): desktop rail, smaller-screen header, project mats and footer.

Local browser details in `app/globals.css` are selection (`#cddfed`), scrollbar thumb (`#9da8af`), tap highlight (`#235e9c20`) and white skip-link text. They are not additional theme variants. The HSL compatibility variables are not the source of the rendered folio palette; this document extracts the custom properties actually used on these routes.

**The Restrained Accent Rule.** Keep broad regions paper or neutral gray; reserve blue for actions, focus and small annotations.

## Typography

**Display Font:** Barlow Condensed, sans-serif fallback, loaded by `next/font/google` at weights (500, 600, 700). **Body Font:** local Geist (`app/fonts/GeistVF.woff`). **Code Font:** local Geist Mono (`app/fonts/GeistMonoVF.woff`); code styling exists globally but no dedicated code-reading surface is shipped. All three use swap display and bind through `--font-display`, `--font-body` and `--font-code`.

The frontmatter records base roles, not every responsive override. Headings use balanced wrapping; paragraphs use pretty wrapping. H1 and H2 are uppercase with tight tracking; H3 retains authored case. Body prose has no global letter-spacing override. There is no uniform mathematical type ratio.

- **Hero display:** base display role above; at inclusive (1150px) maximum it becomes (5.25rem), at (900px) maximum (6rem), then at (600px) maximum `clamp(3.7rem, 15.7vw, 5.8rem)` with (0.98) line height. The name has an explicit line break.
- **Inner-page display:** `clamp(3.5rem, 6vw, 5.5rem)` / (0.98), becoming `clamp(3.3rem, 14vw, 4.5rem)` on mobile.
- **Section headline:** frontmatter headline role, becoming (2.25rem) on mobile. Teaching uses `clamp(2.5rem, 4vw, 3.5rem)` / (1), then (2.75rem). Footer uses the same clamp / (1.02), then (2.5rem).
- **Hero thesis:** condensed uppercase (500), `clamp(2rem, 3.4vw, 3rem)` / (1.08), tracking (-0.01em); mobile (2.35rem). About subheading is (2.75rem / 1.05), then (2.5rem).
- **Project title:** frontmatter title role for selected projects; full ledger (2.5rem). Mobile selected titles are (1.65rem), full ledger titles (2.25rem). Timeline titles use (2rem / 1.15), then (1.9rem).
- **Body:** the inherited body role is (16px / 1.65); visible introductions use (0.94rem), project descriptions (0.86rem / 1.7), About prose (0.94rem), teaching prose (0.88rem). Hero introduction caps at (43ch), project descriptions (58ch), timeline paragraphs (60ch). Mobile introductions use (0.9rem), selected descriptions (0.8rem).
- **Metadata:** technology labels use the frontmatter label role; mobile selected metadata (0.65rem). Dates are (0.76rem / 1.7), About location (0.8rem), footer bottom (0.66rem), rail note (0.66rem / 1.6). These small sizes describe current implementation rather than a general minimum-text recommendation.
- **Capabilities:** condensed skill-list role becomes (1.9rem) on mobile. Category titles use Geist (0.8rem / 550 / 1.4), then (0.78rem); descriptions use (0.75rem / 1.65), then (0.76rem). Teaching role title also deliberately uses Geist (0.98rem / 500 / 1.5), then (0.9rem).
- **Identity and actions:** monogram (3.6rem / 700 / 1), tracking (-0.03em), becoming (2.5rem) at the header conversion. Navigation and resume are (0.84rem), mobile (0.76rem). Standard text action is (0.88rem / 500), with component-specific compact mobile overrides.

**The Two Voices Rule.** Use Barlow Condensed for identity, headings and prominent capability lists; use Geist for prose, navigation, actions and technical metadata.

## Layout

### Shell and responsive thresholds

The desktop shell offsets content by `--rail-width` (216px). The fixed, full-height rail has (32px 28px) padding; navigation starts after (64px), and the location/role note sits at the bottom. The content container is `min(1120px, calc(100% - 112px))`, measured inside the rail-offset shell, giving (56px) gutters before the maximum cap applies.

| Media query | Implemented change |
| --- | --- |
| `min-width: 1600px` | Rail (248px); rail horizontal padding (36px). |
| `max-width: 1150px` | Rail (180px); padding (22px); content width `calc(100% - 72px)` with (36px) gutters and no retained maximum cap. Skills use two columns; selected-project gap (20px). |
| `max-width: 900px` | Remove shell offset. Header becomes static, full-width, two-row grid with (20px) vertical padding and (16px) gap. Wordmark and resume occupy row one; four navigation links occupy row two. Hide rail note. |
| `max-width: 600px` | Container and header gutters (20px). Header padding (16px 0 10px), gap (12px). Stack principal content grids and capability rows; compact selected-project image/copy rows. |

The (900px) conversion is independent of the (600px) content stacking threshold: at tablet widths, two-row navigation coexists with multi-column content. Frontmatter spacing keys are literal, reused CSS lengths, not newly introduced runtime variables. Additional observed section-specific spacings include (60px) Skills padding and (80px) inner-page bottom padding.

### Home

Order: hero, skills, logo carousel, teaching, About preview. Hero top padding is (48px), mobile (32px); title-block bottom padding (40px), then (24px). The name pairs with a text-only role annotation; there is no visible portrait. Thesis uses (1.1fr / 1fr), (48px) gap and (28px / 32px) vertical padding. Tablet gap is (32px); mobile stacks with (20px) gap and (24px) vertical padding. The ruled identity register uses (12px) vertical padding and becomes a one-column grid on mobile.

### Home logo carousel — owner-requested replacement

`components/LogoCarousel.tsx` replaces the former “Work, in practice” preview. Seven local transparent PNGs live in `public/logos/`, with exact origin URLs and processing notes in `sources.json`. Following the owner's color-unification request, all seven PNGs now share a cool-silver treatment: RGB midtone (134,138,143), restrained original luminance variation (+/-18) and subtle vertical light (+/-5). Their dimensions and every original alpha value are preserved. The original transparent color versions remain in the owner's untouched `public/logos.backup/`. Earlier processing isolated the white app symbol and removed flat backgrounds. No customer, employer or endorsement claim is added.

Two identical seven-item flex groups form a seamless track, moving horizontally by half its width over (80s), linear and infinite. Each desktop item is (152px × 80px), gap (64px); mobile items are (128px × 72px), gap (40px). Artwork is contained at most (152px × 64px), mobile (128px × 56px); compact symbols use (72px), mobile (60px). The overflow viewport has a soft horizontal edge mask. A visible Pause/Play control and Explore projects link sit beneath it. IntersectionObserver and document visibility stop offscreen/hidden-page motion; hover pauses the row. Reduced motion disables animation, hides the duplicate and pause button, removes the edge mask, and wraps all seven originals into a static accessible list. No carousel dependency or remote image requests are used.

The former selected-work preview component and its image-specific styles have been removed. `/projects` retains the complete text-only project collection and source links.

The logo viewport also supports direct horizontal dragging with pointer capture, grab/grabbing cursors and disabled native image dragging. Dragging scrubs the existing CSS animation timeline in proportion to pointer distance, wrapping seamlessly within one loop; it does not introduce a competing transform or render on every pointer move. Releasing outside the viewport or cancelling the pointer ends the gesture. Explicit Pause remains respected. Left/right arrow keys browse by (200px) while keyboard focus pauses autoplay; touch keeps native vertical page panning through `touch-action: pan-y`. Reduced motion retains the static full-logo layout.

A quiet (0.78rem) hint below the carousel reads “Hover or tap a logo to learn about my involvement.” Individual tooltips provide the professional, academic and demo context on hover, tap or keyboard focus. The owner requested removing the redundant general explanation and “About these projects” disclosure once tooltips were available.

Skills use (60px) vertical padding, then (40px). Each linked ledger row has (1fr / 1.25fr / auto) columns, (28px) gap and (26px 12px 26px 0) padding. At (1150px) the cue moves below the skills in column two; the category spans both rows. Mobile becomes one column with (16px) gaps and (24px 8px 24px 0) padding. Wrapping skills use (16px) column gaps; mobile adds (2px) row gaps.

The shared Skills hover/focus background extends (12px) beyond both horizontal edges (`inset: 0 -12px`), giving the left-aligned text breathing room without shifting its baseline or neighboring section alignment. This applies on Home and About at all breakpoints.

Home no longer renders project previews. Its logo carousel links directly to the text-only project collection.

Teaching and About preview use (0.9fr / 1.1fr) columns with (64px) gaps. Teaching padding is (44px / 56px), About preview (36px / 64px). Mobile stacks them with gaps (28px) and (24px), and padding (32px / 40px) and (28px / 40px), respectively.

### Project collection and About

Inner pages use (48px / 80px) vertical padding, then (32px / 44px). Intro is (1.1fr / 1fr), (40px) gap, (36px) bottom padding and (40px) bottom margin, with an ink rule. Mobile stacks with (24px) gap and (28px) bottom padding/margin.

The complete Projects collection is a text-only vertical ledger: six title/content entries in (1.1fr / 1fr) columns, (40px) gap, (32px) vertical padding and bottom rules. Every entry, including Numi, retains equal top padding so its hover background has consistent breathing room. Gap reduces to (28px) at intermediate widths. Mobile stacks titles above details with (16px) gap and (28px) vertical padding. Titles are semantic h2 headings in authored case, (2.5rem / 1.1), mobile (2.25rem). Descriptions use (0.94rem / 1.7), followed by wrapping metadata and direct project actions. No image column, mat or placeholder remains.

About is text-led: a perspective heading and location on the left, biography and GitHub action on the right in (1.1fr / 1fr) columns with (40px) gap, then (36px) at intermediate widths. Mobile stacks with (32px) gap. A full-width ruled education summary follows, using the same columns with (36px) top margin and (24px) top padding; mobile stacks with (28px) top margin. The About wrapper has no bottom padding. Academic journey follows, then shared Skills; journey padding is (64px / 12px), mobile (40px / 8px), and following Skills top padding is (28px).

Academic entries use (0.8fr / 1.2fr) columns, (48px) gap and (20px / 40px) padding. Dates stick (32px) from the top with (28px) left inset. Mobile entries stack with (20px) gap and (28px) left inset; dates become static without their own inset. The track is (5px) from the left, (38px) from top and (42px) from bottom. Nodes are (1px) from the date block's left and (7px) from top; mobile top becomes (27px) relative to the static date containing structure.

Footer uses (44px / 20px) vertical padding, a one-column contact block with (28px) gap and (36px) bottom padding, then a ruled wrapping bottom row. Mobile padding is (32px / 16px), contact gap (24px), bottom padding (28px), and contact links stack. Email can wrap anywhere; copyright takes a full row on mobile.

## Elevation & Depth

The rendered folio uses no shadows, glass, gradients or lifted cards. Neutral rail/footer fields and square image mats establish tonal depth. Thin ink rules introduce major content blocks; quieter rules separate records. The shared Skills highlight is an absolute background behind stationary content, not an elevated panel.

**The Flat Evidence Rule.** Frame original evidence with neutral mats, fine rules and space; keep entries flat at rest and on hover.

## Shapes

Rendered image mats, capability highlights, resume links and timeline nodes are square-cut, with no explicit border radius. Consequently there is no extracted rounded scale. The compatibility `--radius: 0.125rem` does not govern these visible components. Project mats clip overflow, have (1px) divider borders, use (16:11) proportions and contain images without cropping. Selected mobile mats are square. Main rules and resume underline are (1px); timeline track/beam are (1px), nodes are solid (9px) squares. Technology labels have individual (1px) bottom rules and (2px) bottom padding; they are plain metadata, not pills.

## Components

### Owner-approved Aceternity interaction extensions

- **Tooltip Card:** portaled white cards with soft offset shadows, organization title, blue relationship label and quiet explanatory prose. Maximum width (288px), viewport side clearance (16px); opens on logo hover, keyboard focus or tap. Escape, outside pointer input and scrolling dismiss hover cards; focused cards follow their trigger on scroll. Moving between trigger and card allows a (160ms) grace period. Cards suspend the carousel; a drag over (5px) dismisses them and suppresses the resulting click. Duplicated logos are excluded from keyboard order and the accessibility tree.
- **Magnetic Button:** only the hero email, footer email and resume links receive up to (4px) of spring-based mouse displacement. Motion values avoid pointer-driven React renders; focus resets the effect. Touch and reduced motion remain stationary.
- **Project Hover Effect:** one shared soft-blue background travels between project rows on hover or focus, with no text displacement. Reduced motion removes layout sharing and duration.
- **Expandable Card:** adapted to inline native `details`/`summary`, not image modals. “Project notes” reveals project focus and documented setup/capabilities, sourced from existing portfolio records and public repository READMEs. Descriptions, stacks and source links stay visible when closed. No invented contributions, metrics or screenshots.
- **Pointer Highlight:** a thin blue annotation around “the inside out.” reveals once on entering view over (0.65s); words stay visible. A small decorative pointer completes the annotation; reduced motion shows a static frame.
- **Resizable Navbar:** desktop rail remains unchanged. Below (900px), the solid header is sticky and becomes more compact after a (120px) document marker leaves view: inner padding (8px / 4px), (32px) monogram, hidden wordmark expansion and (36px) navigation/resume targets. Mobile scroll padding is (160px), keeping anchors clear. Reduced motion disables CSS transitions. No translucent pill or duplicate navigation is introduced.

Source attribution: Manu Arora / Aceternity UI, free registries for `tooltip-card`, `magnetic-button`, `pointer-highlight`, `resizable-navbar`, `expandable-card-demo-standard` and the existing `card-hover-effect`. All adapt to the installed `framer-motion` rather than adding `motion` or icon dependencies. Official source URLs and content evidence are recorded in `.impeccable/aceternity-additions.md`.

### Marginal index and navigation

Monogram and name lead the fixed desktop rail; role/location closes it. Links are Home (`/`), Skills (`/#skills`), Projects (`/projects`) and About (`/aboutme`). Navigation rows have (48px) minimum height and bottom dividers. Resting labels are quiet; hover or `aria-current="page"` turns them blue and reveals a right arrow. On smaller screens rows have (40px) minimum height; at (600px) and below the arrows are hidden. The two-row header has no drawer or sticky behavior. Active state is pathname-based: Home remains current at `/#skills`; Skills never gains route-current state from the hash.

Resume is a text anchor with an ink bottom rule, (44px) minimum height and (16px) gap; hover turns text and rule blue immediately. In the two-row header it occupies the upper right with (100px) minimum width, then (88px) on mobile. The destination is the existing Google Drive resume.

### Text actions and focus

Blue inline-flex actions have (44px) minimum height and (20px) gap. Hover underlines text and moves the SVG `translate(2px, -2px)` over (180ms ease-out), including the horizontally pointing collection arrow. Compact mobile section-heading actions use (36px) minimum height. Every anchor/button has a visible keyboard outline (2px), blue, offset (5px). There is no added focus radius. The fixed skip link moves from top (-100px) to (20px) on focus; all three routes expose focusable `main#main-content` targets. Main itself suppresses its outline.

### Capability ledger

Each whole row is one link: languages/frameworks to `/projects#numi`, data/infrastructure to `/projects#goodreads-backend`, engineering fundamentals to `/projects#wolfenstein-3d`. Category and description, prominent wrapping skill list and project cue remain visible. The cue is a span inside the row, not a nested link. It underlines on hover or focus. No category icon or enclosed resting card is implemented.

The Aceternity-derived `HoverEffect` uses per-instance `LayoutGroup`, `AnimatePresence` and shared `layoutId="skill-highlight"`. Hover and keyboard focus activate the same soft-blue background with opacity entry/exit and explicit duration (0.2s); no custom shared-layout easing is specified. Content stays stationary. Reduced motion omits the shared layout ID and uses zero duration for an immediate highlight.

### Complete project ledger

All six original records appear on Projects in source order. Each article has a stable slug anchor, an accessible title relationship, description, deduplicated technology list and optional external action. GitHub yields “View source”; an alternate URL yields “Visit project”; no URL yields no action. The image field has been removed from project data and all six preview assets deleted at the owner's request. External new-tab actions use `noopener noreferrer` and project actions include screen-reader-only title context. Decorative SVGs are hidden from assistive technology.

### Biography, teaching and academic journey

Home and About use text-only introductions following the owner's request to remove the portrait. Home Teaching is an open heading-and-copy section linked to `/aboutme#teaching`; About uses a semantic ordered timeline. Dates, content and links are visible independently of animation. Decorative track/nodes are hidden from assistive technology. The transform-only beam scales from the top with `useScroll` offsets `["start 75%", "end 55%"]`; reduced motion sets `scaleY` to (1), producing a full static beam. There are no entrance reveals or parallax.

### Contact and motion defaults

Hero and footer use the centralized `lib/contact.ts` email. Footer exposes email, LinkedIn and GitHub, plus copyright/location. Global scrolling is smooth with (32px) top scroll padding; Skills, project anchors and academic journey have (32px) scroll margins. At `prefers-reduced-motion: reduce`, scrolling becomes auto, all CSS animation/transition is disabled for elements and pseudo-elements, and text-action hover transforms are removed. Framer Motion separately removes spatial highlight sharing and freezes timeline progress as described above. Resume and navigation changes are immediate even without reduced motion.

### Asset and component provenance

Project preview rasters and their two provenance sidecars were deleted at the owner's request. Project data no longer contains image associations. Remaining relevant assets are:

| Existing file | Used as |
| --- | --- |
| `public/profileimage.jpg` | Existing social metadata image only; no longer rendered on Home or About. |
| `public/logos/*.png` | Owner-selected transparent silver carousel logos; sources and processing are recorded in `public/logos/sources.json`. |

Repository provenance is the available origin record; original artist, capture author, upstream license and generation history are not established by these files and are not invented here. This documentation records origins without embedding metadata into binaries. Interface arrows are inline SVGs rendered through the existing `lucide-react` dependency. `components/ui/card-hover-effect.tsx` and `components/ui/timeline.tsx` credit Manu Arora / Aceternity UI: [Card Hover Effect](https://ui.aceternity.com/components/card-hover-effect) and [Timeline](https://ui.aceternity.com/components/timeline). They reuse existing `framer-motion`. Registry/source and CV verification notes remain in `.impeccable/review/aceternity-sources.md`; its older card terminology is historical, while the built ledger is documented here.

### Documentation evidence and limits

Extracted from `app/globals.css`, `app/layout.tsx`, all three route files; Header, Hero, Skills, Teaching, Footer, Project, Projects, ProjectsPreview and AcademicJourney; both motion UI components; `public/projects.json`; `PRODUCT.md`; and the surface direction contract. All six `folio-{home,projects,aboutme}-{1440,390}.png` captures were inspected for composition. `.impeccable/review/folio-checks.json` records HTTP success, no horizontal overflow or broken images at (1440, 768, 390, 320px) on all routes, Barlow Condensed computed headings, and route/skill/focus interaction evidence. Build/lint success and six zero-violation axe WCAG2A/AA/2.1AA checks are supplied handoff results, not checks rerun by this documentation pass; the checked JSON does not contain axe results. The screenshots contain Next.js development indicators, including an About issue badge, which are not shipping design components or evidence of the badge's cause.

The sidecar extends these primitives with breakpoints, motion, component previews and matching narrative. Static previews describe the real components but do not reproduce Framer Motion shared-layout or scroll tracking. Fonts inherit from the host application; the sidecar embeds no font binaries. No synthesized tonal ramps are supplied: the built palette has no such scales, and the documentation-only brief excludes invented tokens.

Not canonized or repaired: pathname-only Skills current state, compact metadata sizes and development capture overlays are recorded as implementation/evidence limits, not new rules for future surfaces. The source-description emoji remains authored project content, not an icon convention.

## Do's and Don'ts

### Do:
- **Do** preserve paper and gray fields with restrained blue actions and focus.
- **Do** pair Barlow Condensed identity and capability lists with Geist prose and metadata.
- **Do** retain square mats, contained original imagery and open ruled ledgers.
- **Do** provide equivalent hover/focus annotation and immediate reduced-motion states.

### Don't:
- **Don't** restore the outgoing Manrope card system as the current visual authority.
- **Don't** enlarge one selected project into a dominant featured treatment.
- **Don't** replace original project evidence with invented artwork or claims.
- **Don't** promote compatibility variables, development overlays or synthesized palette steps into shipping variants.
