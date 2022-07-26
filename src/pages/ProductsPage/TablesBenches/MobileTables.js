import React from 'react';
import styles from './MobileTables.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import mbtb1 from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_1.png';
import mbtb_seat from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_seating.PNG';
import mbtb_avail from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_avail.png';
import ctb_finishes from '../../../assets/images/TablesAndBenches/ctb_finishes.png';

const MobileTables = () => {
  const mainImages = [
    {
      id: 1,
      image: mbtb1,
      alt: 'mobile_table',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: ctb_finishes,
      alt: 'table_color_options',
    },
  ];

  return (
    <ProductSection>
      <HeroProduct mainImages={mainImages} indicators={false} controls={false}>
        <HeroBody
          title="Mobile Tables"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            NELSON ADAMS allows you to customize your table with a variety of
            laminates that change the environment of your room.
          </li>
          <li>
            Whether they're laid out ready to be used or folded up for storage,
            your table will be different from the original drabby cafeteria
            tables.
          </li>
          <li>
            Mobile Tables can be customized to be wheelchair accessible upon
            request.
          </li>
          <li>Mobile Tables are also available with individual seating.</li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <div
          className={styles.mbtb_seating_opt}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={mbtb_seat} alt="seating_options" />
        </div>
        <div
          className={styles.mbtb_seating_opt}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src={mbtb_avail} alt="available_tables" />
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default MobileTables;
