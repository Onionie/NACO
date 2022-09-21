import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    setShowArchitect(false);
  };
  const handleShow = () => setShow(true);

  // In Home Page or not state
  const [inHomepage, setInHomepage] = useState(null);

  // Our Products Dropdown
  const [showProducts, setShowProducts] = useState(false);

  // Architect's Corner Dropdown
  const [showArchitect, setShowArchitect] = useState(false);

  // Our Products Dropdown
  const handleShowProducts = () => {
    if (showProducts === false) {
      setShowProducts(true);
      setShowArchitect(false);
    } else {
      setShowProducts(false);
    }
  };

  // Our Products Dropdown
  const handleShowArchitect = () => {
    if (showArchitect === false) {
      setShowArchitect(true);
      setShowProducts(false);
    } else {
      setShowArchitect(false);
    }
  };

  const handleCloseSidebar = () => {
    setShowProducts(false);
    setShowArchitect(false);
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
                <div onClick={handleCloseSidebar}></div>
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
                    to="/teaching-walls"
                    onClick={handleClose}
                  >
                    Teaching Walls
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/display-cases"
                    onClick={handleClose}
                  >
                    Display Cases
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/wall-systems"
                    onClick={handleClose}
                  >
                    Wall Systems
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Move down sections when Our Products dropdown is clicked */}
                <div
                  className={showProducts ? `translate_down flex_` : `flex_`}
                >
                  <NavDropdown
                    onClick={handleShowArchitect}
                    title="Architect's Corner"
                  >
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      AutoCAD Library
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Installation Instructions
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Product Data
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Specifications
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                      Color Cards
                    </NavDropdown.Item>
                  </NavDropdown>

                  <div
                    className={showArchitect ? `translate_down flex_` : `flex_`}
                  >
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
                </div>
                <div onClick={handleCloseSidebar}></div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </div>
    </header>
  );
};

export default Header;
