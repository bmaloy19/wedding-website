import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maloywedding.com',
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  // Temporarily disable the Astro Tailwind integration to avoid startup errors
  // (If you want Tailwind integration, re-enable and ensure PostCSS/Tailwind packages
  // are configured for your Astro version.)
  integrations: [],
  output: 'static',
  // Astro 7 changed the default to 'jsx' whitespace rules, which can collapse the
  // spaces between inline elements. Keep v6 behaviour so the pages render as before.
  compressHTML: true,
  // Ensure a postcss plugins array exists so the tailwind integration can push to it
  style: {
    postcss: {
      plugins: [],
    },
  },
});
