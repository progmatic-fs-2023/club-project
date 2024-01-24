import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

function NewPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  // console.log(isSubmitSuccessful);

  const handleFormSubmit = async (values) => {
    // console.log(values);

    try {
      const urlSearchParams = new URLSearchParams(location.search);
      const emailFromUrl = urlSearchParams.get('email');

      // setIsSubmitSuccessful(true);

      // setTimeout(() => {
      //   navigate('/');
      // }, 5000);

      const response = await fetch(`${API_URL}/api/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, email: emailFromUrl }),
      });
      // console.log(response)
      if (response.ok) {
        setIsSubmitSuccessful(true);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      } else {
        // console.error('Request was not successful:', response.status, response.statusText);
        // Itt más hibakezelést is végezhetsz a response.statusText felhasználásával
      }
    } catch (error) {
      // console.error('Network error:', error);
    }
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
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
  });

  return (
    <div className="d-flex flex-column align-items-center mt-5 py-5">
      <Formik
        validateOnChange
        validationSchema={schema}
        onSubmit={handleFormSubmit}
        initialValues={{
          password1: '',
          password2: '',
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
          <>
            <h2>Enter Passwords</h2>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="d-flex justify-content-center mb-3">
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
            </Form>
            {isSubmitSuccessful && (
              <h3 className="text-success py-2">Password successfully changed!</h3>
            )}
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                if (isValid) {
                  // handleClose();
                  handleSubmit();
                }
              }}
              disabled={!isValid}
            >
              SEND
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
}

export default NewPasswordPage;
