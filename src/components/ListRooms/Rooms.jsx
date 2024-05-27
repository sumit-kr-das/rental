import React from "react";
import "./rooms.scss";

const Rooms = ({ room }) => {
  return (
    <div>
      <h2>{room.title}</h2>
    </div>
  );
};

export default Rooms;
