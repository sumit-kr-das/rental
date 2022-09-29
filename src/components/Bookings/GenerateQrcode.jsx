import React, { useEffect, useState } from "react";
import qrcode from "qrcode";

const GenerateQrcode = ({ roomID }) => {
	const [qrSrc, setQrSrc] = useState("");

	useEffect(() => {
		qrcode.toDataURL(roomID).then((data) => {
			setQrSrc(data);
		});
	}, [roomID]);
    
	return <img src={qrSrc} alt="check_quote" />;
};

export default GenerateQrcode;
