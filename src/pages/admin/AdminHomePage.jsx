import { PiProjectorScreenChartThin } from "react-icons/pi";
import { MdAddCircle, MdOutlineSchool } from "react-icons/md";
import { BsWrenchAdjustable } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import AddPage from "./AddPage";
import { FaXmark } from "react-icons/fa6";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import EducationPage from "./EducationPage";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";

const AdminHomePage = () => {
  const [isTab, setIsTab] = useState("add");
  const { logOut } = useAuthStore();
  const [logOutModal, setLogOutModal] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const navItems = [
    { id: "add", icon: MdAddCircle, label: "Add", component: <AddPage /> },
    {
      id: "projects",
      icon: PiProjectorScreenChartThin,
      label: "Projects",
      component: <ProjectsPage />,
    },
    {
      id: "experience",
      icon: BsWrenchAdjustable,
      label: "Experience",
      component: <ExperiencePage />,
    },
    {
      id: "education",
      icon: MdOutlineSchool,
      label: "Education",
      component: <EducationPage />,
    },
  ];

  return (
    <div className="flex bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] w-full min-h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] shadow-lg w-64"
      >
        <div className="p-4 border-[var(--color-border)] border-b">
          <h1 className="font-bold text-[var(--color-primary)] text-xl">
            Admin Panel
          </h1>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setIsTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isTab === item.id
                      ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] text-white"
                      : "text-[var(--color-text)] hover:bg-[var(--color-bg-light)] dark:hover:bg-[var(--color-bg)]"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => setLogOutModal(true)}
                className="flex items-center gap-3 hover:bg-[var(--color-bg-light)] dark:hover:bg-[var(--color-bg)] px-4 py-3 rounded-lg w-full text-[var(--color-text)] transition-colors"
              >
                <AiOutlineLogout size={20} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        {navItems.find((item) => item.id === isTab)?.component}
      </div>

      {/* Logout Modal */}
      {logOutModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-secondary)] shadow-xl p-6 rounded-xl w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[var(--color-primary)] text-xl">
                Confirm Logout
              </h3>
              <button onClick={() => setLogOutModal(false)}>
                <FaXmark className="text-[var(--color-text)] hover:text-[var(--color-accent)]" />
              </button>
            </div>

            <p className="mb-6 text-[var(--color-text)]">
              Are you sure you want to log out of the admin panel?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setLogOutModal(false)}
                className="flex-1 hover:bg-[var(--color-bg-light)] dark:hover:bg-[var(--color-bg)] px-4 py-2 border border-[var(--color-border)] rounded-lg text-[var(--color-text)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
