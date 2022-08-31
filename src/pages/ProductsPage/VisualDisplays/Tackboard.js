import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import NaturalCork from '../../../components/SpecificProduct/NaturalCork';

import tb from '../../../assets/images/VisualBoards/Tackboard/tackboard.png';
import tackboardNC from '../../../assets/images/VisualBoards/Tackboard/tackboard_nc.jpg';
import bel from '../../../assets/images/VisualBoards/Finishes/BEL1.png';
import dessand1 from '../../../assets/images/VisualBoards/Finishes/DesertSand1.png';
import dessand2 from '../../../assets/images/VisualBoards/Finishes/DesertSand2.png';
import mojave1 from '../../../assets/images/VisualBoards/Finishes/Mojave1.png';
import mojave2 from '../../../assets/images/VisualBoards/Finishes/Mojave2.png';
import harborW from '../../../assets/images/VisualBoards/Finishes/HarborWeave_group.png';

import naturalCork from '../../../assets/images/VisualBoards/Tackboard/natural_cork.png';

const Tackboard = () => {
  const mainImages = [
    {
      id: 1,
      image: tb,
      alt: 'tackboard',
    },
    {
      id: 2,
      image: tackboardNC,
      alt: 'tackboard_natural_cork',
    },
  ];

  const availImages = [
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
          title="Tackboard"
          availImages={availImages}
          indicators={true}
          controls={true}
        >
          <li>
            Our standard tackboards incorporate a 1/4" natural Cork with a 1/4"
            Hardboard backing and aluminum trim.
          </li>
          <li>
            Or customize it with Vinyl or Fabric face wrapped onto a 1/2"
            Hardboard backing.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        {/* <PorcelainSection colors={colors} finishes={finishes} /> */}
        <AvailableSizes>
          <li>4' x 4'</li>
          <li>4' x 5'</li>
          <li>4' x 6'</li>
          <li>4' x 7'</li>
          <li>4' x 8'</li>
          <li>4' x 9'</li>
          <li>4' x 10'</li>
          <li>4' x 11'</li>
          <li>4' x 12'</li>
          <li>4' x 13'</li>
          <li>4' x 14'</li>
          <li>4' x 15'</li>
          <li>4' x 16'</li>
          <li>Custom Sizes Available</li>
        </AvailableSizes>

        <NaturalCork />
      </ProductInfo>
    </ProductSection>
  );
};

export default Tackboard;
