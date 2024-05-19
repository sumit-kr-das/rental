import { useContext } from "react";
import {
  BiGroup,
  BiBed,
  BiBath,
  BiArea,
  BiShareAlt,
  BiHeart,
} from "react-icons/bi";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { Cart } from "../../../context/CartContext";

const LeftContainer = ({ item }) => {
  const { cart, dispatch } = useContext(Cart);
  console.log(item);
  return (
    <>
      <div className="hd_title">
        <div className="hd_heading">
          <p>{item?.title}</p>
          <p>{item?.address}</p>
          <p>
            <AiFillStar className="star_icn" /> {item?.rating} (3 Reviews){" "}
            {item?.city}
          </p>
        </div>
        <div className="hd_share">
          <BiShareAlt className="hd_share_icn" />
          {cart.some((p) => p._id === item._id) ? (
            <div
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: { product: item._id },
                })
              }
              className="hd_share_icn"
            >
              <AiFillHeart className="heart_logo" />
            </div>
          ) : (
            <div
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { product: item },
                })
              }
              className="hd_share_icn"
            >
              <BiHeart />
            </div>
          )}
        </div>
      </div>
      <div className="features_con">
        <div className="single_features">
          <BiGroup className="features_icn" />
          <p>People: 6</p>
        </div>
        <div className="single_features">
          <BiBed className="features_icn" />
          <p>Beds: 3</p>
        </div>
        <div className="single_features">
          <BiBath className="features_icn" />
          <p>Bath: 2</p>
        </div>
        <div className="single_features">
          <BiArea className="features_icn" />
          <p>Area: 312m2</p>
        </div>
      </div>
      <div className="u_line"></div>
      <div className="features_des">
        <p className="features_des_title">About this room</p>
        <p className="features_des_para">{item?.description}</p>
      </div>
    </>
  );
};

export default LeftContainer;
