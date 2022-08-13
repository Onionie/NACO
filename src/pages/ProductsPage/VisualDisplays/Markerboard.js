import React from 'react';
import styles from './Markerboard.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import OptionsRow from '../../../components/SpecificProduct/OptionsRow';
import PorcelainSection from '../../../components/SpecificProduct/PorcelainSection';
import CombinationBoards from '../../../components/SpecificProduct/CombinationBoards';
import Joints from '../../../components/SpecificProduct/Joints';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import markerboard from '../../../assets/images/VisualBoards/MB.jpg';

import flagholder from '../../../assets/images/VisualBoards/Markerboards/flag_holder.jpg';
import rollerbracket from '../../../assets/images/VisualBoards/Markerboards/roller_bracket.jpg';
import maphook from '../../../assets/images/VisualBoards/Markerboards/map_hook.jpg';
import wbWhite from '../../../assets/images/VisualBoards/Finishes/color_mb_white.jpg';
import wbLightgrey from '../../../assets/images/VisualBoards/Finishes/color_mb_lightgrey.jpg';
import wbBeige from '../../../assets/images/VisualBoards/Finishes/color_mb_beige.jpg';

import chalkboard from '../../../assets/images/VisualBoards/chalkboard.jpg';

const Markerboard = () => {
  const mainImages = [
    {
      id: 1,
      image: markerboard,
      alt: 'markerboard',
    },
    // {
    //   id: 2,
    //   image: chalkboard,
    //   alt: 'chalkboard',
    // },
  ];

  const colors = [
    {
      id: 1,
      imgSrc: wbWhite,
      title: 'White',
    },
    {
      id: 2,
      imgSrc: wbLightgrey,
      title: 'Light Gray',
    },
    {
      id: 3,
      imgSrc: wbBeige,
      title: 'Beige',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct
        mainImages={mainImages}
        imgSrc={markerboard}
        indicators={false}
        controls={false}
      >
        <HeroBody title="Markerboards">
          <li>Porcelain enamel steel writing surface with aluminum trim.</li>
          <li>
            1/2" particleboard with optional .005 or .015 moisture barrier
            backer.
          </li>
          <li>
            Standard satin clear anodized aluminum that include 2ea: C-4 or C-18
            side trim, standard CR-4 blade tray with radius edges.
          </li>
          <li>
            Optional 1" or 2" map-rail with various insert options: natural
            cork, Forbo or vinyl covered natural cork insert at additional cost.
          </li>
          <li>
            All aluminum is 6063-T5 alloy that comes in satin standard clear
            anodized color.
          </li>
        </HeroBody>
      </HeroProduct>

      {/* Product Information Section*/}
      <ProductInfo>
        {/* Porcelain Section */}
        <PorcelainSection colors={colors} />
        <AvailableSizes>
          <li>3' x 4'</li>
          <li>4' x 4'</li>
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

        {/* Options Row */}
        <div className={styles.customize_boards_box}>
          <div className={styles.customize_box_2}>
            <div>
              <div className={styles.customize_accessories_title}>
                Accessories
              </div>
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
            <OptionsRow />

            {/* Joints */}

            <CombinationBoards />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default Markerboard;
