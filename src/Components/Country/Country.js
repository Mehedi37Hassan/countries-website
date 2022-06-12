import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props.country);
    const { name, area, population, region, flags } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <div className='button'>
                <button className='btn'>Details</button>
            </div>
        </div>
    );
};

export default Country;