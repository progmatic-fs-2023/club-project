import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function ContactUsEmailFeedbackModal({ smShowEmailSentModal, setSmShowEmailSentModal }) {
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
      <Modal.Header className="text-success d-flex justify-content-center">
        <Modal.Title>Email sent!</Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

ContactUsEmailFeedbackModal.propTypes = {
  smShowEmailSentModal: PropTypes.bool.isRequired,
  setSmShowEmailSentModal: PropTypes.func.isRequired,
};

export default ContactUsEmailFeedbackModal;
