import React from 'react';
import styles from './Markerboard.module.css';
import Carousel from 'react-bootstrap/Carousel';

import markerboard from '../../../assets/images/VisualBoards/MB.jpg';

const Markerboard = () => {
  return (
    <section className={styles.section_markerboard}>
      <div className={styles.markerboard_box}>
        <div className={styles.markerboard_image_box}>
          <img src={markerboard} alt="markerboard" />
          {/* <Carousel className={styles.markerboard_carousel} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chalkboard}
                alt="First slide"
              />
            </Carousel.Item> */}
          {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
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
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          {/* </Carousel> */}
        </div>
        <div className={styles.markerboard_body_box}>
          <div className={styles.markerboard_body_title}>Markerboards</div>
          <div className={styles.markerboard_body_description}>
            <ul>
              <li>
                Porcelain enamel steel writing surface with aluminum trim.
              </li>
              <li>
                1/2" particleboard with optional .005 or .015 moisture barrier
                backer.
              </li>
              <li>
                Standard satin clear anodized aluminum that include 2ea: C-4 or
                C-18 side trim, standard CR-4 blade tray with radius edges.
              </li>
              <li>
                Optional 1" or 2" map-rail with various insert options: natural
                cork, Forbo or vinyl covered natural cork insert at additional
                cost.
              </li>
              <li>
                All aluminum is 6063-T5 alloy that comes in satin standard clear
                anodized color.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className={styles.product_specifications}>
        <div className={styles.product_specifications_title}>
          Product Information
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Markerboard;
