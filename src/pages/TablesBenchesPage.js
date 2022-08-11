import React from 'react';
import styles from './TablesBenchesPage.module.css';
import SliderContent from '../components/ProductsPage/SliderContent';

// import Tables and Benches Images
import ctb from '../assets/images/TablesAndBenches/ctb.JPG';
import inWall from '../assets/images/TablesAndBenches/inWall.JPG';
import logoTable from '../assets/images/TablesAndBenches/logoTable.jpg';
import mobileTable from '../assets/images/TablesAndBenches/mobileTable.JPG';
import surfaceMount from '../assets/images/TablesAndBenches/surfaceMount.jpg';

const TablesBenchesPage = () => {
  const slider2 = [
    {
      id: 1,
      product: 'Convertible Table',
      imageSrc: ctb,
    },
    {
      id: 2,
      product: 'In Wall Tables & Benches',
      imageSrc: inWall,
    },
    {
      id: 3,
      product: 'Round Tables',
      imageSrc: logoTable,
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
      <SliderContent header="TablesAndBenches" images={slider2} slidesNum={4} />
    </section>
  );
};

export default TablesBenchesPage;