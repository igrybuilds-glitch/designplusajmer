import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Discipline {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  standards: string[];
  route: string;
}

interface EditorialServicesExhibitionProps {
  onOpenConsultation?: () => void;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'architecture',
    number: '01',
    title: 'Architectural Design',
    category: 'Spatial Planning & Form',
    description: 'Bespoke residential villas, commercial complexes, and hospitality architecture designed for tropical climate optimization, spatial fluidity, and timeless aesthetic restraint.',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern minimalist luxury villa architecture',
    standards: ['Climate-Responsive Passive Design', 'Vastu & Spatial Zoning Integration', '3D Photorealistic Visualization'],
    route: '/services/architectural-design'
  },
  {
    id: 'structural',
    number: '02',
    title: 'Structural Engineering',
    category: 'RCC & Steel Calculations',
    description: 'Rigorous finite element analysis (FEA), seismic-resistant RCC frames, long-span steel trusses, and foundation engineering certified by Chartered Structural Engineers.',
    imageSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Structural engineering blueprints and construction framework',
    standards: ['IS 456 / IS 1893 Seismic Compliance', 'Staad Pro & ETABS Simulation', 'Detailed Bar Bending Schedule (BBS)'],
    route: '/services/structural-engineering'
  },
  {
    id: 'interiors',
    number: '03',
    title: 'Interior Architecture',
    category: 'Millwork & Detailing',
    description: 'Seamless joinery, architectural lighting design, custom stone cladding, and acoustic spatial planning executed with exacting craftsmanship and material honesty.',
    imageSrc: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luxurious minimalist interior architecture and lighting',
    standards: ['Custom Architectural Millwork', 'Lighting Lux Level Calculations', 'Sustainable Material Palettes'],
    route: '/services/interior-design'
  },
  {
    id: 'survey',
    number: '04',
    title: 'Surveying & Geotechnics',
    category: 'Site Assessment',
    description: 'High-precision DGPS mapping, total station contour surveys, soil bearing capacity testing, and borehole logging for foundation safety.',
    imageSrc: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Land surveying and geotechnical soil investigation',
    standards: ['Digital Total Station Contouring', 'Soil Bearing Capacity Testing', 'Boundary & Cadastral Verification'],
    route: '/services/survey-services'
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Turnkey Construction & PMC',
    category: 'Execution & Quality',
    description: 'End-to-end civil execution, strict material grade auditing (M25/M30 concrete mixes), billing reconciliation, and timeline adherence under expert supervision.',
    imageSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Construction site project management and quality supervision',
    standards: ['Non-Destructive Testing (UPV/Rebound)', 'M25/M30 Concrete Grade Assurance', 'Milestone-Based Billing Audits'],
    route: '/project-management'
  },
  {
    id: 'planning',
    number: '06',
    title: 'Statutory Consultancy',
    category: 'Approvals & Liaison',
    description: 'Complete architectural liaison, municipal sanction drawings, and building approval document processing through the Ajmer Development Authority (ADA).',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Architectural blueprints and municipal compliance documentation',
    standards: ['ADA Building Byelaws Compliance', 'Sanction Drawing Preparation', 'Land-Use & Conversion Liaison'],
    route: '/services/planning'
  }
];

export function EditorialServicesExhibition({ onOpenConsultation }: EditorialServicesExhibitionProps) {
  const [selectedId, setSelectedId] = useState<string>('architecture');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const filteredDisciplines = DISCIPLINES.filter(d => {
    if (filterCategory === 'all') return true;
    return d.category.toLowerCase().includes(filterCategory.toLowerCase());
  });

  const activeDiscipline = DISCIPLINES.find(d => d.id === selectedId) || DISCIPLINES[0];

  return (
    <section 
      id="services-exhibition" 
      className="relative text-[#F4F0E8] bg-transparent py-20 sm:py-28"
      aria-label="Design Plus Disciplines Section"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Giant Serif Headline on Top */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#B86B38]">
            <span className="w-2 h-2 rounded-full bg-[#B86B38]" />
            <span>MULTIDISCIPLINARY PRACTICE</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase text-white leading-[1.05]">
            WHAT WE <br />
            <span className="text-[#B86B38]">DO.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/85 font-sans font-light max-w-2xl leading-relaxed">
            House designs, building plans, structural safety checks, interiors and construction support — everything your project needs, in Ajmer and across Rajasthan.
          </p>
        </div>

        {/* 3. Filter Pills Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono uppercase text-[#F4F0E8]/60 mr-2">Filter By:</span>
          {[
            { label: 'All Disciplines', value: 'all' },
            { label: 'Structural', value: 'Structural' },
            { label: 'Infrastructure', value: 'Civil' },
            { label: 'Interior', value: 'Spatial' },
            { label: 'Geotechnical', value: 'Site' },
            { label: 'Statutory', value: 'Approvals' }
          ].map(pill => {
            const isSelected = filterCategory === pill.value || (pill.value === 'all' && filterCategory === 'all');
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => setFilterCategory(pill.value)}
                className={`rounded-full px-4 py-2 text-xs font-sans font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#B86B38] text-white shadow-md'
                    : 'bg-black/60 text-[#F4F0E8]/85 border border-white/20 hover:border-[#B86B38]'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* 2. Clean 3-Column Grid of Discipline Cards with Scroll-Reveal Animation */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisciplines.map((discipline, index) => {
            const isSelected = discipline.id === selectedId;
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const cardStyle = prefersReduced
              ? {}
              : {
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0px)' : 'translateY(32px)',
                  transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 100}ms`
                };

            return (
              <div
                key={discipline.id}
                onClick={() => setSelectedId(discipline.id)}
                style={cardStyle}
                className={`group bg-black/70 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#B86B38] ring-2 ring-[#B86B38]/40 shadow-xl'
                    : 'border-white/20 hover:border-white/40 shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#B86B38] font-bold">{discipline.number}</span>
                    <span className="text-[#F4F0E8]/60 uppercase">{discipline.category}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-white group-hover:text-[#B86B38] transition-colors">
                    {discipline.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4F0E8]/75 font-sans font-light leading-relaxed">
                    {discipline.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/15 flex items-center justify-between text-xs font-medium">
                  <span className="text-[#B86B38]">View Specifications &rarr;</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#B86B38]' : 'bg-white/30'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Detail Panel Below */}
        <div className="bg-black/75 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-[#F4F0E8]">
          
          {/* Left Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black h-72 sm:h-96 relative border border-white/15">
            <img
              src={activeDiscipline.imageSrc}
              alt={activeDiscipline.imageAlt}
              className="w-full h-full object-cover img-editorial"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-white border border-white/15">
              {activeDiscipline.number} · {activeDiscipline.title}
            </div>
          </div>

          {/* Right Description & Standards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B86B38] font-semibold">
                {activeDiscipline.category}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                {activeDiscipline.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#F4F0E8]/85 font-sans font-light leading-relaxed">
              {activeDiscipline.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/60">Key Standards &amp; Vetting</div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#F4F0E8]/90">
                {activeDiscipline.standards.map((std, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B38] shrink-0" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to={activeDiscipline.route}
                className="btn-primary py-3 px-6 text-xs sm:text-sm bg-[#B86B38] hover:bg-[#a65d37] text-white"
              >
                <span>Explore Discipline</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="btn-secondary text-[#F4F0E8] border-white/60 hover:border-white text-xs sm:text-sm"
                >
                  Consult an Expert
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
