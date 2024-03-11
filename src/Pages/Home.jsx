import Hero from "../components/Home/Hero/Hero";
import Destinations from "../components/Home/Destinations/Destinations";
import Properties from "../components/Home/Properties/Properties";
import FeaturedPlaces from "../components/Home/FeaturedPlaces/FeaturedPlaces";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Navigation from "../components/Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const user = useContext(AuthContext);
  // console.log(user);
  const userd = JSON.parse(localStorage.getItem("user"));
  console.log(userd);
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
