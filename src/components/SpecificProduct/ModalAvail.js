import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Magnifier from 'react-magnifier';
import './ModalAvail.css';

const ModalAvail = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
    <>
      <div className="btn_available_box" onClick={handleShow}>
        <div className="btn_available">Available Colors and Finishes</div>
      </div>
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
            {props.availImages.map((avail) => (
              <Carousel.Item key={avail.id}>
                <Magnifier
                  src={avail.image}
                  alt={avail.alt}
                  zoomFactor={1}
                  mgShape={'square'}
                  mgHeight={300}
                  mgWidth={400}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAvail;
