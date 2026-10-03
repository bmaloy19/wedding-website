# wedding-website

Bryce & Kacey's wedding website. Astro 7, static output, Tailwind 4 via the `@tailwindcss/vite` plugin (no PostCSS config, no `tailwind.config`). Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main` (site: maloywedding.com, `public/CNAME`).

## Run
- Node **22.22.3** (pinned in `.nvmrc`; `mise` picks it up automatically). Astro 7 needs ≥ 22.12.
- `astro.config.mjs` keeps `compressHTML: true` on purpose: Astro 7's `'jsx'` default can collapse spaces between inline elements.
- `npm ci`, then `npm run dev` → http://localhost:4321 (`PORT` env overrides). `npm run build` must pass before pushing.
- Preview config: `.claude/launch.json` "wedding-website".

## Layout
- Pages (`src/pages/`): `index` (home), `beginning` (their story), `weekend` (schedule + essentials), `stay` (Des Moines favorites), `faq`, `registry`, `rsvp` (text-us flow, no form).
- `src/layouts/Layout.astro`; components in `src/components/`: `BgMedia.astro`/`PageHero.astro` do the cinematic image/video backgrounds (drop videos in `public/videos`, pass `video=`). `Nav.astro` switches to a hamburger below `lg`.
- `RSVPForm.astro` + `src/data/guests.js` are **currently unused**, kept in case the form comes back. The form posts to Supabase using `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY`, which are GitHub Actions secrets in CI (a local `.env` is needed only if the form is revived).

## Design
- "Very high end": cinematic backgrounds and real imagery, never blank placeholder boxes.
- Theme tokens live in `src/styles/global.css` under `@theme` (`--color-*`, fonts, `--tracking-widest: 0.25em`, `--ease-luxe`); in component `<style>` blocks use `var(--color-gold)`, not v3's `theme()`. Tailwind 4 always applies `leading-*` over a responsive `md:text-*` size, so pair them with an explicit `md:leading-*` when desktop spacing matters.
- Palette: Coffee `#6E4E3D` (body), Saddle `#4F3729` (headings), Bistre `#443024` (buttons), Cement `#887262` (muted), Chamoisee `#9D7F65` (accents). No Roman numerals as decoration.
- Open placeholders (RSVP phone numbers, the story copy, reception times, a few "details to come") are tracked in project memory. Ask before inventing real-world details.
