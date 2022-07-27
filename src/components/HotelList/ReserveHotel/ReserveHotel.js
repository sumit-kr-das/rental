import "./reserveHotel.scss";
import useFetch from "../../../services/apiRequest";
import { BiXCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";

const ReserveHotel = ({ setOpen, hotelId }) => {
	const { data, loading, error } = useFetch(`/v1/hotel/room/${hotelId}`);
	const [selectedRooms, setSelectedRooms] = useState([]);

	const { dates } = useContext(SearchContext);

	const getDateInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const date = new Date(start.getTime());

		const dates = [];
		while (date <= end) {
			dates.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}

		return dates;
	};

	const allDates = getDateInRange(dates[0].startDate, dates[0].endDate);

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unAavailableDates.some(date => 
			allDates.includes(new Date(date).getTime())	
		);

		return !isFound;
	}

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	// console.log(selectedRooms);

	const handleClick = () => {};
	return (
		<div className="reserveHotel">
			<div className="r_container">
				<BiXCircle />
				<span>Select your rooms:</span>
				{data.map((item, index) => (
					<div key={index}>
						<div>
							<div>{item.title}</div>
							<div>{item.desc}</div>
							<div>Max People: {item.maxPeople}</div>
							<div>{item.price}</div>
						</div>
						<div className="room">
							{item.roomNumbers.map((roomNumber, index) => (
								<div key={index}>
									<label>{roomNumber.number}</label>
									<input
										type="checkbox"
										value={roomNumber._id}
										onChange={handleSelect}
										disabled={!isAvailable(roomNumber)}
									/>
								</div>
							))}
						</div>
					</div>
				))}
				<button onClick={handleClick} className="btn_primary">
					Seserve Now
				</button>
			</div>
		</div>
	);
};

export default ReserveHotel;
