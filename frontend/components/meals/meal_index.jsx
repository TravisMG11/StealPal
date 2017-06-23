import React from "react";
import MealItem from "./meal_item";

class MealsIndex extends React.Component {

  componentDidMount() {
    this.props.showMeals();
  }

  render() {
    const meals = this.props.meals.map(meal => {
      return <MealItem key={meal.id} meal={ meal } />;
    });
    return (
      <div className="indexDiv">
      </div>
    );
  }
}

export default MealsIndex;
