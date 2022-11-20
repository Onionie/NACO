import React from 'react';
import styles from './VerticalSliders.module.css';

// Components
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';

// Images
import vs1 from '../../../assets/images/VisualBoards/VerticalSlider/vertical_slider1.jpg';
import vs2 from '../../../assets/images/VisualBoards/VerticalSlider/vertical_slider2.jpg';
import c4trim from '../../../assets/images/VisualBoards/Markerboards/c4_trim.jpg';
import c18trim from '../../../assets/images/VisualBoards/Markerboards/c18_trim.jpg';
import mb from '../../../assets/images/VisualBoards/Finishes/mb.jpg';

const VerticalSliders = () => {
  const mainImages = [
    {
      id: 1,
      image: vs1,
      alt: 'vertical_slider1',
    },
    {
      id: 2,
      image: vs2,
      alt: 'vertical_slider2',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: mb,
      alt: 'available_mb',
    },
  ];

  return (
    <>
      <ProductSection>
        <HeroProduct mainImages={mainImages} indicators={false} controls={true}>
          <HeroBody
            title="Vertical Sliders"
            availImages={availImages}
            indicators={false}
            controls={false}
          >
            <li>
              Allows you to have multiple panels and help with rooms with
              limited space.
            </li>
            <li>
              Consist of e3 porcelain on 1/2" fiberboard with .015 moisture
              barrier backer.
            </li>
            <li> Add functionality to teaching and communication centers.</li>
            <li>
              Custom made to any dimension, configuration or specification.
            </li>
            <li>
              Combines an aluminum housing wall space with a selection of
              sliding markerboards, chalkboards and tackboards with optional
              fixed back panel.
            </li>
            <li>
              The custom designs maximize display space and increase writing
              surface.
            </li>
            <li>
              They are suited for new construction and renovation projects.
            </li>
          </HeroBody>
        </HeroProduct>
        <ProductInfo>
          {/* <PorcelainSection colors={colors} finishes={finishes} /> */}
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

          {/* 2 Trims */}
          <div className={styles.aluminum_trim_box} data-aos="slide-up">
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
        </ProductInfo>
      </ProductSection>
    </>
  );
};

export default VerticalSliders;
