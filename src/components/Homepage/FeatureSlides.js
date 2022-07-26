import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import styles from './FeatureSlides.module.css';

const FeatureSlides = (props) => {
  return (
    <Carousel fade className={styles.slideshow_box}>
      <Carousel.Item className={styles.item}>
        <img src={props.image1} alt={props.alt1} />
        {/* <Carousel.Caption className={`${styles.caption} ${styles.caption5}`}>
          <h1 className={styles.caption_title}>Display Cases</h1>
          <h3>A Description About Display Cases</h3>
          <Link to="/display">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className={styles.item}>
        <img src={props.image2} alt={props.alt2} />
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img src={props.image3} alt={props.alt3} />
      </Carousel.Item>
    </Carousel>
  );
};

export default FeatureSlides;
