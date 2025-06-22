import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";

const HomePage = () => {
  return (
    <>
      {/* hero section container -start */}
      <section className="relative h-dvh text-white-50">
        <GradientSpheres
          sphere1Class={"gradient-sphere sphere-1"}
          sphere2Class={"gradient-sphere sphere-2"}
        />
        <div className="flex-center w-full h-full">
          {/* first container */}
          <div className="relative w-full h-full container">
            <div className="mt-20 md:mt-40">
              <motion.h1
                initial={{ opacity: 0, y: -50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="font-bold text-5xl md:text-9xl"
              >
                Peter Chinoko
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                }}
                className="font-bold text-5xl md:text-9xl"
              >
                {"Software Developer".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                      color: "var(--color-accent)",
                    }}
                    animate={{ opacity: 1, y: 0, color: "inherit" }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 8,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
          {/* third container */}
          <div className="right-10 bottom-20 z-30 absolute w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex justify-end items-end"
            >
              <h1 className="mr-15 font-bold text-5xl md:text-9xl">at LiDev</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* hero  section container - end */}

      <section className="py-10 md:py-20">
        <TitleHeader
          title={"About Me"}
          text={"Shining bright in the digital space"}
        />
        <div className="mt-10 md:mt-16">
          <div className="flex flex-wrap gap-6">
            {/* Profile Card */}
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col w-full md:w-7/12">
                <div className="bg-[var(--color-bg)] p-6 md:p-8 rounded-2xl h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/images/flower.svg"
                      alt="flower"
                      className="w-12 md:w-16"
                    />
                    <h1 className="bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] font-bold text-transparent text-3xl md:text-4xl">
                      Peter Chinoko
                    </h1>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[var(--color-text)] text-lg md:text-xl leading-relaxed">
                      Full-stack developer specializing in modern web
                      technologies. With 3+ years of experience, I create
                      performant, accessible digital products that users love.
                    </p>
                    <p className="text-[var(--color-text)] text-lg md:text-xl leading-relaxed">
                      Passionate about clean code, intuitive UX, and pushing the
                      boundaries of what&apos;s possible on the web.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="mt-6 md:mt-0 w-full md:w-5/12">
                <div className="relative rounded-2xl md:w-sm h-full min-h-[700px] md:min-h-[400px] overflow-hidden">
                  <img
                    src="/peter_cartoon.png"
                    alt="Peter Chinoko"
                    className="absolute inset-0 w-full h-full object-center object-fill"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div>
                      <h3 className="font-medium text-white text-xl">
                        Based in Johannesburg
                      </h3>
                      <p className="text-white/80">Available for work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="flex md:flex-row flex-col gap-6">
              <div className="mt-6 w-full md:w-6/12">
                <div className="bg-[var(--color-bg)] p-6 rounded-2xl h-full">
                  <h2 className="bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] mb-4 font-bold text-transparent text-2xl">
                    Web Development
                  </h2>
                  <p className="text-[var(--color-text)]">
                    Full-stack solutions with React, Node.js, and modern
                    frameworks. Performance optimized and SEO-friendly.
                  </p>
                </div>
              </div>

              <div className="mt-6 w-full md:w-6/12">
                <div className="bg-[var(--color-bg)] p-6 rounded-2xl h-full">
                  <h2 className="bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] mb-4 font-bold text-transparent text-2xl">
                    UI/UX Design
                  </h2>
                  <p className="text-[var(--color-text)]">
                    Intuitive interfaces with attention to accessibility and
                    user psychology. Figma to implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project and experience navigation */}
      <div className="mx-auto px-4 container">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            Explore My Work
          </h2>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <Link
              to="/projects"
              className="flex flex-col flex-1 items-center bg-gradient-to-r from-[var(--color-accent)] dark:from-[#4f46e5] to-[var(--color-primary)] dark:to-[#9333ea] shadow-lg hover:shadow-xl px-8 py-8 rounded-2xl min-w-[250px] max-w-md font-semibold text-white text-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-2xl">Projects</span>
              <span className="opacity-90 mt-3 text-base">
                View all my work
              </span>
            </Link>
            <Link
              to="/experience"
              className="flex flex-col flex-1 items-center bg-gradient-to-r from-[var(--color-primary)] dark:from-[#9333ea] to-[var(--color-accent)] dark:to-[#4f46e5] shadow-lg hover:shadow-xl px-8 py-8 rounded-2xl min-w-[250px] max-w-md font-semibold text-white text-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-2xl">Experience</span>
              <span className="opacity-90 mt-3 text-base">See my journey</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
