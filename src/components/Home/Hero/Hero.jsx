import { useEffect, useRef, useState } from "react";
import "./hero.scss";
import { BiMap, BiCalendar, BiMale, BiPlus, BiMinus } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const Hero = () => {
	const navigate = useNavigate();
	const [destination, setDestination] = useState("london");
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [searchCon, setSearchCon] = useState(false);

	const [dates, setDate] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 1),
			key: "selection",
		},
	]);

	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	function handleClick(name, operation) {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	}

	// close dropDown
	let menuRef = useRef();
	useEffect(() => {
		let handler = (event) => {
			if (!menuRef.current.contains(event.target)) {
				setOpenDate(false);
				setOpenOptions(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	// useEffect(() => {
	// 	const search = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				`${process.env.REACT_APP_BASE_URL}/v1/hotel/search/${destination}`
	// 			);
	// 			// console.log(res);
	// 			setSearchRes(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	search();
	// }, [destination]);

	// context api
	const { dispatch } = useContext(SearchContext);

	function handleSearch() {
		dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
		navigate("/hotels", { state: { destination, dates, options } });
	}

	function assignCity(sCity) {
		// return setDestination(sCity);
	}

	return (
		<header className="hero">
			<div className="hero_container">
				<div className="hero_content">
					<h1 className="heading">
						Find <span>your next</span> stay
					</h1>
					<p className="para">
						Accompanying us, you have a trip full of experiences. With Chisfis,
						booking accommodation, resort villas, hotels
					</p>
					<a href="#search" className="btn_primary">Start your search</a>
				</div>
				<div className="hero_image">
					<img src="/assets/home_hero.png" alt="hero_img" />
				</div>
			</div>
			<div className="search_container">
				<div className="search_wrapper">
					<div className="input_section">
						<BiMap className="input_icons" />
						<input
							type="text"
							placeholder="Where are you going?"
							onChange={(e) => setDestination(e.target.value)}
							onClick={() => {setSearchCon(!searchCon)}}
						/>
						{/* {searchCon && (
							<div className="input_section_res">
								{searchRes?.map((seRe, i) => (
									<div onClick={assignCity(seRe.city)} key={i}>
										<FaLocationArrow className="icon" />
										<p key={i}>{seRe?.city}</p>
									</div>
								))}
							</div>
						)} */}
					</div>

					<div className="input_section">
						<BiCalendar className="input_icons" />
						<span onClick={() => setOpenDate(!openDate)}>
							{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
								dates[0].endDate,
								"dd/MM/yyyy"
							)}`}
						</span>
						<div ref={menuRef} className="date_container_box">
							{openDate && (
								<DateRange
									editableDateInputs={true}
									onChange={(item) => setDate([item.selection])}
									moveRangeOnFirstSelection={false}
									ranges={dates}
									className="date_renger"
								/>
							)}
						</div>
					</div>
					<div className="input_section">
						<BiMale className="input_icons" />
						<span onClick={() => setOpenOptions(!openOptions)}>
							{`${options.adult} adult . ${options.children} children . ${options.room} room`}
						</span>
						{openOptions && (
							<div className="options" ref={menuRef}>
								<div className="optionItem">
									<div className="counter_content">
										<p className="counter_heading">Adults</p>
										<p className="counter_sub">Ages min 13</p>
									</div>
									<div className="counter_container">
										<button
											disabled={options.adult <= 1}
											className="counter_button"
											onClick={() => {
												handleClick("adult", "d");
											}}
										>
											<BiMinus />
										</button>
										<div className="counter_number">{options.adult}</div>
										<button
											disabled={options.adult >= 10}
											className="counter_button"
											onClick={() => {
												handleClick("adult", "i");
											}}
										>
											<BiPlus />
										</button>
									</div>
								</div>
								<div className="optionItem">
									<div className="counter_content">
										<p className="counter_heading">Children</p>
										<p className="counter_sub">Ages 2-12</p>
									</div>
									<div className="counter_container">
										<button
											disabled={options.children <= 0}
											className="counter_button"
											onClick={() => {
												handleClick("children", "d");
											}}
										>
											<BiMinus />
										</button>
										<div className="counter_number">{options.children}</div>
										<button
											disabled={options.children >= 9}
											className="counter_button"
											onClick={() => {
												handleClick("children", "i");
											}}
										>
											<BiPlus />
										</button>
									</div>
								</div>
								<div className="optionItem">
									<div className="counter_content">
										<p className="counter_heading">Room</p>
										<p className="counter_sub">Total rooms</p>
									</div>
									<div className="counter_container">
										<button
											disabled={options.room <= 1}
											className="counter_button"
											onClick={() => {
												handleClick("room", "d");
											}}
										>
											<BiMinus />
										</button>
										<div className="counter_number">{options.room}</div>
										<button
											disabled={options.room >= 9}
											className="counter_button"
											onClick={() => {
												handleClick("room", "i");
											}}
										>
											<BiPlus />
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
					<button onClick={handleSearch} className="search_btn">
						<FaSistrix id="search" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Hero;
