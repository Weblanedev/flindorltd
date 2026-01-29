import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import RefundMain from "@/components/refund/RefundMain";

const RefundPage = () => {
  const pageTitle = "Refund & Return Policy";
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <RefundMain />
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default RefundPage;
