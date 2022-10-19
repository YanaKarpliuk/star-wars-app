import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import noPicImg from '../../img/starwars.png';

export default function SpeciesItem(props) {
  return (
    <div className="list">
      <Carousel
        centerMode={true}
        centerSlidePercentage="40"
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {props.speciesData.map(being => {
          return (
            <div className="list-item" key={being.name}>
              <img
                className="noPicImg"
                src={
                  being.url && `${props.imgURL + props.getId(being.url)}.jpg`
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = noPicImg;
                }}
              />

              <ul className="description">
                <li className="list-name">{being.name}</li>
                <li>
                  <span className="list-category">Language</span>:{' '}
                  {being.language}
                </li>
                <li>
                  <span className="list-category">Classification</span>:{' '}
                  {being.classification}
                </li>
              </ul>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
