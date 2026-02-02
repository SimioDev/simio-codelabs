import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code) {
    return new Response('No code provided', { status: 400 });
  }

  const clientId = import.meta.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = import.meta.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response('OAuth not configured', { status: 500 });
  }

  try {
    // Intercambiar el code por un access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(`OAuth error: ${tokenData.error_description}`, { status: 400 });
    }

    // Redirigir de vuelta al CMS con el token
    const redirectUrl = new URL('/admin/', url.origin);

    // Enviar el token de vuelta al CMS usando el formato esperado
    return new Response(
      `<!DOCTYPE html>
<html>
  <head>
    <title>Authorization</title>
  </head>
  <body>
    <script>
      (function() {
        function receiveMessage(e) {
          console.log("receiveMessage %o", e);
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({
              token: tokenData.access_token,
              provider: 'github'
            })}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        console.log("Posting message to %o", window.opener);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    console.error('OAuth error:', error);
    return new Response('OAuth failed', { status: 500 });
  }
};
