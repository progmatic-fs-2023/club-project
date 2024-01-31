import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { API_URL } from '../constants';

function RegistrationModal({ showButton }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = async (values) => {
    try {
      await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      // console.error('Network error:', error);
    }
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .matches(/^[A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű]+$/, 'The field cannot contain numbers!')
      .required('First name is a required field!'),
    lastName: yup
      .string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .matches(/^[A-Za-zÁáÉéÍíÓóÖöŐőÚúÜüŰű]+$/, 'The field cannot contain numbers!')
      .required('Last name is a required field!'),
    gender: yup.string().required('Gender is a required field!'),
    username: yup
      .string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Username is a required field!'),
    password1: yup
      .string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Must contain at least one letter and one number')
      .required('Password is a required field!'),
    password2: yup
      .string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .oneOf([yup.ref('password1'), null], 'Passwords must match!')
      .required('Confirm password is a required field!'),
    email: yup.string().email('Invalid email address!').required('Email is a required field!'),
    phoneNumber: yup
      .string()
      .length(12, 'Invalid length!')
      .matches(/^\+?[0-9]{1,}$/g, 'Invalid phone number!')
      .notRequired(),
    membership: yup.string().required('Membership is a required field!'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    newsletter: yup.bool().default(false),
  });

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
      <Formik
        validateOnChange
        validationSchema={schema}
        onSubmit={handleFormSubmit}
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          username: '',
          password1: '',
          password2: '',
          email: '',
          phoneNumber: '',
          membership: '',
          terms: false,
          newsletter: false,
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4">
                    <Form.Label>First name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Last name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                      isInvalid={touched.lastName && !!errors.lastName}
                    />

                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Gender *</Form.Label>
                    <Form.Select
                      type="text"
                      name="gender"
                      value={values.gender}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.gender && !errors.gender}
                      isInvalid={touched.gender && !!errors.gender}
                    >
                      <option value="">Select one</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Username *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                      isInvalid={touched.username && !!errors.username}
                    />

                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control
                      type="password"
                      name="password1"
                      value={values.password1}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.password1 && !errors.password1}
                      isInvalid={touched.password1 && !!errors.password1}
                    />
                    <Form.Text muted>
                      Your password must be 8-20 characters long, contain letters and numbers.
                    </Form.Text>

                    <Form.Control.Feedback type="invalid">{errors.password1}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Confirm Password *</Form.Label>
                    <Form.Control
                      type="password"
                      name="password2"
                      value={values.password2}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.password2 && !errors.password2}
                      isInvalid={touched.password2 && !!errors.password2}
                    />

                    <Form.Control.Feedback type="invalid">{errors.password2}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4">
                    <Form.Label>Email *</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="email@gmail.com"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="+36205433670"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={
                        touched.phoneNumber && !errors.phoneNumber && values.phoneNumber !== ''
                      }
                      isInvalid={
                        touched.phoneNumber && !!errors.phoneNumber && values.phoneNumber !== ''
                      }
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <OverlayTrigger overlay={<Tooltip>SEE MORE</Tooltip>}>
                      <Form.Label>
                        <NavLink
                          className="px-1 text-secondary fw-bold"
                          target="_blank"
                          to="/membership"
                        >
                          {' '}
                          Membership *{' '}
                        </NavLink>{' '}
                      </Form.Label>
                    </OverlayTrigger>
                    <Form.Select
                      type="text"
                      name="membership"
                      value={values.membership}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.membership && !errors.membership}
                      isInvalid={touched.membership && !!errors.membership}
                    >
                      <option value="">Select one</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="platinum">Platinum</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.membership}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Group controlId="termsCheckbox">
                    <Form.Check
                      required
                      name="terms"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      type="checkbox"
                      label={
                        <span>
                          Agree to
                          <a
                            href="../src/assets/the_club_terms_and_conditions.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1 text-secondary fw-bold"
                          >
                            terms and conditions
                          </a>
                        </span>
                      }
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    name="newsletter"
                    label="Need newsletter"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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
                  if (isValid) {
                    handleClose();
                    handleSubmit();
                  }
                }}
                disabled={!isValid}
              >
                Sign up
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </>
  );
}

RegistrationModal.propTypes = {
  showButton: PropTypes.string.isRequired,
};

export default RegistrationModal;
