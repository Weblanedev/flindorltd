import { CategoryType } from '@/interFace/interFace';
import category1 from '../../public/assets/img/product_category/product-cat-1.jpg';
import category2 from '../../public/assets/img/product_category/product-cat-2.jpg';
import category3 from '../../public/assets/img/product_category/product-cat-3.jpg';
import category4 from '../../public/assets/img/product_category/product-cat-4.jpg';
// import category5 from '../../public/assets/img/product_category/product-cat-5.jpg';
import category6 from '../../public/assets/img/product_category/product-cat-6.jpg';
import category7 from '../../public/assets/img/product_category/product-cat-7.jpg';
import category8 from '../../public/assets/img/product_category/product-cat-8.jpg';
import category9 from '../../public/assets/img/product_category/product-cat-9.jpg';

export const category_data: CategoryType[] = [
  {
    id: 1,
    category: 'Shirt & Jeans',
    totalProduct: 45,
    categoryImg: category1,
  },
  {
    id: 2,
    category: 'Cosmetics',
    totalProduct: 26,
    categoryImg: category2,
  },
  {
    id: 3,
    category: 'Coat & Jacket',
    totalProduct: 36,
    categoryImg: category3,
  },
  {
    id: 4,
    category: 'Shoes',
    totalProduct: 38,
    categoryImg: category4,
  },
  {
    id: 5,
    category: 'Underwear',
    totalProduct: 38,
    categoryImg: category2,
  },
  {
    id: 6,
    category: 'Winter Wear',
    totalProduct: 38,
    categoryImg: category6,
  },
  {
    id: 7,
    category: 'Exclusive Footwear',
    totalProduct: 38,
    categoryImg: category7,
  },
  {
    id: 8,
    category: 'Sunglass & Eye',
    totalProduct: 38,
    categoryImg: category8,
  },
  {
    id: 9,
    category: 'Active & Outdoor',
    totalProduct: 38,
    categoryImg: category9,
  },
];
