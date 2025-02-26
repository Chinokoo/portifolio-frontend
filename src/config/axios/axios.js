import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api", //Todo: add production url
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});
