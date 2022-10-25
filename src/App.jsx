import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import BeerCardList from './component/BeerCardList/BeerCardList';
import FilterList from './component/FilterList/FilterList';
import SearchBox from './component/SearchBox/SearchBox';
import BeerInfo from './component/BeerInfo/BeerInfo';
import NavBar from './component/NavBar/NavBar';

const App = () => {

  const [beersArr, setBeersArr] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [ph, setPh] = useState(false)
  const [abv, setAbv] = useState(false)
  const [classic, setClassic] = useState(false)

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    .then(response => {return response.json()})
    .then(jsonObject => {
        const beersObj = jsonObject;
        setBeersArr(beersObj)
    })
}, [])

  const filterByPH = () => {
    setPh(!ph)
  }

  const filterByABV = () => {
    setAbv(!abv)
  }
  const filterByClassic = () =>{
    setClassic(!classic);
  }

    const handleInput = event => {
      const inputValue = event.target.value.toLowerCase();
      setSearchTerm(inputValue)
  }

  const filterResults = beersArr.filter(result => {
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

    if(classic){
      beerHasMatched = beerHasMatched && result.first_brewed.slice(-4) < 2010;
    }
  
    return beerHasMatched;
  });


  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/BeerInfo/:beerId"
              element= {<BeerInfo beersArr={beersArr}/>}
            />

           
            <Route path="/"
                element= {<><BeerCardList beersArray={filterResults}/>
                        <div className='navbar'>
                         <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
                         <FilterList filterByABV={filterByABV} filterByPH={filterByPH} 
                         filterByClassic={filterByClassic}/>
                         </div></>
                          }
            />
          </Routes>
          {/* <h1>Beer Beer</h1>
          <Home className="home" /> */}

      </div>
      </Router>
    
  );
}
export default App;