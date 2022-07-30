import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from 'react-hot-toast'
import "./login.scss";
import axios from 'axios';

const LoginSection = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		email: undefined,
		password: undefined 
	});

	const { user, loading, error, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value}))
	}

	const handleSubmit = async(e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try{
			const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/login`, credentials);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			toast.success('Login Successful')
			navigate("/");
		}catch(err){
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
			toast.error("Email & password is wrong")
		}
	}

	return (
		<section className="register">
			<p className="main_heading">Login</p>
			<div className="reg_container">
				<div className="reg_input">
					<p>Email address</p>
					<input type="email" name="email" onChange={handleChange} />
				</div>
				<div className="reg_input">
					<p>Password</p>
					<input type="password" name="password" onChange={handleChange} />
				</div>
				<button onClick={handleSubmit} className="btn_primary">Register</button>
				<p className="reg_option">
					New user? <Link to="/register">Create an account</Link>
				</p>
			</div>
		</section>
	);
};

export default LoginSection;

