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
      set({ user: res.data.user, loading: false });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },
  register: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });
    try {
      if (password === confirmPassword) {
        const res = await axiosInstance.post("/auth/signup", {
          name,
          email,
          password,
          confirmPassword,
        });

        set({ user: res.data.user });
        toast.success(res.data.message);
      } else {
        toast.error("Passwords do not match");
      }
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check-auth");
      toast.success(res.data.message);
      set({ user: res.data.user, checkingAuth: false });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ checkingAuth: false });
    }
  },
  logOut: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/auth/logout");
      set({ user: null });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
