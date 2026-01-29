"use client";
import React, { useMemo } from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useProductsContext } from "@/contextApi/ProductsProvider";
import Link from "next/link";

const ProductArea = () => {
  const { products } = useProductsContext();
  const goods = products.filter((p) => p.category !== "Services");

  // Filter products by tags
  const bestSellers = useMemo(
    () => goods.filter((p) => p.tags?.includes("best-seller")).slice(0, 15),
    [goods],
  );

  const hotCollection = useMemo(
    () => goods.filter((p) => p.tags?.includes("hot-collection")).slice(0, 15),
    [goods],
  );

  const trendy = useMemo(
    () => goods.filter((p) => p.tags?.includes("trendy")).slice(0, 15),
    [goods],
  );

  const newArrival = useMemo(
    () => goods.filter((p) => p.tags?.includes("new-arrival")).slice(0, 15),
    [goods],
  );

  return (
    <>
      <section className="product-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-35">
                  Products of the week
                </h2>
              </div>
            </div>
          </div>
          <div className="product-tab-wrapper">
            <div className="product-tab-nav mb-60">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="best-seller-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#best-seller"
                    type="button"
                    role="tab"
                    aria-controls="best-seller"
                    aria-selected="true"
                  >
                    Best Seller{" "}
                    <span className="total-product">
                      [{bestSellers.length}]
                    </span>
                  </button>
                  <button
                    className="nav-link"
                    id="hot-collection-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hot-collection"
                    type="button"
                    role="tab"
                    aria-controls="hot-collection"
                    aria-selected="false"
                  >
                    Hot Collection{" "}
                    <span className="total-product">
                      [{hotCollection.length}]
                    </span>
                  </button>
                  <button
                    className="nav-link"
                    id="trend-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trend"
                    type="button"
                    role="tab"
                    aria-controls="trend"
                    aria-selected="false"
                  >
                    Trendy{" "}
                    <span className="total-product">[{trendy.length}]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="new-arrival-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#new-arrival"
                    type="button"
                    role="tab"
                    aria-controls="new-arrival"
                    aria-selected="false"
                  >
                    New Arrival
                    <span className="total-product">[{newArrival.length}]</span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="product-tab-content">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="best-seller"
                  role="tabpanel"
                  aria-labelledby="best-seller-tab"
                >
                  <div className="products-wrapper">
                    {bestSellers.length > 0 ? (
                      bestSellers.map((item) => (
                        <SingleProductCard key={item.id} item={item} />
                      ))
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">
                          No best sellers available.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* hot collection */}
                <div
                  className="tab-pane fade"
                  id="hot-collection"
                  role="tabpanel"
                  aria-labelledby="hot-collection-tab"
                >
                  <div className="products-wrapper">
                    {hotCollection.length > 0 ? (
                      hotCollection.map((item) => (
                        <SingleProductCard key={item.id} item={item} />
                      ))
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">
                          No hot collection items available.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* trendy collection */}
                <div
                  className="tab-pane fade"
                  id="trend"
                  role="tabpanel"
                  aria-labelledby="trend-tab"
                >
                  <div className="products-wrapper">
                    {trendy.length > 0 ? (
                      trendy.map((item) => (
                        <SingleProductCard key={item.id} item={item} />
                      ))
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">
                          No trendy items available.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* New Arrival */}
                <div
                  className="tab-pane fade"
                  id="new-arrival"
                  role="tabpanel"
                  aria-labelledby="new-arrival-tab"
                >
                  <div className="products-wrapper">
                    {newArrival.length > 0 ? (
                      newArrival.map((item) => (
                        <SingleProductCard key={item.id} item={item} />
                      ))
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">
                          No new arrivals available.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-area-btn mt-10 text-center">
                <Link href="/products" className="border-btn">
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductArea;
