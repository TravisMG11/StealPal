import { connect } from 'react-redux';
// import RestaurantsSearch from './restaurants_search';
import SearchBar from './search_bar';
import { fetchSearchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchRestaurants: searchTerm => dispatch(fetchSearchRestaurants(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
