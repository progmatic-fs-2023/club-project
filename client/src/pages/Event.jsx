import { useParams, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useAppContext } from '../contexts/AppContext';

function Event() {
  const { events } = useAppContext();

  const { eventName } = useParams();

  const event = events.find((item) => item.name === eventName);

  let eventPrev = [];

  if (event.id === 1) {
    eventPrev = events.find((item) => item.id === events.length);
  } else {
    eventPrev = events.find((item) => item.id === event.id - 1);
  }

  let eventNext = [];

  if (event.id === events.length) {
    eventNext = events.find((item) => item.id === 1);
  } else {
    eventNext = events.find((item) => item.id === event.id + 1);
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

  const startDate = formatDate(event.starttime);
  const startTime = formatTime(event.starttime);
  const endTime = formatTime(event.endtime);

  return (
    <div className="d-flex flex-column">
      <Image className="header-image w-100 object-fit-cover" src={event.headerimg} />
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-5">
        <Image className="w-25 mx-3" src={event.eventimg} rounded />
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
              {event.moredetails}
            </Tab>
            <Tab eventKey="moreDetails1" title="More details">
              {event.moredetails}
            </Tab>
            <Tab eventKey="moreDetails2" title="More details">
              {event.moredetails}
            </Tab>
          </Tabs>
          <div className="p-3 d-flex justify-content-center">IDŐPONT FOGLALÁS</div>
          <Nav className="d-flex justify-content-evenly">
            <Nav.Link as={NavLink} to={`/events/${eventPrev.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Prev</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events">
              <Button className="btn-primary fs-5 max-vw-25">Events</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to={`/events/${eventNext.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Next</Button>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Event;
