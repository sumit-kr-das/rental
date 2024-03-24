import React from "react";

const ViewHotel = ({ data }) => {
  return (
    <div>
      <h1>{data?.title}</h1>
      <br />
      <p>
        {data?.address} | {data?.city}
      </p>
      <br />
      <br />
      <p>{data?.description}</p>
    </div>
  );
};

export default ViewHotel;
