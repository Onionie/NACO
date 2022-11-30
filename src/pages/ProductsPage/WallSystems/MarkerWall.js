import React from 'react';
import styles from './MarkerWall.module.css';

// Components
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

// Images
import mw_1 from '../../../assets/images/TackwallSystems/MarkerWall/mw_1.png';
import mw_2 from '../../../assets/images/TackwallSystems/MarkerWall/mw_2.png';
import mw_3 from '../../../assets/images/TackwallSystems/MarkerWall/mw_3.png';
import mw_4 from '../../../assets/images/TackwallSystems/MarkerWall/mw_4.png';
import mw_colors from '../../../assets/images/TackwallSystems/MarkerWall/mw_colors.PNG';
import mw_details from '../../../assets/images/TackwallSystems/MarkerWall/mw_details.png';

const MarkerWall = () => {
  const mainImages = [
    {
      id: 1,
      image: mw_1,
      alt: 'marker_wall',
    },
    {
      id: 2,
      image: mw_2,
      alt: 'marker_wall',
    },
    {
      id: 3,
      image: mw_3,
      alt: 'marker_wall',
    },
    {
      id: 4,
      image: mw_4,
      alt: 'marker_wall',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: mw_colors,
      alt: 'availbale_colors',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Marker Wall"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Made up of polyvision porcelain panels in standard 4'0" increments.
          </li>
          <li>
            Cover a wall completely, from floor to ceiling, with up to 16'0" of
            height.
          </li>
          <li>Highly Durable, concealed joints and easy to clean.</li>
          <li>Colorfast will not fade.</li>
          <li>Scratch, bacteria, chemical, and fire resistant.</li>
          <li>No made-to-order components.</li>
          <li>Smooth, inert surface.</li>
          <li>Sophisticated aesthetic.</li>
          <li>Framed and frameless options available.</li>
          <li>Vertical and horizontal options.</li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <div
          className={styles.mw_details}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div>
            <img src={mw_details} alt="marker_wall_details" />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default MarkerWall;
