import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProjectStore } from "../store/projectStore";

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="left-0 absolute flex-center bg-blue-50 hover:bg-pink-100 dark:bg-gray-700 dark:hover:bg-pink-500 shadow-md rounded-full w-12 h-12 active:scale-90 transition-all cursor-pointer"
  >
    <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="right-0 absolute flex-center bg-blue-50 hover:bg-pink-100 dark:bg-gray-700 dark:hover:bg-pink-500 shadow-md rounded-full w-12 h-12 active:scale-90 transition-all cursor-pointer"
  >
    <img src="/images/CaretRight.svg" alt="Right" className="w-5 h-5" />
  </button>
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const ProjectCarousel = () => {
  const { projects, getProjects } = useProjectStore();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="relative px-2">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        arrows
      >
        {projects.map((slide, index) => (
          <div
            className="relative mx-4 rounded-b-md w-full md:w-xs lg:w-sm"
            key={index}
          >
            <img
              src={slide.image}
              alt="slide"
              className="rounded-t-md w-full h-[320px] object-scale-down"
            />
            <div className="bottom-0 left-0 absolute bg-black/80 px-5 rounded-b-md w-full h-20">
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
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
