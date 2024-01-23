import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminServicesBooking() {
  const { serviceBookingId } = useParams();
  const [serviceBooking, setServiceBooking] = useState('');

  useEffect(() => {
    const fetchServiceBookingById = async () => {
      try {
        const response = await fetch(`${API_URL}/api/servicebookings/${serviceBookingId}`);
        const result = await response.json();
        setServiceBooking(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchServiceBookingById();
  }, []);

  return (
    <main className="main-container p-5 text-dark">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin/servicebookings" className="text-dark">
              Service Bookings
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
            value={serviceBooking.serviceBookingId}
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
            value={serviceBooking.memberId}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">FIRST NAME</div>
          <Form.Control
            type="text"
            name="firstName"
            className="bg-white border-info"
            value={serviceBooking.firstName}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">LAST NAME</div>
          <Form.Control
            type="text"
            name="lastName"
            className="bg-white border-info"
            value={serviceBooking.lastName}
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
            value={serviceBooking.username}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">SERVICE ID</div>
          <Form.Control
            type="text"
            name="serviceId"
            className="bg-white border-info"
            value={serviceBooking.serviceId}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">SERVICE NAME</div>
          <Form.Control
            type="text"
            name="serviceName"
            className="bg-white border-info"
            value={serviceBooking.serviceName}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">TIME SLOT ID</div>
          <Form.Control
            type="text"
            name="serviceName"
            className="bg-white border-info"
            value={serviceBooking.timeSlotId}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">START TIME</div>
          <Form.Control
            type="text"
            name="startTime"
            className="bg-white border-info"
            value={serviceBooking.startTime}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4} xl={4} className="m-2">
          <div className="fw-bold">END TIME</div>
          <Form.Control
            type="text"
            name="endTime"
            className="bg-white border-info"
            value={serviceBooking.endTime}
            readOnly
          />
        </Col>
      </Row>
    </main>
  );
}

export default AdminServicesBooking;
