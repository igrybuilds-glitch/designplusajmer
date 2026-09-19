import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, LEADERSHIP, SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { BLOG_CATEGORIES } from '../data/blogData';

export function Footer() {
  return (
    <footer id="main-footer" className="bg-[#141414] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 5 balanced columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-stone-800/80">
          
          {/* Column 1: Studio Identity & Leadership */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-editorial text-2xl tracking-widest text-stone-100 font-bold uppercase block">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.22em] text-stone-300 font-sans uppercase block mt-0.5">
                Architecture &amp; Structural Engineering
              </span>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed">
              Founded in Ajmer, Rajasthan, Design Plus delivers an integrated discipline of Chartered Structural Engineering and high-craft architectural design for custom residences, commercial complexes, and public spaces.
            </p>

            <div className="pt-2 border-t border-stone-800/60">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-0.5">Practice Leadership</div>
              <div className="text-xs text-stone-200 font-medium">{LEADERSHIP.name}</div>
              <div className="text-[11px] text-stone-400">{LEADERSHIP.qualification}</div>
            </div>

            {/* Social Links */}
            <div className="pt-1 flex items-center space-x-3 text-[11px] tracking-wider uppercase">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1"
                aria-label="Design Plus Instagram Profile"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1"
                aria-label="Design Plus Facebook Page"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.socials.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1"
                aria-label="Design Plus on Justdial"
              >
                <span>Justdial</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Architectural Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/services" className="text-amber-500 hover:text-amber-400 font-medium">
                  All Services Index &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio Typologies */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold">
              Portfolio Typologies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/projects/residential" className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5">
                  Residential Architecture
                </Link>
              </li>
              <li>
                <Link to="/projects/commercial" className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5">
                  Commercial &amp; Corporate
                </Link>
              </li>
              <li>
                <Link to="/projects/interior" className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5">
                  Interior Architecture
                </Link>
              </li>
              <li>
                <Link to="/projects/structural" className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5">
                  Chartered Structural Engineering
                </Link>
              </li>
              <li>
                <Link to="/projects/concept" className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5">
                  Concept &amp; Climate Studies
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/projects" className="text-amber-500 hover:text-amber-400 font-medium">
                  All Selected Works &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Journal & Monograph Archives */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold">
              Journal Archives
            </h4>
            <ul className="space-y-2 text-xs">
              {BLOG_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/blog/${c.slug}`}
                    className="text-stone-400 hover:text-stone-100 transition-colors block py-0.5"
                  >
                    {c.label || c.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/blog" className="text-amber-500 hover:text-amber-400 font-medium">
                  All Journal Articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Regional Locations & Contact */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-2">
                Regional Practice
              </h4>
              <ul className="space-y-1.5 text-xs">
                {LOCATIONS_SERVED.map((loc) => (
                  <li key={loc.slug}>
                    <Link to={`/locations/${loc.slug}`} className="text-stone-400 hover:text-stone-100 transition-colors">
                      {loc.city}, {loc.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-stone-800/60 space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>Ajmer, Rajasthan, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                  className="text-stone-300 hover:text-stone-100 transition-colors"
                >
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-stone-300 hover:text-stone-100 transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-stone-100 px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors border border-stone-700"
              >
                <span>Direct Inquiry</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Design Plus ({BUSINESS_INFO.website}). All rights reserved.
          </div>
          <div className="text-center md:text-right text-[11px] text-stone-400">
            Chartered Engineer Er. Sudhir Soni · M.E. (Structure) · M.I.E. · FIV
          </div>
        </div>

      </div>
    </footer>
  );
}
