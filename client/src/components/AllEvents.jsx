import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import EventCard from './EventCard';
import ScrollToTopButton from './ScrollToTopButton';

function AllEvents({ events }) {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const [month, day] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
    return `${day} ${month}`;
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  return (
    <div>
      <div className="container text-left p-3">
        <Row xs={1} md={2} lg={3} xl={3}>
          {events.map((event) => (
            <Col className="p-3" key={event.name}>
              <EventCard
                name={event.name}
                startDate={formatDate(event.startTime)}
                endDate={formatDate(event.endTime)}
                startTime={formatTime(event.startTime)}
                endTime={formatTime(event.endTime)}
                eventImg={event.eventImg}
                availableSeats={event.availableSeats}
                details={event.details}
              />
            </Col>
          ))}
        </Row>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

AllEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default AllEvents;
