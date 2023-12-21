import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/Product-slice";
import cartSlice from "./slices/Cart-slice";

export default configureStore({
  reducer: {
    products: productSlice,
    cart:cartSlice,

  },
});
