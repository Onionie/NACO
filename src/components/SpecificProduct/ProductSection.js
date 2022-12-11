import React from 'react';
import styles from './ProductSection.module.css';

const ProductSection = (props) => {
  return <div className={styles.product}>{props.children}</div>;
};

export default ProductSection;
