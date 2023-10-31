import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restFullAPI } from "../api/productAPI";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchApiProduct = createAsyncThunk(
  "products/fetchApiProduct",
  restFullAPI.getPost
);

export const postApiProduct = createAsyncThunk(
  "products/postApiProduct",
  restFullAPI.addProduct
);

export const deleteApiProduct = createAsyncThunk(
  "product/deleteApiProduct",
  restFullAPI.deleteProduct
);

export const editApiProduct = createAsyncThunk(
  "product/editApiProduct:id",
  async (data) => {
    const response = await restFullAPI.editProduct(data.id, data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApiProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchApiProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchApiProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(postApiProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postApiProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = [...state.products, action.payload];
    });
    builder.addCase(postApiProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteApiProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteApiProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(deleteApiProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(editApiProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editApiProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(editApiProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
