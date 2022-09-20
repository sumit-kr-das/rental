import "./reserveHotel.scss";
import useFetch from "../../../services/apiRequest";
import { BiXCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ReserveHotel = ({ setOpenModel, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	const navigate = useNavigate()
	const { data } = useFetch(`/v1/hotel/room/${hotelId}`);
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
		const isFound = roomNumber.unAavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);
		return !isFound;
	};

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		console.log("no",selectedRooms)
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};
	
	let token;
	let user = JSON.parse(localStorage.getItem("user"));
	if (user && user.access_token) {
		token = { Authorization: `Bearer ${user.access_token}` };
	}
	

	const handleClick = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomId) => {
					const res = axios.put(
						`${process.env.REACT_APP_BASE_URL}/v1/rooms/updateAvailability/${roomId}`,
						{
							dates: allDates,
						},
						{ headers: token }
					);
					return res.data;
				})
				
			);
			setOpenModel(false);
			navigate("/bookings")
		} catch (err) {
			console.log("Error from reserve hotel");
		}
	};

	return (
		<div className="reserveHotelCon">
			<div className="reserveHotel">
				<div className="r_container">
					<BiXCircle
						className="cross_btn"
						onClick={() => setOpenModel(false)}
					/>
					<span className="main_heading">Select your rooms:</span>
					{data?.map((item, index) => (
						<div key={index} className="r_wrapper">
							<div className="des">
								<div>{item?.title}</div>
								<div>{item?.desc}</div>
								<div>Max People: {item?.maxPeople}</div>
								<div>{item?.price}</div>
							</div>
							<div className="room">
								{item?.roomNumbers.map((roomNumber, index) => (
									<div key={index} className="room_wrapper">
										<label>{roomNumber?.number}</label>
										<input
											type="checkbox"
											value={roomNumber?._id}
											onChange={handleSelect}
											disabled={!isAvailable(roomNumber)}
										/>
									</div>
								))}
							</div>
						</div>
					))}
					<button onClick={handleClick} className="btn_primary">
						Reserve Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReserveHotel;
