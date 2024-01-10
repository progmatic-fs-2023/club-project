import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <main>
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="position-relative w-100 object-fit-cover"
          src=".\src\assets\contact_bg.webp"
          alt="country club"
          height="850px"
        />

        <div className="position-absolute d-flex flex-md-row flex-column align-items-center justify-content-center">
          <Col xs={11} md={4} lg={4} className="mt-5 mt-md-0 mb-md-0">
            <h2 className="text-white fw-bold display-2">Did you have any questions left?</h2>
            <h4 className="text-white display-5 my-3 ">Get in touch with us.</h4>
          </Col>
          <Col xs={11} md={6} lg={5} className="offset-md-1">
            <form className="mt-md-5 d-flex flex-column bg-dark bg-opacity-50 p-5 w-md-75">
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
                  />
                </label>
              </div>
              <div className="d-grid">
                <Button type="button" className="btn btn-lg m-1 text-white">
                  Send Now
                </Button>
              </div>
            </form>
          </Col>
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
    </main>
  );
}

export default ContactUs;
