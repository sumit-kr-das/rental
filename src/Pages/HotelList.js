import ListSlider from "../components/HotelList/ListSlider/ListSlider";
import HotelDetails from "../components/HotelList/HotelDetails/HotelDetails";
import NewsLetter from "../components/NewsLetter/NewsLetter";

import useFetch from "../services/apiRequest";
import { useLocation } from 'react-router-dom';

const HotelList = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	// fetch api data
	const { data, loading, error, refetch } = useFetch(`/hotel/find/${id}`);
	
	return (
		<>
			<ListSlider photos={data.photos} loading={loading} />
			<HotelDetails item={data} loading={loading} id={id} />
			<NewsLetter />
		</>
	);
};

export default HotelList;
