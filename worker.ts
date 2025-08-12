export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Serve static asset via Cloudflare's assets binding
    let response = await env.ASSETS.fetch(request);

    // SPA fallback: serve index.html for non-file routes
    if (
      response.status === 404 &&
      request.method === 'GET' &&
      !/\.[\w~]+$/.test(url.pathname)
    ) {
      response = await env.ASSETS.fetch(
        new Request(new URL('/index.html', url.origin), request)
      );
    }

    // Add efficient cache lifetimes
    const pathname = url.pathname.toLowerCase();
    const headers = new Headers(response.headers);

    // Only modify successful responses
    if (response.status === 200) {
      if (pathname === '/sw.js' || pathname.startsWith('/api/')) {
        headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else if (/\.(js|css|png|jpg|jpeg|webp|svg|ico|woff2|woff|ttf)$/.test(pathname)) {
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (pathname.endsWith('.html') || pathname === '/') {
        headers.set(
          'Cache-Control',
          'public, max-age=300, s-maxage=604800, stale-while-revalidate=2592000'
        );
      }
    }

    // For HTML responses, add preload hints for stylesheets to reduce render-blocking
    const contentType = response.headers.get('content-type') || '';
    let body: BodyInit | null = response.body;


    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

// Types for the runtime (Cloudflare Workers)
export interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}
