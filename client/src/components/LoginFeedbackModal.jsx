import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function LoginFeedbackModal({ smShow, setSmShow }) {
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
  smShow: PropTypes.string.isRequired,
  setSmShow: PropTypes.func.isRequired,
};

export default LoginFeedbackModal;
