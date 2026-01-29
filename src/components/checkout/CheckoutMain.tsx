"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { reset_cart } from "@/redux/slices/cartSlice";
import { toast } from "sonner";

type DeliveryDetails = {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
};

type CardDetails = {
  cardholderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

const maskCard = (cardNumber: string) => {
  const digits = cardNumber.replace(/\D/g, "");
  if (digits.length < 4) return "****";
  return `**** **** **** ${digits.slice(-4)}`;
};

// Format card number with spaces every 4 digits
const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  const formatted = digits.match(/.{1,4}/g)?.join(" ") || digits;
  return formatted.slice(0, 19); // Max 16 digits + 3 spaces = 19 chars
};

// Format expiry date as MM/YY
const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
};

// Validate expiry format (MM/YY)
const isValidExpiry = (expiry: string) => {
  const parts = expiry.split("/");
  if (parts.length !== 2) return false;
  const month = parseInt(parts[0], 10);
  const year = parseInt(parts[1], 10);
  if (isNaN(month) || isNaN(year)) return false;
  if (month < 1 || month > 12) return false;
  if (year < 0 || year > 99) return false;
  return true;
};

// Validate email format
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

// Validate phone number (should have at least 10 digits)
const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
};

// Validate full name (should have at least 2 characters, allow spaces)
const isValidFullName = (name: string) => {
  return name.trim().length >= 2;
};

// Validate postal code (should have at least 4 characters)
const isValidPostalCode = (postalCode: string) => {
  return postalCode.trim().length >= 4;
};

const CheckoutMain = () => {
  const router = useRouter();
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

  const [step, setStep] = useState<1 | 2>(1);
  const [delivery, setDelivery] = useState<DeliveryDetails>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [card, setCard] = useState<CardDetails>({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [processing, setProcessing] = useState(false);
  const [countdown, setCountdown] = useState(6);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const canContinueToPayment =
    isValidFullName(delivery.fullName) &&
    isValidEmail(delivery.email) &&
    isValidPhone(delivery.phone) &&
    delivery.street.trim().length > 0 &&
    delivery.city.trim().length > 0 &&
    delivery.state.trim().length > 0 &&
    isValidPostalCode(delivery.postalCode);

  const canPay =
    canContinueToPayment &&
    isValidFullName(card.cardholderName) &&
    card.cardNumber.replace(/\D/g, "").length >= 13 && // At least 13 digits (Visa/MC start with 4/5)
    card.cardNumber.replace(/\D/g, "").length <= 19 && // Max 19 digits
    isValidExpiry(card.expiry) &&
    card.cvv.length === 3;

  // Don't redirect if we're processing payment or already redirecting
  if (!cartProducts.length && !processing && !isRedirecting) {
    router.replace("/products");
    return null;
  }

  const onContinue = () => {
    if (!canContinueToPayment) {
      toast.error("Please fill all delivery details");
      return;
    }
    setStep(2);
    toast.success("Delivery details saved");
  };

  // Countdown timer effect
  useEffect(() => {
    if (processing && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [processing, countdown]);

  // Handle redirect after payment processing completes
  useEffect(() => {
    if (isRedirecting && !processing) {
      // Small delay to ensure state updates are complete
      const redirectTimer = setTimeout(() => {
        router.replace("/");
      }, 100);
      return () => clearTimeout(redirectTimer);
    }
  }, [isRedirecting, processing, router]);

  const onPay = async () => {
    if (!canPay) {
      toast.error("Please fill all card details");
      return;
    }

    setProcessing(true);
    setCountdown(6); // Reset countdown to 6 seconds

    // Simulate processing - wait at least 6 seconds
    setTimeout(() => {
      setProcessing(false);
      toast.success(
        "Payment processed successfully. We will send a verification code to your email or phone number.",
      );
      // Reset cart
      dispatch(reset_cart());
      // Set redirecting flag - useEffect will handle the redirect
      setIsRedirecting(true);
    }, 6000);
  };

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="text-center mb-40">
          <h2 style={{ fontWeight: 800, fontSize: 42, marginBottom: 10 }}>
            Checkout
          </h2>
          <div className="d-inline-flex align-items-center" style={{ gap: 14 }}>
            <div className="d-flex align-items-center" style={{ gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: step === 1 ? "#2563eb" : "#22c55e",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                }}
              >
                {step === 1 ? "1" : "✓"}
              </div>
              <div style={{ fontWeight: 600, opacity: 0.9 }}>Delivery</div>
            </div>
            <div
              style={{
                width: 90,
                height: 4,
                background: "#2563eb",
                borderRadius: 99,
                opacity: step === 1 ? 0.3 : 1,
              }}
            />
            <div className="d-flex align-items-center" style={{ gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: step === 2 ? "#2563eb" : "#e5e7eb",
                  color: step === 2 ? "#fff" : "#6b7280",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                }}
              >
                2
              </div>
              <div style={{ fontWeight: 600, opacity: step === 2 ? 0.9 : 0.5 }}>
                Payment
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-lg-6">
            <h3 style={{ fontWeight: 800, marginBottom: 16 }}>Order Summary</h3>
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 18,
                background: "#fafafa",
              }}
            >
              {cartProducts.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between"
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid #eee",
                    gap: 14,
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: 12, minWidth: 0 }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 44,
                        borderRadius: 10,
                        overflow: "hidden",
                        background: "#fff",
                      }}
                    >
                      <Image
                        src={item.productImg}
                        alt={item.title}
                        width={128}
                        height={88}
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
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ color: "#6b7280", fontSize: 14 }}>
                        {item.primaryColor ? item.primaryColor : item.brand} ·
                        Qty {item.totalCart || 0}
                      </div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 800, color: "#2563eb" }}>
                    {formatMoney((item.price || 0) * (item.totalCart || 0))}
                  </div>
                </div>
              ))}

              <div
                className="d-flex justify-content-between"
                style={{ paddingTop: 14 }}
              >
                <div style={{ fontWeight: 800, fontSize: 18 }}>Total:</div>
                <div
                  style={{ fontWeight: 900, fontSize: 18, color: "#2563eb" }}
                >
                  {formatMoney(subtotal)}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {step === 1 ? (
              <>
                <h3 style={{ fontWeight: 800, marginBottom: 16 }}>
                  Delivery Details
                </h3>
                <div
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={delivery.fullName}
                      onChange={(e) =>
                        setDelivery({ ...delivery, fullName: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      minLength={2}
                    />
                  </div>
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      value={delivery.email}
                      onChange={(e) =>
                        setDelivery({ ...delivery, email: e.target.value })
                      }
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={delivery.phone}
                      onChange={(e) =>
                        setDelivery({ ...delivery, phone: e.target.value })
                      }
                      placeholder="+234 800 000 0000"
                      required
                      minLength={10}
                    />
                  </div>
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Street Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={delivery.street}
                      onChange={(e) =>
                        setDelivery({ ...delivery, street: e.target.value })
                      }
                      placeholder="123 Main Street"
                      required
                      minLength={3}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-15">
                      <label style={{ fontWeight: 700 }}>City *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={delivery.city}
                        onChange={(e) =>
                          setDelivery({ ...delivery, city: e.target.value })
                        }
                        placeholder="Lagos"
                        required
                        minLength={2}
                      />
                    </div>
                    <div className="col-md-6 mb-15">
                      <label style={{ fontWeight: 700 }}>State *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={delivery.state}
                        onChange={(e) =>
                          setDelivery({ ...delivery, state: e.target.value })
                        }
                        placeholder="Lagos State"
                        required
                        minLength={2}
                      />
                    </div>
                  </div>
                  <div className="mb-20">
                    <label style={{ fontWeight: 700 }}>Postal Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={delivery.postalCode}
                      onChange={(e) =>
                        setDelivery({ ...delivery, postalCode: e.target.value })
                      }
                      placeholder="100001"
                      required
                      minLength={4}
                    />
                  </div>
                  <button
                    type="button"
                    className="fill-btn w-100"
                    onClick={onContinue}
                    disabled={!canContinueToPayment}
                    style={{
                      opacity: canContinueToPayment ? 1 : 0.6,
                      cursor: canContinueToPayment ? "pointer" : "not-allowed",
                    }}
                  >
                    Continue to Payment{" "}
                    <i
                      className="fal fa-long-arrow-right"
                      style={{ marginLeft: 10 }}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    background: "#ecfdf3",
                    border: "1px solid #bbf7d0",
                    padding: 12,
                    borderRadius: 10,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ color: "#166534", fontWeight: 700 }}>
                    Delivery details saved.
                  </span>{" "}
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      background: "transparent",
                      border: 0,
                      color: "#166534",
                      textDecoration: "underline",
                      fontWeight: 700,
                    }}
                  >
                    Edit
                  </button>
                </div>

                <h3 style={{ fontWeight: 800, marginBottom: 16 }}>
                  Payment Details
                </h3>
                <div
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Cardholder Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.cardholderName}
                      onChange={(e) =>
                        setCard({ ...card, cardholderName: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      minLength={2}
                    />
                  </div>
                  <div className="mb-15">
                    <label style={{ fontWeight: 700 }}>Card Number *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setCard({ ...card, cardNumber: formatted });
                      }}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      minLength={13}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-15">
                      <label style={{ fontWeight: 700 }}>Expiry Date *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={card.expiry}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          setCard({ ...card, expiry: formatted });
                        }}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        pattern="[0-9]{2}/[0-9]{2}"
                      />
                    </div>
                    <div className="col-md-6 mb-15">
                      <label style={{ fontWeight: 700 }}>CVV *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={card.cvv}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "");
                          if (digits.length <= 3) {
                            setCard({ ...card, cvv: digits });
                          }
                        }}
                        placeholder="123"
                        maxLength={3}
                        required
                        minLength={3}
                        pattern="[0-9]{3}"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="fill-btn w-100"
                    onClick={onPay}
                    disabled={!canPay || processing}
                    style={{
                      opacity: canPay && !processing ? 1 : 0.6,
                      cursor: canPay && !processing ? "pointer" : "not-allowed",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {processing && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "grid",
            placeItems: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            style={{
              width: "min(520px, 100%)",
              background: "#fff",
              borderRadius: 16,
              padding: 28,
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: "50%",
                border: "6px solid #dbeafe",
                borderTopColor: "#2563eb",
                margin: "0 auto 16px",
                animation: "spin 1s linear infinite",
              }}
            />
            <h3 style={{ fontWeight: 900, marginBottom: 12 }}>
              Processing Payment
            </h3>
            <p
              style={{
                color: "#6b7280",
                marginBottom: 12,
                lineHeight: 1.6,
              }}
            >
              Please wait while we process your payment...
            </p>
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: 10,
                padding: 14,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  color: "#1e40af",
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                On successful payment processing, we will send a verification
                code to your email ({delivery.email}) or phone number (
                {delivery.phone}) for verification before charging your card.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                color: "#2563eb",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              <span>Processing in:</span>
              <span
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 6,
                  minWidth: 40,
                  textAlign: "center",
                }}
              >
                {countdown}s
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default CheckoutMain;
