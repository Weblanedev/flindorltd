//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import FooterOne from "./footer/FooterOne";
import HeaderThree from "./header/HeaderThree";
interface WrapperProps {
  children: React.ReactNode;
}
const WrapperStyleThree: React.FC<WrapperProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      <HeaderThree />
      {children}
      <FooterOne />
    </>
  );
};

export default WrapperStyleThree;
