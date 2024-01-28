import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ConfirmBookingModal({ show, handleClose }) {
  const handleCloseModal = () => {
    handleClose();

    window.location.reload();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reservation Confirmed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your reservation has been confirmed successfully!</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/profile" className="btn btn-primary">
          Go to Profile
        </Link>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmBookingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConfirmBookingModal;
