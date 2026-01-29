"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import {
  cart_product,
  decrease_quantity,
  remove_cart_product,
  reset_cart,
} from "@/redux/slices/cartSlice";
import { toast } from "sonner";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

const CartMain = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );

  const subtotal = useMemo(() => {
    return cartProducts.reduce(
      (sum, p) => sum + (p.price || 0) * (p.totalCart || 0),
      0,
    );
  }, [cartProducts]);

  const handleClear = () => {
    dispatch(reset_cart());
    toast.success("Cart cleared");
  };

  if (!cartProducts.length) {
    return (
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="text-center">
            <h2 className="section-main-title mb-20">Your cart is empty</h2>
            <p className="mb-30">
              Browse products and add items to your cart to continue.
            </p>
            <Link href="/products" className="fill-btn">
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8">
            <h2 className="section-main-title mb-30">Cart</h2>

            <div
              className="card p-0"
              style={{ border: "1px solid #eee", borderRadius: 8 }}
            >
              <div className="p-20" style={{ padding: 20 }}>
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: "1px solid #f1f1f1",
                    }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: 14, minWidth: 0 }}
                    >
                      <div
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: 10,
                          background: "#f6f6f6",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.productImg}
                          alt={item.title}
                          width={144}
                          height={144}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: 14 }}>
                          {item.brand} · {item.category}
                        </div>
                        <div style={{ fontWeight: 600, marginTop: 6 }}>
                          {formatMoney(item.price)}
                        </div>
                      </div>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{ gap: 10 }}
                    >
                      <button
                        type="button"
                        onClick={() => dispatch(decrease_quantity(item))}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 999,
                          border: "1px solid #e5e7eb",
                          background: "#fff",
                        }}
                      >
                        -
                      </button>
                      <div
                        style={{
                          minWidth: 24,
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        {item.totalCart || 0}
                      </div>
                      <button
                        type="button"
                        onClick={() => dispatch(cart_product(item))}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 999,
                          border: "1px solid #e5e7eb",
                          background: "#fff",
                        }}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(remove_cart_product(item))}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 999,
                          border: "1px solid #fee2e2",
                          background: "#fff",
                          color: "#ef4444",
                          marginLeft: 6,
                        }}
                        aria-label="Remove item"
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className="d-flex justify-content-end"
                  style={{ paddingTop: 16 }}
                >
                  <button
                    type="button"
                    className="border-btn"
                    onClick={handleClear}
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="card"
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                padding: 20,
                position: "sticky",
                top: 100,
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 16 }}>
                Order Summary
              </h3>
              <div
                className="d-flex justify-content-between"
                style={{ marginBottom: 10 }}
              >
                <span style={{ color: "#6b7280" }}>Subtotal</span>
                <span style={{ fontWeight: 700 }}>{formatMoney(subtotal)}</span>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ marginBottom: 16 }}
              >
                <span style={{ color: "#6b7280" }}>Delivery</span>
                <span style={{ fontWeight: 700 }}>Calculated at checkout</span>
              </div>

              <Link
                href="/checkout"
                className="fill-btn w-100 text-center"
                style={{ display: "block" }}
              >
                Checkout
              </Link>
              <div style={{ marginTop: 10 }}>
                <Link
                  href="/products"
                  className="border-btn w-100 text-center"
                  style={{ display: "block" }}
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartMain;
