import PropTypes from 'prop-types';

function EventCard({
  name,
  startDate,
  startTime,
  unformattedEndTime,
  endTime,
  eventImg,
  modifiedAvailableSeats,
  details,
}) {
  const isSoldOut = Number(modifiedAvailableSeats) === 0;
  const today = new Date();
  const isExpiredEvent = new Date(unformattedEndTime) <= today;

  return (
    <div className="container_foto hover-overlay hover-zoom position-relative overflow-hidden">
      {isExpiredEvent && (
        <div className="bg-white bg-opacity-50 text-primary z-2 w-100 h-100 d-flex justify-content-center align-items-center fs-2 fw-bold position-absolute top-0 left-0">
          EXPIRED
        </div>
      )}
      {isSoldOut && !isExpiredEvent && (
        <div className="bg-white bg-opacity-50 text-primary z-2 w-100 h-100 d-flex justify-content-center align-items-center fs-2 fw-bold position-absolute top-0 left-0">
          SOLD OUT
        </div>
      )}
      <div className="ver_mas bg-primary position-absolute w-100 bottom-0 d-flex align-items-center justify-content-center">
        <span className="lnr lnr-eye position-relative fs-1 text-info" />
      </div>
      <div className="z-1 bg-primary position-absolute p-2 m-2 rounded-bottom text-white josefin-font d-flex flex-column align-items-center">
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
  unformattedEndTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  modifiedAvailableSeats: PropTypes.number.isRequired,
  eventImg: PropTypes.string.isRequired,
};

export default EventCard;
