import noPicImg from '../../img/starwars-new.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function PlanetItem(props) {
  return (
    <div className="list">
      <Carousel
        centerMode={true}
        centerSlidePercentage="40"
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {props.planetData.map(planet => {
          return (
            <div className="list-item" key={planet.name}>
              <img
                src={
                  planet.url && `${props.imgURL + props.getId(planet.url)}.jpg`
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = noPicImg ;
                }}
              />

              <ul className="description">
                <li className="list-name">{planet.name}</li>
                <li>
                  <span className="list-category">Climate</span>:{' '}
                  {planet.climate}
                </li>
                <li>
                  <span className="list-category">Terrain</span>:{' '}
                  {planet.terrain}
                </li>
                <li>
                  <span className="list-category">Population</span>:{' '}
                  {planet.population}
                </li>
                <li>
                  <span className="list-category">Diameter</span>:{' '}
                  {planet.diameter} km
                </li>
              </ul>
            </div>
          );
        })}
      </Carousel>
      {/* <button onClick={props.onClick}>Load</button> */}
    </div>
  );
}
