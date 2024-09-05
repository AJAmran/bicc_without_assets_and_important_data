import React from 'react';
import { motion } from 'framer-motion';
import {
  FaParking,
  FaCamera,
  FaBus,
  FaShieldAlt,
  FaWifi,
  FaUser,
  FaWrench,
  FaServer,
} from 'react-icons/fa';

// Service data with mapped icons
const infoData = [
  { title: 'CCTV Coverage', icon: FaCamera, description: '24/7 CCTV monitoring for security.' },
  { title: 'Security Personnel', icon: FaShieldAlt, description: 'Highly trained security staff on site.' },
  { title: 'Wifi', icon: FaWifi, description: 'High-speed Wifi throughout the venue.' },
  { title: 'Car Parking', icon: FaParking, description: 'Ample parking space for all guests.' },
  { title: 'Guest Transportation', icon: FaBus, description: 'Reliable and seamless transport services.' },
  { title: 'Service Staffs', icon: FaUser, description: 'Professional and attentive service staff.' },
  { title: 'Modern Amenities', icon: FaWrench, description: 'Comfortable and modern amenities.' },
  { title: 'Services', icon: FaServer, description: 'Exceptional services for a great event.' },
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-center text-primary mb-4 font-heading">
          Our Services
        </h2>
        <p className="text-lg text-center text-text mb-12 font-body font-semibold">
          Elevate your event experience with our comprehensive range of services tailored to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white border border-blue-300 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, y: -10 }} // Scale and translate effect on hover
              whileTap={{ scale: 0.95 }} // Slightly scale down on click
              transition={{ duration: 0.3 }} // Duration of the transition effect
            >
              <service.icon className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2 font-title">
                {service.title}
              </h3>
              <p className="text-text font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
