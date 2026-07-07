---
title: "Guía para alojar una web en Cloudflare Pages con Astro y Resend"
description: "Aprende el método definitivo para desplegar sitios web ultrarrápidos, con formularios funcionales y hosting 100% gratuito usando Astro, Cloudflare y Resend."
pubDate: 2026-06-07
heroImage: "/assets/blog/covers/alojar-web-en-cloudflare-pages-con-astro-y-resend.svg"
seoTitle: "Alojamiento gratuito en Cloudflare Pages con Astro y Resend | Guía"
seoDescription: "Descubre cómo alojar tu web gratis en Cloudflare Pages usando Astro v6 y Resend. Soluciona el error 10014 y configura Turnstile con este playbook."
permalink: "/blog/alojar-web-en-cloudflare-pages-con-astro-y-resend"
altTexts: ["Arquitectura de Cloudflare Pages y Astro", "Panel de configuración de base de datos KV en Cloudflare", "Código de configuración de Astro v6", "Integración de Resend para envío de emails", "Widget de seguridad Turnstile de Cloudflare"]
---
*   El hosting en Cloudflare Pages permite alojar proyectos desarrollados en Astro con una velocidad de respuesta inigualable gracias a su red de distribución global (Edge).
*   Integrar Resend y Cloudflare Turnstile te asegura tener formularios de contacto profesionales, libres de spam y sin necesidad de pagar servidores backend tradicionales.
*   Para evitar errores de despliegue como el código 10014, es obligatorio configurar correctamente el archivo wrangler.jsonc y declarar el ID de la base de datos KV existente.

## Por qué elegir alojar una web en Cloudflare pages con Astro

Cuando decidí optimizar la arquitectura de mis proyectos, me di cuenta de que pagar servidores dedicados para webs corporativas era un gasto innecesario. Al <strong>alojar una web en Cloudflare Pages con Astro</strong>, no solo reduzco a cero mis costos de infraestructura, sino que le ofrezco a mis clientes tiempos de carga que rompen todos los récords de Core Web Vitals. Astro genera HTML estático hiperligero, y Cloudflare lo distribuye al instante en todo el mundo.

Sin embargo, el reto siempre fue: ¿cómo hacemos funcionar un formulario de contacto si no tenemos un backend tradicional? Ahí es donde entra la magia de las funciones Serverless y la API de Resend.

## Guía paso a paso: Despliegue de Astro + Cloudflare (Plan Free) + Resend

Con estos 9 pasos tienes un setup infalible, 100% gratuito en hosting y correos, y optimizado al extremo. Cada fase construye sobre la anterior — no podés saltear pasos.

### FASE 1: Infraestructura y Dominio

#### Paso 1 — Dominio

Comprá el dominio directamente en [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) al mejor precio sin markup. Si ya lo tenés en otro registrador, delegalo a Cloudflare cambiando los Name Servers a los que te asigne el panel (por ejemplo `josh.ns.cloudflare.com` y `surina.ns.cloudflare.com`). Una vez propagado, todos los registros DNS se gestionan desde Cloudflare.

#### Paso 2 — Servidor de Email (Resend)

1. Creá una cuenta gratuita en [Resend](https://resend.com).
2. Agregá tu dominio desde el panel de Resend.
3. Resend te va a pedir registros DNS de verificación (TXT para SPF, registros MX para recepción, y opcionalmente DKIM/DMARC).
4. Copiá cada registro y pegalo en el panel DNS de Cloudflare.
5. Volvé a Resend y hacé clic en **Verify**. El propagation suele tardar entre 30 segundos y 5 minutos.

> **Tip clave:** Si no verificás el dominio en Resend, tus emails salen desde el dominio temporal `resend.dev` y los clientes los reciben en spam o directamente bloqueados.

### FASE 2: Configuración del Proyecto (Astro v6)

#### Paso 3 — Modo Servidor

Cloudflare obliga a que el proyecto se compile como un Worker si detectás rutas de API (como el endpoint del formulario de contacto). Configurá Astro en modo servidor:

```js
// astro.config.mjs
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});
```

```bash
npm install @astrojs/cloudflare
```

Sin esto, el endpoint de API simplemente no existe en producción y el formulario falla con un 404 silencioso.

#### Paso 4 — Wrangler y Base de Datos KV

Aunque tu proyecto no use bases de datos, el adaptador de Cloudflare exige provisionar una sesión KV. Si no lo hacés, el despliegue colapsa con el **Error 10014**. La solución:

1. Entrá al panel de Cloudflare → **Workers & Pages** → **KV**.
2. Creá un namespace (por ejemplo `SESSION`).
3. Copiá el **ID** que aparece al lado del namespace.
4. Creá el archivo `wrangler.jsonc` en la raíz del proyecto:

```jsonc
{
  "name": "mi-sitio",
  "compatibility_date": "2026-01-01",
  "compatibility_flags": ["nodejs_compat"],
  "kv_namespaces": [
    {
      "binding": "SESSION",
      "id": "TU_ID_DE_KV_AQUÍ"
    }
  ]
}
```

> **Por qué:** Sin este archivo, Wrangler intenta crear un nuevo KV automáticamente y falla. Declarás el ID existente para que simplemente se conecte.

#### Paso 5 — Repositorio

Publicá el código limpio en GitHub. Si usás variables sensibles en el `.env` local, asegurate de que estén en el `.gitignore`:

```
.env
.env.local
.wrangler/
```

### FASE 3: Seguridad y Formularios (Frontend)

#### Paso 6 — Turnstile (Captcha)

Cloudflare Turnstile protege tu formulario de bots sin la experiencia molesta de reCAPTCHA.

1. Desde el panel de Cloudflare → **Turnstile** → creá un widget para tu dominio.
2. Copiá la **Clave Pública** (empieza con `0x...`) y usala en el frontend:

```astro
<div id="turnstile-container"></div>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof turnstile !== 'undefined') {
      turnstile.render('#turnstile-container', {
        sitekey: 'TU_CLAVE_PÚBLICA',
        theme: 'light'
      });
    }
  });
</script>
```

> **Explicit Rendering es obligatorio:** Si no esperás al `DOMContentLoaded`, Turnstile puede no renderizarse porque el widget carga asíncronamente y entra en condiciones de carrera con el hydration de Astro.

### FASE 4: Despliegue y Conexión (Backend)

#### Paso 7 — Cloudflare Pages

1. En el panel de Cloudflare → **Workers & Pages** → **Create** → **Connect to Git**.
2. Seleccioná tu repositorio de GitHub.
3. En la configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Clic en **Save and Deploy**.

#### Paso 8 — Variables Secretas (El paso crítico)

Este es el paso donde la mayoría se traba. Si no configurás las variables de entorno en el panel de Cloudflare Pages, tu código falla con Error 500 en producción porque las API Keys son `undefined`.

En el panel de tu proyecto → **Settings** → **Environment variables**, agregá:

| Variable | Valor | Disponible en |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Production |
| `TURNSTILE_SECRET_KEY` | `0xxxxxxxxxxxxx` | Production |

> **No uses el `.env` para producción.** El `.env` solo funciona en desarrollo local. En Cloudflare, las variables se leen del panel de configuración del Worker.

#### Paso 9 — Captura en Código

Para que la API en Astro lea estas variables en producción sin dar Error 500, debés usar la importación nativa de Cloudflare Workers. No funciona con `process.env` ni con `import.meta.env`.

```ts
// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message, token } = await request.json();

  // Verificar Turnstile
  const formData = new URLSearchParams();
  formData.append('secret', env.TURNSTILE_SECRET_KEY);
  formData.append('response', token);

  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData
  });

  const turnstileData = await turnstileRes.json();
  if (!turnstileData.success) {
    return new Response(JSON.stringify({ error: 'Captcha inválido' }), { status: 403 });
  }

  // Enviar email con Resend
  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Contacto <noreply@tudominio.com>',
      to: ['tu@email.com'],
      subject: `Nuevo mensaje de ${name}`,
      html: `<p><strong>${name}</strong> (${email}) escribió:</p><p>${message}</p>`
    })
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'Error al enviar' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
```

> **La diferencia entre funcionar y fallar:** `env.RESEND_API_KEY` funciona en producción porque Cloudflare inyecta las variables del panel al Worker. `import.meta.env.RESEND_API_KEY` solo funciona en desarrollo local con Vite.

### Checklist final de despliegue

Antes de dar por terminado el setup, verificá que todo esté en orden:

- [ ] Dominio verificado en Cloudflare DNS
- [ ] Dominio verificado en Resend (SPF/DKIM activos)
- [ ] `astro.config.mjs` con `output: "server"` y adaptador de Cloudflare
- [ ] `wrangler.jsonc` con el ID de KV correcto
- [ ] Variables `RESEND_API_KEY` y `TURNSTILE_SECRET_KEY` en el panel de Cloudflare Pages
- [ ] Código usando `import { env } from 'cloudflare:workers'`
- [ ] Turnstile con Explicit Rendering en el frontend
- [ ] Formulario testeado en producción (no solo en local)

El despliegue de tecnologías modernas requiere precisión. Si necesitas que configure esta arquitectura de máxima velocidad para tu próximo negocio, te invito a visitar mi sección de [desarrollo de software a medida](/servicios/software-a-medida) o enviarme un mensaje hoy mismo para empezar a trabajar juntos.