import React from "react";

import bannerOne from "../../../public/assets/img/category_banner/category-banner5.jpg";
import bannerTwo from "../../../public/assets/img/category_banner/category-banner6.jpg";
import Image from "next/image";
import Link from "next/link";

const BannerArea = () => {
  return (
    <>
      <div className="category-banner-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="category-banner-single category-banner2 mb-30 pos-rel">
                <div className="category-banner-img">
                  <Image style={{ width: "100%", height: "auto" }} src={bannerOne} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      <span>Exclusive Jacket</span>
                      Collection
                    </Link>
                    <p className="category-short-desc">
                      Start from : <span>£258.00</span>
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="category-banner-single category-banner2 mb-30 pos-rel">
                <div className="category-banner-img">
                  <Image style={{ width: "100%", height: "auto" }} src={bannerTwo} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      <span>Hot Exclusive</span>
                      Offer on Jewelry
                    </Link>
                    <p className="category-short-desc">
                      <span>50%</span> Instant Discount
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Shop Now
                    </Link>
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

export default BannerArea;
