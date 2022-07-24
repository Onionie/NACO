import React from 'react';
import TwoGrid from './TwoGrid';
import FeatureSlides from './FeatureSlides';
import FeatureBody from './FeatureBody';
import styles from './Feature.module.css';

const Feature = () => {
  return (
    <section className={styles.section}>
      <TwoGrid>
        <FeatureSlides />
        <FeatureBody
          title="Visual Display Boards"
          description="Nelson Adams Naco is a leading company with competetitive pricing."
        />
      </TwoGrid>
      <TwoGrid>
        <FeatureBody
          title="Tables and Benches"
          description="Our Tables and Benches are our leading products with competetitive pricing."
        />
        <FeatureSlides />
      </TwoGrid>
      <TwoGrid>
        <FeatureSlides />
        <FeatureBody
          title="Our Vendors"
          description="Nelson Adams Naco is proud to be partners with Koroseal, Forbo, parlumber, Guilford mane."
        />
      </TwoGrid>
    </section>
  );
};

export default Feature;
