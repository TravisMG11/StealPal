import React from 'react';

const SearchBar = (props) => {

  const handleChange = (e) => {
    props.updateSearchTerm(e.currentTarget.value)
  }

  return (
    <div>
      <form className="search-bar">
        <input value={props.searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
