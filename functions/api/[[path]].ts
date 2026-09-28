// functions/api/[[path]].ts
// Reverse-proxy for /api/* -> the designplus-api Cloudflare Worker.
//
// Why a Function instead of _redirects: Cloudflare Pages rejects 200-proxy
// rules that point at absolute URLs ("Proxy (200) redirects can only point to
// relative paths"), so the proxying happens here in code. The browser still
// calls same-origin /api/*, so no CORS headers are needed anywhere.

const WORKER_ORIGIN = "https://designplus-api.igrybuilds.workers.dev";

export async function onRequest(context: {
  request: Request;
}): Promise<Response> {
  const { request } = context;
  const incoming = new URL(request.url);
  const target = WORKER_ORIGIN + incoming.pathname + incoming.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const upstream = await fetch(target, {
    method: request.method,
    headers,
    body: hasBody ? request.body : undefined,
    redirect: "manual",
  });

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: upstream.headers,
  });
}
