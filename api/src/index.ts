// designplus-api — Cloudflare Worker entrypoint.
// Serves every /api/* route the Pages frontend needs. Same-origin only:
// the frontend calls /api/* on its own domain and Pages proxies to this
// Worker, so no CORS headers are emitted.

import { Hono } from "hono";
import type { Env } from "./env";
import { systemRoutes } from "./routes/system";
import { adminRoutes } from "./routes/admin";
import { paymentRoutes } from "./routes/payment";
import { aiRoutes } from "./routes/ai";
import { uploadRoutes } from "./routes/uploads";

const app = new Hono<{ Bindings: Env }>();

app.route("/api", systemRoutes);
app.route("/api/admin", adminRoutes);
app.route("/api/payment", paymentRoutes);
app.route("/api/ai", aiRoutes);
app.route("/api", uploadRoutes);

app.notFound((c) => c.json({ error: "Not found" }, 404));

app.onError((err, c) => {
  console.error("[Worker] Unhandled error:", err?.message || err);
  return c.json({ error: "Internal server error. Please try again shortly." }, 500);
});

export default app;
