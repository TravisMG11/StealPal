import React from 'react';

const SearchBar = (props) => {

  const handleChange = (e) => {
    props.updateSearchTerm(e.currentTarget.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.className === "check-box type") {
      e.currentTarget.checked = true;
      props.updateSearchType(e.currentTarget.id);
    } else {
      props.updateSearchSize(e.currentTarget.id);
    }

    // const searchItem = props.
    console.log('The link was clicked.');
  };

  return (
    <div className="search-bar-div">
      <form className="search-bar">
        <input className="city-input" value={"NEW YORK CITY"} />
        <input className="meal-input" placeholder="Search by restaurant or meal" value={props.searchTerm.searchTerm} onChange={handleChange} />
        <input className="loco-input"value={"Search by location"} />
          <div className="check-row">
            <div className="check-field" >
              <input id="American" className="check-box type" onClick={handleClick} type="checkbox" checked={false}/>
              <label htmlFor="American" className="checkbox-label">American</label>
            </div>
            <div className="check-field" >
              <input id="Mexican" className="check-box type" onClick={handleClick} type="checkbox" checked={props.searchType === 'Mexican'}/>
              <label htmlFor="Mexican" className="checkbox-label">Mexican</label>
            </div>
            <div className="check-field" >
              <input id="Cartoon" className="check-box type" onClick={handleClick} type="checkbox" checked={props.searchType === 'Cartoon'}/>
              <label htmlFor="Cartoon" className="checkbox-label">Cartoon</label>
            </div>
            <div className="check-field" >
              <input id="Italian" className="check-box type" onClick={handleClick} type="checkbox" checked={props.searchType === 'Italian'}/>
              <label htmlFor="Italian" className="checkbox-label">Italian</label>
            </div>
            <div className="check-field" >
              <input id="Fusion" className="check-box type" onClick={handleClick} type="checkbox" checked={props.searchType === 'Fusion'}/>
              <label htmlFor="Fusion" className="checkbox-label">Fusion</label>
            </div>
            <div className="check-field" >
              <input id="Rugged" className="check-box type" onClick={handleClick} type="checkbox" checked={props.searchType === 'Rugged'}/>
              <label htmlFor="Rugged" className="checkbox-label">Rugged</label>
            </div>
          </div>
          <div className="check-row">
            <div className="check-field" >
              <input id="S" className="check-box" onClick={handleClick} type="checkbox" checked={props.searchSize === 'S'}/>
              <label htmlFor="S" className="checkbox-label">Light Lunch</label>
            </div>
            <div className="check-field" >
              <input id="M" className="check-box" onClick={handleClick} type="checkbox" checked={props.searchSize === 'M'}/>
              <label htmlFor="M" className="checkbox-label">Mid Size</label>
            </div>
            <div className="check-field" >
              <input id="L" className="check-box" onClick={handleClick} type="checkbox" checked={props.searchSize === 'L'}/>
              <label htmlFor="L" className="checkbox-label">Lots O Food</label>
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
