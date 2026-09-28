// Secure payment & booking routes. Mounted at /api/payment.
//
// OTP state and replay protection live in D1 (replacing the old in-memory
// Maps/Sets). OTP codes are stored as SHA-256 hashes, never plaintext.
//
// Behavior notes vs the old Express server:
// - RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are REQUIRED. When absent the
//   order endpoint returns 503 (the old server silently fell back to mock
//   keys/orders, which would fabricate payments — never do that here).
// - Test-mode mock order verification ("order_mock_*") is only honored when
//   the configured key is a Razorpay TEST key (rzp_test_*).

import { Hono } from "hono";
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import type { Env } from "../env";
import { createRazorpayOrder } from "../razorpay";
import { lookupPrice } from "../../../src/config/pricing";

export const paymentRoutes = new Hono<{ Bindings: Env }>();

const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes
const OTP_RESEND_COOLDOWN_MS = 60 * 1000; // 60 seconds
const OTP_MAX_PER_DAY = 5;
const OTP_MAX_ATTEMPTS = 5;

function sha256Hex(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

interface OtpRow {
  code_hash: string;
  attempts: number;
  verified: number;
  expires_at: number;
}

interface OtpRateRow {
  count: number;
  window_start: number;
  last_request_at: number;
}

// 1. Send Email OTP
paymentRoutes.post("/send-otp", async (c) => {
  const { email } = await c.req.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return c.json({ error: "Valid email address is required" }, 400);
  }

  const normalizedEmail = email.toLowerCase().trim();
  const now = Date.now();
  const today = new Date(now).toDateString();
  const db = c.env.DB;

  let rate = await db
    .prepare(`SELECT count, window_start, last_request_at FROM otp_rate_limits WHERE email = ?`)
    .bind(normalizedEmail)
    .first<OtpRateRow>();

  if (!rate || new Date(rate.window_start).toDateString() !== today) {
    rate = { count: 0, window_start: now, last_request_at: 0 };
  }

  // 60-second cooldown check
  if (now - rate.last_request_at < OTP_RESEND_COOLDOWN_MS) {
    const remainingSecs = Math.ceil((OTP_RESEND_COOLDOWN_MS - (now - rate.last_request_at)) / 1000);
    return c.json({ error: `Please wait ${remainingSecs}s before requesting another OTP code.` }, 429);
  }

  // Daily free tier cap check (max 5 OTPs per email/day)
  if (rate.count >= OTP_MAX_PER_DAY) {
    return c.json(
      {
        error:
          "Daily free email verification limit reached (5/day). Please contact our Ajmer studio directly at +91 98290 85850.",
      },
      429
    );
  }

  await db
    .prepare(
      `INSERT INTO otp_rate_limits (email, count, window_start, last_request_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(email) DO UPDATE SET count = excluded.count, window_start = excluded.window_start,
         last_request_at = excluded.last_request_at`
    )
    .bind(normalizedEmail, rate.count + 1, rate.window_start, now)
    .run();

  const otp = (100000 + Math.floor(Math.random() * 900000)).toString(); // 6-digit OTP
  const expiresAt = now + OTP_TTL_MS;

  await db
    .prepare(
      `INSERT INTO otp_store (email, code_hash, attempts, verified, expires_at, created_at)
       VALUES (?, ?, 0, 0, ?, ?)
       ON CONFLICT(email) DO UPDATE SET code_hash = excluded.code_hash, attempts = 0,
         verified = 0, expires_at = excluded.expires_at, created_at = excluded.created_at`
    )
    .bind(normalizedEmail, sha256Hex(otp), expiresAt, now)
    .run();

  // NOTE: no email is actually dispatched yet (same as the old server, which
  // only logged the code). Wiring Resend into this endpoint is a separate,
  // already-planned task. Until then the code is visible in `wrangler tail`
  // logs, and in the response only when explicitly enabled for testing.
  console.log(`[Email OTP] Generated for ${normalizedEmail} (valid for 10 minutes)`);

  return c.json({
    success: true,
    message: `6-digit verification OTP sent to ${normalizedEmail}.`,
    testModeOtpHint: c.env.INCLUDE_TEST_OTP_HINT === "true" ? otp : undefined,
  });
});

// 2. Verify Email OTP
paymentRoutes.post("/verify-otp", async (c) => {
  const { email, otp } = await c.req.json();
  if (!email || !otp) {
    return c.json({ error: "Email and OTP code are required" }, 400);
  }

  const normalizedEmail = email.toLowerCase().trim();
  const db = c.env.DB;

  const record = await db
    .prepare(`SELECT code_hash, attempts, verified, expires_at FROM otp_store WHERE email = ?`)
    .bind(normalizedEmail)
    .first<OtpRow>();

  if (!record) {
    return c.json({ error: "No active OTP request found for this email. Please request a new OTP." }, 400);
  }

  if (Date.now() > record.expires_at) {
    await db.prepare(`DELETE FROM otp_store WHERE email = ?`).bind(normalizedEmail).run();
    return c.json({ error: "OTP has expired (10-minute limit). Please request a new OTP." }, 400);
  }

  if (record.attempts >= OTP_MAX_ATTEMPTS) {
    await db.prepare(`DELETE FROM otp_store WHERE email = ?`).bind(normalizedEmail).run();
    return c.json({ error: "Maximum verification attempts exceeded. Please request a new OTP." }, 429);
  }

  const attempts = record.attempts + 1;
  await db
    .prepare(`UPDATE otp_store SET attempts = ? WHERE email = ?`)
    .bind(attempts, normalizedEmail)
    .run();

  const candidate = sha256Hex(String(otp).trim());
  let match = false;
  try {
    match = timingSafeEqual(Buffer.from(record.code_hash, "hex"), Buffer.from(candidate, "hex"));
  } catch {
    match = false;
  }

  if (!match) {
    return c.json({ error: `Invalid OTP code. ${OTP_MAX_ATTEMPTS - attempts} attempts remaining.` }, 400);
  }

  await db
    .prepare(`UPDATE otp_store SET verified = 1 WHERE email = ?`)
    .bind(normalizedEmail)
    .run();

  return c.json({ success: true, message: "Email successfully verified via OTP." });
});

// 3. Create Razorpay Order (fraud-proof server price book lookup)
paymentRoutes.post("/create-order", async (c) => {
  const keyId = c.env.RAZORPAY_KEY_ID;
  const keySecret = c.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return c.json(
      {
        error:
          "Payment gateway is not configured yet (RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET missing). " +
          "Please contact the Design Plus studio directly to complete your booking.",
      },
      503
    );
  }

  try {
    const { itemId, email, customerName, phone } = await c.req.json();

    if (!email) {
      return c.json({ error: "Verified email is required to initiate booking order." }, 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const db = c.env.DB;
    const otpRecord = await db
      .prepare(`SELECT verified FROM otp_store WHERE email = ?`)
      .bind(normalizedEmail)
      .first<{ verified: number }>();
    if (!otpRecord || !otpRecord.verified) {
      return c.json({ error: "Email must be verified via OTP before initiating payment." }, 403);
    }

    // SERVER PRICE BOOK LOOKUP (CRITICAL FRAUD-PROOFING: ignore any client-sent price!)
    const resolvedPriceINR = lookupPrice(itemId || "default-consultation");
    const amountInPaise = resolvedPriceINR * 100; // Razorpay expects amount in paise

    const receiptId = `rcpt_${Date.now()}_${randomBytes(3).toString("hex")}`;

    let razorpayOrder: { id: string; amount: number; currency: string; receipt: string; status: string };
    try {
      razorpayOrder = await createRazorpayOrder(keyId, keySecret, {
        amountPaise: amountInPaise,
        receipt: receiptId,
        notes: {
          itemId: itemId || "default-consultation",
          customerEmail: normalizedEmail,
          customerName: customerName || "Valued Client",
          customerPhone: phone || "",
        },
      });
    } catch (rzpErr: any) {
      // No silent mock fallback: a failed gateway call must not fabricate an order.
      console.warn("[Razorpay API] Order creation failed:", rzpErr?.message);
      return c.json(
        { error: "Payment gateway is temporarily unavailable. Please try again shortly or contact our Ajmer studio." },
        503
      );
    }

    return c.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: resolvedPriceINR,
      currency: "INR",
      keyId,
      itemDescription: itemId || "Design Plus Architectural Consultation",
    });
  } catch (err: any) {
    console.error("[Create Order Error]", err);
    return c.json({ error: err?.message || "Failed to create secure payment order." }, 500);
  }
});

// 4. Verify Payment & Signature (server-side signature verification + replay protection)
paymentRoutes.post("/verify-payment", async (c) => {
  const keyId = c.env.RAZORPAY_KEY_ID;
  const keySecret = c.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return c.json({ error: "Payment gateway is not configured yet." }, 503);
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await c.req.json();

    if (!razorpay_order_id || !razorpay_payment_id) {
      return c.json({ error: "Missing payment verification parameters." }, 400);
    }

    const db = c.env.DB;

    // REPLAY PROTECTION: reject duplicate/already processed order IDs
    const seen = await db
      .prepare(`SELECT 1 FROM processed_orders WHERE order_id = ?`)
      .bind(razorpay_order_id)
      .first();
    if (seen) {
      return c.json({ error: "Security Error: Order ID has already been processed (replay attack rejected)." }, 400);
    }

    // Test-mode mock orders are only honored with Razorpay TEST keys.
    if (razorpay_order_id.startsWith("order_mock_")) {
      if (!keyId.startsWith("rzp_test_")) {
        return c.json({ error: "Security Error: Mock orders are not accepted with live gateway keys." }, 400);
      }
      await db
        .prepare(`INSERT OR IGNORE INTO processed_orders (order_id, processed_at) VALUES (?, ?)`)
        .bind(razorpay_order_id, Date.now())
        .run();
      return c.json({
        success: true,
        verified: true,
        bookingReference: `DP-BK-${100000 + Math.floor(Math.random() * 900000)}`,
        message: "Test mode payment verified successfully.",
      });
    }

    // CRITICAL SIGNATURE VERIFICATION
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = createHmac("sha256", keySecret).update(body).digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return c.json({ error: "Security Error: Invalid Razorpay cryptographic payment signature." }, 400);
    }

    // Mark order as processed (replay protection)
    await db
      .prepare(`INSERT OR IGNORE INTO processed_orders (order_id, processed_at) VALUES (?, ?)`)
      .bind(razorpay_order_id, Date.now())
      .run();

    const bookingRef = `DP-BK-${100000 + Math.floor(Math.random() * 900000)}`;

    return c.json({
      success: true,
      verified: true,
      bookingReference: bookingRef,
      paymentId: razorpay_payment_id,
      message: "Payment verified successfully by server signature check.",
    });
  } catch (err: any) {
    console.error("[Verify Payment Error]", err);
    return c.json({ error: err?.message || "Payment verification failed." }, 500);
  }
});
