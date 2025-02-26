import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../config/axios/axios";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: false,

  login: async ({ email, password }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/auth/signin", { email, password });
      toast.success(res.data.message);
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
