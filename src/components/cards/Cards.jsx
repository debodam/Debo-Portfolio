import React from "react";
import "./cards.css";

const Cards = ({ image, name }) => {
  return (
    <div className="cards">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};

export default Cards;
