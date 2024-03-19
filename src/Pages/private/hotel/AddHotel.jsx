import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";

const AddHotel = () => {
  const { user } = useContext(AuthContext);
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submitForm(data) {
    console.log(data);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/hotel`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      console.log("data", res.data);
      toast.success("Hotel added successful");
    } catch (err) {
      toast.error("Something went wrong");
    }
  }
  return (
    <div>
      <h3>Add hotel</h3>
      <br />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="reg_input">
          <p className="label">Title</p>
          <input
            className="input_primary"
            type="text"
            placeholder="Enter title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <div className="input_error">{errors.title.message}</div>
          )}
        </div>
        <div className="reg_input">
          <p className="label">Full description</p>
          <textarea
            className="input_primary"
            type="text"
            placeholder="Enter description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <div className="input_error">{errors.description.message}</div>
          )}
        </div>
        <div className="reg_input">
          <p className="label">Full address</p>
          <input
            className="input_primary"
            type="text"
            placeholder="Enter full address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <div className="input_error">{errors.address.message}</div>
          )}
        </div>
        <div className="reg_input">
          <p className="label">Your city</p>
          <input
            className="input_primary"
            type="text"
            placeholder="Enter city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <div className="input_error">{errors.city.message}</div>
          )}
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="reg_input">
            <p className="label">Type</p>
            <select {...register("type", { required: "Type is required" })}>
              <option value="hotels">hotels</option>
              <option value="apartments">apartments</option>
              <option value="resorts">resorts</option>
              <option value="villas">villas</option>
              <option value="cabins">cabins</option>
            </select>
            {errors.type && (
              <div className="input_error">{errors.type.message}</div>
            )}
          </div>
          <div className="reg_input">
            <p className="label">Dtstance in KM</p>
            <input
              className="input_primary"
              type="text"
              placeholder="Enter title"
              {...register("distance", { required: "Distance is required" })}
            />
            {errors.distance && (
              <div className="input_error">{errors.distance.message}</div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="reg_input">
            <p className="label">Price</p>
            <input
              className="input_primary"
              type="text"
              placeholder="Enter Price"
              {...register("cheapestPrice", { required: "Price is required" })}
            />
            {errors.cheapestPrice && (
              <div className="input_error">{errors.cheapestPrice.message}</div>
            )}
          </div>
          <div className="reg_input">
            <p className="label">Featured</p>
            <select {...register("featured", { required: "Type is required" })}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            {errors.featured && (
              <div className="input_error">{errors.featured.message}</div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="reg_input">
            <p className="label">Free taxi service</p>
            <select {...register("freeTaxi", { required: "Type is required" })}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            {errors.freeTaxi && (
              <div className="input_error">{errors.freeTaxi.message}</div>
            )}
          </div>
          <div className="reg_input">
            <p className="label">Free cancel service</p>
            <select
              {...register("freeCancel", {
                required: "FreeCancel is required",
              })}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            {errors.freeCancel && (
              <div className="input_error">{errors.freeCancel.message}</div>
            )}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotel;
