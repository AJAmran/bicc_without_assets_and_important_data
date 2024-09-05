import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { venueData } from "../../data/data";
import { FaRegFileAlt, FaRegCalendarCheck } from "react-icons/fa";
import FeedbackCarousel from "../../components/heroSlider/ClientFeedbackSlider";
import MemoizedLocationDirection from "../../components/LocationDirection";
import FloorPlanModal from "../../components/FloorPlanModal";

const Venue = () => {
  const { id } = useParams();
  const numberId = useMemo(() => parseInt(id), [id]);
  const filteredVenue = useMemo(
    () => venueData.find((venue) => venue.id === numberId),
    [numberId]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!filteredVenue) {
    return <div className="text-text">Venue not found</div>;
  }

  return (
    <div className="bg-background min-h-screen py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <section>
            <img
              src={filteredVenue.img}
              alt={filteredVenue.alt}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </section>
          <section className="flex flex-col justify-between space-y-6">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary">
                {filteredVenue.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-justify text-text font-body">
                {filteredVenue.description}
              </p>
            </header>
            <article className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredVenue?.capacities && (
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-text font-title">
                      Capacities
                    </h2>
                    <ul className="mt-2 space-y-1 text-text text-base md:text-lg font-body">
                      {filteredVenue.capacities &&
                        Object.entries(filteredVenue.capacities).map(
                          ([key, value]) => (
                            <li key={key} className="capitalize">
                              {key.replace(/([A-Z])/g, " $1")}: {value}
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                )}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-text font-title">
                    Dimensions & Details
                  </h2>
                  <ul className="mt-2 space-y-1 text-text font-body text-base md:text-lg">
                    {filteredVenue.dimension && (
                      <li>Dimension: {filteredVenue.dimension}</li>
                    )}
                    {filteredVenue.heightFt && (
                      <li>Height: {filteredVenue.heightFt}</li>
                    )}
                    {filteredVenue.totalAreaSqFt && (
                      <li>Total Area: {filteredVenue.totalAreaSqFt}</li>
                    )}
                    {filteredVenue.stage && (
                      <li>Stage: {filteredVenue.stage}</li>
                    )}
                    {filteredVenue.headTable && (
                      <li>Head Table: {filteredVenue.headTable}</li>
                    )}
                  </ul>
                </div>
              </div>
            </article>
            <div className="flex flex-wrap gap-4">
              {filteredVenue.floorPlanImage && (
                <button
                  className="flex items-center px-4 py-2 text-white bg-primary rounded-lg hover:bg-secondary focus:outline-none"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FaRegFileAlt className="mr-2" />
                  See Floor Plan
                </button>
              )}
              <Link to="/booking">
                <button className="flex items-center px-4 py-2 text-white bg-accent rounded-lg hover:bg-secondary focus:outline-none">
                  <FaRegCalendarCheck className="mr-2" />
                  Book Now
                </button>
              </Link>
            </div>
          </section>
        </div>
        <div className="mt-12">
          <FeedbackCarousel />
          <MemoizedLocationDirection />
        </div>
        <FloorPlanModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          floorPlanImage={filteredVenue.floorPlanImage}
        />
      </div>
    </div>
  );
};

export default Venue;
