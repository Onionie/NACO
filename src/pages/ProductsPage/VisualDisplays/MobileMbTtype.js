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
        >
          <li>
            Our porcelain mobile markerboard comes in heights of 60" or 72", and
            widths of 36", 42, 48", and 60".
          </li>
          <li>
            Comes with two locking hubless casters and two non-locing ones for
            convenient maneuverability.
          </li>
          <li>The board is double-sided.</li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <AvailableSizes>
          <li>5' x 3.5'</li>
          <li>5' x 4'</li>
          <li>5' x 5'</li>
          <li>6' x 4'</li>
          <li>6' x 5'</li>
          <li>6' x 6'</li>
          <div />
        </AvailableSizes>
      </ProductInfo>
    </ProductSection>
  );
};

export default MobileMbTtype;
