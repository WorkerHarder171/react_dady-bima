import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [
    {
      id: uuid(),
      name: "Teh Olong",

      category: "Mercedes",

      freshness: "Brand New",

      price: 90000,

      image: null,
      additional: "Ini merupakan teh pilihan",
    },
    {
      id: uuid(),
      name: "Kopi Arabica",

      category: "Audi",

      freshness: "Second Hand",

      price: 80000,

      image: null,

      additional: "Ini merupakan biji kopi pilihan",
    },
    {
      id: uuid(),
      name: "Roti Panggang",

      category: "Volvo",

      freshness: "Refurbished",

      price: 100000,

      image: null,

      additional: "Ini merupakan Roti terbaik yang pernah ada",
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
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
