import { ProductsType } from '@/interFace/interFace';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
// import { number } from 'yup';

export const useUniqueProductCount = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product: ProductsType) =>
    uniqueProductIds.add(product.id)
  );
  return uniqueProductIds.size;
};
export const useUniqueWishlstCount = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.wishlist.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product: ProductsType) =>
    uniqueProductIds.add(product.id)
  );
  return uniqueProductIds.size;
};

// for get total cart & wishlist number
export const useTotalProductCount = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  let totalCount = 0;
  cartProducts.forEach((product: ProductsType) => {
    totalCount += product.totalCart as number;
  });

  return totalCount;
};
export const useTotalProductWishlistCount = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.wishlist.cartProducts
  );
  let totalCount = 0;
  cartProducts.forEach((product: ProductsType) => {
    totalCount += product.totalCart as number;
  });

  return totalCount;
};

export const useUniqueCompareCount = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.compare.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product: ProductsType) =>
    uniqueProductIds.add(product.id)
  );
  return uniqueProductIds.size;
};
