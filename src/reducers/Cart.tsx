import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = JSON.parse(localStorage.getItem("cart") || "[]");

const stock = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addProductToCart(state, action: PayloadAction<number>) {
      const productIndex = state.findIndex(
        (product: any) => product.id === action.payload
      );

      if (productIndex >= 0) {
        state[productIndex].quantity++;
      } else {
        state.push({
          id: action.payload,
          quantity: 1,
          name: action.payload,
        });
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeProductFromCart(state, action: PayloadAction<number>) {
      const productIndex = state.findIndex(
        (product: any) => product.id === action.payload
      );

      if (productIndex >= 0) {
        state.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    incrementProductQuantity(state, action: PayloadAction<number>) {
      const productIndex = state.findIndex(
        (product: any) => product.id === action.payload
      );

      if (productIndex >= 0) {
        state[productIndex].quantity++;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decrementProductQuantity(state, action: PayloadAction<number>) {
      const productIndex = state.findIndex(
        (product: any) => product.id === action.payload
      );

      if (productIndex >= 0) {
        state[productIndex].quantity--;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
} = stock.actions;

export default stock.reducer;
