import React from 'react';
import styles from './Partners.module.css';

// Images
import lausd from '../../assets/images/Vendors/LAUSD.png';
import gg from '../../assets/images/Vendors/gg.png';
import ucr from '../../assets/images/Vendors/UCR.png';
import forbo from '../../assets/images/Vendors/forbo.jpg';
import guilford from '../../assets/images/Vendors/guilfordmane.JPG';
import koroseal from '../../assets/images/Vendors/koroseal.JPG';

const NACObody = () => {
  return (
    <section className={styles.vendors}>
      <div className={styles.partners_box}>
        <div
          className={styles.partners_title}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Partners
        </div>
        <div
          className={styles.partners_subtitle}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Nelson Adams Naco is proud to provide products to
        </div>
        <div className={styles.partners_logo_box}>
          <div className={styles.lausd} data-aos="fade-up" data-aos-delay="400">
            <img className={styles.lausd_img} src={lausd} alt="lausd-logo" />
          </div>
          <div
            className={styles.garden_grove}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              className={styles.garden_grove_img}
              src={gg}
              alt="garden-grove-logo"
            />
          </div>
          <div className={styles.ucr} data-aos="fade-up" data-aos-delay="800">
            <img className={styles.ucr_img} src={ucr} alt="ucr-logo" />
          </div>
        </div>
      </div>
      <div className={styles.vendors_box}>
        <div
          className={styles.partners_title}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Vendors
        </div>
        <div
          className={styles.partners_subtitle}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          It is our pleasure to work with
        </div>
        <div className={styles.vendors_logo_box}>
          <div className={styles.forbo} data-aos="fade-up" data-aos-delay="400">
            <img className={styles.forbo_img} src={forbo} alt="forbo-logo" />
          </div>
          <div
            className={styles.guilford}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              className={styles.guilford_img}
              src={guilford}
              alt="guilford-logo"
            />
          </div>
          <div
            className={styles.guilford}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              className={styles.guilford_img}
              src={koroseal}
              alt="koroseal-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NACObody;
