import { AiFillStar } from "react-icons/ai";
import {
	BiGroup,
	BiBed,
	BiBath,
	BiArea,
	BiShareAlt,
	BiHeart,
} from "react-icons/bi";
import "./hotelDetails.scss";

const HotelDetails = () => {
	return (
		<section className="hotel_contents">
			<div className="hotel_content">
				<div className="hd_title">
					<div className="hd_heading">
						<p>DUPLEX GREENWICH</p>
						<p>
							<AiFillStar className="star_icn" /> 5 (3 Reviews)San Francisco
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
					<p className="features_des_para">
						Libero sem vitae sed donec conubia integer nisi integer rhoncus
						imperdiet orci odio libero est integer a integer tincidunt
						sollicitudin blandit fusce nibh leo vulputate lobortis egestas
						dapibus faucibus metus conubia maecenas cras potenti cum hac arcu
						rhoncus nullam eros dictum torquent integer cursus bibendum sem
						sociis molestie tellus purus
					</p>
					<p className="features_des_para">
						Quam fusce convallis ipsum malesuada amet velit aliquam urna nullam
						vehicula fermentum id morbi dis magnis porta sagittis
					</p>
				</div>
			</div>
			<div className="booking_details">
				<p className="booking_sub_head">Perfect for a 2-night stay</p>
				<p>
					Located in the real heart of London, this property has an excellent
					location score of 8.9
				</p>
				<p className="booking_price">
					<span>$300</span>(2 night)
				</p>
				<button className="btn_primary">Reverse of Book Now</button>
			</div>
		</section>
	);
};

export default HotelDetails;
