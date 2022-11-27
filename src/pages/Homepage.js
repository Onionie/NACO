import React, { useEffect } from 'react';
import Slideshow from '../components/Homepage/Slideshow';
import Partners from '../components/Homepage/Partners';
// import Feature from '../components/Homepage/Feature';
import styles from './Homepage.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: 'true' });
  }, []);

  return (
    <div className={styles.homepage}>
      <Slideshow />
      {/* <div data-aos="fade-down"> */}
      {/* </div> */}
      {/* <Feature /> */}
      <Partners />
    </div>
  );
};

export default Homepage;
