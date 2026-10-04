/**
 * Build-time prerendering for the Design Plus SPA.
 *
 * After `vite build`, this script boots `vite preview` on dist/, visits every
 * route listed in public/sitemap.xml with headless Chrome, and writes the fully
 * rendered HTML to dist/<route>/index.html.
 *
 * Why: the site is a client-side SPA — every URL serves the same empty
 * index.html shell and content renders via JS. Google renders JS, but a
 * pre-rendered HTML per page gives each article its own title/meta/content in
 * the raw HTML: stronger indexing, better ranking odds, and correct link
 * previews on WhatsApp/Facebook (which don't run JS).
 *
 * Safety: if Chrome can't launch (or puppeteer isn't installed), the script
 * logs a warning and EXITS 0 — the build still succeeds and the site keeps
 * working as a normal SPA via the /* /index.html fallback. Never break a build.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PREVIEW_PORT = 4173;
const SETTLE_MS = 2500; // let lazy chunks + intro animations finish

function getRoutes() {
  const xml = readFileSync(join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = [...new Set(locs.map((u) => new URL(u).pathname))];
  // Skip anything that isn't a public content page.
  return paths.filter((p) => !p.startsWith('/admin'));
}

async function waitForPreview() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PREVIEW_PORT}/`);
      if (res.ok) return true;
    } catch { /* not up yet */ }
    await delay(1000);
  }
  return false;
}

async function main() {
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch {
    console.warn('[prerender] puppeteer not installed — skipping prerender (SPA fallback still works).');
    return;
  }

  // NOTE: never spawn with piped stdio that nobody reads — a full pipe buffer
  // would block the child. We don't need the preview server's output.
  // --host 127.0.0.1 pins IPv4 so waitForPreview()'s fetch to 127.0.0.1 always
  // connects (vite preview otherwise may bind IPv6 ::1 only).
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT), '--strictPort', '--host', '127.0.0.1'], {
    cwd: ROOT,
    stdio: 'ignore',
  });
  const up = await waitForPreview();
  if (!up) {
    console.warn('[prerender] vite preview did not start — skipping prerender.');
    preview.kill();
    return;
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      // Hard timeout: a hanging launch must NEVER hang the whole build.
      // On timeout/failure we fall back to plain SPA (warn + exit 0).
      timeout: 90000,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (err) {
    console.warn('[prerender] Chrome launch failed — skipping prerender:', err.message);
    preview.kill();
    return;
  }

  const routes = getRoutes();
  console.log(`[prerender] rendering ${routes.length} routes…`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  let ok = 0;
  for (const route of routes) {
    const url = `http://127.0.0.1:${PREVIEW_PORT}${route}`;
    try {
      // NOTE (2026-10-04): waitUntil 'networkidle0' hangs forever when external
      // image hosts (Unsplash) trickle or stall from the build VM — the DOM is
      // fully serialized by page.content() regardless of image bytes, so
      // domcontentloaded + SETTLE_MS is sufficient and never hangs.
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await delay(SETTLE_MS);
      const html = await page.content();
      // Strip the local preview origin: Chrome serializes dynamically-injected
      // <link rel="modulepreload"> / stylesheet tags with absolute preview URLs
      // (http://127.0.0.1:PORT/...). They must be relative in production HTML.
      const clean = html.split(`http://127.0.0.1:${PREVIEW_PORT}`).join('');
      const outDir = route === '/' ? DIST : join(DIST, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), clean);
      ok++;
    } catch (err) {
      console.warn(`[prerender] ✗ ${route}: ${err.message}`);
    }
  }
  console.log(`[prerender] done: ${ok}/${routes.length} pages written.`);

  await browser.close();
  preview.kill();
}

main().catch((err) => {
  console.warn('[prerender] unexpected error — skipping (build continues):', err.message);
});
