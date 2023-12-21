import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct=state.find((product)=>product.id === action.payload.id);
      if(findProduct){
        findProduct.quantity+=1;
      }else {
        const productClone={...action.payload,quantity:1}
        state.push(productClone);
      }

    },
    delFromCart: (state, action) => {
             return state.filter(product=>product.id !== action.payload.id);

    },
    clear: (state, action) => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart,clear,delFromCart} = cartSlice.actions;

export default cartSlice.reducer;
