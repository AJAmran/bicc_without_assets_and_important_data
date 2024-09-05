import { useMemo } from "react";
import PropTypes from "prop-types";

const HeroSection = ({ image, title, subTitle, des }) => {
  const sectionStyles = useMemo(
    () => ({
      backgroundImage: `url("${image}")`,
    }),
    [image]
  );

  return (
    <section
      className="relative flex items-center justify-center bg-center bg-cover h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]"
      style={sectionStyles}
    >
      {/* Top and bottom gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

      {/* Content container */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center flex flex-col items-center px-6 gap-2">
        <h2 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl font-heading font-semibold text-center text-white max-w-3xl">
          {title}
        </h2>
        <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-center text-white max-w-3xl">
          {subTitle}
        </h3>
        <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl font-body max-w-lg text-white">
          {des}
        </p>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default HeroSection;
