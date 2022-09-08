import React from 'react';
import styles from './HingedDisplayCase.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import hdc from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_main.png';
import hdc_detail from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_detail.png';
import hdc_led from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_led.png';

import forboColors from '../../../assets/images/VisualBoards/Finishes/forbo_colors_group.jpg';
import bel from '../../../assets/images/VisualBoards/Finishes/BEL1.png';
import dessand1 from '../../../assets/images/VisualBoards/Finishes/DesertSand1.png';
import dessand2 from '../../../assets/images/VisualBoards/Finishes/DesertSand2.png';
import mojave1 from '../../../assets/images/VisualBoards/Finishes/Mojave1.png';
import mojave2 from '../../../assets/images/VisualBoards/Finishes/Mojave2.png';
import harborW from '../../../assets/images/VisualBoards/Finishes/HarborWeave_group.png';

const HingedDisplayCase = () => {
  const mainImages = [
    {
      id: 1,
      image: hdc,
      alt: 'hinged_display_case',
    },
  ];

  const availImages = [
    {
      id: 0,
      image: forboColors,
      alt: 'forbo_colors',
    },
    {
      id: 1,
      image: bel,
      alt: 'belair_colors',
    },
    {
      id: 2,
      image: dessand1,
      alt: 'desert_sand_colors',
    },
    {
      id: 3,
      image: dessand2,
      alt: 'desert_sand_colors',
    },
    {
      id: 4,
      image: mojave1,
      alt: 'mojave_colors',
    },
    {
      id: 5,
      image: mojave2,
      alt: 'mojave_colors',
    },
    {
      id: 6,
      image: harborW,
      alt: 'harbor_weave_colors',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Hinged Display Case"
          availImages={availImages}
          indicators={true}
          controls={true}
        >
          <li>Consists of 2ea standard shelves.</li>
          <li>Standard hinged doors with optional fixed back panel.</li>
          <li>Optional LED lighting (all electrical hook-ups by others).</li>
          <li>Standard clear satin anodized piano hinged doors.</li>
          <li>
            All aluminum 6063-T5 alloy that comes in a satin standard clear
            anodized.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <div className={styles.hdc_detail_box}>
          <div>
            <div className={styles.hdc_detail_title}>
              Hinged Display Case Detail
            </div>
            <img src={hdc_detail} alt="hdc_details" />
          </div>
          <div>
            <div className={styles.hdc_detail_title}>Available LED Lights</div>
            <img src={hdc_led} alt="hdc_led_lights" />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default HingedDisplayCase;
