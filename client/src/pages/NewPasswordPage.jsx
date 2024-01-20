import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';

function NewPasswordPage() {
  const [inputs, setInputs] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const myQueryParam = url.searchParams.get('email');

    setInputs((prevInputs) => ({ ...prevInputs, email: myQueryParam }));
  }, []);

  const handleClose = () => {
    setInputs({
      email: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleSend = () => {
    if (inputs.newPassword === inputs.confirmPassword) {
      setErrorMessage('');
    } else {
      setErrorMessage('The two passwords do not match.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = async () => {
    // console.log(inputs);

    try {
      await fetch(`${API_URL}/api/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
    } catch (error) {
      // console.error('Network error:', error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Enter Passwords</h2>
      <div className="mb-3">
        <label htmlFor="passwordInput">
          Your new password:
          <input
            name="newPassword"
            type="password"
            value={inputs.newPassword}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="password1Input">
          Confirm your password:
          <input
            name="confirmPassword"
            type="password"
            value={inputs.confirmPassword}
            onChange={handleChange}
          />
        </label>
      </div>
      {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          handleSubmit();
          handleSend();
          handleClose();
        }}
      >
        Send
      </button>
    </div>
  );
}

export default NewPasswordPage;
