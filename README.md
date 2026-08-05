# HALI EXIMS Website

Corporate marketing site for **HALI EXIMS** — an Indian export house connecting global buyers with manufacturers across industrial, construction, engineering, and consumer categories.

Built with [TanStack Start](https://tanstack.com/start) (React 19 + Vite + SSR), Tailwind CSS 4, and Framer Motion. Designed in [Lovable](https://lovable.dev); this repo stays Lovable-compatible for editor sync.

## Quick start

```bash
cp .env.example .env
npm install
npm run dev
```

Use **npm** as the package manager (`package-lock.json` is the source of truth).

| Script | Description |
|--------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Environment

Copy `.env.example` → `.env` and set real contact details before production:

- `VITE_SITE_URL` — public origin (no trailing slash), used for canonical + Open Graph
- `VITE_CONTACT_EMAIL` / phone / WhatsApp / LinkedIn

Site-wide defaults live in `src/data/site.ts`.

Open Graph image: `public/og-image.png` (HALI EXIMS logo; served at `/og-image.png`).
Favicon: `public/favicon.png` (same logo).

## Project layout

```
src/
  data/site.ts          # Contact, SEO, brand config
  routes/index.tsx      # Landing page (single-page marketing)
  routes/__root.tsx     # Document shell + meta tags
  components/ui/        # shadcn kit (kept for upcoming forms/product UI)
  assets/               # Bundled images
public/                 # Favicon, OG image, static files
```

## Notes

- The buyer inquiry and newsletter forms are UI-only until a backend is connected.
- Phone defaults in code are placeholders — replace via `.env` before launch.
- Do not force-push or rewrite published git history while the project is linked to Lovable (see `AGENTS.md`).
