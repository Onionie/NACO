import React, { useEffect } from 'react';
import styles from './AvailableSizes.module.css';

const AvailableSizes = (props) => {
  return (
    <div data-aos="fade-up" className={styles.markerboard_sizes_box}>
      <div className={styles.markerboard_sizes_title}>
        Sizes Available (HxW):
      </div>
      <ul className={styles.markerboard_sizes_list}>{props.children}</ul>
    </div>
  );
};

export default AvailableSizes;
