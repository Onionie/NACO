import React from 'react';
import styles from './PatriciaPage.module.css';

// Images
import heroBg from '../../assets/images/Patricia/abstract_connection.jpg';

const PatriciaPage = () => {
  return (
    <div className={styles.patricia}>
      <div className={styles.patricia_hero}>
        <div className={styles.patricia_header}>Patricia</div>
        <div className={styles.patricia_subheader}>
          Escribano's Virtual Assistant
        </div>
      </div>
    </div>
  );
};

export default PatriciaPage;
