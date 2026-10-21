This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Portfolio design

The portfolio uses a light neutral layout with restrained blue accents and balanced emphasis on skills and projects. The implemented palette, typography, responsive rules and component patterns are documented in [DESIGN.md](DESIGN.md). [PRODUCT.md](PRODUCT.md) records the audience and content constraints.

Project IDs, technologies and destinations are maintained in `public/projects.json`. All translated content (including skills, teaching, education, tooltips, project descriptions and notes) lives in `lib/locales/en.json` and `lib/locales/es.json`. The contact email is centralized in `lib/contact.ts`; the visual system lives in `app/globals.css`.

## Languages (English / Spanish)

- Use the **ES / EN** selector in the header, or share any route with `?lang=es` / `?lang=en` (for example, `/projects?lang=es#numi`). Switching preserves other query parameters, anchors and scroll position.
- Selection priority: valid `lang` query parameter → saved preference (`portfolio.locale.v1` in localStorage) → browser language → English. Unsupported query values are ignored. Storage is optional; the selector and URL still work when it is blocked.
- Internal page links include the selected language. Browser back/forward restores language changes.
- `lib/i18n.tsx` provides typed dictionaries through `useI18n()`, updates the document language, title, description and Open Graph metadata, and exposes `localizeHref()` for internal links. There is no additional dependency or server requirement.
- Edit both JSON files together, preserving matching keys and array order. Project translation entries follow the order of `public/projects.json`; logo entries follow `components/LogoCarousel.tsx`. Proper names and technology brands are intentionally unchanged.
- Static HTML is prerendered in English; Spanish and query-based preferences are applied after hydration. Social crawlers without JavaScript see the default English metadata. Fully localized SEO/social previews would require separate statically generated language routes rather than only query parameters.
- Run `node --test tests/i18n.test.mjs` to validate dictionary parity and content coverage, plus `npm run lint` and `npm run build`.

The [current teaching/Aceternity review](.impeccable/review/teaching-aceternity-review.md) includes desktop/mobile screenshots and browser checks. [Source attribution and profile verification](.impeccable/review/aceternity-sources.md) document the Card Hover Effect and Timeline adaptations. Run `npm run build` for the static export in `out/`, and `npm run lint` to check the source.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host Manrope headings and the local Geist body and code fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
