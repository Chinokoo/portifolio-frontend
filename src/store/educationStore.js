import { toast } from "react-hot-toast";
import { axiosInstance } from "../config/axios/axios";
import { create } from "zustand";

export const useEducationStore = create((set) => ({
  loading: false,
  educations: [],

  //add education function
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

  //getting education function
  getEducation: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/education");
      set({ educations: res.data.education });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  //update education function
  updateEducation: async ({ _id, name, type, description, date }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.patch(`/education/update/${_id}`, {
        name,
        type,
        description,
        date,
      });

      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          educations: prevState.educations.map((education) =>
            education._id === _id
              ? { ...education, ...res.data.education }
              : education
          ),
        };
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },

  //deleting education function
  deleteEducation: async (id) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.delete(`/education/delete/${id}`);
      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          educations: prevState.educations.filter(
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
