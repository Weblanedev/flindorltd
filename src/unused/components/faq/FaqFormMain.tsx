// import FaqForm from '@/form/FaqForm';
import React from 'react';

const FaqFormMain = () => {
  return (
    <>
      <section className="faq-form pt-50 pb-120">
        <div className="container container-small">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">
                  Still stuck? Ask directly
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                {/* <FaqForm /> */}
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqFormMain;
