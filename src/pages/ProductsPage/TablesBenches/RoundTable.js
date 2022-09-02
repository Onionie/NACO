import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import rtb1 from '../../../assets/images/TablesAndBenches/RoundTables/rtb_1.png';

const RoundTable = () => {
  const mainImages = [
    {
      id: 1,
      image: rtb1,
      alt: 'round_table',
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

export default RoundTable;
