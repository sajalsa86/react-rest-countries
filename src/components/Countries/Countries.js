import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1 style={{ color: 'orange' }}>Welcome to Rest Countries: {countries.length}</h1>
            <p style={{ color: 'blue' }}>Sajal Hossain</p>
            <div className='countries'>
                {countries.map(country => (
                    <Country key={country.name.common} country={country}></Country>
                ))}
            </div >
        </div>
    );
};

export default Countries;


