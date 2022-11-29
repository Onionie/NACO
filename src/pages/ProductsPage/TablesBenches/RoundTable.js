import React from 'react';
import styles from './RoundTable.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';
import ProductInfo from '../../../components/SpecificProduct/ProductInfo';
import TableComponent from '../../../components/SpecificProduct/TablesBenches/TableComponent';

import rtb1 from '../../../assets/images/TablesAndBenches/RoundTables/rtb_1.png';
import rtb_sizes from '../../../assets/images/TablesAndBenches/RoundTables/rtb_sizes.png';
import rtb_op from '../../../assets/images/TablesAndBenches/RoundTables/rtb_op.png';
import rtb_custom from '../../../assets/images/TablesAndBenches/RoundTables/rtb_custom.png';

import ctb_finishes from '../../../assets/images/TablesAndBenches/ctb_finishes.png';

const RoundTable = () => {
  const mainImages = [
    {
      id: 1,
      image: rtb1,
      alt: 'round_table',
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
          title="Round Tables"
          availImages={availImages}
          indicators={false}
          controls={false}
        >
          <li>
            Choose an option from the standard bench, individual stool seating,
            or a combination of bench and stool.
          </li>
          <li>
            Two wheel chair accessible models are available that provides access
            for two wheelchair users along with seating for six.
          </li>
          <li>
            When moving or storing, the storage latch keeps the tables secured
            in the upright position.{' '}
          </li>
        </HeroBody>
      </HeroProduct>
      <ProductInfo>
        <div className={styles.rtb_csttc_box}>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className={styles.rtb_csstc_title}>
              Custom Printing Available
            </div>
            <img src={rtb_custom} alt="how_it_works" />
          </div>
          <TableComponent />
        </div>

        {/* Sizes */}
        <div
          className={styles.rtb_options_box}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className={styles.rtb_options_title}>Table Seating Options</div>
          <img src={rtb_sizes} alt="seating_options" />
        </div>

        <div
          className={styles.rtb_options_box}
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className={styles.rtb_options_title}>Deployment Operations</div>
          <img src={rtb_op} alt="deployment_operations" />
        </div>
      </ProductInfo>
    </ProductSection>
  );
};

export default RoundTable;
