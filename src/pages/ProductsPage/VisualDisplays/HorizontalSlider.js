import React from 'react';
import styles from './HorizontalSlider.module.css';

// Components
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import OptionsRow from '../../../components/SpecificProduct/OptionsRow';
import Joints from '../../../components/SpecificProduct/Joints';
import PorcelainSection from '../../../components/SpecificProduct/PorcelainSection';

// Images
import horizontal_slider from '../../../assets/images/VisualBoards/HorizontalSlider/horizontal_slider.jpg';
import slider_tracks from '../../../assets/images/VisualBoards/HorizontalSlider/slider_tracks.jpg';
import sliding_markerboard from '../../../assets/images/VisualBoards/HorizontalSlider/sliding_markerboard.jpg';
import flagholder from '../../../assets/images/VisualBoards/Markerboards/flag_holder.jpg';
import rollerbracket from '../../../assets/images/VisualBoards/Markerboards/roller_bracket.jpg';
import maphook from '../../../assets/images/VisualBoards/Markerboards/map_hook.jpg';

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
          <li>Custom Sizes Available</li>
        </AvailableSizes>
        <div className={styles.panel_box}>
          <div className={styles.sliding_marker_box}>
            <div className={styles.sliding_marker_title}></div>
            <div className={styles.sliding_marker_image_box}>
              <div className={styles.sliding_marker_title}>
                Sliding Markerboard
              </div>
              <div className={styles.sliding_marker_subtitle}>
                (Available with no back panel)
              </div>
              <img src={sliding_markerboard} alt="sliding_markerboard" />
            </div>
          </div>

          <div className={styles.panel_configuration_box}>
            <div className={styles.panel_configuration_title}>
              Panel Configurations
            </div>
            <div>
              <img src={slider_tracks} alt="sliding_tracks" />
            </div>
          </div>
        </div>
        <OptionsRow />
        <div className={styles.accessories_box}>
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
        <Joints />
        <PorcelainSection />
      </ProductInfo>
    </ProductSection>
  );
};

export default HorizontalSlider;
