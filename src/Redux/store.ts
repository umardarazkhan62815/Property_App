import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});