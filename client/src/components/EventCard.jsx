import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function EventCard({ name, startDate, startTime, endTime, eventImg, availableSeats, details }) {
  const isSoldOut = availableSeats === 0;

  return (
    <div
      className={`container_foto hover-overlay hover-zoom position-relative overflow-hidden ${
        isSoldOut ? 'sold-out' : ''
      }`}
    >
      {isSoldOut && (
        <div className="sold-out-overlay w-100 h-100 d-flex justify-content-center align-items-center fs-2 fw-bold position-absolute top-0 left-0">
          SOLD OUT
        </div>
      )}
      <NavLink to={name}>
        <div className="ver_mas position-absolute w-100 bottom-0 d-flex align-items-center justify-content-center">
          <span className="lnr lnr-eye position-relative fs-1" />
        </div>
      </NavLink>
      <div
        className="date-time-overlay position-absolute p-2 m-2 rounded-bottom text-white"
        style={{ fontFamily: 'Josefin Sans' }}
      >
        <div className="fs-3 text-uppercase">{startDate}</div>
        <div className="fs-6">
          {startTime} - {endTime}
        </div>
      </div>
      <article className="p-3 position-absolute bottom-0">
        <h2 className="fs-5 border-bottom border-1 pb-1 border-white text-white fw-bold text-uppercase">
          {name}
        </h2>
        <h4 className={`fs-6 fw-normal text-white ${isSoldOut ? 'sold-out-text' : ''}`}>
          {details}
        </h4>
      </article>
      <img src={eventImg} alt="event" className="w-100 top-0 left-0" />
    </div>
  );
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  availableSeats: PropTypes.string.isRequired,
  eventImg: PropTypes.string.isRequired,
};

export default EventCard;
