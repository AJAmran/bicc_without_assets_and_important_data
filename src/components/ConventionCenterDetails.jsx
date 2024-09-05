import { motion } from "framer-motion";
import {
  FaCar,
  FaVideo,
  FaBus,
  FaShieldAlt,
  FaRegCalendarPlus,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { conventionCenterDetails } from "../data/data";

const ConventionCenterDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {conventionCenterDetails.map((center) => (
        <motion.div
          key={center.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8 md:flex md:items-center md:justify-between"
        >
          <div className="md:w-1/2 md:mr-8 font-body">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-title mb-4">{center.name}</h2>
            <p className="text-gray-600 mb-4 text-justify text-lg">{center.description}</p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center">
                <FaCar className="text-gray-500 mr-2" />
                <span>Car Parking</span>
              </li>
              <li className="flex items-center">
                <FaVideo className="text-gray-500 mr-2" />
                <span>CCTV Coverage</span>
              </li>
              <li className="flex items-center">
                <FaBus className="text-gray-500 mr-2" />
                <span>Guest Transportation</span>
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-gray-500 mr-2" />
                <span>Security Personnel</span>
              </li>
            </ul>
            <Link to={center.link} target="_blank">
              <button className="flex items-center font-semibold py-2 px-4 mt-2 text-white transition-colors bg-gray-800 rounded hover:bg-gray-700 focus:outline-none mb-2">
                <FaRegCalendarPlus className="m-2" /> Book Now
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
            <motion.img
              src={center.image}
              alt={`Convention Center ${center.id}`}
              className="rounded-lg w-full md:w-3/4 mb-4 md:mb-0 hf"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ConventionCenterDetails;
