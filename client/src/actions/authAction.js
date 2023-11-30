import { createAsyncThunk } from "@reduxjs/toolkit";
import { sigIn } from "../api/api";

export const SignInAction = createAsyncThunk("auth/sigin", (data) => {
  try {
    const response = sigIn(data);
    return response;
  } catch (error) {
    return error;
  }
});
