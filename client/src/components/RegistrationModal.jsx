import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function RegistrationModal() {
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
    // alert(inputs);
  };

  return (
    <>
      <Button className='fs-4 max-vw-25' variant="outline-light" onClick={handleShow}>
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
                  name="firstname"
                  value={inputs.firstname || ''}
                  onChange={handleChange}
                  type="text"
                  placeholder="First name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Last name *" className="mb-3">
                <Form.Control
                  name="lastname"
                  value={inputs.lastname || ''}
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
                  value={inputs.phonenumber || ''}
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

export default RegistrationModal;
