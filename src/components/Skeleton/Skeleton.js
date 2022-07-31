import React from "react";
import "./skeleton.scss";
// E3E3E3 cccccc

const Skeleton = ({ type }) => {
    const COUNTER = 5;
	const DestSkeletion = () => {
		return (
			<div className="des_container">
				<div className="des_img"></div>
				<div className="des_title"></div>
				<div className="des_para"></div>
			</div>
		);
	};
    if(type === "destination") return (<DestSkeletion />);
};

export default Skeleton;
