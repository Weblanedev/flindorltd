import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../../public/assets/img/logo/logo.svg';
import menu_data from '@/data/menu-data';
import socials_data from '@/data/social-data';
import contact_data from '@/data/contact-data';

const FooterOne = () => {
  return (
    <>
      <footer data-background="" className="footer1-bg">
        <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
          <div className="container">
            <div className="header-logo header1-logo mb-40 mb-md-0">
              <Link href="/" className="logo-bl">
                <Image src={logoImg} alt="logo-img" />
              </Link>
            </div>
            <div className="row justify-content-end">
              {menu_data
                .filter(item => item.submenus)
                .map(({ title, submenus }, i) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                    <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                      <div className="footer-widget-title">
                        <h4>{title}</h4>
                      </div>
                      <ul>
                        {submenus?.map((submenu, j) => (
                          <li key={j}>
                            <Link href={submenu.link}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Contact</h4>
                  </div>
                  <p className="mb-20">
                    Phone:{' '}
                    <Link href="tel:555-900-888">{contact_data.phone[0]}</Link>
                  </p>
                  <p>
                    Email:{' '}
                    <Link href="mailto:info@example.com">
                      {contact_data.email[0]}
                    </Link>
                  </p>
                  <p>Address: {contact_data.address[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright-area copyright1-area">
          <div className="container">
            <div className="copyright1-inner">
              <div className="copyright-text copyright1-text">
                Copyright {new Date().getFullYear()} by{' '}
                <Link href="/">{contact_data.name}</Link>. All Rights Reserved
              </div>
              <div className="copyright-link">
                <Link href="/" className="text-btn">
                  Privacy Policy
                </Link>
                <Link href="/" className="text-btn">
                  Terms & Conditions
                </Link>
              </div>
              <div className="social-wrapper">
                <p>Follow Us:</p>
                <div className="social__links">
                  <ul>
                    {socials_data.map((social, i) => (
                      <li key={i}>
                        <Link target="_blank" href={social.link}>
                          <i className={social.iconClassNames}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
