import React from 'react';
import styles from './ProductInfo.module.css';

const ProductInfo = (props) => {
  return (
    <section className={styles.product_information}>
      <div className={styles.product_information_title}>
        Product Information
      </div>
      {props.children}
    </section>
  );
};

export default ProductInfo;
