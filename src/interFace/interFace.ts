import { StaticImageData } from 'next/image';
import React from 'react';
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  toggleSideMenu: () => void;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideFilterOpen: boolean;
  setSideFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideCartOpen: boolean;
  setSideCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideWishlistOpen: boolean;
  setSideWishlistOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  selectData: string;
  setSelectData: React.Dispatch<React.SetStateAction<string>>;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  filterColor: string;
  setFilterColor: React.Dispatch<React.SetStateAction<string>>;
  filterBrand: string[];
  setFilterBrand: React.Dispatch<React.SetStateAction<string[]>>;
  filterSize: string[];
  setFilterSize: React.Dispatch<React.SetStateAction<string[]>>;
  dynamicId: number;
  setDynamicId: React.Dispatch<React.SetStateAction<number>>;
  totalShowingProduct: number;
  settotalShowingProduct: React.Dispatch<React.SetStateAction<number>>;
  filterRating: number;
  setFilterRating: React.Dispatch<React.SetStateAction<number>>;
  filterRange: number[];
  setFilterRange: React.Dispatch<React.SetStateAction<number[]>>;
  setModalData: any;
  modalData: any;
}

// product type

interface productAngleViewType {
  id: number;
  productImg: StaticImageData;
}

export interface ProductColor {
  color: string;
  activeImg: StaticImageData;
  angleViewProducts?: productAngleViewType[];
}

export interface ProductsType {
  id: number;
  title: string;
  vendorId: string;
  rating: number;
  category: string;
  brand: string;
  sizeArray?: string[];
  status?: string;
  discount?: number;
  price: number;
  productImg: StaticImageData;
  oldPrice?: number;
  primaryColor: string;
  productColor: boolean;
  angleView?: boolean;
  productColorArray?: ProductColor[];
  totalCart?: number;
  totalProduct?: number;
  productVideo?: string;
}

// combo package type

interface groupProduct {
  productId: number;
}

export interface TgroupPackage {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  groupProducts: groupProduct[];
}

export interface CategoryType {
  id: number;
  category: string;
  totalProduct: number;
  categoryImg: StaticImageData;
}
export interface vendorType {
  id: number;
  Items: number;
  Sells: number;
  vendor: string;
  verified: boolean;
  vendorStatus?: string;
  description: string;
  vendorId: string;
  averageRating: number;
  totalRating: number;
  vendorImg: StaticImageData;
  vendorBanner: StaticImageData;
}
//counter type
export interface CounterType {
  id: number;
  counterNum: number;
  text: string;
  icon?: string;
}

// menu-data type
export interface MenuType {
  id: number;
  hasDropdown?: boolean;
  megaMenu?: boolean;
  active?: boolean;
  title: string;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

// socials-data type
export interface SocialsType {
  id: number;
  name: string;
  link: string;
  iconClassNames: string;
}

// socials-data type
export interface ContactType {
  name: string;
  phone: string[];
  email: string[];
  address: string[];
  googleMapUrl: string;
}

//product select option-type
export type NiceSelcetType = {
  id: number;
  option: string;
};
// id type
export interface idType {
  id: number;
}
export interface CountryType {
  id: number;
  option: string;
}

export interface BlogType {
  id: number;
  blogImg: StaticImageData;
  category: string;
  date: string;
  title: string;
}

// faq data type

export interface faqDataType {
  id: number;
  title: string;
  details: string;
  tab: string;
  divpen: string;
}

export interface filterCategoryType {
  id: number;
  category: string;
  total: number;
}
export interface colorFilterType {
  id: number;
  productColor: string;
}
// comment type

export interface CommentType {
  id: string;
  date: string;
  comment: string;
  email: string;
  name: string;
  postId: string;
  img: string | StaticImageData;
  title: string;
}

export interface UserReviewType {
  id: string;
  productName: string;
  review: string;
  name: string;
  email: string;
  date: string;
  productId: string;
  categoryName: string;
  retting: number;
  img?: string | StaticImageData;
}
