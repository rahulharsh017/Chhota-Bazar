import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import employeeCartReducer from './employeeSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    employeeCart: employeeCartReducer,
  },
});