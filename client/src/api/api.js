import axios from "axios";

const baseurl = "";

export const sigIn = (data) => {
  axios.post(`${baseurl}/v1/login`, data);
};

export const sigUp = (data) => {
  axios.post(`${baseurl}/v1/register`, data);
};
