import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../services/apiRequest";
import HotelLists from "../components/Destination/HotelLists/HotelLists";
import axios from "axios";
import { useState } from "react";

const Destination = () => {
	const location = useLocation();
	const place = location.pathname.split("/")[2];
	const [properties, setProperties] = useState("");

	const { data, loading } = useFetch(`/v1/hotel?city=${place}`);
	
	useEffect(() => {
		const fetchData = async() => {
			try{
				const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/hotel/countByCity?cities=${place}`)
				setProperties(res.data)
			}catch(err){
				console.log("Error is", err);
			}
		}
		fetchData();
	},[place]);

	return <HotelLists data={data} loading={loading} place={place} properties={properties} />;
};

export default Destination;
