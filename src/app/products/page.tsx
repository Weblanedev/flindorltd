import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import ProductsMain from "@/components/products/ProductsMain";

const ProductsPage = () => {
  const pageTitle = "Products";
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <ProductsMain />
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default ProductsPage;
