import React from 'react';
import './Slider.css';
import $ from 'jquery';

// images
import chalkboard from '../../assets/images/VisualBoards/chalkboard.jpg';
import bulletinBoard from '../../assets/images/VisualBoards/enclosedBulletinBoard.jpg';
import tackBoard from '../../assets/images/VisualBoards/forboBlueTackBoard.jpg';

const Slider = () => {
  $('.slide').hiSlide();
  return (
    <section className="slider">
      <div className="slide hi-slide">
        <div className="hi-prev"></div>
        <div className="hi-next"></div>

        <ul>
          <li>
            <img src={chalkboard} alt="chalkboard" />
            <img src={bulletinBoard} alt="bulletin-board" />
            <img src={tackBoard} alt="tackboard" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
