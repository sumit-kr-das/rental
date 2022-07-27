import { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
	BiGroup,
	BiBed,
	BiBath,
	BiArea,
	BiShareAlt,
	BiHeart,
} from "react-icons/bi";
import { SearchContext } from "../../../context/SearchContext";
import { AuthContext } from '../../../context/AuthContext';
import "./hotelDetails.scss";
import { useNavigate } from 'react-router-dom';
import ReserveHotel from "../ReserveHotel/ReserveHotel";


const HotelDetails = ({ item, loading, id }) => {
	const navigate = useNavigate();
	const [openModel, setOpenModel] = useState(true);

	// context api
	const { dates, options } = useContext(SearchContext);
	const { user } = useContext(AuthContext);
	console.log("contabe",dates);
	// calculate total days
	const milliseconds_per_day = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date1.getTime() - date2.getTime());
		const diffDays = Math.ceil(timeDiff / milliseconds_per_day);
		return diffDays;
	}
	let  days;
	const today = new Date()
	const tomorrow = new Date(today)
	const nextDay = tomorrow.setDate(tomorrow.getDate() + 1)

	if(dates.length == 0 || dates.length==0){
	 days = dayDifference(nextDay, today);

	}else{
		days = dayDifference(dates[0].endDate, dates[0].startDate);
		console.log("empty not");
	}

	console.log(days);
	const handleClick = () => {
		if(user){

		}else{
			navigate("/login");
		}
	}

	return (
		<section className="hotel_contents">
			<div className="hotel_content">
				{loading ? (
					"loading"
				) : (
					<>
						<div className="hd_title">
							<div className="hd_heading">
								<p>{item?.name}</p>
								<p>
									<AiFillStar className="star_icn" /> {item?.rating} (3 Reviews)
									{item?.city}
								</p>
							</div>
							<div className="hd_share">
								<BiShareAlt className="hd_share_icn" />
								<BiHeart className="hd_share_icn" />
							</div>
						</div>
						<div className="features_con">
							<div className="single_features">
								<BiGroup className="features_icn" />
								<p>People: 6</p>
							</div>
							<div className="single_features">
								<BiBed className="features_icn" />
								<p>Beds: 3</p>
							</div>
							<div className="single_features">
								<BiBath className="features_icn" />
								<p>Bath: 2</p>
							</div>
							<div className="single_features">
								<BiArea className="features_icn" />
								<p>Area: 312m2</p>
							</div>
						</div>
						<div className="u_line"></div>
						<div className="features_des">
							<p className="features_des_title">About this room</p>
							<p className="features_des_para">{item?.description}</p>
							{/* <p className="features_des_para">
								Quam fusce convallis ipsum malesuada amet velit aliquam urna
								nullam vehicula fermentum id morbi dis magnis porta sagittis
							</p> */}
						</div>
					</>
				)}
			</div>
			<div className="booking_details">
				{loading ? (
					"loading"
				) : (
					<>
						<p className="booking_sub_head">Perfect for a 2-night stay</p>
						<p>
							Located in the real heart of {item?.city}, this property has an
							excellent location score of {item?.rating}
						</p>
						<p className="booking_price">
							<span>${days * item.cheapestPrice * options.room}</span>({days}{" "}
							night)
						</p>
						<button onClick={handleClick} className="btn_primary">Reverse of Book Now</button>
					</>
				)}
			</div>
			{ openModel && <ReserveHotel setOpen={setOpenModel} hotelId={id} />}
		</section>
	);
};

export default HotelDetails;
