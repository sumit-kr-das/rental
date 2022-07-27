import React from "react";
import "./destination.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetch from "../../../services/apiRequest";

const Destinations = () => {
	const {data, loading,error,refetch} = useFetch("/v1/hotel/countByCity?cities=barlin,madrid,london")
	// console.log(data);
	return (
		<section className="destination">
			<p className="main_heading">Top Destinations</p>
			{
				loading ? "Loading please wait" : (
					<div className="des_container">
					<Swiper
						spaceBetween={60}
						// slidesPerView={5}
						breakpoints={{
							"@0.00": {
								slidesPerView: 2,
								spaceBetween: 50,
							},
							"@0.75": {
								slidesPerView: 2,
								spaceBetween: 50,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 50,
							},
							"@1.50": {
								slidesPerView: 4,
								spaceBetween: 50,
							},
						}}
					>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/beach.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">Virginia Beach</p>
								<p>{data[0]} Rentals</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/Los-Angeles.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">Los Angeles</p>
								<p>{data[1]} Rentals</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/New-Jersey.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">New Jersey</p>
								<p>{data[2]} Rentals</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/New-York-City.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">New York</p>
								<p>{data[3]} Rentals</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/San-Francisco.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">San Francisco</p>
								<p>17 Rentals</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="des_card">
								<div className="img_container">
									<img
										src="/assets/top_destinations/Wilmington.jpg"
										alt="destination"
									/>
								</div>
								<p className="heading">Wilmington</p>
								<p>17 Rentals</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				)
			}
		</section>
	);
};

export default Destinations;
