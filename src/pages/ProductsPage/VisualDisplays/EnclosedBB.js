import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import eNC from '../../../assets/images/VisualBoards/EnclosedBB/enclosedBB_nc.jpg';
import eFB from '../../../assets/images/VisualBoards/EnclosedBB/enclosedBB_f.jpg';

const EnclosedBB = () => {
  const mainImages = [
    {
      id: 1,
      image: eNC,
      alt: 'enclosedBB_nc',
    },
    {
      id: 2,
      image: eFB,
      alt: 'enclosedBB_f',
    },
  ];
  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Enclosed Bulletin Board"
          availImages={mainImages}
          indicators={false}
          controls={false}
        ></HeroBody>
      </HeroProduct>
    </ProductSection>
  );
};

export default EnclosedBB;
