import Hero from "../components/Home/Hero/Hero";
import Destinations from "../components/Home/Destinations/Destinations";
import Properties from "../components/Home/Properties/Properties";
import FeaturedPlaces from "../components/Home/FeaturedPlaces/FeaturedPlaces";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
	return (
		<div className="main_container">
			<Hero />
			<Destinations />
			<Properties />
			<FeaturedPlaces />
			<NewsLetter />
		</div>
	);
};

export default Home;
