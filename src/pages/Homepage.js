import React from 'react';
import Header from '../components/Homepage/Header';
import Slideshow from '../components/Homepage/Slideshow';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.top}>
        <Header />
        <Slideshow />
      </div>
      <div className={styles.bottom}>
        <Header />
      </div>
    </div>
  );
};

export default Homepage;
