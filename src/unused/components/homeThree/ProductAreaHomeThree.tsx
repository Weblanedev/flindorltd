'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import { products_data } from '@/data/products-data';
import SliderProductCard from '../../../components/SharedComponents/SliderProductCard';
const ProductAreaHomeThree = () => {
  return (
    <>
      <section className="product-area pt-120 pb-90">
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
                    Hot Collection<span className="total-product">[25]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="trendy-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trendy"
                    type="button"
                    role="tab"
                    aria-controls="trendy"
                    aria-selected="false"
                  >
                    Trendy<span className="total-product">[32]</span>
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
                <div
                  className="tab-pane fade show active"
                  id="best-seller"
                  role="tabpanel"
                  aria-labelledby="best-seller-tab"
                >
                  <div className="products-wrapper-slide pos-rel">
                    <div className="product-tab-slider-nav">
                      <div className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div>
                    <div className="product-tab-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                          nextEl: '.product-tab-slider-button-prev',
                          prevEl: '.product-tab-slider-button-next',
                        }}
                        pagination={{
                          el: '.product-tab-pagination',
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3000,
                        }}
                        loop={true}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          550: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          767: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }}
                      >
                        {products_data?.slice(0, 10)?.map(item => {
                          return (
                            <SwiperSlide key={item.id}>
                              <SliderProductCard item={item} />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>

                      <div className="product-tab-pagination-container">
                        <div className="container">
                          <div className="product-tab-pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="hot-collection"
                  role="tabpanel"
                  aria-labelledby="hot-collection-tab"
                >
                  <div className="products-wrapper-slide pos-rel">
                    <div className="product-tab-slider-nav">
                      <div className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div>
                    <div className="product-tab-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                          nextEl: '.product-tab-slider-button-prev',
                          prevEl: '.product-tab-slider-button-next',
                        }}
                        pagination={{
                          el: '.product-tab-pagination',
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3000,
                        }}
                        loop={true}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          550: {
                            slidesPerView: 2,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 4,
                          },
                          1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }}
                      >
                        {products_data?.slice(11, 20)?.map(item => {
                          return (
                            <SwiperSlide key={item.id}>
                              <SliderProductCard item={item} />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>

                      <div className="product-tab-pagination-container">
                        <div className="container">
                          <div className="product-tab-pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="trendy"
                  role="tabpanel"
                  aria-labelledby="trendy-tab"
                >
                  <div className="products-wrapper-slide pos-rel">
                    <div className="product-tab-slider-nav">
                      <div className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div>
                    <div className="product-tab-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                          nextEl: '.product-tab-slider-button-prev',
                          prevEl: '.product-tab-slider-button-next',
                        }}
                        pagination={{
                          el: '.product-tab-pagination',
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3000,
                        }}
                        loop={true}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          550: {
                            slidesPerView: 2,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 4,
                          },
                          1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }}
                      >
                        {products_data?.slice(14, 25)?.map(item => {
                          return (
                            <SwiperSlide key={item.id}>
                              <SliderProductCard item={item} />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>

                      <div className="product-tab-pagination-container">
                        <div className="container">
                          <div className="product-tab-pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="new-arrival"
                  role="tabpanel"
                  aria-labelledby="new-arrival-tab"
                >
                  <div className="products-wrapper-slide pos-rel">
                    <div className="product-tab-slider-nav">
                      <div className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div>
                    <div className="product-tab-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                          nextEl: '.product-tab-slider-button-prev',
                          prevEl: '.product-tab-slider-button-next',
                        }}
                        pagination={{
                          el: '.product-tab-pagination',
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3000,
                        }}
                        loop={true}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          550: {
                            slidesPerView: 2,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 4,
                          },
                          1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }}
                      >
                        {products_data?.slice(16, 26)?.map(item => {
                          return (
                            <SwiperSlide key={item.id}>
                              <SliderProductCard item={item} />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>

                      <div className="product-tab-pagination-container">
                        <div className="container">
                          <div className="product-tab-pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAreaHomeThree;
