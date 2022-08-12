import React from 'react';
import styles from './PorcelainSection.module.css';

import porcelainWhite from '../../assets/images/VisualBoards/Markerboards/porcelain_white.jpg';
import porcelainSilver from '../../assets/images/VisualBoards/Markerboards/porcelain_silver.jpg';
import porcelainBlack from '../../assets/images/VisualBoards/Markerboards/porcelain_black.jpg';

const PorcelainSection = () => {
  return (
    <div>
      <div className={styles.customize_options_title}>Porcelain Finishes</div>
      <div className={styles.customize_porcelain_options}>
        <div className={styles.customize_porcelain_image}>
          <img src={porcelainWhite} alt="porcelain_white" />
        </div>
        <div className={styles.customize_porcelain_image}>
          <img src={porcelainSilver} alt="porcelain_silver" />
        </div>
        <div className={styles.customize_porcelain_image}>
          <img src={porcelainBlack} alt="porcelain_black" />
        </div>
      </div>
    </div>
  );
};

export default PorcelainSection;
