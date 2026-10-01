/**
 * Lazy singleton for the Firebase client SDK.
 *
 * firebase/app + firebase/auth + firebase/firestore is ~250 KiB of JS that is
 * only needed for authenticated interactions (sign-in, bookmarks, inquiries).
 * It is fetched as a separate chunk AFTER first paint instead of riding in
 * the initial bundle. The module is cached so every consumer shares one load.
 *
 * Usage:
 *   import { loadFirebase } from '../lib/firebaseLazy';
 *   const fb = await loadFirebase();
 *   fb.signInWithGoogle();
 */
let cached: Promise<typeof import('./firebase')> | null = null;

export function loadFirebase(): Promise<typeof import('./firebase')> {
  if (!cached) {
    cached = import('./firebase');
  }
  return cached;
}
