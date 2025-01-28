'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css/bundle';
import banner1 from '../../../public/assets/img/slider-img/clock.jpg';
import banner2 from '../../../public/assets/img/slider-img/toolbox.jpg';
// import banner3 from '../../../public/assets/img/slider-img/banner-3.png';
import shape1 from '../../../public/assets/img/slider-img/shape/shape-1.png';
import shape2 from '../../../public/assets/img/slider-img/shape/shape-2.png';
import shape3 from '../../../public/assets/img/slider-img/shape/shape-3.png';
import shape4 from '../../../public/assets/img/slider-img/shape/shape-4.png';
// import shape5 from '../../../public/assets/img/slider-img/shape/shape-5.png';
import shape6 from '../../../public/assets/img/slider-img/shape/shape-6.png';
import shape7 from '../../../public/assets/img/slider-img/shape/shape-7.png';
import Link from 'next/link';
import Image from 'next/image';

const HeroBannerSec = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Update activeIndex state when slide changes
  };

  const sliderData = [
    {
      id: 1,
      bgImg: banner1,
      tagOne: 'Bedroom',
      tagTwo: 'Exclusive Collection',
    },
    {
      id: 2,
      bgImg: banner2,
      tagOne: 'Tools',
      tagTwo: 'Knickknacks for every task',
    },
    // {
    //   id: 3,
    //   bgImg: banner3,
    //   tagOne: 'Featured Product',
    //   tagTwo: 'Perfect Fashion Unique Dress',
    // },
  ];

  return (
    <>
      <div className="banner-area banner-area1 hero_slider_wrapper p-relative  banner-area banner-bg-1 pt-120 pb-120 pos-rel fix">
        <div className="banner-shape-wrapper">
          <div className="banner-shape-1">
            <Image src={shape1} alt="shape-1" />
          </div>
          <div className="banner-shape-2">
            <Image src={shape2} alt="shape-2" />
          </div>
          <div className="banner-shape-3">
            <Image src={shape3} alt="shape-3" />
          </div>
          <div className="banner-shape-4">
            <Image src={shape4} alt="shape-4" />
          </div>
        </div>
        <div className="slider__active">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect="fade"
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: '.slider-button-prev',
              prevEl: '.slider-button-next',
            }}
            pagination={{
              el: '.slider1-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
          >
            {sliderData?.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  {index === activeIndex && (
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                          <div className="banner-content pos-rel mb-30">
                            {/* <div className="banner-shape-5">
                              <Image src={shape5} alt="shape-5" />
                            </div> */}
                            <span
                              data-animation="fadeInUp"
                              data-delay=".3s"
                              className="banner-subtitle"
                            >
                              {item?.tagOne}
                            </span>
                            <h1
                              data-animation="fadeInUp"
                              data-delay=".5s"
                              className="banner-title"
                            >
                              {item?.tagTwo}
                            </h1>
                            <div className="banner-btn">
                              <Link
                                data-animation="fadeInUp"
                                data-delay=".7s"
                                className="fill-btn"
                                href="/contact"
                              >
                                Contact us
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                          <div className="banner-thumb-wrapper pos-rel">
                            <div className="banner-thumb">
                              <Image src={item?.bgImg} alt="banner-1" />
                            </div>
                            <div className="banner-shape-6">
                              <Image src={shape6} alt="shape-6" />
                            </div>
                            <div className="banner-shape-7">
                              <Image src={shape7} alt="shape-7" />
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
          <div className="slider-pagination slider1-pagination pagination_tabs"></div>
        </div>
      </div>
    </>
  );
};

export default HeroBannerSec;
