import { UPDATE_SEARCHTERM } from '../actions/search_actions';

const defaultState = '';

const SearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHTERM: {
      return action.searchTerm;
    }
    default:
      return state;
  }
};

export default SearchReducer;
