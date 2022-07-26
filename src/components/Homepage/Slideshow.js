import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import styles from './Slideshow.module.css';
const Slideshow = () => {
  return (
    <Carousel fade className={styles.slideshow}>
      <Carousel.Item className={styles.item}>
        <img src="./images/main_slideshow/main_1.jpg" alt="First slide" />
        <Carousel.Caption className={`${styles.caption} ${styles.caption1}`}>
          <h1 className={styles.caption_title}>Escribano</h1>
          <h3>A Nelson Adams Product</h3>
          <h3>Reinvent education with modern technology</h3>
          <Link to="/escribano">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.item}>
        <img src="./images/main_slideshow/main_0.jpg" alt="First slide" />
        <Carousel.Caption className={`${styles.caption} ${styles.caption2}`}>
          <h1 className={styles.caption_title}>Visual Display Unit</h1>
          <h3>A Description About Visual Display Unit</h3>
          <Link to="/visual">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Tables and Benches */}
      <Carousel.Item className={styles.item}>
        <img src="./images/main_slideshow/main_2.jpg" alt="First slide" />
        <Carousel.Caption className={`${styles.caption} ${styles.caption3}`}>
          <h1 className={styles.caption_title}>Tables and Benches</h1>
          <h3>A Description About Tables and Benches</h3>
          <Link to="/tables">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Tackwall Panels */}
      <Carousel.Item className={styles.item}>
        <img src="./images/main_slideshow/main_4.jpg" alt="First slide" />
        <Carousel.Caption className={`${styles.caption} ${styles.caption4}`}>
          <h1 className={styles.caption_title}>Tackwall Panels</h1>
          <h3>A Description About Tackwall Panels</h3>
          <Link to="/tackwall">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Display Cases */}
      <Carousel.Item className={styles.item}>
        <img src="./images/main_slideshow/main_3.jpg" alt="First slide" />
        <Carousel.Caption className={`${styles.caption} ${styles.caption5}`}>
          <h1 className={styles.caption_title}>Display Cases</h1>
          <h3>A Description About Display Cases</h3>
          <Link to="/display">
            <button>Learn More</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

{
  /* <Carousel className={styles.slideshow}>
        <Carousel.Item className={styles.item}>
          <img
            className="d-block w-100"
            src="./images/main_slideshow/main_slideshow_0.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/main_slideshow/main_slideshow_1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/main_slideshow/main_slideshow_2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>*/
}

export default Slideshow;
