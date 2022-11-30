import React from 'react';
import styles from './TackwallPanel.module.css';

// Components
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

// Pictures
import twp_1 from '../../../assets/images/TackwallSystems/TWP/twp_1.png';
import twp_2 from '../../../assets/images/TackwallSystems/TWP/twp_2.png';
import twp_3 from '../../../assets/images/TackwallSystems/TWP/twp_3.png';
import twp_det from '../../../assets/images/TackwallSystems/TWP/twp_det.PNG';
import twp_det1 from '../../../assets/images/TackwallSystems/TWP/twp_det1.png';
import fdw_edg from '../../../assets/images/TackwallSystems/FDW/fdw_edging.png';

// Finishes Pictures
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
      <ProductInfo>
        {/* Details */}
        <div
          className={styles.fdw_detail_box}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className={styles.fdc_detail_title}>TWP Details</div>
          <div className={styles.fdw_detail_images}>
            <img src={twp_det} alt="tackwall_panels" />
            <img src={twp_det1} alt="tackwall_panels" />
          </div>
        </div>

        {/* Edging */}
        <div
          className={styles.fdw_edging_box}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className={styles.fdc_detail_title}>
            Tackwall Panel Edging Configurations
          </div>
          <div>
            <img src={fdw_edg} alt="edging_configurations" />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default TackwallPanel;
