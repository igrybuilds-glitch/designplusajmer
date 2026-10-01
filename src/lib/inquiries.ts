/**
 * Inquiry intake client helper (audit fix 2026-09-30).
 *
 * Submits lead/consultation inquiries to the same-origin Worker endpoint
 * POST /api/inquiries (validated + rate-limited + stored in D1).
 *
 * This REPLACES the old client-side Firestore writes: the bundled Firebase
 * web config is a placeholder (`apiKey: "<redacted>"`), so every Firestore
 * write from the browser fails and the contact/consultation forms are broken.
 * No Firebase SDK needed for inquiries anymore.
 */

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  projectType?: string;
  location?: string;
  plotArea?: string;
  source?: string;
}

export async function submitInquiry(payload: InquiryPayload): Promise<{ inquiryId: string }> {
  const res = await fetch("/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.error || "Failed to submit inquiry. Please try again.");
  }
  return { inquiryId: data?.inquiryId || "" };
}
