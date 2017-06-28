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



  return (
    <div className="search-bar-div">
      <form className="search-bar">
        <input className="city-input" value={"NEW YORK CITY"} />
        <input className="meal-input" placeholder="Search by restaurant or meal" value={props.searchTerm} onChange={handleChange} />
        <input className="loco-input"value={"Search by location"} />
          <div className="check-row">
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">American</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Mexican</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Rugged</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Cartoon</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Italian</label>
            </div>
          </div>
          <div className="check-row">
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Light Lunch</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Mid Size</label>
            </div>
            <div className="check-field" >
              <input className="check-box" type="checkbox" checked={false}/>
              <label className="checkbox-label">Lots O Food</label>
            </div>
          </div>
      </form>
    </div>
  );
};

// const createCheckbox = (label) => (
//   <input type="checkbox" label={label} key={label} />
// );
//
// const createCheckboxes = () => (
//   cuisines.forEach(function(label) {
//     return createCheckbox(label);
//   }
//   )
// );
//
// return (
//   <div className="search-bar-div">
//     <form className="search-bar">
//       <input className="city-input" value={"NEW YORK CITY"} />
//       <input className="meal-input" placeholder="Search" value={props.searchTerm} onChange={handleChange} />
//       <input className="loco-input"value={"Search by location"} />
//         <div>
//           {createCheckboxes()}
//       </div>
//     </form>
//   </div>
// );

export default SearchBar;
