import { Link } from 'react-router-dom';
import { ArrowUpRight, RefreshCw } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface StatItem {
  stat: string;
  source: string;
  date: string;
}

const INDUSTRY_STATS: StatItem[] = [
  {
    stat: "India's construction market is expected to reach INR 25.31 trillion in 2026, growing 11.2% year-on-year.",
    source: 'ResearchAndMarkets — India Construction Industry Databook, Q1 2026',
    date: 'February 2026'
  },
  {
    stat: 'Indian construction grew at a 14.2% CAGR during 2021–2025, and is forecast to grow at an 8.8% CAGR during 2026–2030, reaching roughly INR 39.10 trillion by 2030.',
    source: 'ResearchAndMarkets — India Construction Industry Databook, Q1 2026',
    date: 'February 2026'
  },
  {
    stat: "India's residential construction market is estimated at USD 286.38 billion in 2026, projected to reach USD 396.06 billion by 2031 at a 6.7% CAGR.",
    source: 'GII Research — India Residential Construction Market report',
    date: '2026'
  },
  {
    stat: 'Revenue growth of Indian construction players is expected at 6–8% in 2026–27, after two muted years.',
    source: 'ICRA ratings report',
    date: 'March 2026'
  },
  {
    stat: '6.05 lakh families in Rajasthan built new houses or expanded existing ones in a single year — 6.59% of the 98.54 lakh houses built nationally, placing Rajasthan 10th among states.',
    source: 'National Statistical Office study on housing (FY 2023–24; survey July–December 2025)',
    date: '2025'
  },
  {
    stat: 'In Rajasthan, ~75% of home-construction cost goes to building materials (bricks, cement, steel, stone), 22.5% to labour, and 2.5% to other expenses.',
    source: 'National Statistical Office housing study, via Bhaskar English',
    date: '2025'
  },
  {
    stat: 'Home-construction costs in Rajasthan have nearly doubled in five years.',
    source: 'National Statistical Office housing study, via Bhaskar English',
    date: '2025'
  },
  {
    stat: '20.4% of housing construction cost in Rajasthan is financed through bank or institutional loans — higher than the 17% national average.',
    source: 'National Statistical Office housing study, via Bhaskar English',
    date: '2025'
  },
  {
    stat: 'Under PMAY (Urban), 79,027 houses were sanctioned in Rajasthan over two years; PMAY (Urban) 2.0 approved another 48,619 houses with Rs 211 crore in central assistance.',
    source: 'Rajasthan Local Self-Government Department',
    date: '2025–26'
  },
  {
    stat: 'Rajasthan allocated Rs 15,122 crore to urban governance — master plans, GIS-based planning for 115 new towns, and transit-oriented development corridors.',
    source: 'Economic Times Government',
    date: '2026'
  }
];

const STUDIO_STATS: StatItem[] = [
  {
    stat: 'Projects designed and engineered across Rajasthan — homes, commercial buildings, hotels, interiors and infrastructure.',
    source: 'Design Plus studio records',
    date: '2026'
  },
  {
    stat: '20+ years of engineering heritage behind every drawing set, led by a Chartered Engineer (M.E. Structure, M.I.E., FIV).',
    source: 'Design Plus studio records',
    date: '2026'
  },
  {
    stat: '8 cities served: Ajmer, Jaipur, Pushkar, Udaipur, Beawar, Kishangarh, Nasirabad and Kekri.',
    source: 'Design Plus studio records',
    date: '2026'
  },
  {
    stat: '13 service disciplines under one roof — architectural design, structural engineering, interiors, PMC, surveys and more.',
    source: 'Design Plus studio records',
    date: '2026'
  }
];

interface ArchitectureStatisticsPageProps {
  onOpenConsultation?: () => void;
}

export function ArchitectureStatisticsPage({ onOpenConsultation }: ArchitectureStatisticsPageProps) {
  return (
    <main id="statistics-page" className="pt-28 pb-20">
      <SEOHead
        title="Architecture & Construction Statistics India 2026 | Design Plus"
        description="Key architecture and construction statistics for India and Rajasthan in 2026 — market size, housing data, cost breakdowns — plus Design Plus studio's own numbers. Sourced and updated quarterly."
        keywords="architecture statistics india 2026, construction industry statistics india, rajasthan housing statistics, construction cost rajasthan, india construction market size"
        canonical="https://www.designplusajmer.co.in/architecture-statistics-india-2026"
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold mb-3">
          Data &amp; Research
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl text-stone-950 font-medium mb-4">
          Architecture &amp; construction statistics, India 2026
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
          The numbers shaping every design decision we make — national market data,
          Rajasthan housing figures, and our own studio numbers, each with its source.
          One stat per line, easy to quote.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-stone-500">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Last updated September 2026 · Updated quarterly</span>
        </div>
      </section>

      {/* Industry stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-editorial text-3xl text-stone-950 font-medium mb-8">
          India &amp; Rajasthan: industry statistics
        </h2>
        <ol className="space-y-0 border-t border-stone-200">
          {INDUSTRY_STATS.map((item, i) => (
            <li key={i} className="border-b border-stone-200 py-6">
              <p className="font-editorial text-xl sm:text-2xl text-stone-900 leading-snug mb-3">
                {item.stat}
              </p>
              <p className="text-xs text-stone-500">
                Source: {item.source} · {item.date}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Studio's own numbers */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-stone-950 text-stone-100 p-8 sm:p-12 border border-stone-800">
          <div className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold mb-3">
            Design Plus by the numbers
          </div>
          <h2 className="font-editorial text-3xl text-white font-medium mb-8">
            Our numbers, published nowhere else
          </h2>
          <ol className="space-y-0 border-t border-stone-800">
            {STUDIO_STATS.map((item, i) => (
              <li key={i} className="border-b border-stone-800 py-6">
                <p className="font-editorial text-xl sm:text-2xl text-stone-100 leading-snug mb-3">
                  {item.stat}
                </p>
                <p className="text-xs text-stone-500">
                  Source: {item.source} · {item.date}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Internal links to money pages */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-editorial text-2xl text-stone-950 font-medium mb-6">
          What these numbers mean for your project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/services"
            className="group p-6 bg-white border border-stone-200 hover:border-stone-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Services
              </span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
            <p className="font-editorial text-lg text-stone-950">
              13 disciplines, one accountable studio
            </p>
          </Link>
          <Link
            to="/architect-fees-ajmer"
            className="group p-6 bg-white border border-stone-200 hover:border-stone-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Fees
              </span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
            <p className="font-editorial text-lg text-stone-950">
              What an architect costs in Ajmer
            </p>
          </Link>
          <button
            onClick={onOpenConsultation}
            className="group p-6 bg-stone-950 text-left border border-stone-800 hover:bg-stone-900 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                Consult
              </span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
            </div>
            <p className="font-editorial text-lg text-white">
              Book a site consultation
            </p>
          </button>
        </div>
      </section>
    </main>
  );
}
