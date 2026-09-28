import { initializeApp, getApps, getApp, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import fs from "fs";
import path from "path";

let adminApp: App | null = null;
let adminAuth: Auth | null = null;
let initAttempted = false;

function initFirebaseAdmin(): void {
  if (initAttempted) return;
  initAttempted = true;

  try {
    let projectId: string | undefined = process.env.FIREBASE_PROJECT_ID;

    // Read projectId server-side from firebase-applet-config.json via fs + JSON.parse
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (fs.existsSync(configPath)) {
      try {
        const raw = fs.readFileSync(configPath, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed.projectId) {
          projectId = parsed.projectId;
        }
      } catch (readErr) {
        console.warn("[Firebase Admin] Warning reading firebase-applet-config.json:", readErr);
      }
    }

    const existingApps = getApps();
    if (existingApps.length > 0 && existingApps[0]) {
      adminApp = existingApps[0];
    } else {
      adminApp = initializeApp({
        projectId
      });
    }

    adminAuth = getAuth(adminApp);
    console.log(`[Firebase Admin] Successfully initialized Firebase Admin SDK (Project: ${projectId || "default"})`);
  } catch (err: any) {
    console.error("[Firebase Admin] Failed to initialize Firebase Admin SDK:", err?.message || err);
    adminApp = null;
    adminAuth = null;
  }
}

export function getAdminAuth(): Auth | null {
  if (!adminAuth && !initAttempted) {
    initFirebaseAdmin();
  }
  return adminAuth;
}
