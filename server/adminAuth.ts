import crypto from "crypto";

export interface AdminUser {
  email: string;
  role: "admin";
  displayName: string;
  active: boolean;
  createdAt: string;
  lastLoginAt: string;
}

export interface AuditLogEntry {
  id: string;
  adminEmail: string;
  action: string;
  contentType: string;
  contentId: string;
  summary: string;
  timestamp: string;
  ip?: string;
}

// Strictly TWO allowlisted administrator email identities
export const ADMIN_ALLOWLIST: string[] = [
  (process.env.ADMIN_EMAIL_1 || "igrybuilds@gmail.com").toLowerCase().trim(),
  (process.env.ADMIN_EMAIL_2 || "designplusajmer@gmail.com").toLowerCase().trim()
];

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "designplus-super-secret-admin-session-hmac-key-2026";
let CURRENT_PASSWORD_HASH: string | null = null;
let CURRENT_PASSWORD_SALT: string | null = null;

// Initialize password hash with the bootstrap password
function getInitialPasswordHash(): { salt: string; hash: string } {
  const bootstrapPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD || "design";
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(bootstrapPassword, salt, 10000, 64, "sha512").toString("hex");
  return { salt, hash };
}

// In-memory rate limiting map: ip -> { attempts: number, lockUntil: number, lastAttempt: number }
interface RateLimitRecord {
  attempts: number;
  lockUntil: number;
  lastAttempt: number;
}
const rateLimits = new Map<string, RateLimitRecord>();

// In-memory Audit Log Store
const auditLogsStore: AuditLogEntry[] = [
  {
    id: "log-init-1",
    adminEmail: ADMIN_ALLOWLIST[0],
    action: "SYSTEM_BOOTSTRAP",
    contentType: "system",
    contentId: "core",
    summary: "Design Plus Private CMS & Admin console initialized with two-admin allowlist.",
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: "log-init-2",
    adminEmail: ADMIN_ALLOWLIST[1],
    action: "SECURITY_AUDIT",
    contentType: "security",
    contentId: "rules",
    summary: "Hardened Firestore Security Rules deployed with allowlist and role gates.",
    timestamp: new Date(Date.now() - 1800000).toISOString()
  }
];

// Helper: Verify password using PBKDF2
function verifyPassword(password: string): boolean {
  if (!CURRENT_PASSWORD_HASH || !CURRENT_PASSWORD_SALT) {
    const initial = getInitialPasswordHash();
    CURRENT_PASSWORD_SALT = initial.salt;
    CURRENT_PASSWORD_HASH = initial.hash;
  }

  const hashToCheck = crypto.pbkdf2Sync(password, CURRENT_PASSWORD_SALT, 10000, 64, "sha512").toString("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(CURRENT_PASSWORD_HASH, "hex"), Buffer.from(hashToCheck, "hex"));
  } catch {
    return false;
  }
}

// Check and record rate limiting
export function checkRateLimit(ip: string): { allowed: boolean; remainingAttempts: number; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimits.get(ip) || { attempts: 0, lockUntil: 0, lastAttempt: now };

  if (record.lockUntil > now) {
    const retryAfter = Math.ceil((record.lockUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSeconds: retryAfter };
  }

  // Reset if last attempt was more than 10 minutes ago
  if (now - record.lastAttempt > 10 * 60 * 1000) {
    record.attempts = 0;
    record.lockUntil = 0;
  }

  return { allowed: true, remainingAttempts: Math.max(0, 5 - record.attempts), retryAfterSeconds: 0 };
}

export function recordFailedAttempt(ip: string): { locked: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimits.get(ip) || { attempts: 0, lockUntil: 0, lastAttempt: now };
  record.attempts += 1;
  record.lastAttempt = now;

  if (record.attempts >= 5) {
    record.lockUntil = now + 15 * 60 * 1000; // 15-minute lockout
    rateLimits.set(ip, record);
    console.warn(`[SECURITY ALERT] IP ${ip} temporarily locked out after 5 failed admin authentication attempts.`);
    return { locked: true, retryAfterSeconds: 15 * 60 };
  }

  rateLimits.set(ip, record);
  return { locked: false, retryAfterSeconds: 0 };
}

export function resetRateLimit(ip: string) {
  rateLimits.delete(ip);
}

// Sign custom admin session token
export function generateAdminToken(email: string): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    email,
    role: "admin",
    admin: true,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  })).toString("base64url");

  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest("base64url");

  return `${header}.${payload}.${signature}`;
}

// Verify custom admin session token
export function verifyAdminToken(token: string): { valid: boolean; payload?: any; error?: string } {
  if (!token || typeof token !== "string") {
    return { valid: false, error: "Missing token" };
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return { valid: false, error: "Malformed token format" };
  }

  const [header, payloadB64, signature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${payloadB64}`)
    .digest("base64url");

  try {
    const isSigValid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    if (!isSigValid) {
      return { valid: false, error: "Invalid token signature" };
    }

    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return { valid: false, error: "Session expired" };
    }

    const normalizedEmail = (payload.email || "").toLowerCase().trim();
    if (!ADMIN_ALLOWLIST.includes(normalizedEmail)) {
      return { valid: false, error: "Email not in authorized two-admin allowlist" };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, error: err.message || "Failed to decode token" };
  }
}

// Admin login function
export function authenticateAdmin(emailRaw: string, passwordRaw: string, clientIp: string): {
  success: boolean;
  status: number;
  message?: string;
  token?: string;
  admin?: AdminUser;
} {
  const rateStatus = checkRateLimit(clientIp);
  if (!rateStatus.allowed) {
    return {
      success: false,
      status: 429,
      message: `Too many authentication attempts. Please retry after ${rateStatus.retryAfterSeconds} seconds.`
    };
  }

  const email = (emailRaw || "").toLowerCase().trim();
  const isAllowlisted = ADMIN_ALLOWLIST.includes(email);

  // Constant-time check: we check password even if email fails to prevent timing attacks
  const isPasswordCorrect = verifyPassword(passwordRaw || "");

  if (!isAllowlisted || !isPasswordCorrect) {
    recordFailedAttempt(clientIp);
    console.warn(`[AUTH NOTICE] Authentication failed for attempt at IP: ${clientIp}`);
    return {
      success: false,
      status: 401,
      message: "Access Denied: Invalid administrator credentials or account not authorized."
    };
  }

  resetRateLimit(clientIp);

  const token = generateAdminToken(email);
  const admin: AdminUser = {
    email,
    role: "admin",
    displayName: email.includes("sudhir") || email.includes("designplus") ? "Er. Sudhir Soni" : "Lead Administrator",
    active: true,
    createdAt: "2026-01-01T00:00:00.000Z",
    lastLoginAt: new Date().toISOString()
  };

  addAuditLog({
    adminEmail: email,
    action: "LOGIN",
    contentType: "auth",
    contentId: email,
    summary: `Administrator ${email} successfully logged into private CMS console.`,
    ip: clientIp
  });

  return { success: true, status: 200, token, admin };
}

// Password update handler
export function updateAdminPassword(emailRaw: string, oldPasswordRaw: string, newPasswordRaw: string, clientIp: string): {
  success: boolean;
  message: string;
} {
  const email = (emailRaw || "").toLowerCase().trim();
  if (!ADMIN_ALLOWLIST.includes(email)) {
    return { success: false, message: "Unauthorized administrator." };
  }

  if (!verifyPassword(oldPasswordRaw)) {
    return { success: false, message: "Current password is incorrect." };
  }

  if (!newPasswordRaw || newPasswordRaw.length < 6) {
    return { success: false, message: "New password must be at least 6 characters long." };
  }

  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(newPasswordRaw, salt, 10000, 64, "sha512").toString("hex");
  CURRENT_PASSWORD_SALT = salt;
  CURRENT_PASSWORD_HASH = hash;

  addAuditLog({
    adminEmail: email,
    action: "PASSWORD_CHANGE",
    contentType: "auth",
    contentId: email,
    summary: `Administrator ${email} updated account password securely.`,
    ip: clientIp
  });

  return { success: true, message: "Administrator password updated successfully." };
}

// Audit log methods
export function addAuditLog(entry: Omit<AuditLogEntry, "id" | "timestamp"> & { timestamp?: string }) {
  const newEntry: AuditLogEntry = {
    id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: entry.timestamp || new Date().toISOString(),
    ...entry
  };
  auditLogsStore.unshift(newEntry);
  if (auditLogsStore.length > 500) {
    auditLogsStore.pop();
  }
}

export function getAuditLogs(limitCount = 50): AuditLogEntry[] {
  return auditLogsStore.slice(0, limitCount);
}
