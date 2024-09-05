import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";


const HeroSliderComponent = ({ images, title, subtitle }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`slide-${index}`}
                className="object-cover w-full h-full"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              <div className="absolute inset-x-0 bottom-12 md:bottom-20 lg:bottom-28 flex flex-col items-center px-4 gap-4 max-w-screen-lg mx-auto z-10 text-white">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-center max-w-3xl">
                  {title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-lg font-body text-center">
                  {subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

HeroSliderComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};


export default HeroSliderComponent;
