"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ProductsType } from "@/interFace/interFace";
import { getProductsData } from "@/data/products-data";
import { products_data as fallbackProducts } from "@/data/products-data";

interface ProductsContextType {
  products: ProductsType[];
  loading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductsType[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProductsData();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products");
        // Keep fallback products
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProductsContext must be used within ProductsProvider");
  }
  return context;
};
