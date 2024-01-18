import React, { useState } from 'react';

function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSend = () => {
    if (newPassword === confirmPassword) {
      setErrorMessage('');
    } else {
      setErrorMessage('The two passwords do not match.');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Enter Passwords</h2>
      <div className="mb-3">
        <label htmlFor="passwordInput">
          Your new password:
          <input
            name="passwordInput"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="password1Input">
          Confirm your password:
          <input
            name="password1Input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default NewPasswordPage;
