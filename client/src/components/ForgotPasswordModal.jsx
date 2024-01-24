import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';
import NewPasswordEmailFeedbackModal from './NewPasswordEmailFeedbackModal';

function ForgotPasswordModal({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [smShowEmailSentModal, setSmShowEmailSentModal] = useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await fetch(`${API_URL}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        // console.log(data.message);
      } else {
        // console.log(data.message);
      }
    } catch (error) {
      //   console.error(error);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleResetPassword();
              handleClose();
              setEmail('');
              setSmShowEmailSentModal(true);
            }}
          >
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
      <NewPasswordEmailFeedbackModal
        smShowEmailSentModal={smShowEmailSentModal}
        setSmShowEmailSentModal={setSmShowEmailSentModal}
      />
    </>
  );
}

ForgotPasswordModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ForgotPasswordModal;
