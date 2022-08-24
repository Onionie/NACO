import React from 'react';
import styles from './Tackboard.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';

import forboBlue from '../../../assets/images/VisualBoards/ForboTackboard/forbo_blue.jpg';
import forboOptions from '../../../assets/images/VisualBoards/ForboTackboard/forbo_options.jpg';
import forboColors from '../../../assets/images/VisualBoards/Finishes/forbo_colors.jpg';

const TackboardForbo = () => {
  const mainImages = [
    {
      id: 1,
      image: forboBlue,
      alt: 'forbo_blue',
    },
    {
      id: 2,
      image: forboOptions,
      alt: 'forbo_options',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: forboColors,
      alt: 'forbo_colors',
    },
  ];
  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Forbo Tackboard"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Forbo tackboards incorporate a 1/4" Forbo with a 1/4" Hardboard
            backing and aluminum trim.
          </li>
          <li>Extremely Durable.</li>
          <li>Low level of light reflectance.</li>
          <li>Will not warp or crumble.</li>
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
      </ProductInfo>
    </ProductSection>
  );
};

export default TackboardForbo;
