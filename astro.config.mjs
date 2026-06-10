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
      !page.includes('/api/')
  })],
  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});