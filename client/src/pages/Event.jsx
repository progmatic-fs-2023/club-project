import { useParams, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

function Event({ eventsList }) {
  const { eventName } = useParams();

  const event = eventsList.find((item) => item.name === eventName);

  let eventPrev = [];

  if (event.id === 1) {
    eventPrev = eventsList.find((item) => item.id === eventsList.length);
  } else {
    eventPrev = eventsList.find((item) => item.id === event.id - 1);
  }

  let eventNext = [];

  if (event.id === eventsList.length) {
    eventNext = eventsList.find((item) => item.id === 1);
  } else {
    eventNext = eventsList.find((item) => item.id === event.id + 1);
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

  return (
    <>
      <Image
        className="w-100"
        style={{ height: '250px', objectFit: 'cover' }}
        src={event.headerImg}
        fluid
      />
      <div className="bg-secondary bg-opacity-25 p-5 d-flex flex-column align-items-center">
        <h1 className="fw-bold" style={{ color: '#0d2241', borderBottom: '5px solid #a5a51e' }}>
          {event.name}{' '}
        </h1>
        <div className="d-flex flex-column align-items-center" style={{ color: '#0d2241' }}>
          <div className="fs-3 fw-bold text-uppercase">{startDate}</div>
          <div className="fs-6 fw-bold">
            {startTime} - {endTime}
          </div>
        </div>
        <div className="d-flex justify-content-evenly p-3">
          <Image
            className="w-25 h-25 mx-3"
            style={{ objectFit: 'cover' }}
            src={event.eventImg}
            fluid
            rounded
          />
          <div className="px-3">
            {/* style={{ backgroundColor: '#0d2241', color: "#a5a51e" }} */}
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
            <div className="p-3 d-flex justify-content-center">IDŐPONT FOGLALÁS</div>
            <Nav className="d-flex justify-content-evenly">
              <Nav.Link as={NavLink} to={`/events/${eventPrev.name}`}>
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Prev
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/events">
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Events
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to={`/events/${eventNext.name}`}>
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Next
                </Button>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}

Event.propTypes = {
  eventsList: PropTypes.string.isRequired,
};

export default Event;