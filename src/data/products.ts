/**
 * Canonical Design Plus Product Catalogue Data Source
 * Single Source of Truth for Architecture, Construction & Structural Products
 */

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  description: string;
  tags?: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'dp-prod-01',
    name: 'Design Plus GI Plaster Mesh, Galvanized Iron, Crack-Free Reinforcement, Roll',
    category: 'Wire Mesh',
    price: '₹1.9 K/ Roll',
    imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/design-plus-gi-plaster-mesh-galvanized-iron-crack-free-reinforcement-roll-2239826635-9v53fsu2.jpeg',
    description: 'Heavy-duty galvanized iron plaster reinforcement mesh engineered to eliminate settlement and thermal plaster cracking across exterior and interior masonry walls.',
    tags: ['Mesh', 'Plaster', 'Reinforcement']
  },
  {
    id: 'dp-prod-02',
    name: 'High-Density Acoustic Ceiling Baffles',
    category: 'Acoustic Materials',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Suspended architectural acoustic baffles designed for executive boardrooms, lecture halls, and open-plan studio volumes to control reverberation time.',
    tags: ['Acoustic', 'Interiors', 'Ceiling']
  },
  {
    id: 'dp-prod-03',
    name: 'Dholpur Natural Sandstone Wall Cladding Slabs',
    category: 'Natural Stone',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Precision-cut regional Dholpur buff and pink sandstone slabs engineered for ventilated rainscreen facades and traditional courtyard walls in Rajasthan.',
    tags: ['Stone', 'Cladding', 'Facade']
  },
  {
    id: 'dp-prod-04',
    name: 'Fe500D High-Ductility TMT Rebar Framework',
    category: 'Structural Steel',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
    description: 'Corrosion-resistant seismic grade Fe500D thermo-mechanically treated rebar specified for moment-resisting concrete frame structures under IS 13920.',
    tags: ['Steel', 'RCC', 'Structural']
  },
  {
    id: 'dp-prod-05',
    name: 'Post-Tensioned High-Tensile Steel Tendon System',
    category: 'Prestressed Concrete',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Low-relaxation 1860 MPa post-tensioned steel strands and anchorages engineered for column-free long-span cantilevered architectural slabs.',
    tags: ['Tendons', 'Cantilever', 'Prestressed']
  },
  {
    id: 'dp-prod-06',
    name: 'Crystalline Integral Waterproofing Admixture',
    category: 'Waterproofing',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    description: 'Hydrophilic crystalline waterproofing chemical admixture that self-heals micro-cracks in subgrade basements, retaining walls, and water reservoirs.',
    tags: ['Waterproofing', 'Chemicals', 'Foundation']
  },
  {
    id: 'dp-prod-07',
    name: 'Heavy-Duty POT-PTFE Bridge Structural Bearings',
    category: 'Bridge Infrastructure',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-rotational elastomeric pot bearings engineered to transfer high vertical axle loads while accommodating seismic and thermal deck displacements.',
    tags: ['Bridges', 'Bearings', 'Heavy Civil']
  },
  {
    id: 'dp-prod-08',
    name: 'Dual-Frequency DGPS RTK Geodetic Survey Receiver',
    category: 'Survey Instruments',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Millimeter-grade GNSS RTK base and rover system for cadastral land boundary demarcations, contour digital elevation modeling, and layout staking.',
    tags: ['Survey', 'DGPS', 'Geodesy']
  }
];

export function getAllProducts(): ProductItem[] {
  return PRODUCTS;
}

export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): ProductItem[] {
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export default PRODUCTS;
