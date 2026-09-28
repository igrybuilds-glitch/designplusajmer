// Minimal Razorpay REST client (fetch-based, Worker-safe).
// Replaces the razorpay Node SDK's orders.create() — the only SDK call the
// old server made — with the equivalent direct HTTPS call.

export interface RazorpayOrderArgs {
  amountPaise: number;
  receipt: string;
  notes: Record<string, string>;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export async function createRazorpayOrder(
  keyId: string,
  keySecret: string,
  args: RazorpayOrderArgs
): Promise<RazorpayOrder> {
  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Basic auth with key_id as username and key_secret as password.
      Authorization: "Basic " + btoa(`${keyId}:${keySecret}`),
    },
    body: JSON.stringify({
      amount: Math.round(args.amountPaise),
      currency: "INR",
      receipt: args.receipt,
      notes: args.notes,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Razorpay API error ${res.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await res.json()) as any;
  return {
    id: String(data.id),
    amount: Number(data.amount),
    currency: String(data.currency || "INR"),
    receipt: String(data.receipt || ""),
    status: String(data.status || ""),
  };
}
