"use client";
import { getTagClass } from "@/hooks/condition-class";
import useGlobalContext from "@/hooks/use-context";
import { ProductsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface propsType {
  item: ProductsType;
}

const SliderProductCard = ({ item }: propsType) => {
  const dispatch = useDispatch();
  const { setDynamicId } = useGlobalContext();
  const [imgIndex, setImgIndex] = useState(0);
  const [productImg, setProductImg] = useState<StaticImageData>();
  const handleChangeImgNext = (itm: any) => {
    setImgIndex((prevIndex) => (prevIndex + 1) % itm.productColorArray.length);
    setProductImg(itm.productColorArray[imgIndex].activeImg);
  };

  const handleChangeImgPrev = (itm: any) => {
    setImgIndex(
      (prevIndex) =>
        (prevIndex - 1 + itm.productColorArray.length) %
        itm.productColorArray.length
    );
    setProductImg(itm.productColorArray[imgIndex].activeImg);
  };

  const status = item?.status ? item?.status : ''

  const tagClass = getTagClass(status)

  return (
    <>
      <div className="single-product single-product-st2">
        <div className="product-image pos-rel">
          <Link href={`/shop-details/${item.id}`} className="">
            <Image
              style={{ width: "100%", height: "auto" }}
              src={productImg ? productImg : item?.productImg}
              alt="img"
            />
          </Link>

          <div className="product-action-bottom">
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
              onClick={() => dispatch(cart_product(item))}
              type="button"
              className="add-cart-btn"
            >
              <i className="fal fa-shopping-bag"></i>Add to Cart
            </button>
            <button
              onClick={() => dispatch(wishlist_product(item))}
              type="button"
              className="wishlist-btn"
            >
              <i className="fal fa-heart"></i>
            </button>
          </div>

          {item?.status ? (
            <>
              <div className="product-sticker-wrapper">
                <span className={`product-sticker ${tagClass}`}>
                  {item?.status === "Discounted"
                    ? `-${item?.discount}%`
                    : item.status}
                </span>
              </div>
            </>
          ) : (
            <></>
          )}

          {item?.productColor === true ? (
            <>
              <div className="product-nav">
                <div
                  onClick={() => handleChangeImgPrev(item)}
                  className="product-nav-prev"
                >
                  <i className="fal fa-angle-left"></i>
                </div>
                <div
                  onClick={() => handleChangeImgNext(item)}
                  className="product-nav-next"
                >
                  <i className="fal fa-angle-right"></i>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="product-desc">
          <div className="product-name">
            <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
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
        </div>
      </div>
    </>
  );
};

export default SliderProductCard;
