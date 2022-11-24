
import React from "react"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import countries from '../countries.json'

function CountriesList() {
    const [country, setCountry] = useState(countries)

    return (



        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">

                {country.map((countryList) => {
                    return (
                        <Link
                            key={countryList.alpha3Code}
                            className="list-group-item list-group-item-action"
                            to={countryList.alpha3Code}
                        >
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryList.alpha2Code.toLowerCase()}.png`} style={{ width: '15px' }} alt="" />{' '}
                            {countryList.name.common}
                        </Link>)
                })}

            </div>
        </div>


    )
}

export default CountriesList;