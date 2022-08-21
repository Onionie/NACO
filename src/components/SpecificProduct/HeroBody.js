import React from 'react';
import styles from './HeroBody.module.css';
import ModalAvail from './ModalAvail';

const HeroBody = (props) => {
  return (
    <div className={styles.markerboard_body_box}>
      <div className={styles.markerboard_body_title}>{props.title}</div>
      <div className={styles.markerboard_body_description}>
        <ul>{props.children}</ul>
      </div>
      <ModalAvail
        indicators={props.indicators}
        controls={props.controls}
        availImages={props.availImages}
      ></ModalAvail>
    </div>
  );
};

export default HeroBody;
