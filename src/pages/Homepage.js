import React, { useEffect } from 'react';
import HeroHover from '../components/Homepage/HeroHover';
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
      <HeroHover />
      <Partners />
    </div>
  );
};

export default Homepage;
