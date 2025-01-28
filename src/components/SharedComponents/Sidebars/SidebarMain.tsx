'use client';
import React from 'react';
import useGlobalContext from '@/hooks/use-context';
import SidebarMenu from './SidebarMenu';

const SidebarMain = () => {
  const { sideMenuOpen, toggleSideMenu } = useGlobalContext();
  return (
    <>
      <div
        onClick={toggleSideMenu}
        className={`offcanvas-overlay ${sideMenuOpen ? 'overlay-open' : ''}`}
      ></div>
      <div className="offcanvas-overlay-white"></div>

      <SidebarMenu />
    </>
  );
};

export default SidebarMain;
