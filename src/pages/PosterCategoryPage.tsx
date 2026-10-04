import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Landmark,
  HardHat,
  Flame,
  Building2,
  DraftingCompass,
  BookOpen,
  ChevronRight,
  Download,
  Share2,
  ArrowRight,
  BellRing,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { POSTER_CATEGORIES, getPosterCategory } from '../data/posters';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  HardHat,
  Flame,
  Building2,
  DraftingCompass,
  BookOpen,
};

const SITE_URL = 'https://www.designplusajmer.co.in';

export function PosterCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = category ? getPosterCategory(category) : undefined;

  if (!cat) {
    return <Navigate to="/posters" replace />;
  }

  const Icon = ICONS[cat.icon] || BookOpen;
  const related = POSTER_CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 3);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: `${cat.label} Posters | Design Plus Ajmer`,
      description: cat.seoDescription,
      url: `${SITE_URL}/posters/${cat.slug}/`,
      publisher: {
        '@type': 'Organization',
        name: 'Design Plus Architects & Structural Consultants',
        url: SITE_URL,
      },
      about: cat.primaryKeyword,
      keywords: [cat.primaryKeyword, ...cat.secondaryKeywords].join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Posters', item: `${SITE_URL}/posters/` },
        { '@type': 'ListItem', position: 3, name: cat.label, item: `${SITE_URL}/posters/${cat.slug}/` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <SEOHead
        title={cat.seoTitle}
        description={cat.seoDescription}
        keywords={[cat.primaryKeyword, ...cat.secondaryKeywords].join(', ')}
        canonical={`/posters/${cat.slug}/`}
        schema={schema}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500">
          <li>
            <Link to="/" className="hover:text-[#B86B38]">Home</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li>
            <Link to="/posters" className="hover:text-[#B86B38]">Posters</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-stone-800">{cat.label}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#B86B38]/10 border border-[#B86B38]/25 flex items-center justify-center text-[#B86B38]">
            <Icon className="w-7 h-7" />
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B86B38]">
            Poster Collection
          </p>
        </div>
        <h1 className="font-editorial text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
          {cat.label} Posters
        </h1>
        <p className="mt-4 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl font-sans font-light">
          {cat.seoDescription}
        </p>
      </header>

      {/* Educational intro (indexable copy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-8 md:p-10 max-w-4xl">
          {cat.intro.map((para, i) => (
            <p
              key={i}
              className={`text-stone-700 leading-relaxed font-sans font-light ${i > 0 ? 'mt-5' : ''} ${i === 0 ? 'text-lg' : 'text-[15px]'}`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Poster grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-editorial text-2xl md:text-3xl font-bold text-stone-900 mb-8">
          Posters in this collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.upcomingPosters.map((poster, i) => (
            <article
              key={i}
              className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-[#B86B38]/60 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Poster visual placeholder — replaced by the real poster image on upload */}
              <div className="relative h-64 bg-gradient-to-br from-[#1a1917] via-[#2a241d] to-[#141412] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 20%, rgba(184,107,56,0.45), transparent 55%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: 'auto, 24px 24px, 24px 24px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Icon className="w-10 h-10 text-[#B86B38] mb-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B86B38] mb-2">
                    {cat.shortLabel} · Poster {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-editorial text-lg font-bold text-[#F4F0E8] leading-snug">
                    {poster.title}
                  </span>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.18em] bg-amber-500 text-stone-950 px-3 py-1 rounded-full">
                  Coming soon
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-editorial text-lg font-bold text-stone-900 leading-snug mb-2">
                  {poster.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-sans font-light flex-1">
                  {poster.blurb}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <button
                    disabled
                    title="Download available once the poster is published"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-400 cursor-not-allowed"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                  <button
                    disabled
                    title="Share available once the poster is published"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-400 cursor-not-allowed"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notify strip */}
        <div className="mt-10 bg-[#141412] text-[#F4F0E8] rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#B86B38]/15 border border-[#B86B38]/30 flex items-center justify-center text-[#B86B38] shrink-0">
            <BellRing className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-editorial text-xl font-bold">Posters are being published right now.</h3>
            <p className="mt-1 text-sm text-[#F4F0E8]/70 font-sans font-light">
              Our studio is uploading the full {cat.label.toLowerCase()} poster set. Want a
              specific topic covered? Tell us on WhatsApp and we'll prioritise it.
            </p>
          </div>
          <a
            href="https://wa.me/917976453090?text=Hi%20Design%20Plus%2C%20please%20notify%20me%20when%20the%20new%20posters%20are%20live."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B86B38] hover:bg-[#a65d37] text-white px-6 py-3 text-xs font-medium uppercase tracking-wider transition-colors rounded shrink-0"
          >
            <span>Notify me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Related collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-editorial text-2xl font-bold text-stone-900 mb-6">
          Explore other collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((r) => {
            const RIcon = ICONS[r.icon] || BookOpen;
            return (
              <Link
                key={r.slug}
                to={`/posters/${r.slug}`}
                className="group flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-[#B86B38]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#B86B38]/10 flex items-center justify-center text-[#B86B38] shrink-0">
                  <RIcon className="w-5 h-5" />
                </div>
                <span className="font-editorial font-bold text-stone-900 group-hover:text-[#B86B38] transition-colors">
                  {r.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
