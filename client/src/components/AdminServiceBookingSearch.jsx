import { Container, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdCancel } from 'react-icons/md';

function AdminServiceBookingSearch({
  onSearch,
  searchId,
  setSearchId,
  searchFirstName,
  setSearchFirstName,
  searchLastName,
  setSearchLastName,
  searchServiceName,
  setSearchServiceName,
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
              onSearch(event.target.value, 'serviceBookingId');
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
              onSearch(event.target.value, 'firstName');
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
              onSearch(event.target.value, 'lastName');
              setSearchLastName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={3} xxl={2}>
          <div className="fw-bold">Service name</div>
          <Form.Control
            type="text"
            placeholder="By Service Name"
            value={searchServiceName}
            onChange={(event) => {
              onSearch(event.target.value, 'serviceName');
              setSearchServiceName(event.target.value);
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
              onSearch(new Date(event.target.value), 'startTime');
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
              onSearch(new Date(event.target.value), 'endTime');
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

export default AdminServiceBookingSearch;

AdminServiceBookingSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchId: PropTypes.string.isRequired,
  setSearchId: PropTypes.func.isRequired,
  searchFirstName: PropTypes.string.isRequired,
  setSearchFirstName: PropTypes.func.isRequired,
  searchLastName: PropTypes.string.isRequired,
  setSearchLastName: PropTypes.func.isRequired,
  searchServiceName: PropTypes.string.isRequired,
  setSearchServiceName: PropTypes.func.isRequired,
  searchStartTime: PropTypes.string.isRequired,
  setSearchStartTime: PropTypes.func.isRequired,
  searchEndTime: PropTypes.string.isRequired,
  setSearchEndTime: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
