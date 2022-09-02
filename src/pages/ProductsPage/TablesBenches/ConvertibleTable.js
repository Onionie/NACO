import React from 'react';
import styles from './ConvertibleTable.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';

import ctb1 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_1.png';
import ctb2 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_2.png';
import ctb3 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_3.png';
import ctb4 from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_4.PNG';

import ctb_finishes from '../../../assets/images/TablesAndBenches/ctb_finishes.png';
import ctb_sizes from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_sizes.png';

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
          title="Convertible Table Bench"
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
        <div className={styles.ctb_sizes_box}>
          <div className={styles.ctb_sizes_title}>Available Sizes</div>
          <div className={styles.ctb_sizes_image_box}>
            <img src={ctb_sizes} alt="availabe_sizes" />
          </div>
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default ConvertibleTable;
