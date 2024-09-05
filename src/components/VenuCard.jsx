import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCalendarPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { venueData } from "../data/data";
import { memo } from "react";

const VenuCardComponent = () => {
  const [showAllVenues, setShowAllVenues] = useState(false);

  const toggleShowAllVenues = () => {
    setShowAllVenues((prev) => !prev);
  };

  const venuesToShow = showAllVenues ? venueData : venueData.slice(0, 4);

  return (
    <section className="pb-16 text-text border-muted">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary font-heading">
            Explore Our Venues
          </h2>
          <p className="text-md font-semibold">
            Discover the perfect venue for your event
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {venuesToShow.map((venue) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col justify-between transition-transform bg-white border border-blue-300 rounded-md shadow-md transform-gpu hover:shadow-lg"
              aria-label={`Details of ${venue.title}`}
            >
              <div className="w-full">
                <img
                  src={venue.img}
                  alt={venue.alt}
                  width={venue.width}
                  height={venue.height}
                  className="object-cover w-full h-72 mb-4 rounded-t-md"
                  loading="lazy"
                />
                <h2 className="mb-2 text-xl font-heading font-semibold text-primary px-4">
                  {venue.title}
                </h2>
                <p className="mb-2 text-text font-body text-justify px-4">
                  {venue.description}
                </p>
                {venue.dimension && (
                  <p className="mb-2 text-text px-4">
                    <span className="text-md font-semibold font-heading">
                      Dimension:{" "}
                    </span>
                    {venue.dimension}
                  </p>
                )}
                <p className="mb-2 text-text px-4">
                  <span className="text-md font-semibold font-heading">
                    Total Area (sq.ft.):{" "}
                  </span>
                  {venue.totalAreaSqFt}
                </p>
              </div>
              <div className="flex items-center justify-between my-4 px-4">
                <Link to="/booking" aria-label={`Book ${venue.title}`}>
                  <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-accent">
                    <FaRegCalendarPlus className="mr-2" />
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleShowAllVenues}
            className="text-white bg-primary rounded px-3 py-2 font-title hover:bg-accent text-lg font-semibold"
          >
            {showAllVenues ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

const VenuCard = memo(VenuCardComponent);
export default VenuCard;
