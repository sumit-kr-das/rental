import { useContext, useEffect } from "react";
import ListSlider from "../components/HotelList/ListSlider/ListSlider";
import HotelDetails from "../components/HotelList/HotelDetails/HotelDetails";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import TopShades from '../components/TopShades/TopShades'

import { useLocation } from 'react-router-dom';
import { Cart } from "../context/CartContext";
import axios from "axios";

const HotelList = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	// cart context
	const {dispatch, products,loading} = useContext(Cart);

	// fetch api data
	// const { data, loading } = useFetch(`/v1/hotel/find/${id}`);

	useEffect(() => {
		const getProductData = async() => {
			dispatch({ type: "IS_LOADING" });
			const productData = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/hotel/find/${id}`);
			dispatch({ type: "FETCH_DATA", payload:{pData:productData.data}});
		}
		getProductData()
	},[id]);

	
	return (
		<>
			<TopShades />
			<ListSlider photos={products.photos} loading={loading} />
			<HotelDetails item={products} loading={loading} id={id} />
			<NewsLetter />
		</>
	);
};
export default HotelList;