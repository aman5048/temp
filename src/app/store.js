import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/products/productListSlice";
import counterReducer from "../components/cart/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});
