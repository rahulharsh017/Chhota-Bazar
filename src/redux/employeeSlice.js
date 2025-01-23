import { createSlice } from '@reduxjs/toolkit';

const employeeCartSlice = createSlice({
  name: 'employeeCart',
  initialState: {
    cart: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const existingProduct = state.cart.find(product => product._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload);
    },
    increaseProductQuantity: (state, action) => {
      const product = state.cart.find(product => product._id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseProductQuantity: (state, action) => {
      const product = state.cart.find(product => product._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } = employeeCartSlice.actions;
export default employeeCartSlice.reducer;