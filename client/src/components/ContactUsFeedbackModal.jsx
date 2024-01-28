import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function ContactUsFeedbackModal({ smShow, setSmShow }) {
  useEffect(() => {
    let timeoutId;

    if (smShow) {
      timeoutId = setTimeout(() => {
        setSmShow(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [smShow, setSmShow]);

  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Email sent failed!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill in all fields!</p>
      </Modal.Body>
    </Modal>
  );
}

ContactUsFeedbackModal.propTypes = {
  smShow: PropTypes.bool.isRequired,
  setSmShow: PropTypes.func.isRequired,
};

export default ContactUsFeedbackModal;
