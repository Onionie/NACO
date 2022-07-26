import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.main_footer_box}>
        <div className={styles.address}>
          12345 MadeUp Street, Fake City, Somewhere State, 67890
          <span>United States of America</span>
          <div className={styles.copyright}>&copy; Copyright 2022 </div>
        </div>
        <div>
          <div>(123)456-7890</div>
          <div>E-mail@fake.com</div>
          <div>Follow Us</div>
          <div>Logos</div>
        </div>
      </div>
      {/* <Link to="/contact">
        <h2> Contact Us</h2>
      </Link> */}
    </section>
  );
};

export default Footer;
