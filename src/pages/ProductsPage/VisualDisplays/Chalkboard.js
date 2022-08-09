import React from 'react';
import styles from './Chalkboard.module.css';

import chalkboard from '../../../assets/images/VisualBoards/chalkboard.jpg';

const Chalkboard = () => {
  return (
    <section className={styles.chalkboard_section}>
      <div className={styles.board_box}>
        <div className={styles.board_image_box}>
          <img src={chalkboard} alt="chalkboard" />
        </div>
        <div className={styles.board_description_box}>
          <div className={styles.description_title}>Chalkboard</div>
          <div className={styles.description_paragraph}>
            Chalkboards substrate construction consist of e3 porcelain on 1/2"
            particleboard with optional .005 or .015 moisture barrier backer,
            with standard satin clear anodized aluminum that include 2ea: C-4
            side trim, standard CR-4 blade tray with radius edges.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chalkboard;
