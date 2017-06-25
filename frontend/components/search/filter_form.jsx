import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ updateFilter }) => (
  <div className="filter">
    <span className="filter">Results:</span>
    <br/>
    <label>param 1</label>
    <input
      onChange={handleChange(updateFilter)}
    />
     <br/>
    <label>param 2</label>
    <input
      onChange={handleChange(updateFilter)}
    />
  </div>
);

export default FilterForm;
