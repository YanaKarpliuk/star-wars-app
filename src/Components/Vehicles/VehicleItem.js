import noPicImg from '../../img/starwars-new.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function VehicleItem(props) {
  return (
    <div className="list">
      <Carousel
        centerMode={true}
        centerSlidePercentage="40"
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {props.vehicleData.map(vehicle => {
          return (
            <div className="list-item" key={vehicle.name}>
              <img
                src={
                  vehicle.url &&
                  `${props.imgURL + props.getId(vehicle.url)}.jpg`
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = noPicImg ;
                }}
              />

              <ul className="description">
                <li className="list-name">{vehicle.name}</li>
                <li>
                  <span className="list-category">Model</span>: {vehicle.model}
                </li>
                <li>
                  <span className="list-category">Manufacturer</span>:{' '}
                  {vehicle.manufacturer}
                </li>
                <li>
                  <span className="list-category">Cost</span>:{' '}
                  {vehicle.cost_in_credits} credits
                </li>
              </ul>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
