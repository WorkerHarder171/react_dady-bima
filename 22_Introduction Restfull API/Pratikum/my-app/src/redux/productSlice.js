import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid"
import axios from "axios";

const url = "https://652a1c1155b137ddc83f4d53.mockapi.io/product";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  reducers: {
    //function untuk menambahkan data object yang ada pada array products di initialState
    addProduct: (state, actions) => {
      state.products = [...state.products, actions.payload];
      console.log("cheked:", actions.payload);
    },

    //function untuk melakukan edit data object yang telah ada pada array products
    editProduct: (state, actions) => {
      const { id, name, category, image, freshness, additional, price } =
        actions.payload;
      const productIndex = state.products.findIndex((data) => data.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          name: name,
          category: category,
          image: image,
          freshness: freshness,
          additional: additional,
          price: price,
        };
      }
    },

    //function untuk melakukan penghapusan data yang ada
    deleteProduct: (state, action) => {
      state.products = state.products.filter((data) => {
        if (data.id !== action.payload) {
          return { data };
        }
        return alert("Apakah anda ingin menghapus product ini?");
      });
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
