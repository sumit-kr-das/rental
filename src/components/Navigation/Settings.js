import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Backdop from "../Backdop/Backdop";

const Settings = ({ setSettings }) => {
	// close dropDown
	let settingRef = useRef();
	useEffect(() => {
		let handler = (event) => {
			if (!settingRef.current.contains(event.target)) {
				setSettings(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	const logOut = () => {
		localStorage.removeItem("user");
		window.location.reload(false);
	};

	return (
		<Backdop>
			<div className="cartPopup" ref={settingRef}>
				<h3>User settings:</h3>
				<div className="cartPopup_container">
					<ul>
						<li>
							<Link to={"/"}>User Profile</Link>
						</li>
						<li>
							<Link to={"/"}>Checkout</Link>
						</li>
						<li>
							<Link onClick={logOut} to={"/"}>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</Backdop>
	);
};

export default Settings;
