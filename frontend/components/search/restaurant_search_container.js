import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { asArray } from '../../reducers/selector';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  restaurants: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantSearch);
