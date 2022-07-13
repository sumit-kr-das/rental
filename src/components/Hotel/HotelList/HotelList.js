import './hotelList.scss';
import { AiFillStar } from "react-icons/ai";

const HotelList = () => {
  return (
    <div className='hotel_single_list'>
      <div className='main_hotel_img'>
        <img src="/assets/hotels/hotel_2.jpeg" alt="hotel_image" />
      </div>
      <div className='hotel_details'>
        <div className='hotel_heading'>
          <p className='hotel_name'>Tower Street Apartments</p>
          <p className='hotel_rev'>Excellent</p>
          <p className='hotel_reating'><AiFillStar className='star_icn'/>8.9</p>
        </div>
        <div className='hotel_detls'>
          <div>
            <p>500m from city center</p>
            <p className='hotel_free'>Free airport taxi</p>
            <p className='hotel_fe_first'>Studio Apartment with Air conditioning</p>
            <p>Entire studio . 1 bathroom . 21m square 1 full bed</p>
            <p className='hotel_fe_sec'>Free cancellation available</p>
            <p>You can cancel later, so lock in this great price today!</p>
          </div>
          <div className='hotel_right_con'>
            <p className='hoptel_price'>$112</p>
            <p>Includes taxis and fees</p>
            <button className='btn_primary'>See availability</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList