"use client";
import { ProductsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface propsType {
  item: ProductsType;
}

const SingleProductCard = ({ item }: propsType) => {
  const dispatch = useDispatch();
  const [size] = useState<string>(item?.sizeArray?.[0] as string);

  const handleAddToCart = (item: ProductsType) => {
    const newCardProduct = { ...item };
    newCardProduct.sizeArray = [size];
    dispatch(cart_product(newCardProduct));
  };

  // Use description from API if available, otherwise generate one
  const getDescription = () => {
    if (item.description) {
      // Truncate long descriptions to ~100 characters
      return item.description.length > 100
        ? item.description.substring(0, 100) + "..."
        : item.description;
    }
    // Fallback descriptions
    if (item.category === "Household") {
      return "Quality household appliance designed for reliability and efficiency.";
    } else if (item.category === "Parenting") {
      return "Essential parenting product for your baby's comfort and safety.";
    } else if (item.category === "Decor") {
      return "Beautiful decor item to enhance your home's aesthetic appeal.";
    } else if (item.category === "Services") {
      return "Professional service to meet your home maintenance needs.";
    }
    return "Quality product with reliable performance and excellent value.";
  };

  return (
    <div className="single-product-modern">
      <div className="product-image-modern">
        <Link href={`/shop-details/${item.id}`}>
          <Image
            width={400}
            height={500}
            src={item?.productImg}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
        {item?.status && item?.discount && (
          <div className="product-badge-modern">-{item.discount}%</div>
        )}
      </div>
      <div className="product-content-modern">
        <h3 className="product-title-modern">
          <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
        </h3>
        <p className="product-description-modern">{getDescription()}</p>
        <div className="product-price-modern">
          <span className="price-current-modern">
            ₦{item?.price?.toLocaleString()}
          </span>
          {item?.oldPrice && (
            <span className="price-old-modern">
              ₦{item?.oldPrice?.toLocaleString()}
            </span>
          )}
        </div>
        <button
          onClick={() => handleAddToCart(item)}
          className="add-cart-btn-modern"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProductCard;
