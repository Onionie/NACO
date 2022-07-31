import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [listDropdown, setListDropdown] = useState(false);

  const menuClickHandler = () => {
    setListDropdown(!listDropdown);
    console.log(listDropdown);
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
          {/* <div className={styles.logo_div}>
            <img
              className={styles.logo}
              src="./images/company_logo.webp"
              alt="company_logo"
            />
          </div> */}
          <div className={styles.header_title}>NELSON ADAMS NACO</div>
        </Link>

        {/* Navigation */}
        <nav className={styles.dropdown}>
          <div
            onClick={menuClickHandler}
            className={
              listDropdown
                ? `${styles.menu} ${styles.menuColor}`
                : `${styles.menu} `
            }
          >
            Menu
          </div>
          <ul
            className={
              listDropdown
                ? `${styles.dropdown_menu} `
                : `${styles.dropdown_menu} ${styles.hidden}`
            }
          >
            <Link to="/visual">
              <li>Visual Display Units</li>
            </Link>
            <Link to="/tackwall">
              <li>Tack Wall Panels</li>
            </Link>
            <Link to="/tables">
              <li>Tables and Benches</li>
            </Link>
            <Link to="/display">
              <li>Display Cases</li>
            </Link>
            <Link to="/tables">
              <li>Escribano</li>
            </Link>
          </ul>
          {/* <div className={styles.navbar_list}> */}
          {/* <div>
              <Link to="/">Home</Link>
            </div> */}

          {/* Product Menu */}
          {/* <div className={`${styles.menu} ${styles.product_menu}`}>
              <Link to="/products">
                <div>Products</div>
              </Link>
              <ul
                className={`${styles.dropdown_menu} ${styles.product_dropdown_menu}`}
              >
                <Link to="/visual">
                  <li>Visual Display Units</li>
                </Link>
                <Link to="/tackwall">
                  <li>Tack Wall Panels</li>
                </Link>
                <Link to="/tables">
                  <li>Tables and Benches</li>
                </Link>
                <Link to="/display">
                  <li>Display Cases</li>
                </Link>
                <Link to="/tables">
                  <li>Escribano</li>
                </Link>
              </ul>
            </div> */}
          {/* End of Product Menu */}

          {/* Escribano Menu */}
          {/* <div className={styles.menu}>
              <Link to="/escribano">
                <div>Escribano</div>
              </Link>
              <ul
                className={`${styles.dropdown_menu} ${styles.escribano_dropdown_menu}`}
              >
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Patricia AI</li>
                </Link>
                <Link to="/">
                  <li>Functions</li>
                </Link>
              </ul>
            </div> */}

          {/* Architect Menu */}
          {/* <div className={` ${styles.menu}`}>
              <Link to="/architect">
                <div>Architect Corner</div>
              </Link>

              <ul
                className={`${styles.dropdown_menu} ${styles.architect_dropdown_menu}`}
              >
                <Link to="/">
                  <li>AutoCad Library</li>
                </Link>
                <Link to="/">
                  <li>Installation</li>
                </Link>
                <Link to="/">
                  <li>Tables and Benches</li>
                </Link>
                <Link to="/">
                  <li>Display Cases</li>
                </Link>
                <Link to="/">
                  <li>Escribano</li>
                </Link>
              </ul>
            </div> */}

          {/* Escribano Menu */}
          {/* <div className={styles.menu}>
              <Link to="/about">
                <div>About Us</div>
              </Link>
              <ul
                className={`${styles.dropdown_menu} ${styles.about_dropdown_menu}`}
              >
                <Link to="/">
                  <li>Customers</li>
                </Link>
                <Link to="/">
                  <li>History</li>
                </Link>
                <Link to="/">
                  <li>Our Team</li>
                </Link>
                <Link to="/">
                  <li>Our Vendors</li>
                </Link>
              </ul>
            </div> */}
          {/* <div>
              <Link to="/contact">Contact Us</Link>
            </div> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
