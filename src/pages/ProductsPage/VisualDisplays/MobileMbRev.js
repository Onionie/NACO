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
        >
          <li>
            Polyvision Porcelain is the most suitable writing surface for the
            Reversible Mobile Markerboard.
          </li>
          <li>It comes with a satin anodized aluminum trim.</li>
          <li>
            Panel rotates horizontally, and a metal locking mechanism maintains
            the intended angle.
          </li>
          <li>
            For simple movement, there are two locking and two non-locking
            casters provided.
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
          <div />
        </AvailableSizes>
      </ProductInfo>
    </ProductSection>
  );
};

export default MobileMbRev;
