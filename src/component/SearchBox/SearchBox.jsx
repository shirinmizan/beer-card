import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (

    <>
    <h2>* Find Your Favourites *</h2>
    <form className="search-box">

      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        placeholder="Search Beers"
        className="search-box__input"
      />
    </form>
    </>

  );
};

export default SearchBox;
