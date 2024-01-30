import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../constants';

function CardCarousel2() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events`);
        const result = await response.json();
        const currentDate = new Date();
        const filteredEvents = result.filter((event) => new Date(event.endTime) >= currentDate);

        const sortedEvents = [...filteredEvents].sort(
          (a, b) => new Date(a.startTime) - new Date(b.startTime),
        );

        setEvents(sortedEvents);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="text-center">
      <h2 className="bg-dark text-light-gray pt-5 yeseva-font m-0">Upcoming events</h2>
      <Row
        xs={1}
        md={2}
        lg={2}
        xl={4}
        className="p-5 bg-dark d-flex justify-content-center w-100 m-0"
      >
        {events.map((event) => (
          <Col xs={10} md={6} lg={3} xl={3} xxl={2} key={event.id} className="my-3">
            <div className="h-100 d-flex flex-column">
              <NavLink to={`events/${event.slugName}`}>
                <Card.Img variant="top main-page-event" src={event.eventImg} />
              </NavLink>
              <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                <Card.Title className="m-2 text-light-gray text-start">{event.name}</Card.Title>
                <NavLink to={`events/${event.slugName}`}>
                  <button type="button" className="btn btn-secondary m-2 ">
                    MORE DETAILS
                  </button>
                </NavLink>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardCarousel2;
