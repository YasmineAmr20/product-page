import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts= createAsyncThunk("productSlice/fetchProducts", async () => {
 const res = await fetch(" http://localhost:200/all_product");
 const data= await res.json();
 return data;
});
const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      return action.payload; //initialState: [data],
    })
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
