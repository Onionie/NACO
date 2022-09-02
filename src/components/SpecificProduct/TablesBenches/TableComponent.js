import React from 'react';
import styles from './TableComponent.module.css';

import ctb_comp from '../../../assets/images/TablesAndBenches/ConvertibleTables/tb_comp.png';

const TableComponent = () => {
  return (
    <div>
      <div className={styles.ctb_hiwtc_title}> Table Components</div>
      <img src={ctb_comp} alt="table_components" />
    </div>
  );
};

export default TableComponent;
