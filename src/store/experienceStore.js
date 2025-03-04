import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "./../config/axios/axios";

export const useExperienceStore = create((set) => ({
  loading: false,
  experiences: [],
  addExperience: async ({
    companyName,
    jobTitle,
    description,
    startDate,
    endDate,
  }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/experience/create", {
        companyName,
        jobTitle,
        description,
        startDate,
        endDate,
      });
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  //getting experience function
  getExperience: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/experience");
      set({ experiences: res.data.experience });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
