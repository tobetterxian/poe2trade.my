// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    changefreq: 'daily',
    priority: 0.7,
    lastmod: new Date(),
  })],
  site: 'https://poe2trade.my',
});
