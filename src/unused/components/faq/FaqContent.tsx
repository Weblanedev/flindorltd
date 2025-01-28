import { faqData } from "@/data/faq-data";
import React from "react";

const FaqContent = () => {
  return (
    <>
      <section className="faq-area pt-120 pb-40 bg-grey fix">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-wrapper">
                <div
                  className="choose-right"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="accordion" id="accordionExample">
                    {faqData?.slice(0,6)?.map((item) => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={item?.divpen}>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item?.tab}`}
                            aria-expanded={item.id === 2 ? "true" : "false"}
                            aria-controls={item?.tab}
                          >
                            {item?.title}
                          </button>
                        </h2>
                        <div
                          id={item?.tab}
                          className={`accordion-collapse collapse ${item?.id === 2 ? "show" : ""}`}
                          aria-labelledby={item?.divpen}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p> {item?.details} </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-wrapper-2">
                <div
                  className="choose-right"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="accordion" id="accordionExample2">
                  {faqData?.slice(6,12)?.map((item) => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={item?.divpen}>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item?.tab}`}
                            aria-expanded={item.id === 2 ? "true" : "false"}
                            aria-controls={item?.tab}
                          >
                            {item?.title}
                          </button>
                        </h2>
                        <div
                          id={item?.tab}
                          className={`accordion-collapse collapse ${item?.id === 2 ? "show" : ""}`}
                          aria-labelledby={item?.divpen}
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p> {item?.details} </p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default FaqContent;
