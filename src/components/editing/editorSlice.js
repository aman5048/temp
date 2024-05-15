import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCustomProduct,
  fetchAllCustomProducts,
  fetchCustomProductsById,
} from "./editorAPI";

export const fetchAllCustomProductsAsync = createAsyncThunk(
  "customProduct/fetchAllCustomProducts",
  async () => {
    const response = await fetchAllCustomProducts();
    return response.data;
  }
);

export const createCustomProductAsync = createAsyncThunk(
  "customProduct/create",
  async (product) => {
    const response = await createCustomProduct(product);
    console.log(response.data);
    return response.data;
  }
);

export const fetchCustomProductsByIdAsync = createAsyncThunk(async (id) => {
  const response = await fetchCustomProductsById(id);
  return response.data;
});

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    products: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCustomProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCustomProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchCustomProductsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomProductsByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCustomProducts = action.payload;
      })
      .addCase(createCustomProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCustomProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createProductscustom.push(action.payload);
      });
  },
});

export const createCustomisedProduct = editorSlice.actions;
export const selectAllCustomProducts = (state) => state.editor.products;
export const selectCustomProductById = (state) =>
  state.editor.selectCustomProductById;
export default editorSlice.reducer;
