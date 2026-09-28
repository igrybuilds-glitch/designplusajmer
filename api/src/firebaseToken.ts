// Google ID-token verification for admin Google-OAuth login.
//
// The old server used the firebase-admin SDK's verifyIdToken(), which cannot
// run on Workers. This module performs the same verification directly against
// Google's public signing certificates (https://www.googleapis.com/oauth2/v3/certs)
// using WebCrypto — the same checks firebase-admin applies: RS256 signature,
// expiry, audience == Firebase projectId, and a trusted issuer.
//
// No service account is required for this. FIREBASE_SERVICE_ACCOUNT is still
// accepted as an env var (its project_id is used as an audience fallback), but
// the route degrades gracefully and keeps working without it.

// Public, non-secret Firebase project id baked from firebase-applet-config.json
// (the same value the old server read from disk at startup).
const DEFAULT_FIREBASE_PROJECT_ID = "gen-lang-client-0970693213";

export function resolveFirebaseProjectId(serviceAccountJson?: string, override?: string): string {
  if (override && override.trim()) return override.trim();
  if (serviceAccountJson) {
    try {
      const parsed = JSON.parse(serviceAccountJson);
      if (parsed.project_id) return String(parsed.project_id);
    } catch {
      // fall through to default
    }
  }
  return DEFAULT_FIREBASE_PROJECT_ID;
}

export interface GoogleIdTokenClaims {
  email?: string;
  email_verified?: boolean;
  name?: string;
  aud?: string;
  iss?: string;
  exp?: number;
  [k: string]: unknown;
}

interface CertCache {
  keys: Array<{ kid?: string } & Record<string, unknown>>;
  fetchedAt: number;
}

let certCache: CertCache | null = null;

function base64UrlDecode(input: string): Uint8Array<ArrayBuffer> {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(padded.padEnd(padded.length + ((4 - (padded.length % 4)) % 4), "="));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

const textDecoder = new TextDecoder();

async function getGoogleCerts(): Promise<CertCache["keys"]> {
  if (certCache && Date.now() - certCache.fetchedAt < 3600_000) {
    return certCache.keys;
  }
  const res = await fetch("https://www.googleapis.com/oauth2/v3/certs");
  if (!res.ok) {
    throw new Error(`Unable to fetch Google signing certificates (HTTP ${res.status})`);
  }
  const jwks = (await res.json()) as { keys?: CertCache["keys"] };
  const keys = jwks.keys || [];
  certCache = { keys, fetchedAt: Date.now() };
  return keys;
}

export async function verifyGoogleIdToken(
  idToken: string,
  projectId: string
): Promise<{ valid: boolean; claims?: GoogleIdTokenClaims; error?: string }> {
  try {
    const parts = idToken.split(".");
    if (parts.length !== 3) return { valid: false, error: "Malformed token format" };

    const header = JSON.parse(textDecoder.decode(base64UrlDecode(parts[0]))) as { alg?: string; kid?: string };
    if (header.alg !== "RS256" || !header.kid) {
      return { valid: false, error: "Unexpected token signing algorithm" };
    }

    const keys = await getGoogleCerts();
    const jwk = keys.find((k) => k.kid === header.kid);
    if (!jwk) return { valid: false, error: "Unknown token signing key" };

    const key = await crypto.subtle.importKey(
      "jwk",
      jwk as JsonWebKey,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const signed = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
    const signature = base64UrlDecode(parts[2]);
    const sigOk = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, signature, signed);
    if (!sigOk) return { valid: false, error: "Invalid token signature" };

    const claims = JSON.parse(textDecoder.decode(base64UrlDecode(parts[1]))) as GoogleIdTokenClaims;
    const nowSec = Math.floor(Date.now() / 1000);
    if (typeof claims.exp === "number" && claims.exp < nowSec) {
      return { valid: false, error: "Token expired" };
    }
    if (claims.aud !== projectId) {
      return { valid: false, error: "Token audience mismatch" };
    }
    const iss = String(claims.iss || "");
    if (iss !== `https://securetoken.google.com/${projectId}` && iss !== "https://accounts.google.com") {
      return { valid: false, error: "Token issuer mismatch" };
    }

    return { valid: true, claims };
  } catch (err: any) {
    return { valid: false, error: err?.message || "Token verification failed" };
  }
}
