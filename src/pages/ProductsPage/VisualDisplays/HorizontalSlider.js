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
import Accessories from '../../../components/SpecificProduct/Accessories';
import PorcelainSection from '../../../components/SpecificProduct/PorcelainSection';

// Images
import horizontal_slider from '../../../assets/images/VisualBoards/HorizontalSlider/horizontal_slider.jpg';
import slider_tracks from '../../../assets/images/VisualBoards/HorizontalSlider/slider_tracks.jpg';
import sliding_markerboard from '../../../assets/images/VisualBoards/HorizontalSlider/sliding_markerboard.jpg';
// import wbWhite from '../../../assets/images/VisualBoards/Finishes/color_mb_white.jpg';
// import wbLightgrey from '../../../assets/images/VisualBoards/Finishes/color_mb_lightgrey.jpg';
// import wbBeige from '../../../assets/images/VisualBoards/Finishes/color_mb_beige.jpg';
import mb from '../../../assets/images/VisualBoards/Finishes/mb.jpg';

const HorizontalSlider = () => {
  const mainImages = [
    {
      id: 1,
      image: horizontal_slider,
      alt: 'horizontal_slider1',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: mb,
      alt: 'available_mb',
    },
  ];

  // const colors = [
  //   {
  //     id: 1,
  //     imgSrc: wbWhite,
  //     title: 'White',
  //   },
  //   {
  //     id: 2,
  //     imgSrc: wbLightgrey,
  //     title: 'Light Gray',
  //   },
  //   {
  //     id: 3,
  //     imgSrc: wbBeige,
  //     title: 'Beige',
  //   },
  // ];

  // const finishes = [
  //   {
  //     id: 1,
  //     text: 'Ultra Gloss (EMEA/APAC)',
  //   },
  //   {
  //     id: 2,
  //     text: 'High Gloss (Americas)',
  //   },
  //   {
  //     id: 3,
  //     text: 'Satin Gloss (Americas)',
  //   },
  //   {
  //     id: 4,
  //     text: 'Low Gloss (EMEA/APAC)',
  //   },
  // ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Horizontal Sliders"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Consists of e3 porcelain on 1/2" fiberboard with .015 moisture
            barrier backer.
          </li>
          <li>
            2 7/8" x 1 9/16" aluminum housing with standard satin clear anodized
            aluminum.
          </li>
          <li>
            Includes C-4 perimeter trim, standard integrated blade tray with
            radius edges and optional 1" or 2" map-rail.
          </li>
          <li>
            Various insert options: natural cork, Forbo or vinyl covered natural
            cork insert at an additional cost.
          </li>
          <li>
            All aluminum is 6063-T5 alloy that comes in a satin standard clear
            anodized color.
          </li>
          <li>
            Call the office for a powder-coat optional an additional cost.
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
          <li>Custom Sizes Available</li>
        </AvailableSizes>
        <Accessories />
        <Joints />

        {/* Panels Section */}
        <div className={styles.panel_box} data-aos="slide-up">
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
      </ProductInfo>
    </ProductSection>
  );
};

export default HorizontalSlider;
