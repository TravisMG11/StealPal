import React from "react";
import { Link } from 'react-router-dom';

export default ({ restaurant }) => (
  <li className="restaurant overlay">
    <div>
      <img className="meal-pic" src={restaurant.meal.image_url}/>
      <span className="meal-name">{restaurant.meal.name}</span>
    </div>
    <div className="rest-info">
      <span className="rest-name">{restaurant.name}</span>
      <span className="rest-add">{restaurant.address}</span>
    </div>
  </li>
);
