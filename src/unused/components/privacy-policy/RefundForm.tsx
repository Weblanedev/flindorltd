'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  productId: string;
  paymentId: string;
  productName: string;
}

const RefundForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = () => {
    // const onSubmit: SubmitHandler<FormData> = (data) => {
    // const name = data.name;
    // const email = data.email;
    // const phone = data.phone;
    // const message = data.message;
    // const productId = data.productId;
    // const paymentId = data.paymentId;
    // const productName = data.productName;
    //   const userInfo = {
    //     name,
    //     email,
    //     phone,
    //     message,
    //     productId,
    //     paymentId,
    //     productName,
    //   };
  };

  return (
    <>
      <section className="bd-Contact__area pt-10">
        <div className="container">
          <div className="row g-0 justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="bd-contact__main-wrapper mb-70">
                <div className="bd-section__title-wrapper">
                  <h3 className="bd-section__title mb-50">
                    Request For Refund
                  </h3>
                </div>
                <div className="bd-contact__form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-form-input">
                          <input
                            type="text"
                            placeholder="Enter product id"
                            {...register('name', {
                              required: 'Product id is required',
                            })}
                          />

                          {errors.name && (
                            <span className="error-message">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form-input">
                          <input
                            type="text"
                            placeholder="Enter payment id"
                            {...register('paymentId', {
                              required: 'Payment id  required',
                            })}
                          />
                          {errors.paymentId && (
                            <span className="error-message">
                              {errors.paymentId.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form-input">
                          <input
                            type="text"
                            placeholder="Enter Phone"
                            {...register('phone', {
                              required: 'Phone required',
                            })}
                          />
                          {errors.phone && (
                            <span className="error-message">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form-input">
                          <input
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                              required: 'Email is required',
                            })}
                          />
                          {errors.email && (
                            <span className="error-message">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form-input">
                          <input
                            type="text"
                            placeholder="Product Name"
                            {...register('productName', {
                              required: 'Product Name is required',
                            })}
                          />
                          {errors.productName && (
                            <span className="error-message">
                              {errors.productName.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form-input">
                          <textarea
                            id="message"
                            placeholder="What is Reason For Refund  ...?"
                            {...register('message', {
                              required: 'Reason is required',
                            })}
                          />
                          {errors.message && (
                            <span className="error-message">
                              {errors.message.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="contact-btn">
                      <button type="submit" className="fill-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundForm;
