import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function NewPasswordEmailFeedbackModal({
  smShowEmailSentModal,
  setSmShowEmailSentModal,
  errorMessage,
}) {
  useEffect(() => {
    let timeoutId;

    if (smShowEmailSentModal) {
      timeoutId = setTimeout(() => {
        setSmShowEmailSentModal(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [smShowEmailSentModal, setSmShowEmailSentModal]);

  return (
    <Modal
      size="sm"
      show={smShowEmailSentModal}
      onHide={() => setSmShowEmailSentModal(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header
        className={
          errorMessage
          /* ? 'text-danger d-flex justify-content-center'
            : 'text-success d-flex justify-content-center' */
        }
      >
        <Modal.Title>{errorMessage}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

NewPasswordEmailFeedbackModal.propTypes = {
  smShowEmailSentModal: PropTypes.bool.isRequired,
  setSmShowEmailSentModal: PropTypes.func.isRequired,
  errorMessage: PropTypes.string, // Prop hozzáadása az error üzenetnek
};

NewPasswordEmailFeedbackModal.defaultProps = {
  errorMessage: '',
};
export default NewPasswordEmailFeedbackModal;
