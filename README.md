This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Portfolio design

The portfolio uses a light project-catalog layout with an ink-violet selected-work section. The implemented palette, typography, responsive rules and component patterns are documented in [DESIGN.md](DESIGN.md). [PRODUCT.md](PRODUCT.md) records the audience and content constraints.

Projects and articles are maintained in `public/projects.json` and `public/blogs.json` and rendered at build time. Shared navigation and contact details live in `components/Header.tsx` and `components/Footer.tsx`; the visual system lives in `app/globals.css`.

The [redesign review](.impeccable/review/redesign-review.md) includes desktop/mobile screenshots and the results of Impeccable, interface/accessibility and browser checks. Run `npm run build` for the static export in `out/`, and `npm run lint` to check the source.

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
