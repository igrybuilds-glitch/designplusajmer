// D1-backed persistence helpers. Replaces every in-memory Map/Set/array the
// Express server kept in module scope (OTP store, rate limits, audit log,
// settings, credentials, processed orders) so state survives Worker isolates.

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

interface AuditRow {
  id: string;
  admin_email: string;
  action: string;
  content_type: string;
  content_id: string;
  summary: string;
  ip: string | null;
  created_at: number;
}

function toEntry(r: AuditRow): AuditLogEntry {
  return {
    id: r.id,
    adminEmail: r.admin_email,
    action: r.action,
    contentType: r.content_type,
    contentId: r.content_id,
    summary: r.summary,
    timestamp: new Date(r.created_at).toISOString(),
    ip: r.ip || undefined,
  };
}

export function newAuditId(): string {
  return `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
}

export async function addAuditLog(
  db: D1Database,
  entry: Omit<AuditLogEntry, "id" | "timestamp"> & { timestamp?: string }
): Promise<void> {
  const createdAt = entry.timestamp ? Date.parse(entry.timestamp) : Date.now();
  await db
    .prepare(
      `INSERT INTO admin_audit_log (id, admin_email, action, content_type, content_id, summary, ip, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      newAuditId(),
      entry.adminEmail,
      entry.action,
      entry.contentType || "",
      entry.contentId || "",
      entry.summary || "",
      entry.ip || null,
      Number.isFinite(createdAt) ? createdAt : Date.now()
    )
    .run();
  // Keep the trail capped at 500 entries (same cap as the old in-memory store).
  await db
    .prepare(
      `DELETE FROM admin_audit_log
       WHERE id NOT IN (SELECT id FROM admin_audit_log ORDER BY created_at DESC LIMIT 500)`
    )
    .run();
}

export async function getAuditLogs(
  db: D1Database,
  limitCount: number,
  allowlist: string[]
): Promise<AuditLogEntry[]> {
  const limit = Math.max(1, Math.min(500, Math.floor(limitCount) || 50));
  let res = await db
    .prepare(
      `SELECT id, admin_email, action, content_type, content_id, summary, ip, created_at
       FROM admin_audit_log ORDER BY created_at DESC LIMIT ?`
    )
    .bind(limit)
    .all<AuditRow>();

  // Lazy-seed the two bootstrap entries the old server always started with.
  if (!res.results || res.results.length === 0) {
    const now = Date.now();
    await db.batch([
      db
        .prepare(
          `INSERT OR IGNORE INTO admin_audit_log (id, admin_email, action, content_type, content_id, summary, ip, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        )
        .bind(
          "log-init-1",
          allowlist[0] || "",
          "SYSTEM_BOOTSTRAP",
          "system",
          "core",
          "Design Plus Private CMS & Admin console initialized with two-admin allowlist.",
          null,
          now - 3600000
        ),
      db
        .prepare(
          `INSERT OR IGNORE INTO admin_audit_log (id, admin_email, action, content_type, content_id, summary, ip, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        )
        .bind(
          "log-init-2",
          allowlist[1] || "",
          "SECURITY_AUDIT",
          "security",
          "rules",
          "Hardened Firestore Security Rules deployed with allowlist and role gates.",
          null,
          now - 1800000
        ),
    ]);
    res = await db
      .prepare(
        `SELECT id, admin_email, action, content_type, content_id, summary, ip, created_at
         FROM admin_audit_log ORDER BY created_at DESC LIMIT ?`
      )
      .bind(limit)
      .all<AuditRow>();
  }

  return (res.results || []).map(toEntry);
}

export async function getSetting(db: D1Database, key: string): Promise<string | null> {
  const row = await db
    .prepare(`SELECT value FROM admin_settings WHERE key = ?`)
    .bind(key)
    .first<{ value: string }>();
  return row ? row.value : null;
}

export async function setSetting(db: D1Database, key: string, value: string): Promise<void> {
  await db
    .prepare(
      `INSERT INTO admin_settings (key, value, updated_at) VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
    )
    .bind(key, value, Date.now())
    .run();
}

export interface AdminCredential {
  salt: string;
  hash: string;
}

export async function getAdminCredential(db: D1Database): Promise<AdminCredential | null> {
  const row = await db
    .prepare(`SELECT salt, hash FROM admin_credentials WHERE id = 1`)
    .bind()
    .first<AdminCredential>();
  return row || null;
}

export async function setAdminCredential(db: D1Database, salt: string, hash: string): Promise<void> {
  await db
    .prepare(
      `INSERT INTO admin_credentials (id, salt, hash, updated_at) VALUES (1, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET salt = excluded.salt, hash = excluded.hash, updated_at = excluded.updated_at`
    )
    .bind(salt, hash, Date.now())
    .run();
}
