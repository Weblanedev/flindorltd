//@refresh
'use client';
import React, { useEffect } from 'react';
import { animationCreate } from '@/utils/utils';
import BacktoTop from '@/components/common/backToTop/BacktoTop';
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}
import FooterOne from './footer/FooterOne';
import HeaderOne from './header/HeaderOne';
interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      <HeaderOne />
      {children}
      <FooterOne />
    </>
  );
};

export default Wrapper;
