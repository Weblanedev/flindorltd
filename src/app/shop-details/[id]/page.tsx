import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import ProductDetailsMain from "@/components/productDetails/ProductDetailsMain";

type PageProps = {
  params: { id: string };
};

const ShopDetailsPage = ({ params }: PageProps) => {
  const pageTitle = "Product Details";
  return (
    <MetaData pageTitle={pageTitle}>
      <WrapperStyleOne>
        <main>
          <ProductDetailsMain id={params.id} />
        </main>
      </WrapperStyleOne>
    </MetaData>
  );
};

export default ShopDetailsPage;
