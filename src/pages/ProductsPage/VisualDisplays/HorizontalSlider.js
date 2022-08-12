import React from 'react';
import styles from './HorizontalSlider.module.css';

// Components
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import PorcelainSection from '../../../components/SpecificProduct/PorcelainSection';

// Images
import horizontal_slider from '../../../assets/images/VisualBoards/HorizontalSlider/horizontal_slider.jpg';
import c4trim from '../../../assets/images/VisualBoards/Markerboards/c4_trim.jpg';
import c18trim from '../../../assets/images/VisualBoards/Markerboards/c18_trim.jpg';

const HorizontalSlider = () => {
  const title = 'Horizontal Sliders';

  const mainImages = [
    {
      id: 1,
      image: horizontal_slider,
      alt: 'horizontal_slider1',
    },
    // {
    //   id: 2,
    //   image: vs2,
    //   alt: 'vertical_slider2',
    // },
    // {
    //   id: 3,
    //   image: vs3,
    //   alt: 'vertical_slider3',
    // },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody title="Horizontal Sliders">
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
          <li>Needs Description</li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <AvailableSizes>
          <li>4' x 4'</li>
          <li>4' x 5'</li>
          <li>4' x 6'</li>
          <li>4' x 7'</li>
          <li>4' x 8'</li>
          <li>4' x 9'</li>
          <li>4' x 10'</li>
          <li>4' x 11'</li>
          <li>4' x 12'</li>
          <li>4' x 13'</li>
          <li>4' x 14'</li>
          <li>4' x 15'</li>
          <li>4' x 16'</li>
          <li>8' x 4'</li>
          <li>10' x 8'</li>
          <li>Custom Sizes Available</li>
        </AvailableSizes>
        <div className={styles.aluminum_trim_box}>
          <div className={styles.customize_options_title}>Aluminum Trim</div>
          <div className={styles.customize_images}>
            <div>
              <img src={c4trim} alt="c4_trim" />
              <div>c4-Aluminum Trim</div>
            </div>
            <div>
              <img src={c18trim} alt="c18_trim" />
              <div>c18-Aluminum Trim</div>
            </div>
          </div>
        </div>
        <PorcelainSection />
      </ProductInfo>
    </ProductSection>
  );
};

export default HorizontalSlider;
