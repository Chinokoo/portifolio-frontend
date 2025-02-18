import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactLinks = [
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

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-10 mt-5 lg:flex-row">
      <div className="w-full flex flex-col  md:justify-center px-2 gap-10 mb-5">
        <h2 className="text-3xl font-bold text-center md:text-left  mt-2">
          Contact Information
        </h2>
        <div>
          <div className="grid grid-rows-3 gap-5">
            <div className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Email</h3>
              <p className="text-md text-gray-500">
                <a
                  href="mailto:example@example.com"
                  className="text-gray-700 hover:text-gray-500"
                >
                  peterchinokoo@gmail.com
                </a>
              </p>
            </div>
            <div className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Phone</h3>
              <p className="text-md text-gray-500">+27 62 419 0143</p>
            </div>
            <div className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Social Media</h3>
              <div className="flex flex-wrap gap-5 p-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.link}
                    target="_blank"
                    className="text-black hover:underline hover:text-gray-500 flex gap-2"
                  >
                    {<link.icon size={25} />}
                    <p className="text-black">{link.title}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col bg-gray-300 px-5 rounded-lg shadow-lg md:justify-center gap-10 mb-5">
        <h2 className="text-3xl font-bold text-gray-800   text-center md:text-left  mt-2">
          Message
        </h2>
        <div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-gray-500 rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={4}
                className="shadow appearance-none border-gray-500 rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 mb-5 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
