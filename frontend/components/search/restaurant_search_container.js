import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { asArray } from '../../reducers/selector';
import { updateFilter } from '../../actions/filter_actions';
import { updateSearchTerm  } from '../../actions/search_actions';


const mapStateToProps = state => ({
  restaurants: asArray(state)
});

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantSearch);
