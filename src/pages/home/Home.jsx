import { Helmet } from "react-helmet";
import HeroSliderComponent from "../../components/heroSlider/HeroSlider";
import VenuCard from "../../components/VenuCard";
import { images } from "../../data/images";
import FeedbackCarousel from "../../components/heroSlider/ClientFeedbackSlider";
import MemoizedLocationDirection from "../../components/LocationDirection";
import { memo } from "react";
import { Suspense } from "react";
import TinyLoder from "../../components/TinyLoader";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Bangabandhu International Conference Center (BICC)</title>
        <meta
          name="description"
          content="Discover the Bangabandhu International Conference Center (BICC) in Dhaka. Host your events in our state-of-the-art halls and auditoriums."
        />
        <meta
          name="keywords"
          content="BICC, BICCBD, BICC Dhaka, Bangabandhu International Conference Center, conference hall, BICC events, BICC address, hall of fame BICC, BICC capacity, BICC Agargaon, BICC Bangladesh, Bangabandhu convention hall, BICC fair, BICC auditorium, BICC parking"
        />
      </Helmet>
      <HeroSliderComponent
        images={images}
        title="Welcome to Bangabandhu International Conference Center (BICC)"
        subtitle="Igniting Global Discourse, Fostering Collaboration and Elevating Excellence in Conferences"
      />
      <div className="container mx-auto p-3 lg:p-4">
        <Suspense fallback={<TinyLoder />}>
          <VenuCard />
        </Suspense>
        <Suspense fallback={<TinyLoder />}>
          <FeedbackCarousel />
        </Suspense>
        <div className="py-10">
          <Suspense fallback={<TinyLoder />}>
            <MemoizedLocationDirection />
          </Suspense>
        </div>
      </div>
    </>
  );
};

const Home = memo(HomePage);

export default Home;
