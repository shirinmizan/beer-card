import React, { useState } from 'react';
import Navbar from '../../component/NavBar/NavBar';
import BeerCardList from '../../component/BeerCardList/BeerCardList';
import beers from '../../data/beers';
import filters from '../../data/filters';
import './Home.scss';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searched, setSearched] = useState(false);
    // const [showFiltered, setFiltered] = useState(false);
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
        const handleABVChecked = (event) => {
            setSearched = !searched
      }
    };
    const [filtersArr, updateFiltersArr] = useState(filters);
    
    const toggleCheckedFilter = (id) => {
      const newFiltersArr = filtersArr.map(filter => 
         id === filter.id ? {...filter, checked: !filter.checked} : {...filter}
        )
      updateFiltersArr(newFiltersArr)
    }
    const newBeerList= beers.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        return beerNameLower.includes(searchTerm)
        && (filtersArr[0].checked ? beer.abv > 6: true )
        && (filtersArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
        && (filtersArr[2].checked ? beer.ph < 4: true );
    });
    

// console.log("NewFiltersArr=")
// console.log(filtersArr);
// console.log("UpdatedBeers=");
// console.log(updatedBeers);

    return (
        <div className='home'>
            <Navbar 
                className="navbar"
                searchTerm={searchTerm}
                handleInput={handleInput}
                filtersArr={filtersArr}
                toggleCheckedFilter={toggleCheckedFilter}
            />
            <BeerCardList beersArr={newBeerList} />
        </div>
    )
}

export default Home;