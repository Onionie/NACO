import React from 'react';
import styles from './TeachingWall.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import OptionsRow from '../../../components/SpecificProduct/OptionsRow';
import Accessories from '../../../components/SpecificProduct/Accessories';

import tw1 from '../../../assets/images/VisualBoards/TeachingWalls/teachingwall1.jpg';
import tw2 from '../../../assets/images/VisualBoards/TeachingWalls/teachingwall2.jpg';
import cbNmb from '../../../assets/images/VisualBoards/Finishes/cbNmb.jpg';
import twFront from '../../../assets/images/VisualBoards/TeachingWalls/tw_details_front.png';
import twSide from '../../../assets/images/VisualBoards/TeachingWalls/tw_details_side2.png';
import slider_tracks from '../../../assets/images/VisualBoards/HorizontalSlider/slider_tracks.jpg';
import sliding_markerboard from '../../../assets/images/VisualBoards/HorizontalSlider/sliding_markerboard.jpg';

const TeachingWall = () => {
  const mainImages = [
    {
      id: 1,
      image: tw1,
      alt: 'teaching_wall1',
    },
    {
      id: 2,
      image: tw2,
      alt: 'teaching_wall2',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: cbNmb,
      alt: 'available_finishes',
    },
  ];

  return (
    <>
      <ProductSection>
        <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
          <HeroBody
            title="Teaching Walls"
            availImages={availImages}
            indicators={false}
            controls={false}
          >
            <li>
              Allows you to combine your cabinet casework with sliding boards.
            </li>
            <li>
              Instead of mounting sliding boards onto casework or walls, you can
              simplify them to create a more accessible combination.
            </li>
            <li>
              Comes in custom sizing and configurations where you can choose how
              it can accommodate your classroom setting.
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
            <div className={styles.additional_price}>
              *Additional Pricing for 3 or 4 Track/Panel
            </div>
          </AvailableSizes>

          <div className={styles.tw_details_box}>
            <div className={styles.tw_details_title}>Teaching Wall Details</div>
            <div className={styles.tw_details1}>
              <div>
                <img src={twFront} alt="teaching_wall_details_front" />
                <div>Front</div>
              </div>
              <div>
                <img src={twSide} alt="teaching_wall_details_side" />
                <div>Side</div>
              </div>
            </div>
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
          </div>
          <Accessories />
          <OptionsRow />
        </ProductInfo>
      </ProductSection>
    </>
  );
};

export default TeachingWall;
