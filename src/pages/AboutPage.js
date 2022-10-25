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
        <div className={styles.mission_body}>
          <div className={styles.mission_header}>
            At Nelson Adams NACO we have taken our products to the next level
            making them more{' '}
            <span className={styles.environment_tag}>
              environmentally friendly
            </span>
            , functional, easy, extraordinary, and the best way to optimize your
            space.
          </div>
          <div className={styles.mission_subheader}>
            We take pride in our work and we continue a tradition that started
            in 1953. Since then we reinvented our processes, quality and the day
            to day operation but culture and family values stayed the same.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
