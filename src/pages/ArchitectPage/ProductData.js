import React from 'react';
import styles from './ProductData.module.css';

import { prodData } from './links';

const ProductData = () => {
  return (
    <section className={styles.product_data_section}>
      <div className={styles.prod_data_title}>Product Data</div>

      <div className={styles.prod_data_list_box}>
        <ul className={styles.prod_data_list}>
          {prodData.map((product) => (
            <li key={product.id}>
              <a target="_blank" rel="noopener noreferrer" href={product.link}>
                <b>{product.series}</b> {product.product}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductData;
