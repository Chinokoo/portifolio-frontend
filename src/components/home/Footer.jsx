import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
    <footer className="md:col-span-12 mt-20">
      <div className="space-y-8">
        {/* CTA Section with Social Links */}
        <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 p-8 rounded-2xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-bold text-white text-2xl md:text-3xl text-center">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="mb-6 text-white/90 text-center">
              Have a project in mind? I&apos;m always open to new ideas and love
              to hear about it.
            </p>
            <div className="flex md:flex-row flex-col justify-center items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-[var(--color-secondary)] hover:bg-opacity-90 px-6 py-3 rounded-full font-medium text-[var(--color-primary)] transition"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex gap-6 mt-4">
                {footerLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.title}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition-colors"
                      aria-label={link.title}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Copyright */}
            <div className="mt-8 text-white text-sm text-center">
              © {new Date().getFullYear()} Peter Chinoko. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
