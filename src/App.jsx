import React from 'react'
import "./App.scss";
import BeerCard from './component/BeerCard/BeerCard';
import beers from './data/beers';


const App = () => {

  

  return (
    <div>
      <BeerCard imageArr={beers}/>
    </div>
  )
}

export default App