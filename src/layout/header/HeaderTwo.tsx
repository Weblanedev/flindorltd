import React, {
  useState,
} from "react";
import Menu from "./components/Menu";
import useGlobalContext from "@/hooks/use-context";
import UserIcon from "@/svg/UserIcon";
import CartIcon from "@/svg/CartIcon";
import WishlistIcon from "@/svg/WishlistIcon";
import {
  useTotalProductCount,
  useTotalProductWishlistCount,
  useUniqueCompareCount,
} from "@/hooks/useCartQuantity";
import Link from "next/link";
import logo from "../../../public/assets/img/logo/logo-bl-br.png";
import Image from "next/image";
import SearchHeaderTwo from "./components/SearchHeaderTwo";
import CompareIcon from "@/svg/CompareIcon";
import { useRouter } from "next/navigation";
const HeaderTwo = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter()
  const {
    setSideCartOpen,
    sideCartOpen,
    sideWishlistOpen,
    setSideWishlistOpen,
    toggleSideMenu,
    scrollDirection,
  } = useGlobalContext();
  const totalCart = useTotalProductCount();
  const totatWishlist = useTotalProductWishlistCount();
  const totatCompare = useUniqueCompareCount();

  const handleCompare = () =>{
    router.push("/compare")
  }
  return (
    <>
      <header className="header3">
        <div
          className="header-note"
          style={{ display: open ? "block" : "none" }}
        >
          <p>
            Further reductions: enjoy an extra <span>20%</span> off our Sale and
            free home delivery
          </p>
          <span onClick={() => setOpen(!open)} className="note-close-btn">
            <i className="flaticon-cancel"></i>
          </span>
        </div>
        <div className="header3-top d-none d-lg-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <SearchHeaderTwo/>
              </div>
              <div className="col-lg-3">
                <div className="header-logo header3-logo">
                  <Link href="/" className="logo-bl">
                    <Image src={logo} alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="action-list d-none d-md-flex action-list-header3">
                  <div className="user-btn action-item">
                    <Link href="/profile">
                      <div className="user-icon">
                        <UserIcon />
                      </div>
                    </Link>
                    <Link href="/login" className="action-btn-text">
                      Sign in
                    </Link>
                  </div>
                  <div
                    onClick={() => setSideCartOpen(!sideCartOpen)}
                    className="action-item action-item-cart"
                  >
                    <button type="button" className="view-cart-button">
                      <CartIcon />
                      <span className="action-item-number">{totalCart}</span>
                    </button>
                    <button type="button" className="action-btn-text">
                      Cartlisht
                    </button>
                  </div>
                  <div
                    onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                    className="action-item action-item-wishlist"
                  >
                    <button type="button" className="view-wishlist-button">
                      <WishlistIcon />
                      <span className="action-item-number">
                        {totatWishlist}
                      </span>
                    </button>
                    <button type="button" className="action-btn-text">
                      Wishlisht 
                    </button>
                  </div>
                  <div
                    onClick={handleCompare}
                    className="action-item action-item-wishlist"
                  >
                    <button type="button" className="view-wishlist-button">
                      <CompareIcon/>
                      <span className="action-item-number"> 
                        {totatCompare}
                      </span>
                    </button>
                    <button type="button" className="action-btn-text">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-main header-main3 ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-logo header3-logo d-lg-none">
                    <Link href="/" className="logo-bl">
                      <Image src={logo} alt="logo-img" />
                    </Link>
                  </div>
                  <div className="main-menu main-menu3 d-none d-lg-block">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                  <div className="d-lg-none d-flex lh-1">
                    <div className="action-list action-list-header4">
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
                    <div onClick={toggleSideMenu} className="menu-bar ml-20">
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

export default HeaderTwo;
