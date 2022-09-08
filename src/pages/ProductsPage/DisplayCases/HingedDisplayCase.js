import React from 'react';
import styles from './HingedDisplayCase.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import hdc from '../../../assets/images/DisplayCases/HingedDisplayCases/hdc_main.png';

const HingedDisplayCase = () => {
  const mainImages = [
    {
      id: 1,
      image: hdc,
      alt: 'hinged_display_case',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct
        mainImages={mainImages}
        indicators={false}
        controls={false}
      ></HeroProduct>
    </ProductSection>
  );
};

export default HingedDisplayCase;
