import ErrorMain from "@/components/errorPage/ErrorMain";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const globalErrorPage = () => {
  return (
    <>
    

      <MetaData pageTitle="404">
      <main>
        <ErrorMain />
      </main>
      </MetaData>
    </>
  );
};

export default globalErrorPage;
