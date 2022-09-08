import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DisplayCasesPage.module.css';

import hdc from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_main.png';

const DisplayCasesPage = () => {
  return (
    <div className={styles.section_display}>
      <div className={styles.dc_box}>
        <div className={styles.dc_item}>
          <img src={hdc} alt="hinged_display_cases" />
          <Link
            to="/display-cases/hinged-display-cases"
            className={styles.dc_title}
          >
            Hinged Display Cases
          </Link>
        </div>

        {/* Item 2 */}
        <div className={styles.dc_item}>
          <img src={hdc} alt="hinged_display_cases" />
          <Link to="hinged-display-cases" className={styles.dc_title}>
            Hinged Display Cases
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCasesPage;
