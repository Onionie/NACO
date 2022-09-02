import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import ctb1 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_1.png';
import ctb2 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_2.png';
import ctb3 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_3.png';

const ConvertibleTable = () => {
  const mainImages = [
    {
      id: 1,
      image: ctb1,
      alt: 'convertible_table',
    },
    {
      id: 2,
      image: ctb2,
      alt: 'convertible_table',
    },
    {
      id: 3,
      image: ctb3,
      alt: 'convertible_table',
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

export default ConvertibleTable;
