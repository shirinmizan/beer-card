import React from 'react';
import "./BeerCardList.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Link } from 'react-router-dom';

const BeerCardList = (props) => {
  const { beersArray } = props;

  const beerListJSX = beersArray.map(beer => {
      return (
          <Link to={`/beerinfo/${beer.id}`} key={beer.id}>
              <BeerCard key={beer.id} image={beer.image_url} name={beer.name} 
                        tagline={beer.tagline} description={beer.description}/>
          </Link>
      ) 
  })
//console.log(beerListJSX)
return (
    <>
    
    <div className="beer-list">{beerListJSX}</div>
    </>
)
};

export default BeerCardList;
