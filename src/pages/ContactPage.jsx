import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";

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
    <div className="mx-auto mt-4 px-4 py-10 md:py-20 container">
      <TitleHeader
        title={"Get In Touch"}
        text={"Let's connect and discuss opportunities"}
      />

      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] shadow-lg p-8 rounded-2xl">
            <h2 className="mb-6 font-bold text-[var(--color-primary)] text-2xl">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MdEmail className="mt-1 text-[var(--color-accent)] text-2xl" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:peterchinokoo@gmail.com"
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    peterchinokoo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-accent)] text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-[var(--color-text)]">+27 62 419 0143</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="mb-3 font-semibold text-lg">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  {contactLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.link}
                      target="_blank"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] shadow-sm hover:shadow-md px-4 py-3 rounded-lg transition-all"
                    >
                      <link.icon
                        className="text-[var(--color-accent)]"
                        size={20}
                      />
                      <span className="text-[var(--color-text)]">
                        {link.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] shadow-lg p-8 rounded-2xl"
        >
          <h2 className="mb-6 font-bold text-[var(--color-primary)] text-2xl">
            Send a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-[var(--color-text)] text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4 py-2 border border-[var(--color-border)] focus:border-transparent rounded-lg focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-[var(--color-text)] text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4 py-2 border border-[var(--color-border)] focus:border-transparent rounded-lg focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text)]"
                placeholder="Your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-[var(--color-text)] text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4 py-2 border border-[var(--color-border)] focus:border-transparent rounded-lg focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text)]"
                placeholder="Your message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[var(--color-accent)] dark:from-[#4f46e5] to-[var(--color-primary)] dark:to-[#9333ea] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl font-semibold text-white text-sm hover:scale-[1.02] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
