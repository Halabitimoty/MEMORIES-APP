import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signOut } from "../api/api";

export const SignInAction = createAsyncThunk(
  "auth/signin",
  async (data, thunkApi) => {
    try {
      const response = await signIn(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to login.");
    }
  }
);

export const SignUpAction = createAsyncThunk(
  "auth/signup",
  async (data, thunkApi) => {
    try {
      const response = await signIn(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to signup.");
    }
  }
);

export const SignOutAction = createAsyncThunk(
  "auth/signout",
  async (thunkApi) => {
    try {
      const response = await signOut();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("unable to logout.");
    }
  }
);
