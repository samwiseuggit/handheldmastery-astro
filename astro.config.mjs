import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://handheldmastery.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
