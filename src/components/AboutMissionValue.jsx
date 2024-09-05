/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaLightbulb } from 'react-icons/fa';

const AboutMissionValue = () => {
  const variants = {
    hover: { scale: 1.05 },
  };

  return (
    <section className="md:py-8 lg:py-10 py-6 xl:py-12 bg-background">
      <div className="container mx-auto">
        <h3 className="mb-8 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-center text-primary">
          Our Mission & Values
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MotionCard
            title="Mission"
            description="Our top priority is to exceed customer satisfaction by delivering exceptional food and unparalleled customer service."
            icon={<FaBullseye className="mx-auto mb-4 text-4xl text-secondary" />}
            variants={variants}
          />
          <MotionCard
            title="Vision"
            description="Striving to be the 'premium brand and market leader' in the Restaurant & Catering industry in Bangladesh. Motto: Price Quality Service"
            icon={<FaEye className="mx-auto mb-4 text-4xl text-secondary" />}
            variants={variants}
          />
          <MotionCard
            title="Values"
            description="X-group Chain Restaurant is dedicated to providing the highest quality food for the continuous satisfaction of our valued customers. Our commitment to equal opportunities and professional integrity has created an organization that thrives on excellence."
            icon={<FaLightbulb className="mx-auto mb-4 text-4xl text-secondary" />}
            variants={variants}
          />
        </div>
      </div>
    </section>
  );
};

const MotionCard = ({ title, description, icon, variants }) => (
  <motion.div
    whileHover="hover"
    variants={variants}
    className="flex flex-col h-full p-6 text-text bg-white rounded-lg shadow-lg"
  >
    <div className="flex-grow">
      <h4 className="mb-2 text-xl font-heading font-bold text-primary">
        {title}
      </h4>
      <p className="text-primary font-body text-md md:text-md lg:text-lg text-justify">{description}</p>
    </div>
    {icon}
  </motion.div>
);

export default AboutMissionValue;
