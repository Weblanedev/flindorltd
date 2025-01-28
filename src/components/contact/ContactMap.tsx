import contact_data from '@/data/contact-data';
import React from 'react';

const ContactMap = () => {
  return (
    <>
      <div className="contact-map-area mb-120">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-wrapper">
                <iframe src={contact_data.googleMapUrl}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
