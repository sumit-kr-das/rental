import Destinations from "../components/Home/Destinations/Destinations";
import FeaturedPlaces from "../components/Home/FeaturedPlaces/FeaturedPlaces";
import Hero from "../components/Home/Hero/Hero";
import Properties from "../components/Home/Properties/Properties";
import Navigation from "../components/Navigation/Navigation";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="main_container">
      <Navigation />
      <Hero />
      <Destinations />
      <Properties />
      <FeaturedPlaces />
      <NewsLetter />
    </div>
  );
};

export default Home;
