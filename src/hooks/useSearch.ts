import { useProductsContext } from '@/contextApi/ProductsProvider';
import useGlobalContext from './use-context';

export const useSearch = () => {
  const {
    filterSearch,

    // settotalShowingProduct
  } = useGlobalContext();
  const { products } = useProductsContext();
  
  if (!filterSearch || filterSearch.trim() === '') {
    return [];
  }
  const filterBySearch = products.filter(
    item =>
      item.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(filterSearch.toLowerCase())
  );
  // settotalShowingProduct(filterBySearch?.length)
  return filterBySearch;
};
export const useSearchForVendor = (vendorId: string) => {
  const {
    filterSearch,
    // settotalShowingProduct
  } = useGlobalContext();
  if (!filterSearch || filterSearch.trim() === '') {
    return [];
  }

  const { products } = useProductsContext();
  const filterVendorData = products?.filter(
    item => item?.vendorId === vendorId
  );
  const filterBySearch = filterVendorData.filter(
    item =>
      item.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(filterSearch.toLowerCase())
  );
  // settotalShowingProduct(filterBySearch?.length)
  return filterBySearch;
};
