import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import CheckoutMain from "@/components/checkout/CheckoutMain";

const CheckoutPage = () => {
  const pageTitle = "Checkout";
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <CheckoutMain />
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default CheckoutPage;
