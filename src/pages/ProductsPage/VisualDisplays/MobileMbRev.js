import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';

import reversible from '../../../assets/images/VisualBoards/MobileMarkerboard/reversible.jpg';
import cbNmb from '../../../assets/images/VisualBoards/Finishes/cbNmb.jpg';

const MobileMbRev = () => {
  const mainImages = [
    {
      id: 1,
      image: reversible,
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
          title="Reversible Mobile Markerboard"
          availImages={availImages}
          indicators={false}
          controls={false}
        ></HeroBody>
      </HeroProduct>
    </ProductSection>
  );
};

export default MobileMbRev;
