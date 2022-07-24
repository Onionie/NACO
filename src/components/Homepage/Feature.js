import React from 'react';
import TwoGrid from './TwoGrid';
import FeatureSlides from './FeatureSlides';
import FeatureBody from './FeatureBody';
import styles from './Feature.module.css';

const Feature = () => {
  return (
    <section className={styles.section}>
      <TwoGrid>
        <FeatureBody />
        <FeatureSlides />
      </TwoGrid>
    </section>
  );
};

export default Feature;
