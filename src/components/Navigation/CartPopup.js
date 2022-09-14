import React, { useEffect, useRef } from "react";
import Backdop from "../Backdop/Backdop";

const CartPopup = ({ setCart }) => {
	// close dropDown
	let cartRef = useRef();
	useEffect(() => {
		let handler = (event) => {
			if (!cartRef.current.contains(event.target)) {
				setCart(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<Backdop>
			<div className="cartPopup" ref={cartRef}>
				<h3>Favorites (2):</h3>
				<div className="cartPopup_container">
					<div className="cartPopup_hotel">
						<div>
							<img
								className="hotel_img"
								src="/assets/hotels/hotel_1.jpeg"
								alt="hotel"
							/>
						</div>
						<div>
							<p>Hotel Laxmi Empire</p>
							<p>$900/night</p>
						</div>
						<div className="hd_share_icn hd_heart_img">
							<img src="/assets/icons/heart_fill.png" alt="heart" />
						</div>
					</div>
					<div className="cartPopup_hotel">
						<div>
							<img
								className="hotel_img"
								src="/assets/hotels/hotel_1.jpeg"
								alt="hotel"
							/>
						</div>
						<div>
							<p>Hotel Laxmi Empire</p>
							<p>$900/night</p>
						</div>
						<div className="hd_share_icn hd_heart_img">
							<img src="/assets/icons/heart_fill.png" alt="heart" />
						</div>
					</div>
				</div>
			</div>
		</Backdop>
	);
};

export default CartPopup;
