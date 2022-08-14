import React, { useEffect } from 'react';
import styles from './Accessories.module.css';

import flagholder from '../../assets/images/VisualBoards/Markerboards/flag_holder.jpg';
import rollerbracket from '../../assets/images/VisualBoards/Markerboards/roller_bracket.jpg';
import maphook from '../../assets/images/VisualBoards/Markerboards/map_hook.jpg';

const Accessories = () => {
  return (
    <div className={styles.customize_accessories_box} data-aos="slide-up">
      <div className={styles.customize_accessories_title}>Accessories</div>
      <div className={styles.customize_accessories_options}>
        <div className={styles.customize_accessories_image}>
          <img src={flagholder} alt="flag_holder" />
          <div>Flag Holder</div>
        </div>
        <div className={styles.customize_accessories_image}>
          <img src={rollerbracket} alt="roller_bracket" />
          <div>Roller Bracket</div>
        </div>
        <div className={styles.customize_accessories_image}>
          <img src={maphook} alt="map_hook" />
          <div>Map Hook</div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
