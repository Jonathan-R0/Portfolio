# Jonathan Rosenblatt Portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and technical teams evaluating Jonathan's software engineering work. Confirmed by the owner during the redesign.

## Product Purpose

Present Jonathan Rosenblatt's engineering skills, computing background, and real projects, with clear routes to his resume and contact details. Skills remain prominent on Home. The owner replaced its project-preview section with a slowly moving row of seven selected transparent logos; the full project collection remains on `/projects` and is linked from the carousel.

## Capabilities and Constraints

Next.js App Router, TypeScript, Tailwind CSS, static export for GitHub Pages. Preserve the home, projects, and about routes and existing factual content and external destinations. The owner requested removing the entire blog, including its routes, navigation and public data. No invented employment, clients, achievements, or availability claims.

## Evidence on Hand

Project descriptions, technologies and links are in public/projects.json. The owner requested removing all six project preview images and their files; `/projects` is a text-only ledger. The existing portrait at public/profileimage.jpg is retained for social metadata only. Existing resume hosted on Google Drive. Contact email confirmed by the owner: jonathanr022000@gmail.com, centralized in lib/contact.ts. GitHub and LinkedIn destinations are in the shared components.

The linked CV was retrieved and read in October 2026. It confirms Teaching Assistant for Software Engineering I from August 2025 to present, guiding 14 students per semester across two teams of 7 through API design, testing, project management and development. It also confirms Computer Engineering graduation in August 2026. The owner explicitly identifies the teaching role as FIUBA. Profile details are centralized in lib/profile.ts. The latest owner-provided contact email takes precedence over the different address printed on the CV.

## Brand Commitments

Jonathan David Rosenblatt; backend development; Computer Engineering at FIUBA; Argentina. The owner rejected the violet/lavender palette and selected a light neutral palette with restrained blue accents and no large color blocks.

The owner requested text-only personal introductions without the illustrated portrait. Home uses a local transparent-logo carousel after Skills, without a client/employment/endorsement heading or implied relationship claims. Logo sources and processing are recorded in `public/logos/sources.json`.

The owner confirmed that the logos cover direct projects, work through third parties, and demos. Auting received a demo with positive feedback, but no subsequent engagement followed. A discreet visible context line and native expandable “About these projects” disclosure beneath the carousel explain this distinction; do not describe every logo as a direct client.

## Product Principles

- Let actual engineering work provide the evidence.
- Make project source, resume, and contact easy to find.
- Preserve readable content and direct navigation on mobile and desktop.
