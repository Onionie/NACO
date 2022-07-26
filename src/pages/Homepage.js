import React from 'react';
import Slideshow from '../components/Homepage/Slideshow';
import NACObody from '../components/Homepage/NACObody';
import Feature from '../components/Homepage/Feature';
import Footer from '../components/Footer';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Slideshow />
      <NACObody />
      <Feature />
      <Footer />
    </div>
  );
};

export default Homepage;
