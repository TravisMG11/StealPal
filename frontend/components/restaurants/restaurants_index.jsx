import React from "react";
import RestaurantItemContainer from "./restaurant_item_container";


// class RestaurantsIndex extends React.Component {
const RestaurantsIndex = (props) => {
  // componentDidMount() {
  //   this.props.showRestaurants();
  // }

  // render() {
  const restaurants = props.restaurants.map(restaurant => {
    return <RestaurantItemContainer key={restaurant.id} restaurant={ restaurant } />;
  });
  return (
    // return (
      <div className="indexDiv">
        <div className="indexPage">
          <div>
              <ul className="restaurants">{restaurants}</ul>
          </div>

        </div>
      </div>
    );
  // }
  // )
};

export default RestaurantsIndex;
