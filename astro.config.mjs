// @ts-check
import { defineConfig } from 'astro/config'; 

import tailwindcss from '@tailwindcss/vite'; 
import sitemap from '@astrojs/sitemap';      
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://selvaggiesteban.dev",       
  output: "server",
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/about': '/es/about',
    '/contact': '/es/contact',
    '/contact/gracias': '/es/contact/thank-you',
    '/blog': '/es/blog',
    '/servicios': '/es/services',
    '/servicios/software-a-medida': '/es/services/software-a-medida',
    '/servicios/diseno-web-responsive': '/es/services/diseno-web-responsive',
    '/servicios/posicionamiento-seo': '/es/services/posicionamiento-seo',
    '/servicios/posicionamiento-sem': '/es/services/posicionamiento-sem',
    '/servicios/e-mail-marketing': '/es/services/e-mail-marketing',
    '/cv/desarrollador-web-full-stack': '/es/cv/desarrollador-web-full-stack',
    '/cv/ingeniero-en-software': '/es/cv/ingeniero-en-software',
    '/cv/ingeniero-en-informatica': '/es/cv/ingeniero-en-informatica',
    '/cv/experto-en-posicionamiento-seo': '/es/cv/experto-en-posicionamiento-seo',
    '/politica-de-privacidad': '/es/privacy-policy',
    '/politica-de-cookies': '/es/cookie-policy',
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/presupuestos/') &&
      !page.includes('/login') &&
      !page.includes('/api/') &&
      !page.includes('/contacto/gracias') &&
      !page.includes('/contact/thank-you') &&
      !page.includes('/404'),
    serialize(item) {
      const url = item.url;
      const base = 'https://selvaggiesteban.dev';

      // Normalize: strip /en prefix for pattern matching
      const path = url.replace(base, '').replace(/^\/en/, '') || '/';

      // Homepage
      if (path === '/') {
        item.priority = 1.0;
        item.changefreq = 'weekly';

      // CV + About
      } else if (/\/cv\//.test(path) || path.includes('/sobre-mi') || path.includes('/about')) {
        item.priority = 0.9;
        item.changefreq = 'monthly';

      // Servicios (listing + individual)
      } else if (path.includes('/servicios') || path.includes('/services')) {
        item.priority = 0.8;
        item.changefreq = 'monthly';

      // Blog index
      } else if (path === '/blog') {
        item.priority = 0.8;
        item.changefreq = 'daily';

      // Blog posts
      } else if (/\/blog\/.+/.test(path)) {
        item.priority = 0.7;
        item.changefreq = 'monthly';

      // Contact
      } else if (path.includes('/contacto') || path.includes('/contact')) {
        item.priority = 0.5;
        item.changefreq = 'yearly';

      // Legal pages
      } else if (path.includes('/politica-') || path.includes('/privacy-') || path.includes('/cookie-')) {
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