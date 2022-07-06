import Hero from "../components/Home/Hero/Hero";
import Destinations from "../components/Home/Destinations/Destinations";
import Properties from "../components/Home/Properties/Properties";
import FeaturedPlaces from "../components/Home/FeaturedPlaces/FeaturedPlaces";

const Home = () => {
  return (
    <div className="main_container">
      <Hero />
      <Destinations />
      <Properties />
      <FeaturedPlaces />
    </div>
  )
}

export default Home