import React from 'react';
import styles from './NaturalCork.module.css';

import naturalCork from '../../assets/images/VisualBoards/Tackboard/natural_cork.png';

const NaturalCork = () => {
  return (
    <div className={styles.natural_cork_box} data-aos="slide-up">
      <div className={styles.natural_cork_title}>Natural Cork</div>
      <div className={styles.natural_cork}>
        <div className={styles.natural_cork_description}>
          Natural Cork is compressed wood of premium quality, pure grain,
          natural cork. It is a cost efficient, self-healing tackboard material
          that will remain pliable indefinitely. Its smooth, resilient surface
          allows push-pins, tacks, or staples to be easily inserted yet still
          hold firmly. Natural Cork 1/4" (.250) thick.
        </div>
        <div className={styles.natural_cork_image_box}>
          <img src={naturalCork} alt="natural_cork" />
        </div>
      </div>
    </div>
  );
};

export default NaturalCork;
