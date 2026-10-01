// Secure payment & booking routes. Mounted at /api/payment.
//
// Email OTP was REMOVED entirely (client feedback: nobody wants the
// verification-code headache). Booking + payment work with just name +
// a valid 10-digit Indian mobile number — verified client-side, never OTP.
//
// Behavior notes:
// - RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are REQUIRED. When absent the
//   order endpoint returns 503 (we never fall back to mock keys/orders,
//   which would fabricate payments — never do that here).
// - Test-mode mock order verification ("order_mock_*") is only honored when
//   the configured key is a Razorpay TEST key (rzp_test_*).
// - TEST keys only. Live keys + KYC are the studio owner's job.

import { Hono } from "hono";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import type { Env } from "../env";
import { createRazorpayOrder } from "../razorpay";
import { lookupPrice } from "../../../src/config/pricing";

export const paymentRoutes = new Hono<{ Bindings: Env }>();

// 1. Create Razorpay Order (fraud-proof server price book lookup)
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
    const { itemId, customerName, phone } = await c.req.json();

    if (!customerName || typeof customerName !== "string" || !customerName.trim()) {
      return c.json({ error: "Customer name is required to initiate booking order." }, 400);
    }
    const digits = String(phone || "").replace(/\D/g, "");
    const normalized = digits.length === 12 && digits.startsWith("91")
      ? digits.slice(2)
      : digits.length === 11 && digits.startsWith("0")
        ? digits.slice(1)
        : digits;
    if (!/^[6-9]\d{9}$/.test(normalized)) {
      return c.json({ error: "A valid 10-digit Indian mobile number is required." }, 400);
    }

    // SERVER PRICE BOOK LOOKUP (CRITICAL FRAUD-PROOFING: ignore any client-sent price!)
    const resolvedPriceINR = lookupPrice(itemId || "default-consultation");
    if (!resolvedPriceINR || resolvedPriceINR <= 0) {
      return c.json({ error: "This service cannot be paid online yet. Please contact the studio directly." }, 400);
    }
    const amountInPaise = resolvedPriceINR * 100; // Razorpay expects amount in paise

    const receiptId = `rcpt_${Date.now()}_${randomBytes(3).toString("hex")}`;

    let razorpayOrder: { id: string; amount: number; currency: string; receipt: string; status: string };
    try {
      razorpayOrder = await createRazorpayOrder(keyId, keySecret, {
        amountPaise: amountInPaise,
        receipt: receiptId,
        notes: {
          itemId: itemId || "default-consultation",
          customerName: customerName.trim(),
          customerPhone: normalized,
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
      testMode: keyId.startsWith("rzp_test_"),
      itemDescription: itemId || "Design Plus Architectural Consultation",
    });
  } catch (err: any) {
    console.error("[Create Order Error]", err);
    return c.json({ error: err?.message || "Failed to create secure payment order." }, 500);
  }
});

// 2. Verify Payment & Signature (server-side signature verification + replay protection)
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
