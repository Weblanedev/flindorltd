import { category_data } from "@/data/category-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryArea = () => {
  return (
    <>
      <section className="category-area pt-90 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">Browse More</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product-category-wrapper">
                {category_data?.slice(0,5)?.map((item) => (
                  <div
                    key={item.id}
                    className="product-category-single pos-rel"
                  >
                    <div className="product-category-img">
                      <Link href="/shop-sidebar-5-column">
                        <Image style={{ width: "100%", height: "auto" }} src={item?.categoryImg} alt="product-img" />
                      </Link>
                    </div>
                    <div className="product-category-inner">
                      <div className="product-category-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                          {item?.category}
                        </Link>
                        <div className="product-meta-item">
                          <div className="product-available">
                            {item?.totalProduct}
                          </div>
                          <div className="product-meta-type">products</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
