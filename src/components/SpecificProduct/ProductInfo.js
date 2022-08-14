import React, { useEffect } from 'react';
import styles from './ProductInfo.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductInfo = (props) => {
  useEffect(() => {
    Aos.init({ delay: 300, duration: 2500 }, []);
  });
  return (
    <section className={styles.product_information} data-aos="slide-up">
      <div className={styles.product_information_title}>
        Product Information
      </div>
      {props.children}
    </section>
  );
};

export default ProductInfo;
