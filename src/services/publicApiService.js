import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://superheroapi.com/api/${996194767599076}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export const get = (path) => {
  return axiosInstance.get(path);
};

