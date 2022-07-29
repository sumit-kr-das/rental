import React from "react";
import "./hotelLists.scss";
import HotelList from "../../Hotel/HotelList/HotelList";

const HotelLists = ({ data, loading, place }) => {
	return (
		<section className="listContainer">
			<div className="hotel_list">
				<div className="hotel_list_heading">
					<div>
						<p>{place}</p>
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

export default HotelLists;
