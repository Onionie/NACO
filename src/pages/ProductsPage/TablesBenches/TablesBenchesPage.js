import React from 'react';
import SliderContent from '../../../components/ProductsPage/SliderContent';

// import Tables and Benches Images
import ctb from '../../../assets/images/TablesAndBenches/ConvertibleTables/ctb_main.png';
import rtb from '../../../assets/images/TablesAndBenches/RoundTables/rtb_main.PNG';
import mbtb from '../../../assets/images/TablesAndBenches/MobileTables/mbtb_main.PNG';
import iwtb from '../../../assets/images/TablesAndBenches/InWallTables/iwtb_main.png';

const TablesBenchesPage = () => {
  const tables = [
    {
      id: 1,
      product: 'Convertible Tables',
      imageSrc: ctb,
      category: 'tables&benches',
      item: 'convertible-tables',
    },
    {
      id: 2,
      product: 'Round Tables',
      imageSrc: rtb,
      category: 'tables&benches',
      item: 'round-tables',
    },
    {
      id: 3,
      product: 'Mobile Tables',
      imageSrc: mbtb,
      category: 'tables&benches',
      item: 'mobile-tables',
    },
    {
      id: 4,
      product: 'In-Wall Tables',
      imageSrc: iwtb,
      category: 'tables&benches',
      item: 'inwall-tables',
    },
  ];
  return (
    <SliderContent header="Tables & Benches" products={tables} slidesNum={3} />
  );
};

export default TablesBenchesPage;
