import { useEffect, useRef, useState } from "react";
import "./searchList.scss";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchList = (props) => {
	const {destination,setDestination,date,setDate,option,setoption} = props;
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
	return (
		<div className="se_search_container">
			<p className="main_heading">Search</p>
			<div className="input_section">
				<p>Destination</p>
				<input className="se_input_box" type="text" placeholder={destination} />
			</div>
			<div className="input_section">
				<p>Check in date</p>
				<p className="se_input_date" onClick={() => setOpenDate(!openDate)}>
					{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
						date[0].endDate,
						"dd/MM/yyyy"
					)}`}
				</p>
				<div ref={menuRef} className="se_date_container_box">
					{openDate && (
						<DateRange
							editableDateInputs={true}
							onChange={(item) => setDate([item.selection])}
							minDate={new Date()}
							ranges={date}
						/>
					)}
				</div>
			</div>
			<div>
				<p className="main_heading heading_option">Options</p>
				<div className="input_section">
					<p>Min Price(per night)</p>
					<input className="se_input_box" type="text" />
				</div>
				<div className="input_section">
					<p>Max Price(per night)</p>
					<input className="se_input_box" type="text" />
				</div>
				<div className="input_section">
					<p>Adult</p>
					<input min={1} max={10} placeholder={option.adult} className="se_input_box" type="number" />
				</div>
				<div className="input_section">
					<p>Children</p>
					<input min={0} max={9} placeholder={option.children} className="se_input_box" type="number" />
				</div>
				<div className="input_section">
					<p>Room</p>
					<input min={1} max={9} placeholder={option.room} className="se_input_box" type="number" />
				</div>
				<button className="btn_primary">Search</button>
			</div>
		</div>
	);
};

export default SearchList;
