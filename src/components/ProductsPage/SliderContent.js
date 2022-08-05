import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

// images
// import chalkboard from '../../assets/images/VisualBoards/chalkboard.jpg';
// import bulletinBoard from '../../assets/images/VisualBoards/enclosedBulletinBoard.jpg';
// import fTackBoard from '../../assets/images/VisualBoards/forboBlueTackBoard.jpg';
// import hingeDoor from '../../assets/images/VisualBoards/hingedDoorDisplay.jpg';
// import markerBoard from '../../assets/images/VisualBoards/markerBoardHorizontal.jpg';
// import mb from '../../assets/images/VisualBoards/MB.jpg';
// import mobileMb from '../../assets/images/VisualBoards/mobileMb.jpg';
// import tackBoard from '../../assets/images/VisualBoards/tackboard.jpg';
// import vertical from '../../assets/images/VisualBoards/verticalSliders.jpg';

const SliderContent = (props) => {
  // const Images = [
  //   chalkboard,
  //   bulletinBoard,
  //   fTackBoard,
  //   hingeDoor,
  //   markerBoard,
  //   mb,
  //   mobileMb,
  //   tackBoard,
  //   vertical,
  // ];
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
  console.log(small);

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
    <section className="slider">
      <div className="slider_title">{props.header}</div>
      <div className="item">
        <Slider {...settings}>
          {props.images.map((img, idx) => {
            return (
              <div
                className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
              >
                <img src={img.imageSrc} alt={img.imageSrc} />
                <div className="slide_title_box">
                  <div className="slide_title">{img.product}</div>
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
