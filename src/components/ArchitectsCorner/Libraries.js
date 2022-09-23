import React from 'react';
import styles from './Libraries.module.css';

const Libraries = (props) => {
  return (
    <section className={styles.libraries_list_section}>
      <div className={styles.libraries_title}>{props.title}</div>

      <div className={styles.libraries_list_box}>
        <ul className={styles.libraries_list}>
          {/* {prodData.map((product) => (
            <li key={product.id}>
              <a target="_blank" rel="noopener noreferrer" href={product.link}>
                <b>{product.series}</b> {product.product}
              </a>
            </li>
          ))} */}
          {props.children}
        </ul>
      </div>
    </section>
  );
};

export default Libraries;
