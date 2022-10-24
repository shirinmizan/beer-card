import React from 'react';
import './BeerCard.scss';

const BeerCard = (props) => {
  const { image, name, tagline, description } = props;
  return (
    <div className='beer-data'>
        <img 
            className="beer-data__image"
            src={image}
            alt={name}
            // style={{background-color: transparent}}
        />
        <h2 className="beer-data__name">{name}</h2>
        <div className="beer-data__tagline">{tagline}</div>
        <div className="beer-data__description">{description}</div>
    </div>
  );
};

export default BeerCard;