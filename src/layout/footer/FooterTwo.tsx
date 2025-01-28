import React from 'react';
import logoImg from '../../../public/assets/img/logo/logo-2-w.png';
import card1 from '../../../public/assets/img/cards/card-1.png';
import card2 from '../../../public/assets/img/cards/card-2.png';
import card3 from '../../../public/assets/img/cards/card-3.png';
import card4 from '../../../public/assets/img/cards/card-4.png';
import Image from 'next/image';
import Link from 'next/link';
const FooterTwo = () => {
  return (
    <>
      <footer data-background="" className="footer2-bg">
        <section className="footer-area footer-area2 footer-area2-bg pt-95 pb-55">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 order-xl-1">
                <div className="footer-widget footer2-widget footer2-widget1 mb-40">
                  <div className="footer-widget-logo mb-20">
                    <Link href="/">
                      <Image src={logoImg} alt="img" />
                    </Link>
                  </div>
                  <p className="mb-20">
                    Ecomart is a fashion theme for presents a complete wardrobe
                    of uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &
                    Accessories inspired from the most contemporary
                  </p>
                  <div className="social__links social-border">
                    <ul>
                      <li>
                        <Link target="_blank" href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="https://www.pinterest.com/">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 order-xl-5">
                <div className="footer-widget footer2-widget footer2-widget5 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <p className="mb-20">
                    Enter your email below to be the first to know about new
                    collections and product launches.
                  </p>
                  <form
                    action="#"
                    className="subscribe-form subscribe-form-footer2"
                  >
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">
                      Subscribe Now<i className="fas fa-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-2">
                <div className="footer-widget footer2-widget footer2-widget2 mb-40">
                  <div className="footer-widget-title">
                    <h4>Category</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/shop-sidebar-5-column">
                        Handbags & Wallets
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-sidebar-4-column">
                        {' '}
                        {`Women's`} Clothing
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-sidebar-3-column">Plus Sizes</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-6-column">Complete Your Look</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-5-column">Baby Corner</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-4-column">Man & Woman Shoe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-3">
                <div className="footer-widget footer2-widget footer2-widget3 mb-40">
                  <div className="footer-widget-title">
                    <h4>Information</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/about">Payment Type</Link>
                    </li>
                    <li>
                      <Link href="/about">Awards Winning</Link>
                    </li>
                    <li>
                      <Link href="/about">World Media Partner</Link>
                    </li>
                    <li>
                      <Link href="/about">Become an Agent</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-4">
                <div className="footer-widget footer2-widget footer2-widget4 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Help & Support</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/become-vendor">Vendor</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ Information</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Return Policy</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link href="/track-order">Order Tranking</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-4-column">List of Shops</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright-area copyright2-area">
          <div className="container">
            <div className="copyright2-inner">
              <div className="copyright-text copyright2-text">
                Copyright by <Link href="/">BDevs</Link>. All Rights Reserved
              </div>
              <div className="copyright-link">
                <Link href="/privecy-policy" className="text-btn">
                  Privacy Policy
                </Link>
                <Link href="/privecy-policy" className="text-btn">
                  Terms & Conditions
                </Link>
                <Link href="/privecy-policy" className="text-btn">
                  Sitemap
                </Link>
              </div>
              <div className="cards-wrapper">
                <p>We Support</p>
                <div className="card-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <Image src={card1} alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={card2} alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={card3} alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={card4} alt="img" />
                      </Link>
                    </li>
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

export default FooterTwo;
