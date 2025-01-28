import React from 'react';
import MobileMenu from './MobileMenu';
import useGlobalContext from '@/hooks/use-context';
import Link from 'next/link';
import logo from '../../../../public/assets/img/logo/logo.svg';
import Image from 'next/image';
import socials_data from '@/data/social-data';
const SidebarMenu = () => {
  const { sideMenuOpen, setSideMenuOpen } = useGlobalContext();
  return (
    <div className="fix">
      <div className={sideMenuOpen ? 'side-info info-open' : 'side-info'}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-20">
            <div className="row align-items-center">
              <div
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className="col-9"
              >
                <Link href="/">
                  <Image src={logo} alt="Logo" />
                </Link>
              </div>
              <div
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className="col-3 text-end"
              >
                <button className="side-info-close">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-menu d-lg-none fix mean-container">
            <div className="mean-bar">
              <Link
                href="#nav"
                className="meanmenu-reveal"
                style={{ right: '0px', left: 'auto', display: 'inline' }}
              >
                <span>
                  <span>
                    <span></span>
                  </span>
                </span>
              </Link>
              <nav className="mean-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div className="social__links header-bottom-social">
            <ul>
              {socials_data.map(({ id, link, iconClassNames }) => (
                <li key={id}>
                  <Link target="_blank" href={link}>
                    <i className={iconClassNames}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
