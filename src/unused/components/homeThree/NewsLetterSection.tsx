import React from "react";
import bgImg from "../../../public/assets/img/bg/newsletter-bg.png"
const NewsLetterSection = () => {
  return (
    <>
      <section className="newsletter-area pt-0 pb-120">
        <div className="container">
          <div
            className="newsletter-wrapper"
            style={{ backgroundImage: `url(${bgImg.src})`}}
          >
            <div className="newsletter-inner">
              <div className="newsletter-content">
                <div className="section-title text-center">
                  <h2 className="section-main-title mb-30">
                    Subscribe Newsletter
                  </h2>
                </div>
                <p className="mb-40">
                  Enter your email below to be the first to know about new
                  collections and product launches.
                </p>
                <form
                  action="#"
                  className="subscribe-form subscribe-form-newsletter"
                >
                  <input type="text" placeholder="Enter your email" />
                  <button type="submit">
                    Subscribe<i className="fas fa-long-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetterSection;
