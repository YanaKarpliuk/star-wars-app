import axios from 'axios';
import { useState, useEffect } from 'react';
import StarshipItem from './StarshipItem';
import Loader from 'Components/Loader/Loader';

export default function Starships(props) {
  const [starshipData, setStarshipData] = useState([]);
  const imgURL = 'https://starwars-visualguide.com/assets/img/starships/';

  useEffect(() => {
    props.setIsLoading(true);
    const pages = [1, 2, 3, 4];

    const promises = pages.map(page => {
      return axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    });

    Promise.allSettled(promises).then(responses => {
      const planets = responses.map(response => response.value.data.results);
      props.setIsLoading(false);
      setStarshipData(planets.flat());
    });
  }, []);

  function getId(url) {
    return url.split('/')[url.split('/').length - 2];
  }

  return (
    <div>
      {props.isLoading ? (
        <Loader />
      ) : (
        <StarshipItem
          starshipData={starshipData}
          getId={getId}
          imgURL={imgURL}
        />
      )}
    </div>
  );
}
