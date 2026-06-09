import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json();
    
    // Fallback to process.env for local dev, env for Cloudflare
    const masterPassword = env.MASTER_PASSWORD || process.env.MASTER_PASSWORD;
    
    if (!masterPassword) {
      return new Response(JSON.stringify({ error: "Configuración del servidor incompleta." }), { status: 500 });
    }

    if (data.password === masterPassword) {
      // Set a secure, HTTP-only cookie valid for 7 days
      cookies.set('admin_session', 'authenticated', {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "Contraseña incorrecta." }), { status: 401 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error en la solicitud." }), { status: 400 });
  }
};