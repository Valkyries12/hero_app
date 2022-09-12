import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://superheroapi.com/api/${996194767599076}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    mode: "cors",
    credentials: "include",
    'Access-Control-Allow-Origin': "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": 86400,
  },
});

export const get = (path) => {
  return axiosInstance.get(path);
};
