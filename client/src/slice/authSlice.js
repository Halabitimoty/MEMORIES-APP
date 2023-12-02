import { createSlice } from "@reduxjs/toolkit";
import { SignInAction, SignOutAction } from "../actions/authAction";

const initialState = {
  isAuthenticated: false,
  userData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignInAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(SignInAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = action.payload ? true : false;
        state.userData = action.payload;
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      }),
      builder.addCase(SignInAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errorMessage;
      }),
      /**  SignOutAction*/
      builder.addCase(SignOutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(SignOutAction.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userData = null;
      }),
      builder.addCase(SignOutAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errorMessage;
      });
  },
});

export default authSlice.reducer;
