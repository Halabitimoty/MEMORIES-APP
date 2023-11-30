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
  extraReducers: {
    [SignInAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
  [SignInAction.fulfilled]: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.userData = action.payload.user;
    localStorage.setItem("token", action.payload.token);
  },
  [SignInAction.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.errorMessage;
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
