"use client";
import React, { useState, useMemo } from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useProductsContext } from "@/contextApi/ProductsProvider";
import { useSearch } from "@/hooks/useSearch";
import useGlobalContext from "@/hooks/use-context";

const ProductsMain = () => {
  const { filterSearch } = useGlobalContext();
  const { products: allProducts, loading } = useProductsContext();
  const searchResults = useSearch();
  const [activeTab, setActiveTab] = useState<"goods" | "services">("goods");

  // Separate goods and services
  const goods = useMemo(
    () => allProducts.filter((p) => p.category !== "Services"),
    [allProducts],
  );
  const services = useMemo(
    () => allProducts.filter((p) => p.category === "Services"),
    [allProducts],
  );

  // If there's a search query, show search results, otherwise show filtered by tab
  const displayProducts = useMemo(() => {
    if (filterSearch && filterSearch.trim() !== "") {
      return searchResults;
    }
    return activeTab === "goods" ? goods : services;
  }, [filterSearch, searchResults, activeTab, goods, services]);

  return (
    <>
      <section className="product-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-35">
                  {filterSearch && filterSearch.trim() !== ""
                    ? `Search Results for "${filterSearch}"`
                    : "Products"}
                </h2>
                {filterSearch && filterSearch.trim() !== "" && (
                  <p className="text-gray-600">
                    Found {displayProducts.length} product
                    {displayProducts.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
            </div>
          </div>

          {!filterSearch && (
            <div className="product-tab-wrapper">
              <div className="product-tab-nav mb-60">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ${activeTab === "goods" ? "active" : ""}`}
                      onClick={() => setActiveTab("goods")}
                      type="button"
                    >
                      Goods{" "}
                      <span className="total-product">[{goods.length}]</span>
                    </button>
                    <button
                      className={`nav-link ${activeTab === "services" ? "active" : ""}`}
                      onClick={() => setActiveTab("services")}
                      type="button"
                    >
                      Services{" "}
                      <span className="total-product">[{services.length}]</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Loading products...</p>
            </div>
          ) : (
            <div className="products-wrapper">
              {displayProducts.length > 0 ? (
                displayProducts.map((item) => (
                  <SingleProductCard key={item.id} item={item} />
                ))
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-lg">
                    {filterSearch && filterSearch.trim() !== ""
                      ? "No products found matching your search."
                      : `No ${activeTab} available.`}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsMain;
