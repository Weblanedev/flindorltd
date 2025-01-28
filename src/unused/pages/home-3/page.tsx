//@refresh
import ProductModal from '@/components/SharedComponents/ProductModal';
import HomeThreeMain from '@/unused/components/homeThree/HomeThreeMain';
import MetaData from '@/hooks/useMetaData';
import WrapperStyleThree from '@/layout/WrapperStyleThree';
import React from 'react';

const HomeThreePage = () => {
  return (
    <>
      <MetaData pageTitle="Home Three">
        <WrapperStyleThree>
          <main>
            <HomeThreeMain />
            <ProductModal />
          </main>
        </WrapperStyleThree>
      </MetaData>
    </>
  );
};

export default HomeThreePage;
