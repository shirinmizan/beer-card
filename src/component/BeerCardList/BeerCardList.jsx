import React from "react";
import "./BeerCardList.scss";
import BeerCard from "../BeerCard/BeerCard";

const BeerCardList = (props) => {
  const { beersArr } = props;
  const beerListJSX = beersArr.map((beer) => (
    <BeerCard
      image={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}
      description={beer.description}
      key={beer.id}
    />
  ));
  //console.log(beerListJSX)
  return <div className="beer-list">{beerListJSX}</div>;
};

export default BeerCardList;
