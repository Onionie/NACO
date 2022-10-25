import React from 'react';
import styles from './AboutPage.module.css';

import missionImg from '../assets/images/about_us_mission.png';
import companyLogo from '../assets/images/company_logo_big.jpg';

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
      <div className={styles.history_box}>
        <div className={styles.history_img}>
          <img src={companyLogo} alt="company_logo" />
        </div>
        <div className={styles.history_body}>
          <div className={styles.history_title}>Our Company History</div>
          <p className={styles.history_description}>
            Our Company Nelson Adams was established in 1953 since has gone
            through multiple ownership changes in 1992 Nelson Adams was acquired
            by the Lawer family to be purchased 7 years later by the PolyVision
            Group in May 1999 and finally in 2012 Nelson Adams became a self
            owned corporation. We still continue with the same tradition
            providing high quality products and improving some of our designs.
            Nelson Adams has an in house powder coating shop and a tack wall
            panel shop with these additional shops we're able to streamline and
            reduce some of the lead times compared to some our competitors. In
            2017 Nelson Adams started with a clean sheet paper and we proceeded
            to streamline processes and cross-train new personnel in different
            areas to be able to identify their strengths. We have put together a
            team that has the knowledge and the know how to produce some of the
            best product in the industry. Since Nelson Adams was previously
            owned by PolyVision we emphasis on continuing the same traditions
            and family values. Our company has evolved and we're currently
            growing and doing business across the border and Europe. Expanding
            into new territories is nothing new to Nelson Adams and is slowly
            becoming a household name. At Nelson Adams our products meet the
            needs of today's multipurpose room functions, whether they be
            cafeteria rooms, classrooms, conference rooms or gyms. We have the
            product that best suits your needs, by providing industry leading
            seat design and customizable options, our tables provide maximum
            seating capacity with minimum storage space and our visual display
            board's selection provides a product with the highest quality in
            manufacturing today. Nelson Adams manufactures all table and bench
            parts and a numerous of other parts for some of our products that
            require precision engineering. We use the latest technology such as:
            laser cutters, CNC routers, precision benders, powder-coat conveyor
            system and lamination machines to increase productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
