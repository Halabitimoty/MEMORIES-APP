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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignInAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignInAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.userData &&
          sessionStorage.setItem("user", JSON.stringify(action.payload));
        sessionStorage.setItem(
          "isAuthenticated",
          action.payload ? true : false
        );
      })
      .addCase(SignInAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errorMessage;
      });
  },
});

export default authSlice.reducer;
