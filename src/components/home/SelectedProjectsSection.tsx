import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Maximize2, ShieldCheck, Lightbulb, Award, Sparkles, Building, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { getFeaturedProjects } from '../../data/projectsData';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

function AnimatedNumber({ end, suffix = '', prefix = '', duration = 2000, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentVal = easeProgress * end;
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  {
    id: 'experience',
    value: 20,
    suffix: '+',
    label: 'Years Experience',
    subtext: 'Principal Architecture & Design Leadership',
    icon: Award,
    highlight: 'Verified Expertise'
  },
  {
    id: 'projects',
    value: 900,
    suffix: '+',
    label: 'Projects Delivered',
    subtext: 'Bespoke Villas, Estates & Commercial Works',
    icon: Building,
    highlight: 'Regional Portfolio'
  },
  {
    id: 'sanctions',
    value: 100,
    suffix: '%',
    label: 'ADA Sanction Record',
    subtext: 'Ajmer Byelaws & Stability Certifications',
    icon: ShieldCheck,
    highlight: 'Zero Regulatory Delays'
  },
  {
    id: 'satisfaction',
    value: 4.9,
    suffix: '★',
    decimals: 1,
    label: 'Client Satisfaction',
    subtext: 'Across Ajmer, Pushkar & Rajasthan',
    icon: Sparkles,
    highlight: 'Top Rated Studio'
  }
];

export function SelectedProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section 
      id="selected-projects" 
      aria-labelledby="selected-works-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
      className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-stone-200/90 relative overflow-hidden"
    >
      
      {/* Elegant Clean Background Architecture Grid & Soft Ambient Light */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute -top-24 left-1/3 w-[36rem] h-[36rem] bg-amber-100/35 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 right-10 w-[28rem] h-[28rem] bg-stone-200/40 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Schema.org Structured Data for Portfolio ItemList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Design Plus Featured Architectural Works & Projects",
            "description": "Curated selection of luxury villas, residential residences, and commercial architecture engineered in Ajmer and Rajasthan.",
            "itemListElement": featuredProjects.map((p, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": p.title,
                "headline": p.title,
                "description": p.summary,
                "image": p.heroImage,
                "creator": {
                  "@type": "Organization",
                  "name": "Design Plus Architecture & Structural Studio",
                  "location": "Ajmer, Rajasthan"
                },
                "locationCreated": {
                  "@type": "Place",
                  "name": p.location
                }
              }
            }))
          })
        }} />

        {/* Elegant Clean Numeric Statistics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 bg-white/95 backdrop-blur-md text-stone-900 p-6 sm:p-8 md:p-10 rounded-xs border border-stone-200/90 shadow-sm relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-amber-50/70 via-transparent to-transparent pointer-events-none" />

          {/* Top Label & SEO Category */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-amber-900 font-semibold font-mono">
                Chartered Practice Performance &amp; Track Record
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
              <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
              <span>Ajmer &amp; Rajasthan Architectural Engineering</span>
            </div>
          </div>

          {/* Grid of Clean Animated Numbers */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS_DATA.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-[#FAF9F6] hover:bg-white p-5 rounded-xs border border-stone-200/80 hover:border-amber-600/40 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-semibold px-2 py-0.5 bg-amber-100/80 rounded-xs border border-amber-200">
                        {stat.highlight}
                      </span>
                      <Icon className="w-4 h-4 text-stone-400 group-hover:text-amber-700 transition-colors" />
                    </div>

                    {/* Big Clean Number */}
                    <div className="font-editorial text-4xl sm:text-5xl font-medium text-stone-950 tracking-tight flex items-baseline gap-0.5 my-1 group-hover:text-amber-900 transition-colors">
                      <AnimatedNumber 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        decimals={stat.decimals || 0}
                        duration={2200}
                      />
                    </div>

                    <div className="font-sans font-semibold text-sm text-stone-900 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 pt-2 border-t border-stone-200/70 leading-relaxed font-sans">
                    {stat.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
              02 / Selected Works
            </div>
            <h2 
              id="selected-works-heading" 
              itemProp="name" 
              className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal"
            >
              Architecture &amp; Built Form in Rajasthan
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm hidden md:block">
              A curated selection of residential villas, commercial pavilions, and structural engineering commissions across Ajmer and Rajasthan.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 transition-colors shrink-0"
              title="Explore all architectural and structural projects by Design Plus"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Grid with SEO Microdata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, idx) => {
            const projectUrl = `/projects/${project.category}/${project.slug}`;
            const isConcept = project.projectType === 'concept';

            return (
              <article
                key={project.slug}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/CreativeWork"
                className={`group flex flex-col bg-white/80 p-4 sm:p-5 rounded-xs border border-stone-200/80 shadow-2xs hover:shadow-md transition-all ${idx % 2 === 1 ? 'md:translate-y-8' : ''}`}
              >
                {/* Image Container */}
                <Link
                  to={projectUrl}
                  itemProp="url"
                  className="relative aspect-16/10 overflow-hidden bg-stone-100 border border-stone-200 block mb-4"
                  aria-label={`View architectural project details for ${project.title}`}
                >
                  <img
                    itemProp="image"
                    src={project.heroImage}
                    alt={`${project.title} - ${project.categoryLabel} architecture in ${project.location} by Design Plus`}
                    width={1000}
                    height={625}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Category & Type Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-stone-950/85 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium">
                      {project.categoryLabel}
                    </span>
                    {isConcept ? (
                      <span className="bg-amber-900/90 text-amber-100 text-[9px] uppercase tracking-wider px-2 py-1 font-semibold flex items-center gap-1">
                        <Lightbulb className="w-2.5 h-2.5" />
                        <span>Design Study</span>
                      </span>
                    ) : (
                      <span className="bg-stone-900/80 text-stone-200 text-[9px] uppercase tracking-wider px-2 py-1 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                        <span>Commission</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Reveal Action */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-stone-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>

                {/* Meta details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-stone-500 font-sans">
                    <span itemProp="locationCreated" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-stone-400" />
                      {project.builtUpArea || project.area}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {project.year}
                    </span>
                  </div>

                  <h3 itemProp="name" className="font-editorial text-2xl sm:text-3xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium">
                    <Link to={projectUrl}>
                      {project.title}
                    </Link>
                  </h3>

                  <p itemProp="description" className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 text-xs text-stone-700 font-medium">
                    <span className="text-stone-400">Leadership: </span>
                    <span itemProp="author">{project.lead}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-16 text-center pt-8 border-t border-stone-200">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-colors"
          >
            <span>Browse Complete Portfolio &amp; Typologies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

