// @ts-check
import { defineConfig } from 'astro/config'; 

import tailwindcss from '@tailwindcss/vite'; 
import sitemap from '@astrojs/sitemap';      
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://selvaggiesteban.dev",       
  output: "server",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/presupuestos/') &&
      !page.includes('/login') &&
      !page.includes('/api/') &&
      !page.includes('/contacto/gracias'),
    serialize(item) {
      const url = item.url;
      const base = 'https://selvaggiesteban.dev';

      // Homepage
      if (url === base + '/') {
        item.priority = 1.0;
        item.changefreq = 'weekly';

      // CV + About
      } else if (/\/cv\//.test(url) || url.includes('/sobre-mi')) {
        item.priority = 0.9;
        item.changefreq = 'monthly';

      // Servicios (listing + individual)
      } else if (url.includes('/servicios')) {
        item.priority = 0.8;
        item.changefreq = 'monthly';

      // Blog index
      } else if (url === base + '/blog') {
        item.priority = 0.8;
        item.changefreq = 'daily';

      // Blog posts
      } else if (/\/blog\/.+/.test(url)) {
        item.priority = 0.7;
        item.changefreq = 'monthly';

      // Contacto
      } else if (url.includes('/contacto')) {
        item.priority = 0.5;
        item.changefreq = 'yearly';

      // Páginas legales
      } else if (url.includes('/politica-')) {
        item.priority = 0.3;
        item.changefreq = 'yearly';
      }

      return item;
    }
  })],
  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});