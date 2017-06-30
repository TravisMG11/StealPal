import React from "react";
import { Link } from 'react-router-dom';


const RestaurantItem = (props) => {

  const handleClick = (e) => {
    // e.preventDefault();
    debugger
    props.reserveMeal({meal: props.restaurant.meal});
    console.log('The link was clicked.');
  };
  return (
    <li className="please-please-work">
      <div className="restaurant">
          <div>
            <img className="meal-pic" src={props.restaurant.meal.image_url}/>
            <span className="meal-name">{props.restaurant.meal.name}</span>
          </div>
          <div className="rest-info">
            <span className="rest-name">{props.restaurant.name}</span>
            <span className="rest-add">{props.restaurant.address}</span>
          </div>
      </div>
      <div className="overlay">
        <input onClick={handleClick} className="reserve-button" type="submit" value="Reserve Meal" />
      </div>
    </li>
  );
}

export default RestaurantItem;
