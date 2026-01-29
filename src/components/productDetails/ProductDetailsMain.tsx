"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

import { useProductsContext } from "@/contextApi/ProductsProvider";
import type { ProductsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

const ProductDetailsMain = ({ id }: { id: string }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { products } = useProductsContext();

  const productId = Number(id);
  const product = useMemo(
    () => products.find((p) => p.id === productId) as ProductsType | undefined,
    [productId, products],
  );

  if (!Number.isFinite(productId)) {
    notFound();
  }
  if (!product) {
    // If user has an old link like /shop-details/44 after we reduced catalog,
    // show a friendly fallback instead of a generic 404 page.
    return (
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="text-center">
            <h2 className="section-main-title mb-20">Product not found</h2>
            <p className="mb-30">
              This product may have been removed when we updated the catalog.
            </p>
            <Link href="/products" className="fill-btn">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    dispatch(cart_product(product));
  };

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="mb-30">
          <button
            type="button"
            className="border-btn"
            onClick={() => router.back()}
          >
            ← Back
          </button>
        </div>

        <div className="row align-items-start">
          <div className="col-lg-6 mb-30">
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <Image
                src={product.productImg}
                alt={product.title}
                width={900}
                height={900}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h2 style={{ fontWeight: 900, marginBottom: 10 }}>
              {product.title}
            </h2>
            <div style={{ color: "#6b7280", marginBottom: 10 }}>
              {product.brand} · {product.category}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 28, color: "#111827" }}>
                {formatMoney(product.price)}
              </div>
              {product.oldPrice ? (
                <div
                  style={{ color: "#9ca3af", textDecoration: "line-through" }}
                >
                  {formatMoney(product.oldPrice)}
                </div>
              ) : null}
            </div>

            {product.rating && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, color: "#111827" }}>
                    Rating:
                  </span>
                  <span style={{ color: "#f59e0b", fontWeight: 700 }}>
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>
            )}

            {product.description ? (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>
                  About this item
                </div>
                <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
                  {product.description}
                </p>
              </div>
            ) : (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>
                  About this item
                </div>
                <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
                  Quality product with reliable performance. Delivery is
                  available nationwide. Add to cart to continue to checkout.
                </p>
              </div>
            )}

            {product.totalProduct !== undefined && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, color: "#111827" }}>
                    Stock:
                  </span>
                  <span
                    style={{
                      color: product.totalProduct > 10 ? "#22c55e" : "#ef4444",
                      fontWeight: 700,
                    }}
                  >
                    {product.totalProduct > 10
                      ? `${product.totalProduct} available`
                      : `Only ${product.totalProduct} left`}
                  </span>
                </div>
              </div>
            )}

            {product.discount && (
              <div style={{ marginBottom: 18 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "#fee2e2",
                    color: "#dc2626",
                    padding: "6px 12px",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {product.discount}% OFF
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                type="button"
                className="fill-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="border-btn"
                onClick={() => {
                  dispatch(cart_product(product));
                  toast.success("Added to cart. Redirecting...");
                  router.push("/cart");
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsMain;
