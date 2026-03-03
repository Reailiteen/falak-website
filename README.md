# Falak Web

Next.js app for Falak with middleware-driven i18n routing and translated landing content.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first, `@theme` in `src/app/globals.css`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## i18n Routing

- Locale-aware routing is handled in [`middleware.ts`](./middleware.ts).
- Supported locales are defined in [`src/i18n/config.ts`](./src/i18n/config.ts).
- `/` redirects to the preferred locale homepage based on cookie/`Accept-Language`.
- Canonical landing URLs:
  - `/en`
  - `/ar`
- Alias URLs:
  - `/en/homepage`
  - `/ar/homepage`
- Runaway URLs like `/en/homepage/homepage/...` are normalized to `/en/homepage`.

## Translations

- Main page content is in [`src/lib/landing/content.ts`](./src/lib/landing/content.ts).
- Additional UI copy is in [`src/lib/landing/ui-copy.ts`](./src/lib/landing/ui-copy.ts).

## Scripts

| Command                     | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `npm run dev`              | Start dev server                                 |
| `npm run build`            | Production build                                 |
| `npm run start`            | Start production server                          |
| `npm run lint`             | Run Next.js lint                                 |
