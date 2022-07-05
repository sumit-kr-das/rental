import React from "react";
import "./destination.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Destinations = () => {
	return (
		<section className="destination">
			<p className="main_heading">Top Destinations</p>
			<div className="des_container">
				<Swiper
					spaceBetween={60}
					slidesPerView={5}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
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
							<p>17 Rentals</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="des_card">
							<div className="img_container">
								<img
									src="/assets/top_destinations/beach.jpg"
									alt="destination"
								/>
							</div>
							<p className="heading">Virginia Beach</p>
							<p>17 Rentals</p>
						</div>
					</SwiperSlide>
                    <SwiperSlide>
						<div className="des_card">
							<div className="img_container">
								<img
									src="/assets/top_destinations/beach.jpg"
									alt="destination"
								/>
							</div>
							<p className="heading">Virginia Beach</p>
							<p>17 Rentals</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="des_card">
							<div className="img_container">
								<img
									src="/assets/top_destinations/beach.jpg"
									alt="destination"
								/>
							</div>
							<p className="heading">Virginia Beach</p>
							<p>17 Rentals</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="des_card">
							<div className="img_container">
								<img
									src="/assets/top_destinations/beach.jpg"
									alt="destination"
								/>
							</div>
							<p className="heading">Virginia Beach</p>
							<p>17 Rentals</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Destinations;
