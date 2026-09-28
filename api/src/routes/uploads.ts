// POST /api/uploads — multipart file upload to the R2 STORAGE bucket.
// Backs the purchase-flow file step (currently client-side only).
// Mounted at /api.
//
// NOTE: this endpoint is intentionally unauthenticated per spec; consider
// gating it behind the OTP-verified booking flow if abuse appears.

import { Hono } from "hono";
import type { Env } from "../env";

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB per file
const ALLOWED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png", "webp"]);

function sanitizeFilename(raw: string): string {
  const base = raw.split(/[\\/]/).pop() || "file";
  // Keep only safe characters; collapse repeats; cap length.
  const cleaned = base.replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/_+/g, "_");
  const trimmed = cleaned.replace(/^[._]+|[._]+$/g, "");
  return (trimmed || "file").slice(-100);
}

export const uploadRoutes = new Hono<{ Bindings: Env }>();

uploadRoutes.post("/uploads", async (c) => {
  // Graceful degradation: the R2 bucket isn't provisioned yet (account has
  // no payment method for the R2 subscription). Fail cleanly, not with a crash.
  if (!c.env.STORAGE) {
    return c.json(
      { error: "File uploads are not enabled yet. Please try again later." },
      503
    );
  }

  let body: Record<string, string | File>;
  try {
    body = await c.req.parseBody();
  } catch {
    return c.json({ error: "Invalid multipart form data." }, 400);
  }

  const file = body["file"];
  if (!(file instanceof File)) {
    return c.json({ error: 'No file attached. Send multipart form data with a "file" field.' }, 400);
  }

  if (file.size <= 0) {
    return c.json({ error: "Attached file is empty." }, 400);
  }

  if (file.size > MAX_FILE_BYTES) {
    return c.json({ error: "File too large. Maximum allowed size is 10 MB." }, 413);
  }

  const name = file.name || "file";
  const ext = name.includes(".") ? name.split(".").pop()!.toLowerCase() : "";
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return c.json(
      { error: "Unsupported file type. Allowed: pdf, jpg, jpeg, png, webp." },
      400
    );
  }

  const key = `uploads/${crypto.randomUUID()}-${sanitizeFilename(name)}`;

  await c.env.STORAGE.put(key, file.stream(), {
    httpMetadata: file.type ? { contentType: file.type } : undefined,
  });

  return c.json({ key });
});
