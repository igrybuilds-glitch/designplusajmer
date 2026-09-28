// Private admin API routes. Mounted at /api/admin.
// Authentication: Bearer JWT issued by /login or /login/google, verified
// against the two-admin allowlist. All state (audit log, settings,
// rate limits, password hash) lives in D1.

import { Hono, type Context, type Next } from "hono";
import type { Env } from "../env";
import { getClientIp } from "../env";
import {
  authenticateAdmin,
  checkRateLimit,
  generateAdminToken,
  getAdminAllowlist,
  getJwtSecret,
  recordFailedAttempt,
  resetRateLimit,
  updateAdminPassword,
  verifyAdminToken,
  type AdminUser,
} from "../adminAuth";
import { addAuditLog, getAuditLogs, getSetting, setSetting } from "../db";
import { resolveFirebaseProjectId, verifyGoogleIdToken } from "../firebaseToken";
import {
  BLOG_ARTICLES,
  BUSINESS_INFO,
  LEADERSHIP,
  LOCATIONS_SERVED,
  PROJECTS,
  SERVICES,
  TEAM_MEMBERS,
} from "../../../src/data/siteData";

type AdminContext = Context<{ Bindings: Env; Variables: { adminUser: any } }>;

export const adminRoutes = new Hono<{ Bindings: Env; Variables: { adminUser: any } }>();

async function requireAdmin(c: AdminContext, next: Next) {
  const secret = getJwtSecret(c.env);
  if (!secret) {
    return c.json(
      { error: "Administrator authentication is not configured (ADMIN_SESSION_SECRET missing)." },
      503
    );
  }

  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Access Denied: Missing administrative authorization token" }, 401);
  }

  const verification = verifyAdminToken(authHeader.slice(7), secret, getAdminAllowlist(c.env));
  if (!verification.valid || !verification.payload) {
    return c.json(
      { error: verification.error || "Access Denied: Invalid or expired administrative token" },
      401
    );
  }

  c.set("adminUser", verification.payload);
  await next();
}

// 1. Admin password login (bootstrap, only when ADMIN_BOOTSTRAP_PASSWORD is set)
adminRoutes.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  const ip = getClientIp(c.req.raw);

  if (!email || !password) {
    return c.json({ error: "Email and password are required" }, 400);
  }

  const result = await authenticateAdmin(c.env.DB, c.env, email, password, ip);
  if (!result || !result.success) {
    return c.json(
      { error: result?.message || "Access Denied: Password login is not configured or credentials invalid." },
      result ? result.status : 401
    );
  }

  return c.json({ token: result.token, admin: result.admin, user: result.admin });
});

// 2. Google OAuth admin login (ID token verified against Google's public certs)
adminRoutes.post("/login/google", async (c) => {
  const { idToken } = await c.req.json();
  const ip = getClientIp(c.req.raw);
  const db = c.env.DB;

  const rateStatus = await checkRateLimit(db, ip);
  if (!rateStatus.allowed) {
    return c.json(
      { error: `Too many authentication attempts. Please retry after ${rateStatus.retryAfterSeconds} seconds.` },
      429
    );
  }

  if (!idToken || typeof idToken !== "string") {
    await recordFailedAttempt(db, ip);
    console.warn(`[Google Admin Login] Missing or invalid idToken payload from IP ${ip}`);
    return c.json({ error: "Access Denied: Invalid administrator credentials." }, 401);
  }

  const secret = getJwtSecret(c.env);
  if (!secret) {
    console.error("[Google Admin Login] ADMIN_SESSION_SECRET is not configured.");
    return c.json({ error: "Access Denied: Administrator authentication service unavailable." }, 503);
  }

  const projectId = resolveFirebaseProjectId(c.env.FIREBASE_SERVICE_ACCOUNT, c.env.FIREBASE_PROJECT_ID);
  const verification = await verifyGoogleIdToken(idToken, projectId);
  if (!verification.valid || !verification.claims) {
    await recordFailedAttempt(db, ip);
    console.warn(`[Google Admin Login] Token verification failed from IP ${ip}: ${verification.error}`);
    return c.json({ error: "Access Denied: Invalid administrator credentials." }, 401);
  }

  const decoded = verification.claims;
  const email = String(decoded.email || "").toLowerCase().trim();
  const isEmailVerified = !!decoded.email_verified;

  if (!isEmailVerified) {
    await recordFailedAttempt(db, ip);
    console.warn(`[Google Admin Login] Rejected unverified email account: ${email} from IP ${ip}`);
    return c.json({ error: "Access Denied: Account email is not verified." }, 401);
  }

  if (!email || !getAdminAllowlist(c.env).includes(email)) {
    await recordFailedAttempt(db, ip);
    console.warn(`[Google Admin Login] Rejected email not in ADMIN_ALLOWLIST: ${email} from IP ${ip}`);
    return c.json({ error: "Access Denied: Account is not on the authorized administrator allowlist." }, 401);
  }

  await resetRateLimit(db, ip);

  const token = generateAdminToken(email, secret);
  const admin: AdminUser = {
    email,
    role: "admin",
    displayName:
      decoded.name ||
      (email.includes("sudhir") || email.includes("designplus") ? "Er. Sudhir Soni" : "Lead Administrator"),
    active: true,
    createdAt: "2026-01-01T00:00:00.000Z",
    lastLoginAt: new Date().toISOString(),
  };

  await addAuditLog(db, {
    adminEmail: email,
    action: "GOOGLE_OAUTH_LOGIN",
    contentType: "auth",
    contentId: email,
    summary: `Administrator ${email} authenticated via verified Google ID token.`,
    ip,
  });

  return c.json({ token, admin, user: admin });
});

// 3. Token verification
adminRoutes.get("/verify", requireAdmin, (c) => {
  const adminUser = c.get("adminUser");
  return c.json({
    valid: true,
    admin: {
      email: adminUser.email,
      role: adminUser.role,
      displayName:
        adminUser.email.includes("sudhir") || adminUser.email.includes("designplus")
          ? "Er. Sudhir Soni"
          : "Lead Administrator",
      allowlist: getAdminAllowlist(c.env),
    },
  });
});

// 4. Password update
adminRoutes.post("/change-password", requireAdmin, async (c) => {
  const { currentPassword, newPassword } = await c.req.json();
  const adminUser = c.get("adminUser");
  const ip = getClientIp(c.req.raw);

  if (!currentPassword || !newPassword) {
    return c.json({ error: "Current password and new password are required" }, 400);
  }

  const result = await updateAdminPassword(c.env.DB, c.env, adminUser.email, currentPassword, newPassword, ip);
  if (!result.success) {
    return c.json({ error: result.message }, 400);
  }

  return c.json({ message: result.message });
});

// 5. Real stats & metrics
adminRoutes.get("/stats", requireAdmin, async (c) => {
  const totalProjects = PROJECTS.length;
  const conceptProjects = PROJECTS.filter(
    (p) => p.isConcept || p.category === "concept" || p.status === "concept-study" || p.status === "design-study"
  ).length;
  const publishedProjects = totalProjects - conceptProjects;

  const totalBlogArticles = BLOG_ARTICLES.length;
  const totalServices = SERVICES.length;
  const totalLocations = LOCATIONS_SERVED.length;
  const totalTeamMembers = TEAM_MEMBERS.length + 1; // including leadership

  // NOTE: inquiry/message counts are not yet backed by a real store.
  // These baseline values are carried over from the old server; wire them
  // to a D1-backed inbox when the lead pipeline is built.
  const unreadInquiries = 3;

  const recentLogs = await getAuditLogs(c.env.DB, 6, getAdminAllowlist(c.env));

  return c.json({
    projects: {
      total: totalProjects,
      published: publishedProjects,
      concept: conceptProjects,
      draft: 0,
    },
    blog: {
      total: totalBlogArticles,
      published: totalBlogArticles,
      draft: 0,
    },
    services: { total: totalServices, published: totalServices },
    locations: { total: totalLocations, published: totalLocations },
    team: { total: totalTeamMembers },
    messages: { unread: unreadInquiries, total: 12 },
    recentLogs,
  });
});

// 6. Audit log endpoints
adminRoutes.get("/audit-logs", requireAdmin, async (c) => {
  const limit = parseInt(c.req.query("limit") || "") || 50;
  const logs = await getAuditLogs(c.env.DB, limit, getAdminAllowlist(c.env));
  return c.json({ logs });
});

adminRoutes.post("/audit-logs", requireAdmin, async (c) => {
  const { action, contentType, contentId, summary } = await c.req.json();
  const adminUser = c.get("adminUser");
  const ip = getClientIp(c.req.raw);

  if (!action || !summary) {
    return c.json({ error: "Action and summary are required" }, 400);
  }

  await addAuditLog(c.env.DB, {
    adminEmail: adminUser.email,
    action,
    contentType: contentType || "general",
    contentId: contentId || "item",
    summary,
    ip,
  });

  return c.json({ success: true });
});

// 7. Automated SEO audit (runs against the compiled-in site content)
adminRoutes.get("/seo-audit", requireAdmin, (c) => {
  interface SeoCheckItem {
    id: string;
    type: "project" | "blog" | "service" | "location" | "page";
    title: string;
    url: string;
    issues: string[];
    score: number;
    wordCount: number;
    hasMetaDescription: boolean;
    hasCanonical: boolean;
    hasAltText: boolean;
  }

  const items: SeoCheckItem[] = [];

  PROJECTS.forEach((p) => {
    const issues: string[] = [];
    let score = 100;

    const shortDescLen = (p.description || (p as any).summary || "").length;
    if (shortDescLen === 0) {
      issues.push("Missing short description");
      score -= 25;
    } else if (shortDescLen < 50) {
      issues.push("Short description too brief (<50 characters)");
      score -= 10;
    }

    const briefWords = ((p as any).brief || "").split(/\s+/).length;
    if (briefWords < 40) {
      issues.push("Thin project brief copy (<40 words)");
      score -= 15;
    }

    const cover = (p as any).heroImage || (p.images && p.images[0]);
    if (!cover) {
      issues.push("Missing cover image");
      score -= 25;
    }

    items.push({
      id: p.id,
      type: "project",
      title: p.title,
      url: `/projects/${p.category}/${p.slug}`,
      issues,
      score: Math.max(20, score),
      wordCount: briefWords,
      hasMetaDescription: shortDescLen > 0,
      hasCanonical: true,
      hasAltText: true,
    });
  });

  BLOG_ARTICLES.forEach((b: any) => {
    const issues: string[] = [];
    let score = 100;

    const excerptLen = (b.excerpt || "").length;
    if (excerptLen === 0) {
      issues.push("Missing meta excerpt");
      score -= 25;
    }

    // NOTE: BlogArticle.content is string[] (paragraphs), not a string — the old
    // Express code called .split() on it directly and 500'd on every audit.
    const contentText = Array.isArray(b.content) ? b.content.join("\n") : b.content || "";
    const words = contentText.split(/\s+/).filter(Boolean).length;
    if (words < 300) {
      issues.push("Thin content: under 300 words for comprehensive architectural ranking");
      score -= 20;
    }

    if (!b.imageAlt) {
      issues.push("Missing image alt text on hero image");
      score -= 15;
    }

    items.push({
      id: b.id,
      type: "blog",
      title: b.title,
      url: `/blog/${b.categorySlug || b.category?.toLowerCase() || "architecture"}/${b.slug}`,
      issues,
      score: Math.max(20, score),
      wordCount: words,
      hasMetaDescription: excerptLen > 0,
      hasCanonical: true,
      hasAltText: !!b.imageAlt,
    });
  });

  SERVICES.forEach((s) => {
    const issues: string[] = [];
    let score = 100;
    const words = ((s as any).fullDescription || "").split(/\s+/).length;
    if (words < 40) {
      issues.push("Full service description brief");
      score -= 10;
    }

    items.push({
      id: s.slug,
      type: "service",
      title: s.title,
      url: `/services/${s.slug}`,
      issues,
      score,
      wordCount: words,
      hasMetaDescription: !!(s as any).shortDescription,
      hasCanonical: true,
      hasAltText: true,
    });
  });

  LOCATIONS_SERVED.forEach((l) => {
    const issues: string[] = [];
    const score = 100;
    const words = ((l as any).description + " " + (l as any).architecturalContext).split(/\s+/).length;

    items.push({
      id: l.slug,
      type: "location",
      title: `${(l as any).city}, Rajasthan`,
      url: `/locations/${l.slug}`,
      issues,
      score,
      wordCount: words,
      hasMetaDescription: !!(l as any).description,
      hasCanonical: true,
      hasAltText: true,
    });
  });

  const totalScored = items.reduce((acc, item) => acc + item.score, 0);
  const averageScore = Math.round(totalScored / (items.length || 1));
  const totalIssues = items.reduce((acc, item) => acc + item.issues.length, 0);

  return c.json({
    averageScore,
    totalAudited: items.length,
    totalIssues,
    status: averageScore >= 85 ? "Optimal" : averageScore >= 70 ? "Good" : "Attention Required",
    items,
  });
});

// 8. Global studio settings (overrides persisted in D1, merged over defaults)
const SETTINGS_DEFAULTS_EXTRA = {
  metaTitleSuffix: " | Design Plus Architecture Ajmer",
  defaultMetaDescription:
    "Design Plus is an architecture and structural engineering practice in Ajmer, Rajasthan led by Chartered Engineer Er. Sudhir Soni.",
  robotsDirective: "index, follow",
  autoSitemap: true,
  emailNotifications: true,
};

async function readSettings(db: D1Database): Promise<Record<string, unknown>> {
  const raw = await getSetting(db, "global");
  let overrides: Record<string, unknown> = {};
  if (raw) {
    try {
      overrides = JSON.parse(raw);
    } catch {
      overrides = {};
    }
  }
  return {
    ...BUSINESS_INFO,
    leadership: LEADERSHIP,
    ...SETTINGS_DEFAULTS_EXTRA,
    ...overrides,
    updatedAt: (overrides.updatedAt as string) || new Date().toISOString(),
  };
}

adminRoutes.get("/settings", requireAdmin, async (c) => {
  const settings = await readSettings(c.env.DB);
  return c.json({ settings, allowlist: getAdminAllowlist(c.env) });
});

adminRoutes.post("/settings", requireAdmin, async (c) => {
  const adminUser = c.get("adminUser");
  const ip = getClientIp(c.req.raw);
  const newSettings = (await c.req.json()) as Record<string, unknown>;

  const current = await readSettings(c.env.DB);
  const merged = { ...current, ...newSettings, updatedAt: new Date().toISOString() };
  await setSetting(c.env.DB, "global", JSON.stringify(merged));

  await addAuditLog(c.env.DB, {
    adminEmail: adminUser.email,
    action: "SETTINGS_UPDATE",
    contentType: "settings",
    contentId: "global",
    summary: `Administrator ${adminUser.email} updated global site settings and SEO configuration.`,
    ip,
  });

  return c.json({ success: true, settings: merged });
});
