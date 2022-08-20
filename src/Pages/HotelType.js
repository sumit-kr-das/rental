import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../services/apiRequest";
import HotelLists from "../components/Destination/HotelLists/HotelLists";

const HotelType = () => {
	const location = useLocation();
	const pathType = location.pathname.split("/")[2];
	const properties = location.pathname.split("/")[3];
	const { data, loading } = useFetch(`/v1/hotel?type=${pathType}`);

	return <HotelLists data={data} loading={loading} place={pathType} properties={properties} />;
}

export default HotelType;