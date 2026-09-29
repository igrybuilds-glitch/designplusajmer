import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import productsData from '../data/products-categorized.json';
import { ProductCheckoutModal } from '../components/products/ProductCheckoutModal';

interface ProductItem {
  category: string;
  imageUrl: string;
  name: string;
  price?: string;
}

interface ProductCategorySeoPageProps {
  onOpenConsultation?: () => void;
}

const CATEGORY_MAP: Record<string, { title: string; original: string; description: string }> = {
  'tensile-structures-shades-ajmer': {
    title: 'Tensile Structures & Shades in Ajmer, Rajasthan',
    original: 'Tensile Structures & Shades',
    description: 'High-tenacity tensile membrane structures, car parking shades, and architectural canopies in Ajmer, Rajasthan. Engineered for extreme weather durability and architectural elegance.'
  },
  'construction-chemicals-ajmer': {
    title: 'Construction Chemicals in Ajmer, Rajasthan',
    original: 'Construction Chemicals',
    description: 'Advanced construction chemicals, waterproofing liquid membranes, epoxy flooring, and rising damp treatment solutions in Ajmer, Rajasthan by Design Plus.'
  },
  'steel-reinforcement-ajmer': {
    title: 'Steel & Reinforcement in Ajmer, Rajasthan',
    original: 'Steel & Reinforcement',
    description: 'High-tensile steel reinforcement meshes, structural sections, FRP rebars, and mechanical couplers in Ajmer, Rajasthan for seismic-resistant buildings.'
  },
  'survey-testing-instruments-ajmer': {
    title: 'Survey & Testing Instruments in Ajmer, Rajasthan',
    original: 'Survey & Testing Instruments',
    description: 'Precision total stations, UAV drone photogrammetry, UPV concrete testers, and rebound hammers in Ajmer, Rajasthan for certified structural audits.'
  },
  'water-solutions-ajmer': {
    title: 'Water Solutions in Ajmer, Rajasthan',
    original: 'Water Solutions',
    description: 'Submersible pumps, TAC water conditioners, and borehole water treatment systems in Ajmer, Rajasthan engineered for residential and commercial assets.'
  },
  'panels-prefab-ajmer': {
    title: 'Panels & Prefab in Ajmer, Rajasthan',
    original: 'Panels & Prefab',
    description: 'Minimalist TV wall panels, modular steel prefabrication, and PEB structural warehouse systems in Ajmer, Rajasthan designed with precision craftsmanship.'
  },
  'concrete-masonry-ajmer': {
    title: 'Concrete & Masonry in Ajmer, Rajasthan',
    original: 'Concrete & Masonry',
    description: 'AAC autoclaved aerated concrete blocks, synthetic fibers, and cementitious waterproofing compounds in Ajmer, Rajasthan for durable masonry construction.'
  },
  'interior-furniture-ajmer': {
    title: 'Interior & Furniture in Ajmer, Rajasthan',
    original: 'Interior & Furniture',
    description: 'Custom TV unit designs, contemporary floating consoles, and bespoke architectural millwork in Ajmer, Rajasthan by expert interior designers.'
  }
};

export function ProductCategorySeoPage({ onOpenConsultation }: ProductCategorySeoPageProps) {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const catInfo = CATEGORY_MAP[categorySlug || ''] || CATEGORY_MAP['tensile-structures-shades-ajmer'];
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState<ProductItem | null>(null);

  const products = productsData as ProductItem[];
  const categoryProducts = useMemo(() => {
    return products.filter(p => p.category.toLowerCase() === catInfo.original.toLowerCase());
  }, [products, catInfo.original]);

  const relatedCategories = Object.entries(CATEGORY_MAP)
    .filter(([slug]) => slug !== categorySlug)
    .slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CollectionPage'],
    name: `${catInfo.title} | Design Plus Ajmer`,
    description: catInfo.description,
    url: `https://designplusajmer.in/products/${categorySlug}`,
    areaServed: {
      '@type': 'State',
      name: 'Rajasthan, India'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305004',
      addressCountry: 'IN'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryProducts.map((prod, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Product',
          name: prod.name,
          image: prod.imageUrl,
          offers: {
            '@type': 'Offer',
            price: prod.price || 'Price on request',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
          }
        }
      }))
    }
  };

  return (
    <main id="product-category-seo-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-28 pb-20">
      <SEOHead
        title={`${catInfo.title} | Design Plus Ajmer`}
        description={catInfo.description}
        keywords={`${catInfo.title.toLowerCase()}, building materials ajmer, design plus catalog`}
        canonical={`https://designplusajmer.in/products/${categorySlug}`}
        schema={schema}
      />

      {/* Breadcrumb & Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Products</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#141414]/5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#141414]">
            <span className="w-2 h-2 rounded-full bg-[#C86635]" />
            <span>CERTIFIED INVENTORY · AJMER &amp; RAJASTHAN</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase text-[#141414]">
            {catInfo.title}
          </h1>

          <p className="text-base sm:text-lg text-[#141414]/85 font-sans font-light leading-relaxed">
            Welcome to Design Plus. When seeking professional {catInfo.title.toLowerCase()}, property owners, architects, and contractors across Rajasthan trust our verified inventory. We provide rigorous structural solutions, premium material specifications, and expert site delivery backed by decades of civil engineering experience right here in Ajmer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary"
            >
              <span>Consult an Engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="btn-secondary">
              Contact Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-[#141414]/10 pt-10 pb-6 mb-8 flex items-center justify-between">
          <h2 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wide text-[#141414]">
            Available {catInfo.original} ({categoryProducts.length} Items)
          </h2>
          <span className="text-xs font-mono uppercase text-[#141414]/60">AJMER REGIONAL DISPATCH</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product, idx) => {
            const hasPrice = product.price && product.price.trim() !== '' && product.price.toLowerCase() !== 'request for price';
            const priceDisplay = hasPrice ? product.price : 'Price on request';

            return (
              <div
                key={`${product.name}-${idx}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#141414]/10 shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_10px_30px_rgba(20,20,20,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-52 bg-[#faf8f5] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover img-editorial"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#141414]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-sans font-medium text-sm sm:text-base text-[#141414] line-clamp-2 leading-snug group-hover:text-[#C86635] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between pt-2 border-t border-[#141414]/8">
                      <div>
                        <span className="block text-[10px] font-mono uppercase text-[#141414]/40">PRICE</span>
                        <span className="font-sans font-bold text-sm sm:text-base text-[#141414]">
                          {priceDisplay}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProductForCheckout(product)}
                    className="w-full btn-primary py-3 text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white transition-colors cursor-pointer"
                    aria-label={`Buy ${product.name} now`}
                  >
                    <ShoppingBag className="w-4 h-4 text-white" />
                    <span>Buy Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Linking & Related Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#141414]/10">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C86635]">Related Material Categories</span>
            <h2 className="font-editorial text-3xl text-[#141414]">Explore Other Construction Inventories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCategories.map(([slug, info]) => (
              <Link
                key={slug}
                to={`/products/${slug}`}
                className="group bg-white p-5 rounded-2xl border border-[#141414]/10 hover:border-[#C86635] transition-all space-y-2 block"
              >
                <div className="text-[10px] font-mono uppercase text-[#C86635]">Ajmer Catalog</div>
                <div className="font-sans font-medium text-sm text-[#141414] group-hover:text-[#C86635] transition-colors">
                  {info.title}
                </div>
                <div className="text-xs text-[#141414]/60 line-clamp-2">
                  {info.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <ProductCheckoutModal
        isOpen={Boolean(selectedProductForCheckout)}
        onClose={() => setSelectedProductForCheckout(null)}
        product={selectedProductForCheckout}
      />
    </main>
  );
}
