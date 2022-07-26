import React from 'react';
import styles from './ForboDW.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import fdw_1 from '../../../assets/images/TackwallSystems/FDW/fdw_1.png';
import fdw_2 from '../../../assets/images/TackwallSystems/FDW/fdw_2.png';
import fdw_3 from '../../../assets/images/TackwallSystems/FDW/fdw_3.png';
import fdw_det1 from '../../../assets/images/TackwallSystems/FDW/fdw_d1.png';
import fdw_det2 from '../../../assets/images/TackwallSystems/FDW/fdw_d2.png';
import fdw_edg from '../../../assets/images/TackwallSystems/FDW/fdw_edging.png';

import forboColors from '../../../assets/images/VisualBoards/Finishes/forbo_colors.jpg';

const ForboDW = () => {
  const mainImages = [
    {
      id: 1,
      image: fdw_1,
      alt: 'forbo_directly_to_wall',
    },
    {
      id: 2,
      image: fdw_2,
      alt: 'forbo_directly_to_wall',
    },
    {
      id: 3,
      image: fdw_3,
      alt: 'forbo_directly_to_wall',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: forboColors,
      alt: 'forbo_colors',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Forbo Directly to Wall (FDW)"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Consists of optional clear satin anodized aluminum 1/4" [.250]
            J-trim.
          </li>
          <li>
            Recommended adhesives: Henry's 317 (5 minutes working time "Fast
            grip") or Henry's 237 (30 minutes working time). Coverage 500 sq.ft.
            +/- approximately per 1ea - 4 gallon (15.14 L) bucket of adhesive.
          </li>
          <li>L910 adhesive available at a higher cost.</li>
          <li>
            All aluminum is 6063-T5 alloy that comes in satin standard clear
            anodized color.
          </li>
          <li>
            Call the office for a vinyl wrapped j-trim or powder-coat option at
            an additional cost.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        {/* Details */}
        <div
          className={styles.fdw_detail_box}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className={styles.fdc_detail_title}>FDW Details</div>
          <div className={styles.fdw_detail_images}>
            <img src={fdw_det1} alt="forbo_direct_to_wall_details" />
            <img src={fdw_det2} alt="forbo_direct_to_wall_details" />
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

export default ForboDW;
