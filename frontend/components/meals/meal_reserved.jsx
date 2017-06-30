import React from "react";
import MealItem from "./meal_item";

const MealReserved = (props) => {

  const handleClick = (e) => {
    // e.preventDefault();
    props.deleteMeal(props.meal.usermeal_id);
    console.log('The link was clicked.');
  };


  if (props.meal.id) {
    debugger
    return (
      <div className="meal-res">
        <div className="res-info">
          <img className="res-pic" src={props.meal.image_url} />
            <div className="info-list">
              <span className="">Date: {props.meal.date}</span>
              <span className="">Meal: {props.meal.name}</span>
              <span className="">Restaurant: {props.meal.restaurant.name}</span>
              <span className="">Address: {props.meal.restaurant.address}</span>
              <input onClick={handleClick} className="reserve-cancel-button" type="submit" value="Cancel Reservation" />
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="empty"></div>
    );
  }
}

export default MealReserved;
