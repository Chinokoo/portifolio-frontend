import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://portifolio-backend-pppp.onrender.com/api",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});
