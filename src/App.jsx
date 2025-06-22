import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import AdminHomePage from "./pages/admin/AdminHomePage";
import Footer from "./components/home/Footer";

function App() {
  const { checkAuth, checkingAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-5">
          <AiOutlineLoading className="w-20 h-20 animate-spin" />
          <h1 className="font-bold text-2xl">Loading please wait...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto min-h-screen container">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/admin"} />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to={"/admin"} />}
            />
            <Route
              path="/admin"
              element={user ? <AdminHomePage /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </div>
        <Footer />
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </div>
  );
}

export default App;
