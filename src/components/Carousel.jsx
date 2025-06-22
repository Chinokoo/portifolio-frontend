import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useProjectStore } from "../store/projectStore";

const Carousel = () => {
  const { projects, getProjects } = useProjectStore();

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projects.length) % projects.length
    );
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".slider-item", {
      x: `${currentSlide * -63}vw`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  console.log(projects);

  return (
    <div className="relative">
      <div className="relative w-full h-[60vh] md:h-[40vh] lg:h-[60vh]">
        <div className="top-0 left-0 absolute w-full">
          <div className="flex items-center gap-[3vw] pl-[10vw] w-full h-[60vh] md:h-[40vh] lg:h-[60vh]">
            {projects.map((slide, index) => (
              <div
                className="relative flex-none h-full slider-item"
                key={index}
              >
                <img
                  src={slide.image}
                  alt="slide"
                  className="w-full h-full object-center object-scale-down"
                />
                <div className="bottom-0 left-0 absolute bg-black/80 px-5 w-full h-20">
                  <div className="flex justify-between items-center w-full h-full">
                    <div className="flex-center gap-2">
                      <p className="opacity-80 text-white md:text-2xl">
                        {slide.name}
                      </p>
                    </div>
                    <div className="flex-center gap-5">
                      <a
                        href={slide.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <img
                          src="/images/github.svg"
                          alt="GitHub"
                          className="size-7 md:size-10"
                        />
                      </a>
                      {slide.liveUrl && (
                        <a
                          href={slide.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <img
                            src="/images/arrowupright.svg"
                            alt="Live Site"
                            className="size-7 md:size-10"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-10 -translate-x-5 md:-translate-x-32">
        <button
          onClick={prevSlide}
          className="flex-center bg-blue-50 hover:bg-pink-100 dark:bg-gray-700 dark:hover:bg-pink-500 shadow-md rounded-full w-12 h-12 active:scale-90 transition-all cursor-pointer"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="flex-center bg-blue-50 hover:bg-pink-100 dark:bg-gray-700 dark:hover:bg-pink-500 shadow-md rounded-full w-12 h-12 active:scale-90 transition-all cursor-pointer"
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
