import { connect } from 'react-redux';
// import RestaurantsSearch from './restaurants_search';
import SearchBar from './search_bar';
import { fetchSearchRestaurants } from '../../actions/restaurant_actions';
import { asArray } from '../../reducers/selector';

const mapStateToProps = state => ({
  restaurants: asArray(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchRestaurants: searchTerm => dispatch(fetchSearchRestaurants(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
