import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Link to="/contact">
        <h2> Contact Us</h2>
      </Link>
    </section>
  );
};

export default Footer;
