import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/HeroSection";
import { eventHighlights, eventSupportServices } from "../../data/eventData";

const EventSupport = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const iconSize = 32;

  return (
    <motion.div
      className="bg-background text-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Event Support - BICC</title>
        <meta
          name="description"
          content="Comprehensive event support services at Bangabandhu International Conference Center (BICC). From venue setup to professional photography, we ensure your event is a success."
        />
      </Helmet>
      <HeroSection
        image="https://res.cloudinary.com/dhukcjdmi/image/upload/v1724744413/3837px-%E0%A6%AC%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81_%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95_%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%A8_%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%87%E0%A6%A8%E0%A6%A1%E0%A7%8B%E0%A6%B0_%E0%A6%AD%E0%A6%BF%E0%A6%89_%E0%A7%A7-EDIT_ofmmrl.jpg"
        title="Exceptional Event Support"
        subTitle="At Bangabandhu International Conference Center (BICC)"
        des="Excellence in Event Management, Powered by X-group Chain Restaurant & Hospitality Management"
      />

      <div className="container mx-auto p-4 lg:px-16 lg:py-12">
        <motion.div
          className="py-12"
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-8 text-center text-3xl md:text-4xl font-heading font-bold text-primary">
            Our Event Support Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventSupportServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent
                      size={iconSize}
                      className="mr-4 text-secondary"
                    />
                    <span className="text-xl font-semibold font-heading">
                      {service.title}
                    </span>
                  </div>
                  <p className="text-base text-text font-body">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="py-12"
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-8 text-center text-3xl md:text-4xl font-heading font-bold text-primary">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent
                      size={iconSize}
                      className="mr-4 text-secondary"
                    />
                    <span className="text-xl font-semibold font-heading">
                      {highlight.title}
                    </span>
                  </div>
                  <p className="text-base text-text font-body">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="py-12 shadow-md bg-white rounded-md"
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-8 text-center text-3xl md:text-4xl font-heading font-bold text-primary">
            Upcoming Events
          </h2>
          <p className="text-center text-text font-body">Loading...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventSupport;
