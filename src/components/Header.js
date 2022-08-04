import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [listDropdown, setListDropdown] = useState(false);

  const menuClickHandler = () => {
    setListDropdown(!listDropdown);
    console.log(listDropdown);
  };

  const setMenuStatusBack = () => {
    setListDropdown(false);
  };

  // const [fix, setFix] = useState(false);

  // const setFixed = function () {
  //   if (window.scrollY >= 550) {
  //     setFix(true);
  //     console.log('true');
  //   } else {
  //     setFix(false);
  //     console.log('false');
  //   }
  // };

  // window.addEventListener('scroll', setFixed);

  return (
    <header
      className={styles.headerSection}
      // className={
      //   fix
      //     ? `${styles.headerSection} ${styles.fixed}`
      //     : `${styles.headerSection}`
      // }
    >
      <div className={styles.header}>
        <Link to="/" className={styles.header_left}>
          <div className={styles.logo_div}>
            <img
              className={styles.logo}
              src="./images/company_logo.webp"
              alt="company_logo"
            />
          </div>
          <div className={styles.header_title}>NELSON ADAMS NACO</div>
        </Link>

        {/* Navigation */}
        <nav className={styles.dropdown}>
          <div
            onClick={menuClickHandler}
            className={
              listDropdown
                ? `${styles.menu} ${styles.menu_active}`
                : `${styles.menu} `
            }
          >
            Menu
          </div>
          <ul className={`${styles.dropdown_menu}`}>
            <Link to="/escribano">
              <li onClick={setMenuStatusBack}>Escribano</li>
            </Link>
            <Link to="/products">
              <li onClick={setMenuStatusBack}>Our Products</li>
            </Link>
            <Link to="/architect">
              <li onClick={setMenuStatusBack}>Architect Corner</li>
            </Link>
            <Link to="/about">
              <li onClick={setMenuStatusBack}>About Us</li>
            </Link>
            <Link to="/contact">
              <li onClick={setMenuStatusBack}>Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
