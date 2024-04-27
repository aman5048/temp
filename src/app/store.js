import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/products/productListSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
