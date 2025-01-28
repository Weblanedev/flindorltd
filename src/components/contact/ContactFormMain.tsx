import contact_data from '@/data/contact-data';
import ContactForm from '@/form/ContactForm';
import LocationIcon from '@/svg/LocationIcon';
import PhoneIcon from '@/svg/PhoneIcon';
import Email from '@/svg/email';
import Link from 'next/link';
import React from 'react';

const ContactFormMain = () => {
  return (
    <>
      <section className="contact-main-area pt-120 pb-60">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="contact-main-wrapper mb-60">
                <div className="section-title">
                  <h2 className="section-main-title mb-40">Get in Touch</h2>
                </div>
                <div className="contact-main-form">
                  <ContactForm />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sidebar-widget-wrapper mb-60">
                <div className="sidebar-widget">
                  <h4 className="sidebar-widget-title">Support Contact</h4>
                  <div className="sidebar-widget-content">
                    <div className="contact-list">
                      <div className="contact-list-item">
                        <div className="irc-item">
                          <div className="irc-item-icon">
                            <PhoneIcon />
                          </div>
                          <div className="irc-item-content">
                            <div className="irc-item-heading">Phone</div>
                            <span>
                              Mobile :{' '}
                              <Link href="tel:(+88)872-670-780">
                                <span>{contact_data.phone[0]}</span>
                              </Link>
                            </span>
                            {/* <span>
                              Hotline :{' '}
                              <Link href="tel:(+88)422-655-793">
                                <span>(+88) 422-655-793</span>
                              </Link>
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="contact-list-item">
                        <div className="irc-item">
                          <div className="irc-item-icon">
                            <Email />
                          </div>
                          <div className="irc-item-content">
                            <div className="irc-item-heading">Email</div>
                            <span>
                              <Link href={contact_data.email[0]}>
                                {contact_data.email[0]}
                              </Link>
                            </span>
                            {/* <span>
                              <Link href={contact_data.email[1]}>
                                {contact_data.email[1]}
                              </Link>
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="contact-list-item">
                        <div className="irc-item">
                          <div className="irc-item-icon">
                            <LocationIcon />
                          </div>
                          <div className="irc-item-content">
                            <div className="irc-item-heading">Location</div>
                            <span>{contact_data.address[0]}</span>
                          </div>
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

export default ContactFormMain;
