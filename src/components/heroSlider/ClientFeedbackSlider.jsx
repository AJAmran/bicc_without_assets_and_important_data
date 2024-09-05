import { useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { feedbackData } from "../../data/data";
import { memo } from "react";

const Feedback = () => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
    }),
    []
  );

  return (
    <section className="pb-12 text-white">
      <div className="container mx-auto">
        <h3 className="mb-6 text-3xl font-bold text-center text-primary font-heading">
          Client Opinion
        </h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper shadow bg-white rounded-md"
          modules={[Autoplay]}
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center justify-center mb-4 text-2xl">
                  <FaQuoteLeft className="inline mr-2 text-primary" />
                  <motion.span
                    className="inline text-text text-center font-body text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feedback.feedback}
                  </motion.span>
                  <FaQuoteRight className="inline ml-2 text-primary" />
                </div>
                <motion.div
                  className="flex items-center justify-center mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img
                    src={feedback.clientImage}
                    alt={feedback.clientName}
                    className="rounded-full size-12 object-contain"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="ml-4"
                  >
                    <p className="font-bold text-primary font-heading text-xl">
                      {feedback.clientName}
                    </p>
                    <p className="text-accent">{feedback.clientDesignation}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const FeedbackCarousel = memo(Feedback);

export default FeedbackCarousel;
