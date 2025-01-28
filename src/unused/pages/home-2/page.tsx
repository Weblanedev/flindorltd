//@refresh
import ProductModal from '@/components/SharedComponents/ProductModal';
import HomeTwoMain from '@/unused/components/homeTwo/HomeTwoMain';
import MetaData from '@/hooks/useMetaData';
import WrapperStyleTwo from '@/layout/WrapperStyleTwo';
import React from 'react';

const HomeTwoPage = () => {
  return (
    <>
      <MetaData pageTitle="Home Two">
        <WrapperStyleTwo>
          <main>
            <HomeTwoMain />
            <ProductModal />
          </main>
        </WrapperStyleTwo>
      </MetaData>
    </>
  );
};

export default HomeTwoPage;
