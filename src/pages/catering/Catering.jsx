import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ConventionCenterDetails from "../../components/ConventionCenterDetails";
import { cateringImage } from "../../data/images";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import CateringCTA from "../../components/CateringCTA";


const CateringPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100"
    >
      <Helmet>
        <title>
          Catering Services - Bangabandhu International Conference Center
        </title>
        <meta
          name="description"
          content="Discover the exceptional catering services offered by X-group at Bangabandhu International Conference Center (BICC). Perfect for all your special occasions."
        />
        <meta
          name="keywords"
          content="BICC catering, X-group catering, event catering, BICC events, catering services Dhaka, BICC convention halls, BICC culinary experiences, Bangabandhu International Conference Center catering"
        />
      </Helmet>

      <HeroSlider
        images={cateringImage}
        title="Elevate Your Events"
        subtitle="Crafting Memorable Culinary Experiences for Your Special Occasions"
      />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
          Our Convention Halls
        </h2>
        <ConventionCenterDetails />
      </div>

      <CateringCTA websiteUrl="https://catering.x-grouprestaurant.com/" />
    </motion.div>
  );
};

export default CateringPage;
