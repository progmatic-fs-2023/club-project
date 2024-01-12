import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button, Modal, Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

function Event({ eventsList }) {
  const { eventName } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reservationAccepted, setReservationAccepted] = useState(false);
  const [reservedEvents, setReservedEvents] = useState([]);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const event = eventsList.find((item) => item.name === eventName);

  const findEventById = (eventId) => eventsList.find((item) => item.id === eventId);

  let eventPrev = {};

  if (event.id === 1) {
    eventPrev = findEventById(eventsList.length);
  } else {
    eventPrev = findEventById(event.id - 1);
  }

  let eventNext = {};

  if (event.id === eventsList.length) {
    eventNext = findEventById(1);
  } else {
    eventNext = findEventById(event.id + 1);
  }

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const [month, day] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
    return `${day} ${month}`;
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  const startDate = formatDate(event.startTime);
  const startTime = formatTime(event.startTime);
  const endTime = formatTime(event.endTime);

  const handleReserveClick = () => {
    setShowModal(true);
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleConfirmReserve = () => {
    setReservedEvents([...reservedEvents, selectedEvent.id]);
    setShowModal(false);
    setReservationAccepted(true);
    setShowThankYouModal(true);
  };

  const isEventReserved = reservedEvents.includes(event.id);

  const handleNextClick = () => {
    const nextEventId = event.id === eventsList.length ? 1 : event.id + 1;
    const nextEvent = findEventById(nextEventId);
    setSelectedEvent(nextEvent);
  };

  const handlePrevClick = () => {
    const prevEventId = event.id === 1 ? eventsList.length : event.id - 1;
    const prevEvent = findEventById(prevEventId);
    setSelectedEvent(prevEvent);
  };

  useEffect(() => {
    setSelectedEvent(event);
    setReservationAccepted(false);
    setShowThankYouModal(false);
  }, [eventName]);

  return (
    <>
      <Image className="header-image w-100 object-fit-cover" src={event.headerImg} />
      <div className="bg-secondary bg-opacity-25 p-5 d-flex flex-column align-items-center">
        <h1
          className="py-1 fw-bold border-5 border-bottom border-warning"
          style={{ color: '#0d2241' }}
        >
          {event.name}{' '}
        </h1>
        <div className="d-flex flex-column align-items-center" style={{ color: '#0d2241' }}>
          <div className="fs-3 fw-bold text-uppercase">{startDate}</div>
          <div className="fs-6 fw-bold">
            {startTime} - {endTime}
          </div>
        </div>
        <div className="p-3 d-flex justify-content-center">
          {isEventReserved ? (
            <span className="text-muted fs-5 max-vw-25">Reserved</span>
          ) : (
            <Button className="btn-primary fs-5 max-vw-25" onClick={handleReserveClick}>
              Reserve
            </Button>
          )}
        </div>
        <Nav className="d-flex justify-content-evenly">
          <Nav.Link as={NavLink} to={`/events/${eventPrev.name}`} onClick={handlePrevClick}>
            <Button className="btn-primary fs-5 max-vw-25">Prev</Button>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/events">
            <Button className="btn-primary fs-5 max-vw-25">Events</Button>
          </Nav.Link>
          <Nav.Link as={NavLink} to={`/events/${eventNext.name}`} onClick={handleNextClick}>
            <Button className="btn-primary fs-5 max-vw-25">Next</Button>
          </Nav.Link>
        </Nav>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-3">
          <Image className="w-25 h-25 mx-3 object-fit-cover" src={event.eventImg} rounded />
          <div className="px-3">
            <Tabs defaultActiveKey="moreDetails" className="mb-3">
              <Tab eventKey="moreDetails" title="More details">
                {event.moreDetails}
              </Tab>
              <Tab eventKey="moreDetails1" title="More details">
                {event.moreDetails}
              </Tab>
              <Tab eventKey="moreDetails2" title="More details">
                {event.moreDetails}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {reservationAccepted
              ? 'Thank you! We accepted your reservation'
              : `Are you sure you want to attend ${
                  selectedEvent ? selectedEvent.name : 'this'
                } event?`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reservationAccepted
            ? 'Your reservation has been accepted and cannot be withdrawn.'
            : 'Your reservation will be final and cannot be withdrawn.'}
        </Modal.Body>
        <Modal.Footer>
          {reservationAccepted ? (
            <Button variant="primary" onClick={() => setShowThankYouModal(true)}>
              Close
            </Button>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={handleConfirmReserve}
                style={{ marginRight: 'auto' }}
              >
                Yes
              </Button>
              <Button variant="secondary" onClick={handleCloseModal} style={{ marginLeft: 'auto' }}>
                No
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showThankYouModal} onHide={() => setShowThankYouModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your reservation was successful.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowThankYouModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

Event.propTypes = {
  eventsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      startTime: PropTypes.string,
      headerImg: PropTypes.string,
      eventImg: PropTypes.string,
      moreDetails: PropTypes.string,
      endTime: PropTypes.string,
    }),
  ).isRequired,
};

export default Event;
