import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../config/axios/axios";

export const useProjectStore = create((set) => ({
  loading: false,
  projects: [],
  //adding project function
  addProject: async ({
    name,
    type,
    description,
    liveUrl,
    githubUrl,
    image,
    date,
  }) => {
    try {
      set({ loading: true });

      const res = await axiosInstance.post("/projects/create", {
        name,
        type,
        description,
        liveUrl,
        githubUrl,
        image,
        date,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },

  //getting projects function
  getProjects: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/projects");
      set({ projects: res.data.projects });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
  //update project function
  updateProject: async ({
    id,
    name,
    type,
    description,
    liveUrl,
    githubUrl,
    image,
    date,
  }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.put(`/projects/update/${id}`, {
        name,
        type,
        description,
        liveUrl,
        githubUrl,
        image,
        date,
      });

      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          projects: prevState.projects.map((project) =>
            project._id === id ? { ...project, ...res.data.project } : project
          ),
        };
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
  deleteProject: async (id) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.delete(`/projects/delete/${id}`);
      toast.success(res.data.message);
      set((prevState) => {
        return {
          ...prevState,
          projects: prevState.projects.filter((project) => project._id !== id),
        };
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
}));
