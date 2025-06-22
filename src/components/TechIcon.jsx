const TechIcon = ({ icon }) => {
  return (
    <div className="flex-center flex-none bg-black-300 gradient-border w-20 md:w-32 h-20 md:h-32 transition-all hover:-translate-y-3 duration-700 marquee-item">
      <img src={icon.image} alt={icon.name} className="size-10 md:size-16" />
    </div>
  );
};

export default TechIcon;
