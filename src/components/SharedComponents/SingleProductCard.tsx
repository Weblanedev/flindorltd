'use client';
import { getColorClass, getTagClass } from '@/hooks/condition-class';
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { cart_compare_product } from '@/redux/slices/compareSlice';
import { wishlist_product } from '@/redux/slices/wishlistSlice';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
interface propsType {
  item: ProductsType;
}
const SingleProductCard = ({ item }: propsType) => {
  const { setDynamicId } = useGlobalContext();
  const [size] = useState<string>(item?.sizeArray?.[0] as string);
  const dispatch = useDispatch();
  const [activeImg, setActiveImg] = useState(0);
  const [productImg, setProductImg] = useState<StaticImageData>();
  const handleImg = (item: any, index: number) => {
    setProductImg(item.activeImg);
    setActiveImg(index);
  };

  const handleAddToCart = (item: ProductsType) => {
    const newCardProduct = { ...item };
    newCardProduct.sizeArray = [size];
    newCardProduct.productImg = productImg ? productImg : item?.productImg;
    dispatch(cart_product(newCardProduct));
  };
  const handleAddToCompare = (item: ProductsType) => {
    const newCardProduct = { ...item };
    newCardProduct.productImg = productImg ? productImg : item?.productImg;
    dispatch(cart_compare_product(newCardProduct));
  };
  const status = item?.status ? item?.status : '';
  const tagClass = getTagClass(status);
  return (
    <>
      <div className="single-product">
        <div className="product-image pos-rel">
          <Link href={`/shop-details/${item.id}`} className="">
            <Image
              style={{ width: '100%', height: 'auto' }}
              src={productImg ? productImg : item?.productImg}
              alt="img"
            />
          </Link>
          <div className="product-action">
            <button
              type="button"
              className="quick-view-btn"
              data-toggle="tooltip"
              data-placement="top"
              title="Quick View"
              data-bs-toggle="modal"
              data-bs-target="#productmodal"
              onClick={() => setDynamicId(item.id)}
            >
              <i className="fal fa-eye"></i>
            </button>
            <button
              onClick={() => dispatch(wishlist_product(item))}
              type="button"
              className="wishlist-btn"
            >
              <i className="fal fa-heart"></i>
            </button>
            <button
              onClick={() => handleAddToCompare(item)}
              type="button"
              className="compare-btn"
            >
              <i className="fal fa-exchange"></i>
            </button>
          </div>
          <div className="product-action-bottom">
            <button
              onClick={() => handleAddToCart(item)}
              type="button"
              className="add-cart-btn"
            >
              <i className="fal fa-shopping-bag"></i>Add to Cart
            </button>
          </div>
          {item?.status ? (
            <>
              <div className="product-sticker-wrapper">
                <span className={`product-sticker ${tagClass}`}>
                  {item?.status === 'Discounted'
                    ? `-${item?.discount}%`
                    : item.status}
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="product-desc">
          <div className="product-name">
            <Link href={`/shop-details/${item.id}`}> {item?.title} </Link>
          </div>
          <div className="product-price">
            <span className="price-now">£{item?.price}.00</span>
            {item?.oldPrice ? (
              <>
                <span className="price-old">£{item?.oldPrice}.00</span>
              </>
            ) : (
              <></>
            )}
          </div>
          {item?.productColor === true ? (
            <>
              <ul className="product-color-nav">
                {item?.productColorArray?.map((colorItems, index) => {
                  const dynamicColor = getColorClass(colorItems.color);
                  return (
                    <li
                      title={colorItems.color}
                      onClick={() => handleImg(colorItems, index)}
                      key={index}
                      className={`${dynamicColor} ${
                        activeImg === index ? 'active' : ''
                      }`}
                    >
                      <Image src={colorItems.activeImg} alt="img" />
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
