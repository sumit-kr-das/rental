import "./myBookings.scss";
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
	let token;
	let user = JSON.parse(localStorage.getItem("user"));
	if (user && user.access_token) {
		token = { Authorization: `Bearer ${user.access_token}` };
	}

	useEffect(() => {
		const getBookings = async () => {
			const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/bookings`, {
				headers: token,
			});
            setBookings(res.data)
            console.log(res.data);
		};
        getBookings()
	}, []);


	return (
		<section className="myBookings">
			<h2>Active Booking</h2>
			<div className="booking_container">
				<div className="booking">
					<img src="/assets/hotels/hotel_5.jpeg" alt="hotel" />
					<div>
						<p>Taj Hotel Durgapur</p>
						<div>
							<FiMapPin />
							<p>Hotel Laxmi Empire features</p>
						</div>
						<p>15Aug - 25Aug</p>
						<button>Cancel Booking</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyBookings;
