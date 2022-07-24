import React from 'react';
import styles from './TwoGrid.module.css';

const TwoGrid = (props) => {
  return <div className={styles.grid2}>{props.children}</div>;
};

export default TwoGrid;
