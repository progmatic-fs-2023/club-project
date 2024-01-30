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
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch(`${API_URL}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.text();
        setErrorMessage(`${data}`);
        setSmShowEmailSentModal(true);
        /* if (data.success) {
          console.log('Password reset successful.');
        } else {
          setErrorMessage(data.message);
          setSmShowEmailSentModal(true);
        } */
      } else {
        const text = await response.text();
        setErrorMessage(`${text}`);
        setSmShowEmailSentModal(true);
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      setSmShowEmailSentModal(true);
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
              // setSmShowEmailSentModal(true);
            }}
          >
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
      <NewPasswordEmailFeedbackModal
        smShowEmailSentModal={smShowEmailSentModal}
        setSmShowEmailSentModal={setSmShowEmailSentModal}
        errorMessage={errorMessage}
      />
    </>
  );
}

ForgotPasswordModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ForgotPasswordModal;
