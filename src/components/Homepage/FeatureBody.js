import React from 'react';
import styles from './FeatureBody.module.css';

const FeatureBody = (props) => {
  return (
    <div className={styles.feature_box}>
      <div className={styles.title}>Visual Display Boards</div>
      <div className={styles.feat_description}>
        <p>Nelson Adams Naco is a leading company with competitive pricing</p>
      </div>
    </div>
  );
};

export default FeatureBody;
