import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";
import { Helmet } from "react-helmet";
import Address from "../../components/Address";
import BookingForm from "../../components/BookingForm";
import MemoizedLocationDirection from "../../components/LocationDirection";
import HeroSection from "../../components/HeroSection";

const data = {
  image: "https://res.cloudinary.com/dhukcjdmi/image/upload/v1724744412/75435792_100271404784844_1231815488284131328_n_m46fol.jpg",
  title: "Host Your Premier Event",
  subTitle: "At The Iconic Bangabandhu International Conference Center (BICC)",
  des: "Elevate Your Occasion with World-Class Facilities and Unmatched Service at Bangladesh’s Most Prestigious Venue",
};

const Booking = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
    shake: {
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Reservation - Bangabandhu International Conference Center</title>
        <meta
          name="description"
          content="Reserve your spot at the Bangabandhu International Conference Center (BICC). Secure your booking for events, conferences, and more at BICC Dhaka."
        />
        <meta
          name="keywords"
          content="BICC reservation, BICC booking, conference center reservation, BICC events, Bangabandhu International Conference Center booking, BICC Dhaka booking, BICC hall reservation, BICC capacity, BICC Bangladesh"
        />
      </Helmet>
      <HeroSection
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        des={data.des}
      />
      <div className="p-4 container mx-auto">
        {/* Address Section */}
        <section className="address-section">
          <Address />
        </section>

        {/* Booking Form Section */}
        <section className="booking-form-section py-12">
          <BookingForm />
        </section>

        {/* Alert Section */}
        <motion.div
          className="container mx-auto p-4 mt-8 mb-6 bg-transparent border border-yellow-500 shadow-lg"
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center">
            <div className="mr-3 text-yellow-500">
              <FiAlertTriangle size={24} />
            </div>
            <motion.p
              className="text-lg font-semibold text-secondary font-body"
              variants={textVariants}
              animate="visible"
              whileHover="shake"
            >
              To secure your reservation, kindly confirm your booking within the
              next 24 hours by reaching out to us directly through our
              designated contact channels following your online reservation.
            </motion.p>
          </div>
        </motion.div>

        {/* Location Direction Section */}
      </div>
      <section className="location-direction-section shadow-lg mt-12">
        <MemoizedLocationDirection />
      </section>
    </motion.div>
  );
};

export default Booking;
