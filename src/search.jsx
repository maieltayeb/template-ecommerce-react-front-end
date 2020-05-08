import React from "react";

const Search = props => {
  const { onSearch,onChange } = props;
  return (
    <React.Fragment>
       <label>productName:</label>
        <br/>
      <div className="search-box">
       
        <input
          className="search-box__input"
          onChange={onChange}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button type="submit" className="search-box__btn" onClick={onSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* <button type="submit">Search</button> */}
    </React.Fragment>
  );
};

export default Search;
