---
title: "Wrangler OAuth con Write Access: Cómo Explotar el Token de Cloudflare que Ya Tenés Instalado"
description: "Guía práctica de wrangler oauth con write access: dónde guarda Wrangler el token OAuth, cómo extraerlo con wrangler auth token y usarlo en la API de Cloudflare Pages."
pubDate: 2026-10-16
heroImage: "/assets/blog/covers/wrangler-oauth-write-access.svg"
category: "Cloudflare"
tags: ["Cloudflare", "Wrangler", "DevOps", "API", "Seguridad"]
---

Hace poco me encontré con un escenario que se repite cada vez más en mi trabajo: un agente de IA de programación necesita consultar la API de Cloudflare, por ejemplo para listar los deployments de un proyecto de Pages, y no tiene credenciales propias. En lugar de crear un API token nuevo a los apuroes, me di cuenta de que yo ya tenía lo que el agente necesitaba: el token OAuth que Wrangler guardó en mi máquina cuando ejecuté `wrangler login`, un token con **write access** sobre Workers y Pages.

<ul>
<li><p><code>wrangler login</code> crea un token OAuth con permisos amplios que ya vive en tu máquina.</p></li>
<li><p><code>wrangler auth token</code> lo extrae al instante, sin leer archivos de configuración a mano.</p></li>
<li><p>En CI/CD conviene un API token con permisos mínimos, nunca tu OAuth personal.</p></li>
</ul>

En este artículo te cuento, paso a paso y desde mi experiencia personal, cómo funciona el **wrangler oauth con write access**, dónde se guarda el token, cómo obtenerlo de forma segura y cómo usarlo contra la API de Cloudflare — incluyendo el caso exacto de consultar deployments de Pages desde un script o desde un agente de código con IA.

## ¿Qué es wrangler oauth con write access?

Cuando ejecutás `wrangler login`, la CLI de Cloudflare abre tu navegador y te pedís autorizar una aplicación OAuth. Esa aplicación — Wrangler — solicita un conjunto de scopes: permisos de lectura y escritura sobre Workers, Pages, KV, R2 y más. Ese es el origen del **wrangler oauth con write access**: no es un API token creado a mano en el dashboard, sino una credencial emitida por el flujo OAuth de Cloudflare con permisos de escritura incluidos.

La diferencia práctica es importante. Un API token lo diseñás vos, scope por scope. El token OAuth de Wrangler, en cambio, nace pensado para que la CLI pueda hacer casi todo lo que vos podés hacer en el dashboard: desplegar Workers, subir assets a Pages, gestionar secrets y bases de datos. Por eso, cuando mi agente de IA de programación necesitó escribir en Pages, ese token ya tenía exactamente el permiso que hacía falta.

### Cómo funciona el flujo de wrangler login

El flujo es OAuth 2.0 con callback local. Wrangler levanta un servidor temporal en `localhost:8976`, el navegador te redirige a la pantalla de consentimiento de Cloudflare y, cuando aprobás, Cloudflare devuelve un access token y un refresh token que la CLI guarda en disco. A partir de ese momento, Wrangler renueva el access token automáticamente cada vez que vence, sin que tengas que volver a loguearte.

Si trabajás en un entorno sin navegador — una sesión SSH, un contenedor Docker o GitHub Codespaces — Wrangler soporta desde la versión 4.119.0 el Device Authorization Grant con `wrangler login --device`: te muestra un código y una URL, aprobás desde cualquier dispositivo y listo. Este detalle me salvó más de una vez cuando configure despliegues dentro de contenedores.

### Qué significa "write access" en la práctica

El write access del token OAuth se traduce en acciones concretas sobre tu cuenta de Cloudflare: crear y eliminar Workers, hacer `wrangler pages deploy`, subir y borrar objetos en R2, ejecutar migraciones de D1 y modificar secrets. En mi caso, el permiso que más uso es sobre Pages, porque este mismo blog — selvaggiesteban.dev — está desplegado en Cloudflare Workers con deploy automático desde GitHub, y el workflow usa un API token con permisos de escritura para publicar cada commit.

Que el OAuth tenga write access no significa que tengas que exponerlo. Al contrario: cuanto más sabés sobre dónde vive y cómo se renueva, mejor podés decidir cuándo usarlo y cuándo crear un token más acotado.

## Dónde guarda Wrangler el token OAuth

Por defecto, Wrangler guarda las credenciales en un archivo TOML en claro dentro de su directorio global de configuración. La ubicación varía según tu sistema operativo:

- **Linux y macOS**: `~/.config/.wrangler/config/default.toml`
- **Windows**: `%USERPROFILE%\.wrangler\config\default.toml`

El archivo contiene el access token, el refresh token y metadatos de la sesión. Si alguna vez un agente de IA o un script necesita leer el token "a mano", ese archivo es el punto de partida — de hecho, varios agentes de código con IA que usé terminaron ahí, inspeccionando el TOML para continuar con una tarea de automatización.

### Almacenamiento cifrado con el keyring del sistema

Desde junio de 2026, Wrangler ofrece una alternativa mucho más segura: `wrangler login --use-keyring`. En lugar de dejar el token en texto plano, guarda un archivo cifrado con AES-256-GCM (`default.enc`) y deposita la clave de 32 bytes en el keyring de tu sistema: Keychain en macOS, libsecret en Linux y Credential Manager en Windows. Si ya tenías credenciales en claro, Wrangler las migra y borra el TOML original al optar por esta opción.

### Cómo verificar dónde están tus credenciales

El comando `wrangler whoami` te dice exactamente todo esto: con qué cuenta estás logueado, qué scopes tenés y dónde se almacenan las credenciales. La salida se ve así:

```txt
👋 You are logged in with an OAuth Token, associated with with user@example.com.
🔐 Credentials are stored in: Plaintext file: ~/.config/.wrangler/config/default.toml
```

Si ves "Plaintext file", considerá migrar al keyring. Es un cambio de un comando y elimina el riesgo de que cualquier proceso de tu máquina lea el token sin querer.

## Cómo obtener el token OAuth con wrangler auth token

Acá está el punto de inflexión de todo esto. Antes de que existiera `wrangler auth token`, para reutilizar el OAuth en un script tenías que parsear el TOML a mano. Hoy con una sola línea obtenés el token vigente, con refresh automático incluido:

```bash
wrangler auth token
```

El comando devuelve el token que corresponda según tu configuración, respetando este orden de precedencia: primero el API token de la variable `CLOUDFLARE_API_TOKEN`, después las credenciales de API key/email (solo con `--json`) y finalmente el OAuth de `wrangler login`. Con el flag `--json` además recibís el tipo de credencial:

```json
{ "type": "oauth", "token": "..." }
```

Este es el método que uso hoy para pasarle credenciales a agentes de IA de programación y a scripts de automatización, sin exponer archivos de configuración ni duplicar tokens.

### Usar el token contra la API de Cloudflare con curl

Una vez obtenido el token, usarlo es trivial: va en el header `Authorization: Bearer`. Por ejemplo, para listar los proyectos de Pages de tu cuenta:

```bash
TOKEN=$(wrangler auth token)
ACCOUNT_ID="tu_account_id"

curl -s "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

La respuesta incluye el listado completo de proyectos con su estado de producción y la última desplegada. Como ves, el **wrangler oauth con write access** no es una cosa exótica: es simplemente una credencial OAuth estándar que podés consumir desde cualquier herramienta que hable HTTP.

### Consultar deployments de Cloudflare Pages

El caso de uso que me trajo hasta acá: verificar los deployments recientes de un proyecto de Pages desde un script. Con el mismo patrón de curl:

```bash
curl -s "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/mi-sitio/deployments" \
  -H "Authorization: Bearer $TOKEN"
```

Cada deployment devuelve su ID, la rama, el estado (`success`, `failure`, `active`) y la fecha. Con eso construí un comando rápido que corro después de cada push para confirmar que la última publicación terminó bien, sin tener que abrir el dashboard. Y como el token tiene write access, el mismo patrón me sirve para promover un deployment a producción con un POST cuando quiero hacer rollback.

## Scopes mínimos: elegir permisos con wrangler login --scopes

Wrangler login usa todos los scopes disponibles por defecto, pero podés acotar la autorización desde el diálogo de consentimiento o desde la línea de comandos:

```bash
wrangler login --scopes "account:read pages:write"
```

Y si querés ver todas las opciones antes de decidir, `wrangler login --scopes-list` imprime cada scope con su descripción. Desde agosto de 2026, el diálogo de consentimiento de Cloudflare también permite editar los scopes opcionales y quitar los que no necesitás. Mi recomendión personal: si solo vas a desplegar un sitio estático, concedé pages:write y nada más. Es el principle of least privilege aplicado a tu propia terminal.

Si necesitás permisos granulares de verdad — por ejemplo, un token limitado a un solo Worker — ahí sí conviene crear un API token en el dashboard y usarlo vía `CLOUDFLARE_API_TOKEN`, porque el flujo OAuth de `wrangler login` no soporta autorización granular a nivel de recurso.

## Wrangler OAuth vs API token: cuándo usar cada uno

Después de probar ambos caminos en decenas de proyectos, esta es la tabla que tengo en la cabeza:

- **OAuth de wrangler login**: ideal para desarrollo local interactivo. Lo usás vos en tu máquina, se renueva solo y tenés acceso completo para experimentar.
- **API token**: ideal para CI/CD, agentes y scripts compartidos. Permisos exactos, expiración configurable y revocación independiente de tu sesión personal.

En el workflow de GitHub Actions de este blog, por ejemplo, uso un API token guardado como secret — nunca el OAuth personal — con permisos solo para desplegar Workers. Así, si el token se ve comprometido, lo revoco sin perder mi sesión local de Wrangler, y viceversa.

### Seguridad: cinco reglas que sigo sin excepción

1. Nunca commitees el token: ni el TOML del OAuth ni un API token en claro.
2. Usá `--use-keyring` en tu máquina personal para sacar el token del disco en texto plano.
3. En scripts, siempre preferí `wrangler auth token` antes de leer la configuración directamente.
4. Definí variables de entorno (`CLOUDFLARE_AUTH_USE_KEYRING`, `CLOUDFLARE_API_TOKEN`) en lugar de hardcodear credenciales.
5. Revisá periódicamente tus tokens en el dashboard y borrá los que ya no usás.

## Código con IA y agentes: el escenario donde más brilla

El **wrangler oauth con write access** encontró su mejor uso — al menos en mi día a día — en el desarrollo asistido por IA. Cuando trabajamos con código con IA, los agentes de programación ejecutan comandos reales: construyen proyectos, los despliegan y verifican resultados. Y ahí es donde una credencial OAuth bien gestionada vuelve autónomo el ciclo completo.

Un flujo típico que implementé con mis agentes de IA de programación: el agente corre `npm run build`, obtiene el token con `wrangler auth token`, despliega con `wrangler pages deploy` y consulta la API para confirmar el estado del deployment. Todo sin intervención manual, y con la tranquilidad de que los permisos los definí yo.

Si te interesa este mundo, te invito a leer mi guía sobre [comandos de Claude Code](/es/blog/comandos-de-claude-code), donde muestro cómo estructuro estas sesiones de trabajo con agentes, y la guía completa de [agentes de IA](/es/blog/agentes-de-ia-guia-completa-de-sistemas-inteligentes) para entender la teoría detrás de estos sistemas autónomos. También publiqué mi experiencia sobre [generación de código sintético](/es/blog/generacion-de-codigo-sintetico), el otro gran pilar de la programación asistida por IA.

## Conclusiones, consejos y próximos pasos

Llevar el **wrangler oauth con write access** a tu flujo de trabajo es más simple de lo que parece y te ahorra tiempo real desde el primer día. Resumo lo esencial:

- `wrangler login` te da un OAuth con permisos de escritura sobre Workers y Pages.
- El token vive en `~/.wrangler/config/default.toml` o, mejor, cifrado vía `--use-keyring`.
- `wrangler auth token` es la forma correcta de extraerlo para scripts y agentes.
- En CI/CD, creamos API tokens acotados; el OAuth personal se queda en tu máquina.
- Los agentes de IA de programación son el mejor consumidor de estas credenciales bien gestionadas.

Este blog está desplegado en Cloudflare Workers con deploy automático desde GitHub — un setup que documenté en detalle en mi guía de <a href="/es/blog/alojar-web-en-cloudflare-pages-con-astro-y-resend" target="_blank">alojar web en Cloudflare Pages con Astro</a>. Si querés montar algo parecido o necesitás automatizar despliegues con IA en tu proyecto, <a href="/es/contact" target="_blank">contactame</a> y lo vemos juntos.
