import React from 'react';
import styles from './FeatureBody.module.css';

const FeatureBody = (props) => {
  return (
    <div className={styles.feature_box}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.feat_description}>
        <p>{props.description}</p>
      </div>
      {props.children}
    </div>
  );
};

export default FeatureBody;
