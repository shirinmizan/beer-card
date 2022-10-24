
import React from 'react'
import FilterList from '../FilterList/FilterList';
import SearchBox from '../SearchBox/SearchBox'
import './NavBar.scss'
import { Link } from "react-router-dom";

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



  
