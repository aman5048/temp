import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../components/products/productListSlice";
import counterReducer from "../components/cart/cartSlice";
import authReducer from "../components/pages/auth/authSlice";
import cartReducer from "../components/cart/cartSlice";
import orderReducer from "../components/orders/orderSlice";
import userReducer from "../components/user/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
