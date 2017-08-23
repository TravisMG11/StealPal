import React from "react";
import MealItem from "./meal_item";

const MealReserved = (props) => {

  const handleClick = (e) => {
    // e.preventDefault();
    props.deleteMeal(props.meal.usermeal_id);
    console.log('The link was clicked.');
  };


  if (props.meal.id) {
    return (
      <div className="meal-res">
        <div className="res-info">
          <img className="res-pic" src={props.meal.image_url} />
            <div className="info-list">
              <h1 className="reservation-header">Your meal is reserved!</h1>
              <span className="info"><h3 className="info-label">Date:</h3> {props.meal.date}</span>
              <span className="info"><h3 className="info-label">Meal:</h3> {props.meal.name}</span>
              <span className="info"><h3 className="info-label">Restaurant:</h3> {props.meal.restaurant.name}</span>
              <span className="info"><h3 className="info-label">Address:</h3> {props.meal.restaurant.address}</span>
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
