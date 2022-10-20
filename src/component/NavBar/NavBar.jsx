
import React from 'react'
import { useState } from "react";
import FilterList from '../FilterList/FilterList';
import SearchBox from '../SearchBox/SearchBox'
import './NavBar.scss'

const Navbar = (props) => {
    const { searchTerm, handleInput, filtersArr, toggleCheckedFilter } = props;

    console.log(filtersArr);

    return (

        <div className='navbar' >
            <SearchBox
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <FilterList filtersArr={filtersArr} onChange={toggleCheckedFilter}/>
        </div>

    )
}

export default Navbar


// import "./NavBar.scss";
// import { useState } from "react";
// import BeerCard from "../BeerCard/BeerCard";
// import SearchBox from "../SearchBox/SearchBox";


// const NavBar = (props) => {
//     const { beerArr } = props;
//     const [searchTerm, setSearchTerm] = useState("");
  
//     const handleInput = (event) => {
//       const cleanInput = event.target.value.toLowerCase();
//       setSearchTerm(cleanInput);
//     };
  
//     const filteredCards = beerArr.filter((beer) => {
//       const cardsTitleLower = beer.name.toLowerCase();
  
//       return cardsTitleLower.includes(searchTerm) && beer.image_url;
//     });
  
//     return (
//       <>
//         <SearchBox
//           label={"beers"}
//           searchTerm={searchTerm}
//           handleInput={handleInput}
//           beerArr={filteredCards}
//         />
//         {/* <BeerCard title={"Results"} beerArr={filteredCards} /> */}
//       </>
//     );
//   };
  
//   export default NavBar;
  
