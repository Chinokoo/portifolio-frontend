import "react-multi-carousel/lib/styles.css";
import TechStack from "../components/TechStack";
import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";

const ProjectsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <TechStack />
      <div>
        <div className="relative flex-center w-full" id="projects">
          <div className="z-10 relative w-full">
            <div className="mx-auto md:p-0 px-5 container">
              <TitleHeader
                title="My PROJECTS"
                text="Check my recent project below for your Goal"
              />
            </div>
            <div className="mt-10 md:mt-20">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
