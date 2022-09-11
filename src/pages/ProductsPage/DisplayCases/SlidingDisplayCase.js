import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import DetailsAndLight from '../../../components/SpecificProduct/DisplayCases/DetailsAndLight';

import sdc from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_main.png';
import sdc_detail from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_det.png';

import forboColors from '../../../assets/images/VisualBoards/Finishes/forbo_colors_group.jpg';
import bel from '../../../assets/images/VisualBoards/Finishes/BEL1.png';
import dessand1 from '../../../assets/images/VisualBoards/Finishes/DesertSand1.png';
import dessand2 from '../../../assets/images/VisualBoards/Finishes/DesertSand2.png';
import mojave1 from '../../../assets/images/VisualBoards/Finishes/Mojave1.png';
import mojave2 from '../../../assets/images/VisualBoards/Finishes/Mojave2.png';
import harborW from '../../../assets/images/VisualBoards/Finishes/HarborWeave_group.png';

const SlidingDisplayCase = () => {
  const mainImages = [
    {
      id: 1,
      image: sdc,
      alt: 'sliding_display_case',
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
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Sliding Display Case"
          availImages={availImages}
          indicators={true}
          controls={true}
        >
          <li>Consists of 2ea standard shelves.</li>
          <li>Standard sliding doors with optional fixed back panel.</li>
          <li>Optional LED lighting (all electrical hook-ups by others).</li>
          <li>Double channel aluminum track.</li>
          <li>Bottom roller track and top guide track</li>
          <li>
            All aluminum 6063-T5 alloy that comes in a satin standard clear
            anodized.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <DetailsAndLight
          dc_title={'Sliding Display Case Detail'}
          dc_image={sdc_detail}
        />
      </ProductInfo>
    </ProductSection>
  );
};

export default SlidingDisplayCase;
