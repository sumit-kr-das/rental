import React from "react";
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
	const { data, loading, error, refetch } = useFetch("/hotel/countByType");
	// console.log(data);
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
								<div className="card" key={i}>
									<img src={img} alt="property" />
									<p className="heading">{data[i]?.type}</p>
									<p className="para">{data[i]?.count} {data[i]?.type}</p>
								</div>
							))}
					</>
				)}
			</div>
		</section>
	);
};

export default Properties;
