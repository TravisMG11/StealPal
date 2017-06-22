import React from "react";
import { Link } from 'react-router-dom';

export default ({ restaurant}) => (
  <li>
    {restaurant.name}
    {restaurant.address}
  </li>
);
