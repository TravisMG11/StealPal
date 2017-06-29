import React from "react";
import { Link } from 'react-router-dom';

export default ({ meal }) => (
  <div className="meal">
    <div>
      <img className="meal-pic" src={meal.image_url}/>
    </div>
    <div className="res-info">
      <span className="res-name">{meal.name}</span>
      <span className="res-add">{meal.restaurant_address}</span>
      <span className="res-rest">{meal.restaurant}</span>
      <span className="res-date">{meal.date}</span>
    </div>
  </div>
);
