import HeroSection from "../../components/HeroSection";
import AboutOverview from "../../components/AboutOverview";
import AboutMissionValue from "../../components/AboutMissionValue";
import AboutTeam from "../../components/AboutTeam";
import MemoizedLocationDirection from "../../components/LocationDirection";
import { Helmet } from "react-helmet";

const data = {
  image: "https://res.cloudinary.com/dhukcjdmi/image/upload/v1724744413/3840px-%E0%A6%AC%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81_%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95_%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%A8_%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_02-EDIT-EDIT_pwxd6r.jpg",
  title: "Unveiling Excellence at",
  subTitle: "Bangabandhu International Conference Center (BICC)",
  des: "Your Gateway to Unforgettable Events, Where Innovation Meets Elegance in the Heart of Dhaka.",
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Bangabandhu International Conference Center</title>
        <meta
          name="description"
          content="Learn about the Bangabandhu International Conference Center (BICC), its mission, values, and the team behind it. Discover how BICC is your gateway to extraordinary events."
        />
        <meta
          name="keywords"
          content="BICC, BICCBD, BICC Dhaka, Bangabandhu International Conference Center, conference hall, BICC events, BICC mission, BICC team, BICC overview, BICC values, BICC Bangladesh"
        />
      </Helmet>

      {/* Section 1: Hero Section */}
      <HeroSection
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        des={data.des}
      />

      <div className="container mx-auto p-3 lg:p-4">
        {/* Section 2: Overview */}
        <section className="about-overview-section">
          <AboutOverview />
        </section>

        {/* Section 3: Mission and Value */}
        <section className="about-mission-value-section">
          <AboutMissionValue />
        </section>

        {/* Section 4: Our Team */}
        <section className="about-team-section">
          <AboutTeam />
        </section>
        <div className="py-10">
          <MemoizedLocationDirection />
        </div>
      </div>
    </>
  );
};

export default About;
