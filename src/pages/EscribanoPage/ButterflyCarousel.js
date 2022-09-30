import React from 'react';
import { features } from './MapItems';
import Slider from 'react-slick';

const ButterflyCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: '50px',
  };

  return (
    <div>
      <Slider className="slider-items owl-carousel" {...settings}>
        {features.map((icon) => (
          <div key={icon.id}>
            <img src={icon.image} alt="escribano_icon" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ButterflyCarousel;
