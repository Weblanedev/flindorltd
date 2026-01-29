"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProductsContext } from "@/contextApi/ProductsProvider";

const CategoryBanner = () => {
  const { products } = useProductsContext();

  const banners = useMemo(() => {
    const goods = products.filter((p) => p.category !== "Services");
    const fallbacks = [
      {
        img: "https://via.placeholder.com/400x300?text=Household",
        title: "Household",
        desc: "Discover our collection",
      },
      {
        img: "https://via.placeholder.com/400x300?text=Electronics",
        title: "Electronics",
        desc: "Explore electronics",
      },
      {
        img: "https://via.placeholder.com/400x300?text=Kitchen",
        title: "Kitchen",
        desc: "Kitchen accessories",
      },
      {
        img: "https://via.placeholder.com/400x300?text=Decor",
        title: "Decor",
        desc: "Home decor",
      },
    ];
    return Array.from({ length: 4 }, (_, i) => {
      const p = goods[i];
      if (!p) return fallbacks[i];
      return {
        img:
          typeof p.productImg === "string"
            ? p.productImg
            : (p.productImg as { src: string }).src,
        title: p.category || fallbacks[i].title,
        desc:
          p.description?.slice(0, 60) +
            (p.description && p.description.length > 60 ? "…" : "") ||
          fallbacks[i].desc,
      };
    });
  }, [products]);

  return (
    <>
      <div className="category-banner-area pt-30">
        <div className="container">
          <div className="row">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`col-xl-4 col-lg-6 col-md-6 mb-30 order-xl-${
                  index % 2 === 0 ? 3 : 2
                }`}
              >
                <div className="category-banner-single pos-rel h-100">
                  <div className="category-banner-img h-100">
                    <Image
                      width={400}
                      height={300}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={banner.img}
                      alt={banner.title}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)",
                      }}
                    ></div>
                  </div>
                  <div className="category-banner-inner">
                    <div className="category-banner-content text-white">
                      <Link href="/products" className="product-category">
                        {banner.title}
                      </Link>
                      <p className="category-short-desc">{banner.desc}</p>
                      <Link href="/products" className="border-btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
