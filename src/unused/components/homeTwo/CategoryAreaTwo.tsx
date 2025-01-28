import { category_data } from "@/data/category-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryAreaTwo = () => {
  return (
    <>
      <div className="category-area2 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="product-category2-wrapper">
                {category_data?.slice(5, 9)?.map((item) => (
                  <div
                    key={item.id}
                    className="product-category2-single pos-rel"
                  >
                    <div className="product-category-img">
                      <Link href="/shop-sidebar-5-column">
                        <Image style={{ width: "100%", height: "auto" }} src={item?.categoryImg} alt="product-img" />
                      </Link>
                    </div>
                    <div className="product-category-inner">
                      <div className="product-category-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                          {item?.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryAreaTwo;
