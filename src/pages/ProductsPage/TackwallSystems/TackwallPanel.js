import React from 'react';
import styles from './TackwallPanel.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import twp_1 from '../../../assets/images/TackwallSystems/TWP/twp_1.png';
import twp_2 from '../../../assets/images/TackwallSystems/TWP/twp_2.png';
import twp_3 from '../../../assets/images/TackwallSystems/TWP/twp_3.png';

import bel from '../../../assets/images/VisualBoards/Finishes/BEL1.png';
import dessand1 from '../../../assets/images/VisualBoards/Finishes/DesertSand1.png';
import dessand2 from '../../../assets/images/VisualBoards/Finishes/DesertSand2.png';
import mojave1 from '../../../assets/images/VisualBoards/Finishes/Mojave1.png';
import mojave2 from '../../../assets/images/VisualBoards/Finishes/Mojave2.png';
import harborW from '../../../assets/images/VisualBoards/Finishes/HarborWeave_group.png';

const TackwallPanel = () => {
  const mainImages = [
    {
      id: 1,
      image: twp_1,
      alt: 'tackwall_panel',
    },
    {
      id: 2,
      image: twp_2,
      alt: 'tackwall_panel',
    },
    {
      id: 3,
      image: twp_3,
      alt: 'tackwall_panel',
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
          title="Tackwall Panels (TWP)"
          availImages={availImages}
          indicators={true}
          controls={true}
        >
          <li>
            Tackwall panels substrate construction consist of standard vinyl on
            1/2" fiberboard w/ optional clear anodized aluminum J-trim, vinyl
            wrapped or powdercoated J-trim.
          </li>
          <li>Panel types: 2 edges wrapped or 4 edges wrapped.</li>
          <li>
            Recommended adhesives: Henry's 317 (5 minutes working time "Fast
            grip") or Henry's 237 (30 minutes working time). Coverage 500 sq.ft.
            +/- approximately per 1ea - 4 gallon (15.14 L) bucket of adhesive.
          </li>
          <li>
            All aluminum is 6063-T5 alloy that comes in satin standard clear
            anodized color.
          </li>
          <li>
            Call the office for a vinyl wrapped J-trim or powder-coat J-trim
            option at an additional cost.
          </li>
        </HeroBody>
      </HeroProduct>
    </ProductSection>
  );
};

export default TackwallPanel;
