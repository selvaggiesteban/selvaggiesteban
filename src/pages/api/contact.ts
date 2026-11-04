import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const messages: Record<string, Record<string, string>> = {
  es: {
    configError: 'Error de configuración del servidor.',
    turnstileFailed: 'Verificación de seguridad fallida.',
    turnstileMissing: 'Por favor completa el captcha de seguridad.',
    emailError: 'Error al enviar el correo.',
    success: 'Mensaje enviado con éxito.',
    internalError: 'Error interno del servidor.',
  },
  en: {
    configError: 'Server configuration error.',
    turnstileFailed: 'Security verification failed.',
    turnstileMissing: 'Please complete the security captcha.',
    emailError: 'Error sending email.',
    success: 'Message sent successfully.',
    internalError: 'Internal server error.',
  },
};

function getLocale(request: Request): string {
  const referer = request.headers.get('referer') || '';
  if (referer.includes('/en/')) return 'en';
  return 'es';
}

export const POST: APIRoute = async (context) => {
  try {
    const data = await context.request.json();
    const { name, email, message, privacy, 'cf-turnstile-response': turnstileToken } = data;
    const lang = getLocale(context.request);
    const t = messages[lang];

    const TURNSTILE_SECRET_KEY = env?.TURNSTILE_SECRET_KEY || import.meta.env.TURNSTILE_SECRET_KEY;
    const RESEND_API_KEY = env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

    if (!TURNSTILE_SECRET_KEY || !RESEND_API_KEY) {
      console.error('Missing API keys in environment.');
      return new Response(JSON.stringify({ message: t.configError }), { status: 500 });
    }

    if (turnstileToken) {
      const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const verifyResponse = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });

      const verifyResult: any = await verifyResponse.json();
      if (!verifyResult.success) {
        return new Response(JSON.stringify({ message: t.turnstileFailed }), { status: 400 });
      }
    } else {
       return new Response(JSON.stringify({ message: t.turnstileMissing }), { status: 400 });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contacto Web <no-reply@selvaggiesteban.dev>',
        to: ['selvaggiesteban@gmail.com'],
        subject: `Nuevo mensaje de tu web: ${name}`,
        html: `
          <h2>Nuevo contacto desde SelvaggiEsteban.dev</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr>
          <small>El usuario ha aceptado la política de privacidad (Check: ${privacy ? 'Sí' : 'No'}).</small>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Resend error:', errorData);
      return new Response(JSON.stringify({ message: t.emailError }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: t.success }), { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: messages.es.internalError }), { status: 500 });
  }
};