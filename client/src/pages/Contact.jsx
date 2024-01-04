import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="d-flex flex-grow-1 justify-content-center">
      <Container className="py-5 bg-light shadow-lg block-example border border-dark rounded">
        <Row>
          <Col md={6}>
            <h3 className="text-center mt-3">Contact</h3>
            <form className=" mt-5">
              <div className="mb-3 text-center">
                <label htmlFor="nameInput">
                  Name
                  <input type="text" className="form-control" id="nameInput" />
                </label>
              </div>
              <div className="mb-3 text-center">
                <label htmlFor="subjectInput" className="form-label">
                  Subject
                  <input type="text" className="form-control" id="subjectInput" />
                </label>
              </div>
              <div className="mb-3 text-center">
                <label htmlFor="messageInput" className="form-label">
                  Message
                  <textarea type="text" className="form-control" id="messageInput" rows="3" />
                </label>
              </div>
              <div className="mb-3 text-center">
                <button type="button" className="btn btn-primary">
                  Send Now
                </button>
              </div>
            </form>
          </Col>
          <Col md={6} className="text-center">
            <h3 className="text-center m-3">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.1925793262153!2d18.356517600210477!3d47.21089836107917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f60ab8becdff%3A0x140aa3cfaadddba2!2zU3rDqWtlc2ZlaMOpcnbDoXIsIMOaaiBDc8Ozcmkgw7p0IDE1NiwgODAwMA!5e0!3m2!1shu!2shu!4v1702920539946!5m2!1shu!2shu"
              className="pb-2 w-75"
              height="400"
              title="map"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
