import React from "react";
import "./featuredPlaces.scss";
import { BiMap } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const FeaturedPlaces = () => {
	return (
		<section className="featured">
			<p className="main_heading">Featured places to stay</p>
			<p className="main_para">Popular places to stay</p>
			<div className="fe_container">
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_1.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_2.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_3.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_4.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_5.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_6.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_7.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
				<div className="fe_cards">
					<img src="/assets/hotels/hotel_8.jpeg" alt="hotel_img" />
					<div className="fe_content">
						<div className="fa_de">
							<p className="fe_items">Entire Cabin . 10 beds</p>
							<p className="fe_title">White Horse Hotel</p>
							<p className="fe_loction">
								<BiMap />
								211 Park Street
							</p>
						</div>
						<div className="fe_border"></div>
						<div className="fe_pr_ra">
							<p className="fe_price">
								<span>$26</span>/night
							</p>
							<p className="fe_feating">
								<AiFillStar className="icn" /> 4.8
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedPlaces;
