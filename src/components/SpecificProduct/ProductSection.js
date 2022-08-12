import React from 'react';
import styles from './ProductSection.module.css';

const ProductSection = (props) => {
  return <section className={styles.section_product}>{props.children}</section>;
};

export default ProductSection;
