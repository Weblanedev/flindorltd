"use client";
import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css/bundle";
import { useProductsContext } from "@/contextApi/ProductsProvider";
import shape8 from "../../../public/assets/img/slider-img/shape/shape-8.png";
import shape9 from "../../../public/assets/img/slider-img/shape/shape-9.png";
import Link from "next/link";
import Image from "next/image";

const HomeThreeSliderBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useProductsContext();

  const sliderData = useMemo(() => {
    const goods = products.filter((p) => p.category !== "Services").slice(0, 3);
    if (goods.length === 0) {
      return [
        {
          id: 1,
          bgImg: "https://via.placeholder.com/800x600?text=Shop+Now",
          tagOne: "Reliable",
          tagTwo: "General Goods And Services",
          text: "We provide reliable and high-quality general goods and services to our customers.",
        },
      ];
    }
    return goods.map((p, i) => ({
      id: p.id,
      bgImg:
        typeof p.productImg === "string"
          ? p.productImg
          : (p.productImg as { src: string }).src,
      tagOne: i === 0 ? "Reliable" : i === 1 ? "On Trending" : "Featured",
      tagTwo: p.title,
      text:
        p.description?.slice(0, 120) +
          (p.description && p.description.length > 120 ? "…" : "") ||
        "Shop our collection.",
    }));
  }, [products]);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <div className="banner-area banner-area-3 banner-bg-2">
        <div className="banner-shape-wrapper-2">
          <div className="banner-shape-8">
            <Image src={shape8} alt="shape-8" />
          </div>
          <div className="banner-shape-9">
            <Image src={shape9} alt="shape-9" />
          </div>
          <div className="banner-shape-10">
            <Image src={shape9} alt="shape-9" />
          </div>
          <div className="banner-shape-11">
            <Image src={shape9} alt="shape-9" />
          </div>
        </div>
        <div className="slider__active">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect={"fade"}
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".slider-button-prev",
              prevEl: ".slider-button-next",
            }}
            pagination={{
              el: ".slider2-pagination",
              clickable: true,
            }}
            // autoplay={{
            //   delay: 3000,
            // }}
            // loop={true}
          >
            {sliderData?.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  {/* Only render content if it's the active slide */}
                  {index === activeIndex && (
                    <div className="container">
                      <div className="row align-items-end">
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                          <div className="banner-content pos-rel">
                            <span className="banner-subtitle">
                              {item?.tagOne}
                            </span>
                            <h1 className="banner-title">{item?.tagTwo}</h1>
                            <p className="mb-40">{item?.text}</p>
                            <div className="banner-btn">
                              <Link className="fill-btn" href="/products">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                          <div className="banner-thumb-wrapper-2 pos-rel">
                            {/* <span className="linear-shape"></span>
                            <div className="banner-bg-shape"></div> */}
                            <div className="banner-thumb-3">
                              <Image
                                src={item?.bgImg}
                                alt={item?.tagTwo ?? "Banner"}
                                width={800}
                                height={600}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="slider-nav d-none">
            <div className="slider-button-prev">
              <i className="fal fa-long-arrow-left"></i>
            </div>
            <div className="slider-button-next">
              <i className="fal fa-long-arrow-right"></i>
            </div>
          </div>
          <div className="slider2-pagination-container">
            <div className="container">
              <div className="slider-pagination slider2-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThreeSliderBanner;
