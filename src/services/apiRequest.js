import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(`${process.env.REACT_APP_BASE_URL}` + url);
				setData(res.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	const refetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(`${process.env.REACT_APP_BASE_URL}` + url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, refetch };
};

// export const countByCity = async(type) => {
// 	try {
// 		const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/hotel/countByCity?cities=${type}`);
// 		return res;
// 	} catch (err) {
// 		console.log("Error from api request",err);
// 	}
// };


export default useFetch;
