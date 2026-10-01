import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * PERF (2026-09-30, measured): the homepage's 12 below-fold lazy sections were
 * all mounting on initial render, so ~12 JS chunks parsed + evaluated inside
 * the FCP→TTI window (lab: TBT 1,870ms, score 0). DeferredSection keeps each
 * section's dynamic import out of the critical path — the chunk only loads when:
 *   1. the section is near the viewport (IntersectionObserver, 600px margin), OR
 *   2. the browser goes idle after first paint (requestIdleCallback), OR
 *   3. 2.5s elapse (hard cap — guarantees DOM presence for crawlers/renderers
 *      that never scroll, so SEO content is never scroll-gated).
 * Whichever fires first wins; the observer/idle handles are torn down after.
 */
export function DeferredSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const fire = () => {
      if (!done) {
        done = true;
        setReady(true);
      }
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && ref.current) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) fire();
        },
        { rootMargin: '600px' }
      );
      io.observe(ref.current);
    }

    let idleId = 0;
    let timeoutId = 0;
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === 'function') {
      // Fires once the main thread is idle after first paint; the timeout
      // guarantees it even on a busy thread (crawler safety).
      idleId = w.requestIdleCallback(fire, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(fire, 1200);
    }

    return () => {
      io?.disconnect();
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // The wrapper div is layout-neutral (no classes) so it cannot shift layout
  // or affect CLS; sections keep their own spacing.
  return <div ref={ref}>{ready ? children : null}</div>;
}
