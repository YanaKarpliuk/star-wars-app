import axios from 'axios';
import { useState, useEffect } from 'react';
import PlanetItem from './PlanetItem';
import Loader from 'Components/Loader/Loader';

export default function Planets(props) {
  const [planetData, setPlanetData] = useState([]);
  const imgURL = 'https://starwars-visualguide.com/assets/img/planets/';

  useEffect(() => {
    props.setIsLoading(true);
    const pages = [1, 2, 3, 4, 5, 6]

    const promises = pages.map(page => {
      return axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    })

    Promise.allSettled(promises)
      .then(responses => {
        const planets = responses.map(response => response.value.data.results);
        props.setIsLoading(false);
        setPlanetData(planets.flat())
      })
  }, []);

  function getId(url) {
    return url.split('/')[url.split('/').length - 2];
  }


  return (
    <div>
      {props.isLoading ? (
        <Loader />
      ) : (
        <PlanetItem
          planetData={planetData}
          getId={getId}
          imgURL={imgURL}
        />
      )}
    </div>
  );
}
