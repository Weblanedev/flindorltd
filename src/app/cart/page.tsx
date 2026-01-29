import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import CartMain from "@/components/cart/CartMain";

const CartPage = () => {
  const pageTitle = "Cart";
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <CartMain />
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default CartPage;
