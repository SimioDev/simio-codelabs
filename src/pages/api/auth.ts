import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (provider !== 'github') {
    return new Response('Invalid provider', { status: 400 });
  }

  const clientId = import.meta.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response('OAuth not configured', { status: 500 });
  }

  // Generar state para seguridad
  const state = crypto.randomUUID();

  // URL de autorización de GitHub
  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
  githubAuthUrl.searchParams.set('scope', 'repo,user');
  githubAuthUrl.searchParams.set('state', state);

  return redirect(githubAuthUrl.toString(), 302);
};
