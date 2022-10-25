import "./BeerInfo.scss";
import { useParams } from 'react-router-dom'
import { Link } from  'react-router-dom';

const BeerInfo = (props) =>{

    const { beerId } = useParams();
    const { beersArr } = props;

    const beersArray = beersArr.filter(beer =>{
        return beer.id == beerId;
    })

    const beerOne = beersArray[0];

    return (
        <div className="beer-page">
            <Link to="/" className="back-home">HomePage</Link>

            <div className="beer-info">
                <img src={beerOne.image_url} className="beer-info__img" alt="beer" />

                <div className="beer-info__column">
                    <h2 className="beer-info__title">{beerOne.name}</h2>
                    <p><b>Brewed in:</b> {beerOne.first_brewed}</p>
                    <p><b>Yeast:</b> {beerOne.ingredients.yeast}</p>
                    <p className="beer-info__description"><em>{beerOne.description}</em></p>
                    <table className="beer-info__table" border="1" cellPadding="10">
                        <tbody>
                            <tr>
                                <td><b>PH</b></td>
                                <td><b>ABV</b></td>
                                <td><b>IBU</b></td>
                                <td><b>EBC</b></td>
                                <td><b>SRM</b></td>
                            </tr>
                            <tr>
                                <td>{beerOne.ph}</td>
                                <td>{beerOne.abv}</td>
                                <td>{beerOne.ibu}</td>
                                <td>{beerOne.ebc}</td>
                                <td>{beerOne.srm}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Food Pairing:</b> {beerOne.food_pairing}</p>
                    <p><b>Tips:</b> {beerOne.brewers_tips}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerInfo