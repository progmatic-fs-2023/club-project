import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import img1 from '../assets/gallery/img1.webp';
import img2 from '../assets/gallery/img2.webp';
import img3 from '../assets/gallery/img3.webp';
import img4 from '../assets/gallery/img4.webp';
import img5 from '../assets/gallery/img5.webp';
import img6 from '../assets/gallery/img6.webp';
import img7 from '../assets/gallery/img7.webp';
import img8 from '../assets/gallery/img8.webp';
import img9 from '../assets/gallery/img9.webp';
import img10 from '../assets/gallery/img10.webp';
import img11 from '../assets/gallery/img11.webp';
import img12 from '../assets/gallery/img12.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5 pt-5">
      <h1 className="mb-4 pb-2 yeseva-font mt-5 fw-bold border-bottom border-warning border-3 w-25 header-underline">
        Gallery
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {imagePaths.map((image, index) => (
          <div
            key={image}
            className="col mb-4"
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            onKeyPress={() => openModal(index)}
          >
            <img
              src={image}
              alt={`img-${index}`}
              className="img-fluid rounded shadow-sm"
              style={{ width: '100%', height: '300px', cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>The DOOR Club</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={imagePaths[selectedImageIndex]}
            alt="preview"
            className="img-fluid rounded"
            style={{ width: '100%', height: '100%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={goToPrevImage}>
            Previous
          </Button>
          <Button variant="primary" onClick={goToNextImage}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Gallery;
