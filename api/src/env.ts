// Shared Worker environment bindings + request helpers.

export interface Env {
  DB: D1Database;
  STORAGE: R2Bucket;

  // Non-secret config
  ENVIRONMENT?: string;
  INCLUDE_TEST_OTP_HINT?: string;

  // Secrets — set via the Cloudflare dashboard, never committed.
  GEMINI_API_KEY?: string;
  RAZORPAY_KEY_ID?: string;
  RAZORPAY_KEY_SECRET?: string;
  ADMIN_EMAIL_1?: string;
  ADMIN_EMAIL_2?: string;
  ADMIN_BOOTSTRAP_PASSWORD?: string;
  ADMIN_SESSION_SECRET?: string;
  ADMIN_JWT_SECRET?: string;
  FIREBASE_PROJECT_ID?: string;
  FIREBASE_SERVICE_ACCOUNT?: string;
}

/** Best-effort client IP: Cloudflare's connecting IP first, then X-Forwarded-For. */
export function getClientIp(req: Request): string {
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp && cfIp.trim()) return cfIp.trim();
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "127.0.0.1";
}
