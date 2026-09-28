/**
 * Centralized Homepage Asset Preparation System
 * 
 * Rules:
 * 1. SCROLL MUST NEVER TRIGGER ASSET LOADING.
 * 2. Two-Phase Loading:
 *    - Phase 1: First Paint — Immediate, non-blocking critical viewport assets.
 *    - Phase 2: Proactive background preparation — Begins immediately AFTER first paint.
 *      Pre-downloads, decodes, and caches every homepage visual asset before user scroll reaches it.
 */

import {
  CRITICAL_FIRST_PAINT_ASSETS,
  HOMEPAGE_PREPARATION_ASSETS,
  ALL_HOMEPAGE_ASSETS
} from './homepageAssetManifest';

// Persistent in-memory cache to retain decoded image bitmaps and prevent GC thrashing
const memoryImageCache = new Map<string, HTMLImageElement>();
const loadingPromises = new Map<string, Promise<HTMLImageElement>>();

let isPhase2Started = false;
let isPhase2Completed = false;

/**
 * Preload and decode a single image asset
 */
export function preloadAndDecodeImage(
  url: string,
  priority: 'high' | 'auto' | 'low' = 'auto'
): Promise<HTMLImageElement> {
  if (memoryImageCache.has(url)) {
    return Promise.resolve(memoryImageCache.get(url)!);
  }

  if (loadingPromises.has(url)) {
    return loadingPromises.get(url)!;
  }

  const promise = new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();
    if (priority === 'high') {
      img.fetchPriority = 'high';
    }
    img.decoding = 'async';
    img.src = url;

    const onComplete = () => {
      memoryImageCache.set(url, img);
      resolve(img);
    };

    if (typeof img.decode === 'function') {
      img.decode()
        .then(onComplete)
        .catch(() => {
          // If decode fails or image errored, complete anyway to not stall queue
          img.onload = onComplete;
          img.onerror = onComplete;
        });
    } else {
      img.onload = onComplete;
      img.onerror = onComplete;
    }
  });

  loadingPromises.set(url, promise);
  return promise;
}

/**
 * Phase 1: Preload critical first paint visual asset (Atlas 01)
 */
export function prepareFirstPaint(): Promise<void> {
  const promises = CRITICAL_FIRST_PAINT_ASSETS.map((asset) =>
    preloadAndDecodeImage(asset.url, asset.priority || 'high')
  );
  return Promise.all(promises).then(() => undefined);
}

/**
 * Phase 2: Proactively prepare all remaining homepage visual assets in background.
 * Must run immediately after first paint so all sections are warm and scroll-ready.
 */
export function prepareHomepageAssets(): void {
  if (isPhase2Started) return;
  isPhase2Started = true;

  const runPreparation = () => {
    // 1. Prepare remaining cinematic atlases first (Frames 31 - 180)
    const atlases = HOMEPAGE_PREPARATION_ASSETS.filter((a) => a.category === 'atlas');
    const sections = HOMEPAGE_PREPARATION_ASSETS.filter((a) => a.category !== 'atlas');

    // Preload atlases sequentially in batches to balance network and memory
    const loadBatch = async () => {
      // First batch: Atlases 02 and 03 (immediate scroll continuation)
      for (const atlas of atlases) {
        await preloadAndDecodeImage(atlas.url, 'auto');
      }

      // Second batch: All section photographs and monographs
      const sectionPromises = sections.map((asset) =>
        preloadAndDecodeImage(asset.url, 'auto')
      );
      await Promise.all(sectionPromises);

      isPhase2Completed = true;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('homepage-assets-ready', {
            detail: { totalCached: memoryImageCache.size }
          })
        );
      }
    };

    loadBatch().catch((err) => {
      console.warn('Asset preparation encountered minor issue:', err);
    });
  };

  // Schedule without blocking the main rendering thread
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        runPreparation,
        { timeout: 1500 }
      );
    } else {
      setTimeout(runPreparation, 100);
    }
  }
}

/**
 * Query cache helper
 */
export function getCachedImage(url: string): HTMLImageElement | undefined {
  return memoryImageCache.get(url);
}

export function isAssetCached(url: string): boolean {
  return memoryImageCache.has(url);
}

export function isHomepageScrollReady(): boolean {
  return isPhase2Completed;
}
