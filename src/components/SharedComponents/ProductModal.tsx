'use client';
import { products_data } from '@/data/products-data';
import { getColorClass } from '@/hooks/condition-class';
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import ProductInfo from "../shop-details/ProductInfo";
import GetRatting from '@/hooks/GetRatting';
import TimerWrapper from '@/utils/TimerWrapper';
const ProductModal = () => {
  const dispatch = useDispatch();
  const { dynamicId } = useGlobalContext();
  const [activeImg, setActiveImg] = useState(0);
  const [productImg, setProductImg] = useState<StaticImageData>();
  const item = products_data?.find(itm => itm.id == dynamicId) as ProductsType;
  const [sizeNumber, setSizeNumber] = useState<number>(0);
  const [size, setSize] = useState<string>(item?.sizeArray?.[0] as string);
  // const handleChange = (e: any) => {};
  const handleImg = (item: any, index: number) => {
    setProductImg(item.activeImg);
    setActiveImg(index);
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const quantity = cartProducts.find(itm => itm?.id === item?.id);
  const totalCart = quantity?.totalCart ? quantity?.totalCart : 0;

  const handleActiveSize = (itm: string, id: number) => {
    setSizeNumber(id);
    setSize(itm);
  };

  const handleAddToCart = (item: ProductsType) => {
    const newCardProduct = { ...item };
    newCardProduct.sizeArray = [size];
    newCardProduct.productImg = productImg ? productImg : item?.productImg;
    dispatch(cart_product(newCardProduct));
  };

  const handleReset = () => {
    setActiveImg(0);
    setProductImg(undefined);
  };

  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="productmodal"
        //   tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  onClick={handleReset}
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  <div className="bd__shop-details-inner">
                    <div className="container container-small">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="product-details-tab-wrapper mb-30">
                            <div className="product-details-tab">
                              <div
                                className="tab-content"
                                id="productDetailsTab"
                              >
                                {item?.productColor === true ? (
                                  <>
                                    {item?.productColorArray?.length ? (
                                      <>
                                        {item?.productColorArray?.map(
                                          (colorProduct, index) => (
                                            <div
                                              key={index}
                                              className={`tab-pane fade prodcut_bg ${
                                                index === 0 ? 'active show' : ''
                                              }`}
                                              id={colorProduct?.color}
                                              role="tabpanel"
                                              aria-labelledby={`${colorProduct?.color}-tab`}
                                            >
                                              <Image
                                                className="active"
                                                src={
                                                  productImg
                                                    ? productImg
                                                    : item?.productImg
                                                }
                                                alt="product-img"
                                              />
                                            </div>
                                          )
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <div
                                      className="tab-pane fade active show"
                                      id="pro-1"
                                      role="tabpanel"
                                      aria-labelledby="pro-1-tab"
                                    >
                                      <Image
                                        className="active"
                                        src={item?.productImg}
                                        alt="product-img"
                                      />
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="product-details-nav">
                              {item?.productColor === true ? (
                                <>
                                  <ul className="product-color-nav">
                                    {item?.productColorArray?.map(
                                      (colorItems, index) => {
                                        const dynamicColor = getColorClass(
                                          colorItems.color
                                        );
                                        return (
                                          <li
                                            onClick={() =>
                                              handleImg(colorItems, index)
                                            }
                                            key={index}
                                            className={`${dynamicColor} ${
                                              activeImg === index
                                                ? 'active'
                                                : ''
                                            }`}
                                          >
                                            <Image
                                              src={colorItems.activeImg}
                                              alt="img"
                                            />
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="product-side-info mb-30">
                            <h4 className="product-name mb-10">
                              {item?.title}
                            </h4>
                            <span className="product-price mr-1">
                              ${item?.price}.00
                            </span>
                            {item?.oldPrice ? (
                              <>
                                <span className="price-old">
                                  £{item?.oldPrice}.00
                                </span>{' '}
                                <span className="save_message">
                                  You Save ${item?.oldPrice - item?.price} (
                                  {item?.discount}
                                  %)
                                </span>
                              </>
                            ) : (
                              <></>
                            )}

                            <div className="product-ratting">
                              <ul>
                                <GetRatting averageRating={item?.rating} /> 150
                                Ratings | 35 Reviews
                              </ul>
                            </div>

                            <div className="prodcut_category_brand mt-30">
                              <ul>
                                <li>
                                  {' '}
                                  Brand:{' '}
                                  <span className="text-success">
                                    {item?.brand},
                                  </span>{' '}
                                  Category:{' '}
                                  <span className="text-success">
                                    {item?.category}
                                  </span>{' '}
                                </li>
                              </ul>
                            </div>

                            {item?.discount ? (
                              <>
                                <div className="offer_coutdown">
                                  <div className="mr-10">
                                    <span className="text-bold">
                                      Ends In :{' '}
                                    </span>
                                  </div>

                                  <TimerWrapper />
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                            <p className="mb-30">
                              Matent maecenas nec massa viverra aci ute litora
                              aliquam habitant proin commodo bibendum rutru
                              habitant est magnis quisque aliquet congue vesti
                              bulum suscipi erose tellus odio elite purus
                              feugiat prim libero senes nisie gravia
                            </p>
                            {item?.totalProduct && item?.totalProduct > 0 ? (
                              <>
                                <div className="available-sizes">
                                  <span>Available Sizes : </span>
                                  <div className="product-available-sizes">
                                    {item?.sizeArray?.map((itm, index) => (
                                      <button
                                        onClick={() =>
                                          handleActiveSize(itm, index)
                                        }
                                        className={
                                          sizeNumber === index
                                            ? 'active_size'
                                            : ''
                                        }
                                        type="button"
                                        key={index}
                                      >
                                        {itm}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div className="product-quantity-cart mb-25">
                                  <div className="product-quantity-form">
                                    <form onSubmit={e => e.preventDefault()}>
                                      <button
                                        onClick={() =>
                                          dispatch(decrease_quantity(item))
                                        }
                                        className="cart-minus"
                                      >
                                        <i className="far fa-minus"></i>
                                      </button>
                                      <input
                                        className="cart-input"
                                        type="text"
                                        readOnly
                                        value={totalCart ? totalCart : 0}
                                      />
                                      <button
                                        onClick={() => handleAddToCart(item)}
                                        className="cart-plus"
                                      >
                                        <i className="far fa-plus"></i>
                                      </button>
                                    </form>
                                  </div>
                                  <button
                                    className="fill-btn"
                                    onClick={() => handleAddToCart(item)}
                                  >
                                    Add to Cart
                                  </button>
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                            <div>
                              {item?.totalProduct && item?.totalProduct > 0 ? (
                                <>
                                  <p>
                                    {item?.totalProduct &&
                                    item?.totalProduct > 1
                                      ? `${item?.totalProduct} Pieces Available`
                                      : `${item?.totalProduct} Piece Available`}
                                  </p>
                                </>
                              ) : (
                                <>
                                  {' '}
                                  <p className="text-danger">
                                    This Product Is Out Of Stock
                                  </p>{' '}
                                </>
                              )}
                            </div>
                            {item?.productColorArray?.length ? (
                              <>
                                <div className="product__details__tag tagcloud mt-25 mb-10">
                                  <span>Variation : </span>

                                  {item?.productColorArray?.map(
                                    (color, index) => (
                                      <Link key={index} href="#" rel="tag">
                                        {color.color}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
