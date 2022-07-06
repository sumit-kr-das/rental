import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const RegisterSection = () => {
	return (
		<section className="register">
			<p className="main_heading">Signup</p>
			<div className="reg_container">
				<div className="reg_input">
					<p>Your name</p>
					<input type="text" />
				</div>
				<div className="reg_input">
					<p>Email address</p>
					<input type="email" />
				</div>
				<div className="reg_input">
					<p>Password</p>
					<input type="password" />
				</div>
				<div className="reg_input">
					<p>Confirm Password</p>
					<input type="password" />
				</div>
				<button className="btn_primary">Register</button>
				<p className="reg_option">
					Already have an account? <Link to="/login"> Sign in</Link>
				</p>
			</div>
		</section>
	);
};

export default RegisterSection;
