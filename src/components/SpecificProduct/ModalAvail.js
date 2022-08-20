import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Magnifier from 'react-magnifier';
import './ModalAvail.css';

import grid from '../../assets/images/VisualBoards/Finishes/cbNmb.jpg';
import polarGrid from '../../assets/images/VisualBoards/Finishes/grid_polar_grid.jpg';
import staffLines from '../../assets/images/VisualBoards/Finishes/grid_staff_lines.jpg';

const ModalAvail = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleClose}
        dialogClassName="hero-modal-width"
        contentClassName="hero-modal-height"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel
            className="product_carousel"
            indicators={props.indicators}
            controls={props.controls}
            variant="dark"
          >
            <Carousel.Item>
              <Magnifier
                src={grid}
                zoomFactor={1.2}
                // mgShape={'square'}
                mgHeight={250}
                mgWidth={250}
              />
              {/* <img src={grid} alt="grid" /> */}
            </Carousel.Item>
          </Carousel>

          {/* <div>
            <img src={grid} alt="grid" />
            <img src={polarGrid} alt="grid" />
            <img src={grid} alt="grid" />
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAvail;
