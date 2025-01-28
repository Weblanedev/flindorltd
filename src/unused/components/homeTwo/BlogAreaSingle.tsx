import { BlogType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  item: BlogType;
}

const BlogAreaSingle = ({ item }: propsType) => {
  return (
    <>
      <div className="blog-single">
        <div className="blog-single-inner">
          <div className="blog-img">
            <Link href={`/blog-details/${item?.id}`}>
              <Image style={{ width: "100%", height: "auto" }} src={item?.blogImg} alt="blog-img" />
            </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta-list">
              <div className="blog-meta-item">
                <div className="blog-meta-icon">
                  <i className="fal fa-folder-open"></i>
                </div>
                <div className="blog-meta-content">
                  <Link href={`/blog-details/${item?.id}`}> {item?.category} </Link>
                </div>
              </div>
              <div className="blog-meta-item">
                <div className="blog-meta-icon">
                  <i className="fal fa-clock"></i>
                </div>
                <div className="blog-meta-content">
                  <Link href={`/blog-details/${item?.id}`}> {item?.date} </Link>
                </div>
              </div>
            </div>
            <h4 className="blog-title">
              <Link href={`/blog-details/${item?.id}`}>{item?.title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaSingle;
