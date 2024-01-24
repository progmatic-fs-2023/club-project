import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminBooking() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState('');

  useEffect(() => {
    const fetchBookingById = async () => {
      try {
        // const response = await fetch(`${API_URL}/api/bookings/1`);
        const response = await fetch(`${API_URL}/api/bookings/${bookingId}`);
        const result = await response.json();
        setBooking(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchBookingById();
  }, []);

  return (
    <main className="main-container p-5 text-dark">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin/bookings" className="text-dark">
              Bookings
            </a>
          </li>
        </ol>
      </nav>

      <Row>
        <div className="row">
          <div className="d-flex flex-row justify-content-between align-items-start">
            <div className="d-flex align-items-center">
              <div className="m-2">
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">BOOKING ID</div>
          <Form.Control
            type="text"
            name="bookingId"
            className="bg-white border-info"
            value={booking.bookingId}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">MEMBER ID</div>
          <Form.Control
            type="text"
            name="memberId"
            className="bg-white border-info"
            value={booking.member_id}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">FIRST NAME</div>
          <Form.Control
            type="text"
            name="username"
            className="bg-white border-info"
            value={booking.first_name}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">LAST NAME</div>
          <Form.Control
            type="text"
            name="username"
            className="bg-white border-info"
            value={booking.last_name}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">USERNAME</div>
          <Form.Control
            type="text"
            name="username"
            className="bg-white border-info"
            value={booking.username}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">EVENT ID</div>
          <Form.Control
            type="text"
            name="eventId"
            className="bg-white border-info"
            value={booking.event_id}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">EVENT NAME</div>
          <Form.Control
            type="text"
            name="eventId"
            className="bg-white border-info"
            value={booking.event_name}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">START TIME</div>
          <Form.Control
            type="text"
            name="eventId"
            className="bg-white border-info"
            value={booking.start_time}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">END TIME</div>
          <Form.Control
            type="text"
            name="eventId"
            className="bg-white border-info"
            value={booking.end_time}
            readOnly
          />
        </Col>
      </Row>
    </main>
  );
}

export default AdminBooking;
