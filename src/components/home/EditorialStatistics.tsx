import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: string;
  tag: string;
  target: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'projects',
    tag: '01',
    target: 900,
    suffix: '+',
    label: 'Projects',
    description: 'Commissioned & Delivered in Rajasthan'
  },
  {
    id: 'experience',
    tag: '02',
    target: 20,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Continuous Practice Since 2006'
  },
  {
    id: 'disciplines',
    tag: '03',
    target: 17,
    suffix: '',
    label: 'Disciplines',
    description: 'Architecture & Civil Engineering'
  },
  {
    id: 'locations',
    tag: '04',
    target: 4,
    suffix: '',
    label: 'Locations Served',
    description: 'Ajmer · Jaipur · Pushkar · Kishangarh'
  }
];

export function EditorialStatistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [inView, setInView] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px'
      }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Premium count-up animation with direct DOM updates (0 React re-renders, 0 frame drops)
  useEffect(() => {
    if (!inView || isReducedMotion) {
      if (isReducedMotion) {
        STATS_DATA.forEach((stat, idx) => {
          const span = numberRefs.current[idx];
          if (span) span.textContent = String(stat.target);
        });
      }
      return;
    }

    const duration = 1800;
    const startTime = performance.now();
    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
    let animationFrameId: number;

    const updateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      STATS_DATA.forEach((stat, idx) => {
        const span = numberRefs.current[idx];
        if (span) {
          const val = progress >= 1 ? stat.target : Math.floor(stat.target * easedProgress);
          span.textContent = String(val);
        }
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounts);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounts);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView, isReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-4 select-none"
      aria-label="Design Plus Architectural Studio Proof Statistics"
    >
      {/* Top Architectural Drafting Line: draws from 0% -> 100% on viewport enter */}
      <div className="relative w-full h-[1px] bg-[#1A1917]/10 overflow-hidden mb-5 sm:mb-6">
        <div
          className="h-full bg-gradient-to-r from-[#1A1917]/20 via-[#C86635]/60 to-[#1A1917]/20 transition-all duration-[1800ms] ease-out"
          style={{
            width: inView || isReducedMotion ? '100%' : '0%',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Horizontal Editorial Grid of 4 Elegant Statistic Bubbles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 relative">
        {STATS_DATA.map((stat, idx) => {
          return (
            <div
              key={stat.id}
              className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-white/70 hover:bg-white/95 backdrop-blur-md border border-[#1A1917]/10 hover:border-[#C86635]/40 shadow-[0_4px_20px_rgba(26,25,23,0.03)] hover:shadow-[0_8px_30px_rgba(200,102,53,0.12)] transition-all duration-300 flex flex-col justify-between cursor-default"
              style={{
                opacity: inView || isReducedMotion ? 1 : 0,
                transform: inView || isReducedMotion ? 'translateY(0px)' : 'translateY(8px)',
                transition: 'opacity 700ms ease-out, transform 700ms ease-out, background-color 300ms, border-color 300ms, box-shadow 300ms',
                transitionDelay: `${idx * 90}ms`
              }}
            >
              {/* Header inside Bubble: Micro Tag & Pulsing Orange Beacon */}
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C86635]/10 border border-[#C86635]/20 text-[10px] font-mono font-semibold text-[#C86635] uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-[#C86635]" />
                  <span>{stat.tag}</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C86635]/40 group-hover:bg-[#C86635] group-hover:animate-ping transition-colors duration-300" aria-hidden="true" />
              </div>

              {/* Dominant Display Number in Premium Serif Typeface (Cormorant Garamond) */}
              <div className="flex items-baseline gap-1 my-1 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out">
                <span
                  ref={(el) => { numberRefs.current[idx] = el; }}
                  className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1917] leading-none"
                  style={{ fontFeatureSettings: '"tnum" 1' }}
                >
                  {isReducedMotion ? stat.target : 0}
                </span>
                {stat.suffix && (
                  <span className="font-editorial text-2xl sm:text-3xl text-[#C86635] font-light leading-none">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Refined Sans-Serif Labels in Plus Jakarta Sans */}
              <div className="mt-2 pt-2 border-t border-[#1A1917]/6 group-hover:border-[#C86635]/20 transition-colors duration-300 space-y-0.5">
                <span className="block text-xs sm:text-sm font-sans font-semibold text-[#1A1917] group-hover:text-[#C86635] transition-colors duration-300 leading-snug tracking-normal">
                  {stat.label}
                </span>
                <span className="block text-[10px] sm:text-[11px] font-sans font-normal text-[#6E665B] group-hover:text-[#4A453E] transition-colors duration-300 leading-tight">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Architectural Drafting Line */}
      <div className="relative w-full h-[1px] bg-[#1A1917]/10 overflow-hidden mt-5 sm:mt-6">
        <div
          className="h-full bg-gradient-to-r from-transparent via-[#1A1917]/15 to-transparent transition-all duration-[1600ms] ease-out"
          style={{
            width: inView || isReducedMotion ? '100%' : '0%',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '300ms'
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
