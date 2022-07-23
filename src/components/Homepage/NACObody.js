import React from 'react';
import styles from './NACObody.module.css';

const NACObody = () => {
  return (
    <section className={styles.NACO}>
      <div className={styles.logo}>
        <img src="./images/company_logo_big.webp" alt="company-logo" />
      </div>
      <div className={styles.description}>
        <p>
          At Nelson Adams NACO we take pride in our work and we continue a
          tradition that started in 1953. Since then we reinvented our
          processes, quality and the day to day operation but culture and family
          values stayed the same.
        </p>
      </div>
    </section>
  );
};

export default NACObody;
