'use client';
import React from 'react';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
import CategoryThreeArea from './CategoryThreeArea';
import ProductAreaHomeThree from './ProductAreaHomeThree';
import BannerArea from './BannerArea';
import TestimonialArea from './TestimonialArea';
import NewsLetterSection from './NewsLetterSection';
import SidebarMain from '../../../components/SharedComponents/Sidebars/SidebarMain';
import HomeThreeSliderBanner from './HomeThreeSliderBanner';

const HomeThreeMain = () => {
  return (
    <>
      <HomeThreeSliderBanner />
      <FeatureAreaHomeThree />
      <CategoryThreeArea />
      <ProductAreaHomeThree />
      <BannerArea />
      <TestimonialArea />
      <NewsLetterSection />
      <SidebarMain />
    </>
  );
};

export default HomeThreeMain;
