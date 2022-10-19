import axios from 'axios';
import { useState, useEffect } from 'react';
import SpeciesItem from './SpeciesItem';
import Loader from 'Components/Loader/Loader';

export default function Species(props) {
  const [speciesData, setSpeciesData] = useState([]);
  const imgURL = 'https://starwars-visualguide.com/assets/img/species/';

  useEffect(() => {
    props.setIsLoading(true);
    const pages = [1, 2, 3, 4]

    const promises = pages.map(page => {
      return axios.get(`https://swapi.dev/api/species/?page=${page}`);
    })

    Promise.allSettled(promises)
      .then(responses => {
        const species = responses.map(response => response.value.data.results);
        props.setIsLoading(false);
        setSpeciesData(species.flat())
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
        <SpeciesItem
          speciesData={speciesData}
          getId={getId}
          imgURL={imgURL}
          planetName={props.planetName}
        />
      )}
    </div>
  );
}
