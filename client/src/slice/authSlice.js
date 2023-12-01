import { createSlice } from "@reduxjs/toolkit";
import { SignInAction } from "../actions/authAction";

const initialState = {
  isAuthenticated: false,
  userData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = true;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignInAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(SignInAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated =
          action.payload === null || action.payload === undefined
            ? true
            : false;
        state.userData = action.payload;
      }),
      builder.addCase(SignInAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errorMessage;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
