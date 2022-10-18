import "./BeerCard.scss";

const BeerCard =(props) =>{

    const { imageArr } = props;

    const beerList = imageArr.map((beer) =>{
        
        return (
            <>
            <img 
                key={beer.id}
                src={beer.image_url}
                alt={beer.name}
             />
            <p>{beer.tagline}</p>   
            </>
        )        

    });
   
    return (
        <div className="beer-list">
            {beerList}
        </div>
    )

};

export default BeerCard