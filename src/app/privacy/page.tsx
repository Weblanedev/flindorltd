import React from "react";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleOne from "@/layout/WrapperStyleOne";
import PrivacyMain from "@/components/privacy/PrivacyMain";

const PrivacyPage = () => {
  const pageTitle = "Privacy Policy";
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <PrivacyMain />
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default PrivacyPage;
