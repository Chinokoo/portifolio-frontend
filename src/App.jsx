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

function App() {
  const { checkAuth, checkingAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <AiOutlineLoading className="h-20 w-20 animate-spin" />
        console.log(user);
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full min-h-screen">
        <Navbar />
        <div className="  mx-0  md:mx-5 lg:mx-15">
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
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </div>
  );
}

export default App;
