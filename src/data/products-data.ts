import { ProductsType } from '@/interFace/interFace';
import { fetchProductsFromAPI, getStaticServices } from '@/utils/fetchProducts';

// Import services function
export { getStaticServices };

/**
 * Nigeria-focused catalog (₦) with realistic pricing.
 *
 * Updated:
 * - Products fetched from DummyJSON API (free e-commerce API)
 * - Exactly 35 goods total (including groceries)
 * - 6 services (custom, with Unsplash images)
 * - All products include real images from API
 */

// This will be populated at runtime
let cachedProducts: ProductsType[] | null = null;

/**
 * Get products data - fetches from API on first call, then caches
 */
export const getProductsData = async (): Promise<ProductsType[]> => {
  if (cachedProducts) {
    return cachedProducts;
  }

  try {
    // Fetch goods from DummyJSON API
    const apiProducts = await fetchProductsFromAPI();
    
    // Limit to 35 goods (filter out any that might be in wrong categories)
    const goods = apiProducts
      .filter(p => p.category !== 'Services')
      .slice(0, 35);

    // Get static services
    const services = getStaticServices();

    // Combine and cache
    cachedProducts = [...goods, ...services];
    return cachedProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    // Fallback to static services only
    return getStaticServices();
  }
};

// For backward compatibility, export a synchronous version with fallback data
// Components should use useProductsContext() hook or getProductsData() for fresh API data
export const products_data: ProductsType[] = getStaticServices();

