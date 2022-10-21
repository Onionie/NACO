import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './SelectBgSection.module.css';

import ButterflyCarousel from './ButterflyCarousel';
import { background } from './MapItems';

import virtualKeyboard from '../../assets/images/Escribano/esc_keyboard_screen2.png';

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
}

const SelectBgSection = () => {
  const [setRef, visible] = useOnScreen({ rootMargin: '-10px' });

  return (
    <div className={styles.keyboard_section}>
      {/* Background */}
      <div className={styles.select_bg_section}>
        <div
          className={styles.bg_image_div}
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <Carousel
            className="background_carousel"
            indicators={true}
            controls={true}
            variant="light"
          >
            {background.map((bg) => (
              <Carousel.Item key={bg.id}>
                <img className="d-block w-100" src={bg.image} alt={bg.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div data-aos="fade-left" data-aos-delay="1100">
          <div className={styles.sbg_title}>
            Pick A Background for Every Subject!
          </div>
          <div className={styles.select_bg_description}>
            Escribano is an interactive whiteboard and so much more. You can
            select from our 14 different backgrounds to start your lesson.
            Escribano has a background selection for every class like math,
            music and even sports!
          </div>
        </div>
      </div>

      {/*  Virtual Keyboard */}
      <div className={styles.virtual_keyboard_section}>
        <div data-aos="fade-right" data-aos-delay="1300">
          <div className={styles.sbg_title}>Dictation Mode</div>
          <div className={styles.virtual_keyboard_description}>
            Dictation Mode is a feature that allows the user to write using just
            their voice.
          </div>
        </div>
        <div
          ref={setRef}
          className={styles.bg_image_div}
          data-aos="fade-left"
          data-aos-delay="1500"
        >
          <img src={virtualKeyboard} alt="virtual_keyboard_screen" />

          {visible ? (
            <div className={styles.dict_text_box}>
              <div className={`${styles.dict_text} ${styles.dict_text_1}`}>
                Tell
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_2}`}>
                Escribano
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_3}`}>
                what
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_4}`}>
                to
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_5}`}>
                write.
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_6}`}>
                It's
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_7}`}>
                an
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_8}`}>
                amazing
              </div>
              <div className={`${styles.dict_text} ${styles.dict_text_9}`}>
                feature!
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectBgSection;
