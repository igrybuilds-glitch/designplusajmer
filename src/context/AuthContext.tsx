import React, { createContext, useContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { auth, db, signInWithGoogle, loginAsGuest, logOut, toggleSaveProject } from "../lib/firebase";

export interface SavedProjectItem {
  id: string;
  projectId: string;
  title: string;
  category: string;
  imageUrl?: string;
  savedAt: string;
}

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  plotArea?: string;
  projectType: string;
  location?: string;
  message: string;
  status: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  savedProjects: SavedProjectItem[];
  userInquiries: InquiryItem[];
  signInGoogle: () => Promise<User | null>;
  signInGuest: () => Promise<User | null>;
  signOutUser: () => Promise<void>;
  toggleBookmark: (project: { id: string; title: string; category: string; imageUrl?: string }) => Promise<boolean>;
  isBookmarked: (projectId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedProjects, setSavedProjects] = useState<SavedProjectItem[]>([]);
  const [userInquiries, setUserInquiries] = useState<InquiryItem[]>([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribeAuth();
  }, []);

  // Listen to user's saved projects
  useEffect(() => {
    if (!user) {
      setSavedProjects([]);
      return;
    }

    const q = query(
      collection(db, "saved_projects"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: SavedProjectItem[] = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as SavedProjectItem);
      });
      setSavedProjects(items);
    }, (error) => {
      console.warn("Saved projects snapshot notice:", error);
    });

    return () => unsubscribe();
  }, [user]);

  // Listen to user's inquiries
  useEffect(() => {
    if (!user) {
      setUserInquiries([]);
      return;
    }

    const q = query(
      collection(db, "inquiries"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: InquiryItem[] = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as InquiryItem);
      });
      // Sort newest first
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setUserInquiries(items);
    }, (error) => {
      console.warn("Inquiries snapshot notice:", error);
    });

    return () => unsubscribe();
  }, [user]);

  const signInGoogle = async () => {
    return await signInWithGoogle();
  };

  const signInGuest = async () => {
    return await loginAsGuest();
  };

  const signOutUser = async () => {
    await logOut();
  };

  const toggleBookmark = async (project: { id: string; title: string; category: string; imageUrl?: string }) => {
    if (!user) {
      // Prompt sign in
      const loggedUser = await signInGoogle();
      if (!loggedUser) return false;
      return await toggleSaveProject(loggedUser.uid, project);
    }
    return await toggleSaveProject(user.uid, project);
  };

  const isBookmarked = (projectId: string) => {
    return savedProjects.some((p) => p.projectId === projectId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        savedProjects,
        userInquiries,
        signInGoogle,
        signInGuest,
        signOutUser,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
