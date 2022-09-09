import React from 'react';
import styles from './TackwallPanel.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import twp_1 from '../../../assets/images/TackwallSystems/TWP/twp_1.png';
import twp_2 from '../../../assets/images/TackwallSystems/TWP/twp_2.png';
import twp_3 from '../../../assets/images/TackwallSystems/TWP/twp_3.png';

const TackwallPanel = () => {
  const mainImages = [
    {
      id: 1,
      image: twp_1,
      alt: 'tackwall_panel',
    },
    {
      id: 2,
      image: twp_2,
      alt: 'tackwall_panel',
    },
    {
      id: 3,
      image: twp_3,
      alt: 'tackwall_panel',
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

export default TackwallPanel;
