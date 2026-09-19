import { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  ShieldCheck, 
  Compass, 
  Box, 
  Image as ImageIcon, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Moon, 
  Sunset,
  Play, 
  Pause, 
  CheckCircle2, 
  Info,
  Maximize2,
  Award,
  Building2,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../../data/siteData';
import { InteractiveBuildingBackground } from '../InteractiveBuildingBackground';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

interface HouseHotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  subtitle: string;
  detail: string;
  code: string;
}

interface HouseSlide {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  url: string;
  tag: string;
  stats: { area: string; floors: string; timeline: string };
  hotspots: HouseHotspot[];
}

const CLEAN_HOUSE_SELECTIONS: HouseSlide[] = [
  {
    id: 'minimalist-villa',
    title: 'Ana Sagar Lakefront Minimalist Villa',
    subtitle: 'Private Residential Estate',
    location: 'Ana Sagar Circular Rd, Ajmer',
    description: 'Pristine geometric volumes, double-height glass pavilions, warm interior lighting, and private courtyard reflection pool.',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85',
    tag: 'Lakefront Villa',
    stats: { area: '6,200 sq.ft', floors: 'G+2 Floors', timeline: '14 Months Turnkey' },
    hotspots: [
      {
        id: 'hs1',
        x: 32,
        y: 42,
        title: 'Cantilevered Master Suite',
        subtitle: 'Post-Tensioned RCC (+6.20m)',
        detail: 'Engineered 4.5m unobstructed column-free overhang facing Ana Sagar Lake with integrated acoustic thermal barrier.',
        code: 'IS 456 / IS 13920 Ductile Design'
      },
      {
        id: 'hs2',
        x: 65,
        y: 58,
        title: 'Floor-to-Ceiling Thermal Glazing',
        subtitle: 'Low-E Acoustic Glass',
        detail: 'North-East oriented high-performance double glazing cutting 68% solar heat gain while maximizing natural daylit living.',
        code: 'ECBC Rajasthan Passive Standard'
      },
      {
        id: 'hs3',
        x: 48,
        y: 78,
        title: 'Courtyard Reflection Pool',
        subtitle: 'Microclimate & Vastu Water Body',
        detail: 'Central granite water court generating passive evaporative cooling, lowering ambient ground floor temperatures by 4-6°C.',
        code: 'Vedic North-East Orientation'
      }
    ]
  },
  {
    id: 'luxury-courtyard',
    title: 'Panchsheel Contemporary Courtyard Estate',
    subtitle: 'Luxury Multi-Generational Home',
    location: 'Panchsheel Nagar B-Block, Ajmer',
    description: 'Immaculate white architectural facade with warm evening illumination, clean lawn terrace, and private lounge.',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    tag: 'Clean Luxury',
    stats: { area: '7,800 sq.ft', floors: 'G+2 Floors', timeline: '16 Months Turnkey' },
    hotspots: [
      {
        id: 'hs4',
        x: 40,
        y: 38,
        title: 'Perimeter Louver Shading',
        subtitle: 'Passive Solar Sunbreakers',
        detail: 'Custom architectural fin system deflecting western desert solar radiation during peak Rajasthan summer afternoons.',
        code: 'Passive Solar Arid Architecture'
      },
      {
        id: 'hs5',
        x: 72,
        y: 68,
        title: 'Double-Height Living Pavilion',
        subtitle: 'Open-Plan Family Atrium',
        detail: 'Seamless indoor-outdoor connectivity opening onto private manicured turf with embedded mood lighting.',
        code: 'Bespoke Interior Integration'
      }
    ]
  },
  {
    id: 'warm-haven',
    title: 'Vaishali Nagar Sunset Modern Haven',
    subtitle: 'Vernacular Stone Residence',
    location: 'Vaishali Nagar, Ajmer',
    description: 'Minimalist cantilevered living space with natural Rajasthan stone textures and ambient golden-hour light.',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    tag: 'Stone & Glass',
    stats: { area: '5,400 sq.ft', floors: 'G+1.5 Floors', timeline: '12 Months Turnkey' },
    hotspots: [
      {
        id: 'hs6',
        x: 52,
        y: 45,
        title: 'Local Makrana & Jodhpur Stone Cladding',
        subtitle: 'Natural Thermal Mass',
        detail: 'Cavity wall masonry providing high thermal lag to keep interior spaces cool during desert daytime heat spikes.',
        code: 'Vernacular Rajasthan Masonry'
      }
    ]
  },
  {
    id: 'garden-retreat',
    title: 'Pushkar Valley Serene Garden House',
    subtitle: 'Boutique Weekend Villa',
    location: 'Pushkar Valley Foothills',
    description: 'Pristine architectural haven framed by lush landscaped gardens, infinity pool, and expansive glass facade.',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    tag: 'Serene Home',
    stats: { area: '8,500 sq.ft', floors: 'G+1 Floors', timeline: '15 Months Turnkey' },
    hotspots: [
      {
        id: 'hs7',
        x: 58,
        y: 52,
        title: 'Aravalli Hill Panorama Deck',
        subtitle: 'Zero-Edge Overlook',
        detail: 'Frameless glass balustrades offering unobstructed 180° sunrise vistas across the Aravalli mountain ridge.',
        code: 'Topographic Ridge Integration'
      }
    ]
  }
];

const ROTATING_KEYWORDS = [
  'Bespoke Residences',
  'Courtyard Luxury Villas',
  'RCC Structural Frameworks',
  'Lakefront Architecture',
  'Commercial Atriums',
  'ADA Sanctioned Projects'
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [selectedHouseIdx, setSelectedHouseIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'photo' | '3d'>('photo');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<HouseHotspot | null>(null);
  const [lightingMode, setLightingMode] = useState<'golden' | 'daylight' | 'twilight'>('golden');
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentHouse = CLEAN_HOUSE_SELECTIONS[selectedHouseIdx];

  // Rotating keyword ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % ROTATING_KEYWORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Auto-advancing slideshow with smooth progress bar
  useEffect(() => {
    if (!isPlaying || viewMode !== 'photo') return;

    const duration = 6000; // 6 seconds per slide
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedHouseIdx((curr) => (curr + 1) % CLEAN_HOUSE_SELECTIONS.length);
          setActiveHotspot(null);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, viewMode, selectedHouseIdx]);

  const selectSlide = (idx: number) => {
    setSelectedHouseIdx(idx);
    setProgress(0);
    setActiveHotspot(null);
  };

  const nextHouse = () => {
    selectSlide((selectedHouseIdx + 1) % CLEAN_HOUSE_SELECTIONS.length);
  };

  const prevHouse = () => {
    selectSlide((selectedHouseIdx - 1 + CLEAN_HOUSE_SELECTIONS.length) % CLEAN_HOUSE_SELECTIONS.length);
  };

  // Lighting overlay styling
  const getLightingOverlay = () => {
    switch (lightingMode) {
      case 'daylight':
        return 'bg-gradient-to-t from-stone-950/80 via-transparent to-sky-950/20';
      case 'twilight':
        return 'bg-gradient-to-t from-[#0a0c16]/95 via-purple-950/25 to-[#0b0f1c]/40';
      case 'golden':
      default:
        return 'bg-gradient-to-t from-stone-950/90 via-amber-950/20 to-amber-900/25';
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-stone-200 bg-[#FBFBF9]">
      
      {/* Background Ambient Gradient Blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-36 right-10 w-[30rem] h-[30rem] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Verification Pill */}
        <motion.div 
          data-motion="true"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-hardware-accelerated flex flex-wrap items-center justify-between gap-4 mb-6 text-xs tracking-[0.18em] uppercase text-stone-500 font-medium"
          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-50/90 border border-amber-300/80 px-3 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
            <span className="text-amber-950 font-semibold tracking-wider">Ajmer &amp; Rajasthan Architectural Practice</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-stone-600 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1 text-stone-800 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Chartered Structural Practice
            </span>
            <span className="text-stone-300">/</span>
            <span>20+ Years Experience</span>
            <span className="text-stone-300">/</span>
            <span>ADA Sanctions Specialist</span>
          </div>
        </motion.div>

        {/* Main Hero Headline Grid with Kinetic Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
          
          <motion.div 
            data-motion="true"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-hardware-accelerated lg:col-span-8 space-y-4"
            style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
          >
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-950 font-normal leading-[1.08] tracking-tight">
              Architecture crafted for{' '}
              <span className="relative inline-block text-amber-900 italic font-normal">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={keywordIndex}
                    data-motion="true"
                    initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="hero-ticker-word hero-hardware-accelerated inline-block"
                    style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
                  >
                    {ROTATING_KEYWORDS[keywordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-700/60 rounded-full" />
              </span>{' '}
              with certified structural mastery.
            </h1>
          </motion.div>

          <motion.div 
            data-motion="true"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hero-hardware-accelerated lg:col-span-4 space-y-6 lg:pb-2"
            style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
          >
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              Led by Chartered Engineer <strong className="text-stone-900 font-semibold">Er. Sudhir Soni</strong> and Principal Architect <strong className="text-stone-900 font-semibold">Ar. Vipul Verma</strong>, Design Plus builds residences, villas, and commercial landmarks engineered for Rajasthan’s arid climate and strict ADA compliance.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                data-motion="true"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="hero-hardware-accelerated bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-5 py-3 text-xs tracking-wider uppercase font-semibold transition-all flex items-center gap-2 rounded-xs shadow-md group"
                style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <a
                href="#selected-projects"
                className="border border-stone-300 hover:border-stone-900 bg-white/80 hover:bg-white text-stone-900 px-5 py-3 text-xs tracking-wider uppercase font-semibold transition-all rounded-xs shadow-2xs flex items-center gap-1.5"
              >
                <span>Explore 900+ Works</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Master Showcase: Animated Clean House Canvas with Hotspots, Ken-Burns Effect, & Ambiance Controls */}
        <motion.div 
          data-motion="true"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          className="hero-hardware-accelerated relative w-full aspect-4/3 sm:aspect-16/9 md:aspect-21/9 bg-stone-950 overflow-hidden border border-stone-300/80 shadow-2xl rounded-xs group"
          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          
          {/* Top Control Bar (Pills & Controls) */}
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-30 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
            
            {/* View Mode Toggle: Clean Photo vs 3D Model */}
            <div className="flex items-center bg-stone-950/85 backdrop-blur-md p-1 rounded-xs border border-stone-700 text-[11px] sm:text-xs shadow-xl">
              <button
                onClick={() => setViewMode('photo')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xs uppercase tracking-wider font-semibold transition-all ${
                  viewMode === 'photo'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Clean Architectural Residence Photography"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Clean House</span>
                <span className="xs:hidden">Photo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse ml-0.5" />
              </button>

              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xs uppercase tracking-wider font-semibold transition-all ${
                  viewMode === '3d'
                    ? 'bg-stone-800 text-white shadow-xs'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Interactive 3D Axonometric Building Canvas"
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Wireframe</span>
              </button>
            </div>

            {/* Ambiance Lighting Mode Selector (When in Photo Mode) */}
            {viewMode === 'photo' && (
              <div className="flex items-center gap-1.5">
                <div className="hidden md:flex items-center bg-stone-950/85 backdrop-blur-md p-1 rounded-xs border border-stone-800 text-[11px] text-stone-300">
                  <span className="px-2 text-stone-500 font-mono text-[10px] uppercase">Ambiance:</span>
                  <button
                    onClick={() => setLightingMode('golden')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xs uppercase tracking-wider font-medium transition-all ${
                      lightingMode === 'golden' ? 'bg-amber-700 text-amber-100' : 'text-stone-400 hover:text-white'
                    }`}
                    title="Golden Hour Sunset Warmth"
                  >
                    <Sunset className="w-3 h-3 text-amber-300" />
                    <span>Golden</span>
                  </button>
                  <button
                    onClick={() => setLightingMode('daylight')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xs uppercase tracking-wider font-medium transition-all ${
                      lightingMode === 'daylight' ? 'bg-sky-800 text-sky-100' : 'text-stone-400 hover:text-white'
                    }`}
                    title="Bright Architectural Daylight"
                  >
                    <Sun className="w-3 h-3 text-sky-300" />
                    <span>Daylight</span>
                  </button>
                  <button
                    onClick={() => setLightingMode('twilight')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xs uppercase tracking-wider font-medium transition-all ${
                      lightingMode === 'twilight' ? 'bg-indigo-900 text-indigo-100' : 'text-stone-400 hover:text-white'
                    }`}
                    title="Evening Twilight Illumination"
                  >
                    <Moon className="w-3 h-3 text-indigo-300" />
                    <span>Twilight</span>
                  </button>
                </div>

                {/* Slideshow Play / Pause button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-stone-950/85 backdrop-blur-md hover:bg-stone-900 text-stone-300 rounded-xs border border-stone-800 transition-colors"
                  title={isPlaying ? 'Pause Auto-Slideshow' : 'Resume Auto-Slideshow'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          {viewMode === 'photo' ? (
            <div className="relative w-full h-full hero-container-wrapper">
              
              {/* Ken-Burns Animated Background House Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentHouse.id}-${lightingMode}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full hero-image-container hero-bg-animated overflow-hidden"
                >
                  <img
                    src={currentHouse.url}
                    alt={currentHouse.title}
                    width={2000}
                    height={1000}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center filter brightness-95 transform transition-transform duration-1000 will-change-transform backface-hidden"
                    style={{
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Atmospheric Lighting Grading Overlay */}
              <div className={`absolute inset-0 transition-colors duration-1000 pointer-events-none ${getLightingOverlay()}`} />

              {/* Interactive Architectural Hotspots / Radar Nodes */}
              {currentHouse.hotspots.map((hs) => {
                const isActive = activeHotspot?.id === hs.id;
                return (
                  <div
                    key={hs.id}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  >
                    <button
                      onClick={() => setActiveHotspot(isActive ? null : hs)}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-transform transform hover:scale-125 focus:outline-hidden ${
                        isActive ? 'scale-110' : ''
                      }`}
                      title={`Inspect: ${hs.title}`}
                      aria-label={hs.title}
                    >
                      {/* Pulsing radar waves */}
                      <span className="absolute inset-0 rounded-full bg-amber-400 opacity-60 animate-ping" />
                      <span className="absolute inset-1 rounded-full bg-amber-500/40 animate-pulse" />
                      {/* Center target dot */}
                      <span className="relative w-3.5 h-3.5 rounded-full bg-amber-300 border-2 border-stone-950 shadow-lg flex items-center justify-center text-[8px] font-bold text-stone-950">
                        +
                      </span>
                    </button>

                    {/* Popover Card for Active Hotspot (Desktop & Tablet only to prevent blocking the house picture on mobile) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          data-motion="true"
                          initial={{ opacity: 0, y: 8, scale: 0.94 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.94 }}
                          transition={{ duration: 0.25 }}
                          className="hero-popover hero-hardware-accelerated hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-stone-950/95 backdrop-blur-md text-stone-200 p-3.5 border border-amber-500/60 rounded-xs shadow-2xl z-30"
                          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
                        >
                          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-amber-400 mb-1">
                            <span>Architectural Feature</span>
                            <span className="font-mono text-stone-400">{hs.subtitle}</span>
                          </div>
                          <div className="font-editorial text-sm text-white font-medium mb-1">
                            {hs.title}
                          </div>
                          <p className="text-[11px] text-stone-300 leading-relaxed">
                            {hs.detail}
                          </p>
                          <div className="mt-2 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[9px] text-amber-300 font-mono">
                            <span>{hs.code}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveHotspot(null);
                              }}
                              className="text-stone-400 hover:text-white uppercase font-sans"
                            >
                              Close
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Navigation Arrows for House Slides */}
              <button
                onClick={prevHouse}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-950 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                aria-label="Previous house picture"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextHouse}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-950 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                aria-label="Next house picture"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Editorial Description Glass Card (Bottom Left - Desktop/Tablet Only) */}
              <motion.div 
                key={`desc-${currentHouse.id}`}
                data-motion="true"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hero-hardware-accelerated hidden sm:block absolute bottom-5 left-5 sm:max-w-lg bg-stone-950/90 backdrop-blur-md text-stone-200 p-4 sm:p-5 border border-stone-700/80 rounded-xs shadow-2xl z-20"
                style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    {currentHouse.tag}
                  </span>
                  <span className="text-stone-400 font-mono">{currentHouse.location}</span>
                </div>
                
                <div className="font-editorial text-lg sm:text-xl text-white font-medium">
                  {currentHouse.title}
                </div>

                <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                  {currentHouse.description}
                </p>

                {/* Micro Matrix Spec Pill */}
                <div className="mt-3 pt-2.5 border-t border-stone-800/90 grid grid-cols-3 gap-2 text-[10px] text-stone-300 font-mono">
                  <div>
                    <span className="text-stone-500 block">BUILT-UP:</span>
                    <span className="text-amber-200 font-semibold">{currentHouse.stats.area}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">CONFIG:</span>
                    <span className="text-stone-200">{currentHouse.stats.floors}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">TIMELINE:</span>
                    <span className="text-stone-200">{currentHouse.stats.timeline}</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right Slide Progress Bar & Typology Switcher */}
              <div className="absolute bottom-5 right-5 z-20 hidden md:flex flex-col items-end gap-2">
                
                {/* Typology Quick Switcher */}
                <div className="flex items-center gap-1 bg-stone-950/85 backdrop-blur-md p-1 rounded-xs border border-stone-800 text-[10px]">
                  {CLEAN_HOUSE_SELECTIONS.map((h, i) => (
                    <button
                      key={h.id}
                      onClick={() => selectSlide(i)}
                      className={`px-2 py-1 rounded-xs uppercase tracking-wider transition-all ${
                        selectedHouseIdx === i
                          ? 'bg-amber-700 text-white font-bold'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {h.tag}
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-48 bg-stone-900/80 rounded-full h-1 overflow-hidden border border-stone-800">
                  <div 
                    className="bg-amber-400 h-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

            </div>
          ) : (
            /* 3D Wireframe Canvas Mode */
            <div className="w-full h-full">
              <InteractiveBuildingBackground 
                initialTheme="sandstone"
                interactive={true}
                showControls={true}
                heightClass="h-full"
              />
            </div>
          )}
        </motion.div>

        {/* Mobile Separate Architectural Card (Ensures house picture is 100% visible on mobile) */}
        {viewMode === 'photo' && (
          <div className="block sm:hidden mt-3 bg-stone-950 text-stone-200 p-4 border border-stone-800 rounded-xs shadow-xl">
            {activeHotspot ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Hotspot Focus</span>
                  </span>
                  <span className="text-stone-400 font-mono text-[10px]">{activeHotspot.subtitle}</span>
                </div>
                
                <div className="font-editorial text-lg text-white font-medium">
                  {activeHotspot.title}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {activeHotspot.detail}
                </p>

                <div className="mt-3 pt-2.5 border-t border-stone-800 flex items-center justify-between text-[10px]">
                  <span className="text-amber-300 font-mono">{activeHotspot.code}</span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xs uppercase tracking-wider font-semibold text-[10px]"
                  >
                    View House Info
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    {currentHouse.tag}
                  </span>
                  <span className="text-stone-400 font-mono">{currentHouse.location}</span>
                </div>
                
                <div className="font-editorial text-lg text-white font-medium">
                  {currentHouse.title}
                </div>

                <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                  {currentHouse.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-stone-800 grid grid-cols-3 gap-2 text-[10px] text-stone-300 font-mono">
                  <div>
                    <span className="text-stone-500 block">BUILT-UP:</span>
                    <span className="text-amber-200 font-semibold">{currentHouse.stats.area}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">CONFIG:</span>
                    <span className="text-stone-200">{currentHouse.stats.floors}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">TIMELINE:</span>
                    <span className="text-stone-200">{currentHouse.stats.timeline}</span>
                  </div>
                </div>

                {/* Hotspot hint on mobile */}
                <div className="mt-3 pt-2 border-t border-stone-800/60 flex items-center justify-between text-[10px] text-stone-400">
                  <span className="text-amber-400/90 font-mono">Tap + icons above to inspect details</span>
                  <span className="text-stone-500 font-mono">{currentHouse.hotspots.length} Nodes</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Hero Trust Metrics Strip with Animated Staggered Reveal */}
        <motion.div 
          data-motion="true"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hero-hardware-accelerated mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-stone-600"
          style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <div className="flex items-start gap-2.5 p-2 rounded-xs hover:bg-stone-100/60 transition-colors">
            <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-stone-900 uppercase tracking-wider">Er. Sudhir Soni</div>
              <div className="text-[11px] text-stone-500">Chartered Engineer · M.E. Structure · FIV</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-xs hover:bg-stone-100/60 transition-colors">
            <Compass className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-stone-900 uppercase tracking-wider">Ar. Vipul Verma</div>
              <div className="text-[11px] text-stone-500">B.Arch · M.H.S. (Belgium)</div>
            </div>
          </div>

          <div className="p-2 rounded-xs hover:bg-stone-100/60 transition-colors">
            <div className="font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>ADA Compliance</span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.2 rounded-xs font-bold">100%</span>
            </div>
            <div className="text-[11px] text-stone-500">Ajmer Byelaws &amp; Stability Certifications</div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xs hover:bg-stone-100/60 transition-colors">
            <div>
              <div className="font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1 text-amber-900">
                <PhoneCall className="w-3 h-3" />
                <span>Direct Studio Line</span>
              </div>
              <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="text-[11px] text-stone-800 font-medium hover:underline">
                {BUSINESS_INFO.phones[0].display}
              </a>
            </div>
            <a
              href="#selected-projects"
              className="hidden sm:inline-flex items-center text-stone-400 hover:text-stone-900 p-1"
              aria-label="Scroll to selected projects"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


