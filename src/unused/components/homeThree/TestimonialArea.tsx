"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import authorIMg1 from "../../../public/assets/img/testimonial/author-1.jpg";
import Image from "next/image";
const TestimonialArea = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Emma Johnson",
      title: "Marketing Manager, TechSavvy",
      description:
        "Working with this team has been an incredible experience. Their attention to detail and commitment to delivering exceptional results is truly commendable. I highly recommend their services.",
      img: authorIMg1,
    },
    {
      id: 2,
      name: "Michael Smith",
      title: "CEO, InnovateX",
      description:
        "I've had the pleasure of collaborating with this team on multiple projects. Their professionalism and expertise shine through in everything they do. They consistently exceed expectations and I look forward to future collaborations.",
      img: authorIMg1,
    },
    {
      id: 3,
      name: "Sophia Martinez",
      title: "Creative Director, Artistry Designs",
      description:
        "I cannot speak highly enough of the creativity and dedication of this team. They have a unique ability to translate concepts into stunning visuals that perfectly capture the essence of our brand. Working with them has been a delight.",
      img: authorIMg1,
    },
];


  return (
    <>
      <div className="testimonial-area pt-85 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-wrapper">
                <div className="swiper-container testimonial-active">
                <Swiper
                      modules={[
                        Navigation,
                        Scrollbar,
                        A11y,
                        Autoplay,
                        Pagination,
                      ]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                      }}
                      pagination={{
                        el: ".testimonial-pagination",
                        clickable: true,
                      }}
                      navigation={{
                        nextEl: ".testimonial-button-next",
                        prevEl: ".testimonial-button-prev",
                      }}
                    >
                      {testimonialData.map((item, num) => {
                        return (
                          <SwiperSlide key={num}>
                            <div className="testimonial-single">
                                <div className="testimonial-content">
                                  <div className="testimonial-author">
                                    <h4 className="author-name">
                                      {item?.name}
                                    </h4>
                                    <div className="author-desc">
                                      {item?.title}
                                    </div>
                                  </div>
                                  <div className="author-text">
                                    <p>{item?.description}</p>
                                  </div>
                                  <div className="author-thumb">
                                    <Image style={{ width: "100%", height: "auto" }} src={item?.img} alt="author img" />
                                  </div>
                                </div>
                              </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>

                  <div className="testimonial-pagination"></div>
                </div>

                <div className="testimonial-nav">
                  <div className="testimonial-button-prev">
                    <i className="fal fa-long-arrow-left"></i>
                  </div>
                  <div className="testimonial-button-next">
                    <i className="fal fa-long-arrow-right"></i>
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

export default TestimonialArea;
