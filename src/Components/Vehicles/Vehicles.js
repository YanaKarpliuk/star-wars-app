import axios from 'axios';
import { useState, useEffect } from 'react';
import VehicleItem from './VehicleItem';
import Loader from 'Components/Loader/Loader';

export default function Vehicles(props) {
  const [vehicleData, setVehicleData] = useState([]);
  const imgURL = 'https://starwars-visualguide.com/assets/img/vehicles/';

  useEffect(() => {
    props.setIsLoading(true);
    const pages = [1, 2, 3, 4]

    const promises = pages.map(page => {
      return axios.get(`https://swapi.dev/api/vehicles/?page=${page}`);
    })

    Promise.allSettled(promises)
      .then(responses => {
        const vehicles = responses.map(response => response.value.data.results);
        props.setIsLoading(false);
        setVehicleData(vehicles.flat())
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
        <VehicleItem vehicleData={vehicleData} getId={getId} imgURL={imgURL} />
      )}
    </div>
  );
}
