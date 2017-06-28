export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export const UPDATE_SEARCHSIZE = 'UPDATE_SEARCHSIZE';
export const UPDATE_SEARCHTYPE = 'UPDATE_SEARCHTYPE';

export const updateSearchTerm = searchTerm => {
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  };
};

export const updateSearchSize = searchSize => {
  return {
    type: UPDATE_SEARCHSIZE,
    searchSize
  };
};

export const updateSearchType = searchType => {
  return {
    type: UPDATE_SEARCHTYPE,
    searchType
  };
};
