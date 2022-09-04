import React from 'react';
import styles from './InWallTable.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import iwtb1 from '../../../assets/images/TablesAndBenches/InWallTables/iwtb_1.png';
import iwtb_dim1 from '../../../assets/images/TablesAndBenches/InWallTables/iwtb_dim1.png';
import iwtb_dim2 from '../../../assets/images/TablesAndBenches/InWallTables/iwtb_dim2.png';
import ctb_finishes from '../../../assets/images/TablesAndBenches/ctb_finishes.png';

const InWallTable = () => {
  const mainImages = [
    {
      id: 1,
      image: iwtb1,
      alt: 'in-wall_table',
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
          title="In-Wall Tables & Benches"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Provides the most efficient use of space in a cateria or
            multi-purpose room setting.
          </li>
          <li>
            Allows you to customize multiple units that can store up to 4 tables
            and 8 benches.
          </li>
          <li>
            Configurations allow you to provide wheelchair accessibility
            throughout your room.
          </li>
          <li>
            NELSON ADAMS now provides two kinds of in-wall tables & benches; D
            series Recessed Mounted <b>(DRM)</b> and D series Surface Mounted{' '}
            <b>(DSM)</b> configurations, allowing you to either locate the
            pockets within your wall or along the surface of your wall.
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <div className={styles.dimensions_box}>
          <div className={styles.dimensions_title}>Dimensions</div>
          <div className={styles.dimensions_image_box}>
            <img src={iwtb_dim2} alt="table_dimensions" />
            <img src={iwtb_dim1} alt="table_dimensions" />
          </div>
        </div>

        <TableComponent />
      </ProductInfo>
    </ProductSection>
  );
};

export default InWallTable;
