import React from 'react';
import { Link } from 'react-router-dom';
// import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.header}>
        <Link to="/" className={styles.header_left}>
          <div className={styles.logo_div}>
            <img
              className={styles.logo}
              src="./images/company_logo.webp"
              alt="company_logo"
            />
          </div>
          <div className={styles.header_title}>NACO</div>
        </Link>

        {/* Navigation */}
        <nav className={styles.navbar}>
          <ul className={styles.main_list}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li className={styles.product}>
                Products
                <ul className={styles.product_list}>
                  <Link to="/visual">
                    <li>Visual Display Units</li>
                  </Link>
                  <Link to="/tackwall">
                    <li>Tack Wall Panels</li>
                  </Link>
                  <Link to="/tables">
                    <li>Tables and Benches</li>
                  </Link>
                  <li>Display Cases</li>
                  <li>Escribano</li>
                </ul>
              </li>
            </Link>
            <Link to="/architect">
              <li>Architect Corner</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
