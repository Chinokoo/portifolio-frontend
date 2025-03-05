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

  //update project function
  updateExperience: async ({
    _id,
    companyName,
    jobTitle,
    description,
    startDate,
    endDate,
  }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.put(`/experience/update/${_id}`, {
        companyName,
        jobTitle,
        description,
        startDate,
        endDate,
      });

      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          projects: prevState.experiences.map((experience) =>
            experience._id === _id
              ? { ...experience, ...res.data.experience }
              : experience
          ),
        };
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  //deleting exp function
  deleteExperience: async (id) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.delete(`/experience/delete/${id}`);
      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          projects: prevState.experiences.filter(
            (experience) => experience._id !== id
          ),
        };
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
