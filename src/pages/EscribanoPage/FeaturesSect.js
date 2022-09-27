import React from 'react';
import styles from './FeaturesSect.module.css';
import { features } from './FeaturesMap';

import iconMm from '../../assets/images/Escribano/icons/megaMeetings.png';
import iconWww from '../../assets/images/Escribano/icons/www.png';
import iconVr from '../../assets/images/Escribano/icons/voiceRecognition.png';

const FeaturesSect = () => {
  return (
    <div className={styles.feature_box}>
      <div className={styles.feature_box_title}>Tools And Features</div>

      <div className={styles.feature_items}>
        {features.map((feat) => (
          <div className={styles.feature_item}>
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
