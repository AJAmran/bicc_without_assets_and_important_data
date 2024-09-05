import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";

const AboutOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="">
        <h3 className="mb-8 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-center text-primary">
          Discover BICC
        </h3>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-center md:order-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://res.cloudinary.com/dhukcjdmi/image/upload/v1724744412/14590168_1_zwcadl.jpg"
              alt="BICC Overview"
              title="BICC Overview"
              loading="lazy"
              width="100%"
              height="auto"
              className="object-cover w-full h-full rounded-lg shadow-lg max-w-[80%] mx-auto"
            />
          </div>
          <div className="md:order-1">
            <p className="mb-6 text-md md:text-md lg:text-lg leading-relaxed text-justify text-text font-body">
              The country’s only multi-purpose convention facility, Bangabandhu
              International Conference Center (BICC), has 17 venues for holding
              small to large-scale events, state functions, social events,
              seminars, conferences, product launches, annual general meetings,
              fairs, exhibitions, cultural programs, and reality shows. BICC has
              been the venue for many renowned economic, social, and cultural
              events, proudly hosting international conferences and summits over
              the years.
            </p>
            <p className="mb-6 text-md md:text-md lg:text-lg leading-relaxed text-justify text-text font-body">
              Surrounded by a spacious parking area, lawn, garden, and musical
              fountain, this modern convention center’s elevated roof and
              massive structure add grandeur to any event. As of 21 January
              2024, X-group Chain Restaurant and Hospitality Management has been
              managing the operations and maintenance of BICC, continuing their
              legacy of excellence in the hospitality industry of Bangladesh.
            </p>
            <div className="flex items-center justify-center mt-4 text-primary">
              <FaRegLightbulb className="mr-2 text-secondary" />
              <span className="font-bold font-heading text-md">
                Discover the brilliance of BICC!
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutOverview;
