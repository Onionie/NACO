import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.logo_div}>
          <img
            className={styles.logo}
            src="./images/company_logo.webp"
            alt="cp"
          />
        </div>
        <div className={styles.header_title}>NACO</div>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Architect Corner</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
