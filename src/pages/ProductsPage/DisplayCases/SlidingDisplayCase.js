import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import DetailsAndLight from '../../../components/SpecificProduct/DisplayCases/DetailsAndLight';

import sdc from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_main.png';
import sdc_detail from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_det.png';

const SlidingDisplayCase = () => {
  const mainImages = [
    {
      id: 1,
      image: sdc,
      alt: 'sliding_display_case',
    },
  ];
  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Sliding Display Case"
          availImages={mainImages}
          indicators={false}
          controls={false}
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
