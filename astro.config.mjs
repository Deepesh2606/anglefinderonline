import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/online-protractor': '/',
    '/image-angle-finder': '/tool/image',
    '/webcam-angle-finder': '/tool/webcam',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});