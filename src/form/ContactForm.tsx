"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    console.log(data);
    toast.success("Message Send Successfully", { id: toastId, duration: 1000 })
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="single-form-input">
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters",
                  },
                })}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-form-input">
              <input
                type="text"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-form-input">
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-form-input">
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                name="message"
                id="message"
                placeholder="Messages"
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="contact-btn">
          <button type="submit" className="fill-btn">
            Submit Now
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
