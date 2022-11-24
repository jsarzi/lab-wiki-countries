import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import NavBar from './components/Navbar'
import './App.css';
import { Routes, Route } from "react-router-dom";
import countries from './countries.json'
import { useState } from 'react';



function App() {
  const [country, setCountry] = useState(countries)

  return (


    <div className="App">
      <NavBar />


      <div className="container">

        <div className="row">
          <CountriesList />

          <Routes>
            <Route path="/:id" element={<CountryDetails country={country} />} />

          </Routes>



        </div>
      </div>



    </div>
  );
}

export default App;
