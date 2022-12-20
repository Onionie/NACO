import React, { useEffect } from 'react';
import styles from './PatriciaPage.module.css';
import CommandItem from '../../components/PatriciaPage/CommandItem';
import Marquee from 'react-fast-marquee';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const PatriciaPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: 'true' }, []);
  });

  return (
    <div className={styles.patricia}>
      <section className={styles.patricia_hero}>
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
      </section>

      {/* Commands */}
      <section className={styles.commands}>
        <Marquee gradient={false} pauseOnHover={true}>
          <CommandItem command="Patricia, go to Sleep" />
          <CommandItem command="Patricia, turn off" />
          <CommandItem command="Patricia, shutdown" />
        </Marquee>
      </section>
    </div>
  );
};

export default PatriciaPage;
