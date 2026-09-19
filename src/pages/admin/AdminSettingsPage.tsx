import React, { useState, useEffect } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  Settings, 
  ShieldCheck, 
  Lock, 
  Key, 
  Save, 
  Check, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Globe 
} from "lucide-react";

export const AdminSettingsPage: React.FC = () => {
  const { adminUser, updatePasswordAdmin, adminToken } = useAdminAuth();

  // Settings State
  const [studioSettings, setStudioSettings] = useState<any>({
    primaryPhone: "+91 94140 03404",
    secondaryPhone: "+91 98290 03404",
    email: "designplusajmer@gmail.com",
    address: "Opposite Patel Stadium, Civil Lines / Panchsheel Nagar, Ajmer, Rajasthan - 305001",
    workingHours: "Monday to Saturday: 10:00 AM - 7:30 PM",
    metaTitleSuffix: " | Design Plus Architecture Ajmer",
    robotsDirective: "index, follow"
  });

  const [allowlist, setAllowlist] = useState<string[]>([
    "igrybuilds@gmail.com",
    "designplusajmer@gmail.com"
  ]);

  // Password Change Form State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Settings Save State
  const [settingsSuccess, setSettingsSuccess] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/admin/settings", {
          headers: adminToken ? { Authorization: `Bearer ${adminToken}` } : {}
        });
        if (res.ok) {
          const data = await res.json();
          if (data.settings) setStudioSettings((prev: any) => ({ ...prev, ...data.settings }));
          if (data.allowlist) setAllowlist(data.allowlist);
        }
      } catch (err) {
        console.warn("Settings loading notice:", err);
      }
    }
    loadSettings();
  }, [adminToken]);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSuccess(null);
    setPasswordError(null);

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters long.");
      return;
    }

    setIsUpdatingPassword(true);
    const res = await updatePasswordAdmin(currentPassword, newPassword);

    if (res.success) {
      setPasswordSuccess("Administrator password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setPasswordError(res.error || "Failed to update password.");
    }
    setIsUpdatingPassword(false);
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify(studioSettings)
      });
      if (res.ok) {
        setSettingsSuccess(true);
        setTimeout(() => setSettingsSuccess(false), 3000);
      }
    } catch (err) {
      console.warn("Failed to save settings:", err);
    } finally {
      setIsSavingSettings(false);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Studio Configuration &amp; Security Settings
        </h1>
        <p className="text-xs text-stone-400 font-mono mt-1">
          Master practice contact details, SEO default directives, and two-administrator access controls
        </p>
      </div>

      {/* 1. Strict Two-Admin Allowlist Card */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2.5 pb-4 border-b border-stone-800">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <div>
            <h2 className="font-serif text-base font-bold text-stone-100">
              Administrator Allowlist &amp; Security Architecture
            </h2>
            <p className="text-[11px] font-mono text-stone-400">
              Strict allowlist policy enforced on backend server and Firestore Security Rules
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="text-xs text-stone-300 leading-relaxed">
            As instructed, access to the private management panel is restricted exclusively to the following two verified administrator identities:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {allowlist.map((email, idx) => {
              const isCurrent = adminUser?.email?.toLowerCase() === email.toLowerCase();
              return (
                <div
                  key={email}
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    isCurrent 
                      ? "bg-amber-500/10 border-amber-500/40 text-amber-200" 
                      : "bg-stone-950/60 border-stone-800 text-stone-300"
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono font-bold">
                      Admin #{idx + 1}: {email}
                    </div>
                    <div className="text-[10px] font-mono text-stone-400 mt-0.5">
                      Role: admin • Custom Claim Enabled
                    </div>
                  </div>

                  {isCurrent && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 font-bold">
                      Active Session
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-[11px] font-mono text-stone-400">
            • Public registration is permanently disabled.
            • Self-service signup is blocked.
            • Unauthenticated access is rejected by Firestore security rules.
          </div>
        </div>
      </div>

      {/* 2. Change Admin Password Form */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2.5 pb-4 border-b border-stone-800">
          <Key className="w-5 h-5 text-amber-400" />
          <div>
            <h2 className="font-serif text-base font-bold text-stone-100">
              Update Administrator Password
            </h2>
            <p className="text-[11px] font-mono text-stone-400">
              Change the password for active administrator session ({adminUser?.email})
            </p>
          </div>
        </div>

        {passwordSuccess && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{passwordSuccess}</span>
          </div>
        )}

        {passwordError && (
          <div className="mt-4 p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span>{passwordError}</span>
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <label className="block text-stone-300 mb-1">Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-stone-300 mb-1">New Password (6+ chars)</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-stone-300 mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="sm:col-span-3 flex justify-end pt-2">
            <button
              type="submit"
              disabled={isUpdatingPassword}
              className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs tracking-wider uppercase transition-colors disabled:opacity-50"
            >
              {isUpdatingPassword ? "Updating Password..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>

      {/* 3. Practice Studio Contact & SEO Defaults */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2.5 pb-4 border-b border-stone-800">
          <Settings className="w-5 h-5 text-amber-400" />
          <div>
            <h2 className="font-serif text-base font-bold text-stone-100">
              Studio Details &amp; Meta Directives
            </h2>
            <p className="text-[11px] font-mono text-stone-400">
              Global contact lines, studio address, and crawl directives
            </p>
          </div>
        </div>

        {settingsSuccess && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Studio parameters successfully updated!</span>
          </div>
        )}

        <form onSubmit={handleSettingsSubmit} className="mt-4 space-y-4 text-xs font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-300 mb-1">Primary Studio Phone</label>
              <input
                type="text"
                value={studioSettings.primaryPhone || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, primaryPhone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1">Secondary Consultation Phone</label>
              <input
                type="text"
                value={studioSettings.secondaryPhone || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, secondaryPhone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1">Practice Email Address</label>
              <input
                type="email"
                value={studioSettings.email || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1">Working Hours</label>
              <input
                type="text"
                value={studioSettings.workingHours || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, workingHours: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-stone-300 mb-1">Studio Address</label>
              <input
                type="text"
                value={studioSettings.address || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, address: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1">Global Meta Title Suffix</label>
              <input
                type="text"
                value={studioSettings.metaTitleSuffix || ""}
                onChange={(e) => setStudioSettings({ ...studioSettings, metaTitleSuffix: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1">Default Search Robots Directive</label>
              <select
                value={studioSettings.robotsDirective || "index, follow"}
                onChange={(e) => setStudioSettings({ ...studioSettings, robotsDirective: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="index, follow">index, follow (Active Indexing)</option>
                <option value="noindex, follow">noindex, follow (Staging / Audit Mode)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              disabled={isSavingSettings}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10"
            >
              {isSavingSettings ? "Saving Settings..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
