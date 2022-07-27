import React,{ useEffect, useRef, useState } from "react";
import HotelList from "../HotelList/HotelList";
import "./listContainer.scss";
import { useLocation } from "react-router-dom";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useFetch from "../../../services/apiRequest";

const ListContainer = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [dates, setDates] = useState(location.state.dates);
	const [option, setoption] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

	const [openDate, setOpenDate] = useState(false);

	// close dropDown
	let menuRef = useRef();
	useEffect(() => {
		let handler = (event) => {
			if (!menuRef.current.contains(event.target)) {
				setOpenDate(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	// fetch api data
	const { data, loading, error, refetch } = useFetch(
		`/v1/hotel?city=${destination}&min=${min || 1}&max=${max || 999}`
	);

	const handleClick = () => {
		refetch();
	};

	return (
		<section className="listContainer">
			<div className="search_list">
				<p className="main_heading">Search</p>
				<div className="input_section">
					<p>Destination</p>
					<input
						className="se_input_box"
						type="text"
						placeholder={destination}
					/>
				</div>
				<div className="input_section">
					<p>Check in date</p>
					<p className="se_input_date" onClick={() => setOpenDate(!openDate)}>
						{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
							dates[0].endDate,
							"dd/MM/yyyy"
						)}`}
					</p>
					<div ref={menuRef} className="se_date_container_box">
						{openDate && (
							<DateRange
								editableDateInputs={true}
								onChange={(item) => setDates([item.selection])}
								minDate={new Date()}
								ranges={dates}
							/>
						)}
					</div>
				</div>
				<div>
					<p className="main_heading heading_option">Options</p>
					<div className="input_section">
						<p>Min Price(per night)</p>
						<input
							className="se_input_box"
							type="text"
							onChange={(e) => setMin(e.target.value)}
						/>
					</div>
					<div className="input_section">
						<p>Max Price(per night)</p>
						<input
							className="se_input_box"
							type="text"
							onChange={(e) => setMax(e.target.value)}
						/>
					</div>
					<div className="input_section">
						<p>Adult</p>
						<input
							min={1}
							max={10}
							placeholder={option.adult}
							className="se_input_box"
							type="number"
						/>
					</div>
					<div className="input_section">
						<p>Children</p>
						<input
							min={0}
							max={9}
							placeholder={option.children}
							className="se_input_box"
							type="number"
						/>
					</div>
					<div className="input_section">
						<p>Room</p>
						<input
							min={1}
							max={9}
							placeholder={option.room}
							className="se_input_box"
							type="number"
						/>
					</div>
					<button onClick={handleClick} className="btn_primary">
						Search
					</button>
				</div>
			</div>
			<div className="hotel_list">
				<div className="hotel_list_heading">
					<div>
						<p>Tokyo, Jappan</p>
						<p>112 properties found</p>
					</div>
					<div>
						<button>search</button>
					</div>
				</div>
				<div className="hotel_list_main_container">
					{loading ? (
						"loading"
					) : (
						<>
							{data.map((item, index) => (
								<HotelList key={index} item={item} />
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default ListContainer;
