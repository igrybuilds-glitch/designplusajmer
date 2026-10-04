// System routes: health check, source-zip download, Supabase status.
// Mounted at /api.

import { Hono } from "hono";
import type { Env } from "../env";

export const systemRoutes = new Hono<{ Bindings: Env }>();

systemRoutes.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    geminiConfigured: !!c.env.GEMINI_API_KEY,
    worker: "designplus-api",
  });
});

// The old Express server zipped the project from local disk on demand.
// Workers have no project checkout on disk, and no source zip is committed
// to the repo, so this endpoint is intentionally retired.
const ZIP_GONE_MESSAGE = {
  error:
    "The downloadable source-code archive is no longer published. " +
    "If you need a project export, please contact the Design Plus studio directly.",
};

systemRoutes.get("/download-zip", (c) => c.json(ZIP_GONE_MESSAGE, 410));
systemRoutes.get("/download-project-zip", (c) => c.json(ZIP_GONE_MESSAGE, 410));
systemRoutes.get("/project.zip", (c) => c.json(ZIP_GONE_MESSAGE, 410));
systemRoutes.get("/code.zip", (c) => c.json(ZIP_GONE_MESSAGE, 410));

// Supabase is being removed from the stack (see cleanup task). The frontend
// no longer depends on it; report the deprecation truthfully.
systemRoutes.get("/supabase/status", (c) => {
  return c.json({
    configured: false,
    deprecated: true,
    message: "The Supabase backend has been retired. Site data is served from the static build and Cloudflare D1/R2.",
  });
});

// ---- Website visitor meter (client request 2026-10-04) --------------------
// Public beacon endpoint. The frontend fires POST /api/track once per page
// view (only after analytics cookie consent). IPs are never stored raw —
// only a SHA-256 hash, so no PII sits in D1. Basic bot filtering + a
// 30-second per-(ip,path) dedupe keeps the numbers honest.
import { getClientIp } from "../env";

const BOT_RE = /bot|crawl|spider|slurp|mediapartners|baidu|yandex|sogou|exabot|facebot|ia_archiver|ahrefs|semrush|mj12bot|dotbot|petalbot/i;

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

systemRoutes.post("/track", async (c) => {
  try {
    const ua = c.req.header("user-agent") || "";
    if (BOT_RE.test(ua)) return c.json({ ok: true, skipped: "bot" });

    let path = "/";
    try {
      const body = await c.req.json();
      if (typeof body.path === "string" && body.path.startsWith("/") && body.path.length <= 200) {
        path = body.path;
      }
    } catch {
      /* empty/malformed body -> track as "/" */
    }

    const ip = getClientIp(c.req.raw);
    const ipHash = await sha256Hex("dp-pv|" + ip);
    const now = Date.now();
    const dedupeWindow = now - 30_000;

    // Dedupe: ignore repeat hits from the same visitor+path within 30s.
    const recent = await c.env.DB.prepare(
      "SELECT id FROM pageviews WHERE ip_hash = ? AND path = ? AND created_at > ? LIMIT 1"
    ).bind(ipHash, path, dedupeWindow).first();
    if (recent) return c.json({ ok: true, skipped: "dedupe" });

    const referrer = (c.req.header("referer") || "").slice(0, 300);
    await c.env.DB.prepare(
      "INSERT INTO pageviews (path, referrer, ip_hash, user_agent, created_at) VALUES (?, ?, ?, ?, ?)"
    ).bind(path, referrer, ipHash, ua.slice(0, 200), now).run();

    return c.json({ ok: true });
  } catch (err) {
    console.error("[track] failed:", err);
    return c.json({ ok: false }, 500);
  }
});

// Public aggregate counts (used by the footer "visitors" ticker if enabled).
systemRoutes.get("/visitors", async (c) => {
  try {
    const row = await c.env.DB.prepare(
      "SELECT COUNT(*) AS total, COUNT(DISTINCT ip_hash) AS unique_visitors FROM pageviews"
    ).first<{ total: number; unique_visitors: number }>();
    return c.json({
      total_pageviews: row?.total ?? 0,
      unique_visitors: row?.unique_visitors ?? 0,
    });
  } catch {
    return c.json({ total_pageviews: 0, unique_visitors: 0 });
  }
});
