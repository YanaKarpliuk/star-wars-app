import noPicImg from '../../img/starwars-new.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function starshipItem(props) {
  return (
    <div className="list">
      <Carousel
        centerMode={true}
        centerSlidePercentage="40"
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {props.starshipData.map(starship => {
          return (
            <div className="list-item" key={starship.name}>
              <img
                src={
                  starship.url &&
                  `${props.imgURL + props.getId(starship.url)}.jpg`
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = noPicImg ;
                }}
              />

              <ul className="description">
                <li className="list-name">{starship.name}</li>
                <li>
                  <span className="list-category">Model</span>: {starship.model}
                </li>
                <li>
                  <span className="list-category">Manufacturer</span>:{' '}
                  {starship.manufacturer}
                </li>
                <li>
                  <span className="list-category">Cost</span>:{' '}
                  {starship.cost_in_credits} credits
                </li>
              </ul>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
