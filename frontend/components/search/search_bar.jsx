import React from 'react';

const SearchBar = (props) => {

  const handleChange = (e) => {
    props.updateSearchTerm(e.currentTarget.value);
  };
  const cuisines = [
    "American",
    "Mexican",
    "Italian",
    "Vegetarian"
  ];

  const createCheckbox = (label) => {
    return <Checkbox label={label} key={label} />;
  };

  const createCheckboxes = () => (
    items.map(this.createCheckbox)
  );

  return (
    <div className="search-bar-div">
      <form className="search-bar">
        <input className="city-input" value={"NEW YORK CITY"} />
        <input className="meal-input" placeholder="Search by restaurant or meal" value={props.searchTerm} onChange={handleChange} />
        <input className="loco-input"value={"Search by location"} />
      </form>
    </div>
  );
};

export default SearchBar;
