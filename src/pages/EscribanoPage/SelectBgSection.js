import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './SelectBgSection.module.css';

import ButterflyCarousel from './ButterflyCarousel';
import { background } from './MapItems';

import virtualKeyboard from '../../assets/images/Escribano/esc_keyboard_screen.png';

const SelectBgSection = () => {
  return (
    <div>
      {/* Background */}
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
            Escribano has a background selection for every class like math,
            music and even sports!
          </div>
        </div>
      </div>

      {/*  Virtual Keyboard */}
      <div className={styles.virtual_keyboard_section}>
        <div>
          <div className={styles.virtual_keyboard_title}>Virtual Keyboard</div>
          <div className={styles.virtual_keyboard_description}>
            Escribano also has a keyboard button to access our virtual keyboard
            and a home button to access all of the integrated applications like
            Megameetings, internet browser, email, backgrounds, videos, clock,
            and calculator. Our home and keyboard buttons are movable, the
            teacher can drag the button down for easier access!
          </div>
        </div>
        <div className={styles.virtual_keyboard_image_div}>
          <img src={virtualKeyboard} alt="virtual_keyboard_screen" />
        </div>
      </div>
    </div>
  );
};

export default SelectBgSection;
