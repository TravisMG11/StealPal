import React from "react";
import { Link } from 'react-router-dom';

export default ({ restaurant }) => (
  <li className="restaurant">
    {restaurant.name}
    // {restaurant.address}
  </li>
);
