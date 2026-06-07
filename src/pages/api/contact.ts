import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  try {
    const data = await context.request.json();
    const { name, email, message, privacy, 'cf-turnstile-response': turnstileToken } = data;

    // Use Astro's standard way to access Cloudflare bindings in API routes.
    // context.locals is cast to any to bypass strict type checking locally.
    const runtime = (context.locals as any)?.runtime;
    const env = runtime?.env || import.meta.env;
    
    // Fallback universal a process.env habilitado por nodejs_compat
    const getSecret = (key: string) => {
      if (env && env[key]) return env[key];
      if (typeof process !== 'undefined' && process.env && process.env[key]) return process.env[key];
      return undefined;
    };
    
    const TURNSTILE_SECRET_KEY = getSecret('TURNSTILE_SECRET_KEY');
    const RESEND_API_KEY = getSecret('RESEND_API_KEY');

    if (!TURNSTILE_SECRET_KEY || !RESEND_API_KEY) {
      console.error('Missing API keys in environment.');
      return new Response(JSON.stringify({ message: 'Error de configuración del servidor.' }), { status: 500 });
    }

    // 1. Verificar el token de Turnstile
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
        return new Response(JSON.stringify({ message: 'Verificación de seguridad fallida.' }), { status: 400 });
      }
    } else {
       return new Response(JSON.stringify({ message: 'Por favor completa el captcha de seguridad.' }), { status: 400 });
    }

    // 2. Enviar email vía Resend
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
      return new Response(JSON.stringify({ message: 'Error al enviar el correo.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Mensaje enviado con éxito.' }), { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor.' }), { status: 500 });
  }
};