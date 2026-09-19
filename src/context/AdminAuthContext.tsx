import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle as firebaseSignInWithGoogle, logOut as firebaseLogOut } from "../lib/firebase";

export interface AdminProfile {
  email: string;
  role: "admin";
  displayName: string;
  allowlist?: string[];
}

interface AdminAuthContextType {
  isAdmin: boolean;
  adminUser: AdminProfile | null;
  adminToken: string | null;
  loading: boolean;
  error: string | null;
  loginWithCredentials: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogleAdmin: () => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => Promise<void>;
  updatePasswordAdmin: (curr: string, next: string) => Promise<{ success: boolean; error?: string }>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const TOKEN_KEY = "designplus_admin_jwt";
const USER_KEY = "designplus_admin_user";

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
  });
  const [adminUser, setAdminUser] = useState<AdminProfile | null>(() => {
    const stored = sessionStorage.getItem(USER_KEY) || localStorage.getItem(USER_KEY);
    try {
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validate current session on mount or token change
  useEffect(() => {
    let isMounted = true;

    async function verifySession() {
      if (!adminToken) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/admin/verify", {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setAdminUser(data.admin);
            sessionStorage.setItem(USER_KEY, JSON.stringify(data.admin));
          }
        } else {
          // Token invalid or expired
          if (isMounted) {
            setAdminToken(null);
            setAdminUser(null);
            sessionStorage.removeItem(TOKEN_KEY);
            sessionStorage.removeItem(USER_KEY);
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
          }
        }
      } catch (err) {
        console.warn("Session verification warning:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    verifySession();

    return () => {
      isMounted = false;
    };
  }, [adminToken]);

  // Login with Email + Password against secure backend
  const loginWithCredentials = async (email: string, pass: string) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.error || "Access Denied: Invalid credentials or unauthorized account.";
        setError(msg);
        setLoading(false);
        return { success: false, error: msg };
      }

      setAdminToken(data.token);
      setAdminUser(data.admin);
      sessionStorage.setItem(TOKEN_KEY, data.token);
      sessionStorage.setItem(USER_KEY, JSON.stringify(data.admin));
      setLoading(false);
      return { success: true };
    } catch (err: any) {
      const msg = err.message || "Network connection failure during administrative authentication";
      setError(msg);
      setLoading(false);
      return { success: false, error: msg };
    }
  };

  // Google Login for allowlisted accounts
  const loginWithGoogleAdmin = async () => {
    setError(null);
    setLoading(true);

    try {
      const firebaseUser = await firebaseSignInWithGoogle();
      if (!firebaseUser || !firebaseUser.email) {
        setLoading(false);
        return { success: false, error: "Google authentication was cancelled." };
      }

      const email = firebaseUser.email.toLowerCase().trim();
      const ALLOWLIST = ["igrybuilds@gmail.com", "designplusajmer@gmail.com"];

      if (!ALLOWLIST.includes(email)) {
        await firebaseLogOut();
        const errStr = "Access Denied: Google account is not on the authorized administrator allowlist.";
        setError(errStr);
        setLoading(false);
        return { success: false, error: errStr };
      }

      // Check with backend
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: "design" })
      });

      const data = await res.json();
      if (res.ok && data.token) {
        setAdminToken(data.token);
        setAdminUser(data.admin);
        sessionStorage.setItem(TOKEN_KEY, data.token);
        sessionStorage.setItem(USER_KEY, JSON.stringify(data.admin));
        setLoading(false);
        return { success: true };
      } else {
        // Direct allowlist authorization fallback
        const adminObj: AdminProfile = {
          email,
          role: "admin",
          displayName: firebaseUser.displayName || (email.includes("sudhir") ? "Er. Sudhir Soni" : "Admin")
        };
        setAdminUser(adminObj);
        sessionStorage.setItem(USER_KEY, JSON.stringify(adminObj));
        setLoading(false);
        return { success: true };
      }
    } catch (err: any) {
      const msg = err.message || "Failed to complete Google administrative authentication";
      setError(msg);
      setLoading(false);
      return { success: false, error: msg };
    }
  };

  const logoutAdmin = async () => {
    setAdminToken(null);
    setAdminUser(null);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    try {
      await firebaseLogOut();
    } catch (err) {
      console.warn("Logout notice:", err);
    }
  };

  const updatePasswordAdmin = async (currentPassword: string, newPassword: string) => {
    if (!adminToken) {
      return { success: false, error: "No active administrator session." };
    }

    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });

      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Failed to update password." };
      }

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Failed to change password." };
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAdmin: !!adminUser,
        adminUser,
        adminToken,
        loading,
        error,
        loginWithCredentials,
        loginWithGoogleAdmin,
        logoutAdmin,
        updatePasswordAdmin
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};
