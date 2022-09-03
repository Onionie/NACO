import React from 'react';
import styles from './MobileTables.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import mbtb1 from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_1.png';

const MobileTables = () => {
  const mainImages = [
    {
      id: 1,
      image: mbtb1,
      alt: 'mobile_table',
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

export default MobileTables;
