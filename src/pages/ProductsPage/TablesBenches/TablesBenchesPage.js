import React from 'react';
import styles from './TablesBenchesPage.module.css';
import SliderContent from '../../../components/ProductsPage/SliderContent';

// import Tables and Benches Images
import ctb from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_main.png';
import rtb from '../../../assets/images/TablesAndBenches/RoundTables/rtb_main.PNG';
import mbtb from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_main.PNG';
import mobileTable from '../../../assets/images/TablesAndBenches/mobileTable.JPG';
import surfaceMount from '../../../assets/images/TablesAndBenches/surfaceMount.jpg';

const TablesBenchesPage = () => {
  const tables = [
    {
      id: 1,
      product: 'Convertible Tables',
      imageSrc: ctb,
      category: 'tables&benches',
      item: 'convertible_tables',
    },
    {
      id: 2,
      product: 'Round Tables',
      imageSrc: rtb,
      category: 'tables&benches',
      item: 'round_tables',
    },
    {
      id: 3,
      product: 'Mobile Tables',
      imageSrc: mbtb,
      category: 'tables&benches',
      item: 'mobile_tables',
    },
    {
      id: 4,
      product: 'Rectangular Mobile Table',
      imageSrc: mobileTable,
    },
    {
      id: 5,
      product: 'Surface Wall Tables',
      imageSrc: surfaceMount,
    },
  ];
  return (
    <section className={styles.section}>
      <SliderContent
        header="Tables & Benches"
        products={tables}
        slidesNum={3}
      />
    </section>
  );
};

export default TablesBenchesPage;
