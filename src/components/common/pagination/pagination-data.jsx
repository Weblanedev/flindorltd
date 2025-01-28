import React from "react";
import Link from "next/link";

const PaginationData = () => {
  return (
    <>
      <ul>
        <li><Link href="#"><i className="far fa-angle-left"></i></Link></li>
        <li className="active"><Link href="#">1</Link></li>
        <li><Link href="#">2</Link></li>
        <li><Link href="#">3</Link></li>
        <li><Link href="#"><i className="far fa-angle-right"></i></Link></li>
      </ul>
    </>
  );
};

export default PaginationData;
