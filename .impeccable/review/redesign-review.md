# Portfolio redesign review — October 2026

## Approved direction

All-site project exhibition catalog for recruiters and technical teams. Cool white, graphite, ink violet and lavender; Manrope display and locally hosted Geist body. The owner approved the replacement palette and composition. Product facts, projects, article prose and external links remain based on the incumbent content.

## Tools and decisions

- **Impeccable:** loaded context, init/new-work/craft-floor guidance; recorded concept roll; mechanical detector returned `[]` on all changed UI targets. A separate finish reviewer inspected all ten screenshots. Its two material findings—unsupported FIUBA employment in structured data and missing persisted roll evidence—were corrected. The verdict pass scored both resolved and returned **ship at fix-list scope**.
- **Vercel React best practices:** static JSON imports and Server Components replace client fetching, timers, unnecessary state, chart code and animation dependencies in the rendered routes. Only navigation's active-path styling needs a client component.
- **Web design guidelines:** reviewed navigation semantics, heading hierarchy, image dimensions/lazy loading, focus, skip link, contrast, dates and reduced motion against the fetched current guidelines. The main landmark is focusable for skip navigation. Above-fold featured imagery loads eagerly; other project images load lazily.
- **Documenter:** recorded implemented tokens and component conventions in `DESIGN.md` and `.impeccable/design.json`.

## Verified on exported build

- `npm run build`: passed, all routes statically exported.
- `npm run lint`: passed.
- Edge/Playwright: home, projects, about, writing index and article all returned HTTP 200.
- Axe WCAG 2.0/2.1 A/AA: no automated violations on all five routes at 1440 and 390 CSS px.
- No horizontal overflow at 320, 390, 768, 1024 or 1440 CSS px on any route.
- One H1 and main landmark per route; no broken images or uncaught browser errors.
- Keyboard: skip link receives first focus and moves focus to `main-content`; navigation to Projects works.
- Reduced motion: static projects remain visible and scroll behavior becomes `auto`.
- Full-page desktop/mobile captures checked for hierarchy, line wrapping, framing, contrast and complete loading. These checks are scoped to the captured content and tested flows, not a full manual accessibility certification.

## Captures

| Route | Desktop | Mobile |
| --- | --- | --- |
| Home | [desktop.png](desktop.png) | [mobile.png](mobile.png) |
| Projects | [projects-1440.png](projects-1440.png) | [projects-390.png](projects-390.png) |
| About | [about-1440.png](about-1440.png) | [about-390.png](about-390.png) |
| Writing | [writing-1440.png](writing-1440.png) | [writing-390.png](writing-390.png) |
| Article | [article-1440.png](article-1440.png) | [article-390.png](article-390.png) |

## Asset provenance

All shipping project imagery (`numi`, `usercrud`, `goodreads`, `wolfenstein`, `earthquake`, `msteams`) and `profileimage.jpg` were pre-existing owner-supplied repository assets. No artwork or screenshot was generated for this redesign, and their pixels were not changed. Impeccable embedded this origin as metadata, with JSON sidecars for `earthquake.png` and `msteams.png` where the file format required it. Original external authorship is not recorded in the repository. Review captures above are generated from the local exported build and are development evidence, not site assets.
