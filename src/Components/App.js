import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from 'Logo/Logo';
import Title from './Title/Title';
import Planets from './Planets/Planets';
import Species from './Species/Species';
import Vehicles from './Vehicles/Vehicles';
import Starships from './Starships/Starships';

export default function App() {
  const [planetName, setPlanetName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/').then(response => {
      setPlanetName(response.data.results);
    });
  }, []);

  return (
    <div className="app">
      <Logo />
      <Title planetTitle="Planets" />
      <Planets setIsLoading={setIsLoading} isLoading={isLoading} />
      <Title planetTitle="Species" />
      <Species
        planetName={planetName}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <Title planetTitle="Vehicles" />
      <Vehicles setIsLoading={setIsLoading} isLoading={isLoading} />
      <Title planetTitle="Starships" />
      <Starships setIsLoading={setIsLoading} isLoading={isLoading} />
    </div>
  );
}
