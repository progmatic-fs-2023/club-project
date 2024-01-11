import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    nameInput: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Request successful');
      } else {
        console.error('Request unsuccessful');
      }
    } catch (error) {
      console.error('An error occurred during the request:', error);
    }
  };

  return (
    <div>
      <img
        className="position-relative w-100"
        src=".\src\assets\contact_bg.webp"
        alt="country club"
        height="850px"
      />
      <div className="container pt-5 position-absolute top-50 start-50 translate-middle">
        <div className="row align-items-center py-5">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="text-white fw-bold display-2">Did you have any questions left?</h2>
            <h4 className="text-white display-5 my-3 ">Get in touch with us.</h4>
          </div>
          <div className=" col-md-5 offset-md-1">
            <form
              onSubmit={handleSubmit}
              className="mt-5 d-flex flex-column bg-dark bg-opacity-50 p-5"
            >
              <h3 className="text-white">Contact us</h3>
              <div className="mb-3">
                <label
                  htmlFor="nameInput"
                  className="d-flex flex-column align-items-start m-1 text-white"
                >
                  Name
                  <input
                    type="text"
                    name="nameInput"
                    id="nameInput"
                    className="form-control rounded-0 border-0 p-2"
                    placeholder="Your Full Name"
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="emailInput"
                  className="d-flex flex-column align-items-start m-1 text-white"
                >
                  Email
                  <input
                    type="email"
                    name="email"
                    id="emailInput"
                    className="form-control rounded-0 border-0 p-2"
                    placeholder="Your Email Address"
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="subjectInput"
                  className="d-flex flex-column align-items-start m-1 text-white"
                >
                  Subject
                  <input
                    type="text"
                    name="subject"
                    id="subjectInput"
                    className="form-control rounded-0 border-0 p-2"
                    placeholder="Add subject"
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="messageInput"
                  className="d-flex flex-column align-items-start m-1 text-white"
                >
                  Message
                  <textarea
                    type="text"
                    name="message"
                    rows="3"
                    id="messageInput"
                    className="form-control rounded-0 border-0 p-2"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="d-grid">
                <Button type="submit" className="btn btn-lg m-1 text-white">
                  Send Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.1925793262153!2d18.356517600210477!3d47.21089836107917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f60ab8becdff%3A0x140aa3cfaadddba2!2zU3rDqWtlc2ZlaMOpcnbDoXIsIMOaaiBDc8Ozcmkgw7p0IDE1NiwgODAwMA!5e0!3m2!1shu!2shu!4v1702920539946!5m2!1shu!2shu"
          className="w-100 "
          height="300"
          title="map"
        />
      </div>
    </div>
  );
}

export default ContactUs;
