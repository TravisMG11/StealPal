import { UPDATE_SEARCHTERM, UPDATE_SEARCHSIZE, UPDATE_SEARCHTYPE } from '../actions/search_actions';
import merge from "lodash/merge";

const defaultState = {
  searchTerm: '',
  searchSize: {
      "S": false,
      "M": false,
      "L": false
    },
    searchType: ''
  };

const SearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHTERM: {
      const searchTerm = action.searchTerm;
      return merge({}, state, {searchTerm});
    }
    case UPDATE_SEARCHSIZE: {
      const searchSize = action.searchSize;
      const newSearchSize = merge({}, state.searchSize, {[searchSize]: !state.searchSize[searchSize]});
      return merge({}, state, {searchSize: newSearchSize} );
    }
    case UPDATE_SEARCHTYPE: {
      if (action.searchType === state.searchType) {
        return merge({}, state, {searchType: ''} );
      }
      const searchType = action.searchType;
      return merge({}, state, {searchType} );
    }
    default:
      return state;
  }
};

export default SearchReducer;
