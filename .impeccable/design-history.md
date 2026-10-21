# Design history

## Follow-up — Text-only project collection

- Owner requested removal of all `/projects` imagery and the corresponding files.
- Replaced image/copy rows with title/content rows, retaining all six descriptions, technology lists, external destinations and stable project anchors. Mobile stacks titles above their details.
- Deleted the six referenced preview PNGs, their two provenance sidecars and the unused former Home preview component. Logo carousel assets are separate.

## Follow-up — Uniform silver logos

- Owner requested a uniform silver palette for all seven carousel logos and supplied `public/logos.backup/` as the original-color backup.
- Recolored the shipping PNGs to a shared cool-silver midtone with restrained internal luminance and vertical light, preserving all dimensions and alpha values exactly. Backup files are untouched.
- Inspected all seven rendered logos at desktop and mobile widths; no broken assets or horizontal overflow. Processing provenance is recorded in `public/logos/sources.json`.

## Follow-up — Home logo carousel

- Replaced “Work, in practice” on Home with the owner's seven selected logo assets, downloaded and processed into transparent local PNGs.
- Slow 80-second seamless row, hover and explicit pause, offscreen/tab suspension, wrapped static reduced-motion layout, and a direct Projects link.
- Exact sources and color/matte processing: `public/logos/sources.json`. All project data stays on `/projects`.
- Verified movement and pause, all seven assets, duplicate group widths, reduced-motion visibility, no overflow at 1440/768/390/320px, zero axe A/AA findings on desktop/mobile, and passing build/lint.
- Subsequent owner request: added mouse/pointer dragging in both directions, scrubbing the existing animation timeline. Keyboard arrows provide equivalent browsing. Desktop/mobile checks confirm drag displacement, automatic resumption, explicit pause preservation, outside release and reduced-motion behavior; build and lint pass.

## Follow-up — Text-only About introduction

- Owner requested redesigning the top of `/aboutme` without the illustrated portrait. Replaced the image layout with a perspective/location column, biography column, and full-width education summary.
- Removed the same portrait thumbnail from Home. Existing project imagery and social metadata remain configured.
- Checked Home and About at 1440, 768, 390 and 320px; About axe checks at desktop/mobile, lint and production build pass.

## October 19, 2026 — Engineering folio

- Autonomous portfolio roulette spin: seed `4a0a3b73`, candidate 4, engineering specification folio; code-led execution. Direction contract: `.impeccable/surface-home.md`.
- Replaced the outgoing **Software Project Exhibition Catalog** direction: Manrope headings, centered horizontal header, rounded skill cards and compact selected-project rows. That world is historical context for the next invocation, not current authority.
- Built world: Barlow Condensed/Geist, nearly white sheets and cool gray margins, graphite rules and restrained blue annotations; fixed desktop left rail, two-row smaller-screen header, open capability ledger, equal selected previews, full six-project ledger, original illustrated portrait and academic timeline.
- `DESIGN.md` and `.impeccable/design.json` now record the implementation, resolving the mechanical detector's old palette/type-documentation mismatch. `PRODUCT.md` remains product truth.
- Reused existing owner-repository rasters (`public/profileimage.jpg` and six project images mapped in `public/projects.json`); file-level provenance and its limits are recorded in `DESIGN.md`. No new/generated shipping raster or binary changes were made in this documentation pass.
- Evidence: built CSS, font setup, all routes and shared components; six retained `folio-*.png` desktop/mobile captures; `folio-checks.json` records no overflow at 1440/768/390/320px. Build/lint pass and six zero-violation axe checks were supplied in the handoff, not rerun by the documenter. Development indicators in captures are not design elements.
