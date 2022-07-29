import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../services/apiRequest";
import HotelLists from "../components/Destination/HotelLists/HotelLists";

const Destination = () => {
	const location = useLocation();
	const place = location.pathname.split("/")[2];
	const { data, loading } = useFetch(`/v1/hotel?city=${place}`);

	return <HotelLists data={data} loading={loading} place={place} />;
};

export default Destination;
