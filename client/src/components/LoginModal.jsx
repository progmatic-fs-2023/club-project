import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
