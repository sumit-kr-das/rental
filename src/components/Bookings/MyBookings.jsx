import "./myBookings.scss";
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const MyBookings = () => {
	const [bookings, setBookings] = useState([]);
	let token;
	let user = JSON.parse(localStorage.getItem("user"));
	if (user && user.access_token) {
		token = { Authorization: `Bearer ${user.access_token}` };
	}

	useEffect(() => {
		const getBookings = async () => {
			const res = await axios.get(
				`${process.env.REACT_APP_BASE_URL}/v1/bookings`,
				{
					headers: token,
				}
			);
			setBookings(res.data);	
		};
		getBookings();
	}, [bookings]);

	const handeleCancel = async (reserveDates, bookingId) => {
		console.log(reserveDates);
		console.log(bookingId);
		await axios.put(
			`${process.env.REACT_APP_BASE_URL}/v1/bookings/${bookingId}`,
			{ dates: reserveDates },
			{ headers: token }
		);
	};

	return (
		<section className="myBookings">
			<h2>Active Booking</h2>
			<div className="booking_container">
				{bookings.length !== 0 ? (
					<>
						{bookings?.map((item, indx) => (
							<div className="booking" key={indx}>
								<div className="booking_img_con">
									<img src="/assets/hotels/hotel_5.jpeg" alt="hotel" />
								</div>
								<div className="booking_det_con">
									<p className="booking_title">{item?.title}</p>
									<p>
										<span>Booking Id:</span> {item?.roomId}
									</p>
									<div className="address">
										<FiMapPin className="icn" />
										<p>{item?.address}</p>
									</div>
									<p className="booking_dates">
										<span>Booking Dates:</span> 15Aug - 25Aug
									</p>
									<div className="btn_container">
										<Link className="btn_primary" to={`/hotel/${item.hotelId}`}>
											View Details
										</Link>
										<div
											className="btn_primary btn_sec"
											onClick={() =>
												handeleCancel(item?.reserveDates, item?._id)
											}
										>
											Cancel Booking
										</div>
									</div>
								</div>
							</div>
						))}
					</>
				) : (
					<NotFound 
					details="Sorry, no bookings found!"
					link="Book now"
				/>
				)}
			</div>
		</section>
	);
};

export default MyBookings;
