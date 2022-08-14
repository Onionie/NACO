import React from 'react';
import styles from './OptionsRow.module.css';

import standard from '../../assets/images/VisualBoards/Markerboards/standard.jpg';
import box from '../../assets/images/VisualBoards/Markerboards/box.jpg';
import maprail from '../../assets/images/VisualBoards/Markerboards/maprail.jpg';
import maprail2 from '../../assets/images/VisualBoards/Markerboards/maprail_2.jpg';
import c4trim from '../../assets/images/VisualBoards/Markerboards/c4_trim.jpg';
import c18trim from '../../assets/images/VisualBoards/Markerboards/c18_trim.jpg';

const OptionsRow = () => {
  return (
    <div data-aos="fade-up" className={styles.customize_box}>
      <div className={styles.customize_options}>
        <div className={styles.customize_options_title}>Tray Options</div>
        <div className={styles.customize_images}>
          <div>
            <img src={standard} alt="standard_tray" />
            <div>Standard</div>
          </div>
          <div>
            <img src={box} alt="box_tray" />
            <div>box</div>
          </div>
        </div>
      </div>
      <div className={styles.customize_options}>
        <div className={styles.customize_options_title}>Map Rail</div>
        <div className={styles.customize_images}>
          <div>
            <img src={maprail} alt="maprail" />
            <div>1" Maprail</div>
          </div>
          <div>
            <img src={maprail2} alt="maprail" />
            <div>2" Maprail</div>
          </div>
        </div>
      </div>
      <div className={styles.customize_options}>
        <div className={styles.customize_options_title}>Aluminum Trim</div>
        <div className={styles.customize_images}>
          <div>
            <img src={c4trim} alt="c4_trim" />
            <div>c4-Aluminum Trim</div>
          </div>
          <div>
            <img src={c18trim} alt="c18_trim" />
            <div>c18-Aluminum Trim</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsRow;
