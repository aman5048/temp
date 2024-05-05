import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../components/products/productListSlice";
import counterReducer from "../components/cart/cartSlice";
import authReducer from "../components/pages/auth/authSlice";
// import cartReducer from "../components/cart/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    auth: authReducer,
    // cart: cartReducer,
  },
});
