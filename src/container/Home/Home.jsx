import React, { useState } from 'react';
import Navbar from '../../component/NavBar/NavBar';
import BeerCardList from '../../component/BeerCardList/BeerCardList';
import beers from '../../data/beers';
import filters from '../../data/filters';
import './Home.scss';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searched, setSearched] = useState(false);
    const [filtersArr, updateFiltersArr] = useState(filters);
    const [ph, setPh] = useState(false)
    const [abv, setAbv] = useState(false)
    const [beersArray, setBeersArray] = useState([])
    
    /**
     * Handelling Search box input event
     * @param {
     * } event 
     */
    const handleInput = (event) => {
        const lowerInput = event.target.value.toLowerCase();
        setSearchTerm(lowerInput);
        const handleABVChecked = (event) => {
            setSearched = !searched
      }
    };
    /**
     * Show the checkbox filter names
     * @param {
     * } id 
     */
    const toggleCheckedFilter = (id) => {
      const newFiltersArr = filtersArr.map(filter => 
         id === filter.id ? {...filter, checked: !filter.checked} : {...filter}
        )
      updateFiltersArr(newFiltersArr)
    }

    const filterByPH = () => {
        setPh(!ph)
    }

    const filterByABV = () => {
        setAbv(!abv)
    }

    /**
     * will give a new beer list from the filter
     * 
     */
    // const newBeerList= beers.filter((beer) => {
    //     //const beerNameLower = beer.name.toLowerCase();
    //    // return beerNameLower.includes(searchTerm);
    //    const newArr = [];

    //     //const checkFiltered =()=>{

    //         if (filtersArr[0].checked){
    //             newArr = beer.abv > 6
    //         }
    //         if (filtersArr[1].checked){
    //             newArr = beer.first_brewed.substr(3,6) < 2010
    //         }
    //         if(filtersArr[2].checked){
    //             newArr = beer.ph < 4

    //         }
    //   // }

      // updateFiltersArr(newArr);
        //(filtersArr[0].checked ? beer.abv > 6: true )
        // && (filtersArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
        // && (filtersArr[2].checked ? beer.ph < 4: true );
   // });

   const filterResults = beersArray.filter(result => {
    let beerHasMatched = true;
  
    if (searchTerm) {
      beerHasMatched = result.name.toLowerCase().includes(searchTerm);
    }
  
    if (abv) {
      beerHasMatched = beerHasMatched && result.abv > 6;
    }
  
    if (ph) {
      beerHasMatched = beerHasMatched && result.ph < 4;
    }

    setBeersArray(beers)
  
    return beerHasMatched;
  });
  
    return (
        <div className='home'>
            <Navbar 
                className="navbar"
                searchTerm={searchTerm}
                handleInput={handleInput}
                filtersArr={filtersArr}
                toggleCheckedFilter={toggleCheckedFilter}
            />
            <BeerCardList beersArr={filterResults}/>
        </div>
    )
}

export default Home;