import React from 'react';
import styles from './ForboDW.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import fdw_1 from '../../../assets/images/TackwallSystems/FDW/fdw_1.png';
import fdw_2 from '../../../assets/images/TackwallSystems/FDW/fdw_2.png';
import fdw_3 from '../../../assets/images/TackwallSystems/FDW/fdw_3.png';

const ForboDW = () => {
  const mainImages = [
    {
      id: 1,
      image: fdw_1,
      alt: 'forbo_directly_to_wall',
    },
    {
      id: 2,
      image: fdw_2,
      alt: 'forbo_directly_to_wall',
    },
    {
      id: 3,
      image: fdw_3,
      alt: 'forbo_directly_to_wall',
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

export default ForboDW;
