import TitleHeader from "../components/TitleHeader";
import TechIcon from "./TechIcon";

const iconsList = [
  {
    name: "html",
    image: "/images/html.svg",
  },
  {
    name: "css",
    image: "/images/css.svg",
  },
  {
    name: "javascript",
    image: "/images/js.svg",
  },
  {
    name: "react",
    image: "/images/react.svg",
  },
  {
    name: "typescript",
    image: "/images/ts.svg",
  },
  {
    name: "github",
    image: "/images/github.svg",
  },
  {
    name: "gsap",
    image: "/images/gsap.svg",
  },
  {
    name: "threejs",
    image: "/images/threejs.svg",
  },
  {
    name: "figma",
    image: "/images/figma.svg",
  },
  {
    name: "aws",
    image: "/images/aws.svg",
  },
];

const TechStack = () => {
  return (
    <div className="mt-20 w-full">
      <div className="w-full">
        <div className="mx-auto md:p-0 px-5 container">
          <TitleHeader
            title="TECH STACK"
            text="My Go-To Tools for Crafting Solutions"
          />
        </div>
        <div className="relative mt-10 md:mt-20">
          <div className="bottom-0 left-0 tech-stack-gradient-left-box z-20 absolute w-36 h-full"></div>
          <div className="right-0 tech-stack-gradient-right-box bottom-0 z-20 absolute w-36 h-full"></div>
          <div className="h-52 marquee">
            <div className="gap-5 md:gap-12 marquee-box">
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
