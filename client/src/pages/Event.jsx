import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button, Modal, Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { API_URL } from '../constants';

function Event() {
  const { eventName } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reservationAccepted, setReservationAccepted] = useState(false);
  const [reservedEvents, setReservedEvents] = useState([]);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEventByName = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events/${eventName}`);
        const result = await response.json();

        setEvent(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchEventByName();
  }, [eventName]);

  /*  let eventPrev = [];

  if (event.id === 1) {
    eventPrev = events.find((item) => item.id === events.length);
  } else {
    eventPrev = events.find((item) => item.id === event.id - 1);
  }

  let eventNext = {};

  if (event.id === events.length) {
    eventNext = events.find((item) => item.id === 1);
  } else {
    eventNext = events.find((item) => item.id === event.id + 1);
  } */

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

    const sendReservationDataToServer = async (eventId) => {
      try {
        const response = await fetch(`${API_URL}/api/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: loggedInUserId,
            eventId: eventId,
          }),
        });
    
        if (response.ok) {
          // console.log('reservation ok.');
        } else {
          // console.error('reservation not ok.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendReservationDataToServer(selectedEvent.id);
  };

  const isEventReserved = reservedEvents.includes(event.id);

  /*   const handleNextClick = () => {
    const nextEventId = event.id === eventsList.length ? 1 : event.id + 1;
    const nextEvent = findEventById(nextEventId);
    setSelectedEvent(nextEvent);
  };

  const handlePrevClick = () => {
    const prevEventId = event.id === 1 ? eventsList.length : event.id - 1;
    const prevEvent = findEventById(prevEventId);
    setSelectedEvent(prevEvent);
  }; */

  useEffect(() => {
    setSelectedEvent(event);
    setReservationAccepted(false);
    setShowThankYouModal(false);
  }, [eventName]);

  return (
    <>
      <div className="d-flex flex-column">
        <Image className="header-image w-100 object-fit-cover" src={event.headerImg} />
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-5">
          <Image className="w-25 mx-3" src={event.eventImg} rounded />
          <div className="px-3">
            <div className="d-flex flex-column align-items-center">
              <h1 className="py-1 fw-bold text-primary border-5 border-bottom border-warning text-center ">
                {event.name}{' '}
              </h1>
              <div className="fs-3 fw-bold text-uppercase">{startDate}</div>
              <div className="fs-6 fw-bold">
                {startTime} - {endTime}
              </div>
            </div>
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
              {/*    <Nav.Link as={NavLink} to={`/events/${eventPrev.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Prev</Button>
            </Nav.Link> */}
              <Nav.Link as={NavLink} to="/events">
                <Button className="btn-primary fs-5 max-vw-25">Events</Button>
              </Nav.Link>
              {/*  <Nav.Link as={NavLink} to={`/events/${eventNext.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Next</Button>
            </Nav.Link> */}
            </Nav>
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

export default Event;
