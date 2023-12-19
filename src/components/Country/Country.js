import React from 'react';
import './Country.css';
const Country = (props) => {
    const { flags, name, capital } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <h3>Capital Name: {capital}</h3>
        </div>
    );
};

export default Country;