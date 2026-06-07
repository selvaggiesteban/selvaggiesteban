import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message, 'cf-turnstile-response': turnstileToken } = data;

    // In a real environment, these would be in import.meta.env or process.env (or locals.runtime.env in CF)
    const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    // 1. Verify Turnstile token
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
    }

    // 2. Send email via Resend
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
          <small>El usuario ha aceptado la política de privacidad mediante el formulario.</small>
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
