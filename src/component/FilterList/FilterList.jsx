import React from 'react'
import './FilterList.scss'

const FilterList = (props) => {
    const { filterByABV, filterByPH, filterByClassic} = props;

    return (
        <div className="filter-list">
            <div className='filter-list__filter'>
                <input 
                    onClick={filterByABV} 
                    type="checkbox"
                    id="abv"
                    name="abv"/>
                <label
                    htmlFor="abv">High Alcohol (ABV great than 6%)</label>

                <div className="filter-list__filter">
                    <input 
                        onClick={filterByPH}
                        type="checkbox"
                        id="ph"
                        name="ph"/>
                    <label htmlFor="ph">High Acidity (pH lower than 4)</label>
                </div>

                <div className="filter-list__filter">
                    <input 
                        onClick={filterByClassic}
                        type="checkbox"
                        id="classic"
                        name="classic"/>
                    <label htmlFor="classic">Classic Range</label>
                </div>
               
            </div> 


        </div>
    );
}

export default FilterList