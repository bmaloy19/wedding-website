import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maloywedding.com',
  // Temporarily disable the Astro Tailwind integration to avoid startup errors
  // (If you want Tailwind integration, re-enable and ensure PostCSS/Tailwind packages
  // are configured for your Astro version.)
  integrations: [],
  output: 'static',
  // Ensure a postcss plugins array exists so the tailwind integration can push to it
  style: {
    postcss: {
      plugins: [],
    },
  },
});
