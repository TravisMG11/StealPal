export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';

export const updateSearchTerm = searchTerm => {
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  };
};
