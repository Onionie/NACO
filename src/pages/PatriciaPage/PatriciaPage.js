import React, { useEffect } from 'react';
import styles from './PatriciaPage.module.css';
import CommandItem from '../../components/PatriciaPage/CommandItem';
import { commands1, commands2, commands3 } from './commands.js';
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
        <Marquee gradient={false} pauseOnHover={true} speed={20}>
          {commands1.map((command) => (
            <CommandItem
              key={command.id}
              command={command.command}
              color={command.color}
            />
          ))}
        </Marquee>
        <Marquee direction="right" gradient={false} pauseOnHover={true}>
          {commands2.map((comm2) => (
            <CommandItem
              key={comm2.id}
              command={comm2.command}
              color={comm2.color}
            />
          ))}
        </Marquee>
        <Marquee gradient={false} pauseOnHover={true} speed={60}>
          {commands3.map((comm3) => (
            <CommandItem
              key={comm3.id}
              command={comm3.command}
              color={comm3.color}
            />
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default PatriciaPage;
