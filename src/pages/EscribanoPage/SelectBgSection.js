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
        <div className={styles.select_bg_title}>Meet The Butterfly Menu</div>
        <div className={styles.select_bg_description}>
          Our butterfly menu gives you access to all the tools you need to use
          Escribano and our displayed color pallet makes it easy to select the
          color pen you need.
        </div>
      </div>
    </div>
  );
};

export default SelectBgSection;
