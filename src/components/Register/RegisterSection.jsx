import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import "./register.scss";

const RegisterSection = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		name: undefined,
		email: undefined,
		password: undefined,
	});

	const handleChange = (e) => {
		setCredentials((prev) => ({...prev, [e.target.name]:e.target.value}));
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try{
			await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, credentials)
			toast.success('Registration Successful')
			navigate("/login")
		}catch(err){
			toast.error("Input is not valid")
		}
	};
	return (
		<section className="register">
			<p className="main_heading">Signup</p>
			<div className="reg_container">
				<div className="reg_input">
					<p>Your name</p>
					<input name="name" type="text" onChange={handleChange} />
				</div>
				<div className="reg_input">
					<p>Email address</p>
					<input name="email" type="email" onChange={handleChange} />
				</div>
				<div className="reg_input">
					<p>Password</p>
					<input type="password" name="password" onChange={handleChange} />
				</div>
				<button onClick={handleSubmit} className="btn_primary">
					Register
				</button>
				<p className="reg_option">
					Already have an account? <Link to="/login"> Sign in</Link>
				</p>
			</div>
		</section>
	);
};

export default RegisterSection;
