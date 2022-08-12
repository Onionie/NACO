import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HeroProduct.module.css';

const HeroProduct = (props) => {
  return (
    <div className={styles.markerboard_box}>
      <Carousel
        className={styles.markerboard_carousel}
        indicators={props.indicators}
        controls={props.controls}
      >
        {props.mainImages.map((main) => (
          <Carousel.Item key={main.id}>
            <img className="d-block w-100" src={main.image} alt={main.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.markerboard_body_box}>
        <div className={styles.markerboard_body_title}>Markerboards</div>
        <div className={styles.markerboard_body_description}>
          <ul>
            {props.children}
            {/* <li>Porcelain enamel steel writing surface with aluminum trim.</li>
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
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
