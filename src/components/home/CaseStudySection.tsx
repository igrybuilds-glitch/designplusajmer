import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getAllProjects } from '../../data/projectsData';

export function CaseStudySection() {
  const allProjects = getAllProjects();
  const caseStudy = allProjects[0]; // Ana Sagar Lake Residence
  const caseStudyUrl = `/projects/${caseStudy.category}/${caseStudy.slug}`;

  return (
    <section id="case-study" className="py-24 bg-[#FBFBF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
          08 / Featured Architecture Case Study
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal">
              {caseStudy.title}
            </h2>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">
              {caseStudy.categoryLabel} · {caseStudy.location} · {caseStudy.area}
            </div>
          </div>

          <Link
            to={caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 transition-colors"
          >
            <span>Read Complete Case Study & Drawings</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Case Study Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-16/10 bg-stone-200 overflow-hidden border border-stone-200">
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                width={1200}
                height={750}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-stone-950/80 text-white text-[11px] px-3 py-1 uppercase tracking-widest font-mono">
                Built Commission · Ajmer
              </div>
            </div>

            {/* Gallery Mini Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="aspect-16/10 bg-stone-200 overflow-hidden border border-stone-200">
                <img
                  src={caseStudy.gallery[1]}
                  alt="Ana Sagar Residence interior courtyard and illumination"
                  width={600}
                  height={375}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-16/10 bg-stone-200 overflow-hidden border border-stone-200">
                <img
                  src={caseStudy.gallery[2]}
                  alt="Ana Sagar Residence stone detailing and shaded veranda"
                  width={600}
                  height={375}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Narrative Breakdown: Brief, Problem, Approach, Result */}
          <div className="lg:col-span-5 space-y-6 bg-white p-5 sm:p-8 border border-stone-200">
            
            <div>
              <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold mb-1">
                01. The Client Brief
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Design an enduring family villa overlooking Ana Sagar Lake that captures panoramic water and Aravalli mountain views while maintaining thermal tranquility during scorching Rajasthan summer afternoons.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold mb-1">
                02. The Spatial & Thermal Challenge
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold mb-1">
                03. Architectural Approach
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-stone-900 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
                <span>04. Chartered Structural Engineering</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {caseStudy.structuralEngineering}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Distinguishing Spatial Features:
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5">
                {caseStudy.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to={caseStudyUrl}
                className="w-full text-center block bg-stone-950 text-[#FBFBF9] py-3 text-xs tracking-wider uppercase font-semibold hover:bg-stone-800 transition-colors"
              >
                Inspect Architectural Drawings &amp; Details
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
