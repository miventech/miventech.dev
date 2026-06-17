# Miventech — Portfolio

A production-grade portfolio website for **José Jaspe (Miventech)** — Unity Game Developer, Tools Engineer and Technical Content Creator.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Bilingual (English / Spanish) via path-based locale routing, fully static, deployable to Vercel in one click.

---

## Highlights

- **Modern, minimal, dark UI** — no template feel; designed to read like a senior engineer's site
- **Bilingual EN/ES** with full path-based routing (`/en/...`, `/es/...`) and SEO alternates
- **No backend required** — contact form is a `mailto:` link, content lives in TypeScript modules
- **20 curated projects** (real data from GitHub + itch.io), each with its own case-study page
- **Asset packs showcase**, **content creation section**, **GitHub stats**, **career highlights**
- **Static exportable** → extremely fast (target Lighthouse 95+)
- **Mobile-first, accessible, reduced-motion aware**, semantic HTML, full keyboard nav

---

## Stack

| Layer            | Choice                                                |
|------------------|--------------------------------------------------------|
| Framework        | Next.js 15.5 (App Router, RSC, Turbopack-ready)        |
| Language         | TypeScript (strict)                                    |
| Styling          | Tailwind CSS + custom design tokens                    |
| Animations       | Framer Motion (with `useReducedMotion`)                |
| Icons            | Lucide React + custom SVGs (TikTok, itch.io)           |
| i18n             | Custom `getDictionary()` with JSON message files       |
| Fonts            | Inter, Space Grotesk, JetBrains Mono (next/font)       |
| Deployment       | Vercel (zero-config)                                   |

---

## Getting started

```bash
# Node 20+ recommended
npm install
npm run dev
# → http://localhost:3000  (redirects to /en)
```

```bash
npm run build       # production build
npm run start       # serve production build
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

---

## Project structure

```
.
├── app/
│   ├── [locale]/           # Localised routes (en, es)
│   │   ├── layout.tsx      # Navbar + Footer + fonts
│   │   ├── page.tsx        # Home (Hero → Contact)
│   │   └── projects/
│   │       ├── page.tsx    # All projects + filters
│   │       └── [slug]/     # Case study page
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── globals.css         # Tailwind + design system
│   ├── sitemap.ts          # Multilingual sitemap
│   ├── robots.ts           # robots.txt
│   └── not-found.tsx       # 404
├── components/
│   ├── layout/             # Navbar, Footer, LanguageSwitcher
│   ├── motion/             # FadeIn (respects prefers-reduced-motion)
│   └── sections/           # Hero, About, Skills, Projects, etc.
├── lib/
│   ├── site.ts             # Name, social URLs, bio (bilingual)
│   ├── i18n.ts             # Locale constants
│   ├── dictionaries.ts     # getDictionary() loader
│   ├── projects.ts         # 18 projects w/ EN/ES copy
│   ├── skills.ts           # Skills, career stats, content channels
│   ├── asset-packs.ts      # 10 asset packs on itch.io
│   ├── types.ts            # All TypeScript types
│   └── utils.ts            # cn() helper
├── messages/
│   ├── en.json             # All UI strings (English)
│   └── es.json             # All UI strings (Spanish)
├── public/
│   ├── projects/           # SVG covers for tools without images
│   ├── favicon.svg
│   └── resume.pdf          # ← add your résumé here
├── middleware.ts           # Locale detection & redirect
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## Customising

### 1. Personal info

Edit **`lib/site.ts`**:
- `name`, `fullName`, `title`, `subtitle`, `location`
- `tagline`, `shortBio` (bilingual `{ en, es }`)
- `email` — kept private; only used by the mailto: handler
- `social` — LinkedIn / GitHub / YouTube / TikTok / itch / Twitter

### 2. Projects

Edit **`lib/projects.ts`**. Each project has:
- `slug` (used in `/projects/[slug]`)
- `title` (English, brand-safe)
- `tagline`, `description`, `role` — bilingual `{ en, es }`
- `category` — `game | tool | library | jam | experiment | asset`
- `year`, `featured` (boolean — controls the home grid)
- `stack` (string[]), `highlights` (string[])
- `links[]` — each with `kind: repo | itch | play | demo | video | store | other`
- `cover` (URL — can be remote from itch.io or local SVG in `/public/projects/`)
- `gallery` (optional array of image URLs)

### 3. UI strings

Edit **`messages/en.json`** and **`messages/es.json`**. Every user-facing string is here.

### 4. Skills, career stats, content channels

Edit **`lib/skills.ts`**. Three exports:
- `skillGroups` — categorised skill chips shown on `/` and `/skills`
- `careerStats` — the large numbers grid
- `contentChannels` — YouTube, TikTok, GitHub cards

### 5. Asset packs

Edit **`lib/asset-packs.ts`**. Add or remove packs you sell on itch.io.

### 6. Colours / theme

Edit **`tailwind.config.ts`** → `theme.extend.colors`. The accent palette is:
- `accent` (violet) — primary brand
- `accent.warm` (orange) — secondary
- `accent.glow` — lighter accent for hover/links
- `success` — small status dot only

---

## SEO

- `app/layout.tsx` sets default OpenGraph, Twitter, keywords
- `app/[locale]/layout.tsx` adds per-locale metadata + alternates
- `app/sitemap.ts` generates a multilingual sitemap (en + es × all routes)
- `app/robots.ts` exposes the sitemap
- The 404 page is static and links back home
- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your final domain for absolute URLs

### Suggested next steps for production

- Add an `og-image.png` (1200×630) to `/public/` for richer link previews
- Add a real `public/resume.pdf` (currently a `.placeholder` file)
- Add Plausible or Vercel Analytics (the layout is already structured to receive it)
- Consider swapping the `mailto:` form for Formspree/Resend if you want server-side delivery

---

## Deployment to Vercel

1. Push this folder to a Git repo
2. Import on [vercel.com](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Add env var: `NEXT_PUBLIC_SITE_URL = https://your-domain.com`
5. Deploy

Vercel auto-detects the App Router, builds static + dynamic routes, and serves the locale redirects via the included `middleware.ts`.

---

## Known issue: Windows + Node 22/24 + `next build`

If you see `EISDIR: illegal operation on a directory, readlink '...'` while running `npm run build` on Windows with Node 22 or 24, this is a known **Node.js + Webpack/Turbopack + Windows** bug that affects how `fs.readlinkSync` resolves regular files. It does **not** affect:

- `npm run dev` (works fine on Windows)
- Production builds on Vercel (Linux) — this is the deploy path
- Production builds in WSL, Docker, or any Linux VM
- macOS / Linux locally

Workarounds if you need a local production build on Windows:

1. **WSL** (recommended): `wsl --install Ubuntu`, clone the repo inside the WSL filesystem, then `npm install && npm run build`.
2. **Docker**: `docker run --rm -v ${PWD}:/app -w /app node:20-slim sh -c "npm ci && npm run build"`.
3. **Downgrade Node locally** to 20.x with [nvm-windows](https://github.com/coreybutler/nvm-windows) or [fnm](https://github.com/Schniz/fnm) — `nvm install 20 && nvm use 20`.
4. **Skip local build**: push to GitHub, let Vercel build for you (zero-config, ~45 s).

The code itself is correct and production-ready. The issue is purely an environment quirk between Node 24's `fs.readlinkSync` behavior and Windows.

---

## Content sources (where the data came from)

All project data, skills, asset packs and stats are sourced from real public profiles — no fabrication:

- **GitHub**: [github.com/miventech](https://github.com/miventech) (26+ public repos)
- **itch.io**: [miventech.itch.io](https://miventech.itch.io) (17+ titles)
- **YouTube**: [youtube.com/@MiVenTech](https://www.youtube.com/@MiVenTech)
- **TikTok**: [tiktok.com/@miventech](https://www.tiktok.com/@miventech)
- **LinkedIn**: [linkedin.com/in/jose-jaspe-miventech](https://www.linkedin.com/in/jose-jaspe-miventech/)

Cover images for projects are loaded from `img.itch.zone` (their CDN) which is whitelisted in `next.config.mjs`.

---

## License

Source code: MIT. Content (project descriptions, copy) belongs to José Jaspe.
