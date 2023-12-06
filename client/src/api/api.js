import axios from "axios";

const baseurl = "http://localhost:3002";

export const signIn = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/v1/auth/login`, data);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const signUp = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/v1/auth/register`, data);
    return response;
  } catch (error) {
    return null;
  }
};

export const getProfile = async (header) => {
  try {
    await axios.get(`${baseurl}/v1/auth/profile`, {
      headers: header,
    });
  } catch (error) {
    console.log("getprofile-error");
  }
};

export const signOut = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/v1/auth/logout`, data);
    return response.data;
  } catch (error) {
    console.log("signed-out-error");
  }
};
