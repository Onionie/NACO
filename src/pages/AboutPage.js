import React from 'react';
import styles from './AboutPage.module.css';

import missionImg from '../assets/images/about_us_mission.png';

const AboutPage = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.mission_box}>
        <div className={styles.mission_image}>
          <img src={missionImg} alt="collage_image" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
