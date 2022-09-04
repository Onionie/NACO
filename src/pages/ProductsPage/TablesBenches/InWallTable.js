import React from 'react';
import styles from './InWallTable.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import iwtb1 from '../../../assets/images/TablesAndBenches/InWallTables/iwtb_1.png';

const InWallTable = () => {
  const mainImages = [
    {
      id: 1,
      image: iwtb1,
      alt: 'in-wall_table',
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

export default InWallTable;
