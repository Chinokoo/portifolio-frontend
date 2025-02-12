import Header from "./Header";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center gap-20 mb-10">
      <div className="text-center md:text-left">
        <Header headingText={"About"} />
        <div className="flex flex-col md:flex-row gap-7">
          <p className="text-lg text-gray-400 text-justify md:text-left px-2">
            Hi, I&apos;m Peter, a software engineer based in Johannesburg, SA.
            I&apos;m passionate about creating unforgettable experiences in the
            digital space. With a strong background in computer science and a
            keen eye for design, I&apos;m always looking for innovative ways to
            solve real-world problems.
          </p>
          <p className="text-lg text-justify md:text-left text-gray-400 mt-5 px-2">
            When I&apos;m not coding, you can find me exploring the outdoors,
            reading books, or listening to music. I&apos;m a firm believer in
            the importance of work-life balance and strive to maintain a healthy
            balance between my professional and personal life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
