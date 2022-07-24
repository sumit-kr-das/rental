import './reserveHotel.scss';
import useFetch from '../../../services/apiRequest'
import {BiXCircle} from "react-icons/bi";
import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const ReserveHotel = ({ setOpen, hotelId }) => {
	const { data, loading, error } = useFetch(`/hotel/room/${hotelId}`);
	const [selectedRooms, setSelectedRooms] = useState([]);

	const { dates } = useContext(SearchContext);

	// const getDateInRange = (startDate,endDate) => {

	//   const date = new Date(start).getTime();
	//   let list = []
	//   while(date <= end){
	//     list.push(date)
	//     date.setDate(date.getDate()+1)
	//   }

	//   return list;
	// }

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	console.log(selectedRooms);

	const handleClick = () => {};
	return (
		<div className="reserveHotel">
			<div className="r_container">
				<BiXCircle />
				<span>Select your rooms:</span>
				{data.map((item, index) => (
					<div key={index}>
						<div>
							<div>{item.title}</div>
							<div>{item.desc}</div>
							<div>Max People: {item.maxPeople}</div>
							<div>{item.price}</div>
						</div>
						<div className="room">
							{item.roomNumbers.map((roomNumber, index) => (
								<div key={index}>
									<label>{roomNumber.number}</label>
									<input
										type="checkbox"
										value={roomNumber._id}
										onChange={handleSelect}
									/>
								</div>
							))}
						</div>
					</div>
				))}
				<button onClick={handleClick} className="btn_primary">
					Seserve Now
				</button>
			</div>
		</div>
	);
}

export default ReserveHotel