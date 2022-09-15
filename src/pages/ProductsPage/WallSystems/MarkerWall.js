import React from 'react';
import styles from './MarkerWall.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import mw_1 from '../../../assets/images/TackwallSystems/MarkerWall/mw_1.png';
import mw_2 from '../../../assets/images/TackwallSystems/MarkerWall/mw_2.png';
import mw_3 from '../../../assets/images/TackwallSystems/MarkerWall/mw_3.png';
import mw_4 from '../../../assets/images/TackwallSystems/MarkerWall/mw_4.png';

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
  return (
    <ProductSection>
      <HeroProduct
        mainImages={mainImages}
        indicators={true}
        controls={true}
      ></HeroProduct>
    </ProductSection>
  );
};

export default MarkerWall;
