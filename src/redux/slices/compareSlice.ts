"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
import moment from "moment";
import { ProductsType } from "@/interFace/interFace";
import { toast } from "sonner";
interface CompareState {
  cartProducts: ProductsType[];
}
const initialState: CompareState = {
  cartProducts: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    cart_compare_product: (state, { payload }: PayloadAction<ProductsType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );

      if (productIndex >= 0) {
         return;
      } else {
        const now = moment();
        const orderDate = now.format("MM/DD/YY hh:mm a"); // Format the current date as "MM/DD/YY hh:mm a"

        const tempProduct = {
          ...payload,
          totalCart: 1,
          orderDate: orderDate, // Include the formatted date as "orderDate"
        };
        state.cartProducts.push(tempProduct);
        const capitalizedproductNameName =
          payload.title.charAt(0).toUpperCase() +
          payload.title.slice(1);
          const toastId = toast.loading('');
        toast.success(`${capitalizedproductNameName} Added To Compare List`,{ id: toastId, duration: 1000 });
      }
    },
    remove_cart_compare_product: (
      state,
      { payload }: PayloadAction<ProductsType>
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload.id
      );
      const toastId = toast.loading('');
      toast.error(`Remove From Your Compare List`,{ id: toastId, duration: 1000 });
    },

    clear_compare_product: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_compare_quantity: (state, { payload }: PayloadAction<ProductsType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
    
      if (cartIndex >= 0) {
        const totalCart = state.cartProducts[cartIndex]?.totalCart ?? 0; // Use 0 as the default value if totalCart is undefined
    
        if (totalCart > 1) {
          state.cartProducts[cartIndex].totalCart = totalCart - 1;
          const toastId = toast.loading('');
          toast.success("Quantity Decrease",{ id: toastId, duration: 1000 })
        } else {
          // Display an error message using your toast library
          const toastId = toast.loading('');
          toast.error(`Quantity cannot be less than 1`,{ id: toastId, duration: 1000 });
        }
      }
    }
  },
});
export const {
  cart_compare_product,
  remove_cart_compare_product,
  clear_compare_product,
  decrease_compare_quantity,
} = compareSlice.actions;

export default compareSlice.reducer;
