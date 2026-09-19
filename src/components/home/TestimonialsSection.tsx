import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Quote
} from 'lucide-react';
import { TESTIMONIALS_DATA, TESTIMONIAL_TRUST_SIGNALS } from '../../data/testimonialsData';
import { BUSINESS_INFO } from '../../data/siteData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Touch swipe handling for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Animation variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { duration: 0.25 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section 
      id="client-trust" 
      className="py-20 md:py-28 bg-[#FBFBF9] border-b border-stone-200 relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Client Testimonials and Reviews"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Architectural Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-amber-900/80 font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
              <span>10 / Verified Client Testimonials &amp; Trust</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal tracking-tight leading-[1.12]">
              Words from those who inhabit our structures.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed max-w-xl">
              From climate-conscious residences in Ajmer to commercial hubs across Rajasthan, our dual discipline in architecture and chartered structural engineering creates long-lasting partnerships.
            </p>
          </div>

          {/* Carousel Playback Controls & Counter */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="font-mono text-xs text-stone-500 tracking-wider">
              <span className="font-bold text-stone-900">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-stone-400 mx-1">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-stone-200 p-1 rounded-xs shadow-2xs">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-9 h-9 flex items-center justify-center rounded-xs text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause sliding carousel' : 'Play sliding carousel'}
                className="w-9 h-9 flex items-center justify-center rounded-xs text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                title={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-9 h-9 flex items-center justify-center rounded-xs text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* High-Level Trust Signal Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {TESTIMONIAL_TRUST_SIGNALS.map((sig, i) => (
            <div 
              key={i} 
              className="bg-white border border-stone-200/80 p-4 sm:p-5 flex flex-col justify-between rounded-xs shadow-2xs hover:border-amber-700/40 transition-colors"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-medium text-amber-900 mb-1">
                {sig.metric}
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-900 tracking-wide">
                  {sig.label}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                  {sig.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Sliding Testimonial Stage */}
        <div 
          className="relative bg-white border border-stone-300/80 shadow-md rounded-xs overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Top Accent Hairline with Autoplay Progress Indicator */}
          <div className="w-full h-1 bg-stone-100 overflow-hidden relative">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: isPlaying && !isHovered ? '100%' : '100%' }}
              transition={{
                duration: isPlaying && !isHovered ? 7 : 0,
                ease: 'linear'
              }}
              className="h-full bg-amber-700"
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-14 min-h-[420px] sm:min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex flex-col justify-between space-y-8"
              >
                {/* Meta Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(current.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-stone-500 font-semibold">
                      5.0 / 5.0 VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{current.verifiedLabel}</span>
                    </span>
                    <span className="text-xs font-mono text-stone-400 hidden sm:inline">
                      {current.year}
                    </span>
                  </div>
                </div>

                {/* Editorial Quote Body */}
                <div className="relative">
                  <Quote className="absolute -top-3 -left-3 w-10 h-10 text-stone-200/80 -z-0 pointer-events-none transform -scale-x-100" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                      “{current.highlight}”
                    </div>
                    <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl text-stone-900 font-normal leading-[1.3] tracking-tight">
                      “{current.quote}”
                    </blockquote>
                  </div>
                </div>

                {/* Author & Project Details Footer */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <div className="font-editorial text-lg sm:text-xl font-medium text-stone-950">
                      {current.clientName}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {current.clientRole}
                    </div>
                    <div className="text-[11px] text-stone-400 font-mono mt-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                      <span>Project Team: {current.consultantsInvolved}</span>
                    </div>
                  </div>

                  <div className="sm:text-right space-y-1 bg-stone-50/80 sm:bg-transparent p-3 sm:p-0 rounded-xs border border-stone-200/60 sm:border-none">
                    <div className="text-xs font-semibold text-stone-900 flex items-center sm:justify-end gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-500" />
                      <span>{current.projectTitle}</span>
                    </div>
                    <div className="text-[11px] text-stone-500 flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{current.projectLocation} {current.area ? `· ${current.area}` : ''}</span>
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-amber-800 font-medium">
                      {current.projectType}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Selection Navigation Bar */}
          <div className="bg-stone-50 border-t border-stone-200/80 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {TESTIMONIALS_DATA.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      className={`text-left px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs text-xs transition-all whitespace-nowrap border ${
                        isActive
                          ? 'bg-stone-950 text-white border-stone-950 font-medium shadow-2xs'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900'
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-75 mr-1 sm:mr-1.5">0{idx + 1}</span>
                      <span>{item.clientName.split('&')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden lg:flex items-center gap-2 text-stone-400 text-[11px] font-mono shrink-0 pl-4">
                <span>Use ← → keys or swipe</span>
              </div>
            </div>

            {/* Mobile Indicators */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 pt-2 border-t border-stone-200/60 mt-2">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => handleSelect(dotIdx)}
                  aria-label={`Slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIdx === currentIndex ? 'w-5 bg-amber-700' : 'w-1.5 bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Action Box */}
        <div className="mt-8 p-6 bg-stone-900 text-stone-200 border border-stone-800 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
              Ajmer Studio Direct Commissioning
            </div>
            <h4 className="font-editorial text-lg sm:text-xl font-medium text-white">
              Planning a residential villa, commercial build, or structural consultation?
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              We welcome prospective homeowners and developers to visit our Ajmer studio to inspect full working drawing sets and speak directly with our chartered structural team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-2xs"
            >
              Call {BUSINESS_INFO.phones[0].display}
            </a>

            <a
              href={BUSINESS_INFO.socials.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors border border-stone-700"
            >
              <span>Justdial Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
