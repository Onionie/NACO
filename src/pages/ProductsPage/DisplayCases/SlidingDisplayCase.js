import React from 'react';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import DetailsAndLight from '../../../components/SpecificProduct/DisplayCases/DetailsAndLight';

import sdc_detail from '../../../assets/images/DisplayCases/SlidingDisplayCase/sdc_det.png';

const SlidingDisplayCase = () => {
  return (
    <ProductSection>
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
