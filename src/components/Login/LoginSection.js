import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginSection = () => {
	return (
		<section className="register">
			<p className="main_heading">Login</p>
			<div className="reg_container">
				<div className="reg_input">
					<p>Email address</p>
					<input type="email" />
				</div>
				<div className="reg_input">
					<p>Password</p>
					<input type="password" />
				</div>
				<button className="btn_primary">Register</button>
				<p className="reg_option">
					New user? <Link to="/register">Create an account</Link>
				</p>
			</div>
		</section>
	);
};

export default LoginSection;
