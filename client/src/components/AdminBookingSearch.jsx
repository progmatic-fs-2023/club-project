import { Container, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdCancel } from 'react-icons/md';

function AdminBookingSearch({
  onSearch,
  searchId,
  setSearchId,
  searchFirstName,
  setSearchFirstName,
  searchLastName,
  setSearchLastName,
  searchEventName,
  setSearchEventName,
  searchStartTime,
  setSearchStartTime,
  searchEndTime,
  setSearchEndTime,
  resetSearch,
}) {
  return (
    <Container className="shadow-sm bg-white p-3 my-4 rounded">
      <Row className="align-items-end">
        <Col xs={6} md={2}>
          <div className="fw-bold">Id</div>
          <Form.Control
            type="text"
            placeholder="By ID"
            value={searchId}
            onChange={(event) => {
              onSearch(event.target.value, 'bookingId');
              setSearchId(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">First name</div>
          <Form.Control
            type="text"
            placeholder="By First Name"
            value={searchFirstName}
            onChange={(event) => {
              onSearch(event.target.value, 'first_name');
              setSearchFirstName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">Last name</div>
          <Form.Control
            type="text"
            placeholder="By Last Name"
            value={searchLastName}
            onChange={(event) => {
              onSearch(event.target.value, 'last_name');
              setSearchLastName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">Event name</div>
          <Form.Control
            type="text"
            placeholder="By Event Name"
            value={searchEventName}
            onChange={(event) => {
              onSearch(event.target.value, 'event_name');
              setSearchEventName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">Start Time</div>
          <Form.Control
            type="date"
            placeholder="By Start Time"
            value={searchStartTime}
            onChange={(event) => {
              onSearch(new Date(event.target.value), 'start_time');
              setSearchStartTime(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">End Time</div>
          <Form.Control
            type="date"
            placeholder="By End Time"
            value={searchEndTime}
            onChange={(event) => {
              onSearch(new Date(event.target.value), 'end_time');
              setSearchEndTime(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="d-flex align-items-center p-1">
            <button
              type="button"
              className="btn btn-danger fs-6 px-3 my-1 d-flex align-items-center"
              onClick={resetSearch}
            >
              <MdCancel className="me-2" />
              Reset
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminBookingSearch;

AdminBookingSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchId: PropTypes.string.isRequired,
  setSearchId: PropTypes.func.isRequired,
  searchFirstName: PropTypes.string.isRequired,
  setSearchFirstName: PropTypes.func.isRequired,
  searchLastName: PropTypes.string.isRequired,
  setSearchLastName: PropTypes.func.isRequired,
  searchEventName: PropTypes.string.isRequired,
  setSearchEventName: PropTypes.func.isRequired,
  searchStartTime: PropTypes.string.isRequired,
  setSearchStartTime: PropTypes.func.isRequired,
  searchEndTime: PropTypes.string.isRequired,
  setSearchEndTime: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
