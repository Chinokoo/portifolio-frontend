import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const navigation = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Education", link: "/education" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full h-13 bg-[#F5F5F0] flex justify-between py-2 md:px-5 lg:px-20">
      <div className="my-1  ">
        <Link
          className="text-sm md:text-xl  px-2 py-1 ml-1 font-bold text-white bg-black hover:bg-[#F5F5F0] hover:text-black cursor-pointer rounded-full  font-sans "
          to="/"
        >
          PC
        </Link>
      </div>
      <IoReorderThreeOutline
        className={`${isOpen ? "hidden" : "block mx-2 md:hidden"} `}
        size={40}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="w-3/5 h-[50vh] rounded-md shadow flex flex-col z-5 absolute top-10 right-5 bg-[#F5F5F0] ">
          <div className="flex justify-end p-2">
            <FaXmark size={18} onClick={() => setIsOpen(!isOpen)} />
          </div>
          {navigation.map((nav) => (
            <Link
              className="px-5 py-2 hover:bg-black hover:text-white w-full"
              key={nav.name}
              to={nav.link}
              onClick={() => setIsOpen(!isOpen)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}

      <div className=" text-lg hidden md:block">
        {navigation.map((nav) => (
          <Link
            className={`px-5 py-2 rounded-md ${
              location.pathname === nav.link
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
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
