 
 

//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
interface WrapperProps {
  children: React.ReactNode;
}

const WrapperStyleTwo: React.FC<WrapperProps> = ({ children }) => {
 
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      <HeaderTwo />
      {children}
      <FooterTwo />
    </>
  );
};

export default WrapperStyleTwo;
