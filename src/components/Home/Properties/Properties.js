import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../services/apiRequest";
import "./properties.scss";

const images = [
	"/assets/property/hotels.webp",
	"/assets/property/cabins.jpg",
	"/assets/property/resorts.jpg",
	"/assets/property/villas.jpg",
	"/assets/property/apartments.jpg",
];

const Properties = () => {
	const { data, loading, error, refetch } = useFetch("/v1/hotel/countByType");

	return (
		<section className="properties">
			<p className="main_heading">Browse by property type</p>
			<div className="property_container">
				{loading ? (
					"loading"
				) : (
					<>
						{data &&
							images.map((img, i) => (
								<Link to={`/type/${data[i]?.type}`} className="card" key={i}>
									<img src={img} alt="property" />
									<p className="heading">{data[i]?.type}</p>
									<p className="para">
										{data[i]?.count} {data[i]?.type}
									</p>
								</Link>
							))}
					</>
				)}
			</div>
		</section>
	);
};

export default Properties;
