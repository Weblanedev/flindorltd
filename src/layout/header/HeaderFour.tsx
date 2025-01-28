import React from 'react';
import Menu from './components/Menu';
import Link from 'next/link';
import logo from '../../../public/assets/img/logo/logo-bl.png';
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
import {
  useTotalProductCount,
  useTotalProductWishlistCount,
  useUniqueCompareCount,
} from '@/hooks/useCartQuantity';
// import NiceSelectTwo from "@/components/common/NiceSelectTwo";
// import { currency_data, language_data } from "@/data/nice-select-data";
import SearchComponent from './components/SearchComponent';
import { useRouter } from 'next/navigation';
const HeaderFour = () => {
  const router = useRouter();
  const {
    setSideCartOpen,
    sideCartOpen,
    sideWishlistOpen,
    setSideWishlistOpen,
    scrollDirection,
    toggleSideMenu,
  } = useGlobalContext();

  const totalCart = useTotalProductCount();
  const totatWishlist = useTotalProductWishlistCount();
  const totatCompare = useUniqueCompareCount();
  // const selectHandler = () => {};
  const handleCompare = () => {
    router.push('/compare');
  };
  return (
    <>
      <header className="header1">
        <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  <Link href="/about" className="text-btn">
                    About Us
                  </Link>
                  <Link href="/register" className="text-btn">
                    My account
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <Link href="/login" className="text-btn">
                    <i className="flaticon-avatar"></i>Sign in
                  </Link>
                  {/* <NiceSelectTwo
                    options={language_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="lan-select"
                    className="language-select border-left"
                  />
                  <NiceSelectTwo
                    options={currency_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="currency-select"
                    className="currency-select border-left"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-main header-main1 ${
            scrollDirection === 'down' ? 'sticky' : ''
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link href="/" className="logo-bl">
                        <Image src={logo} alt="logo-img" />
                      </Link>
                    </div>
                    <div className="main-menu main-menu1 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <SearchComponent />
                    <div className="action-list d-flex action-list-header1">
                      <div
                        onClick={() => setSideCartOpen(!sideCartOpen)}
                        className="action-item action-item-cart"
                      >
                        <button type="button" className="view-cart-button">
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">
                            {totalCart}
                          </span>
                        </button>
                      </div>
                      <div
                        onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                        className="action-item action-item-wishlist"
                      >
                        <button type="button" className="view-wishlist-button">
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">
                            {totatWishlist}
                          </span>
                        </button>
                      </div>

                      <div className="action-item action-item-wishlist action-item-compare">
                        <button
                          onClick={handleCompare}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-exchange"></i>
                          <span className="action-item-number">
                            {totatCompare}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      onClick={toggleSideMenu}
                      className="menu-bar ecomart-menu-bar d-xl-none ml-20"
                    >
                      <Link className="side-toggle" href="">
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderFour;
