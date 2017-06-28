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
      return merge({}, state, {newSearchSize} );
    }
    case UPDATE_SEARCHTYPE: {
      const searchType = action.searchType;
      return merge({}, state, {searchType} );
    }
    default:
      return state;
  }
};

export default SearchReducer;

// ase RECEIVE_CURRENT_USER:
//   const currentUser = action.currentUser;
//   return merge({}, defaultState, {currentUser});
// case RECEIVE_RESTAURANT: {
//   const newRestaurant = {[action.restaurant.id]: action.restaurant};
//   const newState = merge({}, state, newPost);
//   return newState;
// }
//
// const SearchReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case UPDATE_SEARCHTERM: {
//       return action.searchTerm;
//     }
//     case UPDATE_SEARCHSIZE: {
//       const newState = merge({}, state, )
//     }
//     case UPDATE_SEARCHTYPE: {
//       return action.searchType;
//     }
//     default:
//       return state;
//   }
// };
//
