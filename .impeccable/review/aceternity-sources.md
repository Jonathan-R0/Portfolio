# Teaching content and Aceternity sources

## Verified profile content

Source: owner-linked [JonathanRosenblatt_EN_BackendDeveloper.pdf](https://drive.google.com/file/d/1TqiDR9FA-7JP3-DO4ha2yrW4X3IyuRYO/view), retrieved via the public Google Drive download endpoint and read locally in October 2026.

- Teaching Assistant, Software Engineering I: August 2025 — Present.
- Guides 14 students per semester across two teams of 7 through API design, testing, project management, and development.
- Computer Engineering at University of Buenos Aires: graduated August 2026.
- Institution for the teaching role: FIUBA, explicitly stated by the owner.

LinkedIn returned HTTP 999, so the CV and owner's statement are the sources used here. The owner's current instruction confirms `jonathanr022000@gmail.com`; that address takes precedence over the different address on the CV. The PDF was inspected outside the repository and is not a shipped site asset.

## Components integrated

### Card Hover Effect

- [Component](https://ui.aceternity.com/components/card-hover-effect)
- [Original registry source](https://ui.aceternity.com/registry/card-hover-effect.json)
- Original author: Manu Arora / Aceternity UI.
- Adaptation: `components/ui/card-hover-effect.tsx`, used in Skills on Home and About. Shared-layout background follows hover and keyboard focus. Each card links to a specific, existing project anchor. White/gray/blue replace the original black-card style; no nested card shell or fake action.

### Timeline

- [Component](https://ui.aceternity.com/components/timeline)
- [Original registry source](https://ui.aceternity.com/registry/timeline.json)
- Original author: Manu Arora / Aceternity UI.
- Adaptation: `components/ui/timeline.tsx`, used in About. Sticky desktop dates and a scroll-linked blue progress beam; single-column dates on mobile. Semantic ordered list and transform-only progress replace duplicate headings and height measurement. Content is static and available without scripting.

Both adaptations reuse the already installed `framer-motion` package rather than adding the newer parallel `motion` package. No runtime Aceternity CDN, remote fonts, stock imagery, or backend requests were introduced. Reduced-motion preference disables spatial card transitions and shows a static timeline beam.
