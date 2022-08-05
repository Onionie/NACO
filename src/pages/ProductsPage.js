import React from 'react';
import styles from './ProductsPage.module.css';
import SliderContent from '../components/ProductsPage/SliderContent';

const ProductsPage = () => {
  return (
    <section className={styles.section}>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15rem',
          fontSize: '4rem',
        }}
      >
        Products Page
      </div> */}
      <SliderContent />
    </section>
  );
};

export default ProductsPage;
