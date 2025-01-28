import React from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { products_data } from "@/data/products-data";
import Link from "next/link";

const ProductArea = () => {
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
                    Best Seller <span className="total-product">[57]</span>
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
                    Hot Collection <span className="total-product">[25]</span>
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
                    Trendy <span className="total-product">[32]</span>
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
                    New Arrival<span className="total-product">[64]</span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="product-tab-content">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="best-seller" role="tabpanel" aria-labelledby="best-seller-tab">
                  <div className="products-wrapper">
                    {products_data?.slice(0, 15)?.map((item) => (
                      <SingleProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                {/* hot collection */}
                <div className="tab-pane fade" id="hot-collection" role="tabpanel" aria-labelledby="hot-collection-tab">
                  <div className="products-wrapper">
                    {products_data?.slice(15, 25)?.map((item) => (
                      <SingleProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                {/* trendy collection */}
                <div className="tab-pane fade" id="trend" role="tabpanel" aria-labelledby="trend-tab">
                  <div className="products-wrapper">
                    {products_data?.slice(10, 20)?.map((item) => (
                      <SingleProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                {/* New Arrival */}
                <div className="tab-pane fade" id="new-arrival" role="tabpanel" aria-labelledby="new-arrival-tab">
                  <div className="products-wrapper">
                    {products_data?.slice(18, 28)?.map((item) => (
                      <SingleProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-area-btn mt-10 text-center">
                <Link href="/shop-sidebar-5-column" className="border-btn">
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
