import { toast } from "react-hot-toast";
import { axiosInstance } from "../config/axios/axios";
import { create } from "zustand";

export const useEducationStore = create((set) => ({
  loading: false,
  educations: [],
  addEducation: async ({ name, type, description, yearCompleted }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/education/create", {
        name,
        type,
        description,
        yearCompleted,
      });
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
