/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const RestaurantCard = ({ restaurant }) => (
  <article
    className="flex flex-col justify-between p-4 bg-white border border-accent rounded-lg shadow-lg"
    itemScope
    itemType="https://schema.org/Restaurant"
  >
    <header>
      <img
        src={restaurant.img || "https://via.placeholder.com/150"}
        alt={`Image of ${restaurant.name}`}
        className="object-contain w-full h-40 mb-4 rounded-md"
        itemProp="image"
      />
      <h2
        className="mb-2 text-xl font-semibold font-title text-primary"
        itemProp="name"
      >
        {restaurant.name}
      </h2>
    </header>
    <p className="mb-2 text-text" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
      <FaMapMarkerAlt className="inline mr-2 text-secondary" />
      <span itemProp="streetAddress">{restaurant.location}</span>
    </p>
    <p className="text-text" itemProp="telephone">
      <FaPhone className="inline mr-2 text-secondary" />
      {restaurant.contactNumber}
    </p>
    <div className="mt-4 text-end">
      <Link to={restaurant.link} target="_blank" rel="noopener noreferrer">
        <motion.button
          className="px-4 py-2 text-white bg-primary rounded-md hover:bg-accent focus:outline-none"
          whileHover="hover"
          variants={buttonVariants}
          aria-label={`Book a table at ${restaurant.name}`}
        >
          <FaBook className="inline mr-2" />
          Book Now
        </motion.button>
      </Link>
    </div>
  </article>
);

export default RestaurantCard;
