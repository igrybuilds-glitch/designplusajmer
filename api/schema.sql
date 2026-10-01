-- Design Plus API — D1 (SQLite) schema
-- Apply once after creating the "designplus-db" database in the Cloudflare dashboard:
--   wrangler d1 execute designplus-db --file=api/schema.sql
-- (or paste into the dashboard's D1 SQL editor)

-- NOTE: the old email-OTP tables (otp_store, otp_rate_limits) were REMOVED
-- 2026-10-01 — the client ordered the whole OTP system deleted (no
-- verification-code friction). If those tables still exist in a live DB,
-- they can be dropped: DROP TABLE IF EXISTS otp_store; DROP TABLE IF EXISTS otp_rate_limits;

-- Admin audit trail (replaces the old in-memory auditLogsStore array).
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id          TEXT PRIMARY KEY,
  admin_email TEXT NOT NULL,
  action      TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT '',
  content_id  TEXT NOT NULL DEFAULT '',
  summary     TEXT NOT NULL DEFAULT '',
  ip          TEXT,
  created_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_audit_created ON admin_audit_log (created_at DESC);

-- Gemini AI free-tier guard: 5 req/min + 25 req/day per client IP
-- (replaces the old in-memory aiRateLimits Map).
CREATE TABLE IF NOT EXISTS ai_rate_limits (
  key          TEXT PRIMARY KEY,
  day          TEXT NOT NULL,
  day_count    INTEGER NOT NULL DEFAULT 0,
  minute_start INTEGER NOT NULL DEFAULT 0,
  minute_count INTEGER NOT NULL DEFAULT 0
);

-- Admin login brute-force protection: 5 failed attempts -> 15-minute IP lockout
-- (replaces the old in-memory rateLimits Map).
CREATE TABLE IF NOT EXISTS admin_rate_limits (
  ip           TEXT PRIMARY KEY,
  attempts     INTEGER NOT NULL DEFAULT 0,
  lock_until   INTEGER NOT NULL DEFAULT 0,
  last_attempt INTEGER NOT NULL DEFAULT 0
);

-- Admin password hash (PBKDF2). Seeded lazily from ADMIN_BOOTSTRAP_PASSWORD
-- on first password login; updated by /api/admin/change-password.
-- Survives Worker isolate restarts, unlike the old in-memory hash.
CREATE TABLE IF NOT EXISTS admin_credentials (
  id         INTEGER PRIMARY KEY CHECK (id = 1),
  salt       TEXT NOT NULL,
  hash       TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Global studio settings overrides (JSON). Merged over compiled-in defaults.
-- (replaces the old in-memory currentSettings object).
CREATE TABLE IF NOT EXISTS admin_settings (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Razorpay replay protection: order IDs already verified (replaces the old
-- in-memory processedOrders Set).
CREATE TABLE IF NOT EXISTS processed_orders (
  order_id     TEXT PRIMARY KEY,
  processed_at INTEGER NOT NULL
);
