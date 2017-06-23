import React from "react";
import { Link } from 'react-router-dom';

export default ({ restaurant }) => (
  <li className="restaurant">
    <div>
      <img src={restaurant.meal.image_url}/>
      {restaurant.meal.name}
    </div>
    <div>
      {restaurant.name}
      {restaurant.address}
    </div>
  </li>
);
