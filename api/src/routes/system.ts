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
