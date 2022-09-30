import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './SelectBgSection.module.css';

import { background } from './MapItems';

const SelectBgSection = () => {
  return (
    <div className={styles.select_bg_section}>
      <Carousel
        className="background_carousel"
        indicators={true}
        controls={true}
        variant="light"
      >
        {background.map((bg) => (
          <Carousel.Item key={bg.id}>
            <img className="d-block w-100" src={bg.image} alt={bg.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <div className={styles.select_bg_title}>
          Pick A Background for Every Subject!
        </div>
        <div className={styles.select_bg_description}>
          Escribano is an interactive whiteboard and so much more. You can
          select from our 14 different backgrounds to start your lesson.
          Escribano has a background selection for every class like math, music
          and even sports!
        </div>
      </div>
    </div>
  );
};

export default SelectBgSection;
