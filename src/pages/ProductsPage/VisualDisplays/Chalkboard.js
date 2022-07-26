import React from 'react';

import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import AvailableSizes from '../../../components/SpecificProduct/AvailableSizes';
import OptionsRow from '../../../components/SpecificProduct/OptionsRow';
import CombinationBoards from '../../../components/SpecificProduct/CombinationBoards';
import Joints from '../../../components/SpecificProduct/Joints';
import Accessories from '../../../components/SpecificProduct/Accessories';

import chalkboard from '../../../assets/images/VisualBoards/chalkboard_black.jpg';
import cb from '../../../assets/images/VisualBoards/Finishes/cb.jpg';

const Chalkboard = () => {
  const mainImages = [
    {
      id: 1,
      image: chalkboard,
      alt: 'chalkboard',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: cb,
      alt: 'available_mb',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Chalkboards"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>Porcelain enamel steel writing surface with aluminum trim.</li>
          <li>
            1/2" particleboard with optional .005 or .015 moisture barrier
            backer.
          </li>
          <li>
            Standard satin clear anodized aluminum that include 2ea: C-4 or C-18
            side trim, standard CR-4 blade tray with radius edges.
          </li>
          <li>
            Optional 1" or 2" map-rail with various insert options: natural
            cork, Forbo or vinyl covered natural cork insert at additional cost.
          </li>
          <li>
            All aluminum is 6063-T5 alloy that comes in satin standard clear
            anodized color.
          </li>
        </HeroBody>
      </HeroProduct>

      {/* Product Information Section*/}
      <ProductInfo>
        <AvailableSizes>
          <li>3' x 4'</li>
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
        <Accessories />
        <Joints />
        <OptionsRow />
        <CombinationBoards />
      </ProductInfo>
    </ProductSection>
  );
};

export default Chalkboard;
