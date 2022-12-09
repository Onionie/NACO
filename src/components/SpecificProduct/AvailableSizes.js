import React from 'react';
import styles from './AvailableSizes.module.css';

const AvailableSizes = (props) => {
  return (
    <div className={styles.markerboard_sizes_box} data-aos="slide-up">
      <div className={styles.markerboard_sizes_title}>
        Sizes Available (HxW):
      </div>
      <ul className={styles.markerboard_sizes_list}>{props.children}</ul>
    </div>
  );
};

export default AvailableSizes;
