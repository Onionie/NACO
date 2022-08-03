import React, { useEffect } from 'react';
import Slideshow from '../components/Homepage/Slideshow';
import NACObody from '../components/Homepage/NACObody';
import Feature from '../components/Homepage/Feature';
import Footer from '../components/Footer';
import styles from './Homepage.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  useEffect(() => {
    Aos.init({ delay: 50, duration: 1500 });
  }, []);

  return (
    <div className={styles.homepage}>
      <Slideshow />
      {/* <div data-aos="fade-down"> */}
      {/* <NACObody /> */}
      {/* </div> */}
      <Feature />
      <Footer />
    </div>
  );
};

export default Homepage;
