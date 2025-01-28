import Image from "next/image";
import React from "react";
import category10 from "../../../public/assets/img/product_category/product-cat-10.jpg";
import category11 from "../../../public/assets/img/product_category/product-cat-11.jpg";
import category12 from "../../../public/assets/img/product_category/product-cat-12.jpg";
import category13 from "../../../public/assets/img/product_category/product-cat-13.jpg";
import category14 from "../../../public/assets/img/product_category/product-cat-14.jpg";
import category15 from "../../../public/assets/img/product_category/product-cat-15.jpg";
import Link from "next/link";

const CategoryThreeArea = () => {
  return (
    <>
      <div className="category-area3 pb-0">
        <div className="container">
          <div className="product-category3-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-1">
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <Link href="/shop-sidebar-5-column">
                      <Image style={{ width: "100%", height: "auto" }} src={category10} alt="product-img" />
                    </Link>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <Link href="/shop-sidebar-5-column" className="product-category">
                        Activewear
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-3">
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <Link href="/shop-sidebar-5-column">
                      <Image style={{ width: "100%", height: "auto" }} src={category15} alt="product-img" />
                    </Link>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <Link href="/shop-sidebar-5-column" className="product-category">
                        Hot Dresses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-12 order-xxl-2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href="/shop-sidebar-5-column">
                          <Image style={{ width: "100%", height: "auto" }} src={category11} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <Link href="/shop-sidebar-5-column" className="product-category">
                            Footwear
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href="/shop-sidebar-5-column">
                          <Image style={{ width: "100%", height: "auto" }} src={category12} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <Link href="/shop-sidebar-5-column" className="product-category">
                            Sunglass
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href="/shop-sidebar-5-column">
                          <Image style={{ width: "100%", height: "auto" }} src={category13} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <Link href="/shop-sidebar-5-column" className="product-category">
                            Coat & Jacket
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href="/shop-sidebar-5-column">
                          <Image style={{ width: "100%", height: "auto" }} src={category14} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <Link href="/shop-sidebar-5-column" className="product-category">
                            Jewelry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryThreeArea;
