import { useEffect, useRef, useCallback } from 'react';
import { preloadAndDecodeImage, getCachedImage } from '../../utils/homepageAssetPreloader';

// Total 6 sprite sheets with 30 frames each = 180 frames (640x360 per frame)
const TOTAL_FRAMES = 180;
const FRAMES_PER_ATLAS = 30;
const ATLAS_COUNT = 6;
const FRAME_WIDTH = 640;
const FRAME_HEIGHT = 360;
const ATLAS_COLUMNS = 5;

const ATLAS_URLS = [
  '/designplus-atlas-01.webp',
  '/designplus-atlas-02.webp',
  '/designplus-atlas-03.webp',
  '/designplus-atlas-04.webp',
  '/designplus-atlas-05.webp',
  '/designplus-atlas-06.webp'
];

// In-memory global atlas cache for instant retrieval
const globalAtlasCache: (HTMLImageElement | null)[] = new Array(ATLAS_COUNT).fill(null);
const globalAtlasLoaded: boolean[] = new Array(ATLAS_COUNT).fill(false);

export function AtlasScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hudFrameTextRef = useRef<HTMLSpanElement>(null);

  const currentFrameRef = useRef<number>(0);
  const pendingFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number>(0);
  const isScheduledRef = useRef<boolean>(false);
  const isMountedRef = useRef<boolean>(true);

  // Pre-calculated destination rectangle
  const destRectRef = useRef<{ x: number; y: number; w: number; h: number }>({
    x: 0,
    y: 0,
    w: FRAME_WIDTH,
    h: FRAME_HEIGHT
  });

  // Fast direct frame renderer (zero GC allocations, zero interpolation lag)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    currentFrameRef.current = clampedFrame;

    const atlasIndex = Math.min(ATLAS_COUNT - 1, Math.floor(clampedFrame / FRAMES_PER_ATLAS));
    const cellIndex = clampedFrame % FRAMES_PER_ATLAS;
    const col = cellIndex % ATLAS_COLUMNS;
    const row = Math.floor(cellIndex / ATLAS_COLUMNS);

    const sx = col * FRAME_WIDTH;
    const sy = row * FRAME_HEIGHT;
    const { x, y, w, h } = destRectRef.current;

    const img = globalAtlasCache[atlasIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, sx, sy, FRAME_WIDTH, FRAME_HEIGHT, x, y, w, h);
    } else {
      // Fallback: draw nearest loaded atlas
      let fallbackDrawn = false;
      for (let i = atlasIndex - 1; i >= 0; i--) {
        const prevImg = globalAtlasCache[i];
        if (prevImg && prevImg.complete && prevImg.naturalWidth > 0) {
          const lastCell = FRAMES_PER_ATLAS - 1;
          const fbCol = lastCell % ATLAS_COLUMNS;
          const fbRow = Math.floor(lastCell / ATLAS_COLUMNS);
          ctx.drawImage(prevImg, fbCol * FRAME_WIDTH, fbRow * FRAME_HEIGHT, FRAME_WIDTH, FRAME_HEIGHT, x, y, w, h);
          fallbackDrawn = true;
          break;
        }
      }
      if (!fallbackDrawn) {
        const a0 = globalAtlasCache[0];
        if (a0 && a0.complete && a0.naturalWidth > 0) {
          ctx.drawImage(a0, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, x, y, w, h);
        } else {
          ctx.fillStyle = '#F5F2EB';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    }

    if (hudFrameTextRef.current) {
      hudFrameTextRef.current.textContent = `CINEMATIC TIMELINE · FRAME ${String(clampedFrame + 1).padStart(3, '0')} / 180`;
    }
  }, []);

  // Immediate frame update on next animation frame (0ms latency, no sluggish easing)
  const scheduleFrame = useCallback((targetFrame: number) => {
    pendingFrameRef.current = targetFrame;
    if (!isScheduledRef.current) {
      isScheduledRef.current = true;
      rafIdRef.current = requestAnimationFrame(() => {
        isScheduledRef.current = false;
        if (isMountedRef.current) {
          drawFrame(pendingFrameRef.current);
        }
      });
    }
  }, [drawFrame]);

  // Update canvas buffer and precalculated scale on window resize only
  const updateCanvasBounds = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayW = window.innerWidth;
    const displayH = window.innerHeight;

    canvas.width = Math.round(displayW * dpr);
    canvas.height = Math.round(displayH * dpr);

    const ctx = canvas.getContext('2d', { alpha: false });
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
    }

    const scale = Math.max(canvas.width / FRAME_WIDTH, canvas.height / FRAME_HEIGHT);
    const destW = FRAME_WIDTH * scale;
    const destH = FRAME_HEIGHT * scale;

    destRectRef.current = {
      w: destW,
      h: destH,
      x: (canvas.width - destW) / 2,
      y: (canvas.height - destH) / 2
    };

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Upfront preloading of all 6 atlases synchronized with centralized asset cache
  useEffect(() => {
    isMountedRef.current = true;

    ATLAS_URLS.forEach((url, index) => {
      // Check if already in centralized preloader cache
      const cached = getCachedImage(url);
      if (cached && cached.complete && cached.naturalWidth > 0) {
        globalAtlasCache[index] = cached;
        globalAtlasLoaded[index] = true;
        if (index === 0 || Math.floor(currentFrameRef.current / FRAMES_PER_ATLAS) === index) {
          drawFrame(currentFrameRef.current);
        }
        return;
      }

      if (globalAtlasLoaded[index] && globalAtlasCache[index]) return;

      preloadAndDecodeImage(url, index === 0 ? 'high' : 'auto').then((img) => {
        globalAtlasCache[index] = img;
        globalAtlasLoaded[index] = true;
        if (isMountedRef.current && (index === 0 || Math.floor(currentFrameRef.current / FRAMES_PER_ATLAS) === index)) {
          drawFrame(currentFrameRef.current);
        }
      });
    });

    updateCanvasBounds();

    return () => {
      isMountedRef.current = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame, updateCanvasBounds]);

  // Synchronized scroll handling:
  // 1. Receives hero scrub events for 100% frame-accurate synchronized playback with hero progress
  // 2. Window scroll listener throttled with requestAnimationFrame to prevent layout thrashing
  useEffect(() => {
    const onHeroScrub = (e: Event) => {
      const customEvent = e as CustomEvent<{ progress: number }>;
      if (customEvent.detail && typeof customEvent.detail.progress === 'number') {
        const frame = Math.round(customEvent.detail.progress * (TOTAL_FRAMES - 1));
        scheduleFrame(frame);
      }
    };

    let scrollRafId = 0;
    let isScrollPending = false;

    const handleScroll = () => {
      if (isScrollPending) return;
      isScrollPending = true;

      scrollRafId = requestAnimationFrame(() => {
        isScrollPending = false;
        const heroSection = document.getElementById('cinematic-hero-section');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        const heroHeight = heroSection.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollableDistance = Math.max(1, heroHeight - winHeight);

        // -rect.top is the distance scrolled into the hero section
        const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
        const targetFrame = Math.round(progress * (TOTAL_FRAMES - 1));

        // If hero has scrolled far out of view, sleep and do not redraw
        if (rect.bottom < -winHeight) {
          return;
        }

        scheduleFrame(targetFrame);
      });
    };

    window.addEventListener('hero-scrub', onHeroScrub, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCanvasBounds, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('hero-scrub', onHeroScrub);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasBounds);
      if (scrollRafId) {
        cancelAnimationFrame(scrollRafId);
      }
    };
  }, [scheduleFrame, updateCanvasBounds]);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 0. Dedicated Browser-Eager Pre-fetch Buffer for All 6 Cinematic Sprite Atlases */}
      <div className="sr-only pointer-events-none" aria-hidden="true" style={{ display: 'none' }}>
        {ATLAS_URLS.map((url, idx) => (
          <img
            key={url}
            src={url}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority={idx < 2 ? "high" : "auto"}
          />
        ))}
      </div>

      {/* 1. Primary Sprite Atlas Canvas (Zero CSS filters for maximum GPU fill-rate) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-90"
      />

      {/* 2. Light Architectural Scrim (Pure color tint without GPU-expensive backdrop-blur) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 242, 235, 0.45) 0%, rgba(245, 242, 235, 0.75) 100%)'
        }}
      />

      {/* 3. Subtle Engineering Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(to right, #1A1917 1px, transparent 1px), linear-gradient(to bottom, #1A1917 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* 4. Minimal Architectural Frame Metadata Indicator */}
      <div className="absolute bottom-6 left-6 z-10 hidden md:flex items-center gap-3 px-3 py-1.5 bg-[#F5F2EB]/90 border border-[#1A1917]/10 text-[10px] font-mono tracking-widest text-[#1A1917]/70 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C86635] animate-pulse" />
        <span ref={hudFrameTextRef}>CINEMATIC TIMELINE · FRAME 001 / 180</span>
        <span className="text-[#1A1917]/30">|</span>
        <span>6-SEC ATLAS</span>
      </div>
    </div>
  );
}
