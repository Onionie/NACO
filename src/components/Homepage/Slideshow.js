import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import escribanoWalk from '../../assets/images/homepage/escribano_walk1.jpg';
import escribano from '../../assets/images/homepage/escribano.png';
import visual from '../../assets/images/homepage/visualdisplay.jpg';
import table from '../../assets/images/homepage/tables.jpg';
import tackwall from '../../assets/images/homepage/tackwall.jpg';

import styles from './Slideshow.module.css';

const Slideshow = () => {
  const pictures = [escribanoWalk, escribano, visual, table, tackwall];

  useEffect(() => {
    //preloading image
    pictures.forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
    });
  });

  const [bgImage, setbgImage] = useState(escribanoWalk);

  const changeToEscribano = () => {
    setbgImage(escribano);
  };

  const changeToVisualDisplay = () => {
    setbgImage(visual);
  };

  const changeToTables = () => {
    setbgImage(table);
  };

  const changeToTackwall = () => {
    setbgImage(tackwall);
  };

  const changeBackToDefault = () => {
    setbgImage(escribanoWalk);
  };

  return (
    <div className={styles.hero_section}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className={styles.product_titles_box}>
        <div className={styles.products_title_line1}>
          <Link to="/escribano">
            <div
              className={`${styles.btn} ${styles.btn_escribano}`}
              onMouseEnter={changeToEscribano}
              onMouseLeave={changeBackToDefault}
            >
              | Escribano |
            </div>
          </Link>
          <Link to="/visual">
            <div
              className={`${styles.btn} ${styles.btn_visual}`}
              onMouseEnter={changeToVisualDisplay}
              onMouseLeave={changeBackToDefault}
            >
              &nbsp;Visual Displays |
            </div>
          </Link>
        </div>
        <div className={styles.products_title_line2}>
          <Link to="/tables&benches">
            <div
              className={`${styles.btn} ${styles.btn_tables}`}
              onMouseEnter={changeToTables}
              onMouseLeave={changeBackToDefault}
            >
              | Tables & Benches&nbsp;
            </div>
          </Link>
          <Link to="/tackwall">
            <div
              className={`${styles.btn} ${styles.btn_tackwall}`}
              onMouseEnter={changeToTackwall}
              onMouseLeave={changeBackToDefault}
            >
              | Tackwall |
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
