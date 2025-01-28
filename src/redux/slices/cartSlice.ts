"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
import moment from "moment";
import { ProductsType } from "@/interFace/interFace";
import { toast } from "sonner";

interface CartState {
  cartProducts: ProductsType[];
}

const initialState: CartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart_product: (state, { payload }: PayloadAction<ProductsType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );

      if (productIndex >= 0) {
        const toastId = toast.loading('');
        state.cartProducts[productIndex].totalCart! += 1;
        toast.info("Increase Product Quantity",{ id: toastId, duration: 1000 });
      } else {
        const now = moment();
        const orderDate = now.format("MM/DD/YY hh:mm a"); // Format the current date as "MM/DD/YY hh:mm a"

        const tempProduct = {
          ...payload,
          totalCart: 1,
          orderDate: orderDate, // Include the formatted date as "orderDate"
        };
        state.cartProducts.push(tempProduct);
        const toastId = toast.loading('');
        const capitalizedproductNameName =
          payload.title.charAt(0).toUpperCase() + payload.title.slice(1);
        toast.success(`${capitalizedproductNameName} added to cart`,{ id: toastId, duration: 1000 });
      }
    },
    cart_group_product: (state, { payload }: PayloadAction<ProductsType[]>) => {
      const toastId = toast.loading('');
      payload.forEach(product => {
        const productIndex = state.cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (productIndex >= 0) {
          state.cartProducts[productIndex].totalCart! += 1;
          toast.info("Increase Product Quantity",{ id: toastId, duration: 1000 });
        } else {
          const toastId = toast.loading('');
          const now = moment();
          const orderDate = now.format("MM/DD/YY hh:mm a");
    
          const tempProduct = {
            ...product,
            totalCart: 1,
            orderDate: orderDate,
          };
          state.cartProducts.push(tempProduct);
          const capitalizedProductName =
            product.title.charAt(0).toUpperCase() + product.title.slice(1);
          toast.success(`${capitalizedProductName} added to cart`,{ id: toastId, duration: 1000 });
        }
      });
    },
    


    remove_cart_product: (state, { payload }: PayloadAction<ProductsType>) => {
      const toastId = toast.loading('');
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload.id
      );
      toast.error(`Remove from your cart`,{ id: toastId, duration: 1000 });
    },

    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }: PayloadAction<ProductsType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );

      if (cartIndex >= 0) {
        const totalCart = state.cartProducts[cartIndex]?.totalCart ?? 0; // Use 0 as the default value if totalCart is undefined

        if (totalCart > 1) {
          const toastId = toast.loading('');
          state.cartProducts[cartIndex].totalCart = totalCart - 1;
          toast.success("Quantity Decrease",{ id: toastId, duration: 1000 });
        } else {
          const toastId = toast.loading('');
          // Display an error message using your toast library
          toast.error(`Quantity cannot be less than 1`,{ id: toastId, duration: 1000 });
        }
      }
    },
  },
});

export const {
  cart_product,
  cart_group_product,
  remove_cart_product,
  clear_cart,
  decrease_quantity,
} = cartSlice.actions;

export default cartSlice.reducer;
