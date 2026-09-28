import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Filter, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import productsData from '../data/products-categorized.json';
import { ProductCheckoutModal } from '../components/products/ProductCheckoutModal';

interface ProductItem {
  category: string;
  imageUrl: string;
  name: string;
  price?: string;
}

interface ProductsPageProps {
  onOpenConsultation?: () => void;
}

const CLEAN_CATEGORIES = [
  'All Products',
  'Tensile Structures & Shades',
  'Construction Chemicals',
  'Steel & Reinforcement',
  'Survey & Testing Instruments',
  'Water Solutions',
  'Panels & Prefab',
  'Concrete & Masonry',
  'Interior & Furniture'
];

const CATEGORY_SLUG_MAP: Record<string, string> = {
  'Tensile Structures & Shades': 'tensile-structures-shades-ajmer',
  'Construction Chemicals': 'construction-chemicals-ajmer',
  'Steel & Reinforcement': 'steel-reinforcement-ajmer',
  'Survey & Testing Instruments': 'survey-testing-instruments-ajmer',
  'Water Solutions': 'water-solutions-ajmer',
  'Panels & Prefab': 'panels-prefab-ajmer',
  'Concrete & Masonry': 'concrete-masonry-ajmer',
  'Interior & Furniture': 'interior-furniture-ajmer'
};

export function ProductsPage({}: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState<ProductItem | null>(null);

  const products = productsData as ProductItem[];

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'All Products' || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Architectural Supplies, Materials & Equipment | Design Plus',
    description: 'Browse 44 certified architectural supplies, building materials, surveying equipment, and specialized construction products from Design Plus Ajmer.',
    url: 'https://designplusajmer.in/products'
  };

  return (
    <main id="products-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-24 pb-20">
      <SEOHead
        title="Architectural Supplies & Materials Catalog | Design Plus Ajmer"
        description="Browse 44 certified architectural supplies, building materials, surveying equipment, and specialized construction products from Design Plus Ajmer."
        keywords="architectural supplies ajmer, building materials rajasthan, construction equipment catalog, design plus products"
        canonical="https://designplusajmer.in/products"
        schema={schema}
      />

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#141414]/5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#141414]">
            <span className="w-2 h-2 rounded-full bg-[#C86635]" />
            <span>JUSTDIAL VERIFIED CATALOGUE · 44 ITEMS</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#141414]">
            Architectural Supplies &amp; Equipment
          </h1>
          <p className="text-base sm:text-lg text-[#141414]/80 font-sans font-light leading-relaxed">
            Browse our complete inventory of certified construction materials, survey instruments, waterproofing membranes, and structural hardware. Buy directly online or reserve via WhatsApp for instant site delivery across Rajasthan.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-10 space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-[#141414]/10 shadow-[0_4px_25px_rgba(20,20,20,0.04)]">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#141414]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name or category (e.g., Tensile, Waterproofing, Total Station)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#faf8f5] border border-[#141414]/10 text-sm text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-2 focus:ring-[#C86635]/50 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            <span className="text-xs font-mono uppercase text-[#141414]/60 mr-2 whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#C86635]" />
              Categories:
            </span>
            {CLEAN_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              const count = cat === 'All Products' 
                ? products.length 
                : products.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#141414] text-white shadow-sm ring-2 ring-[#C86635]'
                      : 'bg-[#faf8f5] text-[#141414]/80 border border-[#141414]/15 hover:border-[#C86635]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#141414]/10">
            <p className="text-lg text-[#141414]/60 font-sans">No products found matching your search criteria.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}
              className="mt-4 btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => {
              const hasPrice = product.price && product.price.trim() !== '' && product.price.toLowerCase() !== 'request for price';
              const priceDisplay = hasPrice ? product.price : 'Price on request';
              const catSlug = CATEGORY_SLUG_MAP[product.category] || 'tensile-structures-shades-ajmer';

              return (
                <div
                  key={`${product.name}-${idx}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#141414]/10 shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_10px_30px_rgba(20,20,20,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image Container */}
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
                      <Link
                        to={`/products/${catSlug}`}
                        className="absolute top-3 left-3 bg-[#141414]/80 hover:bg-[#C86635] backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white transition-colors"
                      >
                        {product.category}
                      </Link>
                    </div>

                    {/* Product Details */}
                    <div className="p-5 space-y-3">
                      <h2 className="font-sans font-medium text-sm sm:text-base text-[#141414] line-clamp-2 leading-snug group-hover:text-[#C86635] transition-colors">
                        {product.name}
                      </h2>

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

                  {/* Buy Now CTA Button */}
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
        )}
      </section>

      {/* SEO Dedicated Landing Pages Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#141414]/10">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C86635]">Dedicated Regional Inventories</span>
            <h2 className="font-editorial text-3xl text-[#141414]">Browse Categories in Ajmer &amp; Rajasthan</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(CATEGORY_SLUG_MAP).map(([catName, slug]) => (
              <Link
                key={slug}
                to={`/products/${slug}`}
                className="group bg-white p-5 rounded-2xl border border-[#141414]/10 hover:border-[#C86635] transition-all space-y-2 block"
              >
                <div className="text-[10px] font-mono uppercase text-[#C86635]">Ajmer Catalog</div>
                <div className="font-sans font-medium text-sm text-[#141414] group-hover:text-[#C86635] transition-colors">
                  {catName} in Ajmer, Rajasthan
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
