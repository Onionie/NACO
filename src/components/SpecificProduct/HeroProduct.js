import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HeroProduct.css';
import Magnifier from 'react-magnifier';

const HeroProduct = (props) => {
  return (
    <section className="product_box">
      <Carousel
        className="product_carousel"
        indicators={props.indicators}
        controls={props.controls}
        variant="dark"
      >
        {props.mainImages.map((main) => (
          <Carousel.Item key={main.id}>
            {/* <Magnifier
              src={main.image}
              zoomFactor={1.2}
              mgShape={'square'}
              mgHeight={250}
              mgWidth={300}
            /> */}
            <img className="d-block w-100" src={main.image} alt={main.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      {props.children}
    </section>
  );
};

export default HeroProduct;
