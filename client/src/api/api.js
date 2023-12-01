import axios from "axios";

const baseurl = "http://localhost:3002";

export const sigIn = async (data) => {
  try {
    const respose = await axios.post(`${baseurl}/v1/auth/login`, data);
    return respose.data;
  } catch (error) {
    console.log("signed-in");
  }
};

export const sigUp = async (data) => {
  await axios.post(`${baseurl}/v1/auth/register`, data);
};

export const sigOut = async () => {
  try {
    const respose = await axios.post(`${baseurl}/v1/auth/logout`);
    return respose.data;
  } catch (error) {
    console.log("signed-out");
  }
};
