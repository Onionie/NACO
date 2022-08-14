import React, { useEffect } from 'react';
import styles from './AvailableSizes.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const AvailableSizes = (props) => {
  useEffect(() => {
    Aos.init({ delay: 100, duration: 2000 });
  }, []);
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
