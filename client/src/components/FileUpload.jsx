import { useState } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';
import { useAuth } from '../contexts/AuthContext';

export default function FileUpload({ userId }) {
  const [file, setFile] = useState();
  const { setUser } = useAuth();

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  async function handleUpload(event) {
    event.preventDefault();

    if (file) {
      const formData = { filePath: file.name, userId };

      try {
        const response = await fetch(`${API_URL}/api/profile-picture`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();

          setUser({
            id: result.data.id,
            firstName: result.data.first_name,
            lastName: result.data.last_name,
            username: result.data.username,
            gender: result.data.gender,
            email: result.data.email,
            memberImg: result.data.member_img,
            membership: result.data.membership,
            membershipStartTime: result.data.membership_start_time,
            membershipEndTime: result.data.membership_end_time,
            newsletter: result.data.newsletter,
            isVerified: result.data.is_verified,
            isPayed: result.data.is_payed,
            isAdmin: result.data.is_admin,
            password: result.data.password,
            phone: result.data.phone,
          });
          localStorage.setItem('user', JSON.stringify(result.data));
        }
      } catch (error) {
        // console.error('File upload error:', error);
      }
    }
  }

  return (
    <div className="profile-buttons d-flex gap-3">
      <label htmlFor="photo" className="btn btn-primary px-3">
        Select photo
        <input type="file" id="photo" name="file" onChange={handleFile} className="d-none" />
      </label>
      <button type="submit" onClick={handleUpload} className="btn btn-outline-primary px-3">
        Upload
      </button>
    </div>
  );
}

FileUpload.propTypes = {
  userId: PropTypes.number.isRequired,
};
