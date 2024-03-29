import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import ForgotPasswordModal from './ForgotPasswordModal';
import { useAuth } from '../contexts/AuthContext';
import LoginFeedbackModal from './LoginFeedbackModal';

function LoginModal({ showButton, setShowButton, setShowButtonNone }) {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const { authenticateUser, login } = useAuth();
  const [smShow, setSmShow] = useState(false);

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleShowForgotPasswordModal = () => setShowForgotPasswordModal(true);
  const handleCloseForgotPasswordModal = () => setShowForgotPasswordModal(false);

  const handleClose = () => {
    setInputs({});
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (values) => {
    try {
      await authenticateUser(values);
      setShowButton();
      login();
    } catch (error) {
      setSmShow(true);
      setShowButtonNone();
    }
  };

  return (
    <>
      <Button
        style={{ display: `${showButton}` }}
        className="mx-3 max-vw-25 fs-5"
        variant="outline-light"
        onClick={handleShow}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel label="Username" className="mb-3">
                <Form.Control
                  name="username"
                  value={inputs.username || ''}
                  onChange={handleChange}
                  type="text"
                  placeholder="Username"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  name="password1"
                  value={inputs.password1 || ''}
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
          <p className="text-center">
            <Button
              variant="link"
              onClick={() => {
                handleShowForgotPasswordModal();
                handleClose();
              }}
            >
              Forgot Password?
            </Button>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleSubmit(inputs);
              handleClose();
            }}
          >
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
      <ForgotPasswordModal
        show={showForgotPasswordModal}
        handleClose={handleCloseForgotPasswordModal}
      />
      <LoginFeedbackModal smShow={smShow} setSmShow={setSmShow} />
    </>
  );
}

LoginModal.propTypes = {
  showButton: PropTypes.string.isRequired,
  setShowButton: PropTypes.func.isRequired,
  setShowButtonNone: PropTypes.func.isRequired,
};

export default LoginModal;
