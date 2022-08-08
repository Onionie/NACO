import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderContent = (props) => {
  const numOfSlide = props.slidesNum;

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const small = window.matchMedia('(max-width: 102.5em)');

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: numOfSlide,

    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (curent, next) => setImageIndex(next),
  };

  return (
    <div className="slider">
      <div className="slider_title">{props.header}</div>
      <div className="item">
        <Slider {...settings}>
          {props.images.map((img, idx) => {
            return (
              <div
                key={img.id}
                className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
              >
                <img src={img.imageSrc} alt={img.product} />
                <div className="slide_title_box">
                  <div className="slide_title">{img.product}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderContent;
