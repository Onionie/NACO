import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import styles from './Slideshow.module.css';

const Slideshow = () => {
  const [bgImage, setbgImage] = useState(
    './images/homepage/escribano_walk1.jpg'
  );
  // console.log(bgImage);

  // const backgroundImage = useRef(null);

  const changeToEscribano = () => {
    setbgImage('./images/homepage/escribano.png');
  };

  const changeToVisualDisplay = () => {
    setbgImage('./images/homepage/visualdisplay.jpg');
  };

  const changeToTables = () => {
    setbgImage('./images/homepage/tables.png');
  };

  const changeToTackwall = () => {
    setbgImage('./images/homepage/tackwall.png');
  };

  const changeBackToDefault = () => {
    setbgImage('./images/homepage/escribano_walk1.jpg');
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
          <div
            className={`${styles.btn} ${styles.btn_escribano}`}
            onMouseEnter={changeToEscribano}
            onMouseLeave={changeBackToDefault}
          >
            | Escribano |
          </div>
          <div
            className={`${styles.btn} ${styles.btn_visual}`}
            onMouseEnter={changeToVisualDisplay}
            onMouseLeave={changeBackToDefault}
          >
            &nbsp;Visual Displays |
          </div>
        </div>
        <div className={styles.products_title_line2}>
          <div className={`${styles.btn} ${styles.btn_tables}`}>
            | Tables & Benches&nbsp;
          </div>
          <div className={`${styles.btn} ${styles.btn_tackwall}`}>
            | Tackwall |
          </div>
        </div>
      </div>
    </div>
    // <Carousel fade className={styles.slideshow}>
    //   {/* Escribano */}
    //   <Carousel.Item className={styles.item}>
    //     <img src="./images/main_slideshow/escribano.jpg" alt="escribano-img" />
    //     <Carousel.Caption className={`${styles.caption} ${styles.caption1}`}>
    //       <div className={styles.caption_title}>Escribano</div>
    //       <div className={styles.subtitle}>A Nelson Adams Naco Product</div>
    //       <div className={styles.desc}>
    //         Reinvent education with modern technology
    //       </div>
    //       <Link to="/escribano">
    //         <button>Learn More</button>
    //       </Link>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   {/* Visual Display */}
    //   <Carousel.Item className={styles.item}>
    //     <img
    //       src="./images/main_slideshow/visualdisplay.jpg"
    //       alt="visual-board"
    //     />
    //     <Carousel.Caption className={`${styles.caption} ${styles.caption2}`}>
    //       <div className={styles.caption_title}>Visual Display Unit</div>

    //       <div className={styles.desc}>
    //         A description about Visual Display Unit
    //       </div>
    //       <Link to="/visual">
    //         <button>Learn More</button>
    //       </Link>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   {/* Tables and Benches */}
    //   <Carousel.Item className={styles.item}>
    //     <img
    //       src="./images/main_slideshow/tables.jpg"
    //       alt="tables-and-benches"
    //     />
    //     <Carousel.Caption className={`${styles.caption} ${styles.caption3}`}>
    //       <div className={styles.caption_title}>Tables and Benches</div>

    //       <div className={styles.desc}>
    //         A Description About Tables and Benches
    //       </div>

    //       <Link to="/tables">
    //         <button>Learn More</button>
    //       </Link>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   {/* Tackwall Panels */}
    //   <Carousel.Item className={styles.item}>
    //     <img src="./images/main_slideshow/main_4.jpg" alt="tackwall-panels" />
    //     <Carousel.Caption className={`${styles.caption} ${styles.caption4}`}>
    //       <div className={styles.caption_title}>Tackwall Panels</div>

    //       <div className={styles.desc}>A Description About Tackwall Panels</div>

    //       <Link to="/tackwall">
    //         <button>Learn More</button>
    //       </Link>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   {/* Display Cases */}
    //   <Carousel.Item className={styles.item}>
    //     <img
    //       src="./images/main_slideshow/displaycase.jpg"
    //       alt="display-cases"
    //     />
    //     <Carousel.Caption className={`${styles.caption} ${styles.caption5}`}>
    //       <div className={styles.caption_title}>Display Cases</div>

    //       <div className={styles.desc}>A Description About Display Cases</div>

    //       <Link to="/display">
    //         <button>Learn More</button>
    //       </Link>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default Slideshow;
