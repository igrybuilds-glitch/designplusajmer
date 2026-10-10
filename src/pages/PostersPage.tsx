import { Link } from 'react-router-dom';
import {
  Landmark,
  HardHat,
  Flame,
  Building2,
  DraftingCompass,
  BookOpen,
  Layers,
  Compass,
  ArrowRight,
  ArrowUpRight,
  Images,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { POSTER_CATEGORIES } from '../data/posters';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  HardHat,
  Flame,
  Building2,
  DraftingCompass,
  BookOpen,
  Layers,
  Compass,
};

const SITE_URL = 'https://www.designplusajmer.co.in';

export function PostersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Design Knowledge Posters | Design Plus Ajmer',
    description:
      'Free educational posters and infographics on structural engineering, construction tips, fire safety, high-rise buildings, architecture and general awareness by Design Plus Architects, Ajmer.',
    url: `${SITE_URL}/posters/`,
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Structural Consultants',
      url: SITE_URL,
    },
    hasPart: POSTER_CATEGORIES.map((c) => ({
      '@type': 'ImageGallery',
      name: `${c.label} Posters`,
      url: `${SITE_URL}/posters/${c.slug}/`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <SEOHead
        title="Knowledge Posters & Infographics | Design Plus Ajmer"
        description="Free educational posters by Design Plus Architects Ajmer — structural engineering basics, construction tips, fire safety norms (NBC 2016), high-rise rules, architecture ideas and building awareness."
        keywords="architecture posters india, structural engineering infographics, construction tips posters, fire safety posters india, NBC 2016 posters, house building checklist india"
        canonical="/posters/"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#141412] text-[#F4F0E8]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(184,107,56,0.5), transparent 55%), radial-gradient(circle at 80% 80%, rgba(184,107,56,0.3), transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-center gap-2 text-[#B86B38] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <Images className="w-4 h-4" />
            <span>Design Knowledge Library</span>
          </div>
          <h1 className="font-editorial text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Posters that teach you to build better.
          </h1>
          <p className="mt-6 text-[#F4F0E8]/75 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
            Free educational posters and infographics from our studio — structural
            engineering basics, site checklists, fire-safety norms, high-rise rules
            and design ideas. Made for homeowners, site engineers and students
            across India. Download them, print them, share them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest">
            {POSTER_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/posters/${c.slug}`}
                className="border border-white/20 hover:border-[#B86B38] hover:text-[#B86B38] transition-colors px-4 py-2 rounded-full"
              >
                {c.shortLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B86B38] mb-3">
              Browse by topic
            </p>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-stone-900">
              Eight poster collections
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTER_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.slug}
                to={`/posters/${cat.slug}`}
                className="group bg-white border border-stone-200 rounded-2xl p-8 hover:border-[#B86B38]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B86B38]/10 border border-[#B86B38]/25 flex items-center justify-center text-[#B86B38] mb-6 group-hover:bg-[#B86B38] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-stone-900 mb-3">
                  {cat.label}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-sans font-light flex-1">
                  {cat.seoDescription}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B86B38]">
                  <span>Explore posters</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why posters */}
        <div className="mt-20 bg-[#141412] text-[#F4F0E8] rounded-3xl p-8 md:p-14">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B86B38] mb-4">
              Why we publish these
            </p>
            <h2 className="font-editorial text-2xl md:text-4xl font-bold leading-snug">
              An informed client gets a better building.
            </h2>
            <p className="mt-5 text-[#F4F0E8]/75 leading-relaxed font-sans font-light">
              Most construction disputes in India come from the same root cause:
              the owner never saw a simple explanation of what should happen on
              their site. These posters close that gap — one topic, one page,
              zero jargon. They are the same checklists and explainers our
              engineers use on real projects across Rajasthan, published free
              because a knowledgeable homeowner makes every architect's job easier.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#B86B38] hover:bg-[#a65d37] text-white px-6 py-3 text-xs font-medium uppercase tracking-wider transition-colors rounded"
            >
              <span>Discuss your project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
