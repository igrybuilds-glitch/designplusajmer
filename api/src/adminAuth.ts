// Admin authentication: custom HS256 JWT sessions, PBKDF2 password login,
// brute-force rate limiting, and audit logging — all persisted in D1 so they
// survive Worker isolate restarts. Logic mirrors server/adminAuth.ts.

import { createHmac, pbkdf2Sync, randomBytes, timingSafeEqual } from "node:crypto";
import type { Env } from "./env";
import {
  addAuditLog,
  getAdminCredential,
  setAdminCredential,
  type AuditLogEntry,
} from "./db";

export interface AdminUser {
  email: string;
  role: "admin";
  displayName: string;
  active: boolean;
  createdAt: string;
  lastLoginAt: string;
}

export type { AuditLogEntry };

/** Strictly TWO allowlisted administrator email identities. */
export function getAdminAllowlist(env: Env): string[] {
  return [
    (env.ADMIN_EMAIL_1 || "igrybuilds@gmail.com").toLowerCase().trim(),
    (env.ADMIN_EMAIL_2 || "designplusajmer@gmail.com").toLowerCase().trim(),
  ];
}

/** JWT secret. Null when not configured — callers must fail closed (503). */
export function getJwtSecret(env: Env): string | null {
  return env.ADMIN_SESSION_SECRET || env.ADMIN_JWT_SECRET || null;
}

export function isPasswordLoginConfigured(env: Env): boolean {
  return !!env.ADMIN_BOOTSTRAP_PASSWORD;
}

function hashPassword(password: string, salt: string): string {
  return pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
}

/** Lazily seeds the D1 credential row from ADMIN_BOOTSTRAP_PASSWORD on first use. */
async function ensureCredentialSeed(db: D1Database, env: Env): Promise<{ salt: string; hash: string } | null> {
  const existing = await getAdminCredential(db);
  if (existing) return existing;
  const bootstrap = env.ADMIN_BOOTSTRAP_PASSWORD;
  if (!bootstrap) return null;
  const salt = randomBytes(16).toString("hex");
  const hash = hashPassword(bootstrap, salt);
  await setAdminCredential(db, salt, hash);
  return { salt, hash };
}

async function verifyPassword(db: D1Database, env: Env, password: string): Promise<boolean> {
  if (!password) return false;
  const cred = await ensureCredentialSeed(db, env);
  if (!cred) return false;
  const candidate = hashPassword(password, cred.salt);
  try {
    return timingSafeEqual(Buffer.from(cred.hash, "hex"), Buffer.from(candidate, "hex"));
  } catch {
    return false;
  }
}

interface RateLimitRow {
  attempts: number;
  lock_until: number;
  last_attempt: number;
}

async function readRateRow(db: D1Database, ip: string): Promise<RateLimitRow> {
  const row = await db
    .prepare(`SELECT attempts, lock_until, last_attempt FROM admin_rate_limits WHERE ip = ?`)
    .bind(ip)
    .first<RateLimitRow>();
  return row || { attempts: 0, lock_until: 0, last_attempt: Date.now() };
}

async function writeRateRow(db: D1Database, ip: string, r: RateLimitRow): Promise<void> {
  await db
    .prepare(
      `INSERT INTO admin_rate_limits (ip, attempts, lock_until, last_attempt) VALUES (?, ?, ?, ?)
       ON CONFLICT(ip) DO UPDATE SET attempts = excluded.attempts, lock_until = excluded.lock_until, last_attempt = excluded.last_attempt`
    )
    .bind(ip, r.attempts, r.lock_until, r.last_attempt)
    .run();
}

export async function checkRateLimit(
  db: D1Database,
  ip: string
): Promise<{ allowed: boolean; remainingAttempts: number; retryAfterSeconds: number }> {
  const now = Date.now();
  const record = await readRateRow(db, ip);

  if (record.lock_until > now) {
    return { allowed: false, remainingAttempts: 0, retryAfterSeconds: Math.ceil((record.lock_until - now) / 1000) };
  }

  // Reset if last attempt was more than 10 minutes ago.
  if (now - record.last_attempt > 10 * 60 * 1000) {
    record.attempts = 0;
    record.lock_until = 0;
  }

  return { allowed: true, remainingAttempts: Math.max(0, 5 - record.attempts), retryAfterSeconds: 0 };
}

export async function recordFailedAttempt(
  db: D1Database,
  ip: string
): Promise<{ locked: boolean; retryAfterSeconds: number }> {
  const now = Date.now();
  const record = await readRateRow(db, ip);
  record.attempts += 1;
  record.last_attempt = now;

  if (record.attempts >= 5) {
    record.lock_until = now + 15 * 60 * 1000; // 15-minute lockout
    await writeRateRow(db, ip, record);
    console.warn(`[SECURITY ALERT] IP ${ip} temporarily locked out after 5 failed admin authentication attempts.`);
    return { locked: true, retryAfterSeconds: 15 * 60 };
  }

  await writeRateRow(db, ip, record);
  return { locked: false, retryAfterSeconds: 0 };
}

export async function resetRateLimit(db: D1Database, ip: string): Promise<void> {
  await db.prepare(`DELETE FROM admin_rate_limits WHERE ip = ?`).bind(ip).run();
}

export function generateAdminToken(email: string, secret: string): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      email,
      role: "admin",
      admin: true,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 hours
    })
  ).toString("base64url");

  const signature = createHmac("sha256", secret).update(`${header}.${payload}`).digest("base64url");
  return `${header}.${payload}.${signature}`;
}

export function verifyAdminToken(
  token: string,
  secret: string,
  allowlist: string[]
): { valid: boolean; payload?: any; error?: string } {
  if (!token || typeof token !== "string") {
    return { valid: false, error: "Missing token" };
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return { valid: false, error: "Malformed token format" };
  }

  const [header, payloadB64, signature] = parts;
  const expectedSignature = createHmac("sha256", secret).update(`${header}.${payloadB64}`).digest("base64url");

  try {
    const isSigValid = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    if (!isSigValid) {
      return { valid: false, error: "Invalid token signature" };
    }

    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return { valid: false, error: "Session expired" };
    }

    const normalizedEmail = (payload.email || "").toLowerCase().trim();
    if (!allowlist.includes(normalizedEmail)) {
      return { valid: false, error: "Email not in authorized two-admin allowlist" };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, error: err?.message || "Failed to decode token" };
  }
}

export async function authenticateAdmin(
  db: D1Database,
  env: Env,
  emailRaw: string,
  passwordRaw: string,
  clientIp: string
): Promise<{
  success: boolean;
  status: 200 | 401 | 429 | 503;
  message?: string;
  token?: string;
  admin?: AdminUser;
} | null> {
  if (!isPasswordLoginConfigured(env)) {
    console.warn(`[AUTH NOTICE] Password login attempted from IP ${clientIp}, but ADMIN_BOOTSTRAP_PASSWORD is not configured.`);
    return null;
  }

  const secret = getJwtSecret(env);
  if (!secret) {
    return { success: false, status: 503, message: "Administrator authentication is not configured (ADMIN_SESSION_SECRET missing)." };
  }

  const rateStatus = await checkRateLimit(db, clientIp);
  if (!rateStatus.allowed) {
    return {
      success: false,
      status: 429,
      message: `Too many authentication attempts. Please retry after ${rateStatus.retryAfterSeconds} seconds.`,
    };
  }

  const allowlist = getAdminAllowlist(env);
  const email = (emailRaw || "").toLowerCase().trim();
  const isAllowlisted = allowlist.includes(email);

  // Constant-time check: verify password even if email fails to prevent timing attacks.
  const isPasswordCorrect = await verifyPassword(db, env, passwordRaw || "");

  if (!isAllowlisted || !isPasswordCorrect) {
    await recordFailedAttempt(db, clientIp);
    console.warn(`[AUTH NOTICE] Authentication failed for attempt at IP: ${clientIp}`);
    return {
      success: false,
      status: 401,
      message: "Access Denied: Invalid administrator credentials or account not authorized.",
    };
  }

  await resetRateLimit(db, clientIp);

  const token = generateAdminToken(email, secret);
  const admin: AdminUser = {
    email,
    role: "admin",
    displayName: email.includes("sudhir") || email.includes("designplus") ? "Er. Sudhir Soni" : "Lead Administrator",
    active: true,
    createdAt: "2026-01-01T00:00:00.000Z",
    lastLoginAt: new Date().toISOString(),
  };

  await addAuditLog(db, {
    adminEmail: email,
    action: "LOGIN",
    contentType: "auth",
    contentId: email,
    summary: `Administrator ${email} successfully logged into private CMS console.`,
    ip: clientIp,
  });

  return { success: true, status: 200, token, admin };
}

export async function updateAdminPassword(
  db: D1Database,
  env: Env,
  emailRaw: string,
  oldPasswordRaw: string,
  newPasswordRaw: string,
  clientIp: string
): Promise<{ success: boolean; message: string }> {
  const email = (emailRaw || "").toLowerCase().trim();
  if (!getAdminAllowlist(env).includes(email)) {
    return { success: false, message: "Unauthorized administrator." };
  }

  if (!(await verifyPassword(db, env, oldPasswordRaw))) {
    return { success: false, message: "Current password is incorrect." };
  }

  if (!newPasswordRaw || newPasswordRaw.length < 6) {
    return { success: false, message: "New password must be at least 6 characters long." };
  }

  const salt = randomBytes(16).toString("hex");
  const hash = hashPassword(newPasswordRaw, salt);
  await setAdminCredential(db, salt, hash);

  await addAuditLog(db, {
    adminEmail: email,
    action: "PASSWORD_CHANGE",
    contentType: "auth",
    contentId: email,
    summary: `Administrator ${email} updated account password securely.`,
    ip: clientIp,
  });

  return { success: true, message: "Administrator password updated successfully." };
}
