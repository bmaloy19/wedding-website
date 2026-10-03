import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://maloywedding.com',
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  integrations: [],
  output: 'static',
  // Astro 7 changed the default to 'jsx' whitespace rules, which can collapse the
  // spaces between inline elements. Keep v6 behaviour so the pages render as before.
  compressHTML: true,
  // Tailwind 4 runs as a Vite plugin; the theme lives in src/styles/global.css (@theme).
  vite: {
    plugins: [tailwindcss()],
  },
});
