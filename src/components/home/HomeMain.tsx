import React from "react";
import CategoryBanner from "./CategoryBanner";
// import CategoryArea from './CategoryArea';
// import FeaturesArea from '../SharedComponents/FeaturesArea';
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import HomeThreeSliderBanner from "./HomeThreeSliderBanner";
import ProductSearch from "./ProductSearch";
import ProductArea from "./ProductArea";

const HomeMain = () => {
  return (
    <>
      <HomeThreeSliderBanner />
      <ProductSearch />
      <CategoryBanner />
      <ProductArea />
      {/* <CategoryArea />
      <FeaturesArea /> */}

      <SidebarMain />
    </>
  );
};

export default HomeMain;
