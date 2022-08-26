import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';

import tType from '../../../assets/images/VisualBoards/MobileMarkerboard/T_type.jpg';
import cbNmb from '../../../assets/images/VisualBoards/Finishes/cbNmb.jpg';

const MobileMbTtype = () => {
  const mainImages = [
    {
      id: 1,
      image: tType,
      alt: 'reversible_markerboard',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: cbNmb,
      alt: 'porcelain_finishes',
    },
  ];
  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Mobile Markerboard T Type"
          availImages={availImages}
          indicators={false}
          controls={false}
        ></HeroBody>
      </HeroProduct>
    </ProductSection>
  );
};

export default MobileMbTtype;
