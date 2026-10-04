import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Download } from 'lucide-react';
import { BUSINESS_INFO, LEADERSHIP, SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { BLOG_CATEGORIES } from '../data/blogData';

export function Footer() {
  return (
    <footer id="main-footer" className="relative bg-[#141412] text-[#F4F0E8] pt-16 pb-12 border-t border-white/15 overflow-hidden transition-colors">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: 5 balanced columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/15">
          
          {/* Column 1: Studio Identity & Leadership */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-editorial text-2xl tracking-widest text-white font-bold uppercase block">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#B86B38] font-sans uppercase block mt-0.5 font-semibold">
                Architecture &amp; Structural Engineering
              </span>
            </Link>

            <p className="text-xs text-[#F4F0E8]/80 leading-relaxed font-sans font-normal">
              Founded in Ajmer, Rajasthan, Design Plus delivers an integrated discipline of Chartered Structural Engineering and high-craft architectural design for custom residences, commercial complexes, and public spaces.
            </p>

            <div className="pt-2 border-t border-white/15">
              <div className="text-[10px] uppercase tracking-widest text-[#F4F0E8]/60 font-semibold mb-0.5">Practice Leadership</div>
              <div className="text-xs text-white font-semibold">{LEADERSHIP.name}</div>
              <div className="text-[11px] text-[#F4F0E8]/70">{LEADERSHIP.qualification}</div>
            </div>

            {/* Social Links */}
            <div className="pt-1 flex items-center space-x-4 text-[11px] font-mono tracking-wider uppercase">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F0E8]/80 hover:text-[#B86B38] transition-colors flex items-center gap-1"
                aria-label="Design Plus Instagram Profile"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F0E8]/80 hover:text-[#B86B38] transition-colors flex items-center gap-1"
                aria-label="Design Plus Facebook Page"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Architectural Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold border-b border-white/15 pb-2">
              Services &amp; PMC
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F4F0E8]/80">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-[#B86B38] transition-colors block">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/project-management" className="text-[#B86B38] hover:text-[#c47745] font-semibold font-mono text-[11px]">
                  Turnkey PMC &amp; Execution &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio & Works */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold border-b border-white/15 pb-2">
              Works &amp; Portfolio
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F4F0E8]/80">
              <li><Link to="/projects/residential" className="hover:text-[#B86B38] transition-colors block">Residential Architecture</Link></li>
              <li><Link to="/projects/commercial" className="hover:text-[#B86B38] transition-colors block">Commercial &amp; Retail</Link></li>
              <li><Link to="/projects/interior" className="hover:text-[#B86B38] transition-colors block">Interior Architecture</Link></li>
              <li><Link to="/projects/structural" className="hover:text-[#B86B38] transition-colors block">Chartered Structural Works</Link></li>
              <li><Link to="/projects/concept" className="hover:text-[#B86B38] transition-colors block">Concept &amp; Climate Studies</Link></li>
              <li className="pt-1">
                <Link to="/projects" className="text-[#B86B38] hover:text-[#c47745] font-semibold font-mono text-[11px]">
                  Explore 900+ Archive &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Journal & Insights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold border-b border-white/15 pb-2">
              Blog &amp; Guides
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F4F0E8]/80">
              {BLOG_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/blog?category=${cat.slug}`} className="hover:text-[#B86B38] transition-colors block">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/blog" className="text-[#B86B38] hover:text-[#c47745] font-semibold font-mono text-[11px]">
                  Read All Articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Studio Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold border-b border-white/15 pb-2">
              Studio &amp; Office
            </h4>
            <div className="space-y-2 text-xs font-sans text-[#F4F0E8]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B86B38] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B86B38] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {BUSINESS_INFO.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.raw}`} className="block hover:text-[#B86B38] transition-colors font-mono text-[11px]">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B86B38] shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#B86B38] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-[#B86B38] hover:bg-[#a65d37] text-white px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors rounded shadow-md"
              >
                <span>Visit Studio Office</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F4F0E8]/60">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name} Architecture &amp; Structural Engineering Studio. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/vastu" className="hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors">
              Vastu Design
            </Link>
            <a href="/sitemap.xml" className="hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors">
              Sitemap
            </a>
            <Link to="/architect-fees-ajmer" className="hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors">
              Fee Guide
            </Link>
            <Link to="/structural-drawing-ajmer" className="hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors font-semibold">
              Structural Drawings
            </Link>
            <Link to="/admin" className="inline-flex items-center gap-1.5 hover:text-[#B86B38] underline decoration-white/30 underline-offset-4 transition-colors">
              Studio Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
