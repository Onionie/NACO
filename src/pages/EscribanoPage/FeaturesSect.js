import React from 'react';
import styles from './FeaturesSect.module.css';
import { features } from './MapItems';

const FeaturesSect = () => {
  return (
    <div
      className={styles.feature_box}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div className={styles.feature_items}>
        {features.map((feat) => (
          <div key={feat.id} className={styles.feature_item}>
            <div className={styles.feature_icon}>
              <img src={feat.image} alt="feature_icon" />
            </div>
            <div className={styles.feature_title}>{feat.title}</div>
            <p className={styles.feature_description}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSect;
