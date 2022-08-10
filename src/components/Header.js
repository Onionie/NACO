import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Header.module.css';
import companyLogo from '../assets/images/company_logo_big.jpg';

const Header = () => {
  const location = useLocation();

  // Offcanvas states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // In Home Page or not state
  const [inHomepage, setInHomepage] = useState(null);

  // Show Dropdown state
  const [showDropdown, setShowDropdown] = useState(false);

  const menuClickHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const closeHandler = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setInHomepage(true);
    } else {
      setInHomepage(false);
    }
  }, [location.pathname]);

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
      {/* <div className={styles.demoDropdown}>
        <div className={styles.emptyGrid}></div>
        <div className={styles.navDrop}></div>
      </div> */}
      <div
        className={
          inHomepage ? `${styles.header} ${styles.inHome}` : `${styles.header}`
        }
      >
        <Link to="/" className={styles.header_left}>
          <div className={styles.logo_div}>
            <img className={styles.logo} src={companyLogo} alt="company_logo" />
          </div>
          {/* <div className={styles.header_title}>NELSON ADAMS NACO</div> */}
        </Link>

        {/* Navigation */}
        <nav className={styles.dropdown}>
          <div
            onClick={handleShow}
            className={
              show ? `${styles.menu} ${styles.menu_active}` : `${styles.menu}`
            }
          >
            Menu
            {/* <FiMenu /> */}
          </div>

          <Offcanvas
            className={styles.offc}
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header>
              <div className={styles.closeIcon} onClick={handleClose}>
                <GrClose />
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offcBody}>
              <ul className={`${styles.dropdown_menu}`}>
                {/* <li>
              <div className={styles.closeIcon} onClick={closeHandler}>
                <GrClose />
              </div>
            </li> */}
                <Link to="/escribano">
                  <li onClick={handleClose}>Escribano</li>
                </Link>
                <Link to="/visual">
                  <li onClick={handleClose}>Visual Displays</li>
                </Link>
                <Link to="/tables">
                  <li onClick={handleClose}>Tables & Benches</li>
                </Link>
                <Link to="/architect">
                  <li onClick={handleClose}>Architect Corner</li>
                </Link>
                <Link to="/about">
                  <li onClick={handleClose}>About Us</li>
                </Link>
                <Link to="/contact">
                  <li onClick={handleClose}>Contact Us</li>
                </Link>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </div>
    </header>
  );
};

export default Header;
