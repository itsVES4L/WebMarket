import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosWithConfig = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    Authorization: "Bearer",
    "Content-Type": "application/json",
  },
});


export const getProductsList = createAsyncThunk("products/get-all-products/", async () => {
    try {
      const response = await axiosWithConfig.get("/products/get-all-products/");
      return response;
    } catch (error) {
      console.error(
        `
             message: ${error.message}
             `,
        `detail: ${error.response?.data.detail}
             `,
        `status code : ${error.response?.status}`
      );
      throw error;
    }
  });


  const initialGetProductData = {
    productList:[],
    isLoading: false,
    isLoggedIn: false,
    error: null,
  };

 
const getProductsListSlice = createSlice({
  name: "productListSlice",
  initialState: initialGetProductData,
  reducers: {
    any: (state, action) => {
       return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsList.fulfilled, (state, action) => {
        (state.productList = action.payload.data.products_list),
          (state.isLoading = false),
          (state.isLoggedIn = true),
          (state.error = null);
      })
      .addCase(getProductsList.pending, (state, action) => {
        (state.productList = null),
          (state.isLoading = true),
          (state.isLoggedIn = false),
          (state.error = null);
      })
      .addCase(getProductsList.rejected, (state, action) => {
        (state.productList = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.error = "خطا در برقراری ارتباط ...");
      });
  },
});
  

const getProductsListReducer = getProductsListSlice.reducer;
export {getProductsListReducer}