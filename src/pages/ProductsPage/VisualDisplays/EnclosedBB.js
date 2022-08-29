import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import eNC from '../../../assets/images/VisualBoards/EnclosedBB/enclosedBB_nc.jpg';
import eFB from '../../../assets/images/VisualBoards/EnclosedBB/enclosedBB_f.jpg';
import forboColors from '../../../assets/images/VisualBoards/Finishes/forbo_colors_group.jpg';
import bel from '../../../assets/images/VisualBoards/Finishes/BEL1.png';
import dessand1 from '../../../assets/images/VisualBoards/Finishes/DesertSand1.png';
import dessand2 from '../../../assets/images/VisualBoards/Finishes/DesertSand2.png';
import mojave1 from '../../../assets/images/VisualBoards/Finishes/Mojave1.png';
import mojave2 from '../../../assets/images/VisualBoards/Finishes/Mojave2.png';
import harborW from '../../../assets/images/VisualBoards/Finishes/HarborWeave_group.png';

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

  const availImages = [
    {
      id: 0,
      image: forboColors,
      alt: 'forbo_colors',
    },
    {
      id: 1,
      image: bel,
      alt: 'belair_colors',
    },
    {
      id: 2,
      image: dessand1,
      alt: 'desert_sand_colors',
    },
    {
      id: 3,
      image: dessand2,
      alt: 'desert_sand_colors',
    },
    {
      id: 4,
      image: mojave1,
      alt: 'mojave_colors',
    },
    {
      id: 5,
      image: mojave2,
      alt: 'mojave_colors',
    },
    {
      id: 6,
      image: harborW,
      alt: 'harbor_weave_colors',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Enclosed Bulletin Board"
          availImages={availImages}
          indicators={true}
          controls={true}
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
