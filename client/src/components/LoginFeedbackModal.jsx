import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function LoginFeedbackModal({ smShow, setSmShow }) {
  useEffect(() => {
    let timeoutId;

    if (smShow) {
      timeoutId = setTimeout(() => {
        setSmShow(false);
      }, 2000);
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
        <Modal.Title className="text-danger">Login failed!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The username or password is incorrect. Please try again.</p>
      </Modal.Body>
    </Modal>
  );
}

LoginFeedbackModal.propTypes = {
  smShow: PropTypes.bool.isRequired,
  setSmShow: PropTypes.func.isRequired,
};

export default LoginFeedbackModal;
