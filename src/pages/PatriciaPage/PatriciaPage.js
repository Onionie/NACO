import React, { useEffect } from 'react';
import styles from './PatriciaPage.module.css';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const PatriciaPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: 'true' }, []);
  });

  return (
    <div className={styles.patricia}>
      <div className={styles.patricia_hero}>
        <div
          className={styles.patricia_header}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Patricia
        </div>
        <div
          className={styles.patricia_subheader}
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          Escribano's Virtual Assistant
        </div>
      </div>
    </div>
  );
};

export default PatriciaPage;
