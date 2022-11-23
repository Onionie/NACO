import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderContent = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

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
  // const small = window.matchMedia('(max-width: 102.5em)');

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: numOfSlide,
    swipe: true,

    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (curent, next) => setImageIndex(next),
  };

  return (
    <section className="slider">
      <div className="slider_title">{props.header}</div>
      <div className="item">
        <Slider {...settings}>
          {props.products.map((prod, idx) => {
            return (
              <div
                key={prod.id}
                className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
              >
                <img
                  src={prod.imageSrc}
                  alt={prod.product}
                  onClick={showModalHandler}
                />
                <div className="link_box">
                  <Link to={`/${prod.category}/${prod.item}`}>
                    <div className="slide_title_box">
                      <div className="slide_title">{prod.product}</div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderContent;
