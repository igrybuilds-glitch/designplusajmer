import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import heroVideo from '../../assets/hero-interior-reveal.mp4';
import heroPoster from '../../assets/hero-poster.jpg';

interface CinematicScrollHeroProps {
  onOpenConsultation?: () => void;
}

export function CinematicScrollHero({ onOpenConsultation }: CinematicScrollHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Hero autoplay & below-hero butter-smooth scroll scrubbing video effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playing successfully
        }).catch((err) => {
          console.warn("Hero video autoplay failed, retrying on canplay:", err);
          const handleCanPlay = () => {
            video.play().catch((e) => console.warn("Retry play failed:", e));
            video.removeEventListener('canplay', handleCanPlay);
          };
          video.addEventListener('canplay', handleCanPlay);
        });
      }
    };

    playVideo();

    let targetTime = 0;
    let currentScrubTime = 0;
    let rafId = 0;
    let isBelowHero = false;

    const updateScrub = () => {
      const heroEl = document.getElementById('cinematic-hero-section');
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > heroHeight) {
        // Below hero: pause autoplay, drive video via scroll progress with butter-smooth lerp
        if (!video.paused) {
          video.pause();
        }
        isBelowHero = true;

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollableBelow = Math.max(1, maxScroll - heroHeight);
        const progressBelow = Math.max(0, Math.min(1, (scrollY - heroHeight) / scrollableBelow));
        
        const duration = (video.duration && !isNaN(video.duration) && video.duration > 0) ? video.duration : 5;
        targetTime = progressBelow * duration;

        currentScrubTime += (targetTime - currentScrubTime) * 0.12;

        if (Math.abs(video.currentTime - currentScrubTime) > 0.001) {
          try {
            video.currentTime = currentScrubTime;
          } catch (e) {
            // ignore seeking error if not ready
          }
        }
      } else {
        // Hero zone: resume normal autoplay seamlessly without jumping
        if (isBelowHero) {
          isBelowHero = false;
          currentScrubTime = video.currentTime;
          playVideo();
        } else if (video.paused) {
          playVideo();
        }
      }

      rafId = requestAnimationFrame(updateScrub);
    };

    rafId = requestAnimationFrame(updateScrub);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Entrance animation for hero content
  useEffect(() => {
    if (prefersReducedMotion) return;
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.1 }
      );
    }, hero);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // "Explore Services" -> scroll to services exhibition section
  const scrollToServices = () => {
    const el = document.getElementById('services-exhibition') || document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <>
      {/* Fixed Full-Viewport Living Background Video behind entire page */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-50">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
          onError={(e) => {
            console.warn("Global background video error:", e);
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#B86B38]/10 mix-blend-overlay" aria-hidden="true" />
      </div>

      <section
        ref={heroRef}
        id="cinematic-hero-section"
        aria-label="Architects in Ajmer Hero · Design Plus"
        className="relative w-full h-[100svh] min-h-[680px] bg-transparent text-[#F4F0E8] overflow-hidden flex flex-col justify-between select-none pt-28 sm:pt-32"
      >
        {/* Center Hero Content with dark glass backdrop */}
        <div 
          ref={contentRef}
          className="relative z-20 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto space-y-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px] rounded-3xl -z-10 max-w-3xl mx-auto my-auto h-[92%] border border-white/15 shadow-2xl" aria-hidden="true" />

          <div className="px-6 py-6 sm:px-10 sm:py-10 space-y-5 w-full">
            <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase text-[#F4F0E8] leading-[0.95]">
              DESIGN PLUS
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#F4F0E8]/95 font-sans font-light max-w-xl mx-auto leading-relaxed pt-1">
              Homes and buildings designed for Rajasthan&apos;s climate, built to last.
            </p>

            {/* Exactly two high-contrast CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary bg-[#B86B38] hover:bg-[#a65d37] text-white px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg cursor-pointer"
              >
                <span>Book Site Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="btn-secondary text-[#F4F0E8] border-[#F4F0E8]/80 hover:border-[#F4F0E8] px-6 py-3.5 text-sm font-medium cursor-pointer flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer Datum */}
        <div className="relative z-20 w-full py-3.5 px-4 bg-[#1E1D1A]/90 backdrop-blur-md text-center text-xs font-sans font-normal uppercase tracking-widest text-[#F4F0E8]/80 border-t border-white/10">
          Civil Lines, Ajmer &middot; Bespoke Architectural &amp; Structural Engineering Studio
        </div>
      </section>
    </>
  );
}
