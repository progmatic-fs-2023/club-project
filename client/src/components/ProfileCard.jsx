import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import FileUpload from './FileUpload';
import { API_URL } from '../constants';
import { formatDateLong } from '../utils/dateUtils';

// import ProfileCalendar from './ProfileCalendar';

export default function ProfileCard() {
  const { user, isAuthenticated } = useAuth();
  const [bookedEvents, setBookedEvents] = useState([]);
  const [bookedServices, setBookedServices] = useState([]);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const handleShowAllEvents = () => {
    setShowAllEvents((prevState) => !prevState);
  };

  const handleShowAllServices = () => {
    setShowAllServices((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchBookedEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/api/bookings`);
        const result = await response.json();
        setBookedEvents(result);
      } catch (error) {
        // console.error('Error fetching booked events:', error);
      }
    };
    fetchBookedEvents();
  }, []);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/servicebookings`);
        const result = await response.json();
        setBookedServices(result);
      } catch (error) {
        // console.error('Error fetching booked events:', error);
      }
    };
    fetchBookedServices();
  }, []);

  const filteredBookedEvents = bookedEvents.filter((booking) => booking.username === user.username);
  const filteredBookedServices = bookedServices.filter(
    (serviceBooking) => serviceBooking.username === user.username,
  );

  const today = new Date();

  const getCurrentWeekEvents = () => {
    const currentDayOfWeek = today.getDay();

    const startOfWeekDate = new Date(today);
    startOfWeekDate.setHours(0, 0, 0, 0);
    startOfWeekDate.setDate(today.getDate() - currentDayOfWeek);

    const endOfWeekDate = new Date(today);
    endOfWeekDate.setHours(23, 59, 59, 999);
    endOfWeekDate.setDate(today.getDate() + (6 - currentDayOfWeek));

    const eventsInCurrentWeek = filteredBookedEvents.filter((booking) => {
      const eventDate = new Date(booking.start_time);
      eventDate.setHours(0, 0, 0, 0);
      return startOfWeekDate <= eventDate && eventDate <= endOfWeekDate;
    });

    return eventsInCurrentWeek;
  };

  const getCurrentWeekServices = () => {
    const currentDayOfWeek = today.getDay();

    const startOfWeekDate = new Date(today);
    startOfWeekDate.setHours(0, 0, 0, 0);
    startOfWeekDate.setDate(today.getDate() - currentDayOfWeek);

    const endOfWeekDate = new Date(today);
    endOfWeekDate.setHours(23, 59, 59, 999);
    endOfWeekDate.setDate(today.getDate() + (6 - currentDayOfWeek));

    const servicesInCurrentWeek = filteredBookedServices.filter((booking) => {
      const serviceDate = new Date(booking.startTime);
      serviceDate.setHours(0, 0, 0, 0);
      return startOfWeekDate <= serviceDate && serviceDate <= endOfWeekDate;
    });

    return servicesInCurrentWeek;
  };

  const modifiedHeaders = ['Event name', 'Start time', 'End time'];
  const modifiedHeaders2 = ['Service name', 'Start time', 'End time'];

  if (!isAuthenticated || !user) {
    // A felhasználó nincs bejelentkezve
    return <div>User not found or not logged in</div>;
  }

  return (
    <Container fluid className="py-5 mt-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col col-lg-9 col-xl-7">
          <div className="card">
            <div className="rounded-top text-white d-flex flex-row bg-dark profile-card-up">
              <div className="ms-4 mt-5 d-flex flex-column">
                <img
                  src={user.memberImg}
                  alt="Generic placeholder"
                  className="profile-card-img img-fluid img-thumbnail mt-4 mb-2"
                />
              </div>
            </div>
            <div className="p-4 text-black bg-light">
              <div className="d-flex justify-content-between align-items-center text-center pt-5">
                <FileUpload userId={user.id} />
                <Link to="/membership">
                  <button type="submit" className="btn btn-primary profile-membership-btn">
                    Change Membership
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <h4 className="mb-4 text-center">Information</h4>
                <div className="bg-light p-4">
                  <p className="mb-1 fw-bold">
                    Name:
                    <span className="fw-normal">{` ${user.firstName}  ${user.lastName}`} </span>
                  </p>

                  <p className="mb-1 fw-bold">
                    Username: <span className="fw-normal"> {user.username} </span>
                  </p>
                  <p className="mb-1 fw-bold">
                    Email: <span className="fw-normal">{user.email} </span>
                  </p>
                  <p className="mb-0 fw-bold">
                    Gender: <span className="fw-normal">{user.gender} </span>
                  </p>
                  <hr />
                  <p className="mb-1 fw-bold">
                    Membership:<span className="fw-normal"> {user.membership}</span>
                  </p>
                  <p className="mb-1 fw-bold">
                    Membership expires:{' '}
                    <span className="fw-normal">{formatDateLong(user.membershipEndTime)}</span>
                  </p>
                </div>

                <h4 className="my-4 pt-4 text-center">Events</h4>
                <div className="d-flex flex-column align-items-center mt-5 bg-light">
                  <p className="pt-5">Your reservations for this week:</p>

                  <div className="mt-3 d-flex justify-content-center">
                    {getCurrentWeekEvents().length > 0 ? (
                      <div className="border rounded shadow" style={{ backgroundColor: 'white' }}>
                        {getCurrentWeekEvents().map((booking) => (
                          <tr key={booking.id}>
                            {modifiedHeaders.map((header) => (
                              <td className="p-3 text-center" key={`${booking.id}-${header}`}>
                                {header === 'Event name' && (
                                  <div>
                                    <b>{booking.event_name}</b>
                                  </div>
                                )}
                                {header === 'Start time' && (
                                  <div>{formatDateLong(booking.start_time)}</div>
                                )}
                                {header === 'End time' && (
                                  <div>{formatDateLong(booking.end_time)}</div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="text-center shadow p-3 border border-danger rounded mb-2"
                        style={{ backgroundColor: 'white' }}
                      >
                        You have no reservation for any event in this week
                      </div>
                    )}
                  </div>

                  <div className="d-flex p-3">
                    <Button className="m-3" onClick={handleShowAllEvents}>
                      Every booked event
                    </Button>
                  </div>

                  {showAllEvents && (
                    <div className=" d-flex justify-content-center mb-5">
                      {filteredBookedEvents.length > 0 ? (
                        <div className="border rounded shadow" style={{ backgroundColor: 'white' }}>
                          {filteredBookedEvents.map((booking) => (
                            <tr>
                              {modifiedHeaders.map((header) => (
                                <td className="p-3 text-center">
                                  {header === 'Event name' && (
                                    <div>
                                      <div>
                                        <b>{booking.event_name}</b>
                                      </div>
                                    </div>
                                  )}
                                  {header === 'Start time' && (
                                    <div>
                                      <div>{formatDateLong(booking.start_time)}</div>
                                    </div>
                                  )}
                                  {header === 'End time' && (
                                    <div>
                                      <div>{formatDateLong(booking.end_time)}</div>
                                    </div>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </div>
                      ) : (
                        <div
                          className="text-center shadow p-3 border border-danger rounded"
                          style={{ backgroundColor: 'white' }}
                        >
                          You have no reservation for any event
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <h4 className="my-4 text-center pt-4">Services</h4>
                <div className="d-flex flex-column align-items-center mt-5 bg-light">
                  <p className="pt-5">Your reservations for this week:</p>

                  <div className="mt-3 d-flex justify-content-center">
                    {getCurrentWeekServices().length > 0 ? (
                      <div className="border rounded shadow" style={{ backgroundColor: 'white' }}>
                        {getCurrentWeekServices().map((booking) => (
                          <tr key={booking.id}>
                            {modifiedHeaders2.map((header) => (
                              <td className="p-3 text-center" key={`${booking.id}-${header}`}>
                                {header === 'Service name' && (
                                  <div>
                                    <b>{booking.serviceName}</b>
                                  </div>
                                )}
                                {header === 'Start time' && (
                                  <div>{formatDateLong(booking.startTime)}</div>
                                )}
                                {header === 'End time' && (
                                  <div>{formatDateLong(booking.endTime)}</div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="text-center shadow p-3 border border-danger rounded mb-2"
                        style={{ backgroundColor: 'white' }}
                      >
                        You have no reservation for any service in this week
                      </div>
                    )}
                  </div>

                  <div className="d-flex p-3">
                    <Button className="m-3" onClick={handleShowAllServices}>
                      Every booked service
                    </Button>
                  </div>

                  {showAllServices && (
                    <div className="d-flex justify-content-center mb-5">
                      {filteredBookedServices.length > 0 ? (
                        <div className="border rounded shadow" style={{ backgroundColor: 'white' }}>
                          {filteredBookedServices.map((booking) => (
                            <tr>
                              {modifiedHeaders2.map((header) => (
                                <td className="p-3 text-center">
                                  {header === 'Service name' && (
                                    <div>
                                      <div>
                                        <b>{booking.serviceName}</b>
                                      </div>
                                    </div>
                                  )}
                                  {header === 'Start time' && (
                                    <div>
                                      <div>{formatDateLong(booking.startTime)}</div>
                                    </div>
                                  )}
                                  {header === 'End time' && (
                                    <div>
                                      <div>{formatDateLong(booking.endTime)}</div>
                                    </div>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </div>
                      ) : (
                        <div
                          className="text-center shadow p-3 border border-danger rounded"
                          style={{ backgroundColor: 'white' }}
                        >
                          You have no reservation for any service
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
