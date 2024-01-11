import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';

function RegistrationModal({ showButton }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      console.log(JSON.stringify(inputs));

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <Button
        style={{ display: `${showButton}` }}
        className="fs-5 max-vw-25 bg-secondary"
        variant="outline-light"
        onClick={handleShow}
      >
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel label="First name *" className="mb-3">
                <Form.Control
                  name="Firstname"
                  value={inputs.firstName || ''}
                  onChange={handleChange}
                  type="text"
                  placeholder="First name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Last name *" className="mb-3">
                <Form.Control
                  name="Lastname"
                  value={inputs.lastName || ''}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Gender *">
                <Form.Select
                  name="gender"
                  value={inputs.gender || ''}
                  onChange={handleChange}
                  aria-label="Floating label select example"
                >
                  <option>Select one</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel label="Username *" className="mb-3">
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
              <FloatingLabel label="Email address *" className="mb-3">
                <Form.Control
                  name="email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Password *" className="mb-3">
                <Form.Control
                  name="password1"
                  value={inputs.password1 || ''}
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
              </FloatingLabel>
              <Form.Text muted>
                Your password must be 8-20 characters long, contain letters and numbers.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Password again *" className="mb-3">
                <Form.Control
                  name="password2"
                  value={inputs.password2 || ''}
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
              </FloatingLabel>
              <Form.Text muted>
                Your password must be 8-20 characters long, contain letters and numbers.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Phone number" className="mb-3">
                <Form.Control
                  name="phonenumber"
                  value={inputs.phoneNumber || ''}
                  onChange={handleChange}
                  type="text"
                  placeholder="phone number"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                name="terms"
                onChange={handleChange}
                aria-label="option 1"
                label="I accept the terms of use. *"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                name="newsletter"
                onChange={handleChange}
                aria-label="option 1"
                label="I would like to receive a newsletter."
              />
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted>
              * mandatory field
            </Form.Text>
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
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

RegistrationModal.propTypes = {
  showButton: PropTypes.string.isRequired,
};

export default RegistrationModal;
