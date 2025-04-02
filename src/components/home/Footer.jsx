import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  {
    title: "Github",
    link: "https://github.com/Chinokoo",
    icon: FaGithub,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/peter-chinokoo/",
    icon: FaLinkedin,
  },
  {
    title: "Email",
    link: "mailto:peterchinokoo@gmail.com",
    icon: MdEmail,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F0] p-5 rounded-lg">
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-5">
            <p className="text-black text-lg">
              &copy; 2025 Peter&apos;s Portfolio. All rights reserved.
            </p>
            <p className="text-black text-lg">Made with ❤️ by Peter Chinoko</p>
          </div>
          <div className="flex flex-row gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target="_blank"
                className="text-black hover:underline hover:text-gray-500 flex gap-2"
              >
                {<link.icon size={25} />}
                <p className="text-black hidden md:block">{link.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
