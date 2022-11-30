import React from 'react';
import styles from './DetailsAndLights.module.css';

import hdc_led from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_led.png';

const DetailsAndLight = (props) => {
  return (
    <div className={styles.dc_detail_box}>
      <div data-aos="fade-up" data-aos-delay="500">
        <div className={styles.dc_detail_title}>{props.dc_title}</div>
        <img src={props.dc_image} alt="display_case_details" />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <div className={styles.dc_detail_title}>Available LED Lights</div>
        <img src={hdc_led} alt="display_case_led_lights" />
      </div>
    </div>
  );
};

export default DetailsAndLight;
