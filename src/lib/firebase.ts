import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  signOut, 
  onAuthStateChanged, 
  User,
  signInAnonymously
} from "firebase/auth";
import { 
  initializeFirestore, 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  Firestore
} from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";

// Initialize Firebase App
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Initialize Firestore with specific database ID if configured
export const db: Firestore = firebaseConfig.firestoreDatabaseId
  ? initializeFirestore(app, {}, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Auth helper functions
export async function signInWithGoogle(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      // Sync user profile in Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        userId: result.user.uid,
        email: result.user.email || "",
        displayName: result.user.displayName || "Client",
        photoURL: result.user.photoURL || "",
        lastLoginAt: new Date().toISOString()
      }, { merge: true });
    }
    return result.user;
  } catch (err: any) {
    console.warn("Popup sign-in error, trying redirect fallback:", err);
    try {
      await signInWithRedirect(auth, googleProvider);
      return null;
    } catch (redirectErr) {
      console.error("Firebase Sign-in Failed:", redirectErr);
      throw redirectErr;
    }
  }
}

export async function loginAsGuest(): Promise<User | null> {
  try {
    const result = await signInAnonymously(auth);
    if (result.user) {
      await setDoc(doc(db, "users", result.user.uid), {
        userId: result.user.uid,
        email: "guest@designplus.in",
        displayName: "Guest Client",
        photoURL: "",
        lastLoginAt: new Date().toISOString()
      }, { merge: true });
    }
    return result.user;
  } catch (err) {
    console.error("Guest login failed:", err);
    throw err;
  }
}

export async function logOut(): Promise<void> {
  await signOut(auth);
}

// User Bookmarked / Saved Projects Store
export async function toggleSaveProject(userId: string, project: { id: string; title: string; category: string; imageUrl?: string }): Promise<boolean> {
  const docRef = doc(db, "saved_projects", `${userId}_${project.id}`);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    await deleteDoc(docRef);
    return false; // Removed
  } else {
    await setDoc(docRef, {
      userId,
      projectId: project.id,
      title: project.title,
      category: project.category,
      imageUrl: project.imageUrl || "",
      savedAt: new Date().toISOString()
    });
    return true; // Added
  }
}

export async function isProjectSaved(userId: string, projectId: string): Promise<boolean> {
  const docRef = doc(db, "saved_projects", `${userId}_${projectId}`);
  const snap = await getDoc(docRef);
  return snap.exists();
}

// Consultation Inquiries Store
export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  plotArea?: string;
  projectType: string;
  location?: string;
  message: string;
  userId?: string;
}

export async function submitConsultationInquiry(data: InquiryData) {
  const colRef = collection(db, "inquiries");
  const docData = {
    ...data,
    userId: data.userId || (auth.currentUser ? auth.currentUser.uid : "guest"),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  const res = await addDoc(colRef, docData);
  return { id: res.id, ...docData };
}

// Veo Video Renders Store
export interface VideoRenderRecord {
  id?: string;
  userId: string;
  prompt: string;
  videoUrl: string;
  aspectRatio: "16:9" | "9:16";
  createdAt: string;
}

export async function saveVideoRender(record: Omit<VideoRenderRecord, "id" | "createdAt">) {
  const colRef = collection(db, "video_renders");
  const docData = {
    ...record,
    createdAt: new Date().toISOString()
  };
  const res = await addDoc(colRef, docData);
  return { id: res.id, ...docData };
}

// Saved Conversations Store
export async function saveConversation(userId: string, role: string, messages: any[], convId?: string) {
  const id = convId || `${userId}_${role}_${Date.now()}`;
  const docRef = doc(db, "conversations", id);
  await setDoc(docRef, {
    userId,
    role,
    messages,
    updatedAt: new Date().toISOString()
  }, { merge: true });
  return id;
}
