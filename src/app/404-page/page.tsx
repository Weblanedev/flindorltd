import ErrorMain from "@/components/errorPage/ErrorMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <MetaData pageTitle="404">
        <Wrapper>
          <main>
            <ErrorMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ErrorPage;
