import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import logoImg from '../../../public/assets/img/logo/logo.svg';
import Image from 'next/image';
import Menu from './components/Menu';
import useGlobalContext from '@/hooks/use-context';

const HeaderOne = () => {
  const searchRef = useRef(null);
  const { toggleSideMenu, scrollDirection } = useGlobalContext();
  const [_, setOpenCategory] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentRef = searchRef.current as HTMLElement | null;
      if (
        currentRef &&
        currentRef.contains &&
        !currentRef.contains(event.target as Node)
      ) {
        setOpenCategory(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header2">
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
                        <Image src={logoImg} alt="logo-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <div className="main-menu main-menu2 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>

                    <div className="menu-bar ecomart-menu-bar d-lg-none ml-20">
                      <button
                        className="side-toggle"
                        onClick={toggleSideMenu}
                        type="button"
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
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

export default HeaderOne;
