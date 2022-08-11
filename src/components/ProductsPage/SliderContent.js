import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

// import chalkboard from '../../assets/images/VisualBoards/chalkboard.jpg';

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
    swipe: false,

    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (curent, next) => setImageIndex(next),
  };

  return (
    <div className="slider">
      <div className="slider_title">{props.header}</div>
      <div className="item">
        {/* <div className={showModal ? `overlay` : `hidden`}>
          <div className="modalz">
            <div className="modal_box">
              <div className="image_box">
                <img src={chalkboard} alt="chalkboard" />
              </div>

              <div className="description_box">
                <div className="description_title">Chalkboard</div>
                <div className="description_paragraph">
                  Chalkboards substrate construction consist of e3 porcelain on
                  1/2" particleboard with optional .005 or .015 moisture barrier
                  backer, with standard satin clear anodized aluminum that
                  include 2ea: C-4 side trim, standard CR-4 blade tray with
                  radius edges.
                </div>
                <div className="action_box">
                  <div onClick={showModalHandler}>OK</div>
                  <div>ARCHITECT CORNER</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
    </div>
  );
};

export default SliderContent;
