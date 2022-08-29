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
        >
          <li>Enclosed Bulletin Board Cabinets feature aluminum trim. </li>
          <li>Comes with locking hinged doors and tempered clear glass.</li>
          <li>
            Available in standard with a 1/4" natural cork with 1/4" hardboard
            backing.
          </li>
          <li>
            Other options are 1/4" Forbo or 1/2" vinyl tackable back panel.
          </li>
        </HeroBody>
      </HeroProduct>
    </ProductSection>
  );
};

export default EnclosedBB;
