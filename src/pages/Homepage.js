import React from 'react';
import Header from '../components/Homepage/Header';
import Slideshow from '../components/Homepage/Slideshow';
import NACObody from '../components/Homepage/NACObody';
import Feature from '../components/Homepage/Feature';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.top}>
        <Header />
        <Slideshow />
      </div>
      <NACObody />
      <Feature />
    </div>
  );
};

export default Homepage;
