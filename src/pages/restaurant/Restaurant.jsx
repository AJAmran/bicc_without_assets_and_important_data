import { restaurantData } from "../../data/data";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/HeroSection";
import RestaurantCard from "../../components/RestaurantCard";

const data = {
  image:
    "https://res.cloudinary.com/dhukcjdmi/image/upload/v1725089784/xgroup-restaurant_vefqhg.jpg",
  title: "Discover Our Culinary Universe",
  subTitle: "X-group Chain Restaurant and Hospitality Management",
  des: "Where Every Bite Sparks a Celebration! 🌟",
};

const Restaurant = () => {
  return (
    <>
      <Helmet>
        <title>BICC || X-group Restaurant</title>
        <meta name="description" content="X-group Restaurant BICC" />
      </Helmet>
      <HeroSection
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        des={data.des}
      />
      <div className="container mx-auto p-4">
        <h2 className="my-8 text-2xl md:text-3xl font-bold text-center font-heading text-primary">
          Explore Our Restaurants
        </h2>
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurantData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
