import axios from "axios";

const baseurl = "http://localhost:3002";

export const sigIn = async (data) => {
  try {
    const respose = await axios.post(`${baseurl}/v1/auth/login`, data);
    return respose.data;
  } catch (error) {
    console.log("wrong request");
  }
};

export const sigUp = async (data) => {
  await axios.post(`${baseurl}/v1/auth/register`, data);
};
