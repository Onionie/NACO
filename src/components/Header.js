import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import styles from './Header.module.css';
import './Header.css';
import companyLogo from '../assets/images/company_logo_big.jpg';

const Header = () => {
  const location = useLocation();

  // Offcanvas states
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowProducts(false);
  };
  const handleShow = () => setShow(true);

  // In Home Page or not state
  const [inHomepage, setInHomepage] = useState(null);

  // Show Dropdown state
  // const [showDropdown, setShowDropdown] = useState(false);

  const [showProducts, setShowProducts] = useState(false);

  // const menuClickHandler = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const handleShowProducts = () => {
    if (showProducts === false) {
      setShowProducts(true);
    } else {
      setShowProducts(false);
    }
  };

  const handleCloseProducts = () => {
    setShowProducts(false);
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
      className="headerSection"
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
      <div className={inHomepage ? `header inHome` : `header`}>
        <Link to="/" className="header_left">
          <div className="logo_div">
            <img className="logo" src={companyLogo} alt="company_logo" />
          </div>
          {/* <div className={styles.header_title}>NELSON ADAMS NACO</div> */}
        </Link>

        {/* Navigation */}
        <nav className="dropdown">
          <div
            onClick={handleShow}
            className={show ? `menu menu_active` : `menu`}
          >
            Menu
            {/* <FiMenu /> */}
          </div>

          <Offcanvas
            className="offc"
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <div className="closeIcon" onClick={handleClose}>
              <GrClose />
            </div>
            <Offcanvas.Body className="offcBody">
              {/* Using React Nav */}
              <Nav className="nav_">
                <div onClick={handleCloseProducts}></div>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link as={Link} to="/escribano">
                    Escribano
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={handleClose}>
                  <Nav.Link as={Link} to="/escribano">
                    Patricia
                  </Nav.Link>
                </Nav.Item>

                <NavDropdown
                  className="products_list"
                  onClick={handleShowProducts}
                  title="Our Products"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/visual"
                    onClick={handleClose}
                  >
                    Visual Display Boards
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/tables&benches"
                    onClick={handleClose}
                  >
                    Tables & Benches
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/teaching_walls"
                    onClick={handleClose}
                  >
                    Teaching Walls
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/display"
                    onClick={handleClose}
                  >
                    Display Cases
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/display"
                    onClick={handleClose}
                  >
                    Tackwall Panels
                  </NavDropdown.Item>
                </NavDropdown>
                <div
                  className={showProducts ? `translate_down flex_` : `flex_`}
                >
                  <Nav.Item onClick={handleClose}>
                    <Nav.Link as={Link} to="/architect">
                      Architects Corner
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/about" onClick={handleClose}>
                      About Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/contact" onClick={handleClose}>
                      Contact Us
                    </Nav.Link>
                  </Nav.Item>
                </div>
                <div onClick={handleCloseProducts}></div>
              </Nav>

              {/* Custom List */}
              {/* <ul className={`${styles.dropdown_menu}`}> */}
              {/* <li>
              <div className={styles.closeIcon} onClick={closeHandler}>
                <GrClose />
              </div>
            </li> */}
              {/* <Link to="/escribano">
                  <li onClick={handleClose}>Escribano</li>
                </Link>
                <Link to="/escribano">
                  <li onClick={handleClose}>Patricia</li>
                </Link>
                <li className={styles.product_bar}>
                  Our Products
                  <ul className={styles.product_list}>
                    <Link to="/visual">
                      <li onClick={handleClose}>Visual Display Boards</li>
                    </Link>
                    <Link to="/tables">
                      <li onClick={handleClose}>Tables & Benches</li>
                    </Link>
                  </ul>
                </li> */}

              {/* <Link to="/architect">
                  <li onClick={closeHandler}>Architect Corner</li>
                </Link>
                <Link to="/about">
                  <li onClick={closeHandler}>About Us</li>
                </Link>
                <Link to="/contact">
                  <li onClick={closeHandler}>Contact Us</li>
                </Link> */}
              {/* </ul> */}
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </div>
    </header>
  );
};

export default Header;
