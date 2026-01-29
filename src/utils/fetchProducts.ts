import { ProductsType } from '@/interFace/interFace';

interface DummyJSONProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface DummyJSONResponse {
  products: DummyJSONProduct[];
  total: number;
  skip: number;
  limit: number;
}

/**
 * Convert USD price to Nigerian Naira
 * Using approximate rate: 1 USD ≈ 1500 NGN
 */
const convertToNaira = (usdPrice: number): number => {
  return Math.round(usdPrice * 1500);
};

/**
 * Shuffle array using Fisher-Yates algorithm
 * This randomizes the order so related items don't appear close together
 */
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]; // Create a copy to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Assign product tags based on product properties
 * Tags: 'best-seller', 'hot-collection', 'trendy', 'new-arrival'
 */
const assignProductTags = (product: {
  rating: number;
  discount?: number;
  stock: number;
  id: number;
  price: number;
}): string[] => {
  const tags: string[] = [];

  // Best Seller: High rating (>= 4.5) or high stock with good rating
  if (product.rating >= 4.5 || (product.rating >= 4.0 && product.stock > 50)) {
    tags.push('best-seller');
  }

  // Hot Collection: High discount (>= 15%) or popular items
  if (product.discount && product.discount >= 15) {
    tags.push('hot-collection');
  } else if (product.rating >= 4.3 && product.stock > 30) {
    tags.push('hot-collection');
  }

  // Trendy: High rating with moderate discount or good stock
  if (product.rating >= 4.2 && (product.discount || product.stock > 40)) {
    tags.push('trendy');
  }

  // New Arrival: Lower IDs (newer products) or items with recent characteristics
  // Using ID < 50 as "new" products, or if it doesn't fit other categories
  if (product.id < 50 || tags.length === 0) {
    tags.push('new-arrival');
  }

  return tags;
};

/**
 * Check if a product is a kitchen electronic (exclude non-electronic items)
 * Keep: blenders, microwaves, electric stoves, toasters, coffee makers, etc.
 * Exclude: forks, spoons, spatulas, knives, plates, bowls, etc.
 */
const isKitchenElectronic = (title: string): boolean => {
  const titleLower = title.toLowerCase();
  const excludedKeywords = [
    'fork',
    'spoon',
    'spatula',
    'knife',
    'knives',
    'plate',
    'plates',
    'bowl',
    'bowls',
    'cup',
    'cups',
    'mug',
    'mugs',
    'dish',
    'dishes',
    'tray',
    'trays',
    'cutlery',
    'utensil',
    'utensils',
  ];
  
  // Check if title contains any excluded keywords
  if (excludedKeywords.some(keyword => titleLower.includes(keyword))) {
    return false;
  }
  
  // Include electronic kitchen items
  const electronicKeywords = [
    'blender',
    'microwave',
    'stove',
    'oven',
    'toaster',
    'coffee maker',
    'coffee machine',
    'mixer',
    'food processor',
    'electric',
    'appliance',
  ];
  
  return electronicKeywords.some(keyword => titleLower.includes(keyword));
};

/**
 * Map DummyJSON category to our categories
 * Focus: Electronics, Kitchen accessories (electronics only), Furniture, Home Decor
 */
const mapCategory = (dummyCategory: string): string | null => {
  const categoryMap: Record<string, string> = {
    // Electronics -> Household
    'smartphones': 'Household',
    'laptops': 'Household',
    'tablets': 'Household',
    'mobile-accessories': 'Household',
    'automotive': 'Household',
    'motorcycle': 'Household',
    'sunglasses': 'Household',
    
    // Kitchen accessories (electronics only: blenders, microwaves, electric stoves, etc.) -> Household
    'kitchen-accessories': 'Household',
    
    // Furniture & Home Decor -> Decor
    'furniture': 'Decor',
    'home-decoration': 'Decor',
    'lighting': 'Decor',
    'womens-bags': 'Decor',
    'womens-jewellery': 'Decor',
    'fragrances': 'Decor',
  };
  return categoryMap[dummyCategory] || null;
};

/**
 * Fetch products from DummyJSON API and transform to our format
 * Focus: Electronics, Kitchen accessories, Furniture, Home Decor
 */
export const fetchProductsFromAPI = async (): Promise<ProductsType[]> => {
  try {
    // Fetch more products to ensure we get enough from desired categories
    // We'll filter out groceries and other unwanted categories
    const response = await fetch('https://dummyjson.com/products?limit=100&skip=0');
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data: DummyJSONResponse = await response.json();

    // Filter products first, then transform
    const filteredProducts = data.products.filter((product) => {
      const mappedCategory = mapCategory(product.category);
      if (mappedCategory === null) {
        return false; // Exclude products from unwanted categories
      }
      
      // For kitchen-accessories category, only keep electronic items
      if (product.category === 'kitchen-accessories') {
        return isKitchenElectronic(product.title);
      }
      
      return true; // Keep all other products from desired categories
    });

    // Transform filtered products
    const transformedProducts: ProductsType[] = filteredProducts.map((product) => {
      const mappedCategory = mapCategory(product.category)!; // Safe to use ! since we filtered above
      const priceInNaira = convertToNaira(product.price);
      const discount = Math.round(product.discountPercentage);
      const oldPrice = discount > 0 
        ? Math.round(priceInNaira / (1 - discount / 100))
        : undefined;

      const rating = Math.round(product.rating * 10) / 10;
      const productDiscount = discount > 0 ? discount : undefined;

      // Assign tags based on product properties
      const tags = assignProductTags({
        rating,
        discount: productDiscount,
        stock: product.stock,
        id: product.id,
        price: priceInNaira,
      });

      return {
        id: product.id,
        vendorId: `ng-${String(product.id).padStart(3, '0')}`,
        title: product.title,
        description: product.description,
        rating,
        category: mappedCategory,
        brand: product.brand || 'Generic',
        price: priceInNaira,
        oldPrice: oldPrice,
        discount: productDiscount,
        status: discount > 0 ? 'Discounted' : undefined,
        productImg: product.thumbnail || product.images[0] || 'https://via.placeholder.com/400x500',
        primaryColor: 'multi',
        productColor: false,
        totalProduct: product.stock,
        tags,
      };
    });

    // Shuffle products to randomize order so related items don't appear close together
    const shuffledProducts = shuffleArray(transformedProducts);

    // Limit to exactly 35 goods (including groceries)
    return shuffledProducts.slice(0, 35);
  } catch (error) {
    console.error('Error fetching products from API:', error);
    // Return empty array on error - fallback to static data
    return [];
  }
};

/**
 * Get static services (since DummyJSON doesn't have services)
 */
export const getStaticServices = (): ProductsType[] => {
  return [
    { id: 26, vendorId: 'ng-016', rating: 4.5, category: 'Services', brand: 'Flindor', title: 'Cleaning', description: 'Comprehensive cleaning service for your home including dusting, mopping, and sanitization.', price: 35000, oldPrice: 45000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop', tags: ['best-seller', 'hot-collection'] },
    { id: 27, vendorId: 'ng-017', rating: 4.1, category: 'Services', brand: 'Flindor', title: 'TV Installation', description: 'Professional TV installation service with proper cable management and leveling.', price: 18000, oldPrice: 22000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=500&fit=crop', tags: ['new-arrival', 'trendy'] },
    { id: 28, vendorId: 'ng-018', rating: 4.4, category: 'Services', brand: 'Flindor', title: 'AC Servicing', description: 'Complete AC maintenance service including cleaning, gas refill, and performance check.', price: 28000, oldPrice: 35000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=500&fit=crop', tags: ['best-seller', 'trendy'] },
    { id: 29, vendorId: 'ng-019', rating: 4.4, category: 'Services', brand: 'Flindor', title: 'Furniture Assembling', description: 'Expert furniture assembly service for all types of furniture including IKEA and flat-pack items.', price: 30000, oldPrice: 38000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop', tags: ['hot-collection', 'trendy'] },
    { id: 30, vendorId: 'ng-020', rating: 4.2, category: 'Services', brand: 'Flindor', title: 'Gas Cooker Set Up', description: 'Complete gas cooker installation with safety inspection and leak testing.', price: 24000, oldPrice: 30000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=500&fit=crop', tags: ['new-arrival', 'hot-collection'] },
    { id: 31, vendorId: 'ng-021', rating: 4.2, category: 'Services', brand: 'Flindor', title: 'Plumbing Fix (Minor)', description: 'Quick fix for minor plumbing issues including leak repairs and pipe maintenance.', price: 20000, oldPrice: 25000, primaryColor: 'n/a', productColor: false, productImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=500&fit=crop', tags: ['new-arrival'] },
  ];
};
