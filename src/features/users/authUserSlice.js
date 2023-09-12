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

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axiosWithConfig.post("auth/login/", data);
    const payload = data;
    return payload.phone;
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

export const verify = createAsyncThunk("auth/verify", async (data) => {
  try {
    const response = await axiosWithConfig.post("auth/verify/", data);
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
  }
});

const initialVerifyState = {
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authVerifySlice = createSlice({
  name: "authUserVerify",
  initialState: initialVerifyState,
  reducers: {
    logout: (state, action) => {
      (state.token = null),
        (state.isLoading = false),
        (state.isLoggedIn = false),
        (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verify.fulfilled, (state, action) => {
        (state.token = action.payload.headers["x-csrf-token"]),
          (state.isLoading = false),
          (state.isLoggedIn = true),
          (state.error = null);
      })
      .addCase(verify.pending, (state, action) => {
        (state.token = null),
          (state.isLoading = true),
          (state.isLoggedIn = false),
          (state.error = null);
      })
      .addCase(verify.rejected, (state, action) => {
        (state.token = null),
          (state.isLoading = false),
          (state.isLoggedIn = false),
          (state.error = "خطا در برقراری ارتباط ...");
      });
  },
});

const initialLoginState = {
  phone: "",
  isLoading: false,
  error: null,
};

const authLoginSlice = createSlice({
  name: "authUserLogin",
  initialState: initialLoginState,
  reducers: {
    logout: (state, action) => {
      (state.token = ""),
        (state.isLoading = false),
        (state.isLoggedIn = false),
        (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        (state.phone = action.payload),
          (state.isLoading = false),
          (state.error = null);
      })
      .addCase(login.pending, (state, action) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(login.rejected, (state, action) => {
        (state.isLoading = false), (state.error = "خطا در برقراری ارتباط ...");
      });
  },
});

const authLoginReducer = authLoginSlice.reducer;
const authVerifyReducer = authVerifySlice.reducer;

export { authLoginReducer, authVerifyReducer };
