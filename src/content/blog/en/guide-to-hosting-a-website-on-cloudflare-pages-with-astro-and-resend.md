---
title: "Guide to Hosting a Website on Cloudflare Pages with Astro and Resend"
description: "Learn the definitive method for deploying ultra-fast websites with functional forms and 100% free hosting using Astro, Cloudflare, and Resend."
pubDate: 2026-06-07
heroImage: "/assets/blog/covers/guide-to-hosting-a-website-on-cloudflare-pages-with-astro-and-resend.svg"
seoTitle: "Free Hosting on Cloudflare Pages with Astro and Resend | Guide"
seoDescription: "Learn how to host your website for free on Cloudflare Pages using Astro v6 and Resend. Fix error 10014 and configure Turnstile with this playbook."
permalink: "/blog/alojar-web-en-cloudflare-pages-con-astro-y-resend"
altTexts: ["Cloudflare Pages and Astro architecture", "Cloudflare KV database configuration panel", "Astro v6 configuration code", "Resend email integration", "Cloudflare Turnstile security widget"]
---
<ul>
<li><p>Hosting on Cloudflare Pages allows you to host projects built with Astro with unmatched response speed thanks to its global edge network.</p></li>
<li><p>Integrating Resend and Cloudflare Turnstile ensures you have professional contact forms, spam-free and without the need to pay for traditional backend servers.</p></li>
<li><p>To avoid deployment errors like code 10014, it's mandatory to correctly configure the wrangler.jsonc file and declare the ID of the existing KV database.</p></li>
</ul>

## Why choose to host a website on Cloudflare Pages with Astro

When I decided to optimize the architecture of my projects, I realized that paying for dedicated servers for corporate websites was an unnecessary expense. By <strong>hosting a website on Cloudflare Pages with Astro</strong>, I not only reduce my infrastructure costs to zero, but I also offer my clients load times that break all Core Web Vitals records. Astro generates hyper-lightweight static HTML, and Cloudflare distributes it instantly worldwide.

However, the challenge was always: how do we make a contact form work if we don't have a traditional backend? That's where the magic of serverless functions and the Resend API comes in.

## Steps to host a website on Cloudflare Pages with Astro and Resend

The initial configuration defines the success of the project. For the ecosystem to work seamlessly, I've developed a strict technical playbook that I apply on every deployment. The first step is always to take ownership of the infrastructure by purchasing the domain on Cloudflare or, alternatively, delegating the DNS. Then, you create the account on Resend by verifying domain authority to avoid being flagged as spam.

### Framework configuration when hosting a website on Cloudflare Pages with Astro and Resend

Cloudflare requires the project to compile as a Worker if it detects API routes (like our form). Therefore, it's strictly necessary to configure Astro as a server in your `astro.config.mjs` file by installing the official Cloudflare adapter.

Furthermore, even if your project is database-agnostic, the adapter demands provisioning a session. To avoid the dreaded *Error 10014* deployment error, you must create a `wrangler.jsonc` file telling Wrangler the exact ID of an existing KV database in your panel. You can review the <a href="https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/" target="_blank" rel="nofollow noopener">official Cloudflare development documentation</a> to fully understand the architecture of its Workers.

### Security and secret variables when hosting a website on Cloudflare Pages with Astro and Resend

Having the website online is useless if our contact form is broken or bombarded by bots. To fix this, you must implement Cloudflare Turnstile Captcha. Remember to always use the Public Key on the frontend and apply "Explicit Rendering" (a script that waits for the page to load 100% before drawing the widget) to prevent race conditions.

On the backend side, it's a non-negotiable requirement to configure the Resend and Turnstile secret variables directly in the Cloudflare Pages panel. In the Astro v6 code, you'll need to use the native import `import { env } from 'cloudflare:workers';` to correctly capture these keys.

## Common deployment errors and how to avoid them

Beyond error 10014, these are the failure points I see most often when a team moves this stack to production for the first time:

* **Secret variables set locally but not in the panel:** Wrangler dev secrets do not upload themselves. Every key configured with `wrangler secret put` in local development must exist in the Cloudflare dashboard under Settings → Environment variables (and be marked as encrypted when it is a secret like the Resend API key).
* **Turnstile widget rendered too early:** If the widget is instantiated before the DOM and the script are fully loaded, you get an empty box or a token that never validates. Explicit rendering after load solves it in one line of configuration.
* **Wrong binding name between wrangler.jsonc and code:** The KV binding declared in `wrangler.jsonc` must match exactly the name you destructure in `env`. A mismatch produces a runtime `undefined` that only shows up when the form is submitted, not at build time.
* **Emails that reach spam:** Resend requires DKIM, SPF and DMARC records on the domain before leaving test mode. Verify the domain, send the confirmation emails Resend provides, and only then switch the API key to production.
* **Caching the contact page aggressively:** Cloudflare's own cache can serve a stale version of the page with an expired Turnstile token. Exclude dynamic routes like the contact page from cache rules, or use a short TTL plus a bypass rule for POST paths.

Each of these errors has something in common: they do not appear in the local build. That is why I always recommend deploying to a preview branch first, submitting the real contact form end to end (including the spam path with Turnstile), and only then merging to production.

## Conclusion

<strong>Hosting a website on Cloudflare Pages with Astro and Resend</strong> is one of the most solid free architectures you can build today: Astro for hyper-lightweight output, the Cloudflare edge for global distribution and serverless functions, Resend for transactional email and Turnstile to keep bots out of your forms. The initial setup demands precision —especially around wrangler.jsonc and environment variables— but once the playbook is in place, every new deployment takes minutes.

Deploying modern technologies requires precision. If you need me to set up this maximum-speed architecture for your next business, I invite you to visit my <a href="/en/services/custom-software" target="_blank">custom software development</a> section or <a href="/en/contact" target="_blank">send me a message</a> today to start working together. You may also want to read <a href="/en/blog/web-security-protecting-your-digital-fortress" target="_blank">our guide to web security</a> to complete the protection layer of your project.