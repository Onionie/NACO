import React, { useEffect } from 'react';
import styles from './Partners.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const NACObody = () => {
  return (
    <section className={styles.vendors}>
      <div className={styles.partners_box}>
        <div className={styles.partners_title}>Our Partners</div>
        <div className={styles.partners_subtitle}>
          Nelson Adams Naco is proud to provide products to
        </div>
        <div className={styles.partners_logo_box}>
          <div className={styles.lausd}>
            <img
              className={styles.lausd_img}
              src="./images/clients/LAUSD.png"
              alt="lausd-logo"
            />
          </div>
          <div className={styles.garden_grove}>
            <img
              className={styles.garden_grove_img}
              src="./images/clients/gg.png"
              alt="lausd-logo"
            />
          </div>
          <div className={styles.ucr}>
            <img
              className={styles.ucr_img}
              src="./images/clients/UCR.png"
              alt="ucr-logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.vendors_box}>
        <div className={styles.partners_title}>Our Vendors</div>
        <div className={styles.partners_subtitle}>
          It is our pleasure to work with
        </div>
        <div className={styles.vendors_logo_box}>
          <div className={styles.forbo}>
            <img
              className={styles.forbo_img}
              src="./images/vendors/forbo.jpg"
              alt="forbo-logo"
            />
          </div>
          <div className={styles.guilford}>
            <img
              className={styles.guilford_img}
              src="./images/vendors/guilfordmane.JPG"
              alt="guilford-logo"
            />
          </div>
          <div className={styles.guilford}>
            <img
              className={styles.guilford_img}
              src="./images/vendors/koroseal.JPG"
              alt="guilford-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NACObody;
