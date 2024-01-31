import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button, Modal, Nav } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useAuth } from '../contexts/AuthContext';
import { API_URL } from '../constants';
import { formatTime, formatDateShort } from '../utils/dateUtils';

function Event() {
  const { eventName } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reservationAccepted, setReservationAccepted] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [event, setEvent] = useState({});
  const [isBookingAlreadyExists, setIsBookingAlreadyExists] = useState();
  const { user, isAuthenticated } = useAuth();
  const [availableSeats, setAvailableSeats] = useState(0);

  const { id } = user;

  const fetchData = async () => {
    try {
      const eventResponse = await fetch(`${API_URL}/api/events/${eventName}`);
      const eventData = await eventResponse.json();

      if (eventData) {
        setEvent(eventData);

        const availableSeatsResponse = await fetch(
          `${API_URL}/api/events/available-seats/${eventData.id}`,
        );
        const availableSeatsData = await availableSeatsResponse.json();
        if (availableSeatsData) {
          setAvailableSeats(availableSeatsData.availableSeats.modified_available_seats);
        }

        if (availableSeats && isAuthenticated) {
          const bookedEventResponse = await fetch(
            `${API_URL}/api/booking/book/${id}?eventId=${eventData.id}`,
          );
          const bookedEventData = await bookedEventResponse.json();

          if (bookedEventData) {
            setIsBookingAlreadyExists(bookedEventData.exists);
          }
        }
      }
    } catch (error) {
      // console.error('Error while loading event data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [eventName, availableSeats, showThankYouModal]);

  const startDate = formatDateShort(event.startTime);
  const startTime = formatTime(event.startTime);
  const endTime = formatTime(event.endTime);

  const handleReserveClick = () => {
    try {
      setShowModal(true);
      setSelectedEvent(event);
    } catch (error) {
      // console.error('Error during reservation:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleConfirmReserve = async () => {
    try {
      const eventId = selectedEvent.id;
      if (!eventId) {
        return;
      }

      const response = await fetch(`${API_URL}/api/booking/events/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
        credentials: 'include',
      });

      await response.json();

      document.cookie = `eventId=${eventId}; path=/`;

      setShowModal(false);
      setReservationAccepted(true);
      setShowThankYouModal(true);
    } catch (error) {
      // console.error('Error during reservation confirmation:', error);
    }
  };

  useEffect(() => {
    setSelectedEvent(event);
    setReservationAccepted(false);
    setShowThankYouModal(false);
  }, [eventName]);

  const today = new Date();
  const isExpiredEvent = new Date(event.endTime) <= today;
  const isSoldOut = event.availableSeats === 0;

  const renderContent = () => {
    if (!isAuthenticated) {
      return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">LOG IN TO RESERVE!</Tooltip>}>
          <span className="d-inline-block">
            <Button
              className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1"
              disabled
              style={{ pointerEvents: 'none' }}
            >
              RESERVE <MdOutlineCalendarMonth />
            </Button>
          </span>
        </OverlayTrigger>
      );
    }

    let buttonText = 'RESERVE';
    let isCursorEnabled = true;

    if (!user.isPayed) {
      buttonText = 'NOT PAYED YET';
      isCursorEnabled = false;
    } else if (isBookingAlreadyExists) {
      buttonText = 'RESERVED';
      isCursorEnabled = false;
    } else if (isExpiredEvent) {
      buttonText = 'EXPIRED';
      isCursorEnabled = false;
    } else if (isSoldOut) {
      buttonText = 'SOLD OUT';
      isCursorEnabled = false;
    }

    return (
      <Button
        className="fs-5 max-vw-25 d-flex align-items-center gap-1"
        onClick={handleReserveClick}
        disabled={isSoldOut || isExpiredEvent || isBookingAlreadyExists || !user.isPayed}
        style={{ pointerEvents: isCursorEnabled ? 'pointer' : 'none' }}
      >
        {buttonText}{' '}
        {!user.isPayed || isBookingAlreadyExists || isSoldOut ? '' : <MdOutlineCalendarMonth />}
      </Button>
    );
  };

  const availableSeatsStyle = availableSeats > 0 ? { color: 'green' } : { color: 'red' };

  return (
    <>
      <div className="d-flex flex-column">
        <Image className="header-image w-100 object-fit-cover" src={event.headerImg} />
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-5">
          <Image className="w-25 mx-3 d-lg-block d-none" src={event.eventImg} rounded />
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
            <div className="px-3 pt-2 fw-bold">
              AVAILABLE SEATS:
              <span style={availableSeatsStyle}>
                {isExpiredEvent ? ' EXPIRED' : ` ${availableSeats}`}
              </span>
            </div>
            <div className="p-3 d-flex justify-content-center">{event.moreDetails}</div>

            <div className="p-3 d-flex justify-content-center flex-wrap">
              <div className="p-3 d-flex align-items-center">{renderContent()}</div>
              <div className="p-3">
                <Nav className="d-flex justify-content-evenly">
                  <Nav.Link as={NavLink} to="/events">
                    <Button className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1">
                      EVENTS <RiArrowGoBackLine />
                    </Button>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
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
            : 'Your reservation will be final.'}
        </Modal.Body>
        <Modal.Footer>
          {reservationAccepted ? (
            <Button variant="primary" onClick={() => setShowThankYouModal(true)}>
              Close
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                No
              </Button>
              <Button variant="success" onClick={handleConfirmReserve}>
                Yes
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showThankYouModal} onHide={() => setShowThankYouModal(false)}>
        <Modal.Header>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your reservation was successful.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowThankYouModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Event;
