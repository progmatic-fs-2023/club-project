import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload(event) {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      //   fetch('url', {
      //     method: 'POST',
      //     body: formData,
      //   })
      //     .then((response) => response.json())
      //     .then((result) => {
      //       //
      //     })
      //     .catch((error) => {
      //       //
      //     });
      // } else {
      //   console.log('No file selected');
    }
  }

  return (
    <div className="profile-buttons d-flex gap-3">
      <label htmlFor="photo" className="btn btn-primary">
        Change photo
        <input type="file" id="photo" name="file" onChange={handleFile} className="d-none" />
      </label>
      <button type="submit" onClick={handleUpload} className="btn btn-outline-primary">
        Upload
      </button>
    </div>
  );
}
