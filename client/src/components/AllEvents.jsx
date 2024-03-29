import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import EventCard from './EventCard';
import ScrollToTopButton from './ScrollToTopButton';
import { formatTime, formatDateShort } from '../utils/dateUtils';

function AllEvents({ events }) {
  return (
    <div>
      <div className="container text-left p-3">
        <Row
          xs={1}
          md={2}
          lg={3}
          xl={3}
          className="d-flex justify-content-center justify-content-md-start"
        >
          {events.map((event) => (
            <Col xs={11} className="p-3" key={event.name}>
              <NavLink to={event.slugName}>
                <EventCard
                  name={event.name}
                  startDate={formatDateShort(event.startTime)}
                  endDate={formatDateShort(event.endTime)}
                  unformattedEndTime={event.endTime}
                  startTime={formatTime(event.startTime)}
                  endTime={formatTime(event.endTime)}
                  eventImg={event.eventImg}
                  availableSeats={event.availableSeats}
                  modifiedAvailableSeats={event.modifiedAvailableSeats}
                  details={event.details}
                />
              </NavLink>
            </Col>
          ))}
        </Row>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

AllEvents.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  ).isRequired,
};

export default AllEvents;
