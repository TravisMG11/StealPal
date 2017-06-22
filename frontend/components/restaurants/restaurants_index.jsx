import React from "react";
import RestaurantItem from "./restaurant_item";

class RestaurantsIndex extends React.Component {

  componentDidMount() {
    this.props.showRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      debugger
      return <RestaurantItem key={restaurant.id} restaurant={ restaurant } />;
    });
    return (
      <div className="indexDiv">
        <h1 className="indexTitle">Restaurants?!?!?!</h1>
        <div className="indexPage">
          <div className="restaurants">
            <ul>{restaurants}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsIndex;
