import SearchList from "../SearchList/SearchList";
import HotelList from "../HotelList/HotelList";
import "./listContainer.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ListContainer = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [option, setoption] = useState(location.state.options);
	
	return (
		<section className="listContainer">
			<div className="search_list">
				<SearchList 
					destination={destination}
					date={date}
					option={option}
					setDate={setDate}
				/>
			</div>
			<div className="hotel_list">
				<HotelList />
			</div>
		</section>
	);
};

export default ListContainer;
