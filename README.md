# Falak Web

Next.js app for Falak with locale-based landing routes.

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

## Locale Routes

- `/` redirects to `/en/homepage`
- `/en/homepage` English landing page
- `/ar/homepage` Arabic landing page
- `/en` and `/ar` redirect to their `/homepage` route

## Scripts

| Command                     | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `npm run dev`              | Start dev server                                 |
| `npm run build`            | Production build                                 |
| `npm run start`            | Start production server                          |
| `npm run lint`             | Run Next.js lint                                 |
