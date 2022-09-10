import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DisplayCasesPage.module.css';

import hdc from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_main.png';
import sdc from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_main.png';

const DisplayCasesPage = () => {
  return (
    <div className={styles.section_display}>
      <div className={styles.dc_box}>
        <div className={styles.dc_item}>
          <img src={hdc} alt="hinged_display_cases" />
          <Link
            to="/display-cases/hinged-display-case"
            className={styles.dc_title}
          >
            Hinged Display Case
          </Link>
        </div>

        {/* Item 2 */}
        <div className={styles.dc_item}>
          <img src={sdc} alt="sliding_display_cases" />
          <Link
            to="/display-cases/sliding-display-case"
            className={styles.dc_title}
          >
            Sliding Display Case
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCasesPage;
