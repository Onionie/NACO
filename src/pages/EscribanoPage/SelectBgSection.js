import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './SelectBgSection.module.css';

import bg_1 from '../../assets/images/Escribano/background/bg_1.png';
import bg_2 from '../../assets/images/Escribano/background/bg_2.png';
import bg_3 from '../../assets/images/Escribano/background/bg_3.png';
import bg_4 from '../../assets/images/Escribano/background/bg_4.png';
import bg_5 from '../../assets/images/Escribano/background/bg_5.png';
import bg_6 from '../../assets/images/Escribano/background/bg_6.png';
import bg_7 from '../../assets/images/Escribano/background/bg_7.png';
import bg_8 from '../../assets/images/Escribano/background/bg_8.png';
import bg_9 from '../../assets/images/Escribano/background/bg_9.png';
import bg_10 from '../../assets/images/Escribano/background/bg_10.png';
import bg_11 from '../../assets/images/Escribano/background/bg_11.png';
import bg_12 from '../../assets/images/Escribano/background/bg_12.png';

const SelectBgSection = () => {
  return (
    <div className={styles.select_bg_section}>
      <div>
        <div className={styles.select_bg_title}>Meet The Butterfly Menu</div>
        <div className={styles.select_bg_description}>
          Our butterfly menu gives you access to all the tools you need to use
          Escribano and our displayed color pallet makes it easy to select the
          color pen you need.
        </div>
      </div>
      <div className={styles.butterfly_image_div}>
        <img src="" alt="escribano_butterfly_screen" />
      </div>
    </div>
  );
};

export default SelectBgSection;
