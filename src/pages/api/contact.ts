import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async (context) => {
  try {
    const data = await context.request.json();
    const { name, email, message, privacy, 'cf-turnstile-response': turnstileToken } = data;
    
    // Obtener variables de entorno nativamente en Astro v6 para Cloudflare
    const TURNSTILE_SECRET_KEY = env?.TURNSTILE_SECRET_KEY || import.meta.env.TURNSTILE_SECRET_KEY;
    const RESEND_API_KEY = env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

    if (!TURNSTILE_SECRET_KEY || !RESEND_API_KEY) {
      console.error('Faltan claves de API en el entorno.');
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