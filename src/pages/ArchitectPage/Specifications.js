import React from 'react';
import styles from './Specifications.module.css';

import { specifications } from './links';

const ProductData = () => {
  return (
    <section className={styles.specifications_section}>
      <div className={styles.specifications_title}>Specifications</div>

      <div className={styles.specifications_list_box}>
        <ul className={styles.specifications_list}>
          {specifications.map((spec) => (
            <li key={spec.id}>
              <a target="_blank" rel="noopener noreferrer" href={spec.link}>
                <b>{spec.series}</b> {spec.product}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductData;
