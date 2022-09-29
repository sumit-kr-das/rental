import "./hotelList.scss";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const HotelList = ({ item }) => {
	const { dates } = useContext(SearchContext);
	return (
		<div className="hotel_single_list">
			<div className="main_hotel_img">
				<img src="/assets/hotels/hotel_2.jpeg" alt="hotel_image" />
			</div>
			<div className="hotel_details">
				<div className="hotel_heading">
					<p className="hotel_name">{item.name}</p>
					<div className="hotel_details_fst_cld">
						<p className="hotel_rev">Excellent</p>
						{item.rating && (
							<p className="hotel_reating">
								<AiFillStar className="star_icn" />
								{item.rating}
							</p>
						)}
					</div>
				</div>
				<div>
					<p className="hotel_addredd">{item.address}</p>
				</div>
				<div className="hotel_detls">
					<div className="hotel_all_details">
						<p>{item.distance}</p>
						<p className="hotel_free">Free airport taxi</p>
						<p className="hotel_fe_first">
							Studio Apartment with Air conditioning
						</p>
						<p>Entire studio . 1 bathroom . 21m square 1 full bed</p>
						<p className="hotel_fe_sec">Free cancellation available</p>
						<p>You can cancel later, so lock in this great price today!</p>
					</div>
					<div className="hotel_right_con">
						<p className="hoptel_price">${item.cheapestPrice}/Night</p>
						<div className="hotel_right_con_fst_cld">
							<p className="taxes">Includes taxis and fees</p>
							<Link to={`/hotel/${item._id}?start=${dates[0].startDate}&end=${dates[0].endDate}`}>
								<button className="btn_primary">See availability</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelList;
