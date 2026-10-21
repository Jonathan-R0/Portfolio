This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Portfolio design

The portfolio uses a light neutral layout with restrained blue accents and balanced emphasis on skills and projects. The implemented palette, typography, responsive rules and component patterns are documented in [DESIGN.md](DESIGN.md). [PRODUCT.md](PRODUCT.md) records the audience and content constraints.

Project IDs, technologies and destinations are maintained in `public/projects.json`. All translated content (including skills, teaching, education, tooltips, project descriptions and notes) lives in `lib/locales/en.json` and `lib/locales/es.json`. The contact email is centralized in `lib/contact.ts`; the visual system lives in `app/globals.css`.

## Languages (English / Spanish)

- English pages are `/`, `/projects/` and `/aboutme/`; Spanish pages are `/es/`, `/es/projects/` and `/es/aboutme/`. All six pages have prerendered content, HTML language, metadata and social previews in their own language.
- The URL determines the language, regardless of browser language or stored preferences. The **ES / EN** selector navigates to the equivalent page, preserving other query parameters and anchors. It restores scroll position when sessionStorage is available; storage is not required to switch languages.
- Old `?lang=es` / `?lang=en` links are still supported: after hydration they are replaced with the equivalent language route, preserving other parameters and anchors. Unsupported language queries are ignored.
- Internal page links stay in the current language. Browser back/forward restores language changes. Switching languages loads a new document because the two languages have separate HTML root layouts.
- `lib/i18n.tsx` provides typed dictionaries through `useI18n()`. `lib/routing.ts` centralizes localized URLs and legacy-link compatibility. Metadata is generated at build time, not rewritten in the browser. There is no additional dependency or server requirement.
- Edit both JSON files together, preserving matching keys and array order. Project translation entries follow the order of `public/projects.json`; logo entries follow `components/LogoCarousel.tsx`. Proper names and technology brands are intentionally unchanged.
- Shared page components live in `components/pages/`. English routes use `app/(en)/`; Spanish routes use `app/es/`. `components/SiteDocument.tsx` shares the shell and fonts. `globalNotFound` is enabled for the shared 404 because there are multiple root layouts.
- `trailingSlash: true` exports each page as a directory with `index.html`, so `/es/` and nested pages work on GitHub Pages without server rewrites.
- Internal links disable speculative prefetch: this Next.js version requests segment-prefetch filenames that do not match the Windows static export. On-demand client navigation still works through the exported page payloads.
- Run `npm run lint`, `npm run build`, then `node --test tests/*.test.mjs` to validate translations, language routing and exported SEO.

The [current teaching/Aceternity review](.impeccable/review/teaching-aceternity-review.md) includes desktop/mobile screenshots and browser checks. [Source attribution and profile verification](.impeccable/review/aceternity-sources.md) document the Card Hover Effect and Timeline adaptations. Run `npm run build` for the static export in `out/`, and `npm run lint` to check the source.

## SEO

- `lib/seo.ts` centralizes the production origin (`https://niyo.com.ar`) and localized page metadata. Each page has its own canonical URL and reciprocal `en`, `es` and `x-default` language alternates.
- `app/robots.ts` and `app/sitemap.ts` generate static crawler files. Both language versions are listed with language alternates, not query-based variants. Add new pages to `pagePaths` in `lib/routing.ts`, create their routes in both languages and give them their own metadata.
- Person and WebSite JSON-LD is included directly in the exported HTML, alongside Open Graph and Twitter metadata.
- After building, run `node --test tests/seo.test.mjs` to check the exported metadata, structured data, crawler files and 404 indexing rules.
- After deploying, submit `https://niyo.com.ar/sitemap.xml` in Google Search Console. Both English and Spanish are available to crawlers without JavaScript.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the home page by modifying `components/pages/Home.tsx`. Both language versions auto-update as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host Manrope headings and the local Geist body and code fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
