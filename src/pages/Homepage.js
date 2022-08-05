import React, { useEffect } from 'react';
import Slideshow from '../components/Homepage/Slideshow';
import Partners from '../components/Homepage/Partners';
import Feature from '../components/Homepage/Feature';
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
      <Partners />
    </div>
  );
};

export default Homepage;
