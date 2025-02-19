import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full min-h-screen">
        <Navbar />
        <div className="  mx-0  md:mx-5 lg:mx-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
