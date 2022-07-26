import React from 'react';
import styles from './ConvertibleTable.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import ctb1 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_1.png';
import ctb2 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_2.png';
import ctb3 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_3.png';
import ctb4 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_4.PNG';

import ctb_finishes from '../../../assets/images/TablesAndBenches/ctb_finishes.png';
import ctb_sizes from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_sizes1.png';
import ctb_hiw from '../../../assets/images/TablesAndBenches/ConvertibleTables/hiw.png';
import ctb_settings from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_settings.png';

const ConvertibleTable = () => {
  const mainImages = [
    {
      id: 1,
      image: ctb1,
      alt: 'convertible_table',
    },
    {
      id: 2,
      image: ctb2,
      alt: 'convertible_table',
    },
    {
      id: 3,
      image: ctb3,
      alt: 'convertible_table',
    },
    {
      id: 4,
      image: ctb4,
      alt: 'convertible_table',
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
      <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
        <HeroBody
          title="Convertible Tables & Benches"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Allows you to turn any room into a variety of seating
            accommodations.
          </li>
          <li>
            From a standard cafeteria table to setting up a classroom and/or
            auditorium setting.
          </li>
          <li>This convertible bench allows you to maximize your space.</li>
          <li>
            Have them in a customizable arrangements and length sizes to meet
            your room space availability.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        {/* Available Table Sizes */}
        <div
          className={styles.ctb_sizes_box}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className={styles.ctb_sizes_title}>Seating Size Options</div>
          <div className={styles.ctb_sizes_image_box}>
            <img src={ctb_sizes} alt="availabe_sizes" />
          </div>
        </div>

        {/* How It Works and Table Components */}
        <div className={styles.ctb_hiwtc_box}>
          <div data-aos="fade-up" data-aos-delay="500">
            <div className={styles.ctb_hiwtc_title}>How It Works</div>
            <img src={ctb_hiw} alt="how_it_works" />
          </div>
          <TableComponent />
        </div>

        {/* Settings */}
        <div
          className={styles.ctb_settings_box}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className={styles.ctb_settings_title}>Different Settings</div>
          <div className={styles.ctb_settings_image_box}>
            <img src={ctb_settings} alt="different_settings" />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default ConvertibleTable;
