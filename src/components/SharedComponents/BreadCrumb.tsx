import Link from 'next/link';
import React from 'react';
import bgImg from '../../../public/assets/img/category_banner/household_items.jpg';

interface propsType {
  title: string;
}

const BreadCrumb = ({ title }: propsType) => {
  return (
    <>
      <section
        className="page-title-area position-relative"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-wrapper text-center text-white">
                <h1 className="page-title mb-10">{title}</h1>
                <div className="breadcrumb-menu">
                  <nav
                    aria-label="Breadcrumbs"
                    className="breadcrumb-trail breadcrumbs"
                  >
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link href="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>{title}</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
