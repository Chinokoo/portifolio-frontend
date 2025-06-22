import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useAuthStore } from "../store/authStore";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuthStore();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigation = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Education", link: "/education" },
    { name: "Contact", link: "/contact" },
    user ? { name: "Admin", link: "/admin" } : { name: "PC", link: "/login" },
  ];

  return (
    <div className="top-0 left-0 z-50 fixed flex justify-between bg-[var(--color-bg)]/80 backdrop-blur-md lg:px-20 py-2 w-full h-13 container-fluid">
      <div className="flex justify-center items-center gap-2">
        <Link
          className="bg-[var(--color-primary)] hover:bg-[var(--color-bg)] ml-1 px-2 py-1 rounded-full font-sans font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm md:text-xl cursor-pointer"
          to="/"
        >
          PC
        </Link>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full focus:outline-none"
          aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>
      <IoReorderThreeOutline
        className={`${
          isOpen ? "hidden" : "block mx-2 md:hidden"
        } text-[var(--color-text)]`}
        size={40}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="top-10 right-5 z-5 absolute flex flex-col bg-[var(--color-bg)] shadow rounded-md w-3/5 h-[42vh] overflow-hidden">
          <div className="flex justify-end p-2">
            <FaXmark
              size={18}
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text)]"
            />
          </div>
          {navigation.map((nav) => (
            <Link
              className="hover:bg-[var(--color-primary)] px-5 py-2 w-full text-[var(--color-text)] hover:text-[var(--color-secondary)]"
              key={nav.name}
              to={nav.link}
              onClick={() => setIsOpen(!isOpen)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}

      <div className="hidden md:block text-lg">
        {navigation.map((nav) => (
          <Link
            className={`px-5 py-2 rounded-md ${
              location.pathname === nav.link
                ? " text-[var(--color-accent)] bg-[var(--color-secondary)]"
                : "hover:border-[var(--color-primary)] hover:border-2 hover:text-[var(--color-text)]"
            } text-[var(--color-text)]`}
            key={nav.name}
            to={nav.link}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
