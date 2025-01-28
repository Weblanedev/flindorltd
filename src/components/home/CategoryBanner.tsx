import React from 'react';

// import banner1 from '../../../public/assets/img/category_banner/category-banner1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import menu_data from '@/data/menu-data';

const CategoryBanner = () => {
  const banners = [
    {
      img: '/assets/img/category_banner/household_stuff.jpg',
      title: menu_data[1].submenus?.[0].title,
      desc: 'Discover the latest collection of household items',
    },
    {
      img: '/assets/img/category_banner/parenting.png',
      title: menu_data[1].submenus?.[1].title,
      desc: 'Explore our collection of parenting essentials',
    },
    {
      img: '/assets/img/category_banner/tools.png',
      title: menu_data[1].submenus?.[2].title,
      desc: 'Browse our selection of tools and gadgets',
    },
    {
      img: '/assets/img/category_banner/household_items.jpg',
      title: menu_data[1].submenus?.[3].title,
      desc: 'Find the perfect home decor for your needs',
    },
  ];

  return (
    <>
      <div className="category-banner-area pt-30">
        <div className="container">
          <div className="row">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`col-xl-4 col-lg-6 col-md-6 mb-30 order-xl-${
                  index % 2 === 0 ? 3 : 2
                }`}
              >
                <div className="category-banner-single pos-rel h-100">
                  <div className="category-banner-img h-100">
                    <Image
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={banner.img}
                      alt="banner-img"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)',
                      }}
                    ></div>
                  </div>
                  <div className="category-banner-inner">
                    <div className="category-banner-content text-white">
                      <Link
                        href="/shop-sidebar-5-column"
                        className="product-category"
                      >
                        {banner.title}
                      </Link>
                      <p className="category-short-desc">{banner.desc}</p>
                      <Link href="/contact" className="border-btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
