import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_left_portion}>
          <div className={styles.footer_company_box}>
            <img src="./images/company_logo.webp" alt="company-logo" />
          </div>
          <div>NELSON ADAMS NACO</div>
        </div>

        <div>
          <div>160 N. Cactus Ave</div>
          <div>Rialto CA, 92346</div>
          <div>909-879-0421</div>
        </div>
        <div>
          <div>Escribano</div>
          <div>Unique Visual concepts</div>
          <div>Tables And Benches</div>
          <div>Tackwall Systems</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
