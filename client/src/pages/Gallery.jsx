import React, { useState } from 'react';
import { Modal, Button, Col, Container } from 'react-bootstrap';
import { GrNext, GrPrevious } from 'react-icons/gr';
import img1 from '../assets/gallery/img1.webp';
import img2 from '../assets/gallery/img2.webp';
import img3 from '../assets/gallery/img3.webp';
import img4 from '../assets/gallery/img4.webp';
import img5 from '../assets/gallery/img5.webp';
import img6 from '../assets/gallery/img6.webp';
import img7 from '../assets/gallery/img7.webp';
import img8 from '../assets/gallery/img8.webp';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.webp';
import img11 from '../assets/gallery/img11.webp';
import img12 from '../assets/gallery/img12.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
  const imagePaths = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const goToPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Container className="m-5 pt-5">
        <h2 className="mb-4 pb-2 yeseva-font mt-5 fw-bold border-bottom border-warning border-3 w-25 header-underline">
          GALLERY
        </h2>
        <div className="m-1 gallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex align-items-center justify-content-center">
          {imagePaths.map((image, index) => (
            <Col
              xs={10}
              md={6}
              lg={3}
              key={image}
              className="mb-4"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyPress={() => openModal(index)}
            >
              <img
                src={image}
                alt={`img-${index}`}
                className="shadow-sm w-100"
                style={{ cursor: 'pointer' }}
              />
            </Col>
          ))}
        </div>

        <Modal show={showModal} onHide={closeModal} className="modal d-flex align-items-center">
          <Modal.Header closeButton>
            <Modal.Title>The DOOR Club</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imagePaths[selectedImageIndex]} alt="preview" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              className="d-flex justify-content-center align-items-center p-3 m-1"
              onClick={goToPrevImage}
            >
              <GrPrevious className="pe-1" />
              PREV
            </Button>
            <Button
              className="d-flex justify-content-center align-items-center p-3 m-1"
              onClick={goToNextImage}
            >
              NEXT
              <GrNext className="ps-1" />
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Gallery;
