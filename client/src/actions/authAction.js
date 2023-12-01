import { createAsyncThunk } from "@reduxjs/toolkit";
import { sigIn, sigOut } from "../api/api";

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

export const SignOutAction = createAsyncThunk(
  "auth/sigout",
  async (thunkApi) => {
    try {
      const response = await sigOut();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to logout.");
    }
  }
);
