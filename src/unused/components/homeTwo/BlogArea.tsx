import React from 'react';
// import BlogAreaSingle from './BlogAreaSingle';
// import blog_data from "@/data/blog-data";

const BlogArea = () => {
  return (
    <>
      <section className="blog-area pt-120 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">
                  Latest fashion news
                </h2>
              </div>
            </div>
          </div>
          <div className="blog-items-wrapper">
            {/* {blog_data?.slice(0, 3)?.map((item) => (
              <BlogAreaSingle key={item.id} item={item} />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
