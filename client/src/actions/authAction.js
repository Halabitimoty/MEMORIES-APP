import { createAsyncThunk } from "@reduxjs/toolkit";
import { sigIn } from "../api/api";

export const SignInAction = createAsyncThunk(
  "auth/sigin",
  async (data, thunkApi) => {
    try {
      const response = await sigIn(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to login.");
    }
  }
);
