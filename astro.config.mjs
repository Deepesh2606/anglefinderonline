import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anglefinderonline.com',
  output: 'server',
  adapter: cloudflare({
    runtime: {
      mode: 'directory',
      kvNamespaces: ["SUGGESTIONS"],
    }
  }),
  integrations: [sitemap()],
  redirects: {
    '/online-protractor': '/',
    '/image-angle-finder': '/tool/image',
    '/webcam-angle-finder': '/tool/webcam',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

