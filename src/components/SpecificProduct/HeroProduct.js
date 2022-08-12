import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HeroProduct.module.css';

const HeroProduct = (props) => {
  return (
    <div className={styles.markerboard_box}>
      <Carousel
        className={styles.markerboard_carousel}
        indicators={props.indicators}
        controls={props.controls}
        variant="dark"
      >
        {props.mainImages.map((main) => (
          <Carousel.Item key={main.id}>
            <img className="d-block w-100" src={main.image} alt={main.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      {props.children}
    </div>
  );
};

export default HeroProduct;
