import React from "react";
import "./featuredPlaces.scss";
import { BiMap } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import useFetch from "../../../services/apiRequest";
import { Link } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import { addDays } from "date-fns";

const FeaturedPlaces = () => {
	const { data, loading } = useFetch(
		"/v1/hotel?featured=true&limit=4"
	);
	
	const today = new Date()
	const nextDay = addDays(new Date(), 1)
	return (
		<section className="featured">
			<p className="main_heading">Featured places to stay</p>
			<p className="main_para">Popular places to stay</p>
			<div className="fe_container">
				{loading ? (
					<>{[...Array(4)].map((x,i) => <Skeleton key={i} type="featured" />)}</>
				) : (
					<>
						{data.map((item, index) => (
							<Link to={`/hotel/${item._id}?start=${today}&end=${nextDay}`} className="fe_cards" key={index}>
								<img src="/assets/hotels/hotel_1.jpeg" alt="hotel_img" />
								<div className="fe_content">
									<div className="fa_de">
										<p className="fe_items">{item.type} . 1 beds</p>
										<p className="fe_title">{item.name}</p>
										<p className="fe_loction">
											<BiMap />
											{item.address}
										</p>
									</div>
									<div className="fe_border"></div>
									<div className="fe_pr_ra">
										<p className="fe_price">
											<span>${item.cheapestPrice}</span>/night
										</p>
										{item.rating && (
											<p className="fe_feating">
												<AiFillStar className="icn" /> {item.rating}
											</p>
										)}
									</div>
								</div>
							</Link>
						))}
					</>
				)}
			</div>
		</section>
	);
};

export default FeaturedPlaces;
