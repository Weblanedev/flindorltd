"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css/bundle";
import banner7 from "../../../public/assets/img/slider-img/banner-07.png";
import banner8 from "../../../public/assets/img/slider-img/banner-08.png";
import banner9 from "../../../public/assets/img/slider-img/banner-09.png";
import shape8 from "../../../public/assets/img/slider-img/shape/shape-8.png";
import shape9 from "../../../public/assets/img/slider-img/shape/shape-9.png";
import Link from "next/link";
import Image from "next/image";
const HomeThreeSliderBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Update activeIndex state when slide changes
  };
  const sliderData = [
    {
      id: 1,
      bgImg: banner7,
      tagOne: "New Arrival",
      tagTwo: "Hot Fashion Collection",
      text: "Discover our latest arrivals, curated to keep you ahead in fashion trends. Explore a diverse range of styles, from classic to contemporary, and elevate your wardrobe effortlessly."
    },
    {
      id: 2,
      bgImg: banner8,
      tagOne: "On Trending",
      tagTwo: "Autumn Fashion For Man",
      text: "Embrace the essence of autumn with our meticulously crafted collection for men. From cozy knits to stylish outerwear, find your autumn essentials to stay fashionable and comfortable."
    },
    {
      id: 3,
      bgImg: banner9,
      tagOne: "Featured Product",
      tagTwo: "Perfect Fashion Unique Dress",
      text: "Discover the epitome of style with our featured unique dresses, designed to make a statement. Find the perfect dress that complements your personality and sets you apart."
    },
];


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
          autoplay={{
            delay: 3000,
          }}
          loop={true}
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
                          <span className="banner-subtitle">{item?.tagOne}</span>
                          <h1 className="banner-title">
                            {item?.tagTwo}
                          </h1>
                          <p className="mb-40">
                            {item?.text}
                          </p>
                          <div className="banner-btn">
                            <Link
                              className="fill-btn"
                              href="/shop-sidebar-5-column"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-5 col-xl-5 col-lg-5">
                        <div className="banner-thumb-wrapper-2 pos-rel">
                          <span className="linear-shape"></span>
                          <div className="banner-bg-shape"></div>
                          <div className="banner-thumb-3">
                            <Image src={item?.bgImg} alt="banner-7" />
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
